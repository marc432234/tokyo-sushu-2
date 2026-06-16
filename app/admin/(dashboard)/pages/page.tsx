import Link from "next/link";

import { listPages } from "@/lib/admin-data";

export default async function AdminPagesList() {
  const pages = await listPages();

  return (
    <div>
      <h1 className="mb-8 font-['Lora'] text-3xl">Pages</h1>
      <div className="overflow-hidden rounded-lg border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.04] text-white/60">
            <tr>
              <th className="px-4 py-3">Page</th>
              <th className="px-4 py-3">Last updated</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.key} className="border-t border-white/10 hover:bg-white/[0.03]">
                <td className="px-4 py-3">
                  <Link href={`/admin/pages/${page.key}`} className="capitalize hover:text-[#ad6d25]">
                    {page.key}
                  </Link>
                </td>
                <td className="px-4 py-3 text-white/50">
                  {new Date(page.updated_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
