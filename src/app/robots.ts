import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const isLocal = base.includes("localhost");
  return { rules: { userAgent: "*", allow: isLocal ? undefined : "/", disallow: isLocal ? "/" : undefined }, sitemap: `${base}/sitemap.xml` };
}
