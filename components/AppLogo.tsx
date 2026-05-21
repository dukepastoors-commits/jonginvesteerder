"use client";
import { useState } from "react";

/**
 * Robuuste broker-logo component met fallback-keten:
 * 1. Probeert Clearbit logo (https://logo.clearbit.com/<domein>)
 * 2. Bij fout → Google favicon (altijd beschikbaar)
 * 3. Bij fout → initialen in een gekleurd vierkant
 */
export default function AppLogo({
  src,
  naam,
  size = 48
}: {
  src: string;
  naam: string;
  size?: number;
}) {
  // Extract domein uit Clearbit-URL voor de Google favicon fallback
  const domain = src.includes("clearbit.com/")
    ? src.split("clearbit.com/")[1]
    : src.replace(/^https?:\/\//, "").split("/")[0];

  const googleFavicon = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    : "";

  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (currentSrc !== googleFavicon && googleFavicon) {
      setCurrentSrc(googleFavicon);
    } else {
      setFailed(true);
    }
  };

  if (failed || !src) {
    return (
      <div
        className="rounded-md bg-ji-teal/10 text-ji-dark grid place-items-center font-bold shrink-0"
        style={{ width: size, height: size, fontSize: size * 0.32 }}
      >
        {naam.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={`${naam} logo`}
      width={size}
      height={size}
      onError={handleError}
      className="rounded-md bg-white object-contain p-1 border border-slate-100 shrink-0"
      style={{ width: size, height: size }}
    />
  );
}
