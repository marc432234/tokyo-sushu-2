import type { Metadata } from "next";

import { MenuPageContent } from "@/components/sections/MenuPageContent";
import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  path: "/menu",
  title: "Sushi Menu | Tokyo Club Sushi Speakeasy",
  description:
    "Explore the menu at Tokyo Club Sushi Speakeasy in South Beach — Edomae-style nigiri, signature rolls, craft cocktails, and late-night share plates.",
  image: pageOgImages.menu,
});

export default function MenuPage() {
  return <MenuPageContent />;
}
