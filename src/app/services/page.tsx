import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description: "Explore residential, deep, move-in, move-out, commercial, and apartment turnover cleaning services in Central Florida.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Cleaning Services"
        description="Comprehensive cleaning solutions tailored to your specific needs, delivered by our team of trained professionals."
        cta={false}
        compact
      />
      <section className="section-pad bg-cream">
        <div className="page-shell space-y-8">
          {services.map((service, index) => (
            <article id={service.slug} key={service.slug} className="card grid scroll-mt-28 overflow-hidden lg:grid-cols-2">
              <div className={`relative min-h-72 ${index % 2 ? "lg:order-2" : ""}`}>
                <Image src={service.image} alt={`${service.title} service`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h2 className="text-3xl font-bold md:text-4xl">{service.slug === "apartment-turnover" ? "Apartment Turnover Cleaning" : service.title}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{service.description}</p>
                <Link href="/contact#quote-form" className="button-gold mt-7 self-start">Get a quote</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
