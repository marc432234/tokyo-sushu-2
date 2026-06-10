"use client";
import { Reveal } from "@/components/ui/Reveal";

export default function ScrollReveal({ children, delay }: { children: React.ReactNode; delay?: number }) {
  return <Reveal delay={delay}>{children}</Reveal>;
}
