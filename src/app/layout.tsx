import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: "Plombier Paris & Île-de-France | Dépannage Urgence 24h/24 - Plomberie IDF",
    template: "%s | Plomberie IDF",
  },
  description: company.description,
  keywords: [
    "plombier paris",
    "plombier ile de france",
    "dépannage plomberie",
    "fuite eau",
    "débouchage",
    "chauffe-eau",
    "plombier urgence",
    "plombier 24h",
  ],
  authors: [{ name: "Nouh BENZIDANE" }],
  openGraph: {
    title: "Plombier Paris & Île-de-France | Dépannage Urgence 24h/24",
    description: company.description,
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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
