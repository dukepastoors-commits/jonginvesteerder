"use client";
import { useEffect, useRef } from "react";

type Props = {
  scriptSrc: string;
  config: Record<string, unknown>;
  height?: number;
};

export default function TradingViewWidget({ scriptSrc, config, height = 500 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";

    const container = document.createElement("div");
    container.className = "tradingview-widget-container__widget";
    ref.current.appendChild(container);

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify(config);
    ref.current.appendChild(script);
  }, [scriptSrc, config]);

  return (
    <div className="tradingview-widget-container" style={{ height }}>
      <div ref={ref} style={{ height: "100%" }} />
    </div>
  );
}
