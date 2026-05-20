"use client";
import { useState } from "react";

const items = [
  {
    q: "Met hoeveel geld kan ik beginnen met beleggen?",
    a: "Bij apps als Trading 212 en BUX begin je al vanaf €1. Belangrijker dan het bedrag is dat je regelmatig inlegt."
  },
  {
    q: "Is beleggen veilig?",
    a: "Beleggen brengt risico's met zich mee — je kunt geld verliezen. Spreid je inleg en belegg alleen geld dat je voorlopig kan missen."
  },
  {
    q: "Wat is het verschil tussen aandelen en ETF's?",
    a: "Een aandeel is een stukje van één bedrijf. Een ETF is een mandje met veel aandelen of obligaties tegelijk — meer spreiding."
  },
  {
    q: "Moet ik belasting betalen over mijn beleggingen?",
    a: "In Nederland betaal je vermogensbelasting in box 3 over je vermogen boven de vrijstelling. Vraag bij twijfel advies."
  },
  {
    q: "Welke app is het beste voor beginners?",
    a: "Dat hangt af van wat je zoekt. Trading 212 en BUX zijn populair vanwege gebruiksgemak. Vergelijk de opties op onze vergelijkpagina."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((it, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-5 py-4 font-semibold text-ji-dark flex justify-between items-center hover:bg-ji-light"
          >
            <span>{it.q}</span>
            <span className="text-ji-teal text-xl">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">{it.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
