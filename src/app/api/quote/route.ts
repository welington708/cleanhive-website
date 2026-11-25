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
  if (isRateLimited(clientKey)) return NextResponse.json({ message: "Too many attempts. Please wait a few minutes and try again." }, { status: 429 });

  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Please review the required fields and try again." }, { status: 400 });
  if (parsed.data.company) return NextResponse.json({ message: "Request received." });

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, QUOTE_FROM_EMAIL, QUOTE_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !QUOTE_FROM_EMAIL || !QUOTE_TO_EMAIL) {
    console.error("Quote email is not configured. Copy .env.example to .env.local and set the SMTP values.");
    return NextResponse.json({ message: "Email delivery is not configured yet. Please call us instead." }, { status: 503 });
  }

  const quote = parsed.data;
  const requestId = crypto.randomUUID();
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const lines = [
    `New CleanHive estimate request (${requestId})`, "", `Name: ${quote.name}`, `Phone: ${quote.phone}`,
    `Email: ${quote.email}`, `Property: ${quote.location}`, `Service: ${quote.service}`,
    `Approx. sq. ft.: ${quote.squareFeet || "Not provided"}`, "", "Notes:", quote.notes || "None",
  ];

  try {
    await transport.sendMail({
      from: QUOTE_FROM_EMAIL,
      to: QUOTE_TO_EMAIL,
      replyTo: quote.email,
      subject: `New Cleaning Quote — ${quote.service} — ${quote.location}`,
      text: lines.join("\n"),
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#1a1a2e"><h1 style="color:#02566a">New CleanHive estimate request</h1><p><strong>Request ID:</strong> ${requestId}</p><table cellpadding="8" cellspacing="0" style="border-collapse:collapse"><tr><td><strong>Name</strong></td><td>${escapeHtml(quote.name)}</td></tr><tr><td><strong>Phone</strong></td><td>${escapeHtml(quote.phone)}</td></tr><tr><td><strong>Email</strong></td><td>${escapeHtml(quote.email)}</td></tr><tr><td><strong>Property</strong></td><td>${escapeHtml(quote.location)}</td></tr><tr><td><strong>Service</strong></td><td>${escapeHtml(quote.service)}</td></tr><tr><td><strong>Approx. sq. ft.</strong></td><td>${escapeHtml(String(quote.squareFeet || "Not provided"))}</td></tr></table><h2 style="color:#02566a">Notes</h2><p>${escapeHtml(quote.notes || "None").replace(/\n/g, "<br>")}</p></div>`,
    });
    return NextResponse.json({ message: "Thank you. Your estimate request was sent successfully." });
  } catch (error) {
    console.error(`Quote email failed (${requestId})`, error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ message: "We could not send your request right now. Please call us instead." }, { status: 502 });
  }
}
