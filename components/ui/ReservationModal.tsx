"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/lib/site";

const GOOGLE_ADS_BOOKING_CONVERSION = "AW-18203197260/dEpWCMvorbccEMz-udD";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: "conversion",
      params: { send_to: string },
    ) => void;
  }
}

// The /r/... page blocks framing, so the modal embeds OpenTable's restref
// widget endpoint instead, carrying over the tracking params from bookingUrl.
function getEmbedUrl() {
  const booking = new URL(siteConfig.bookingUrl);
  const embed = new URL(
    "https://www.opentable.com/booking/restref/availability",
  );
  booking.searchParams.forEach((value, key) =>
    embed.searchParams.set(key, value),
  );
  const restref = booking.searchParams.get("restref");
  if (restref) embed.searchParams.set("rid", restref);
  return embed.toString();
}

export function BookingButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    window.gtag?.("event", "conversion", {
      send_to: GOOGLE_ADS_BOOKING_CONVERSION,
    });
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={["cursor-pointer", className].filter(Boolean).join(" ")}
      >
        {children}
      </button>
      {open && <ReservationModal onClose={() => setOpen(false)} />}
    </>
  );
}

function ReservationModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a table on OpenTable"
    >
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative h-[85vh] max-h-[720px] w-full max-w-md overflow-hidden rounded-lg bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close reservation dialog"
          className="absolute right-2 top-2 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <iframe
          src={getEmbedUrl()}
          title="OpenTable reservation"
          className="h-full w-full border-0"
        />
      </div>
    </div>,
    document.body,
  );
}
