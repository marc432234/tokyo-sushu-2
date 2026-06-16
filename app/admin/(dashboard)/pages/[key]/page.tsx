import { notFound } from "next/navigation";

import { getPage } from "@/lib/admin-data";
import { savePageAction } from "../../../actions";

export default async function EditPagePage({
  params,
  searchParams,
}: {
  params: Promise<{ key: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { key } = await params;
  const { error } = await searchParams;
  const page = await getPage(key);
  if (!page) notFound();

  return (
    <div>
      <h1 className="mb-2 font-['Lora'] text-3xl capitalize">{key}</h1>
      <p className="mb-6 text-sm text-white/50">
        Edit the page content as JSON. Make sure it stays valid JSON before saving.
      </p>

      {error === "invalid-json" && (
        <p className="mb-4 rounded-md border border-[#ff6b6b]/40 bg-[#ff6b6b]/10 px-3 py-2 text-sm text-[#ff6b6b]">
          That wasn&apos;t valid JSON — nothing was saved.
        </p>
      )}

      <form action={savePageAction} className="flex flex-col gap-4">
        <input type="hidden" name="key" value={key} />
        <textarea
          name="content"
          rows={28}
          spellCheck={false}
          defaultValue={JSON.stringify(page.content, null, 2)}
          className="rounded-md border border-white/15 bg-white/5 px-3 py-2 font-mono text-sm text-white outline-none focus:border-[#ad6d25]"
        />
        <div>
          <button
            type="submit"
            className="rounded-md bg-[#ad6d25] px-5 py-2 font-medium text-white hover:opacity-90"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
