import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { company } from "@/data/company";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plomberieidf.fr"),
  title: {
    default: "Plombier Paris & Île-de-France | Dépannage Urgence 24h/24 7j/7 - Plomberie IDF",
    template: "%s — Plomberie IDF",
  },
  description: `${company.description} Artisan certifié Qualibat & RGE, garantie décennale. Devis gratuit, ${company.stats.rating}/5 sur ${company.stats.reviews} avis.`,
  alternates: { canonical: "/" },
  keywords: [
    "plombier paris",
    "plombier ile de france",
    "plombier urgence paris",
    "plombier 24h paris",
    "dépannage plomberie paris",
    "fuite eau paris",
    "débouchage paris",
    "chauffe-eau paris",
    "plombier pas cher paris",
    "plombier 75",
    "plombier 92",
    "plombier 93",
    "plombier 94",
    "rénovation salle de bain paris",
    "robinetterie paris",
  ],
  authors: [{ name: "Nouh BENZIDANE" }],
  creator: company.name,
  publisher: company.name,
  category: "Plomberie",
  openGraph: {
    title: "Plombier Paris & Île-de-France | Dépannage Urgence 24h/24",
    description: `${company.description} ${company.stats.rating}/5 (${company.stats.reviews} avis). Devis gratuit.`,
    url: "https://plomberieidf.fr",
    siteName: company.name,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Plombier Paris & IDF | Urgence 24h/24 - Plomberie IDF",
    description: `Dépannage plomberie 24h/24 à Paris et en Île-de-France. ${company.stats.rating}/5. Devis gratuit. ${company.phone.display}`,
  },
  other: {
    "geo.region": "FR-IDF",
    "geo.placename": "Paris",
    "geo.position": `${company.coordinates.lat};${company.coordinates.lng}`,
    "ICBM": `${company.coordinates.lat}, ${company.coordinates.lng}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={outfit.variable}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
