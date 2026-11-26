import type { Metadata } from "next";
import { GoogleMap } from "@/components/GoogleMap";
import { QuoteForm } from "@/components/QuoteForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free cleaning estimate from CleanHive Company in Central Florida.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Clean Hive Company" description="Get a free quote or ask us any questions. We're here to help you achieve a spotless environment." cta={false} compact />
      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="grid items-stretch gap-10 lg:grid-cols-2">
            <aside>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold">Ready to experience the Clean Hive difference?</h2>
            <p className="mt-4 leading-7 text-slate-600">Contact us today to schedule your cleaning service or request a free quote.</p>
            <div className="mt-7 space-y-5">
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
              <p className="eyebrow">Address</p>
              <p className="mt-2 text-lg font-bold">{siteConfig.address}</p>
            </div>
            <div className="card p-7">
              <p className="eyebrow">Business Hours</p>
              <p className="mt-2 text-lg font-bold">Monday – Saturday</p>
              <p className="mt-1 text-slate-600">8:00 AM – 6:00 PM</p>
            </div>
            </div>
            </aside>
            <GoogleMap className="min-h-[520px]" />
          </div>
          <div id="quote-form" className="mx-auto mt-12 max-w-4xl scroll-mt-28">
              <QuoteForm eyebrow="Contact form" title="Send Us a Message" description="Complete the form and we'll follow up with your free quote." buttonLabel="Send My Request" showNotes={false} />
          </div>
        </div>
      </section>
    </>
  );
}
