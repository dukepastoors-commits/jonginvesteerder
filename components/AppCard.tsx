import Link from "next/link";
import Stars from "./Stars";
import AffiliateButton from "./AffiliateButton";
import AppLogo from "./AppLogo";
import type { App } from "@/lib/types";

export default function AppCard({ app }: { app: App }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <AppLogo src={app.logo_url} naam={app.naam} size={48} />
        <div>
          <h3 className="font-bold text-ji-dark">{app.naam}</h3>
          <Stars rating={app.beoordeling} />
        </div>
      </div>
      <p className="text-sm text-slate-600 mb-4 flex-1">{app.beschrijving}</p>
      <ul className="text-xs text-slate-500 space-y-1 mb-4">
        <li>Vanaf €{app.minimale_inleg}</li>
        <li>Kosten: {app.transactiekosten}</li>
        {app.crypto_beschikbaar && <li>✓ Crypto beschikbaar</li>}
      </ul>
      <div className="flex gap-2">
        <Link
          href={`/app/${app.slug}`}
          className="flex-1 text-center border border-ji-dark text-ji-dark px-3 py-2 rounded-md text-sm font-semibold hover:bg-ji-dark hover:text-white"
        >
          Review
        </Link>
        <AffiliateButton href={app.affiliate_link}>Open account</AffiliateButton>
      </div>
    </div>
  );
}
