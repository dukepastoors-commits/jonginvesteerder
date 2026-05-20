-- JongInvesteerder Supabase schema
-- Voer dit uit in de Supabase SQL editor.

create table if not exists apps (
  id uuid primary key default gen_random_uuid(),
  naam text not null,
  slug text unique not null,
  logo_url text,
  minimale_inleg numeric not null default 0,
  transactiekosten text,
  maandelijkse_kosten text,
  beoordeling numeric not null default 0,
  geschikt_voor_beginners boolean default true,
  crypto_beschikbaar boolean default false,
  affiliate_link text,
  beschrijving text,
  voor_wie text,
  voordelen text[] default '{}',
  nadelen text[] default '{}',
  laatste_update date default current_date
);

create table if not exists nieuws_artikelen (
  id uuid primary key default gen_random_uuid(),
  titel text not null,
  slug text unique not null,
  samenvatting text,
  inhoud text,
  afbeelding_url text,
  category text,
  gepubliceerd_op date default current_date,
  leestijd_minuten int default 3,
  gerelateerde_apps text[] default '{}'
);

create table if not exists blog_artikelen (
  id uuid primary key default gen_random_uuid(),
  titel text not null,
  slug text unique not null,
  samenvatting text,
  inhoud text,
  afbeelding_url text,
  category text,
  gepubliceerd_op date default current_date,
  leestijd_minuten int default 5
);

-- Row level security: alleen lezen toestaan voor anon
alter table apps enable row level security;
alter table nieuws_artikelen enable row level security;
alter table blog_artikelen enable row level security;

create policy "public read apps" on apps for select using (true);
create policy "public read nieuws" on nieuws_artikelen for select using (true);
create policy "public read blog" on blog_artikelen for select using (true);

-- Seed data (zelfde als mockData.ts)
insert into apps (naam, slug, minimale_inleg, transactiekosten, maandelijkse_kosten, beoordeling, geschikt_voor_beginners, crypto_beschikbaar, affiliate_link, beschrijving, voor_wie, voordelen, nadelen) values
('DEGIRO','degiro',0.01,'€1 - €3 per transactie','Geen',4.5,true,false,'https://www.degiro.nl/?ref=jonginvesteerder','DEGIRO is een Nederlandse broker met lage kosten en toegang tot beurzen wereldwijd.','Beleggers die zelf willen handelen tegen lage kosten.', array['Zeer lage transactiekosten','Brede keuze aan beurzen','Nederlandse broker'], array['Geen crypto','Interface kan wennen zijn']),
('Trading 212','trading-212',1,'€0 (gratis)','Geen',4.6,true,false,'https://www.trading212.com/?ref=jonginvesteerder','Trading 212 biedt gratis aandelen en ETF''s met fractioneel beleggen vanaf €1.','Beginners die klein willen starten.', array['Gratis transacties','Fractioneel vanaf €1','Simpele app'], array['Geen Nederlandse vestiging','Geen crypto']),
('eToro','etoro',50,'€0 voor aandelen, spread bij crypto','Geen',4.0,true,true,'https://www.etoro.com/?ref=jonginvesteerder','eToro combineert aandelen, ETF''s en crypto in één platform met social trading.','Wie aandelen, crypto en social trading wil.', array['Aandelen én crypto','Copy trading','Gratis aandelen'], array['Hogere kosten crypto','USD wisselkosten']);

insert into nieuws_artikelen (titel, slug, samenvatting, inhoud, category, leestijd_minuten, gerelateerde_apps) values
('AEX bereikt nieuwe recordstand','aex-recordstand-mei-2026','De AEX sluit voor het eerst boven 1000 punten.','## Wat is er gebeurd?\n\nDe AEX-index is gestegen tot een nieuw record.','Aandelen',3, array['degiro','trading-212']),
('Bitcoin daalt 8% na regelgeving','bitcoin-daalt-na-regelgeving-2026','Nieuwe EU regels zorgen voor onrust.','## De nieuwe regels\n\nDe EU heeft strengere regels aangekondigd voor crypto-platforms binnen MiCA.','Crypto',4, array['etoro']);

insert into blog_artikelen (titel, slug, samenvatting, inhoud, category, leestijd_minuten) values
('Hoe begin je met beleggen?','hoe-begin-je-met-beleggen','Stap voor stap voor 18-30 jarigen.','## Stap 1: Bouw een buffer\n\nZorg eerst voor 3 maanden vaste lasten op je spaarrekening.','Beginners',6),
('Wat is een ETF?','wat-is-een-etf','ETF''s uitgelegd voor beginners.','## Wat is een ETF?\n\nEen mandje met aandelen of obligaties in één keer kopen.','ETF',5);
