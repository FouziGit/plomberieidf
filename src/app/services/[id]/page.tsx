import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  Zap,
  ArrowRight,
  Wrench,
} from "lucide-react";
import { company } from "@/data/company";
import { phoneHref, whatsappHref, whatsappHrefWithText } from "@/lib/contact";
import { serviceCategories, getCategoryBySlug } from "@/data/services";
import { iconMap } from "@/lib/icons";

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({ id: cat.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const category = getCategoryBySlug(id);
  if (!category) return { title: "Service non trouvé" };
  const minPrice = Math.min(...category.services.map((s) => s.priceFrom));
  return {
    title: `${category.title} Paris & IDF | Dès ${minPrice}€ - Plombier 24h/24`,
    description: `${category.description} Intervention en 30 min à Paris. Devis gratuit, à partir de ${minPrice}€. Artisan certifié Qualibat, garantie décennale. ☎ 09 83 92 92 92`,
    alternates: { canonical: `/services/${id}` },
    openGraph: {
      title: `${category.title} Paris & IDF | Dès ${minPrice}€`,
      description: `${category.description} ${company.stats.rating}/5 sur ${company.stats.reviews} avis. Devis gratuit.`,
      url: `https://plomberieidf.fr/services/${id}`,
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary",
      title: `${category.title} Paris & IDF | Dès ${minPrice}€`,
      description: `${category.description} ☎ 09 83 92 92 92`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = getCategoryBySlug(id);

  if (!category) notFound();

  const Icon = iconMap[category.icon] || Wrench;
  const otherCategories = serviceCategories.filter((c) => c.id !== id);

  return (
    <div className="relative">
      {/* ═══ HERO ═══ */}
      <section className="relative py-20 lg:py-28 bg-grid overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: `${category.colorHex}08` }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-foreground/40 mb-8" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-accent-primary transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#services" className="hover:text-accent-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/70">{category.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
                style={{
                  backgroundColor: `${category.colorHex}15`,
                  color: category.colorHex,
                  border: `1px solid ${category.colorHex}30`,
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {category.subtitle}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                <span className="text-gradient">{category.title}</span>
              </h1>

              <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
                {category.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-brand-dark bg-gradient-to-r from-accent-amber to-accent-amber-light hover:shadow-2xl hover:shadow-accent-amber/30 transition-all pulse-ring"
                >
                  <Phone className="w-5 h-5" />
                  {company.phone.display}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-accent-green hover:bg-accent-green/90 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Devis gratuit
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-xs text-foreground/40">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent-primary" />
                  Intervention en {company.responseTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-accent-primary" />
                  Garantie décennale
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-accent-amber" />
                  {company.stats.rating}/5
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-brand-border/30 shadow-2xl">
                <Image
                  src={category.image}
                  alt={`${category.title} — plombier professionnel Paris et Île-de-France`}
                  width={800}
                  height={500}
                  className="w-full h-[400px] object-cover"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-[40px] pointer-events-none"
                style={{ backgroundColor: `${category.colorHex}30` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES LIST ═══ */}
      <section className="py-20 lg:py-28 border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: category.colorHex }}>
              Nos prestations
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Détail des <span className="text-gradient">services</span>
            </h2>
          </div>

          <div className="space-y-8">
            {category.services.map((service) => (
              <div
                key={service.id}
                className="glass rounded-2xl overflow-hidden card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="relative h-[220px] lg:h-auto">
                    <Image
                      src={service.image}
                      alt={`${service.title} — ${category.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark/50 lg:bg-gradient-to-r lg:from-transparent lg:to-brand-dark/80" />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                        <p className="text-sm text-foreground/50 mt-1">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-foreground/40">À partir de</div>
                        <div className="text-2xl font-extrabold text-gradient">
                          {service.priceFrom}€
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                      {service.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feat) => (
                        <span
                          key={feat}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                          style={{
                            backgroundColor: `${category.colorHex}10`,
                            color: category.colorHex,
                          }}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={phoneHref}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-brand-dark bg-gradient-to-r from-accent-amber to-accent-amber-light hover:shadow-lg hover:shadow-accent-amber/20 transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Appeler
                      </a>
                      <a
                        href={whatsappHrefWithText(`Bonjour, je souhaite un devis pour : ${service.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-accent-green hover:bg-accent-green/90 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Devis WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ URGENCY CTA ═══ */}
      <section className="py-16 bg-gradient-to-r from-accent-primary/10 via-brand-surface to-accent-amber/10 border-y border-brand-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-10 h-10 text-accent-amber mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Besoin d&apos;une intervention <span className="text-gradient-amber">rapide</span> ?
          </h2>
          <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
            Nos plombiers sont disponibles 24h/24 pour tous vos besoins en {category.title.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-brand-dark bg-gradient-to-r from-accent-amber to-accent-amber-light hover:shadow-2xl hover:shadow-accent-amber/30 transition-all pulse-ring"
            >
              <Phone className="w-5 h-5" />
              {company.phone.display}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-accent-green hover:bg-accent-green/90 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══ OTHER SERVICES ═══ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Autres <span className="text-gradient">services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.slice(0, 3).map((cat) => {
              const CatIcon = iconMap[cat.icon] || Wrench;
              return (
                <Link
                  key={cat.id}
                  href={`/services/${cat.id}`}
                  className="block glass rounded-2xl p-6 card-hover group h-full"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${cat.colorHex}15` }}
                  >
                    <CatIcon className="w-5 h-5" style={{ color: cat.colorHex }} />
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-accent-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-xs text-foreground/50">{cat.subtitle}</p>
                  <div className="mt-3 flex items-center gap-1 text-sm font-medium text-accent-primary">
                    Voir
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schema.org — Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${category.title} Paris & Île-de-France`,
            description: category.description,
            url: `https://plomberieidf.fr/services/${id}`,
            image: category.image,
            serviceType: category.title,
            provider: {
              "@id": "https://plomberieidf.fr/#organization",
              "@type": "Plumber",
              name: company.name,
              telephone: company.phone.international,
              url: "https://plomberieidf.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: company.address.street,
                addressLocality: company.address.city,
                postalCode: company.address.zip,
                addressRegion: company.address.region,
                addressCountry: "FR",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: company.stats.rating,
                reviewCount: company.stats.reviews,
                bestRating: 5,
              },
            },
            areaServed: {
              "@type": "State",
              name: "Île-de-France",
              containedInPlace: { "@type": "Country", name: "France" },
            },
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: company.phone.international,
                contactType: "customer service",
                availableLanguage: company.languages,
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "00:00",
                  closes: "23:59",
                },
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: category.title,
              itemListElement: category.services.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.title,
                  description: s.longDescription,
                },
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: s.priceFrom,
                  priceCurrency: "EUR",
                  unitText: "intervention",
                },
                availability: "https://schema.org/InStock",
              })),
            },
            termsOfService: "Devis gratuit et sans engagement",
          }),
        }}
      />
      {/* Schema.org — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://plomberieidf.fr/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://plomberieidf.fr/#services" },
              { "@type": "ListItem", position: 3, name: category.title, item: `https://plomberieidf.fr/services/${id}` },
            ],
          }),
        }}
      />
    </div>
  );
}
