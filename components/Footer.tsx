import Link from "next/link";
import Disclaimer from "./Disclaimer";

export default function Footer() {
  return (
    <footer className="bg-ji-dark text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-white text-lg mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="JongInvesteerder" className="h-9 w-auto" />
            JongInvesteerder
          </div>
          <p className="text-sm">
            Eerlijke vergelijkingen voor jongeren die willen beginnen met beleggen.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Navigatie</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/vergelijk" className="hover:text-ji-teal">Vergelijk</Link></li>
            <li><Link href="/markt" className="hover:text-ji-teal">Markt</Link></li>
            <li><Link href="/nieuws" className="hover:text-ji-teal">Nieuws</Link></li>
            <li><Link href="/blog" className="hover:text-ji-teal">Blog</Link></li>
            <li><Link href="/over-ons" className="hover:text-ji-teal">Over ons</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Juridisch</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/over-ons" className="hover:text-ji-teal">Disclaimer</Link></li>
            <li><Link href="/over-ons" className="hover:text-ji-teal">Privacy</Link></li>
            <li><Link href="/over-ons" className="hover:text-ji-teal">Affiliate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">info@jonginvesteerder.nl</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Disclaimer />
          <p className="text-xs text-slate-500 mt-4">
            © {new Date().getFullYear()} JongInvesteerder.nl — Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
