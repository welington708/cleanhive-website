import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free cleaning estimate from CleanHive Company in Central Florida.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string; city?: string }> }) {
  const params = await searchParams;
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your space" description="Tell us what you need, where the property is, and the best way to reach you." cta={false} />
      <section className="section-pad bg-cream">
        <div className="page-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <aside className="space-y-5">
            <div className="card p-7">
              <p className="eyebrow">Phone</p>
              <a className="mt-2 block text-2xl font-bold text-brand" href={`tel:${siteConfig.testPhoneHref}`}>{siteConfig.testPhoneDisplay}</a>
              <p className="mt-2 text-sm text-slate-500">Temporary test line for local development.</p>
            </div>
            <div className="card p-7">
              <p className="eyebrow">Email</p>
              <a className="mt-2 block break-all text-lg font-bold text-brand" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
            <div className="card p-7">
              <p className="eyebrow">Business address</p>
              <p className="mt-2 text-lg font-bold">{siteConfig.address}</p>
              <p className="mt-2 text-sm text-slate-500">Contact us before visiting. On-site service is not advertised at this address.</p>
            </div>
          </aside>
          <div id="quote-form" className="scroll-mt-28">
            {params.city && <p className="mb-4 rounded-xl bg-white px-4 py-3 text-sm text-slate-600">Area selected: <strong>{params.city}</strong></p>}
            <QuoteForm defaultService={params.service || ""} />
          </div>
        </div>
      </section>
    </>
  );
}
