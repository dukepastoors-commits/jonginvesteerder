import Link from "next/link";

const links = [
  { href: "/vergelijk", label: "Vergelijk" },
  { href: "/markt", label: "Markt" },
  { href: "/nieuws", label: "Nieuws" },
  { href: "/blog", label: "Blog" },
  { href: "/over-ons", label: "Over ons" }
];

export default function Navbar() {
  return (
    <header className="bg-ji-dark text-white sticky top-0 z-40 shadow">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="JongInvesteerder homepage">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="text-white">Jong</span>
            <span className="text-ji-teal">Investeerder</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-ji-teal transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/vergelijk"
          className="hidden md:inline-block bg-ji-teal text-ji-dark font-semibold px-4 py-2 rounded-md hover:opacity-90"
        >
          Start vergelijken
        </Link>
      </div>
      <nav className="md:hidden flex gap-4 px-4 pb-3 text-sm overflow-x-auto">
        {links.map(l => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap hover:text-ji-teal">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
