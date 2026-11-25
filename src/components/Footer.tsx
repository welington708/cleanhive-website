import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";
import { assetPath, navigation, serviceAreas, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="page-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Image src={assetPath("/images/brand/logo.jpeg")} alt="CleanHive Company" width={190} height={96} className="h-auto w-48 rounded-2xl object-contain" />
          <p className="mt-4 max-w-sm leading-7 text-white/70">
            Thoughtful residential and commercial cleaning across Central Florida.
          </p>
          <div className="mt-6 space-y-4 text-sm text-white/85">
            <div className="flex items-start gap-3"><PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><p><a className="hover:text-gold" href={`tel:${siteConfig.testPhoneHref}`}>{siteConfig.testPhoneDisplay}</a> <span className="text-gold">· test line</span></p></div>
            <div className="flex items-start gap-3"><MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><a className="break-all hover:text-gold" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
            <div className="flex items-start gap-3"><MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><div><p>{siteConfig.address}</p><p className="mt-1 text-white/55">Business address only. Contact us before visiting.</p></div></div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-gold">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/75">
            {navigation.map((item) => <li key={item.href}><Link className="hover:text-gold" href={item.href}>{item.label}</Link></li>)}
            <li><Link className="hover:text-gold" href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className="hover:text-gold" href="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-gold">Service Area</h2>
          <p className="mt-4 text-sm leading-7 text-white/70">
            {serviceAreas.slice(0, 7).map((area) => area.city).join(" · ")}
          </p>
          <Link href="/service-areas" className="mt-5 inline-block text-sm font-bold text-gold hover:text-white">
            View all service areas →
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} CleanHive Company. Local development version.
      </div>
    </footer>
  );
}
