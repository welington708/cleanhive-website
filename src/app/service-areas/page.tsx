import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Explore CleanHive Company's cleaning service coverage across Orlando, Apopka, Sanford, and Central Florida.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero eyebrow="Service Areas" title="Serving Central Florida & Beyond" description="Clean Hive Company proudly serves residential and commercial clients across Central Florida, from Orlando to the beautiful coastal towns of Daytona Beach and Palm Coast." cta={false} compact />
      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <article key={area.city} className="card p-7">
                <p className="eyebrow">{area.county}</p>
                <h2 className="mt-3 text-2xl font-bold">{area.city}</h2>
                <Link href="#quote-form" className="mt-5 inline-block font-bold text-brand">Get a Quote in {area.city} →</Link>
              </article>
            ))}
          </div>
          <div id="quote-form" className="mx-auto mt-14 max-w-4xl scroll-mt-28">
            <QuoteForm eyebrow="Free quote" title="Book Your Clean Today" description="Fill out the form below and we'll get back to you with a free quote." buttonLabel="Get My Free Quote" showNotes={false} />
          </div>
        </div>
      </section>
    </>
  );
}
