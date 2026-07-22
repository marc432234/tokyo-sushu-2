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

            <BookingButton className="btn-secondary">
              <span className="hidden sm:inline">Reserve a Table</span>
              <span className="sm:hidden">Reserve</span>
            </BookingButton>
          </div>
        </div>
      </header>
    </div>
  );
}
