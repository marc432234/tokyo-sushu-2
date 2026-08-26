"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./Lightbox";

const gallery = [
  { src: "/pictures/05-japanese-dishes-spread-with-cocktail-1.png", alt: "Japanese dishes spread with cocktail.", width: 322, height: 322, sizes: "(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 50vw", span: "small" as const },
  { src: "/pictures/10-salmon-bao-bun-with-edible-flowers-1.png", alt: "Salmon bao bun with edible flowers.", width: 668, height: 322, sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw", span: "horizontal" as const },
  { src: "/pictures/image-16.png", alt: "Gallery image.", width: 322, height: 322, sizes: "(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 50vw", span: "small" as const },
  { src: "/pictures/image-30.png", alt: "Gallery image.", width: 668, height: 668, sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw", span: "big" as const },
  { src: "/pictures/image-31.png", alt: "Gallery image.", width: 322, height: 667, sizes: "(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 50vw", span: "vertical" as const },
  { src: "/pictures/image-32.png", alt: "Gallery image.", width: 668, height: 322, sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw", span: "horizontal" as const },
  { src: "/pictures/image-33.png", alt: "Gallery image.", width: 322, height: 322, sizes: "(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 50vw", span: "small" as const },
  { src: "/pictures/image-34.png", alt: "Gallery image.", width: 668, height: 668, sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw", span: "big" as const },
  { src: "/pictures/image-35.png", alt: "Gallery image.", width: 668, height: 322, sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw", span: "horizontal" as const },
  { src: "/pictures/image-36.png", alt: "Gallery image.", width: 322, height: 322, sizes: "(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 50vw", span: "small" as const },
  { src: "/pictures/image-37.png", alt: "Gallery image.", width: 322, height: 668, sizes: "(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 50vw", span: "vertical" as const },
  { src: "/pictures/image-38.png", alt: "Gallery image.", width: 668, height: 322, sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw", span: "horizontal" as const },
];

function spanStyle(span: "small" | "horizontal" | "vertical" | "big") {
  switch (span) {
    case "horizontal": return { gridColumn: "span 2" };
    case "vertical": return { gridRow: "span 2" };
    case "big": return { gridColumn: "span 2", gridRow: "span 2" };
    default: return {};
  }
}

const lightboxAssets = gallery.map((a) => ({ src: a.src, alt: a.alt }));

export function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="gallery-grid grid grid-cols-4 gap-3">
        {gallery.map((asset, i) => (
          <figure
            key={asset.src}
            className="figma-image-card group relative cursor-pointer overflow-hidden"
            style={spanStyle(asset.span)}
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              width={asset.width}
              height={asset.height}
              priority={i < 4}
              sizes={asset.sizes}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#170307]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-sm text-white/80">{asset.alt}</span>
            </div>
          </figure>
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
