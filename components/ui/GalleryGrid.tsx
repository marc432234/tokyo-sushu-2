"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./Lightbox";

const gallery = [
  { src: "/pictures/05-japanese-dishes-spread-with-cocktail-1.png", alt: "Japanese dishes spread with cocktail.", width: 322, height: 322 },
  { src: "/pictures/10-salmon-bao-bun-with-edible-flowers-1.png", alt: "Salmon bao bun with edible flowers.", width: 668, height: 322 },
  { src: "/pictures/image-16.png", alt: "Gallery image.", width: 322, height: 322 },
  { src: "/pictures/image-30.png", alt: "Gallery image.", width: 668, height: 668 },
  { src: "/pictures/image-31.png", alt: "Gallery image.", width: 322, height: 667 },
  { src: "/pictures/image-32.png", alt: "Gallery image.", width: 668, height: 322 },
  { src: "/pictures/image-33.png", alt: "Gallery image.", width: 322, height: 322 },
  { src: "/pictures/image-34.png", alt: "Gallery image.", width: 668, height: 668 },
  { src: "/pictures/image-35.png", alt: "Gallery image.", width: 668, height: 322 },
  { src: "/pictures/image-36.png", alt: "Gallery image.", width: 322, height: 322 },
  { src: "/pictures/image-37.png", alt: "Gallery image.", width: 322, height: 668 },
  { src: "/pictures/image-38.png", alt: "Gallery image.", width: 668, height: 322 },
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
      <div className="flex flex-col sm:flex-row gap-4">
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
                    width={asset.width}
                    height={asset.height}
                    priority={globalIndex < 4}
                    sizes="(min-width: 640px) 33vw, 100vw"
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
