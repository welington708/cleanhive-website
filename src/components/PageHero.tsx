import Link from "next/link";

export function PageHero({ eyebrow, title, description, cta = true, compact = false }: { eyebrow: string; title: string; description: string; cta?: boolean; compact?: boolean }) {
  return (
    <section className="brand-pattern bg-brand text-white">
      <div className={`page-shell text-center ${compact ? "py-10 md:py-14" : "py-16 md:py-24"}`}>
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className={`mx-auto mt-4 max-w-4xl font-bold leading-tight ${compact ? "text-4xl md:text-5xl" : "text-4xl md:text-6xl"}`}>{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">{description}</p>
        {cta && <Link href="/contact#quote-form" className="button-gold mt-8">Get a free estimate</Link>}
      </div>
    </section>
  );
}
