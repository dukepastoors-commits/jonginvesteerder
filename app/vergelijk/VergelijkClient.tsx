"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";
import AffiliateButton from "@/components/AffiliateButton";
import type { App } from "@/lib/types";

export default function VergelijkClient({ apps }: { apps: App[] }) {
  const [minInleg, setMinInleg] = useState<number>(1000);
  const [type, setType] = useState<"all" | "beginner" | "gevorderd">("all");
  const [crypto, setCrypto] = useState<"all" | "yes" | "no">("all");
  const [lageKosten, setLageKosten] = useState(false);

  const filtered = useMemo(() => {
    return apps.filter(a => {
      if (a.minimale_inleg > minInleg) return false;
      if (type === "beginner" && !a.geschikt_voor_beginners) return false;
      if (type === "gevorderd" && a.geschikt_voor_beginners && a.beoordeling < 4.3) return false;
      if (crypto === "yes" && !a.crypto_beschikbaar) return false;
      if (crypto === "no" && a.crypto_beschikbaar) return false;
      if (lageKosten && !/€?\s*0|gratis/i.test(a.transactiekosten)) return false;
      return true;
    });
  }, [apps, minInleg, type, crypto, lageKosten]);

  return (
    <div>
      {/* FILTERS */}
      <div className="bg-ji-light border border-slate-200 rounded-xl p-5 mb-6 grid md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-semibold text-ji-dark mb-1">
            Max. minimale inleg: €{minInleg}
          </label>
          <input
            type="range"
            min={1}
            max={1000}
            value={minInleg}
            onChange={e => setMinInleg(+e.target.value)}
            className="w-full accent-ji-teal"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-ji-dark mb-1">Type belegger</label>
          <select
            value={type}
            onChange={e => setType(e.target.value as typeof type)}
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm bg-white"
          >
            <option value="all">Alle</option>
            <option value="beginner">Beginner</option>
            <option value="gevorderd">Gevorderd</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-ji-dark mb-1">Crypto</label>
          <select
            value={crypto}
            onChange={e => setCrypto(e.target.value as typeof crypto)}
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm bg-white"
          >
            <option value="all">Maakt niet uit</option>
            <option value="yes">Ja</option>
            <option value="no">Nee</option>
          </select>
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 text-sm font-medium text-ji-dark">
            <input
              type="checkbox"
              checked={lageKosten}
              onChange={e => setLageKosten(e.target.checked)}
              className="accent-ji-teal w-4 h-4"
            />
            Alleen lage kosten
          </label>
        </div>
      </div>

      {/* TABEL */}
      <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl">
        <table className="w-full text-sm">
          <thead className="bg-ji-dark text-white text-left">
            <tr>
              <th className="px-4 py-3">App</th>
              <th className="px-4 py-3">Min. inleg</th>
              <th className="px-4 py-3">Transactiekosten</th>
              <th className="px-4 py-3">Beoordeling</th>
              <th className="px-4 py-3">Beginner</th>
              <th className="px-4 py-3">Crypto</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(a => (
              <tr key={a.id} className="border-t border-slate-100 hover:bg-ji-light/50">
                <td className="px-4 py-4">
                  <Link href={`/app/${a.slug}`} className="flex items-center gap-3 font-semibold text-ji-dark hover:text-ji-teal">
                    <span className="w-10 h-10 rounded-md bg-ji-light grid place-items-center text-xs font-bold">
                      {a.naam.slice(0, 2)}
                    </span>
                    {a.naam}
                  </Link>
                </td>
                <td className="px-4 py-4">€{a.minimale_inleg}</td>
                <td className="px-4 py-4 text-slate-600">{a.transactiekosten}</td>
                <td className="px-4 py-4"><Stars rating={a.beoordeling} /></td>
                <td className="px-4 py-4">{a.geschikt_voor_beginners ? "✓" : "—"}</td>
                <td className="px-4 py-4">{a.crypto_beschikbaar ? "✓" : "—"}</td>
                <td className="px-4 py-4 text-right">
                  <AffiliateButton href={a.affiliate_link}>Open account</AffiliateButton>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
                  Geen apps gevonden met deze filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
