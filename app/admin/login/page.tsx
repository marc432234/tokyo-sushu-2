import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/admin-auth";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await isAuthenticated()) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#160206] px-6 text-white">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 font-['Lora'] text-3xl">Tokyo Sushi Speakeasy Admin</h1>
        <p className="mb-8 text-sm text-white/60">Sign in to manage site content.</p>
        <LoginForm />
      </div>
    </main>
  );
}
