import Image from "next/image";
import Link from "next/link";

import { BookingButton } from "@/components/ui/ReservationModal";
import { siteConfig } from "@/lib/site";

export function CampaignNav() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <header className="border-t border-white/20 bg-black/25 backdrop-blur-xl">
        <div className="container-shell flex min-h-22 items-center justify-between gap-4 py-3">
          <Link href="/campaign" className="flex items-center gap-3">
            <Image
              src={siteConfig.logo.src}
              alt={`${siteConfig.shortName} logo`}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-auto w-28 sm:w-44"
              priority
              fetchPriority="high"
            />
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="flex items-center overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)] px-5 py-[13px] backdrop-blur-[10px]" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
              <Link
                href="/menu"
                className="relative px-2 py-1 text-sm uppercase text-stone-300 hover:text-white"
              >
                Menu
              </Link>
            </nav>

            <BookingButton href="https://www.opentable.com/r/tokyo-club-reservations-miami-beach?restref=1480237&lang=en-US&ot_source=Google&ot_campaign=tokyo_search" className="h-12 px-5 bg-[#ad6d25] flex items-center gap-2 btn-glow">
              <span className="text-white text-sm font-normal font-['Outfit'] uppercase leading-none tracking-[2.56px]">
              <span className="hidden sm:inline">Reserve Now</span>
              <span className="sm:hidden">Reserve</span>
              </span>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4165 10H4.1665" stroke="white" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                <path d="M10.8335 15L15.8335 10L10.8335 5" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
              </svg>
            </BookingButton>
          </div>
        </div>
      </header>
    </div>
  );
}
