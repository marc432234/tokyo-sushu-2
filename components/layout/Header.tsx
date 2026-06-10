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
          <span className="tracking-wide">South Beach modern Japanese speakeasy</span>
          <div className="hidden gap-6 md:flex">
            <span>1000 Collins Ave</span>
            <span>Wed-Mon 5PM-12AM</span>
            <a href={siteConfig.phoneHref} className="hover:text-white">
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

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-3 text-sm uppercase ${
                    isActive ? "text-(--accent-gold)" : "text-stone-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 size-3 -translate-x-1/2 rounded-full bg-(--accent-red)" />
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
