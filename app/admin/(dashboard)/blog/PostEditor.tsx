import type { BlogRow } from "@/lib/admin-data";
import { deletePostAction, savePostAction } from "../../actions";

const field = "rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#ad6d25]";
const labelClass = "text-sm text-white/70";

export function PostEditor({ post }: { post?: BlogRow }) {
  const isNew = !post;
  const dateValue = post?.date ? post.date.slice(0, 10) : new Date().toISOString().slice(0, 10);

  return (
    <div>
      <h1 className="mb-8 font-['Lora'] text-3xl">{isNew ? "New post" : "Edit post"}</h1>

      <form action={savePostAction} className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className={labelClass} htmlFor="title">Title</label>
            <input id="title" name="title" required defaultValue={post?.title} className={field} />
          </div>
          <div className="flex flex-col gap-1">
            <label className={labelClass} htmlFor="slug">Slug</label>
            <input
              id="slug"
              name="slug"
              required
              defaultValue={post?.slug}
              readOnly={!isNew}
              className={`${field} ${!isNew ? "opacity-60" : ""}`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className={labelClass} htmlFor="date">Date</label>
            <input id="date" name="date" type="date" defaultValue={dateValue} className={field} />
          </div>
          <div className="flex flex-col gap-1">
            <label className={labelClass} htmlFor="categories">Categories (comma-separated)</label>
            <input
              id="categories"
              name="categories"
              defaultValue={post?.categories.join(", ")}
              className={field}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelClass} htmlFor="featuredImage">Featured image URL</label>
          <input
            id="featuredImage"
            name="featuredImage"
            defaultValue={post?.featured_image ?? ""}
            className={field}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelClass} htmlFor="body">Body (Markdown)</label>
          <textarea
            id="body"
            name="body"
            rows={20}
            defaultValue={post?.body}
            className={`${field} font-mono text-sm`}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-md bg-[#ad6d25] px-5 py-2 font-medium text-white hover:opacity-90"
          >
            Save
          </button>
        </div>
      </form>

      {!isNew && (
        <form action={deletePostAction} className="mt-6 border-t border-white/10 pt-6">
          <input type="hidden" name="slug" value={post.slug} />
          <button
            type="submit"
            className="rounded-md border border-[#ff6b6b]/40 px-4 py-2 text-sm text-[#ff6b6b] hover:bg-[#ff6b6b]/10"
          >
            Delete post
          </button>
        </form>
      )}
    </div>
  );
}
