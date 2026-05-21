import type { Metadata } from "next";
import Link from "next/link";
import TradingViewWidget from "@/components/TradingViewWidget";

export const metadata: Metadata = {
  title: "Live Beurskoersen Vandaag",
  description:
    "Live beurskoersen van ASML, Apple, NVIDIA, Tesla, Amazon en populaire ETF's. Begrijpelijk uitgelegd voor jonge beleggers.",
  alternates: { canonical: "/markt" }
};

// Statische marktfeiten (gemiddelde rendementen, geen live data — voor educatieve context)
const marktKerngetallen = [
  {
    naam: "S&P 500",
    omschrijving: "500 grootste Amerikaanse bedrijven",
    gemiddeldRendement: "≈ 10% per jaar",
    horizon: "100 jaar gemiddelde",
    etfTicker: "SPY / IVV / VUSA"
  },
  {
    naam: "MSCI World",
    omschrijving: "1500+ bedrijven uit ontwikkelde landen wereldwijd",
    gemiddeldRendement: "≈ 8% per jaar",
    horizon: "50 jaar gemiddelde",
    etfTicker: "IWDA / VWRL"
  },
  {
    naam: "AEX",
    omschrijving: "25 grootste bedrijven aan de Amsterdamse beurs",
    gemiddeldRendement: "≈ 7% per jaar",
    horizon: "40 jaar gemiddelde",
    etfTicker: "iShares AEX UCITS"
  },
  {
    naam: "NASDAQ-100",
    omschrijving: "100 grootste niet-financiële tech-bedrijven",
    gemiddeldRendement: "≈ 12% per jaar",
    horizon: "30 jaar gemiddelde",
    etfTicker: "QQQ / EQQQ"
  }
];

const uitlegBegrippen = [
  {
    term: "Koers",
    uitleg:
      "De prijs van één aandeel of ETF op dit moment. Wijzigt elke seconde dat de beurs open is."
  },
  {
    term: "Index",
    uitleg:
      "Een lijstje van bedrijven samen, zoals de AEX of S&P 500. Je kunt er via een ETF in beleggen."
  },
  {
    term: "ETF",
    uitleg:
      "Een mandje met aandelen dat een index volgt. Eén ETF kopen = direct gespreid in honderden bedrijven."
  },
  {
    term: "Rendement",
    uitleg:
      "Hoeveel je geld is gegroeid. 8% per jaar betekent dat €100 na een jaar €108 waard is (gemiddeld)."
  }
];

export default function MarktPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-3">Live beurskoersen</h1>
      <p className="text-slate-600 max-w-2xl mb-10">
        Volg in real-time wat er op de beurs gebeurt. We leggen alles uit in
        normale taal — geen jargon.
      </p>

      {/* LIVE TICKER TAPE */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Live koersen — nu</h2>
        <TradingViewWidget
          height={80}
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
          config={{
            symbols: [
              { proName: "NASDAQ:ASML", title: "ASML" },
              { proName: "NASDAQ:AAPL", title: "Apple" },
              { proName: "NASDAQ:NVDA", title: "NVIDIA" },
              { proName: "NASDAQ:TSLA", title: "Tesla" },
              { proName: "NASDAQ:AMZN", title: "Amazon" },
              { proName: "NASDAQ:MSFT", title: "Microsoft" },
              { proName: "NASDAQ:GOOGL", title: "Google" },
              { proName: "AMEX:SPY", title: "S&P 500 ETF" },
              { proName: "NASDAQ:QQQ", title: "NASDAQ ETF" },
              { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
              { proName: "BITSTAMP:ETHUSD", title: "Ethereum" }
            ],
            showSymbolLogo: true,
            isTransparent: false,
            displayMode: "adaptive",
            colorTheme: "light",
            locale: "nl_NL"
          }}
        />
        <div className="grid sm:grid-cols-3 gap-3 mt-4">
          <div className="bg-ji-light rounded-lg p-4 text-sm">
            <div className="font-semibold text-ji-dark mb-1">🟢 Groen</div>
            <p className="text-slate-600">Koers is gestegen vandaag.</p>
          </div>
          <div className="bg-ji-light rounded-lg p-4 text-sm">
            <div className="font-semibold text-ji-dark mb-1">🔴 Rood</div>
            <p className="text-slate-600">Koers is gedaald vandaag.</p>
          </div>
          <div className="bg-ji-light rounded-lg p-4 text-sm">
            <div className="font-semibold text-ji-dark mb-1">📊 Percentage</div>
            <p className="text-slate-600">Verandering t.o.v. gisteren&apos;s slot.</p>
          </div>
        </div>
      </section>

      {/* MARKTEN OVERZICHT — STATISCHE DATA */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Gemiddelde markt-rendementen</h2>
        <p className="text-slate-600 text-sm mb-6 max-w-3xl">
          Live koersen veranderen elke seconde — maar wat telt voor lange-termijn
          beleggen is het gemiddelde rendement over jaren. Hieronder de cijfers
          waar je écht iets aan hebt als je net begint.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {marktKerngetallen.map(m => (
            <div
              key={m.naam}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-ji-dark text-lg">{m.naam}</h3>
                <span className="text-ji-teal font-extrabold text-xl">
                  {m.gemiddeldRendement}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-3">{m.omschrijving}</p>
              <div className="flex justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                <span>{m.horizon}</span>
                <span className="font-mono">{m.etfTicker}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4">
          * Historische gemiddelden zijn geen garantie voor toekomstig rendement.
          Inflatie en kosten zijn niet meegenomen.
        </p>
      </section>

      {/* BEGRIPPEN */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Begrippen uitgelegd</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {uitlegBegrippen.map(b => (
            <div key={b.term} className="bg-ji-light rounded-xl p-5">
              <h3 className="font-bold text-ji-dark mb-2">{b.term}</h3>
              <p className="text-sm text-slate-700">{b.uitleg}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ji-dark text-white rounded-xl p-10 text-center mt-12">
        <h2 className="text-3xl font-bold mb-3">Klaar om te beginnen?</h2>
        <p className="text-slate-300 mb-6">
          Vergelijk hier de beste apps om zelf in deze markten te beleggen.
        </p>
        <Link
          href="/vergelijk"
          className="inline-block bg-ji-teal text-ji-dark font-bold px-8 py-3 rounded-md hover:opacity-90"
        >
          Vergelijk beleggingsapps
        </Link>
      </section>
    </div>
  );
}
