"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

const PER_PAGE = 4;

export function BlogGrid({ posts, page }: { posts: BlogPost[]; page: number }) {
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = posts.slice(start, start + PER_PAGE);
  const basePath = "/blog/page";

  if (posts.length === 0) {
    return (
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 text-stone-300">
        Blog posts will appear here after they are published from Decap CMS.
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-start gap-16">
      <div className="flex w-full flex-col items-start justify-start gap-6">
        {[0, 2].map((offset) => (
          <div key={offset} className="flex w-full flex-wrap items-stretch justify-start gap-[29px]">
            {visible.slice(offset, offset + 2).map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="card-hover flex flex-1 flex-col items-start justify-start gap-6 rounded-lg bg-white/5 p-6 outline outline-1 outline-white/10">
                <div className="img-zoom relative h-48 w-full shrink-0 overflow-hidden rounded-lg bg-white md:h-[300px]">
                  <img className="h-full w-full object-cover" src={article.featuredImage} alt={article.title} />
                </div>
                <div className="flex w-full flex-1 flex-col items-start justify-start gap-4">
                  <div className="flex w-full flex-col items-start justify-start gap-5">
                    <div className="inline-flex items-center justify-center bg-[#ad6d25] px-2 py-[5px]">
                      <div className="font-['Outfit'] text-xs font-normal uppercase leading-4 tracking-widest text-black">
                        {article.categories[0] || "Blog"}
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-3">
                      <div className="font-['Lora'] text-2xl font-normal leading-[33.60px] text-white">{article.title}</div>
                      <div className="font-['Outfit'] text-base font-light leading-[22.40px] tracking-wide text-white/60">{article.excerpt}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3">
          {page > 1 && (
            <Link
              href={page === 2 ? "/blog" : `${basePath}/${page - 1}`}
              className="flex h-10 w-10 items-center justify-center border border-(--accent-gold) text-(--accent-gold)"
            >
              ‹
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={p === 1 ? "/blog" : `${basePath}/${p}`}
              className={`flex h-10 w-10 items-center justify-center font-['Outfit'] text-sm font-normal uppercase leading-none tracking-[2.56px] ${
                p === page
                  ? "bg-[#ad6d25] text-white"
                  : "border border-white/20 text-white/60 hover:border-[#ad6d25] hover:text-[#ad6d25]"
              }`}
            >
              {String(p).padStart(2, "0")}
            </Link>
          ))}
          {page < totalPages && (
            <Link
              href={`${basePath}/${page + 1}`}
              className="flex h-10 w-10 items-center justify-center bg-(--accent-gold) text-[#170307]"
            >
              ›
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
