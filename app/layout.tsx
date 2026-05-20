import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jonginvesteerder.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JongInvesteerder — Beleggingsapps vergelijken voor jongeren",
    template: "%s | JongInvesteerder"
  },
  description:
    "Vergelijk de beste beleggingsapps voor 18-30 jarigen in Nederland. Eerlijk, actueel en zonder jargon.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "JongInvesteerder",
    url: siteUrl
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
