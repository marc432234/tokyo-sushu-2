import type { NextConfig } from "next";

// Strip a trailing slash so we can safely append the storage path.
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
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
