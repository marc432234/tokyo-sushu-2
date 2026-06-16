import Link from "next/link";

import { listPosts } from "@/lib/admin-data";

export default async function AdminBlogList() {
  const posts = await listPosts();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-['Lora'] text-3xl">Blog posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-md bg-[#ad6d25] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          New post
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.04] text-white/60">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Categories</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-white/50">
                  No posts yet.
                </td>
              </tr>
            )}
            {posts.map((post) => (
              <tr key={post.slug} className="border-t border-white/10 hover:bg-white/[0.03]">
                <td className="px-4 py-3">
                  {post.featured_image ? (
                    <img
                      src={post.featured_image}
                      alt=""
                      className="h-10 w-16 rounded border border-white/10 object-cover"
                    />
                  ) : (
                    <div className="h-10 w-16 rounded border border-white/10 bg-white/5" />
                  )}
                </td>
                <td className="px-4 py-3">
                  <Link href={`/admin/blog/${post.slug}`} className="hover:text-[#ad6d25]">
                    {post.title}
                  </Link>
                  <div className="text-xs text-white/40">/{post.slug}</div>
                </td>
                <td className="px-4 py-3 text-white/70">{post.categories.join(", ")}</td>
                <td className="px-4 py-3 text-white/50">
                  {new Date(post.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
