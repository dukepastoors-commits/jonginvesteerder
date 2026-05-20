import type { Metadata } from "next";
import Link from "next/link";
import TradingViewWidget from "@/components/TradingViewWidget";

export const metadata: Metadata = {
  title: "Live Beurskoersen Vandaag",
  description:
    "Bekijk live beurskoersen van ASML, Apple, NVIDIA, Tesla, Amazon en de belangrijkste indices. Gratis en in begrijpelijke taal uitgelegd.",
  alternates: { canonical: "/markt" }
};

export default function MarktPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-3">Live beurskoersen</h1>
      <p className="text-slate-600 max-w-2xl mb-10">
        Volg in real-time wat er op de beurs gebeurt. We leggen onder elke grafiek
        uit wat het voor jou betekent als beginner.
      </p>

      {/* TICKER TAPE */}
      <section className="mb-10">
        <TradingViewWidget
          height={80}
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
          config={{
            symbols: [
              { proName: "AMEX:ASML", title: "ASML" },
              { proName: "NASDAQ:AAPL", title: "Apple" },
              { proName: "NASDAQ:NVDA", title: "NVIDIA" },
              { proName: "NASDAQ:TSLA", title: "Tesla" },
              { proName: "NASDAQ:AMZN", title: "Amazon" }
            ],
            showSymbolLogo: true,
            isTransparent: false,
            displayMode: "adaptive",
            colorTheme: "light",
            locale: "nl_NL"
          }}
        />
        <p className="text-sm text-slate-600 mt-3 bg-ji-light p-4 rounded-lg">
          <strong>Wat betekent dit voor jou als beginner?</strong> De ticker laat
          actuele koersen zien. Groen = stijging, rood = daling. Voor lange-termijn
          beleggen zijn dagelijkse bewegingen meestal niet belangrijk.
        </p>
      </section>

      {/* MARKET OVERVIEW */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Belangrijkste indices</h2>
        <TradingViewWidget
          height={500}
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
          config={{
            colorTheme: "light",
            dateRange: "12M",
            showChart: true,
            locale: "nl_NL",
            largeChartUrl: "",
            isTransparent: false,
            showSymbolLogo: true,
            width: "100%",
            height: 500,
            tabs: [
              {
                title: "Indices",
                symbols: [
                  { s: "EURONEXT:AEX", d: "AEX" },
                  { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
                  { s: "NASDAQ:IXIC", d: "NASDAQ" }
                ]
              }
            ]
          }}
        />
        <p className="text-sm text-slate-600 mt-3 bg-ji-light p-4 rounded-lg">
          <strong>Wat betekent dit voor jou als beginner?</strong> Indices zoals AEX
          en S&P 500 zijn een mandje aandelen. Je kunt hierin beleggen via ETF&apos;s —
          dat geeft direct spreiding zonder zelf 500 aandelen te kopen.
        </p>
      </section>

      {/* SINGLE CHART */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Featured: ASML</h2>
        <TradingViewWidget
          height={500}
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"
          config={{
            symbols: [["ASML", "AMEX:ASML|12M"]],
            chartOnly: false,
            width: "100%",
            height: 500,
            locale: "nl_NL",
            colorTheme: "light",
            isTransparent: false,
            autosize: true,
            showVolume: false,
            showMA: false,
            hideDateRanges: false,
            hideMarketStatus: false
          }}
        />
        <p className="text-sm text-slate-600 mt-3 bg-ji-light p-4 rounded-lg">
          <strong>Wat betekent dit voor jou als beginner?</strong> ASML is een
          Nederlands tech-bedrijf en zwaargewicht in de AEX. Eén aandeel kopen is
          duur — ETF&apos;s of fractioneel beleggen maken dit toegankelijker.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-ji-dark text-white rounded-xl p-10 text-center mt-12">
        <h2 className="text-3xl font-bold mb-3">Klaar om te beginnen?</h2>
        <p className="text-slate-300 mb-6">Vergelijk hier de beste apps</p>
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
