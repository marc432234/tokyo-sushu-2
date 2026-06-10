import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import type { SiteImageAsset } from "@/lib/site";

type PageMetadataInput = {
  path: string;
  title?: string;
  description?: string;
  image: SiteImageAsset & {
    alt: string;
  };
};

export function createPageMetadata({
  path,
  title,
  description,
  image,
}: PageMetadataInput): Metadata {
  const pageTitle = title ?? siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  return {
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
