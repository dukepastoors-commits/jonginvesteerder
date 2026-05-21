import type { App, Artikel } from "./types";

// Logo's komen via Clearbit's gratis logo API (https://logo.clearbit.com/{domein})
// — geen API key nodig, automatisch het officiële broker-logo.

export const mockApps: App[] = [
  {
    id: "1",
    naam: "DEGIRO",
    slug: "degiro",
    logo_url: "https://logo.clearbit.com/degiro.com",
    minimale_inleg: 0.01,
    transactiekosten: "€1 - €3 per transactie, ETF's gratis (kernselectie)",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.5,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.degiro.nl/?ref=jonginvesteerder",
    beschrijving:
      "DEGIRO is een Nederlandse broker met lage kosten en toegang tot meer dan 50 beurzen wereldwijd. Vooral populair onder Nederlandse beleggers die zelf willen handelen in aandelen en ETF's.",
    voor_wie:
      "Beleggers die zelf aandelen en ETF's willen kopen tegen lage kosten en geen behoefte hebben aan crypto of hand-holding.",
    voordelen: [
      "Zeer lage transactiekosten",
      "Brede keuze aan beurzen wereldwijd",
      "Kernselectie ETF's gratis",
      "Nederlandse broker met Nederlandse support"
    ],
    nadelen: [
      "Geen crypto",
      "Interface kan even wennen zijn",
      "Geen fractioneel beleggen voor losse aandelen"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "2",
    naam: "Trading 212",
    slug: "trading-212",
    logo_url: "https://logo.clearbit.com/trading212.com",
    minimale_inleg: 1,
    transactiekosten: "€0 (gratis aandelen en ETF's)",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.6,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.trading212.com/?ref=jonginvesteerder",
    beschrijving:
      "Trading 212 is een populaire mobile-first broker met gratis aandelen en ETF's en fractioneel beleggen vanaf €1. De app heeft ook een AutoInvest-functie voor automatisch periodiek beleggen.",
    voor_wie:
      "Beginners die met kleine bedragen willen starten, en mensen die fractionele aandelen willen kopen via een simpele app.",
    voordelen: [
      "Volledig gratis transacties",
      "Fractioneel beleggen vanaf €1",
      "AutoInvest voor periodiek inleggen",
      "Mooie en simpele app"
    ],
    nadelen: [
      "Geen Nederlandse vestiging",
      "Geen crypto",
      "FX-kosten bij niet-EUR aandelen"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "3",
    naam: "eToro",
    slug: "etoro",
    logo_url: "https://logo.clearbit.com/etoro.com",
    minimale_inleg: 50,
    transactiekosten: "€0 voor aandelen, spread bij crypto",
    maandelijkse_kosten: "Geen (wel inactiviteitskosten na 12 maanden)",
    beoordeling: 4.0,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: true,
    affiliate_link: "https://www.etoro.com/?ref=jonginvesteerder",
    beschrijving:
      "eToro combineert aandelen, ETF's en crypto in één platform met social trading: je kunt ervaren beleggers letterlijk kopiëren. Populair onder jonge beleggers.",
    voor_wie:
      "Wie alles op één plek wil: aandelen, crypto en de mogelijkheid om andere beleggers te kopiëren.",
    voordelen: [
      "Aandelen én crypto in één app",
      "Copy trading functie",
      "Gratis aandelen transacties",
      "Internationale community"
    ],
    nadelen: [
      "USD-wisselkosten",
      "Inactiviteitskosten",
      "Hogere spreads bij crypto",
      "Withdrawal fee van $5"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "4",
    naam: "BUX Zero",
    slug: "bux-zero",
    logo_url: "https://logo.clearbit.com/getbux.com",
    minimale_inleg: 1,
    transactiekosten: "€1 per transactie (Zero Order: gratis op vast tijdstip)",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.1,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.getbux.com/?ref=jonginvesteerder",
    beschrijving:
      "BUX Zero is een Nederlandse beleggingsapp die beleggen voor beginners simpel maakt. Met de 'Zero Order' kun je gratis handelen op vaste tijden per dag.",
    voor_wie:
      "Nederlandse beginners die een eenvoudige app willen met Nederlandse support en duidelijke uitleg.",
    voordelen: [
      "Nederlandse app met NL klantenservice",
      "Heldere interface",
      "Gratis Zero Orders mogelijk",
      "Goede begeleiding voor beginners"
    ],
    nadelen: [
      "Minder uitgebreid aanbod dan grote brokers",
      "Beperkte beurzen",
      "Geen geavanceerde grafieken"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "5",
    naam: "Scalable Capital",
    slug: "scalable-capital",
    logo_url: "https://logo.clearbit.com/scalable.capital",
    minimale_inleg: 1,
    transactiekosten: "€0,99 of gratis met Prime+ abonnement",
    maandelijkse_kosten: "€0 - €4,99 (Free / Prime+)",
    beoordeling: 4.3,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: true,
    affiliate_link: "https://de.scalable.capital/?ref=jonginvesteerder",
    beschrijving:
      "Scalable Capital biedt aandelen, ETF's en crypto met gratis spaarplannen vanaf €1. Een sterke keuze voor periodiek inleggen in ETF's.",
    voor_wie:
      "Lange-termijn beleggers die graag automatisch periodiek inleggen in ETF's tegen lage kosten.",
    voordelen: [
      "Gratis ETF spaarplannen",
      "Crypto beschikbaar",
      "Veel ETF's",
      "Rente op cashsaldo (Prime+)"
    ],
    nadelen: [
      "Duitse broker",
      "Prime+ abonnement voor beste tarieven",
      "App in het Engels/Duits"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "6",
    naam: "Trade Republic",
    slug: "trade-republic",
    logo_url: "https://logo.clearbit.com/traderepublic.com",
    minimale_inleg: 1,
    transactiekosten: "€1 per transactie",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.4,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: true,
    affiliate_link: "https://traderepublic.com/?ref=jonginvesteerder",
    beschrijving:
      "Trade Republic is een Duitse mobile-first broker met aandelen, ETF's, derivaten en crypto. Biedt ook rente op je cashsaldo en gratis ETF-spaarplannen.",
    voor_wie:
      "Mobile-first beleggers die periodiek willen inleggen en eventueel ook crypto of derivaten willen verhandelen.",
    voordelen: [
      "Mooie mobiele app",
      "Rente op cashsaldo",
      "Gratis ETF-spaarplannen",
      "Brede keuze aandelen + crypto"
    ],
    nadelen: [
      "Geen volledige webversie",
      "Klantenservice via e-mail",
      "Duitse broker"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "7",
    naam: "Peaks",
    slug: "peaks",
    logo_url: "https://logo.clearbit.com/peaks.app",
    minimale_inleg: 1,
    transactiekosten: "Geen (servicekosten in maandbedrag)",
    maandelijkse_kosten: "€1 - €4 afhankelijk van pakket",
    beoordeling: 3.8,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://peaks.app/?ref=jonginvesteerder",
    beschrijving:
      "Peaks is een Nederlandse app die je wisselgeld en periodieke inleg automatisch belegt in ETF-portefeuilles. Volledig hands-off beleggen.",
    voor_wie:
      "Absolute beginners die met klein wisselgeld willen starten zonder zelf keuzes te hoeven maken.",
    voordelen: [
      "Volledig automatisch",
      "Nederlandse app",
      "Goede uitleg in-app",
      "Wisselgeld-functie"
    ],
    nadelen: [
      "Maandelijkse kosten",
      "Beperkte controle over keuzes",
      "Geen losse aandelen"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "8",
    naam: "Interactive Brokers",
    slug: "interactive-brokers",
    logo_url: "https://logo.clearbit.com/interactivebrokers.com",
    minimale_inleg: 0,
    transactiekosten: "Vanaf €1,25 per transactie (tiered)",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.5,
    geschikt_voor_beginners: false,
    crypto_beschikbaar: true,
    affiliate_link: "https://www.interactivebrokers.com/?ref=jonginvesteerder",
    beschrijving:
      "Interactive Brokers (IBKR) is een Amerikaanse pro-broker met toegang tot 150+ markten wereldwijd, opties, futures, forex en crypto. Bekend om zeer lage kosten en uitgebreide functies.",
    voor_wie:
      "Gevorderde beleggers die wereldwijd willen handelen, opties of futures willen, of internationale ETF's zoeken.",
    voordelen: [
      "150+ beurzen wereldwijd",
      "Zeer lage kosten",
      "Opties, futures, forex, crypto",
      "Margin lening tegen lage rente"
    ],
    nadelen: [
      "Complexe interface (lange leercurve)",
      "Te uitgebreid voor pure beginners",
      "Belastingformulieren in het Engels"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "9",
    naam: "Saxo Bank",
    slug: "saxo",
    logo_url: "https://logo.clearbit.com/home.saxo",
    minimale_inleg: 0,
    transactiekosten: "Vanaf €3 per transactie (Classic), goedkoper in Platinum/VIP",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.2,
    geschikt_voor_beginners: false,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.home.saxo/?ref=jonginvesteerder",
    beschrijving:
      "Saxo Bank is een Deense full-service broker met een professioneel platform (SaxoTraderGO/PRO). Veel keuze in aandelen, ETF's, obligaties, opties en forex.",
    voor_wie:
      "Gevorderde beleggers die een professioneel platform willen en bereid zijn iets meer te betalen voor stabiliteit en service.",
    voordelen: [
      "Professioneel platform",
      "Brede productkeuze",
      "Goede research-tools",
      "Bank-stabiliteit"
    ],
    nadelen: [
      "Hogere kosten voor casual gebruikers",
      "Complexer voor beginners",
      "Geen crypto"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "10",
    naam: "Lynx Beleggen",
    slug: "lynx",
    logo_url: "https://logo.clearbit.com/lynx.nl",
    minimale_inleg: 3000,
    transactiekosten: "Vanaf €5 per transactie (aandelen NL)",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.0,
    geschikt_voor_beginners: false,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.lynx.nl/?ref=jonginvesteerder",
    beschrijving:
      "Lynx is een Nederlandse broker die het platform van Interactive Brokers aanbiedt met Nederlandse support en service. Voor serieuze beleggers.",
    voor_wie:
      "Nederlandse beleggers die het IBKR-platform willen, maar dan met Nederlandse klantenservice en NL-belasting-rapportages.",
    voordelen: [
      "Wereldwijde toegang via IBKR",
      "Nederlandse support",
      "NL-vriendelijke belastingoverzichten",
      "Brede productkeuze"
    ],
    nadelen: [
      "Hogere minimale inleg",
      "Hogere kosten dan IBKR direct",
      "Niet voor kleine beginners"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "11",
    naam: "Bitvavo",
    slug: "bitvavo",
    logo_url: "https://logo.clearbit.com/bitvavo.com",
    minimale_inleg: 1,
    transactiekosten: "0,25% per transactie (tiered korting)",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.5,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: true,
    affiliate_link: "https://bitvavo.com/?ref=jonginvesteerder",
    beschrijving:
      "Bitvavo is dé Nederlandse crypto-exchange. Geregistreerd bij DNB, lage kosten en meer dan 200 crypto's beschikbaar. Geen aandelen of ETF's — puur crypto.",
    voor_wie:
      "Wie alleen in crypto wil beleggen en een veilig, DNB-geregistreerd Nederlands platform wil.",
    voordelen: [
      "Nederlandse exchange (DNB-geregistreerd)",
      "Lage handelskosten",
      "200+ crypto's",
      "Periodiek kopen mogelijk"
    ],
    nadelen: [
      "Geen aandelen of ETF's",
      "Crypto = hoog risico",
      "Storting via SEPA, iDEAL of creditcard"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "12",
    naam: "Meesman",
    slug: "meesman",
    logo_url: "https://logo.clearbit.com/meesman.nl",
    minimale_inleg: 10,
    transactiekosten: "Geen (lopende kosten in fondsen verwerkt)",
    maandelijkse_kosten: "Geen",
    beoordeling: 4.6,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.meesman.nl/?ref=jonginvesteerder",
    beschrijving:
      "Meesman biedt passieve indexfondsen tegen heel lage kosten. Geen losse aandelen — je koopt periodiek in wereldwijde indexfondsen. Ideaal voor wie 'set and forget' wil.",
    voor_wie:
      "Lange-termijn beleggers die alleen passief wereldwijd willen beleggen in indexfondsen en geen interesse hebben in losse aandelen.",
    voordelen: [
      "Heel lage lopende kosten",
      "Volledig Nederlands",
      "Periodiek inleggen automatisch",
      "Heel simpel: 4 fondsen om uit te kiezen"
    ],
    nadelen: [
      "Geen losse aandelen of ETF's",
      "Geen crypto",
      "Geen short-term handelen"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "13",
    naam: "Semmie",
    slug: "semmie",
    logo_url: "https://logo.clearbit.com/semmie.nl",
    minimale_inleg: 100,
    transactiekosten: "Geen (servicekosten 0,5%/jaar)",
    maandelijkse_kosten: "Servicekosten 0,5% per jaar over inleg",
    beoordeling: 4.0,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.semmie.nl/?ref=jonginvesteerder",
    beschrijving:
      "Semmie is een Nederlandse robo-investor die volledig voor jou belegt in een ETF-portefeuille op basis van je risicoprofiel.",
    voor_wie:
      "Beginners die niets zelf willen kiezen en hun beleggen volledig willen automatiseren.",
    voordelen: [
      "Volledig automatisch",
      "Nederlandse app",
      "Risicoprofiel-gestuurd",
      "Simpel om te starten"
    ],
    nadelen: [
      "Jaarlijkse servicekosten",
      "Geen losse aandelen",
      "Minimaal €100"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "14",
    naam: "Brand New Day",
    slug: "brand-new-day",
    logo_url: "https://logo.clearbit.com/brandnewday.nl",
    minimale_inleg: 50,
    transactiekosten: "€3,50 per transactie",
    maandelijkse_kosten: "Geen vaste kosten, wel fondskosten",
    beoordeling: 4.1,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.brandnewday.nl/?ref=jonginvesteerder",
    beschrijving:
      "Brand New Day is een Nederlandse aanbieder van indexfondsen, vooral bekend voor pensioenbeleggen (lijfrente). Ook losse beleggingsrekening mogelijk.",
    voor_wie:
      "Mensen die fiscaal voordelig willen beleggen voor pensioen (box 1 aftrek), of een eenvoudige indexfonds-beleggingsrekening willen.",
    voordelen: [
      "Sterke focus op pensioenbeleggen",
      "Lage kosten op indexfondsen",
      "Nederlandse aanbieder",
      "Fiscale opties (lijfrente)"
    ],
    nadelen: [
      "Geen losse aandelen",
      "Geen crypto",
      "Beperkt fondsaanbod"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "15",
    naam: "ABN AMRO Zelf Beleggen",
    slug: "abn-amro",
    logo_url: "https://logo.clearbit.com/abnamro.nl",
    minimale_inleg: 0,
    transactiekosten: "Vanaf €5 per transactie aandelen NL",
    maandelijkse_kosten: "€2,50 per maand servicekosten",
    beoordeling: 3.4,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.abnamro.nl/?ref=jonginvesteerder",
    beschrijving:
      "ABN AMRO Zelf Beleggen is de beleggingsdienst van de bank, geïntegreerd in je gewone bank-omgeving. Veiligheid van een Nederlandse bank, maar hogere kosten.",
    voor_wie:
      "ABN-klanten die het gemak van alles bij één bank verkiezen boven de laagste kosten.",
    voordelen: [
      "Geïntegreerd met je bankrekening",
      "Nederlandse bank — vertrouwd",
      "Nederlandse klantenservice"
    ],
    nadelen: [
      "Hogere kosten",
      "Maandelijkse servicekosten",
      "Geen crypto"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "16",
    naam: "ING Zelf Beleggen Basis",
    slug: "ing",
    logo_url: "https://logo.clearbit.com/ing.nl",
    minimale_inleg: 0,
    transactiekosten: "€4 + 0,1% per transactie",
    maandelijkse_kosten: "Geen (Zelf Beleggen Basis)",
    beoordeling: 3.5,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.ing.nl/?ref=jonginvesteerder",
    beschrijving:
      "ING Zelf Beleggen Basis is de instapdienst van ING voor zelfbeleggers. Geen vaste kosten, maar wel hogere transactiekosten dan online brokers.",
    voor_wie:
      "ING-klanten die af en toe willen beleggen en het bij hun bank willen houden.",
    voordelen: [
      "Geen maandelijkse kosten (Basis)",
      "Geïntegreerd met ING bankieren",
      "Nederlandse bank"
    ],
    nadelen: [
      "Hogere transactiekosten",
      "Geen crypto",
      "Beperkt internationaal aanbod"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "17",
    naam: "Rabobank Beleggen",
    slug: "rabobank",
    logo_url: "https://logo.clearbit.com/rabobank.nl",
    minimale_inleg: 0,
    transactiekosten: "Vanaf €9 per transactie (Zelf Beleggen)",
    maandelijkse_kosten: "Geen vaste, wel servicekosten over depot",
    beoordeling: 3.2,
    geschikt_voor_beginners: true,
    crypto_beschikbaar: false,
    affiliate_link: "https://www.rabobank.nl/?ref=jonginvesteerder",
    beschrijving:
      "Rabobank Beleggen biedt zelf beleggen en beheerd beleggen. Hoge kosten, maar wel het gemak van één bank.",
    voor_wie:
      "Rabobank-klanten die gemak prefereren boven de laagste kosten.",
    voordelen: [
      "Bij je bank",
      "Nederlandse klantenservice",
      "Beheerd beleggen ook mogelijk"
    ],
    nadelen: [
      "Hoge transactiekosten",
      "Servicekosten over depot",
      "Geen crypto"
    ],
    laatste_update: "2026-05-01"
  },
  {
    id: "18",
    naam: "Plus500",
    slug: "plus500",
    logo_url: "https://logo.clearbit.com/plus500.com",
    minimale_inleg: 100,
    transactiekosten: "Geen commissie, kosten zitten in spread",
    maandelijkse_kosten: "Geen (wel inactiviteitskosten)",
    beoordeling: 3.5,
    geschikt_voor_beginners: false,
    crypto_beschikbaar: true,
    affiliate_link: "https://www.plus500.com/?ref=jonginvesteerder",
    beschrijving:
      "Plus500 is een internationale CFD-broker. Let op: je belegt niet rechtstreeks in aandelen of crypto, maar in CFD's (contracts for difference) — instrumenten met hefboom en hoog risico.",
    voor_wie:
      "Ervaren traders die met hefboom willen handelen. NIET geschikt voor beginners die echt aandelen of crypto willen bezitten.",
    voordelen: [
      "Veel markten in één app",
      "Goede mobiele app",
      "Demo-account beschikbaar"
    ],
    nadelen: [
      "Alleen CFD's — geen echt eigendom",
      "Hefboom = hoog risico (76% verliest geld)",
      "Inactiviteitskosten",
      "Niet voor lange-termijn beleggen"
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
      "## Wat is er gebeurd?\n\nDe AEX-index is gestegen tot een nieuw record. Vooral aandelen als ASML en Shell trokken de markt omhoog.\n\n## Wat betekent dit voor beginners?\n\nEen hoge stand betekent niet automatisch dat je nu niet moet instappen. Wel is het verstandig om gespreid in te leggen via periodieke inleg.",
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
    gerelateerde_apps: ["bitvavo", "etoro", "trade-republic"]
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
