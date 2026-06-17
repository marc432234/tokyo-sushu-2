import { Node, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    button: {
      /** Insert a call-to-action button linking to `href`. */
      setButton: (attrs: { href: string; label?: string }) => ReturnType;
    };
  }
}

/**
 * A call-to-action button rendered as `<a data-button class="post-button">`.
 * The public renderer detects it via the `data-button` attribute (the class is
 * dropped by HTML sanitization there) and re-applies the styling.
 */
export const ButtonNode = Node.create({
  name: "button",
  group: "block",
  content: "inline*",
  defining: true,

  addAttributes() {
    return {
      href: {
        default: "#",
        parseHTML: (el) => el.getAttribute("href"),
        renderHTML: (attrs) => ({ href: attrs.href }),
      },
    };
  },

  parseHTML() {
    return [{ tag: "a[data-button]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "a",
      mergeAttributes(HTMLAttributes, { "data-button": "", class: "post-button" }),
      0,
    ];
  },

  addCommands() {
    return {
      setButton:
        (attrs) =>
        ({ chain }) =>
          chain()
            .insertContent({
              type: this.name,
              attrs: { href: attrs.href },
              content: [{ type: "text", text: attrs.label || "Learn more" }],
            })
            .run(),
    };
  },
});
