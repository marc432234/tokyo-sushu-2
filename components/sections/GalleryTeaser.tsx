import Image from "next/image";
import Link from "next/link";

import type { HomePageContent } from "@/lib/page-content";

const images = [
  { src: "/pictures/image-speakeasy-1.png", alt: "Inside Tokyo Sushi Speakeasy.", width: 670, height: 670, sizes: "(min-width: 768px) 33vw, 50vw", span: "big" as const },
  { src: "/pictures/image-speakeasy-4.png", alt: "Inside Tokyo Sushi Speakeasy.", width: 670, height: 324, sizes: "(min-width: 768px) 33vw, 50vw", span: "horizontal" as const },
  { src: "/pictures/image-speakeasy-5.png", alt: "Inside Tokyo Sushi Speakeasy.", width: 324, height: 324, sizes: "(min-width: 768px) 20vw, 33vw", span: "small" as const },
  { src: "/pictures/image-speakeasy-6.png", alt: "Inside Tokyo Sushi Speakeasy.", width: 324, height: 670, sizes: "(min-width: 768px) 20vw, 33vw", span: "vertical" as const },
  { src: "/pictures/image-speakeasy-2.png", alt: "Inside Tokyo Sushi Speakeasy.", width: 324, height: 324, sizes: "(min-width: 768px) 20vw, 33vw", span: "small" as const },
  { src: "/pictures/image-speakeasy-3.png", alt: "Inside Tokyo Sushi Speakeasy.", width: 670, height: 324, sizes: "(min-width: 768px) 33vw, 50vw", span: "horizontal" as const },
];

function spanStyle(span: "small" | "horizontal" | "vertical" | "big") {
  switch (span) {
    case "horizontal": return { gridColumn: "span 2" };
    case "vertical": return { gridRow: "span 2" };
    case "big": return { gridColumn: "span 2", gridRow: "span 2" };
    default: return {};
  }
}

export function GalleryTeaser({ content }: { content: HomePageContent["galleryTeaser"] }) {
  return (
    <section className="relative bg-[#170307] pb-[120px] pt-[clamp(4rem,8vw,7.5rem)]">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/4 scale-[0.80] origin-top">
        <svg width="607" height="439" viewBox="0 0 607 439" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="303.5" cy="135.5" r="302.5" stroke="#CF183C" strokeOpacity="0.3" strokeWidth="2"/>
        </svg>
      </div>
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="figma-section-title mt-8 text-white">Inside the Speakeasy</h2>
          </div>
          <Link href={content.button.href} className="btn-secondary w-fit">
            {content.button.label}
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-4 gap-3 gallery-teaser-grid relative z-10">
          {images.map((asset) => (
            <div key={asset.src} className="figma-image-card group overflow-hidden h-full" style={spanStyle(asset.span)}>
              <Image
                src={asset.src}
                alt={asset.alt}
                width={asset.width}
                height={asset.height}
                sizes={asset.sizes}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
