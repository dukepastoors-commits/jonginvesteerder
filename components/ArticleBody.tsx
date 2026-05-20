export default function ArticleBody({ markdown }: { markdown: string }) {
  const blocks = markdown.split("\n").map((line, i) => {
    if (line.startsWith("## ")) return <h2 key={i}>{line.slice(3)}</h2>;
    if (line.startsWith("### ")) return <h3 key={i}>{line.slice(4)}</h3>;
    if (line.startsWith("- ")) return <li key={i}>{line.slice(2)}</li>;
    if (line.trim() === "") return null;
    return <p key={i}>{line}</p>;
  });
  return <div className="prose-ji">{blocks}</div>;
}
