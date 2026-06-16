import type { Metadata } from "next";

import { getPageContent, type PageSeo } from "@/lib/page-content";
import { siteConfig, siteUrl } from "@/lib/site";
import type { SiteImageAsset } from "@/lib/site";

type PageMetadataInput = {
  path: string;
  title?: string;
  description?: string;
  image: SiteImageAsset & {
    alt: string;
  };
};

/**
 * Reads a page's SEO copy from the CMS, falling back to the static site
 * defaults if Supabase is unreachable. Metadata must never throw — if it does,
 * Next.js drops the entire metadata object (including the canonical link) and
 * serves a noindex error page, so the canonical URL would silently disappear.
 */
export async function getPageSeo(page: Parameters<typeof getPageContent>[0]): Promise<PageSeo> {
  try {
    return (await getPageContent(page)).seo;
  } catch {
    return { title: siteConfig.title, description: siteConfig.description };
  }
}

export function createPageMetadata({
  path,
  title,
  description,
  image,
}: PageMetadataInput): Metadata {
  const pageTitle = title ?? siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  return {
    // Set explicitly here (not only in the layout) so a relative canonical
    // always resolves to an absolute https://www. URL on every route.
    metadataBase: siteUrl,
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image.src],
    },
  };
}
