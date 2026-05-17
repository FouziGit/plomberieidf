import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  MapPin,
  Zap,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { company } from "@/data/company";
import { phoneHref, whatsappHref, whatsappHrefWithText } from "@/lib/contact";
import { zones, getZoneByCode } from "@/data/zones";
import { serviceCategories } from "@/data/services";
import { faqs } from "@/data/pricing";
import { iconMap } from "@/lib/icons";

/* ─── Metadata dynamique ─── */
export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  const zone = getZoneByCode(code);
  if (!zone) return { title: "Zone non trouvée" };

  const city = zone.cities[0];
  const delay = (zone.responseTime ?? "45 minutes").replace(" minutes", "");
  return {
    title: `Plombier ${zone.name} (${zone.code}) | Urgence 24h/24 - Dès 80€`,
    description: `Plombier urgence ${zone.name} (${zone.code}) — arrivée en ${delay} min. Fuite d'eau, débouchage, chauffe-eau à ${city} et ${zone.cities.length} villes du ${zone.code}. Devis gratuit, artisan certifié Qualibat. 4.9/5 sur 523 avis. ☎ 09 83 92 92 92`,
    keywords: [
      `plombier ${zone.name.toLowerCase()}`,
      `plombier ${zone.code}`,
      `plombier urgence ${zone.name.toLowerCase()}`,
      `plombier urgence ${zone.code}`,
      `dépannage plomberie ${zone.name.toLowerCase()}`,
      `plombier pas cher ${zone.code}`,
      `fuite eau ${zone.name.toLowerCase()}`,
      `débouchage ${zone.name.toLowerCase()}`,
      ...zone.cities.slice(0, 5).map(c => `plombier ${c.toLowerCase()}`),
    ],
    alternates: { canonical: `/zones-intervention/${zone.code}` },
    openGraph: {
      title: `Plombier ${zone.name} (${zone.code}) | Urgence 24h/24`,
      description: `Intervention rapide en ${delay} min dans le ${zone.code}. ${zone.cities.length} villes couvertes. Devis gratuit. 4.9/5.`,
      url: `https://plomberieidf.fr/zones-intervention/${zone.code}`,
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary",
      title: `Plombier ${zone.name} (${zone.code}) | 24h/24`,
      description: `Dépannage plomberie en ${delay} min dans le ${zone.code}. ☎ 09 83 92 92 92`,
    },
    other: {
      "geo.region": `FR-${zone.code}`,
      "geo.placename": zone.name,
      ...(zone.geo && { "geo.position": `${zone.geo.lat};${zone.geo.lng}` }),
      ...(zone.geo && { "ICBM": `${zone.geo.lat}, ${zone.geo.lng}` }),
    },
  };
}

/* ─── Génération statique des routes ─── */
export async function generateStaticParams() {
  return zones.map((zone) => ({ code: zone.code }));
}

/* ─── PAGE ─── */
export default async function ZonePage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const zone = getZoneByCode(code);
  if (!zone) notFound();

  const mainCity = zone.cities[0];
  const otherZones = zones.filter((z) => z.code !== code).slice(0, 6);

  /* Textes localisés par département */
  const zoneContext: Record<string, { headline: string; desc: string; tip: string }> = {
    "75": {
      headline: `Plombier Paris (75) — Urgence 24h/24`,
      desc: `Notre équipe de plombiers parisiens intervient dans les 20 arrondissements de Paris. Fuite d'eau, WC bouché ou chauffe-eau en panne ? Nos artisans arrivent chez vous en moins de 30 minutes, 7 jours sur 7.`,
      tip: "À Paris, les immeubles anciens présentent souvent des canalisations vétustes. Notre équipe est formée pour intervenir dans les immeubles haussmanniens et les copropriétés.",
    },
    "92": {
      headline: `Plombier Hauts-de-Seine (92) — Intervention Rapide`,
      desc: `Plombier qualifié dans tout le département 92. De Boulogne-Billancourt à Nanterre en passant par Neuilly-sur-Seine, nos artisans interviennent en urgence dans tout le 92.`,
      tip: "Le 92 est l'un de nos secteurs les plus actifs. Nos plombiers connaissent parfaitement ce département et peuvent intervenir en moins de 30 minutes sur l'ensemble du territoire.",
    },
    "93": {
      headline: `Plombier Seine-Saint-Denis (93) — 24h/24 7j/7`,
      desc: `Dépannage plomberie dans tout le 93. Montreuil, Saint-Denis, Pantin, Bobigny... Nos plombiers certifiés interviennent rapidement pour toutes vos urgences en Seine-Saint-Denis.`,
      tip: "Nous intervenons dans les zones pavillonnaires comme dans les immeubles de grande hauteur du 93, avec des équipes formées aux problématiques spécifiques à ce secteur.",
    },
    "94": {
      headline: `Plombier Val-de-Marne (94) — Devis Gratuit`,
      desc: `Plombier professionnel dans le Val-de-Marne. Créteil, Vincennes, Saint-Maur-des-Fossés... Intervention d'urgence en 30 à 45 minutes dans tout le département 94.`,
      tip: "Le Val-de-Marne concentre de nombreuses maisons individuelles avec des réseaux d'assainissement parfois anciens. Notre expertise couvre tous types d'installation.",
    },
    "77": {
      headline: `Plombier Seine-et-Marne (77) — Artisan Certifié`,
      desc: `Plombier en Seine-et-Marne pour tous vos travaux de plomberie. Meaux, Chelles, Melun et toutes les communes du 77. Devis gratuit et intervention rapide.`,
      tip: "La Seine-et-Marne est un vaste département. Nous disposons d'équipes réparties stratégiquement pour intervenir rapidement dans toutes les zones.",
    },
    "78": {
      headline: `Plombier Yvelines (78) — Intervention Express`,
      desc: `Dépannage plomberie dans les Yvelines. Versailles, Saint-Germain-en-Laye, Sartrouville... Nos plombiers qualifiés interviennent dans tout le département 78.`,
      tip: "Dans les Yvelines, nous intervenons aussi bien dans les zones urbaines que dans les communes plus rurales, avec des véhicules entièrement équipés.",
    },
    "91": {
      headline: `Plombier Essonne (91) — Urgence Disponible`,
      desc: `Plombier certifié dans toute l'Essonne. Évry-Courcouronnes, Corbeil-Essonnes, Massy... Service d'urgence 24h/24 et 7j/7 dans tout le département 91.`,
      tip: "L'Essonne compte de nombreuses zones pavillonnaires et lotissements. Nos équipes maîtrisent les installations spécifiques aux maisons individuelles de ce secteur.",
    },
    "95": {
      headline: `Plombier Val-d'Oise (95) — Disponible Maintenant`,
      desc: `Plombier professionnel dans le Val-d'Oise. Argenteuil, Cergy, Sarcelles... Intervention rapide dans tout le département 95, urgence 24h/24.`,
      tip: "Le Val-d'Oise bénéficie d'une couverture complète grâce à nos équipes basées dans le nord de l'Île-de-France. Délai d'intervention parmi les plus rapides.",
    },
  };

  const ctx = zoneContext[code] || {
    headline: `Plombier ${zone.name} (${zone.code})`,
    desc: `Plomberie IDF intervient dans tout le département ${zone.code}. Service d'urgence 24h/24 et 7j/7.`,
    tip: `Nos plombiers couvrent l'intégralité du ${zone.code}.`,
  };

  const localFaqs = [
    {
      question: `Quel est le délai d'intervention d'un plombier en ${zone.name} ?`,
      answer: `Nous garantissons une arrivée en moins de ${zone.responseTime ?? "45 minutes"} dans le département ${zone.code}, y compris à ${mainCity} et dans les villes environnantes. Notre service est disponible 24h/24 et 7j/7, y compris les jours fériés.`,
    },
    {
      question: `Proposez-vous un devis gratuit dans le ${zone.code} ?`,
      answer: `Oui, le devis est totalement gratuit et sans engagement dans tout le département ${zone.code}. Pour les urgences, le prix est fixé avant l'intervention par téléphone. Aucun frais caché.`,
    },
    {
      question: `Intervenez-vous à ${mainCity} en urgence le week-end ?`,
      answer: `Absolument. Nos plombiers interviennent à ${mainCity} et dans tout le ${zone.code} 7 jours sur 7, week-ends et jours fériés inclus, sans surcoût de déplacement.`,
    },
    {
      question: `Quels types de problèmes plomberie traitez-vous dans le ${zone.code} ?`,
      answer: `Nous intervenons pour tous types de problèmes : fuite d'eau, débouchage WC et canalisations, remplacement chauffe-eau, robinetterie, rénovation salle de bain et urgences plomberie dans tout le département ${zone.code}.`,
    },
  ];

  return (
    <div className="relative bg-white">
      {/* ═══ HERO SEO-OPTIMISÉ ═══ */}
      <section className="hero-gradient border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-foreground/40 mb-8" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-accent-primary transition-colors">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/zones-intervention" className="hover:text-accent-primary transition-colors">Zones d&apos;intervention</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/70">{zone.name} ({zone.code})</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Badge département */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-bold text-accent-primary mb-6">
                <MapPin className="w-3.5 h-3.5" />
                Département {zone.code} — {zone.cities.length} villes couvertes
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-foreground">
                <span className="text-gradient">Plombier</span><br />
                {zone.name}<br />
                <span className="text-2xl sm:text-3xl font-bold text-foreground/60">({zone.code}) — 24h/24 7j/7</span>
              </h1>

              <p className="mt-5 text-base text-foreground/60 leading-relaxed max-w-lg">
                {ctx.desc}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={phoneHref}
                  className="relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-accent-primary hover:bg-accent-primary-dark shadow-xl shadow-accent-primary/25 transition-all pulse-ring"
                >
                  <Phone className="w-5 h-5" />
                  {company.phone.display}
                </a>
                <a
                  href={whatsappHrefWithText(`Bonjour, j'ai besoin d'un plombier dans le ${zone.code} - ${mainCity}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-accent-green hover:bg-accent-green/90 shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-5">
                {[
                  { icon: Clock, label: `Arrivée en ${zone.responseTime ?? "45 minutes"}` },
                  { icon: Shield, label: "Garanti décennal" },
                  { icon: Star, label: `${company.stats.rating}/5 avis` },
                  { icon: CheckCircle2, label: "Devis gratuit" },
                ].map((item) => (
                  <span key={item.label} className="flex items-center gap-1.5 text-xs font-medium text-foreground/50">
                    <item.icon className="w-4 h-4 text-accent-primary" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Panel info rapide */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-7">
              <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-primary" />
                Villes couvertes dans le {zone.code}
              </h2>
              <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                {zone.cities.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-sm text-foreground/65 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-gray-100 bg-accent-primary/5 rounded-xl p-4">
                <p className="text-sm font-medium text-accent-primary">
                  💡 {ctx.tip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RÉASSURANCE ═══ */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Urgence 24h/24", desc: `Disponible la nuit et le week-end dans tout le ${zone.code}`, color: "text-accent-amber", bg: "bg-amber-50" },
              { icon: Clock, title: zone.responseTime ?? "45 minutes", desc: `Délai d'intervention garanti dans le ${zone.code}`, color: "text-accent-primary", bg: "bg-blue-50" },
              { icon: Shield, title: "Garantie décennale", desc: "RC Pro + garantie décennale sur tous travaux", color: "text-accent-green", bg: "bg-green-50" },
              { icon: CheckCircle2, title: "Devis gratuit", desc: "Prix fixé avant l'intervention, sans surprise", color: "text-accent-primary", bg: "bg-blue-50" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="text-base font-bold text-foreground">{item.title}</div>
                <div className="text-xs text-foreground/50 mt-1 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-20 lg:py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Nos services</span>
            <h2 className="mt-3 text-2xl lg:text-3xl font-extrabold text-foreground">
              Plomberie dans le <span className="text-gradient">{zone.code}</span> — nos prestations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Wrench;
              return (
                <Link
                  key={cat.id}
                  href={`/services/${cat.id}`}
                  className="group bg-white rounded-2xl border border-gray-100 p-6 card-hover shadow-sm flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${cat.colorHex}12` }}>
                      <Icon className="w-5 h-5" style={{ color: cat.colorHex }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-accent-primary transition-colors">{cat.title}</h3>
                      <p className="text-xs text-foreground/50 mt-0.5">{cat.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/55 leading-relaxed flex-1">{cat.description}</p>
                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-center gap-1 text-sm font-semibold text-accent-primary">
                    Voir les tarifs
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA URGENCE ═══ */}
      <section className="py-14 bg-accent-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-9 h-9 text-white mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white">
            Urgence plomberie en {zone.name} ?
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Nos plombiers arrivent en {zone.responseTime ?? "45 minutes"} dans le {zone.code}, 24h/24 et 7j/7.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-accent-primary bg-white hover:bg-gray-50 shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              {company.phone.display}
            </a>
            <a
              href={whatsappHref}
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

      {/* ═══ FAQ LOCALE ═══ */}
      <section className="py-20 section-alt border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground">
              Questions fréquentes — plombier en {zone.name}
            </h2>
          </div>
          <div className="space-y-3">
            {localFaqs.map((faq, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden group hover:border-accent-primary/30 transition-colors"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-sm font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-accent-primary flex-shrink-0 rotate-90 group-open:rotate-[270deg] transition-transform duration-300" />
                </summary>
                <div className="px-6 pb-5 pt-3 border-t border-gray-100 text-sm text-foreground/60 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AUTRES ZONES ═══ */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-foreground text-center mb-8">
            Nous intervenons aussi dans ces départements
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherZones.map((z) => (
              <Link
                key={z.code}
                href={`/zones-intervention/${z.code}`}
                className="block bg-white border border-gray-100 rounded-xl p-4 text-center card-hover shadow-sm group"
              >
                <div className="text-2xl font-extrabold text-accent-primary group-hover:scale-110 transition-transform">{z.code}</div>
                <div className="text-xs text-foreground/60 mt-1 font-medium">{z.name}</div>
                <div className="text-xs text-foreground/40 mt-0.5">{z.cities.length} villes</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/zones-intervention" className="text-sm font-semibold text-accent-primary hover:text-accent-primary-dark transition-colors inline-flex items-center gap-1">
              Toutes les zones <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Schema.org JSON-LD — Plumber ═══ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Plumber", "LocalBusiness"],
        name: `${company.name} — ${zone.name}`,
        description: ctx.desc,
        telephone: company.phone.international,
        email: company.email,
        url: `https://plomberieidf.fr/zones-intervention/${zone.code}`,
        image: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
        priceRange: company.priceRange,
        currenciesAccepted: "EUR",
        paymentAccepted: company.paymentMethods.join(", "),
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address.street,
          addressLocality: company.address.city,
          postalCode: company.address.zip,
          addressRegion: company.address.region,
          addressCountry: "FR",
        },
        ...(zone.geo && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: zone.geo.lat,
            longitude: zone.geo.lng,
          },
        }),
        areaServed: zone.cities.map((city) => ({
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "AdministrativeArea", name: zone.name },
        })),
        serviceArea: {
          "@type": "AdministrativeArea",
          name: zone.name,
          ...(zone.geo && { geo: { "@type": "GeoCoordinates", latitude: zone.geo.lat, longitude: zone.geo.lng } }),
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: company.stats.rating,
          reviewCount: company.stats.reviews,
          bestRating: 5,
          worstRating: 1,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Services plomberie ${zone.name}`,
          itemListElement: serviceCategories.map((cat) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${cat.title} ${zone.name}`,
              description: cat.description,
              areaServed: zone.name,
            },
          })),
        },
        knowsAbout: [
          `Plomberie ${zone.name}`,
          `Dépannage plomberie ${zone.code}`,
          `Fuite d'eau ${zone.name}`,
          `Débouchage ${zone.name}`,
          `Chauffe-eau ${zone.name}`,
        ],
        hasCredential: company.certifications.map((cert) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: cert,
        })),
        isRelatedTo: { "@id": "https://plomberieidf.fr/#organization" },
        mainEntityOfPage: `https://plomberieidf.fr/zones-intervention/${zone.code}`,
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://plomberieidf.fr/" },
          { "@type": "ListItem", position: 2, name: "Zones d'intervention", item: "https://plomberieidf.fr/zones-intervention" },
          { "@type": "ListItem", position: 3, name: `${zone.name} (${zone.code})`, item: `https://plomberieidf.fr/zones-intervention/${zone.code}` },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: localFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      })}} />
    </div>
  );
}
