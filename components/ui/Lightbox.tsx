"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";

type LightboxAsset = {
  src: string;
  alt: string;
};

export function Lightbox({
  assets,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  assets: LightboxAsset[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  useEffect(() => {
    setLoaded(false);
  }, [currentIndex]);

  const asset = assets[currentIndex];

  const content = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-6 top-6 z-20 cursor-pointer text-white/50 transition-colors hover:text-white"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="absolute left-6 top-6 z-20 text-sm text-white/30">
        {currentIndex + 1} / {assets.length}
      </div>

      <button
        type="button"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/5 p-3 text-3xl text-white/50 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.src}
        alt={asset.alt}
        onLoad={() => setLoaded(true)}
        className={`max-h-[90vh] max-w-[90vw] rounded object-contain transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <button
        type="button"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/5 p-3 text-3xl text-white/50 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}
