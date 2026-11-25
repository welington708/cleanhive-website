import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, StarIcon } from "@/components/Icons";
import { QuoteForm } from "@/components/QuoteForm";
import { assetPath, googleReviews, serviceAreas, services, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="brand-pattern overflow-hidden bg-brand text-white">
        <div className="page-shell grid items-start gap-10 py-10 lg:grid-cols-[1.08fr_.92fr] lg:py-14">
          <div className="lg:pt-5">
            <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">Serving homes and businesses across Central Florida</div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.04] tracking-tight md:text-7xl">A cleaner space.<br /><span className="text-gold">More room to live.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Reliable cleaning tailored to your home, move, rental, or workplace — with a simple estimate process and personal follow-up.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-gold" href="#quote-form">Request an estimate</Link>
              <a className="button-outline" href={`tel:${siteConfig.testPhoneHref}`}>Call {siteConfig.testPhoneDisplay}</a>
            </div>
            <p className="mt-4 text-xs text-white/50">Local test contact. The company number will replace it before launch.</p>
          </div>
          <div id="quote-form"><QuoteForm compact /></div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Cleaning that fits the moment</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">From weekly upkeep to a complete reset</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Choose the service that matches your space. We will confirm scope, priorities, and timing before work begins.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="card overflow-hidden">
                <div className="relative aspect-[16/10]"><Image src={service.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.short}</p>
                  <Link className="mt-5 inline-block font-bold text-brand" href={`/services#${service.slug}`}>Explore service →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Image src={assetPath("/images/home/bathroom-detail-before-after.png")} alt="Before and after cleaning result" fill className="object-cover" sizes="50vw" /></div>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-3xl"><Image src={assetPath("/images/home/bathtub-before-after.png")} alt="Bathtub before and after cleaning" fill className="object-cover" sizes="50vw" /></div>
          </div>
          <div>
            <p className="eyebrow">Real work, visible results</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Details make the difference</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Our work gallery uses project photos supplied by CleanHive. As original high-resolution pairs become available, we will replace the current social-media exports.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Clear scope"], ["02", "Personal follow-up"], ["03", "Careful finish"],
              ].map(([number, label]) => <div key={number} className="rounded-2xl bg-cream p-4"><p className="text-2xl font-bold text-gold">{number}</p><p className="mt-1 text-sm font-bold">{label}</p></div>)}
            </div>
            <Link href="/our-work" className="button-gold mt-8">See our work</Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Google Reviews</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">What our clients are saying</h2>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-gold">
              <div className="flex" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, index) => <StarIcon key={index} />)}</div>
              <span className="font-bold text-ink">Excellent · 5.0 on Google · 17 reviews</span>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {googleReviews.map((review) => (
              <figure key={review.name} className="card flex h-full flex-col p-7">
                <div className="flex text-gold">{Array.from({ length: 5 }).map((_, index) => <StarIcon key={index} className="h-4 w-4" />)}</div>
                <blockquote className="mt-5 flex-1 text-base leading-7 text-slate-600">“{review.text}”</blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-4"><p className="font-bold">{review.name}</p><p className="mt-1 text-xs text-slate-500">{review.date} · Google Review</p></figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center"><a href={siteConfig.googleReviewsUrl} target="_blank" rel="noreferrer" className="button-gold">Read all reviews on Google</a></div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
          <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-cream shadow-xl md:min-h-[520px]">
            <Image src={assetPath("/images/home/clean-home-promo.jpg")} alt="A bright, clean living room presented by CleanHive" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 52vw" />
          </div>
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">About Clean Hive Company</h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gold" />
            <p className="mt-7 text-lg leading-8 text-slate-600">CleanHive is a local cleaning company serving homes, rentals, and businesses across Central Florida. Our goal is to make every service clear, thoughtful, and tailored to the space.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">We believe in trust, transparency, and the difference a carefully cleaned environment can make in everyday life.</p>
            <Link href="/about" className="button-gold mt-8">Learn more about us</Link>
          </div>
        </div>
      </section>

      <section id="home-service-areas" className="section-pad scroll-mt-24 bg-[#eaf6fa]">
        <div className="page-shell text-center">
          <p className="eyebrow">Where we work</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Proudly Serving Central Florida</h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gold" />
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">From Orlando to the beautiful coastal towns, we bring our cleaning services directly to you.</p>
          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link key={area.city} href="/contact#quote-form" className="flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-[#ded7ca] bg-white px-6 py-3.5 font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md sm:w-auto">
                <MapPinIcon className="h-5 w-5 shrink-0 text-gold" />
                <span className="whitespace-nowrap">{area.city}</span>
              </Link>
            ))}
          </div>
          <Link className="button-gold mt-9" href="/service-areas">View service areas</Link>
        </div>
      </section>

      <section className="section-pad bg-cream text-center">
        <div className="page-shell">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-bold md:text-5xl">Tell us what needs cleaning. We will take it from there.</h2>
          <Link className="button-gold mt-8" href="/contact#quote-form">Get a free estimate</Link>
        </div>
      </section>
    </>
  );
}
