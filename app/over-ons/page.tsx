import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over JongInvesteerder",
  description:
    "JongInvesteerder.nl is opgericht om jongeren (18-30) eerlijk te informeren over beleggen en beleggingsapps.",
  alternates: { canonical: "/over-ons" }
};

export default function OverOnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-6">Over JongInvesteerder</h1>
      <div className="prose-ji">
        <p>
          JongInvesteerder.nl is opgericht om Nederlandse jongeren tussen de 18 en 30
          jaar een eerlijke startplek te geven voor beleggen. Wij geloven dat
          beleggen voor iedereen toegankelijk hoort te zijn — zonder jargon en
          zonder fancy marketingpraat.
        </p>

        <h2>Wat we doen</h2>
        <p>
          We vergelijken beleggingsapps, schrijven actueel nieuws, en leggen in
          tijdloze blogartikelen uit hoe beleggen werkt. We werken samen met
          enkele apps via affiliate-links — daar krijgen we een vergoeding voor
          als je via ons een account opent. Dit beïnvloedt onze reviews niet.
        </p>

        <h2>Hoe we werken</h2>
        <p>
          Onze reviews zijn gebaseerd op publieke informatie, eigen ervaring met
          de apps en feedback van gebruikers. We updaten de data regelmatig en
          markeren altijd de datum van de laatste check.
        </p>

        <h2>Disclaimer</h2>
        <p>
          De informatie op deze site is geen financieel advies. Beleggen brengt
          risico&apos;s met zich mee — je kunt geld verliezen. Doe altijd je eigen
          onderzoek voordat je belegt.
        </p>

        <h2>Contact</h2>
        <p>Vragen of feedback? Mail naar info@jonginvesteerder.nl</p>
      </div>
    </div>
  );
}
