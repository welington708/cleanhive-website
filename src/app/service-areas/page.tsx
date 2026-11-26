import type { Metadata } from "next";
import Link from "next/link";
import { GoogleMap } from "@/components/GoogleMap";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "See where Clean Hive offers home and business cleaning across Central Florida.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero eyebrow="Service Areas" title="Proudly Serving Central Florida" description="From Orlando to Palm Coast, we bring reliable cleaning to homes and businesses throughout the area." cta={false} compact />
      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <article key={area.city} className="card p-7">
                <p className="eyebrow">{area.county}</p>
                <h2 className="mt-3 text-2xl font-bold">{area.city}</h2>
                <Link href="#quote-form" className="mt-5 inline-block font-bold text-brand">Get a Quote for {area.city} →</Link>
              </article>
            ))}
          </div>
          <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
            <GoogleMap className="min-h-[520px]" />
            <div id="quote-form" className="scroll-mt-28">
              <QuoteForm eyebrow="Free quote" title="Ready for a Cleaner Space?" description="Tell us what you need, and we&apos;ll send you a free quote." buttonLabel="Get My Free Quote" showNotes={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
