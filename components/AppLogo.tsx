"use client";
import { useState } from "react";

export default function AppLogo({
  src,
  naam,
  size = 48
}: {
  src: string;
  naam: string;
  size?: number;
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className="rounded-md bg-ji-light grid place-items-center font-bold text-ji-dark"
        style={{ width: size, height: size, fontSize: size * 0.3 }}
      >
        {naam.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${naam} logo`}
      width={size}
      height={size}
      onError={() => setError(true)}
      className="rounded-md bg-white object-contain p-1 border border-slate-100"
      style={{ width: size, height: size }}
    />
  );
}
