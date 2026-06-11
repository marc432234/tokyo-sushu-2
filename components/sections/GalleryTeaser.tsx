import Image from "next/image";
import Link from "next/link";

import type { HomePageContent } from "@/lib/page-content";

const images = [
  { src: "/pictures/Food2.png", alt: "A vivid lobster and sushi plate at Tokyo Club." },
  { src: "/pictures/Drinks.png", alt: "Tokyo Club cocktails and sushi served under dramatic light." },
  { src: "/pictures/08-citrus-cocktail-with-dried-lime-and-flowers.jpg", alt: "Citrus cocktail with dried lime and flowers." },
  { src: "/pictures/13-matcha-cake-with-mango-and-pansy.jpg", alt: "Matcha cake with mango and pansy." },
  { src: "/pictures/05-japanese-dishes-spread-with-cocktail.jpg", alt: "Japanese dishes spread with cocktail." },
];

const columns = [
  { items: [0, 1] },
  { items: [2, 3] },
  { items: [4] },
];

export function GalleryTeaser({ content }: { content: HomePageContent["galleryTeaser"] }) {
  return (
    <section className="bg-[#170307] pb-[120px] pt-[clamp(4rem,8vw,7.5rem)]">
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

        <div className="mt-12 flex gap-4">
          {columns.map((col) => (
            <div key={col.items[0]} className="flex flex-1 flex-col gap-4">
              {col.items.map((globalIndex) => {
                const asset = images[globalIndex];
                return (
                  <div key={asset.src} className="figma-image-card group overflow-hidden">
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      width={1365}
                      height={2048}
                      className="w-full h-auto transition duration-700 group-hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
