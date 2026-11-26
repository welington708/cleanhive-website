"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { services, siteConfig } from "@/lib/site";

type FormState = "idle" | "sending" | "success" | "error" | "preview";

export function QuoteForm({
  compact = false,
  defaultService = "",
  eyebrow = "Free quote",
  title = "Tell Us What You Need",
  description = "Share a few details, and we'll get back to you soon.",
  buttonLabel = "Get My Free Quote",
  showNotes = true,
}: {
  compact?: boolean;
  defaultService?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  showNotes?: boolean;
}) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setState("idle");
      setMessage("Please fill out all required fields and check the contact permission box.");
      return;
    }

    setState("sending");
    setMessage("");
    const payload = Object.fromEntries(new FormData(form).entries());

    if (process.env.NEXT_PUBLIC_STATIC_PREVIEW === "true") {
      const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
      if (!formEndpoint) {
        setState("preview");
        setMessage("This preview is for layout testing. Email delivery will be turned on when the site moves to its final host.");
        return;
      }

      try {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...payload,
            _subject: "New CleanHive estimate request",
            _template: "table",
            _url: window.location.href,
          }),
        });
        const result = (await response.json()) as { message?: string; success?: boolean | string };
        if (!response.ok || result.success === false || result.success === "false") {
          throw new Error(result.message || "We couldn't send your request.");
        }
        setState("success");
        setMessage(result.message || "Thanks! We received your request and will be in touch soon.");
        form.reset();
      } catch (error) {
        setState("error");
        setMessage(error instanceof Error ? error.message : "We couldn't send your request.");
      }
      return;
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "We couldn't send your request.");
      setState("success");
      setMessage(result.message || "Thanks! We received your request and will be in touch soon.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We couldn't send your request.");
    }
  }

  return (
    <div className={`rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 ${compact ? "p-6" : "p-6 md:p-8"}`}>
      <div className="mb-6 border-l-4 border-gold pl-4">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-1 text-2xl font-bold text-ink">{title}</h2>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company website</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
          <Field label="Full Name" name="name" placeholder="Your full name" autoComplete="name" required />
          <Field label="Phone Number" name="phone" type="tel" placeholder="(407) 555-0123" autoComplete="tel" required />
        </div>
        <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
          <Field label="Email Address" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          <Field label="Property Address" name="location" placeholder="123 Main St, Orlando, FL" autoComplete="street-address" required />
        </div>

        <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Service Needed
            <select name="service" defaultValue={defaultService} required className="form-control">
              <option value="" disabled>Select a service</option>
              {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
            </select>
          </label>
          <Field label="Approximate Square Footage" name="squareFeet" type="number" placeholder="Optional" min="1" max="100000" />
        </div>

        {showNotes && (
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Anything Else We Should Know? <span className="font-normal text-slate-500">(optional)</span>
            <textarea name="notes" rows={compact ? 3 : 4} maxLength={1500} className="form-control resize-y" placeholder="Tell us about timing, rooms, priorities, or special requests." />
          </label>
        )}

        <label className="flex items-start gap-3 text-xs leading-5 text-slate-600">
          <input name="consent" value="accepted" type="checkbox" required className="mt-1 h-4 w-4 accent-brand" />
          <span>I agree to be contacted about my quote request. See our <Link className="font-semibold text-brand underline" href="/privacy-policy">Privacy Policy</Link>.</span>
        </label>

        <button type="submit" disabled={state === "sending"} className="button-gold min-h-12 justify-center disabled:cursor-wait disabled:opacity-70">
          {state === "sending" ? "Sending…" : buttonLabel}
        </button>

        {message && (
          <div role="status" className={`rounded-xl px-4 py-3 text-sm ${state === "success" ? "bg-emerald-50 text-emerald-800" : state === "preview" ? "bg-sky-50 text-sky-900" : "bg-red-50 text-red-800"}`}>
            {message} {state === "error" && <> You can also call <a className="font-bold underline" href={`tel:${siteConfig.testPhoneHref}`}>{siteConfig.testPhoneDisplay}</a>.</>}
          </div>
        )}
      </form>
    </div>
  );
}

function Field({ label, name, type = "text", ...props }: { label: string; name: string; type?: string; [key: string]: string | boolean | undefined }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <input name={name} type={type} className="form-control" {...props} />
    </label>
  );
}
