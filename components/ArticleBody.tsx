import { Fragment } from "react";

/**
 * Mini markdown renderer.
 * Ondersteunt: ## h2, ### h3, - lijsten, **bold**, lege regels, gewone paragrafen.
 * Lijst-items worden netjes gegroepeerd in een <ul>.
 */
function renderInline(text: string, keyPrefix: string) {
  // Split op **bold** markers
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>
      );
    }
    return <Fragment key={`${keyPrefix}-${i}`}>{part}</Fragment>;
  });
}

export default function ArticleBody({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const blocks: React.ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return;
    blocks.push(
      <ul key={`ul-${key}`}>
        {listBuffer.map((item, i) => (
          <li key={`li-${key}-${i}`}>{renderInline(item, `li-${key}-${i}`)}</li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  lines.forEach((rawLine, i) => {
    const line = rawLine.trimEnd();
    if (line.startsWith("- ")) {
      listBuffer.push(line.slice(2));
      return;
    }
    flushList(`${i}`);

    if (line.startsWith("## ")) {
      blocks.push(<h2 key={`h2-${i}`}>{renderInline(line.slice(3), `h2-${i}`)}</h2>);
    } else if (line.startsWith("### ")) {
      blocks.push(<h3 key={`h3-${i}`}>{renderInline(line.slice(4), `h3-${i}`)}</h3>);
    } else if (line.trim() === "") {
      // skip
    } else {
      blocks.push(<p key={`p-${i}`}>{renderInline(line, `p-${i}`)}</p>);
    }
  });

  flushList("end");

  return <div className="prose-ji">{blocks}</div>;
}
