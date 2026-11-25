"use client";

import { FormEvent, useState } from "react";
import { services, siteConfig } from "@/lib/site";

type FormState = "idle" | "sending" | "success" | "error";

export function QuoteForm({ compact = false, defaultService = "" }: { compact?: boolean; defaultService?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "We could not send your request.");
      setState("success");
      setMessage(result.message || "Your request was sent successfully.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not send your request.");
    }
  }

  return (
    <div className={`rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 ${compact ? "p-6" : "p-6 md:p-8"}`}>
      <div className="mb-6 border-l-4 border-gold pl-4">
        <p className="eyebrow">Free estimate</p>
        <h2 className="mt-1 text-2xl font-bold text-ink">Tell us about your space</h2>
        <p className="mt-2 text-sm text-slate-600">We will follow up using the contact details you provide.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company website</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
          <Field label="Full name" name="name" placeholder="Your full name" autoComplete="name" required />
          <Field label="Phone" name="phone" type="tel" placeholder="(407) 555-0123" autoComplete="tel" required />
        </div>
        <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
          <Field label="Email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          <Field label="Property address or city" name="location" placeholder="Orlando, FL" autoComplete="street-address" required />
        </div>

        <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Service
            <select name="service" defaultValue={defaultService} required className="form-control">
              <option value="" disabled>Select a service</option>
              {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
            </select>
          </label>
          <Field label="Approx. square footage" name="squareFeet" type="number" placeholder="Optional" min="1" max="100000" />
        </div>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Notes <span className="font-normal text-slate-500">(optional)</span>
          <textarea name="notes" rows={compact ? 3 : 4} maxLength={1500} className="form-control resize-y" placeholder="Timing, rooms, priorities, or anything else we should know." />
        </label>

        <label className="flex items-start gap-3 text-xs leading-5 text-slate-600">
          <input name="consent" value="accepted" type="checkbox" required className="mt-1 h-4 w-4 accent-brand" />
          <span>I agree that CleanHive may contact me about this estimate. See the <a className="font-semibold text-brand underline" href="/privacy-policy">Privacy Policy</a>.</span>
        </label>

        <button type="submit" disabled={state === "sending"} className="button-gold min-h-12 justify-center disabled:cursor-wait disabled:opacity-70">
          {state === "sending" ? "Sending…" : "Request my free estimate"}
        </button>

        {message && (
          <div role="status" className={`rounded-xl px-4 py-3 text-sm ${state === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"}`}>
            {message} {state === "error" && <>You can also call <a className="font-bold underline" href={`tel:${siteConfig.testPhoneHref}`}>{siteConfig.testPhoneDisplay}</a>.</>}
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
