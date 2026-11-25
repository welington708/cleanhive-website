import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const isLocal = baseUrl.includes("localhost") || baseUrl.includes("127.0.0.1");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "CleanHive Company | Cleaning Services in Central Florida", template: "%s | CleanHive Company" },
  description: siteConfig.description,
  openGraph: { title: "CleanHive Company", description: siteConfig.description, type: "website", locale: "en_US" },
  robots: { index: !isLocal, follow: !isLocal },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
