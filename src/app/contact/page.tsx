import type { Metadata } from "next";
import { GoogleMap } from "@/components/GoogleMap";
import { QuoteForm } from "@/components/QuoteForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Clean Hive Company or request a free cleaning quote in Central Florida.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Clean Hive Company" description="Need a free quote or have questions? We'd love to hear from you!" cta={false} compact />
      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <aside>
              <p className="eyebrow">Get in Touch</p>
              <h2 className="mt-3 text-3xl font-bold">Let&apos;s make your space feel fresh again.</h2>
              <p className="mt-4 leading-7 text-slate-600">Call, email, or fill out the form. We&apos;ll be happy to answer your questions and help you get started.</p>
              <div className="mt-7 space-y-5">
                <div className="card p-7">
                  <p className="eyebrow">Phone</p>
                  <a className="mt-2 block text-2xl font-bold text-brand" href={`tel:${siteConfig.testPhoneHref}`}>{siteConfig.testPhoneDisplay}</a>
                  <p className="mt-2 text-sm text-slate-500">Temporary test number. We&apos;ll add the business line before launch.</p>
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
                  <p className="mt-2 text-lg font-bold">Monday – Friday</p>
                  <p className="mt-1 text-slate-600">8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </aside>

            <div id="quote-form" className="scroll-mt-28">
              <QuoteForm eyebrow="Contact form" title="How Can We Help?" description="Share a few details, and we&apos;ll get back to you with a free quote." buttonLabel="Send My Request" showNotes={false} />
            </div>
          </div>

          <GoogleMap className="mt-12 min-h-[440px]" />
        </div>
      </section>
    </>
  );
}
