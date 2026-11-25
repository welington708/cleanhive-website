import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Browse real cleaning and organization results supplied by CleanHive Company.",
};

const results = [11, 12, 13, 14, 15, 16, 17, 18];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Our Work Speaks for Itself"
        description="Every job we take on is a commitment to quality. Browse through a selection of our recent residential and commercial cleaning projects across Central Florida."
        cta={false}
        compact
      />
      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Real results</p>
            <h2 className="mt-3 text-4xl font-bold">Professional Cleaning Results Across Orlando &amp; Beyond</h2>
            <p className="mt-5 leading-8 text-slate-600">At Clean Hive Company, we take pride in delivering spotless results on every single job — from deep cleans in Orlando to move-out services in Daytona Beach. Our team of trained professionals uses industry-grade equipment and eco-conscious products to restore homes and commercial spaces to their best condition. The photos below represent real work completed by our team for real clients across Central Florida.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 items-start gap-3 md:gap-6">
            {results.map((number, index) => (
              <figure key={number} className="overflow-hidden rounded-2xl bg-white shadow-lg md:rounded-3xl">
                <Image src={assetPath(`/images/work/result-${number}.png`)} alt={`CleanHive cleaning result ${index + 1}`} width={800} height={900} className="h-auto w-full" sizes="(max-width: 768px) 50vw, 50vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
