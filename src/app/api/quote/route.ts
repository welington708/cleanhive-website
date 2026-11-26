import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.email().max(200),
  location: z.string().trim().min(2).max(250),
  service: z.string().trim().min(2).max(100),
  preferredDate: z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal("")).default(""),
  squareFeet: z.union([z.string().trim().max(10), z.number()]).optional(),
  notes: z.string().trim().max(1500).optional().default(""),
  consent: z.literal("accepted"),
  company: z.string().max(0).optional().default(""),
});

const attempts = new Map<string, { count: number; startedAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || now - entry.startedAt > WINDOW_MS) {
    attempts.set(key, { count: 1, startedAt: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientKey = forwarded || "local";
  if (isRateLimited(clientKey)) return NextResponse.json({ message: "You've sent several requests. Please wait a few minutes and try again." }, { status: 429 });

  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Something went wrong. Please refresh the page and try again." }, { status: 400 }); }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
  if (parsed.data.company) return NextResponse.json({ message: "Request received." });

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, QUOTE_FROM_EMAIL, QUOTE_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !QUOTE_FROM_EMAIL || !QUOTE_TO_EMAIL) {
    console.error("Quote email is not configured. Copy .env.example to .env.local and set the SMTP values.");
    return NextResponse.json({ message: "Online requests aren't available right now. Please call us instead." }, { status: 503 });
  }

  const quote = parsed.data;
  const requestId = crypto.randomUUID();
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const intro = "Olá! Uma nova solicitação de cotação acaba de chegar pelo site da Clean Hive Company. Entre em contato com o cliente o quanto antes.";
  const squareFeetLabel = quote.squareFeet ? `${quote.squareFeet} sq. ft.` : "Não informado";
  const [preferredYear, preferredMonth, preferredDay] = quote.preferredDate.split("-");
  const preferredDateLabel = preferredYear && preferredMonth && preferredDay ? `${preferredMonth}/${preferredDay}/${preferredYear}` : "Não informada";
  const lines = [
    "NOVA SOLICITAÇÃO DE COTAÇÃO", "", intro, "", `Nome: ${quote.name}`, `Telefone: ${quote.phone}`,
    `E-mail: ${quote.email}`, `Endereço do imóvel: ${quote.location}`, `Serviço: ${quote.service}`,
    `Data preferencial para a limpeza: ${preferredDateLabel}`,
    `Área aproximada: ${squareFeetLabel}`, `Observações: ${quote.notes || "Nenhuma"}`,
    "", `ID da solicitação: ${requestId}`,
  ];

  const emailRows = [
    ["Nome", quote.name],
    ["Telefone", quote.phone],
    ["E-mail", quote.email],
    ["Endereço do imóvel", quote.location],
    ["Serviço", quote.service],
    ["Data preferencial para a limpeza", preferredDateLabel],
    ["Área aproximada", squareFeetLabel],
    ["Observações", quote.notes || "Nenhuma"],
  ].map(([label, value], index) => `<tr style="background:${index % 2 ? "#f8fafc" : "#ffffff"}"><td style="width:34%;padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#475569;font-weight:700">${label}</td><td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#1a1a2e">${escapeHtml(value)}</td></tr>`).join("");

  try {
    await transport.sendMail({
      from: QUOTE_FROM_EMAIL,
      to: QUOTE_TO_EMAIL,
      replyTo: quote.email,
      subject: `Nova solicitação de cotação | ${quote.service} | ${quote.location}`,
      text: lines.join("\n"),
      html: `<div style="margin:0;background:#f1f5f9;padding:32px 16px;font-family:Arial,sans-serif;line-height:1.6;color:#1a1a2e"><div style="max-width:680px;margin:0 auto;overflow:hidden;border-radius:18px;background:#ffffff;box-shadow:0 10px 30px rgba(15,23,42,.10)"><div style="background:#004961;padding:26px 30px"><p style="margin:0 0 6px;color:#eab75e;font-size:12px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase">Clean Hive Company</p><h1 style="margin:0;color:#ffffff;font-size:26px;line-height:1.25">Nova solicitação de cotação</h1></div><div style="padding:28px 30px"><div style="margin-bottom:24px;border-left:4px solid #eab75e;border-radius:8px;background:#fff8e8;padding:16px 18px"><p style="margin:0;color:#1a1a2e;font-size:16px"><strong>Olá!</strong> Uma nova solicitação de cotação acaba de chegar pelo site da Clean Hive Company. <strong>Entre em contato com o cliente o quanto antes.</strong></p></div><h2 style="margin:0 0 14px;color:#004961;font-size:19px">Dados do cliente</h2><table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #e5e7eb;border-radius:10px;border-collapse:separate;border-spacing:0;overflow:hidden">${emailRows}</table><p style="margin:24px 0 0;color:#64748b;font-size:12px">ID da solicitação: ${requestId}</p></div></div></div>`,
    });
    return NextResponse.json({ message: "Thanks! We received your request and will be in touch soon." });
  } catch (error) {
    console.error(`Quote email failed (${requestId})`, error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ message: "We couldn't send your request right now. Please call us instead." }, { status: 502 });
  }
}
