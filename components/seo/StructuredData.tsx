import { getSiteConfig } from "@/lib/get-site-config";
import { siteUrl } from "@/lib/site";
import type { SiteImageAsset } from "@/lib/site";

const siteConfig = getSiteConfig();

type StructuredDataProps = {
  name: string;
  path: string;
  image: SiteImageAsset & {
    alt: string;
  };
  description?: string;
};

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

function createRestaurantSchema() {
  return {
    "@type": "Restaurant",
    "@id": absoluteUrl("#restaurant"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    image: absoluteUrl(siteConfig.logo.src),
    logo: absoluteUrl(siteConfig.logo.src),
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    servesCuisine: ["Japanese", "Sushi", "Cocktails"],
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.split(",")[0].trim(),
      addressLocality: "Miami Beach",
      addressRegion: "FL",
      postalCode: "33139",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "17:00",
        closes: "00:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "200",
    },
    sameAs: [siteConfig.social.instagram],
  };
}

function createBreadcrumbList(path: string) {
  const segments = path.split("/").filter(Boolean);
  const items = [{ position: 1, name: "Home", item: absoluteUrl("/") }];

  let accumulated = "";
  segments.forEach((segment, i) => {
    accumulated += `/${segment}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    items.push({
      position: i + 2,
      name: label,
      item: absoluteUrl(accumulated),
    });
  });

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items,
  };
}

function createStructuredData({
  name,
  path,
  image,
  description = siteConfig.description,
}: StructuredDataProps) {
  const pageUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image.src);

  return {
    "@context": "https://schema.org",
    "@graph": [
      createRestaurantSchema(),
      createBreadcrumbList(path),
      {
        "@type": "WebSite",
        "@id": absoluteUrl("#website"),
        name: siteConfig.name,
        url: absoluteUrl("/"),
        publisher: {
          "@id": absoluteUrl("#restaurant"),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name,
        url: pageUrl,
        description,
        isPartOf: {
          "@id": absoluteUrl("#website"),
        },
        about: {
          "@id": absoluteUrl("#restaurant"),
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: image.width,
          height: image.height,
          caption: image.alt,
        },
        publisher: {
          "@id": absoluteUrl("#restaurant"),
        },
      },
    ],
  };
}

export function StructuredData(props: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(createStructuredData(props)),
      }}
    />
  );
}
