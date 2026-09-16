"use client";

import { useCallback, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import { ButtonNode } from "./button-extension";

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

function Divider() {
  return <span className="mx-1 h-5 w-px bg-white/15" />;
}

export function PostBodyEditor({ initialHtml }: { initialHtml: string }) {
  const initialIsMarkdown = !!initialHtml.trim() && !initialHtml.trimStart().startsWith("<");
  const [mode, setMode] = useState<"visual" | "markdown">(initialIsMarkdown ? "markdown" : "visual");
  const [content, setContent] = useState(initialHtml);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false, HTMLAttributes: { rel: "noopener" } },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image.configure({ HTMLAttributes: { class: "post-image" } }),
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
      ButtonNode,
    ],
    content: initialIsMarkdown ? "" : initialHtml,
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none min-h-[420px] rounded-b-md bg-white/5 px-4 py-3 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
  });

  const switchMode = (newMode: "visual" | "markdown") => {
    if (newMode === mode) return;
    if (newMode === "visual" && editor) {
      editor.commands.setContent(content);
    }
    setMode(newMode);
  };

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

  const addImage = useCallback(() => {
    if (!editor) return;
    const src = window.prompt("Image URL", "https://");
    if (!src) return;
    const alt = window.prompt("Alt text (describe the image)", "") ?? "";
    editor.chain().focus().setImage({ src, alt }).run();
  }, [editor]);

  const addButton = useCallback(() => {
    if (!editor) return;
    const label = window.prompt("Button text", "Learn more");
    if (label === null) return;
    const href = window.prompt("Button link URL", "https://");
    if (!href) return;
    editor.chain().focus().setButton({ href, label: label || "Learn more" }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="rounded-md border border-white/15">
      {/* Mode tabs */}
      <div className="flex rounded-t-md border-b border-white/15 bg-[#1c0509]">
        <button
          type="button"
          onClick={() => switchMode("visual")}
          className={`rounded-tl-md px-4 py-2 text-sm font-medium transition-colors ${
            mode === "visual"
              ? "bg-[#ad6d25] text-white"
              : "text-white/60 hover:text-white/90"
          }`}
        >
          Visual
        </button>
        <button
          type="button"
          onClick={() => switchMode("markdown")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            mode === "markdown"
              ? "bg-[#ad6d25] text-white"
              : "text-white/60 hover:text-white/90"
          }`}
        >
          Markdown
        </button>
      </div>

      {/* Visual editor */}
      <div className={mode === "visual" ? "" : "hidden"}>
        <div className="sticky top-0 z-20 flex flex-wrap items-center gap-1 border-b border-white/15 bg-[#1c0509] px-2 py-1.5">
          <ToolbarButton title="Bold" label="B" isActive={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} />
          <ToolbarButton title="Italic" label="I" isActive={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} />
          <Divider />
          <ToolbarButton title="Heading 2" label="H2" isActive={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
          <ToolbarButton title="Heading 3" label="H3" isActive={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
          <Divider />
          <ToolbarButton title="Align left" label="⟸" isActive={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()} />
          <ToolbarButton title="Align center" label="≡" isActive={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()} />
          <ToolbarButton title="Align right" label="⟹" isActive={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()} />
          <Divider />
          <ToolbarButton title="Bullet list" label="• List" isActive={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} />
          <ToolbarButton title="Numbered list" label="1. List" isActive={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
          <ToolbarButton title="Quote" label="❝" isActive={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} />
          <Divider />
          <ToolbarButton title="Link" label="Link" isActive={editor.isActive("link")} onClick={setLink} />
          <ToolbarButton title="Image" label="🖼" onClick={addImage} />
          <ToolbarButton title="Button" label="Button" isActive={editor.isActive("button")} onClick={addButton} />
          <Divider />
          <ToolbarButton title="Insert table" label="Table" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} />
          {editor.isActive("table") && (
            <>
              <ToolbarButton title="Add column after" label="+Col" onClick={() => editor.chain().focus().addColumnAfter().run()} />
              <ToolbarButton title="Delete column" label="-Col" onClick={() => editor.chain().focus().deleteColumn().run()} />
              <ToolbarButton title="Add row after" label="+Row" onClick={() => editor.chain().focus().addRowAfter().run()} />
              <ToolbarButton title="Delete row" label="-Row" onClick={() => editor.chain().focus().deleteRow().run()} />
              <ToolbarButton title="Delete table" label="Del Table" onClick={() => editor.chain().focus().deleteTable().run()} />
            </>
          )}
          <Divider />
          <ToolbarButton title="Undo" label="↶" onClick={() => editor.chain().focus().undo().run()} />
          <ToolbarButton title="Redo" label="↷" onClick={() => editor.chain().focus().redo().run()} />
        </div>
        <EditorContent editor={editor} />
      </div>

      {/* Markdown / raw editor */}
      {mode === "markdown" && (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[420px] rounded-b-md bg-white/5 px-4 py-3 font-mono text-sm text-stone-200 focus:outline-none resize-y"
          placeholder={"Write in Markdown:\n## Heading\n\n**bold**, _italic_\n\n- bullet list\n\n[link text](https://example.com)"}
        />
      )}

      <input type="hidden" name="body" value={content} />
    </div>
  );
}
