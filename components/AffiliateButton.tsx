export default function AffiliateButton({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  const base = "inline-block px-5 py-2.5 rounded-md font-semibold text-sm transition-colors";
  const styles =
    variant === "primary"
      ? "bg-ji-teal text-ji-dark hover:opacity-90"
      : "border border-ji-teal text-ji-teal hover:bg-ji-teal hover:text-ji-dark";
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}
