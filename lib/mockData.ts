import type { App, Artikel } from "./types";

export const mockApps: App[] = [
  {
    id: "1",
    naam: "DEGIRO",
    slug: "degiro",
    logo_url: "/logos/degiro.svg",
    minimale_inleg: 0.01,
    transactiekosten: "€1 - €3 per transactie",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.5,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.degiro.nl/?ref=jonginvesteerder",
    beschrijving:
      "DEGIRO is een Nederlandse broker met lage kosten en toegang tot beurzen wereldwijd. Populair onder Nederlandse beleggers die zelf willen handelen.",
    voor_wie:
      "Beleggers die zelf aandelen en ETF's willen kopen tegen lage kosten en niet om hoge functies geven.",
    voordelen: [
      "Zeer lage transactiekosten",
      "Brede keuze aan beurzen",
      "Nederlandse broker met support in het NL"
    ],
    nadelen: [
      "Geen fractioneel beleggen voor alle aandelen",
      "Geen crypto",
      "Interface kan even wennen zijn"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "2",
    naam: "Trading 212",
    slug: "trading-212",
    logo_url: "/logos/trading212.svg",
    minimale_inleg: 1,
    transactiekosten: "€0 (gratis)",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.6,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.trading212.com/?ref=jonginvesteerder",
    beschrijving:
      "Trading 212 biedt gratis aandelen en ETF's met fractioneel beleggen vanaf €1. Een populaire keuze voor jonge beginners.",
    voor_wie:
      "Beginners die met kleine bedragen willen starten en fractionele aandelen willen kopen.",
    voordelen: [
      "Gratis transacties",
      "Fractioneel beleggen vanaf €1",
      "Mooie en simpele app"
    ],
    nadelen: [
      "Geen Nederlandse vestiging",
      "Geen crypto",
      "Soms wachtlijst bij grote drukte"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "3",
    naam: "eToro",
    slug: "etoro",
    logo_url: "/logos/etoro.svg",
    minimale_inleg: 50,
    transactiekosten: "€0 voor aandelen, spread bij crypto",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.0,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: true,
    affiliate_link: "https://www.etoro.com/?ref=jonginvesteerder",
    beschrijving:
      "eToro combineert aandelen, ETF's en crypto in één platform met social trading: kopieer ervaren beleggers.",
    voor_wie:
      "Wie alles op één plek wil: aandelen, crypto en social trading.",
    voordelen: [
      "Aandelen én crypto",
      "Copy trading functie",
      "Gratis aandelen transacties"
    ],
    nadelen: [
      "Hogere kosten voor crypto",
      "USD-wisselkosten",
      "Niet alles is geschikt voor langetermijn"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "4",
    naam: "BUX",
    slug: "bux",
    logo_url: "/logos/bux.svg",
    minimale_inleg: 1,
    transactiekosten: "€1 per transactie (BUX Zero)",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.1,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.getbux.com/?ref=jonginvesteerder",
    beschrijving:
      "BUX is een Nederlandse beleggingsapp die beleggen voor beginners simpel maakt met heldere uitleg.",
    voor_wie:
      "Nederlandse beginners die een eenvoudige app willen met Nederlandse support.",
    voordelen: [
      "Nederlandse app",
      "Heldere interface",
      "Goede begeleiding voor beginners"
    ],
    nadelen: [
      "Minder uitgebreid aanbod",
      "Beperkte beurzen",
      "Geen geavanceerde grafieken"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "5",
    naam: "Scalable Capital",
    slug: "scalable-capital",
    logo_url: "/logos/scalable.svg",
    minimale_inleg: 1,
    transactiekosten: "€0,99 of gratis met Prime abonnement",
    maandelijkse_kosten: "€0 - €4,99",
    beoordeling: 4.3,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: true,
    affiliate_link: "https://de.scalable.capital/?ref=jonginvesteerder",
    beschrijving:
      "Scalable Capital biedt aandelen, ETF's en crypto met gratis spaarplannen. Goede keuze voor periodiek inleggen.",
    voor_wie:
      "Lange-termijn beleggers die graag automatisch periodiek inleggen in ETF's.",
    voordelen: [
      "Gratis ETF spaarplannen",
      "Crypto beschikbaar",
      "Veel ETF's"
    ],
    nadelen: [
      "Duitse broker",
      "Prime abonnement voor beste tarieven",
      "App in het Engels/Duits"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "6",
    naam: "Trade Republic",
    slug: "trade-republic",
    logo_url: "/logos/traderepublic.svg",
    minimale_inleg: 1,
    transactiekosten: "€1 per transactie",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.4,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: true,
    affiliate_link: "https://traderepublic.com/?ref=jonginvesteerder",
    beschrijving:
      "Trade Republic is een Duitse mobile-first broker met aandelen, ETF's, derivaten en crypto.",
    voor_wie:
      "Mobile-first beleggers die ook crypto of derivaten willen verhandelen.",
    voordelen: [
      "Mobiele app",
      "Rente op cashsaldo",
      "Brede keuze"
    ],
    nadelen: [
      "Geen webversie",
      "Klantenservice via e-mail",
      "Duitse broker"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "7",
    naam: "Peaks",
    slug: "peaks",
    logo_url: "/logos/peaks.svg",
    minimale_inleg: 1,
    transactiekosten: "Geen, wel servicekosten",
    maandelijkse_kosten: "€1 - €4",
    beoordeling: 3.8,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://peaks.app/?ref=jonginvesteerder",
    beschrijving:
      "Peaks is een Nederlandse app die je wisselgeld automatisch belegt in ETF-portefeuilles.",
    voor_wie:
      "Absolute beginners die met klein wisselgeld willen starten zonder zelf keuzes te maken.",
    voordelen: [
      "Volledig automatisch",
      "Nederlandse app",
      "Goede uitleg in app"
    ],
    nadelen: [
      "Maandelijkse kosten",
      "Beperkte controle",
      "Geen losse aandelen"
    ],
    laatste_update: "2026-05-01"
  }
];

export const mockNieuws: Artikel[] = [
  {
    id: "n1",
    titel: "AEX bereikt nieuwe recordstand in mei 2026",
    slug: "aex-recordstand-mei-2026",
    samenvatting:
      "De Amsterdamse beursindex AEX is deze week voor het eerst boven de 1000 punten gesloten. Wat betekent dat voor jou?",
    inhoud:
      "## Wat is er gebeurd?\n\nDe AEX-index is gestegen tot een nieuw record. Vooral aandelen als ASML en Shell trokken de markt omhoog.\n\n## Wat betekent dit voor beginners?\n\nEen hoge stand betekent niet automatisch dat je nu niet meer moet instappen. Wel is het verstandig om gespreid in te leggen via periodieke inleg.",
    afbeelding_url: "/news/aex.jpg",
    category: "Aandelen",
    gepubliceerd_op: "2026-05-15",
    leestijd_minuten: 3,
    gerelateerde_apps: ["degiro", "trading-212"]
  },
  {
    id: "n2",
    titel: "Bitcoin daalt 8% na nieuwe regelgeving",
    slug: "bitcoin-daalt-na-regelgeving-2026",
    samenvatting:
      "Bitcoin zakte deze week met 8% nadat de EU nieuwe regels aankondigde. Wat zijn de gevolgen voor crypto-beleggers?",
    inhoud:
      "## De nieuwe regels\n\nDe EU heeft strengere regels aangekondigd voor crypto-platforms binnen MiCA.\n\n## Voor jou als belegger\n\nVoor de meeste lange-termijn crypto-beleggers verandert er niet veel. Strengere regels betekenen meer bescherming.",
    afbeelding_url: "/news/btc.jpg",
    category: "Crypto",
    gepubliceerd_op: "2026-05-12",
    leestijd_minuten: 4,
    gerelateerde_apps: ["etoro", "trade-republic"]
  },
  {
    id: "n3",
    titel: "Trading 212 lanceert nieuwe spaarrekening",
    slug: "trading-212-spaarrekening",
    samenvatting:
      "Trading 212 introduceert een spaarrekening met 3.5% rente op je cashsaldo. Hoe verhoudt zich dit tot concurrenten?",
    inhoud:
      "## Wat is nieuw?\n\nTrading 212 biedt nu rente op je cashsaldo, zonder maandelijkse kosten.\n\n## Vergelijking\n\nTrade Republic biedt vergelijkbare rente. Voor langetermijnbeleggen blijft beleggen in ETF's meestal interessanter dan sparen.",
    afbeelding_url: "/news/t212.jpg",
    category: "Apps",
    gepubliceerd_op: "2026-05-08",
    leestijd_minuten: 2,
    gerelateerde_apps: ["trading-212", "trade-republic"]
  }
];

export const mockBlog: Artikel[] = [
  {
    id: "b1",
    titel: "Hoe begin je met beleggen als jongere?",
    slug: "hoe-begin-je-met-beleggen",
    samenvatting:
      "Een stap-voor-stap gids voor 18-30 jarigen die willen beginnen met beleggen. Geen jargon, wel duidelijke tips.",
    inhoud:
      "## Stap 1: Bouw eerst een buffer\n\nZorg dat je 3 maanden vaste lasten op je spaarrekening hebt voor je begint.\n\n## Stap 2: Bepaal je doel\n\nWil je pensioen opbouwen of geld voor een huis? Dit bepaalt je strategie.\n\n## Stap 3: Kies een app\n\nVergelijk apps op kosten, gebruiksgemak en beschikbaarheid van ETF's.\n\n## Stap 4: Begin klein en periodiek\n\nBelegg elke maand een vast bedrag. Dit heet dollar-cost-averaging.",
    afbeelding_url: "/blog/start.jpg",
    category: "Beginners",
    gepubliceerd_op: "2026-04-10",
    leestijd_minuten: 6
  },
  {
    id: "b2",
    titel: "Wat is een ETF en waarom is het ideaal voor beginners?",
    slug: "wat-is-een-etf",
    samenvatting:
      "ETF's zijn populair onder beginnende beleggers. Wij leggen uit wat ze zijn en waarom ze interessant zijn.",
    inhoud:
      "## Wat is een ETF?\n\nEen ETF (Exchange Traded Fund) is een mandje aandelen of obligaties die je in één keer kunt kopen.\n\n## Voordelen\n\n- Spreiding\n- Lage kosten\n- Eenvoudig\n\n## Populaire ETF's\n\nVWRL (wereldwijd), IWDA (ontwikkelde landen) en EMIM (opkomende markten) zijn populair.",
    afbeelding_url: "/blog/etf.jpg",
    category: "ETF",
    gepubliceerd_op: "2026-03-22",
    leestijd_minuten: 5
  },
  {
    id: "b3",
    titel: "5 fouten die beginnende beleggers maken",
    slug: "5-fouten-beginners",
    samenvatting:
      "Voorkom deze veelgemaakte fouten en bespaar jezelf veel geld en stress.",
    inhoud:
      "## 1. Te veel handelen\n\nVeel beginners denken dat actief handelen meer rendement oplevert. Onderzoek toont juist het tegenovergestelde.\n\n## 2. Geen spreiding\n\nAlles inzetten op één aandeel is gokken, geen beleggen.\n\n## 3. Emoties laten regeren\n\nVerkopen tijdens een crash is meestal de slechtste keuze.\n\n## 4. Niet kijken naar kosten\n\nElk procent kosten per jaar tikt aan over decennia.\n\n## 5. Geen plan\n\nZorg dat je weet waarom je belegt voor je begint.",
    afbeelding_url: "/blog/fouten.jpg",
    category: "Strategie",
    gepubliceerd_op: "2026-02-15",
    leestijd_minuten: 7
  }
];
