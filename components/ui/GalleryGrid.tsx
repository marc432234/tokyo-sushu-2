"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./Lightbox";

const gallery = [
  { src: "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg", alt: "Lychee orchid cocktails in Tokyo Club's moody room." },
  { src: "/pictures/Food2.png", alt: "A vivid lobster and sushi plate at Tokyo Club." },
  { src: "/pictures/Drinks.png", alt: "Tokyo Club cocktails and sushi served under dramatic light." },
  { src: "/pictures/08-citrus-cocktail-with-dried-lime-and-flowers.jpg", alt: "Citrus cocktail with dried lime and flowers." },
  { src: "/pictures/13-matcha-cake-with-mango-and-pansy.jpg", alt: "Matcha cake with mango and pansy." },
  { src: "/pictures/05-japanese-dishes-spread-with-cocktail.jpg", alt: "Japanese dishes spread with cocktail." },
  { src: "/pictures/10-salmon-bao-bun-with-edible-flowers.jpg", alt: "Salmon bao bun with edible flowers." },
  { src: "/pictures/12-wagyu-beef-sushi-roll-closeup.jpg", alt: "Wagyu beef sushi roll closeup." },
  { src: "/pictures/17-DSC07903.jpg", alt: "Tokyo Club cocktail detail in the dining room." },
  { src: "/pictures/28-DSC08248.jpg", alt: "Damask-wallpapered staircase with a gold handrail inside Tokyo Club." },
  { src: "/pictures/27-DSC08232.jpg", alt: "Moody Tokyo Club table setting with Japanese wall art." },
  { src: "/pictures/16-DSC07892.jpg", alt: "Smoked cocktail under a glass cloche." },
];

const columns = [
  { items: [0, 1, 2, 3] },
  { items: [4, 5, 6, 7] },
  { items: [8, 9, 10, 11] },
];

const lightboxAssets = gallery.map((a) => ({ src: a.src, alt: a.alt }));

export function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="flex gap-4">
        {columns.map((col) => (
          <div key={col.items[0]} className="flex flex-1 flex-col gap-4">
            {col.items.map((globalIndex) => {
              const asset = gallery[globalIndex];
              return (
                <figure
                  key={asset.src}
                  className="figma-image-card group relative cursor-pointer overflow-hidden"
                  onClick={() => setLightboxIndex(globalIndex)}
                >
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    width={1365}
                    height={2048}
                    priority={globalIndex < 4}
                    className="w-full h-auto transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#170307]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm text-white/80">{asset.alt}</span>
                  </div>
                </figure>
              );
            })}
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          assets={lightboxAssets}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + lightboxAssets.length) % lightboxAssets.length,
            )
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % lightboxAssets.length)
          }
        />
      )}
    </>
  );
}
