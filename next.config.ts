import type { NextConfig } from "next";

// Strip a trailing slash so we can safely append the storage path.
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (≈30-50% smaller than WebP), then WebP, then the
    // original. Lets next/image shrink the large source PNGs dramatically so
    // big originals never reach the browser at full byte size.
    formats: ["image/avif", "image/webp"],
  },
  // Force blocking metadata for every crawler, not just the known-bot list.
  // Next streams metadata into <body> for unrecognized user-agents and hoists
  // it client-side; matching all UAs keeps <title>/<link rel=canonical> in
  // <head> in the raw HTML so SEO auditors and non-JS crawlers see them there.
  htmlLimitedBots: /.*/,
  async redirects() {
    // 301 redirect the bare apex domain to the canonical www host. Matches any
    // request whose Host is exactly `tokyosushispeakeasy.com` (no www) and sends
    // it to the same path on `www.` so every URL resolves to a single canonical host.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "tokyosushispeakeasy.com" }],
        destination: "https://www.tokyosushispeakeasy.com/:path*",
        statusCode: 301,
      },
    ];
  },
  async rewrites() {
    if (!supabaseUrl) return [];
    // Serve featured images from the deployment domain while transparently
    // proxying to the public Supabase Storage `blog` bucket. The browser only
    // ever sees `/uploads/blog/...` on our own domain — the Supabase URL is masked.
    return [
      {
        source: "/uploads/blog/:path*",
        destination: `${supabaseUrl}/storage/v1/object/public/blog/:path*`,
      },
    ];
  },
};

export default nextConfig;
