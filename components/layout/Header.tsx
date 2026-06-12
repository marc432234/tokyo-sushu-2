"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BookingButton } from "@/components/ui/ReservationModal";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = siteConfig.nav;

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/20 bg-black/20 backdrop-blur-xl">
        <div className="container-shell flex min-h-12 flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm font-light uppercase text-white">
          <span className="inline-flex items-center gap-2 tracking-wide">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3334 8.66669C13.3334 10.6683 13.3334 11.6691 12.7476 12.2909C11.3563 13.7677 4.47745 13.5912 3.25253 12.2909C2.66675 11.6691 2.66675 10.6683 2.66675 8.66669" stroke="#CF183C"/>
              <path d="M8.02658 2.66669C2.96852 2.66669 1.65094 5.86429 1.35895 8.42169C1.23392 9.51682 1.55939 9.49922 2.46157 9.02702C3.84018 8.30535 5.67271 7.84402 8.02658 7.84402C10.3771 7.84402 12.1759 8.30402 13.5383 9.02382C14.439 9.49962 14.7623 9.51615 14.6427 8.42149C14.3631 5.86409 13.0845 2.66669 8.02658 2.66669Z" stroke="#CF183C"/>
              <path d="M4.66406 8.00002C4.66406 6.31483 5.2552 3.04279 8.66407 2.66669" stroke="#CF183C"/>
              <path d="M10 7.99998C10 6.70758 10.3412 4.49054 12 3.33331" stroke="#CF183C"/>
            </svg>
            South Beach modern Japanese speakeasy
          </span>
          <div className="hidden items-center gap-6 md:flex">
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.07847 14.2446C8.7894 14.5153 8.40293 14.6666 8.00073 14.6666C7.59853 14.6666 7.21213 14.5153 6.923 14.2446C4.27535 11.7506 0.727174 8.96458 2.45751 4.91975C3.39309 2.73275 5.63889 1.33331 8.00073 1.33331C10.3626 1.33331 12.6084 2.73275 13.544 4.91975C15.2721 8.95951 11.7327 11.7592 9.07847 14.2446Z" stroke="#CF183C"/>
                <path d="M10.3334 7.33333C10.3334 8.622 9.28875 9.66667 8.00008 9.66667C6.71141 9.66667 5.66675 8.622 5.66675 7.33333C5.66675 6.04467 6.71141 5 8.00008 5C9.28875 5 10.3334 6.04467 10.3334 7.33333Z" stroke="#CF183C"/>
              </svg>
              {siteConfig.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668 4.31808 11.6821 1.33331 8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666Z" stroke="#CF183C"/>
                <path d="M8 5.33331V7.99998L9.33333 9.33331" stroke="#CF183C" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {siteConfig.hours}
            </span>
            <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.1055 3.80809L5.83707 3.20411C5.66155 2.80919 5.57379 2.61173 5.44254 2.46061C5.27805 2.27123 5.06364 2.1319 4.82378 2.05851C4.63239 1.99994 4.4163 1.99994 3.98414 1.99994C3.35194 1.99994 3.03584 1.99994 2.77048 2.12147C2.45791 2.26462 2.17562 2.57546 2.06315 2.90034C1.96767 3.17613 1.99502 3.45956 2.04972 4.02641C2.63194 10.06 5.93988 13.368 11.9735 13.9502C12.5404 14.0049 12.8238 14.0322 13.0996 13.9368C13.4245 13.8243 13.7353 13.542 13.8785 13.2294C14 12.9641 14 12.648 14 12.0158C14 11.5836 14 11.3676 13.9414 11.1762C13.868 10.9363 13.7287 10.7219 13.5393 10.5574C13.3882 10.4262 13.1908 10.3384 12.7958 10.1628L12.1918 9.89445C11.7642 9.70438 11.5503 9.60931 11.333 9.58865C11.125 9.56885 10.9154 9.59805 10.7207 9.67385C10.5173 9.75305 10.3376 9.90285 9.97797 10.2025C9.6201 10.5007 9.44117 10.6498 9.2225 10.7297C9.02864 10.8006 8.77237 10.8268 8.56824 10.7967C8.3379 10.7628 8.16157 10.6685 7.80884 10.48C6.7115 9.89358 6.10635 9.28845 5.51991 8.19111C5.33143 7.83838 5.23718 7.66205 5.20324 7.43171C5.17316 7.22758 5.19938 6.97131 5.2702 6.77745C5.35008 6.55879 5.49921 6.37985 5.79746 6.02194C6.09708 5.66239 6.24689 5.48262 6.3261 5.27921C6.4019 5.08457 6.43108 4.87487 6.4113 4.66693C6.39063 4.44962 6.29558 4.23578 6.1055 3.80809Z" stroke="#CF183C" strokeLinecap="round"/>
              </svg>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <header className="border-b border-white/20 bg-black/25 backdrop-blur-xl">
        <div className="container-shell flex min-h-22 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <Image
              src={siteConfig.logo.src}
              alt={`${siteConfig.shortName} logo`}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-auto w-32 sm:w-44"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)] px-5 py-[13px] backdrop-blur-[10px] lg:flex" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-2 py-1 text-sm uppercase ${
                    isActive ? "text-[#AC6E26]" : "text-stone-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-[18px] left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#AC6E26]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <BookingButton className="btn-secondary">
              Reserve a Table
            </BookingButton>
          </div>

          <button
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-full border border-(--border-subtle) text-stone-100 lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-full bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`grid border-t border-white/8 lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-400 ease-out"
              : "grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-250 ease-in"
          }`}
        >
          <div className="overflow-hidden">
            <div className="bg-[rgba(11,11,13,0.96)]">
              <div className="container-shell flex flex-col gap-8 py-8">
                <div className="grid gap-4">
                  {navItems.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg uppercase text-stone-100 transition-[transform,opacity] ease-out ${
                        menuOpen
                          ? "translate-y-0 opacity-100 duration-400"
                          : "translate-y-0 opacity-0 duration-150"
                      }`}
                      style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div
                  className={`grid gap-3 transition-[transform,opacity] ease-out ${
                    menuOpen
                      ? "translate-y-0 opacity-100 duration-400"
                      : "translate-y-0 opacity-0 duration-150"
                  }`}
                  style={{ transitionDelay: menuOpen ? `${80 + siteConfig.nav.length * 50}ms` : "0ms" }}
                >
                  <a href={siteConfig.phoneHref} className="text-stone-300">
                    {siteConfig.phone}
                  </a>
                  <BookingButton className="btn-secondary">
                    Reserve a Table
                  </BookingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
