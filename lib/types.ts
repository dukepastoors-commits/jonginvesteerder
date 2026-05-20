export type App = {
  id: string;
  naam: string;
  slug: string;
  logo_url: string;
  minimale_inleg: number;
  transactiekosten: string;
  maandelijkse_kosten: string;
  beoordeling: number;
  geschikt_voor_beginners: boolean;
  crypto_beschikbaar: boolean;
  affiliate_link: string;
  beschrijving: string;
  voor_wie: string;
  voordelen: string[];
  nadelen: string[];
  laatste_update: string;
};

export type Artikel = {
  id: string;
  titel: string;
  slug: string;
  samenvatting: string;
  inhoud: string;
  afbeelding_url: string;
  category: "Aandelen" | "ETF" | "Crypto" | "Apps" | "Beginners" | "Strategie";
  gepubliceerd_op: string;
  leestijd_minuten: number;
  gerelateerde_apps?: string[];
};
