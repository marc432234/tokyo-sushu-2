import type { ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

function renderParagraph(text: string): ReactNode[] {
  return text.split("\n").flatMap((line, index, lines) => {
    const nodes = renderInline(line);

    if (index < lines.length - 1) {
      return [...nodes, <br key={`br-${index}`} />];
    }

    return nodes;
  });
}

export function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/).filter((block) => block.trim() !== "");

  return (
    <div className="space-y-7 text-stone-200">
      {blocks.map((block, index) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="font-display text-3xl leading-tight text-stone-50"
            >
              {renderInline(trimmed.replace(/^### /, ""))}
            </h3>
          );
        }

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="pt-4 font-display text-4xl leading-tight text-stone-50"
            >
              {renderInline(trimmed.replace(/^## /, ""))}
            </h2>
          );
        }

        if (trimmed.startsWith("# ")) {
          return (
            <h1
              key={index}
              className="font-display text-5xl leading-tight text-stone-50"
            >
              {renderInline(trimmed.replace(/^# /, ""))}
            </h1>
          );
        }

        if (trimmed.split("\n").every((line) => line.startsWith("- "))) {
          return (
            <ul key={index} className="list-disc space-y-3 pl-6 text-lg leading-8 text-stone-300">
              {trimmed.split("\n").map((line) => (
                <li key={line}>{renderInline(line.replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="text-lg leading-9 text-stone-300">
            {renderParagraph(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
