import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getSiteConfig } from "@/lib/get-site-config";
import { pageOgImages, siteUrl } from "@/lib/site";

// Content is read from Supabase at request time, so the whole site segment
// renders dynamically rather than being prerendered at build.
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await getSiteConfig();
  return {
    metadataBase: siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    alternates: {
      canonical: "/",
    },
    appleWebApp: {
      title: "Tokyoclub Sushi's Speakeasy",
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
