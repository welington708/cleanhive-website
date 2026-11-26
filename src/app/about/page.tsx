import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the local team behind Clean Hive Company's reliable, personalized cleaning service.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="About Clean Hive Company" cta={false} compact />
      <section className="section-pad bg-white">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-brand shadow-xl"><Image src={assetPath("/images/home/about-cleanhive.jpg")} alt="About Clean Hive Company" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
          <div>
            <p className="text-lg leading-8 text-slate-600">Clean Hive Company is a local cleaning business that has served Central Florida for three years. We help homeowners, renters, and businesses enjoy cleaner, healthier spaces with service built around their needs.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Our trained team takes pride in the details. Whether you need routine cleaning, a deep clean, or help before or after a move, we&apos;re ready to make your space feel fresh and comfortable again.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">We believe great service starts with trust and clear communication. That&apos;s why we keep the process simple, listen to your priorities, and give every space the care it deserves.</p>
            <p className="mt-5 font-bold text-brand">Reliable cleaning. Thoughtful service. A space that feels its best.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell grid gap-6 md:grid-cols-3">
          {[
            ["Trust", "We show up, respect your space, and work hard to earn your trust every time."],
            ["Clear Communication", "We keep pricing and expectations clear, so you always know what to expect."],
            ["Quality", "Our trained team pays attention to the details that make your space feel truly clean."],
          ].map(([title, text]) => (
            <article key={title} className="card p-7">
              <h2 className="text-2xl font-bold">{title}</h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-gold" />
              <p className="mt-5 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-brand text-center text-white">
        <div className="page-shell">
          <p className="eyebrow text-gold">Our Mission</p>
          <blockquote className="mx-auto mt-4 max-w-4xl text-2xl font-semibold leading-relaxed">“Our mission is simple: provide reliable, personalized cleaning that makes everyday life easier and every space feel its best.”</blockquote>
          <h2 className="mt-10 text-3xl font-bold md:text-4xl">Ready for a Cleaner Space?</h2>
          <Link href="/contact#quote-form" className="button-gold mt-7">Get a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
