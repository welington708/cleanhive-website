import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about CleanHive Company's approach to thoughtful cleaning and personal service in Central Florida.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="About Clean Hive Company" cta={false} compact />
      <section className="section-pad bg-white">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-brand shadow-xl"><Image src={assetPath("/images/home/about-cleanhive.jpg")} alt="About Clean Hive Company" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
          <div>
            <p className="text-lg leading-8 text-slate-600">Clean Hive Company is a young and dynamic company, founded three years ago in sunny Florida. Our mission is to provide a cleaner and healthier environment for our clients, offering specialized cleaning services that cater to all your needs.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">With an unwavering commitment to quality, our team is made up of highly trained professionals who are passionate about ensuring excellence in every detail. Whether it&apos;s deep cleaning, move-in or move-out cleaning, or regular maintenance, Clean Hive is ready to transform your space, making it more pleasant and free of impurities.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">We believe in trust, transparency, and the power of a clean environment to enhance quality of life. Our company was founded with the goal of offering more than just cleaning – we aim to transform people&apos;s daily lives through efficient, effective, and personalized service.</p>
            <p className="mt-5 font-bold text-brand">Clean Hive Company – The solution for those seeking convenience, trust, and a consistently spotless environment.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell grid gap-6 md:grid-cols-3">
          {[
            ["Trust", "We build lasting relationships with our clients based on reliability, respect, and consistent high-quality service."],
            ["Transparency", "Clear communication, upfront pricing, and honest work. You always know exactly what to expect from our team."],
            ["Excellence", "Our highly trained professionals are passionate about ensuring excellence in every detail of your space."],
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
          <blockquote className="mx-auto mt-4 max-w-4xl text-2xl font-semibold leading-relaxed">“To provide a cleaner and healthier environment for our clients, offering specialized cleaning services that cater to all your needs, while transforming daily lives through efficient, effective, and personalized service.”</blockquote>
          <h2 className="mt-10 text-3xl font-bold md:text-4xl">Ready for a Spotless Space?</h2>
          <Link href="/contact#quote-form" className="button-gold mt-7">Book Now</Link>
        </div>
      </section>
    </>
  );
}
