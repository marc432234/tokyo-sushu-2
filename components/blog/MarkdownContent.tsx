import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-display text-3xl md:text-5xl leading-tight text-stone-50">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="pt-4 font-display text-2xl md:text-4xl leading-tight text-stone-50">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-xl md:text-3xl leading-tight text-stone-50">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-lg leading-9 text-stone-300">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc space-y-3 pl-6 text-lg leading-8 text-stone-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal space-y-3 pl-6 text-lg leading-8 text-stone-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#ad6d25] underline underline-offset-4 hover:text-[#cf8b3d]"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#ad6d25] pl-5 italic text-stone-300">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-base text-stone-100">
      {children}
    </code>
  ),
  hr: () => <hr className="border-white/15" />,
};

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="space-y-7 text-stone-200">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
