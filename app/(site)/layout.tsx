import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getSiteConfig } from "@/lib/get-site-config";
import { pageOgImages, siteConfig as staticSiteConfig, siteUrl } from "@/lib/site";

// Content comes from Supabase. The site segment is cached (ISR) and
// revalidated every 60s; admin saves call revalidatePath("/", "layout")
// for instant updates, so this window only covers out-of-band DB changes.
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  // Never let a Supabase hiccup throw here — that would drop the canonical link
  // and force a noindex error page. Fall back to the static site config.
  let siteConfig: Awaited<ReturnType<typeof getSiteConfig>> | typeof staticSiteConfig;
  try {
    siteConfig = await getSiteConfig();
  } catch {
    siteConfig = staticSiteConfig;
  }
  return {
    metadataBase: siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    alternates: {
      canonical: "/",
    },
    appleWebApp: {
      title: "Tokyo Sushi Speakeasy",
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.social?.website ?? "https://www.tokyosushispeakeasy.com",
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: pageOgImages.home.src,
          width: pageOgImages.home.width,
          height: pageOgImages.home.height,
          alt: pageOgImages.home.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [pageOgImages.home.src],
    },
  };
}

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
