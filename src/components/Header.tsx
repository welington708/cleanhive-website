"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand/95 text-white shadow-lg backdrop-blur">
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="CleanHive home">
          <Image
            src="/images/brand/logo.jpeg"
            alt="CleanHive"
            width={70}
            height={68}
            className="h-14 w-14 rounded-xl object-cover"
            priority
          />
          <span className="hidden text-lg font-bold tracking-wide text-gold sm:block">CLEANHIVE</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-gold ${pathname === item.href ? "text-gold" : "text-white/90"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className="button-gold hidden md:inline-flex" href={`tel:${siteConfig.testPhoneHref}`}>
            Call {siteConfig.testPhoneDisplay}
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/30 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-white/10 bg-brand px-5 pb-6 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 font-semibold text-white/90"
              >
                {item.label}
              </Link>
            ))}
            <a className="button-gold mt-5 justify-center" href={`tel:${siteConfig.testPhoneHref}`}>
              Call {siteConfig.testPhoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
