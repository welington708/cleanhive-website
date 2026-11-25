import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Explore CleanHive Company's cleaning service coverage across Orlando, Apopka, Sanford, and Central Florida.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero eyebrow="Service Areas" title="Proudly serving Central Florida" description="From inland communities to the coast, availability is confirmed according to the property and schedule." />
      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <article key={area.city} className="card p-7">
                <p className="eyebrow">{area.county}</p>
                <h2 className="mt-3 text-2xl font-bold">{area.city}</h2>
                <p className="mt-3 leading-7 text-slate-600">Residential, moving, turnover, and commercial cleaning may be available in this area.</p>
                <Link href={`/contact?city=${encodeURIComponent(area.city)}#quote-form`} className="mt-5 inline-block font-bold text-brand">Check availability →</Link>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-brand p-8 text-white md:p-12">
            <p className="eyebrow text-gold">Not sure if we cover your address?</p>
            <h2 className="mt-3 text-3xl font-bold">Send us the city or ZIP code.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">We will confirm travel availability before scheduling or quoting the service.</p>
            <Link href="/contact#quote-form" className="button-gold mt-6">Ask about your area</Link>
          </div>
        </div>
      </section>
    </>
  );
}
