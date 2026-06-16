import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/admin-auth";
import { logout } from "../actions";

export const metadata: Metadata = {
  title: "Tokyo Club Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#120205] text-white">
      <header className="border-b border-white/10 bg-[#160206]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/admin" className="font-['Lora'] text-lg">
              Admin
            </Link>
            <Link href="/admin/blog" className="text-white/70 hover:text-white">
              Blog
            </Link>
            <Link href="/admin/pages" className="text-white/70 hover:text-white">
              Pages
            </Link>
            <Link href="/" className="text-white/40 hover:text-white" target="_blank">
              View site ↗
            </Link>
          </nav>
          <form action={logout}>
            <button type="submit" className="text-sm text-white/60 hover:text-white">
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
