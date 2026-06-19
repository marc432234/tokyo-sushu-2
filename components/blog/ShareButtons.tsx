"use client";

import { useCallback, useState } from "react";

type ShareButtonsProps = {
  url: string;
  title: string;
};

const buttonClass =
  "grid size-11 place-items-center rounded-full border border-white/30 bg-[#160206]/80 text-white backdrop-blur transition hover:border-(--accent-gold) hover:text-(--accent-gold)";

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const whatsappUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — silently ignore.
    }
  }, [url]);

  return (
    <div className="fixed left-1/2 bottom-4 z-40 flex -translate-x-1/2 flex-row gap-3 rounded-full border border-white/10 bg-[#160206]/70 p-2 backdrop-blur lg:left-6 lg:top-1/2 lg:bottom-auto lg:flex-col lg:-translate-x-0 lg:-translate-y-1/2">
      <span className="hidden text-center font-['Outfit'] text-[10px] font-normal uppercase tracking-widest text-white/50 lg:block">
        Share
      </span>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on Facebook"
        className={buttonClass}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.87476 9C1.87476 5.64124 1.87476 3.96187 2.91819 2.91843C3.96162 1.875 5.641 1.875 8.99976 1.875C12.3585 1.875 14.0379 1.875 15.0814 2.91843C16.1248 3.96187 16.1248 5.64124 16.1248 9C16.1248 12.3587 16.1248 14.0381 15.0814 15.0816C14.0379 16.125 12.3585 16.125 8.99976 16.125C5.641 16.125 3.96162 16.125 2.91819 15.0816C1.87476 14.0381 1.87476 12.3587 1.87476 9Z" stroke="currentColor" strokeWidth="1.125" strokeLinejoin="round" />
          <path d="M12.6947 6.01953H10.486C9.70313 6.01953 9.06683 6.65111 9.06105 7.43397L8.99708 16.0699M7.56128 10.501H11.1633" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on X"
        className={buttonClass}
      >
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2 2.25h2.45l-5.35 6.11L16.5 15.75h-4.92l-3.86-5.04-4.41 5.04H0.86l5.72-6.54L0 2.25h5.05l3.49 4.61 4.66-4.61Zm-0.86 12.04h1.36L4.72 3.63H3.27l9.07 10.66Z" fill="currentColor" />
        </svg>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on WhatsApp"
        className={buttonClass}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.00024 16.5C13.1423 16.5 16.5002 13.1421 16.5002 9C16.5002 4.85786 13.1423 1.5 9.00024 1.5C4.85811 1.5 1.50024 4.85786 1.50024 9C1.50024 10.0342 1.70955 11.0194 2.08811 11.9158C2.29733 12.4111 2.40194 12.6588 2.41489 12.846C2.42784 13.0332 2.37275 13.2391 2.26256 13.6509L1.50024 16.5L4.34932 15.7377C4.76115 15.6275 4.96707 15.5724 5.15426 15.5854C5.34145 15.5983 5.58913 15.7029 6.08451 15.9121C6.98083 16.2907 7.96607 16.5 9.00024 16.5Z" stroke="currentColor" strokeWidth="1.125" strokeLinejoin="round" />
          <path d="M6.44087 9.28298L7.09407 8.4717C7.36938 8.12977 7.70968 7.81147 7.73638 7.35619C7.74306 7.2412 7.66221 6.72493 7.50036 5.69239C7.43676 5.28661 7.0579 5.25 6.72975 5.25C6.30211 5.25 6.08829 5.25 5.87597 5.34698C5.60761 5.46956 5.3321 5.81423 5.27163 6.103C5.2238 6.33147 5.25935 6.4889 5.33045 6.80377C5.63243 8.1411 6.34086 9.46185 7.43937 10.5604C8.53791 11.6589 9.85866 12.3674 11.196 12.6693C11.5108 12.7404 11.6683 12.776 11.8968 12.7281C12.1855 12.6677 12.5302 12.3922 12.6528 12.1238C12.7498 11.9114 12.7498 11.6977 12.7498 11.27C12.7498 10.9418 12.7132 10.563 12.3073 10.4994C11.2748 10.3375 10.7586 10.2567 10.6435 10.2634C10.1883 10.2901 9.86998 10.6304 9.52806 10.9057L8.71678 11.5589" stroke="currentColor" strokeWidth="1.125" />
        </svg>
      </a>

      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? "Link copied" : "Copy link"}
        className={buttonClass}
      >
        {copied ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 9.375L7.125 12.75L14.25 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 9.75a2.25 2.25 0 0 0 3.39.24l2.25-2.25a2.25 2.25 0 0 0-3.18-3.18l-1.29 1.28" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 8.25a2.25 2.25 0 0 0-3.39-.24l-2.25 2.25a2.25 2.25 0 0 0 3.18 3.18l1.28-1.28" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
