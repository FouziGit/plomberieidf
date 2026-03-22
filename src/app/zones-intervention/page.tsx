import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, Shield, ChevronRight, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { zones, totalCities } from "@/data/zones";

export const metadata = {
  title: "Zones d'intervention — Plombier Paris & Île-de-France | Plomberie IDF",
  description: `Plomberie IDF intervient dans les 8 départements d'Île-de-France. ${totalCities}+ villes couvertes. Urgence 24h/24, intervention en 30 min à Paris, 45 min en IDF.`,
};

export default function ZonesPage() {
  return (
    <div className="bg-white">
      {/* ═══ HERO ═══ */}
      <section className="hero-gradient border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-foreground/40 mb-8">
            <Link href="/" className="hover:text-accent-primary transition-colors">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/70">Zones d&apos;intervention</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-bold text-accent-primary mb-6">
              <MapPin className="w-3.5 h-3.5" />
              {totalCities}+ villes couvertes en Île-de-France
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Zones d&apos;<span className="text-gradient">intervention</span><br />
              <span className="text-2xl lg:text-3xl font-bold text-foreground/60">Paris & Île-de-France</span>
            </h1>
            <p className="mt-5 text-lg text-foreground/60 leading-relaxed max-w-2xl">
              Nous intervenons dans les <strong className="text-foreground">8 départements d&apos;Île-de-France</strong>, 24h/24 et 7j/7. Cliquez sur un département pour voir les villes couvertes et les délais d&apos;intervention.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${company.phone.raw}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-accent-primary hover:bg-accent-primary-dark shadow-xl shadow-accent-primary/25 transition-all"
              >
                <Phone className="w-5 h-5" />
                {company.phone.display}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-accent-green hover:bg-accent-green/90 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Départements", value: "8" },
              { icon: Clock, label: "Délai Paris", value: "30 min" },
              { icon: Clock, label: "Délai IDF", value: "45 min" },
              { icon: Shield, label: "Disponibilité", value: "24h/24" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/8 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-foreground">{item.value}</div>
                  <div className="text-xs text-foreground/50">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GRILLE ZONES ═══ */}
      <section className="py-20 lg:py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground">
              Sélectionnez votre <span className="text-gradient">département</span>
            </h2>
            <p className="mt-3 text-foreground/55">Chaque page département contient les informations locales, les délais et les services disponibles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {zones.map((zone) => (
              <Link
                key={zone.code}
                href={`/zones-intervention/${zone.code}`}
                className="group bg-white rounded-2xl border border-gray-100 p-6 card-hover shadow-sm flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent-primary/8 flex items-center justify-center">
                    <span className="text-xl font-extrabold text-accent-primary">{zone.code}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-foreground/20 group-hover:text-accent-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent-primary transition-colors">{zone.name}</h3>
                <p className="text-xs text-foreground/50 mt-1">{zone.cities.length} villes couvertes</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {zone.cities.slice(0, 3).map((city) => (
                    <span key={city} className="text-xs px-2 py-1 rounded-md bg-gray-50 text-foreground/60">{city}</span>
                  ))}
                  {zone.cities.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-accent-primary/8 text-accent-primary font-medium">+{zone.cities.length - 3}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-14 bg-accent-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-9 h-9 text-white mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white">Votre ville n&apos;est pas listée ?</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Nous intervenons dans toute l&apos;Île-de-France. Appelez-nous pour vérifier notre disponibilité.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${company.phone.raw}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-accent-primary bg-white hover:bg-gray-50 shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              {company.phone.display}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
          { "@type": "ListItem", position: 2, name: "Zones d'intervention" },
        ],
      })}} />
    </div>
  );
}
