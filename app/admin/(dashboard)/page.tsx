import Link from "next/link";

import { listPages, listPosts } from "@/lib/admin-data";

export default async function AdminDashboard() {
  const [posts, pages] = await Promise.all([listPosts(), listPages()]);

  const cards = [
    {
      href: "/admin/blog",
      title: "Blog posts",
      count: posts.length,
      description: "Create, edit, and delete articles.",
    },
    {
      href: "/admin/pages",
      title: "Pages",
      count: pages.length,
      description: "Edit home, menu, experience, gallery, contact and settings content.",
    },
  ];

  return (
    <div>
      <h1 className="mb-8 font-['Lora'] text-3xl">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#ad6d25]"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl">{card.title}</h2>
              <span className="text-2xl text-[#ad6d25]">{card.count}</span>
            </div>
            <p className="mt-2 text-sm text-white/60">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
