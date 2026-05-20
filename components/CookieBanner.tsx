"use client";
import { useEffect, useState } from "react";

const KEY = "ji-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const set = (value: "accept" | "decline") => {
    localStorage.setItem(KEY, value);
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-ji-dark text-white rounded-lg shadow-xl p-5 border border-white/10">
      <h4 className="font-semibold mb-2">Cookies op JongInvesteerder</h4>
      <p className="text-sm text-slate-300 mb-4">
        We gebruiken cookies om de site te verbeteren en (affiliate) klikken te meten.
        Je kunt accepteren of weigeren.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => set("accept")}
          className="bg-ji-teal text-ji-dark font-semibold px-4 py-2 rounded-md text-sm flex-1"
        >
          Accepteren
        </button>
        <button
          onClick={() => set("decline")}
          className="border border-white/20 text-white px-4 py-2 rounded-md text-sm flex-1 hover:bg-white/5"
        >
          Weigeren
        </button>
      </div>
    </div>
  );
}
