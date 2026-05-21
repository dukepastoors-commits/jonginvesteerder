import type { Metadata } from "next";
import Link from "next/link";
import TradingViewWidget from "@/components/TradingViewWidget";

export const metadata: Metadata = {
  title: "Live Beurskoersen Vandaag",
  description:
    "Bekijk live beurskoersen van ASML, Apple, NVIDIA, Tesla, Amazon en populaire ETF's. Gratis en in begrijpelijke taal uitgelegd.",
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
              { proName: "NASDAQ:ASML", title: "ASML" },
              { proName: "NASDAQ:AAPL", title: "Apple" },
              { proName: "NASDAQ:NVDA", title: "NVIDIA" },
              { proName: "NASDAQ:TSLA", title: "Tesla" },
              { proName: "NASDAQ:AMZN", title: "Amazon" },
              { proName: "AMEX:SPY", title: "S&P 500 (SPY)" },
              { proName: "NASDAQ:QQQ", title: "NASDAQ 100 (QQQ)" }
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

      {/* POPULAIRE ETF'S */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Populaire markten</h2>
        <p className="text-slate-600 mb-4 text-sm">
          De koers van indices zoals AEX, S&amp;P 500 en NASDAQ zelf is alleen op
          TradingView te bekijken. Hieronder zie je de bijbehorende ETF&apos;s — dat
          zijn de instrumenten waarmee jij zélf in die markten kunt beleggen.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <TradingViewWidget
            height={240}
            scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
            config={{
              symbol: "AMEX:SPY",
              width: "100%",
              height: 240,
              locale: "nl_NL",
              dateRange: "12M",
              colorTheme: "light",
              isTransparent: false,
              autosize: true,
              largeChartUrl: ""
            }}
          />
          <TradingViewWidget
            height={240}
            scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
            config={{
              symbol: "NASDAQ:QQQ",
              width: "100%",
              height: 240,
              locale: "nl_NL",
              dateRange: "12M",
              colorTheme: "light",
              isTransparent: false,
              autosize: true,
              largeChartUrl: ""
            }}
          />
          <TradingViewWidget
            height={240}
            scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
            config={{
              symbol: "AMEX:VT",
              width: "100%",
              height: 240,
              locale: "nl_NL",
              dateRange: "12M",
              colorTheme: "light",
              isTransparent: false,
              autosize: true,
              largeChartUrl: ""
            }}
          />
        </div>
        <p className="text-sm text-slate-600 mt-3 bg-ji-light p-4 rounded-lg">
          <strong>Wat zie je hier?</strong> SPY volgt de S&amp;P 500 (500 grootste
          Amerikaanse bedrijven). QQQ volgt de NASDAQ-100 (tech-zwaar). VT volgt
          de hele wereld in één ETF. Eén aandeel kopen in zo&apos;n ETF geeft je
          direct spreiding over honderden of duizenden bedrijven.
        </p>
      </section>

      {/* SINGLE CHART — ASML */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Featured: ASML</h2>
        <TradingViewWidget
          height={500}
          scriptSrc="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"
          config={{
            symbols: [["ASML", "NASDAQ:ASML|12M"]],
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
            hideMarketStatus: false,
            scalePosition: "right",
            scaleMode: "Normal",
            fontFamily: "Inter, sans-serif",
            fontSize: "10",
            noTimeScale: false,
            valuesTracking: "1",
            changeMode: "price-and-percent",
            chartType: "area"
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
