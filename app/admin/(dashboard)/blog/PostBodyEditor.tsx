"use client";

import { useCallback, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const btn =
  "rounded px-2 py-1 text-sm text-white/80 hover:bg-white/10 disabled:opacity-40";
const btnActive = "bg-[#ad6d25] text-white hover:bg-[#ad6d25]";

function ToolbarButton({
  label,
  onClick,
  isActive,
  title,
}: {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  title: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`${btn} ${isActive ? btnActive : ""}`}
    >
      {label}
    </button>
  );
}

export function PostBodyEditor({ initialHtml }: { initialHtml: string }) {
  const [html, setHtml] = useState(initialHtml);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false, HTMLAttributes: { rel: "noopener" } },
      }),
    ],
    content: initialHtml,
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none min-h-[420px] rounded-b-md bg-white/5 px-4 py-3 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => setHtml(editor.getHTML()),
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const previous = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", previous ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="rounded-md border border-white/15">
      <div className="flex flex-wrap items-center gap-1 border-b border-white/15 bg-white/5 px-2 py-1.5">
        <ToolbarButton title="Bold" label="B" isActive={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} />
        <ToolbarButton title="Italic" label="I" isActive={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} />
        <span className="mx-1 h-5 w-px bg-white/15" />
        <ToolbarButton title="Heading 2" label="H2" isActive={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
        <ToolbarButton title="Heading 3" label="H3" isActive={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
        <span className="mx-1 h-5 w-px bg-white/15" />
        <ToolbarButton title="Bullet list" label="• List" isActive={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} />
        <ToolbarButton title="Numbered list" label="1. List" isActive={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
        <ToolbarButton title="Quote" label="❝" isActive={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} />
        <ToolbarButton title="Link" label="Link" isActive={editor.isActive("link")} onClick={setLink} />
        <span className="mx-1 h-5 w-px bg-white/15" />
        <ToolbarButton title="Undo" label="↶" onClick={() => editor.chain().focus().undo().run()} />
        <ToolbarButton title="Redo" label="↷" onClick={() => editor.chain().focus().redo().run()} />
      </div>

      <EditorContent editor={editor} />
      <input type="hidden" name="body" value={html} />
    </div>
  );
}
