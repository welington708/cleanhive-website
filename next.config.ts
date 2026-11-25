import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: "/cleanhive-website",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
