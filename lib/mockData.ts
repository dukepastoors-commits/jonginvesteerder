import type { App, Artikel } from "./types";

// Broker-logo's via Clearbit met Google favicon fallback (zie AppLogo component)
// Artikel-afbeeldingen via Unsplash (gratis, geen API key nodig)

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1200&q=80&auto=format&fit=crop`;

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
    titel: "AEX bereikt nieuwe recordstand boven 1000 punten",
    slug: "aex-recordstand-mei-2026",
    samenvatting:
      "De Amsterdamse beursindex AEX is deze week voor het eerst boven de 1000 punten gesloten. Wat betekent dat voor jou als beginnende belegger?",
    inhoud:
      "## Wat is er gebeurd?\n\nDe AEX-index, de graadmeter van de Amsterdamse beurs, is deze week voor het eerst in zijn 43-jarige geschiedenis boven de 1000 punten gesloten. De stijging werd vooral gedreven door chipmachine-maker ASML (goed voor ongeveer 25% van de index) en olie-reus Shell. Ook ING en Adyen droegen flink bij aan de records.\n\n## Wat is de AEX eigenlijk?\n\nDe AEX is een lijst van de 25 grootste bedrijven die aan de Amsterdamse beurs Euronext genoteerd staan. Denk aan ASML, Shell, ING, Heineken, Philips, Unilever, en Adyen. Wanneer de index stijgt, betekent dit dat de optelsom van deze 25 bedrijven meer waard is dan de dag ervoor.\n\n## Moet ik nu nog instappen?\n\nDit is dé vraag die elke beginner stelt bij een recordstand. Het eerlijke antwoord: niemand weet wat de markt morgen doet. Historisch gezien is de AEX al meermaals door records gegaan om vervolgens nog veel verder te stijgen. Maar er zijn ook periodes van scherpe daling geweest.\n\n## Wat zegt de geschiedenis?\n\nAls je in 1983 €100 had belegd in een index-tracker op de AEX, had je nu (inclusief herbelegde dividenden) ongeveer €1.500 — een gemiddeld rendement van ruim 6% per jaar. Cruciaal: dat geldt alleen als je het al die jaren liet staan, ook tijdens de dotcom-crash (2000), de kredietcrisis (2008) en de coronadip (2020).\n\n## Praktische tips voor jou\n\n- **Belegg gespreid in de tijd**: leg elke maand een vast bedrag in, in plaats van alles in één keer\n- **Belegg gespreid over bedrijven**: een ETF op de AEX (of beter: op de wereld) is veiliger dan één aandeel\n- **Belegg met geld dat je 10+ jaar kan missen**: korte-termijn is altijd onvoorspelbaar\n- **Negeer de paniek**: koersen gaan op en neer, dat is normaal\n\n## Conclusie\n\nEen recordstand is geen reden om in paniek alles te kopen, maar ook geen reden om bang te zijn om te beginnen. Voor de meeste jonge beleggers blijft het advies hetzelfde: begin klein, belegg periodiek, en houd het minstens 10 jaar vol.",
    afbeelding_url: img("1611974789855-9c2a0a7236a3"),
    category: "Aandelen",
    gepubliceerd_op: "2026-05-15",
    leestijd_minuten: 5,
    gerelateerde_apps: ["degiro", "trading-212", "meesman"]
  },
  {
    id: "n2",
    titel: "Bitcoin daalt 8% na nieuwe EU-regelgeving",
    slug: "bitcoin-daalt-na-regelgeving-2026",
    samenvatting:
      "Bitcoin zakte deze week met 8% nadat de EU strengere regels aankondigde binnen MiCA. Wat zijn de gevolgen voor crypto-beleggers in Nederland?",
    inhoud:
      "## De aanleiding\n\nDe Europese Commissie heeft strengere regels aangekondigd voor crypto-platforms binnen het MiCA-raamwerk (Markets in Crypto-Assets). Concreet betekent dit dat crypto-exchanges in de EU strengere identificatie-eisen moeten hanteren, meer transparantie moeten geven over hun reserves, en hogere kapitaalbuffers moeten aanhouden.\n\n## Hoe reageerde de markt?\n\nBitcoin verloor binnen 48 uur 8% van zijn waarde, Ethereum daalde met 11%. Kleinere altcoins zakten gemiddeld 15-25%. Dit soort schommelingen zijn normaal in de crypto-markt — een correctie van 20% binnen een week komt enkele keren per jaar voor.\n\n## Wat verandert er voor jou als gebruiker?\n\nVoor de meeste Nederlandse crypto-beleggers verandert er praktisch weinig. Bitvavo, de grootste Nederlandse exchange, is al sinds 2020 DNB-geregistreerd en voldoet al aan strenge eisen. Wel kun je verwachten:\n\n- **Meer KYC-checks**: identificatie via paspoort of ID, soms ook bron-van-vermogen-vragen\n- **Strenger withdrawal-beleid**: limieten en verplichte cooldowns bij grote opnames\n- **Hogere kosten voor exchanges**: deze worden mogelijk doorberekend\n- **Meer bescherming**: bij faillissement van een exchange ben je beter beschermd\n\n## Is dit slecht nieuws voor crypto?\n\nDat hangt af van je perspectief. Voor speculanten die anoniem willen handelen: ja. Voor lange-termijn beleggers die institutionele acceptatie zien als bewijs van legitimiteit: juist niet. Strengere regels betekenen ook minder fraude, minder rug-pulls en meer vertrouwen vanuit pensioenfondsen.\n\n## Wat moet jij doen?\n\n- **Niet in paniek verkopen**: dit soort dalingen horen bij crypto. Wie in 2017 verkocht na een 30% dip, miste de stijging naar $69.000\n- **Belegg alleen wat je kan missen**: maximum 5-10% van je totale beleggingsportefeuille in crypto is een veelgehoord advies\n- **Kies een geregistreerd platform**: Bitvavo, Coinbase of Kraken zijn allemaal gereguleerd\n- **Bewaar grote bedragen op een hardware wallet**: niet op de exchange\n\n## Conclusie\n\nKortetermijnschommelingen door regelgeving zijn niet de reden om in of uit te stappen. De fundamentele vraag — geloof je dat crypto over 10 jaar nog bestaat en gebruikt wordt? — verandert niet door een tijdelijke koersdip.",
    afbeelding_url: img("1518546305927-5a555bb7020d"),
    category: "Crypto",
    gepubliceerd_op: "2026-05-12",
    leestijd_minuten: 6,
    gerelateerde_apps: ["bitvavo", "etoro", "trade-republic"]
  },
  {
    id: "n3",
    titel: "Trading 212 lanceert spaarrekening met 3,5% rente",
    slug: "trading-212-spaarrekening",
    samenvatting:
      "Trading 212 introduceert een spaarrekening met 3,5% rente op je cashsaldo. Hoe verhoudt zich dit tot ING, Trade Republic en Bitvavo?",
    inhoud:
      "## Wat is er nieuw?\n\nTrading 212 biedt vanaf deze week rente op je niet-belegde cashsaldo. Het tarief: 3,5% per jaar op EUR-saldo. Dat is hoger dan wat reguliere Nederlandse banken bieden (gemiddeld 1,5-2%) en lager dan sommige flitsspaarrekeningen.\n\n## Hoe werkt het?\n\nGeld dat je op je Trading 212 account stort, maar niet hebt belegd, wordt automatisch tegen 3,5% beleend aan kwalificeerde tegenpartijen (Money Market Funds). Je hoeft niets te doen — het saldo verschijnt vanzelf en groeit dagelijks. Opname kan elk moment.\n\n## Vergelijking met concurrenten\n\nHier zijn de huidige cashsaldo-rentes bij populaire platforms:\n\n- **Trading 212**: 3,5% (nieuw)\n- **Trade Republic**: 3,75% (op eerste €50.000)\n- **Scalable Capital Prime+**: 3,5% (met €4,99/maand abonnement)\n- **Bitvavo Savings**: 2-7% op stablecoins (verschillend risico!)\n- **DEGIRO**: 0% (geen rente)\n- **eToro**: 4,3% (USD), 3,9% (EUR)\n\n## Maar moet je hier sparen?\n\nLet op: dit is **geen vervanging voor sparen of beleggen**. Het is bedoeld voor geld dat je tijdelijk op je beleggingsrekening laat staan — bijvoorbeeld tussen het verkopen van een aandeel en het kopen van een nieuw.\n\n## De rekensom\n\n- Op €5.000 cashsaldo: 3,5% = €175 per jaar (voor belastingen)\n- Op €10.000: €350 per jaar\n- Op €25.000: €875 per jaar\n\nVergelijk dit met beleggen in een MSCI World ETF (historisch gemiddelde 8% per jaar) of een S&P 500 ETF (10% per jaar). Op lange termijn is beleggen meestal nog steeds aantrekkelijker.\n\n## Belasting\n\nBelangrijk: in box 3 wordt cashsaldo bij een broker gerekend als 'overige bezittingen', niet als spaarsaldo. Dat betekent een hoger fictief rendement en dus hogere belasting. Voor grotere bedragen kan een gewone spaarrekening fiscaal nog steeds gunstiger zijn — vraag bij twijfel advies.\n\n## Conclusie\n\nVoor wie zijn beleggingsrekening actief gebruikt, is dit een gratis extra. Maar gebruik het niet als hoofdspaarrekening — daarvoor zijn er fiscaal en juridisch betere alternatieven.",
    afbeelding_url: img("1579621970795-87facc2f976d"),
    category: "Apps",
    gepubliceerd_op: "2026-05-08",
    leestijd_minuten: 5,
    gerelateerde_apps: ["trading-212", "trade-republic", "scalable-capital"]
  },
  {
    id: "n4",
    titel: "ECB verlaagt rente: wat betekent dit voor jouw beleggingen?",
    slug: "ecb-renteverlaging-2026",
    samenvatting:
      "De Europese Centrale Bank heeft de rente met 0,25% verlaagd. Aandelen reageerden positief — maar wat verandert er echt voor de gemiddelde belegger?",
    inhoud:
      "## Het besluit\n\nDe Europese Centrale Bank (ECB) heeft besloten de beleidsrente met 25 basispunten te verlagen — van 3,25% naar 3,00%. Dit is de derde verlaging op rij dit jaar. Reden: de inflatie zakt richting de doelstelling van 2% en de economische groei in de eurozone blijft achter.\n\n## Wat is 'de rente' precies?\n\nDe beleidsrente van de ECB is de rente die banken betalen om geld bij de centrale bank te stallen of te lenen. Deze sijpelt door naar:\n\n- Hypotheekrentes (omlaag)\n- Spaarrentes (omlaag)\n- Kredietrentes (omlaag)\n- Bedrijfsleningen (omlaag)\n\n## Waarom stijgen aandelen vaak bij rentedalingen?\n\nWanneer de rente daalt, gebeuren er een aantal dingen tegelijk:\n\n1. Bedrijven kunnen goedkoper lenen → meer investeringen en groei\n2. Sparen wordt minder aantrekkelijk → geld stroomt richting aandelen\n3. Toekomstige winsten worden hoger 'gewaardeerd' (lagere discount rate)\n4. De economie krijgt een boost\n\n## Welke aandelen profiteren het meest?\n\n- **Tech-aandelen**: gevoelig voor rente vanwege hun groeiverhaal (NVIDIA, ASML, Microsoft)\n- **Vastgoed-aandelen (REITs)**: lagere hypotheekkosten = hogere winst\n- **Cyclische aandelen**: bouw, auto, retail — profiteren van consumentenbestedingen\n- **Groei-aandelen in het algemeen**\n\n## Wie verliest?\n\n- **Banken**: lagere marges op spaargeld en leningen\n- **Spaarders**: minder rente op spaarrekening\n- **Obligatiehouders van bestaande leningen**: nieuwe obligaties bieden meer\n\n## Wat moet jij doen?\n\nHonest answer: **niets**. Renteverlagingen zijn zo voorspeld en ingeprijsd dat de markt grotendeels al heeft gereageerd. Voor lange-termijn beleggers in brede ETF's (MSCI World, S&P 500) is dit alleen een korte-termijn ruis.\n\n## Praktische adviezen\n\n- Heb je een hypotheek? Check of oversluiten interessant is\n- Heb je veel spaargeld? Overweeg een deel te beleggen (maar houd 3 maanden buffer)\n- Belegg je periodiek in ETF's? Gewoon doorgaan met je vaste maandbedrag\n\n## Conclusie\n\nRentebeslissingen krijgen veel aandacht, maar voor de gemiddelde belegger met een lange-termijn ETF-strategie zijn ze nauwelijks van invloed. Discipline en consistentie verslaan timing — bijna altijd.",
    afbeelding_url: img("1620228885847-9eab2a1adddc"),
    category: "Aandelen",
    gepubliceerd_op: "2026-05-03",
    leestijd_minuten: 5,
    gerelateerde_apps: ["degiro", "trade-republic", "meesman"]
  },
  {
    id: "n5",
    titel: "NVIDIA verslaat verwachtingen opnieuw: aandeel stijgt 12%",
    slug: "nvidia-kwartaalcijfers-2026",
    samenvatting:
      "NVIDIA presenteerde kwartaalcijfers die de analistenverwachtingen verpletteren. De AI-chip-gigant is nu groter dan Apple en Microsoft.",
    inhoud:
      "## De cijfers\n\nNVIDIA, de Amerikaanse maker van AI-chips, heeft kwartaalcijfers gepresenteerd die Wall Street verbluffen:\n\n- Omzet: $42 miljard (verwachting: $36 miljard)\n- Winst: $19 miljard (verwachting: $16 miljard)\n- Marge: meer dan 75% op datacenter-chips\n- Beurswaarde nu: $4,2 biljoen (groter dan heel de Duitse economie)\n\n## Waarom verkoopt NVIDIA zo veel?\n\nElke grote tech-bedrijf — OpenAI, Google, Meta, Microsoft, Amazon — koopt enorme aantallen NVIDIA H100/H200/B200 chips om hun AI-modellen te trainen. Eén H100 chip kost ongeveer $30.000. Bedrijven kopen er honderdduizenden per jaar.\n\n## Wat betekent dit voor de bredere markt?\n\nNVIDIA is in de afgelopen 3 jaar 12x zoveel waard geworden. Het aandeel zit nu in:\n\n- **S&P 500**: ongeveer 7% van de hele index\n- **NASDAQ-100**: ongeveer 12%\n- **MSCI World**: ongeveer 5%\n\nDat betekent: als jij belegt in een wereld-ETF zoals VWRL of IWDA, dan zit er al automatisch ongeveer 5% NVIDIA in je portefeuille — zonder dat je daar iets voor hoefde te doen.\n\n## Risico's\n\nNVIDIA is geen risicovrije belegging. Een paar dingen om in de gaten te houden:\n\n- **AI-bubble?** Er is discussie of de huidige waardering houdbaar is\n- **Concurrentie**: AMD, Intel en Chinese fabrikanten investeren miljarden\n- **Geopolitiek**: chip-exportbeperkingen naar China kunnen omzet raken\n- **Energie**: AI-datacenters slokken stroom op — beperking is denkbaar\n\n## Moet je NVIDIA kopen?\n\nDrie scenario's:\n\n1. **Via een wereld-ETF**: je hebt het al, geen extra actie nodig\n2. **Losse aandelen kopen nu**: je belegt in één specifiek bedrijf — hoog risico-rendement profiel\n3. **Wachten op een dip**: kan jaren duren, of nooit komen\n\n## Wijze les uit het verleden\n\nIn 2000 was Cisco even het grootste bedrijf ter wereld. Het aandeel verloor daarna 80%. In 2008 was ExxonMobil het grootst. Het aandeel staat nu lager dan toen. Marktleiderschap is geen garantie voor toekomstige winst.\n\n## Conclusie\n\nNVIDIA is een fascinerend bedrijf in een revolutionaire industrie. Maar 'een geweldig bedrijf' en 'een geweldige belegging op deze prijs' zijn twee verschillende dingen. Voor de meeste beginners is gespreide blootstelling via een ETF de verstandigere keuze.",
    afbeelding_url: img("1518770660439-4636190af475"),
    category: "Aandelen",
    gepubliceerd_op: "2026-04-25",
    leestijd_minuten: 6,
    gerelateerde_apps: ["degiro", "trading-212", "interactive-brokers"]
  },
  {
    id: "n6",
    titel: "DEGIRO verlaagt kosten op Amerikaanse aandelen",
    slug: "degiro-lagere-kosten-vs",
    samenvatting:
      "DEGIRO heeft de transactiekosten op Amerikaanse aandelen verlaagd van $0,50 naar $0,25. Goed nieuws voor wie in Apple, Tesla of NVIDIA belegt.",
    inhoud:
      "## De verandering\n\nDEGIRO, de Nederlandse online broker, heeft zijn kostenstructuur voor Amerikaanse aandelen aangepast. De transactiekosten voor aandelen op NYSE en NASDAQ zijn verlaagd van $0,50 + $0,004 per aandeel naar slechts $0,25 + $0,004 per aandeel.\n\n## Waarom is dit relevant?\n\nVeel jonge Nederlandse beleggers willen graag Amerikaanse aandelen kopen — Apple, Tesla, Microsoft, NVIDIA. Bij elke transactie betaal je transactiekosten + valutaomwisseling. Lagere kosten betekent meer rendement.\n\n## Concreet voorbeeld\n\nStel je koopt 10 aandelen Apple à €150 = €1500:\n\n- **Oude tarief**: $0,50 + (10 × $0,004) = $0,54 ≈ €0,50\n- **Nieuwe tarief**: $0,25 + (10 × $0,004) = $0,29 ≈ €0,27\n\nVerschil: 23 cent per transactie. Lijkt weinig, maar als je 100 transacties per jaar doet → €23 besparing.\n\n## Waar zit het verschil met concurrenten?\n\nVergelijk met Trading 212 (€0 voor Amerikaanse aandelen) en eToro (€0 + spread). DEGIRO blijft duurder voor gratis traders, maar biedt wel echte aandelen (geen fractioneel via complexe structuren), Nederlandse rapportages en geen valutaomwisselings-spread bij EUR/USD-rekening.\n\n## Wat als ik weinig handel?\n\nVoor lange-termijn beleggers die 1-12x per jaar handelen is het kostenverschil verwaarloosbaar. Belangrijker zijn:\n\n- **Bewaar­kosten**: DEGIRO rekent €2,50/jaar per beurs (max €5)\n- **Valuta-omwisselings­spread**: kun je vermijden via automatisch wisselen optie\n- **Dividendkosten**: 0,25% op USD-dividenden\n\n## Tip: AutoFX uitzetten\n\nVeel beginners weten niet dat DEGIRO standaard automatisch je euros wisselt naar dollars bij elke USD-aankoop, met een 0,25% spread. Schakel 'AutoFX' uit en wissel handmatig één keer een groter bedrag — dat scheelt.\n\n## Conclusie\n\nLagere kosten zijn altijd welkom. Maar voor lange-termijn ETF-beleggers in EUR-genoteerde fondsen (zoals VWRL of IWDA op Euronext) maakt dit geen verschil. Het is vooral relevant voor wie actief in losse Amerikaanse aandelen handelt.",
    afbeelding_url: img("1559526324-4b87b5e36e44"),
    category: "Apps",
    gepubliceerd_op: "2026-04-18",
    leestijd_minuten: 4,
    gerelateerde_apps: ["degiro", "trading-212"]
  }
];

export const mockBlog: Artikel[] = [
  {
    id: "b1",
    titel: "Hoe begin je met beleggen als jongere? De complete gids",
    slug: "hoe-begin-je-met-beleggen",
    samenvatting:
      "Een stap-voor-stap gids voor 18-30 jarigen die willen beginnen met beleggen. Geen jargon, geen verkooppraatjes — wel concrete actiestappen.",
    inhoud:
      "## Waarom überhaupt beginnen met beleggen?\n\nJe spaarrekening levert anno 2026 ongeveer 1,5-2% rente op. De inflatie is 2,5%. Dat betekent: je geld op de spaarrekening wordt elk jaar minder waard. Niet veel — maar over 20 jaar wel. Beleggen is voor de meeste jongeren de enige realistische manier om vermogen op te bouwen.\n\n## Stap 1: Bouw eerst een buffer\n\nVoordat je gaat beleggen, zorg dat je een **noodbuffer** hebt van minimaal 3 maanden vaste lasten op een gewone spaarrekening. Waarom? Als je auto stuk gaat of je baan kwijt raakt, wil je niet gedwongen je beleggingen verkopen — vooral niet als de markt net laag staat.\n\n**Voorbeeld**: vaste lasten €1200/maand → minimaal €3600 buffer.\n\n## Stap 2: Bepaal je doel en horizon\n\n- **5+ jaar weg**: pensioenopbouw, financiële onafhankelijkheid → ETF's of indexfondsen\n- **3-5 jaar weg**: huis kopen, sabbatical → conservatiever mix, deels op spaar\n- **Minder dan 3 jaar weg**: NIET beleggen — risico te groot, hou het op sparen\n\n## Stap 3: Bereken hoeveel je kan inleggen\n\nMaak een eenvoudig overzicht:\n\n- Inkomen per maand: €X\n- Vaste lasten: €Y\n- Variabele uitgaven (max): €Z\n- Wat blijft over voor sparen + beleggen: €X - €Y - €Z\n\nVan dat overschot: 50% naar buffer-opbouw (tot je 3 maanden hebt) en 50% direct beleggen. Daarna 100% beleggen.\n\n## Stap 4: Kies een app of broker\n\nVoor beginners zijn deze het meest geschikt:\n\n- **Trading 212**: gratis, vanaf €1, fractioneel beleggen\n- **DEGIRO**: lage kosten, kernselectie ETF's gratis\n- **BUX Zero**: Nederlandse app, simpele interface\n- **Meesman**: alleen 4 indexfondsen — super simpel\n- **Trade Republic**: mobiele app met spaarplannen\n\nKijk op onze vergelijkpagina voor uitgebreide info per app.\n\n## Stap 5: Begin met één wereld-ETF\n\nDe simpelste, meest gespreide en wetenschappelijk onderbouwde strategie voor beginners: koop één ETF die de hele wereld volgt. De populairste opties:\n\n- **VWCE / VWRL** (Vanguard FTSE All-World): 3700+ bedrijven, lage kosten (0,22%/jaar)\n- **IWDA** (iShares MSCI World): 1500 bedrijven uit ontwikkelde landen\n- **EUNL** (UCITS World): vergelijkbaar met IWDA\n\nMet één aandeel in zo'n ETF ben je direct mede-eigenaar van duizenden bedrijven wereldwijd.\n\n## Stap 6: Stel automatisch periodiek inleggen in\n\nDit is **dé** belangrijkste stap. Stel in dat elke maand op dezelfde datum automatisch een vast bedrag wordt afgeschreven en belegd. Bijvoorbeeld €100 op de 25e. Dit heet *dollar-cost averaging* — je koopt automatisch meer aandelen als de prijs laag is en minder als de prijs hoog is.\n\n**Voordeel**: je hoeft geen markt-timing te doen. Je zet het in, je vergeet het, en het werkt.\n\n## Stap 7: Negeer het 10 jaar lang\n\nDit klinkt extreem, maar het is statistisch onderbouwd. Wie elke dag naar zijn portefeuille kijkt, neemt impulsieve beslissingen — meestal verkeerde. Wie eens per kwartaal kijkt, slaapt beter en heeft meer rendement.\n\n## Wat moet je NIET doen\n\n- Niet je hele spaarpot ineens beleggen\n- Niet 'hot tips' van Reddit/TikTok volgen\n- Niet in één aandeel alles stoppen\n- Niet verkopen tijdens een crash (juist dan bijkopen)\n- Niet beleggen met geleend geld\n\n## Een voorbeeld in getallen\n\nStel je legt vanaf je 22e elke maand €100 in tegen 7% gemiddeld rendement:\n\n- Op je 30e: ~€13.000\n- Op je 40e: ~€36.000\n- Op je 50e: ~€80.000\n- Op je 65e: ~€255.000\n\nMet €200/maand verdubbel je deze bedragen. Dat is de magie van vroeg beginnen.\n\n## Conclusie\n\nBeleggen is voor jongeren geen optie, maar bijna een noodzaak. De grootste fout die je kan maken: nooit beginnen. De tweede grootste fout: te veel willen doen. Begin simpel, met één ETF, en houd het saai. Saai winnen veel mensen niet bij beleggen.",
    afbeelding_url: img("1554224155-6726b3ff858f"),
    category: "Beginners",
    gepubliceerd_op: "2026-04-10",
    leestijd_minuten: 8
  },
  {
    id: "b2",
    titel: "Wat is een ETF en waarom is het ideaal voor beginners?",
    slug: "wat-is-een-etf",
    samenvatting:
      "ETF's zijn dé populairste manier om als beginner te beleggen. We leggen uit wat ze zijn, hoe ze werken en welke je moet hebben.",
    inhoud:
      "## Wat is een ETF in normale taal?\n\nEen ETF (Exchange Traded Fund) is een mandje met aandelen of obligaties dat je in één keer kunt kopen. Stel je voor: in plaats van 500 aandelen los te kopen, koop je één 'aandeel' van een mandje dat al die 500 aandelen voor je vasthoudt.\n\n## Een concreet voorbeeld\n\nDe **S&P 500 ETF** (bijv. SPY of VUSA) bevat de 500 grootste Amerikaanse bedrijven: Apple, Microsoft, NVIDIA, Amazon, Tesla, Google, Meta, en honderden anderen. Met één aandeel SPY van ~$500 ben je voor een klein stukje mede-eigenaar van al deze bedrijven.\n\n## Waarom zijn ETF's zo populair?\n\nDrie redenen:\n\n1. **Spreiding**: nooit afhankelijk van één bedrijf. Als Apple ineens flopt, heb je honderden andere bedrijven die het opvangen.\n2. **Lage kosten**: een goede ETF kost 0,07%-0,30% per jaar. Een actief beheerd beleggingsfonds vaak 1-2%. Over 30 jaar tijd scheelt dit tienduizenden euro's.\n3. **Eenvoud**: je hoeft niet te kiezen welke aandelen wel of niet — je krijgt de hele markt.\n\n## Hoe werkt een ETF onder de motorkap?\n\nEen ETF-uitgever (zoals BlackRock, Vanguard, of iShares) koopt de echte aandelen die in de index zitten en bewaart deze voor jou. Als jij een ETF-aandeel koopt, koop je eigenlijk een 'bewijs' dat je een evenredig deel van dat mandje bezit. De ETF wordt op de beurs verhandeld zoals een gewoon aandeel — vandaar de naam.\n\n## Populaire ETF's voor Nederlandse beleggers\n\n### Wereldwijd (meest aanbevolen voor beginners)\n\n- **VWCE / VWRL** (Vanguard FTSE All-World): 3700+ bedrijven uit ontwikkelde en opkomende markten\n- **IWDA** (iShares MSCI World): 1500 bedrijven uit ontwikkelde landen (geen China/India)\n- **EUNL** (UCITS variant): vergelijkbaar met IWDA\n\n### Specifieke regio's\n\n- **CSPX / VUSA**: S&P 500 (alleen VS)\n- **EUNK**: Europa Stoxx 600 (Europa)\n- **EIMI**: opkomende markten\n\n### Thema's\n\n- **IUST**: technologie wereldwijd\n- **IS3R**: duurzame energie\n- **IWVL**: small cap value\n\n## ETF kosten: waar moet je op letten?\n\nDe belangrijkste kostprijs heet **TER** (Total Expense Ratio) — uitgedrukt als percentage per jaar over je inleg. Bij een TER van 0,22% en €10.000 inleg betaal je €22 per jaar. Een paar regels:\n\n- Onder 0,30% is goed voor wereldwijde ETF's\n- Onder 0,10% is uitstekend voor S&P 500 ETF's\n- Boven 0,50% wordt het duur — vermijden\n\n## Accumulating vs Distributing\n\nETF's komen in twee smaken:\n\n- **Accumulating (acc)**: dividenden worden automatisch herbelegd. Geen extra werk, fiscaal vaak iets gunstiger in NL\n- **Distributing (dist)**: dividenden worden 1-4x per jaar uitbetaald in cash. Leuk voor passief inkomen, maar je betaalt belasting op de uitkering\n\nVoor de meeste lange-termijn beleggers is **accumulating** beter.\n\n## ETF vs los aandeel: een vergelijking\n\nStel je hebt €1000 te beleggen:\n\n- **Optie A**: 1 aandeel ASML kopen. Resultaat hangt voor 100% af van ASML's prestaties.\n- **Optie B**: 1 aandeel VWCE ETF kopen. Resultaat hangt af van 3700+ bedrijven samen — veel stabieler.\n\nOver 1 jaar kan optie A meer of minder opbrengen. Over 30 jaar wint optie B bijna altijd.\n\n## ETF's en belasting in Nederland\n\nETF's vallen in box 3 net als andere beleggingen. Je betaalt geen belasting op koerswinst (dat doe je in Amerika wel), maar wel een fictief rendement over je totale vermogen. Vrijstelling 2026: €57.000 per persoon (€114.000 voor fiscale partners).\n\n## Veelgemaakte fouten\n\n- **Te veel ETF's verzamelen**: 1 wereld-ETF is vaak genoeg\n- **Overlap niet checken**: een S&P 500 ETF + een World ETF hebben veel overlap\n- **Active fonds verwarren met ETF**: niet alles wat 'fonds' heet is een index-ETF\n- **Kosten negeren**: 0,5% klinkt weinig, maar tikt aan over decennia\n\n## Conclusie\n\nVoor 95% van de jongeren is een wereldwijde ETF (VWCE of IWDA) de slimste keuze. Saai, voorspelbaar, en historisch winnend van bijna alle alternatieven. Begin er één, lever maandelijks in, en vergeet het 20 jaar.",
    afbeelding_url: img("1551288049-bebda4e38f71"),
    category: "ETF",
    gepubliceerd_op: "2026-03-22",
    leestijd_minuten: 9
  },
  {
    id: "b3",
    titel: "5 fouten die beginnende beleggers maken (en hoe je ze voorkomt)",
    slug: "5-fouten-beginners",
    samenvatting:
      "Deze veelgemaakte fouten kosten jonge beleggers samen miljarden euro's per jaar. Voorkom ze en je hebt al een groot deel van de strijd gewonnen.",
    inhoud:
      "## Fout 1: Te veel handelen\n\nVeel beginners denken dat actief handelen — dagelijks aandelen kopen en verkopen — meer rendement oplevert. Het tegendeel is bewezen: onderzoek van Dalbar laat zien dat de gemiddelde particuliere belegger jaarlijks 3-5% minder rendement haalt dan de markt zelf, vooral door te veel handelen.\n\n**Oplossing**: kies een strategie (bv. periodiek inleggen in een wereld-ETF) en handel maximaal 2-4x per jaar. Saai? Ja. Effectief? Heel.\n\n## Fout 2: Geen spreiding\n\nAlles inzetten op één 'hot' aandeel is gokken, niet beleggen. Voorbeelden uit de praktijk:\n\n- Begin 2022 was Tesla €400 → eind 2022 €120 (−70%)\n- Wirecard ging in 2020 failliet — €100 → €0 in 3 dagen\n- GameStop ging van $480 → $40 in een paar maanden\n\n**Oplossing**: maximaal 5-10% van je portefeuille in één individueel aandeel. De rest in gespreide ETF's. Liever 100 saaie bedrijven dan 1 spannende.\n\n## Fout 3: Emoties laten regeren\n\nDe markt gaat omhoog → je voelt FOMO en koopt op de top. De markt crasht → je voelt paniek en verkoopt op de bodem. Dit patroon — bekend als 'buy high, sell low' — is de hoofdoorzaak van slechte resultaten bij beginners.\n\n**Concrete cijfers**: tijdens de corona-crash in maart 2020 verkochten miljoenen beginners. Wie destijds verkocht en niet terugkwam, miste een rally van 100%+ in de jaren erna.\n\n**Oplossing**: schrijf je strategie op papier. Bij elke impulsieve gedachte: lees het op, wacht 24 uur, kijk dan opnieuw.\n\n## Fout 4: Niet kijken naar kosten\n\nKosten lijken klein, maar werken samen over tijd. Een voorbeeld:\n\nStel je belegt €10.000 voor 30 jaar tegen 8% rendement:\n\n- Bij 0,2% kosten: eindwaarde ≈ €97.000\n- Bij 1,5% kosten: eindwaarde ≈ €66.000\n\nVerschil: €31.000 — alleen door kosten. Dat is een ander vakantiehuis.\n\n**Oplossing**: kijk altijd naar:\n\n- **TER** (lopende kosten ETF/fonds): onder 0,30%\n- **Transactiekosten** broker: onder €5 per transactie\n- **Maandelijkse servicekosten**: bij voorkeur €0\n- **Valuta­omwisselings­spread**: tussen 0,1-0,5%\n\n## Fout 5: Geen plan\n\n'Ik begin gewoon met €1000 in Tesla, dan zien we wel.' → Geen plan. Wanneer verkoop je? Bij +20%? +100%? Wat als het −30% staat? Hoeveel verdraag je?\n\nBeleggen zonder plan is varen zonder kaart — je kunt aankomen maar weet niet waar, en je raakt vaker de weg kwijt.\n\n**Oplossing**: schrijf op één A4 op:\n\n- Mijn doel: bijv. financiële onafhankelijkheid op 50\n- Horizon: bijv. 25+ jaar\n- Inleg: bijv. €200/maand\n- Strategie: bijv. 80% wereld-ETF + 20% emerging markets ETF\n- Verkoopregel: 'verkoop alleen als doel bereikt of grote levensgebeurtenis'\n\n## Bonusfout: Crypto als hoofdmoot\n\nVeel jongeren beginnen met 100% crypto (Bitcoin, Ethereum, altcoins). Dit is geen beleggen — het is speculatie. Crypto kan 70-90% in waarde dalen binnen een jaar (en is dat ook al meerdere keren gedaan).\n\n**Oplossing**: maximum 5-10% van je portefeuille in crypto. De rest in aandelen-ETF's en obligaties.\n\n## Bonusfout: Beleggen met geleend geld\n\nLenen om te beleggen klinkt logisch (rente lager dan verwacht rendement). In de praktijk: bij een crash zit je vast met de lening EN met verlies. Dit heet 'leverage' en heeft talloze beleggers gebroken — inclusief professionele.\n\n**Oplossing**: belegg alleen met geld dat je écht 10+ jaar kan missen.\n\n## Conclusie: succesvolle beleggers zijn lui\n\nDe meest succesvolle particuliere beleggers doen één ding: ze beginnen vroeg, beleggen periodiek in gespreide ETF's, en doen verder niets. Boring is the new sexy.\n\nAls je deze 7 fouten vermijdt, sla je 80% van de jonge beleggers in rendement. Niet door slim te zijn — maar door niet dom te zijn.",
    afbeelding_url: img("1554224154-22dec7ec8818"),
    category: "Strategie",
    gepubliceerd_op: "2026-02-15",
    leestijd_minuten: 8
  },
  {
    id: "b4",
    titel: "Samengestelde rente: waarom vroeg beginnen alles uitmaakt",
    slug: "samengestelde-rente-jongeren",
    samenvatting:
      "Einstein noemde samengestelde rente 'het achtste wereldwonder'. We leggen uit waarom dit voor jongeren onder 30 het krachtigste financiële mechanisme is dat bestaat.",
    inhoud:
      "## Wat is samengestelde rente?\n\nGewone rente: je krijgt rente over je inleg. Bijvoorbeeld €100 × 5% = €5 per jaar, elk jaar weer €5.\n\nSamengestelde rente: je krijgt rente over je inleg PLUS over de rente die je al hebt verdiend. Dus:\n\n- Jaar 1: €100 → €105 (rente: €5)\n- Jaar 2: €105 → €110,25 (rente: €5,25)\n- Jaar 3: €110,25 → €115,76 (rente: €5,51)\n\nLeest het verschil klein? Wacht 30 jaar af.\n\n## De magie van tijd\n\nStel: twee vrienden, allebei 22 jaar.\n\n**Anna** begint nu (22) en legt 8 jaar lang €200/maand in. Daarna stopt ze met inleggen, laat het staan tot 65. Totale inleg: €19.200.\n\n**Bob** wacht tot zijn 30e en legt dan 35 jaar lang €200/maand in tot zijn 65e. Totale inleg: €84.000.\n\nGemiddeld rendement: 7%/jaar.\n\n**Resultaat op 65-jarige leeftijd**:\n\n- Anna: ~€430.000\n- Bob: ~€370.000\n\nAnna heeft 4x minder ingelegd, maar EINDIGT MET MEER GELD dan Bob — alleen omdat ze 8 jaar eerder begon. Dat is samengestelde rente in actie.\n\n## De Rule of 72\n\nEen vuistregel om snel uit te rekenen hoe lang het duurt voordat je geld verdubbelt:\n\n**72 ÷ rendementspercentage = aantal jaren tot verdubbeling**\n\n- Bij 4% rendement: 72/4 = 18 jaar tot verdubbeling\n- Bij 7% rendement: 72/7 = 10,3 jaar tot verdubbeling\n- Bij 10% rendement: 72/10 = 7,2 jaar tot verdubbeling\n\nDit betekent: bij gemiddeld 7% rendement (historisch wereld-ETF) verdubbelt je geld elke 10 jaar.\n\n## Wat als je €100/maand belegt vanaf je 22e?\n\nMet 7% gemiddeld jaarlijks rendement, automatisch periodiek inleggen:\n\n- Op je 30e: ~€13.000 (inleg €9.600)\n- Op je 40e: ~€36.000 (inleg €21.600)\n- Op je 50e: ~€79.000 (inleg €33.600)\n- Op je 60e: ~€164.000 (inleg €45.600)\n- Op je 65e: ~€237.000 (inleg €51.600)\n\nJe legt €51.600 in. Je krijgt €237.000. Dat is 4,6x je inleg — gratis geld dankzij tijd.\n\n## Waarom werkt dit zo goed voor jongeren?\n\nHet rendement op rendement effect heeft *tijd* nodig om te werken. Hoe meer tijd, hoe exponentieler de groei. In de eerste 10 jaar gebeurt er weinig zichtbaars — in de laatste 10 jaar verdriedubbelt je portefeuille.\n\nDit is waarom 'beleggen op je 60e starten' relatief weinig oplevert, en beleggen op je 22e starten levensveranderend kan zijn.\n\n## De praktijk: hoe begin je?\n\n1. Open een account bij een goedkope broker (Trading 212, DEGIRO, Trade Republic)\n2. Kies een gespreide wereld-ETF (VWCE/VWRL of IWDA)\n3. Stel een **automatische** periodieke inleg in — €50, €100 of €200 per maand\n4. **Kijk niet meer** voor de eerste 10 jaar\n\n## Maar de markt kan crashen!\n\nKlopt. Maar voor lange-termijn beleggen is dat *goed nieuws*. Als je 30 jaar inlegt en de markt halveert in jaar 15, koop je daarna 15 jaar lang aandelen met korting. Bij herstel profiteer je dubbel.\n\nDit werkt alleen als je niet verkoopt tijdens een crash. Discipline > intelligentie.\n\n## Negatieve samengestelde rente: kosten\n\nHetzelfde principe werkt ook in je nadeel met **kosten**. Een fondskost van 1,5% in plaats van 0,2% lijkt klein, maar over 40 jaar tijd verlies je grofweg een derde van je eindvermogen.\n\nKijk bij elke broker en elke ETF naar de kosten — ze sluipen in je rendement.\n\n## Conclusie\n\nJongeren onder 30 hebben één gigantisch voordeel dat 40-jarigen niet meer kunnen kopen: **tijd**. Elke euro die je nu inlegt is over 40 jaar veel meer waard dan elke euro die je over 10 jaar inlegt.\n\nDe beste tijd om te beginnen was 10 jaar geleden. De op één na beste tijd is vandaag.",
    afbeelding_url: img("1554224154-22dec7ec8818"),
    category: "Strategie",
    gepubliceerd_op: "2026-01-28",
    leestijd_minuten: 7
  },
  {
    id: "b5",
    titel: "Belastingen op beleggen in Nederland: box 3 uitgelegd",
    slug: "belasting-box-3-beleggen",
    samenvatting:
      "Hoeveel belasting betaal je over je beleggingen? We leggen box 3 uit in mensentaal en geven praktische tips om legaal te besparen.",
    inhoud:
      "## Disclaimer\n\nDit is geen belastingadvies. Belastingregels veranderen jaarlijks. Voor specifieke situaties: raadpleeg een belastingadviseur of de Belastingdienst.\n\n## De basis: drie 'boxen'\n\nDe Nederlandse inkomstenbelasting bestaat uit drie 'boxen':\n\n- **Box 1**: inkomen uit werk en eigen woning (de meest bekende)\n- **Box 2**: aanmerkelijk belang (DGA's, aandeelhouders in BV)\n- **Box 3**: spaargeld en beleggingen\n\nVoor jongeren met beleggingen is box 3 relevant.\n\n## Hoe werkt box 3 in 2026?\n\nDe overheid neemt aan dat je een fictief rendement haalt op je vermogen — ongeacht of dat klopt. Op dit fictief rendement betaal je 36% inkomstenbelasting.\n\nDe percentages voor 2026 (indicatief — controleer actuele cijfers):\n\n- **Spaargeld**: fictief rendement ~1,03%\n- **Beleggingen** (aandelen, ETF's, crypto, vastgoed): fictief rendement ~6,17%\n- **Schulden**: aftrek ~2,46%\n\nHet bedrag aan fictief rendement wordt belast met 36%.\n\n## De vrijstelling\n\nIn 2026 is er een vrijstelling van **€57.000 per persoon** (€114.000 voor fiscale partners samen). Onder dit bedrag betaal je geen box 3 belasting.\n\n## Rekenvoorbeeld\n\nStel je hebt €70.000 in een wereld-ETF en geen schulden:\n\n- Vermogen: €70.000\n- Vrijstelling: €57.000\n- Belastbaar: €13.000\n- Fictief rendement beleggingen: 6,17% × €13.000 = €802\n- Belasting: 36% × €802 = **€289 per jaar**\n\nGeen vermogensbelasting tot je vermogen boven de vrijstelling uitkomt.\n\n## Peildatum: 1 januari\n\nDe Belastingdienst kijkt naar je vermogen op **1 januari** van het belastingjaar. Wat je in de loop van het jaar bij of af doet, telt voor dat jaar niet meer mee — pas voor het volgende.\n\n**Truc**: vlak voor 1 januari grote uitgaven doen (auto, vakantie, schenkingen) verlaagt je vermogen voor dat hele jaar.\n\n## Welke beleggingen vallen in box 3?\n\n- Aandelen, obligaties, ETF's\n- Crypto (sinds 2020 verplicht aangeven)\n- Vastgoed (anders dan eigen woning)\n- Spaargeld\n- Vorderingen, leningen\n- Cash op broker account\n\nNiet in box 3: pensioen (vrijgesteld), eigen woning (box 1).\n\n## Tip 1: Maak gebruik van de vrijstelling\n\nGetrouwd of fiscaal partner? Verdeel je vermogen zo dat beide vrijstellingen worden gebruikt. €114.000 vrij belegbaar in plaats van €57.000.\n\n## Tip 2: Lijfrente / pensioenbeleggen\n\nVia een lijfrente (bv. bij Brand New Day of Meesman) kun je een deel van je inleg aftrekken van je box 1 inkomen. Aftrekbaar bedrag heet 'jaarruimte' en is afhankelijk van je inkomen.\n\nVoordeel: directe belastingteruggave + niet in box 3.\nNadeel: geld zit vast tot pensioenleeftijd.\n\n## Tip 3: Schuld en bezittingen\n\nAls je een schuld hebt (bv. studieschuld), telt deze niet altijd mee als 'box 3 schuld' — alleen schulden boven een drempel van €3700 (in 2026).\n\nHet is dus *niet* zinvol om een studieschuld af te lossen alleen voor box 3 — die telt vaak toch niet mee.\n\n## Tip 4: Accumulating ETF's\n\nEen accumulating ETF (acc) herbelegt dividend automatisch. Een distributing ETF keert dividend uit. Beide vallen in box 3, maar bij een acc-ETF heb je minder administratie en geen aparte dividendbelasting (15% Amerikaans/0-15% Europees, kun je vaak terugvorderen).\n\n## Tip 5: Crypto wordt steeds strenger\n\nCrypto valt vanaf 2026 onder strenge rapportageplicht (DAC8 richtlijn). Bitvavo, Coinbase, etc. moeten je transactiegegevens delen met de Belastingdienst. Het is dus niet meer 'onder de radar' beleggen.\n\nMaar: voor de meeste jongeren onder de vrijstelling is dit administratief — geen daadwerkelijke belasting.\n\n## Wat moet je doen?\n\n1. Geef alle box 3 bezittingen aan bij je belastingaangifte (verplicht!)\n2. Geef ook crypto aan — Bitvavo geeft een handig overzicht\n3. Check je vrijstelling: onder €57.000 betaal je niets\n4. Overweeg lijfrente als je inkomen hoog is\n5. Twijfel? Een belastingadviseur kost €200-€500/jaar — vaak verdient hij zichzelf terug\n\n## Conclusie\n\nVoor 90% van de jongeren onder 30 is box 3 geen probleem — de vrijstelling van €57.000 dekt vaak alles. Maar geef je beleggingen wel altijd correct op. De Belastingdienst krijgt steeds beter zicht op brokers, exchanges en zelfs internationale rekeningen.",
    afbeelding_url: img("1450101499163-c8848c66ca85"),
    category: "Strategie",
    gepubliceerd_op: "2026-01-10",
    leestijd_minuten: 9
  },
  {
    id: "b6",
    titel: "Crypto of aandelen? Een eerlijke vergelijking",
    slug: "crypto-vs-aandelen",
    samenvatting:
      "Veel jongeren staan voor de keuze: beleggen in aandelen of in crypto? We zetten de feiten naast elkaar zonder hype of doemverhaal.",
    inhoud:
      "## De vraag waar elke jonge belegger mee worstelt\n\nIn elke vrienden-WhatsApp, op elke TikTok-feed: crypto of aandelen? Is Bitcoin het nieuwe goud? Zijn aandelen 'boomer'? We bekijken het kalm.\n\n## Wat zijn de twee opties?\n\n### Aandelen / ETF's\n\nEigendom van bedrijven. Een aandeel Apple is een (heel klein) stukje Apple. Een ETF is een mandje van honderden tot duizenden bedrijven. Aandelen bestaan al sinds 1602 (VOC), ETF's sinds 1993.\n\n### Crypto\n\nDigitale activa op een blockchain. Bitcoin (sinds 2009) is het bekendst, gevolgd door Ethereum (2015). Crypto vertegenwoordigt geen eigendom van een bedrijf — wel rechten op het netwerk (Bitcoin als 'digitaal goud', Ethereum als platform voor apps).\n\n## Vergelijking op 8 punten\n\n### 1. Volatiliteit\n\n- **Aandelen-ETF**: 15-25% schommeling per jaar, crashes van 30-50% komen 1x per 10-15 jaar voor\n- **Crypto**: 50-100% schommeling per jaar, crashes van 80%+ kwamen 4x voor in 15 jaar (2011, 2014, 2018, 2022)\n\n**Conclusie**: crypto is veel volatieler. Niet per se slecht, wel relevant voor je nachtrust.\n\n### 2. Historisch rendement\n\n- **S&P 500**: gemiddeld 10% per jaar over 100 jaar\n- **MSCI World**: gemiddeld 8% per jaar over 50 jaar\n- **Bitcoin**: gemiddeld 100%+ per jaar sinds 2010, maar met enorme schommelingen\n\n**Belangrijk**: 100% per jaar is GEEN garantie voor de toekomst. Het rendement van de eerste 10 jaar van een asset is bijna nooit het langetermijn-rendement.\n\n### 3. Fundamenten\n\n- **Aandelen**: bedrijven maken winst, betalen dividend, hebben werknemers en producten. Waardering is gebaseerd op cash flow en groei.\n- **Crypto**: waardering is gebaseerd op gebruik van het netwerk en speculatie. Geen winst, geen dividend.\n\n**Conclusie**: aandelen hebben tastbare fundamenten, crypto draait op netwerk-effecten en geloof.\n\n### 4. Regulering en bescherming\n\n- **Aandelen**: streng gereguleerd (AFM, SEC), depositogarantie voor cash bij broker, AIFM-richtlijn voor fondsen\n- **Crypto**: minder gereguleerd (al verandert dit snel met MiCA), geen depositogarantie, exchange-faillissementen kunnen je geld kosten (zie FTX in 2022)\n\n**Conclusie**: aandelen zijn juridisch veel beter beschermd.\n\n### 5. Belasting (Nederland)\n\nBeide vallen in box 3. Geen verschil — beleggingen zijn beleggingen.\n\n### 6. Toegankelijkheid\n\n- **Aandelen**: vanaf €1 via Trading 212, fractioneel beleggen mogelijk\n- **Crypto**: vanaf €1 via Bitvavo, vrijwel onbeperkt fractioneel (je kunt 0,00001 Bitcoin kopen)\n\n**Conclusie**: gelijk.\n\n### 7. Tijd-horizon\n\n- **Aandelen-ETF**: minimaal 10 jaar voor lager risico op verlies\n- **Crypto**: bij sommige cycli kun je in 1-3 jaar al rijk zijn, maar ook 5+ jaar onder water staan\n\n**Conclusie**: aandelen zijn voorspelbaarder over lange termijn.\n\n### 8. Diversificatie\n\nEén wereld-ETF = 3000+ bedrijven uit 50+ landen.\nÉén crypto = één activum.\n\nWil je gespreide crypto-exposure, dan moet je een crypto-index ETF kopen — die zijn er, maar duur en jong.\n\n## Wie heeft 'gelijk'?\n\nNiemand. Bitcoin-believers wijzen op het track-record van laatste 15 jaar. Aandelen-believers wijzen op het track-record van laatste 200 jaar. Beide hebben argumenten.\n\n## De volwassen aanpak: én-én\n\nVeel financieel adviseurs raden voor jongeren onder 30 aan:\n\n- **80-90%** in wereldwijde aandelen-ETF's (basis)\n- **5-10%** in crypto (Bitcoin, eventueel Ethereum)\n- **5-10%** cash buffer\n\nZo profiteer je van eventueel crypto-upside zonder dat een 80% crash je portefeuille verwoest.\n\n## Praktische adviezen\n\n1. **Begin met aandelen-ETF's** als basis. Het is de saaie, bewezen aanpak.\n2. **Voeg crypto toe pas als je basis staat** en je een buffer hebt.\n3. **Gebruik DCA** (periodiek inleggen) — niet alles in één keer.\n4. **Bewaar grote crypto-bedragen op een hardware wallet**, niet op een exchange.\n5. **Belegg nooit geleend geld** — vooral niet in crypto.\n\n## Wat NIET doen\n\n- Niet alles in crypto stoppen omdat 'het altijd stijgt'\n- Niet je hele aandelenportefeuille verkopen omdat 'crypto het nieuwe geld is'\n- Niet kopen omdat je vriend tienduizenden heeft gemaakt\n- Niet verkopen tijdens een crash uit paniek\n- Niet meme-coins kopen — 95% gaat naar nul\n\n## Conclusie\n\nAandelen en crypto zijn fundamenteel verschillende activa. Aandelen zijn bewezen, voorspelbaar en saai. Crypto is jong, volatiel en potentieel zeer winstgevend (én verliesgevend). Voor de meeste jonge beleggers is een mix verstandiger dan een gokkast-strategie van 100% crypto of een museumstuk-aanpak van 0% crypto.",
    afbeelding_url: img("1639762681485-074b7f938ba0"),
    category: "Strategie",
    gepubliceerd_op: "2025-12-12",
    leestijd_minuten: 10
  }
];
