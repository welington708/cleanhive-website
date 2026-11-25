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
      <PageHero eyebrow="About CleanHive" title="Care you can see in the details" description="A local cleaning company focused on clear communication, thoughtful service, and spaces that feel ready for life." />
      <section className="section-pad bg-white">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-brand"><Image src={assetPath("/images/home/about-cleanhive.jpg")} alt="CleanHive home care message" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Cleaning built around people, not a template</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Every property has a different rhythm. CleanHive begins by understanding the space, the moment, and the details that matter most to the client.</p>
            <div className="mt-8 space-y-5">
              {[
                ["Clear communication", "We confirm the service, priorities, and practical details before the appointment."],
                ["Respect for the space", "We approach homes and workplaces with care and attention."],
                ["A useful result", "The goal is a space that feels easier to use, enjoy, show, or hand over."],
              ].map(([title, text], index) => <div key={title} className="grid grid-cols-[auto_1fr] gap-4"><span className="grid h-10 w-10 place-items-center rounded-full bg-gold font-bold">{index + 1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 leading-7 text-slate-600">{text}</p></div></div>)}
            </div>
            <Link href="/contact#quote-form" className="button-gold mt-8">Talk with CleanHive</Link>
          </div>
        </div>
      </section>
    </>
  );
}
