import type { BlogRow, CategoryRow } from "@/lib/admin-data";
import { listCategories } from "@/lib/admin-data";
import { deletePostAction, savePostAction } from "../../actions";

const field = "rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#ad6d25]";
const labelClass = "text-sm text-white/70";

export async function PostEditor({ post }: { post?: BlogRow }) {
  const isNew = !post;
  const dateValue = post?.date ? post.date.slice(0, 10) : new Date().toISOString().slice(0, 10);
  const allCategories: CategoryRow[] = await listCategories();
  const selected = new Set(post?.categories ?? []);

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
          <fieldset className="flex flex-col gap-1">
            <legend className={labelClass}>Categories</legend>
            <div className="flex flex-wrap gap-3">
              {allCategories.map((cat) => (
                <label
                  key={cat.slug}
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:border-[#ad6d25] has-checked:border-[#ad6d25] has-checked:bg-[#ad6d25]/20"
                >
                  <input
                    type="checkbox"
                    name="categories"
                    value={cat.slug}
                    defaultChecked={selected.has(cat.slug)}
                    className="accent-[#ad6d25]"
                  />
                  {cat.name}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelClass} htmlFor="featuredImage">Featured image</label>
          <input type="hidden" name="currentFeaturedImage" value={post?.featured_image ?? ""} />
          <input
            id="featuredImage"
            name="featuredImage"
            type="file"
            accept="image/*"
            className={field}
          />
          {post?.featured_image && (
            <img
              src={post.featured_image}
              alt="Current featured image"
              className="mt-2 h-32 w-48 rounded border border-white/10 object-cover"
            />
          )}
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
