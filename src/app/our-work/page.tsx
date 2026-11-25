import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Browse real cleaning and organization results supplied by CleanHive Company.",
};

const results = [11, 12, 13, 14, 15, 16, 17, 18];

export default function OurWorkPage() {
  return (
    <>
      <PageHero eyebrow="Our Work" title="Real spaces. Visible progress." description="A growing gallery of cleaning and organization work completed by CleanHive." />
      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Project gallery</p>
            <h2 className="mt-3 text-4xl font-bold">Before, after, and everything in between</h2>
            <p className="mt-5 leading-8 text-slate-600">These are the project images currently supplied for the rebuild. Higher-resolution originals will replace social-media screenshots as they become available.</p>
          </div>
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {results.map((number, index) => (
              <figure key={number} className="mb-5 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg">
                <Image src={`/images/work/result-${number}.png`} alt={`CleanHive project result ${index + 1}`} width={800} height={900} className="h-auto w-full" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
