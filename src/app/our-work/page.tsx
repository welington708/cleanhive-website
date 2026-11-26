import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description: "See real cleaning results from Clean Hive Company across Central Florida.",
};

const results = [11, 12, 13, 14, 15, 16, 17, 18];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Our Work Speaks for Itself"
        description="Take a look at real results from homes and businesses across Central Florida."
        cta={false}
        compact
      />
      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Real results</p>
            <h2 className="mt-3 text-4xl font-bold">Real Cleaning Results Across Central Florida</h2>
            <p className="mt-5 leading-8 text-slate-600">We take pride in every job, from deep cleans in Orlando to move-out services in Daytona Beach. Our trained team uses professional equipment and eco-conscious products to help homes and businesses look their best. Every photo below shows real work completed for a Clean Hive client.</p>
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
