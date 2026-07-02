"use client";

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

export function BookingButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const trackBookingClick = () => {
    window.gtag?.("event", "conversion", {
      send_to: GOOGLE_ADS_BOOKING_CONVERSION,
    });
  };

  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={trackBookingClick}
    >
      {children}
    </a>
  );
}
