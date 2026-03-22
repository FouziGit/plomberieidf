"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Droplets,
  RotateCcw,
  Flame,
  Wrench,
  Bath,
  AlertTriangle,
} from "lucide-react";
import { company } from "@/data/company";
import { serviceCategories, getCategoryBySlug } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  RotateCcw,
  Flame,
  Wrench,
  Bath,
  AlertTriangle,
};

export default function ServicePage() {
  const params = useParams();
  const id = params.id as string;
  const category = getCategoryBySlug(id);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service non trouvé</h1>
          <Link
            href="/"
            className="text-accent-primary hover:text-accent-primary-light transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

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
          <nav className="flex items-center gap-2 text-xs text-foreground/40 mb-8">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
                style={{
                  backgroundColor: `${category.colorHex}15`,
                  color: category.colorHex,
                  border: `1px solid ${category.colorHex}30`,
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {category.subtitle}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
              >
                <span className="text-gradient">{category.title}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg text-foreground/60 leading-relaxed"
              >
                {category.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={`tel:${company.phone.raw}`}
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-brand-dark bg-gradient-to-r from-accent-amber to-accent-amber-light hover:shadow-2xl hover:shadow-accent-amber/30 transition-all pulse-ring"
                >
                  <Phone className="w-5 h-5" />
                  {company.phone.display}
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-accent-green hover:bg-accent-green/90 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Devis gratuit
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4 text-xs text-foreground/40"
              >
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
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden border border-brand-border/30 shadow-2xl">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-[40px] pointer-events-none"
                style={{ backgroundColor: `${category.colorHex}30` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES LIST ═══ */}
      <section className="py-20 lg:py-28 border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: category.colorHex }}>
              Nos prestations
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Détail des <span className="text-gradient">services</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {category.services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="relative h-[220px] lg:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
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
                        href={`tel:${company.phone.raw}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-brand-dark bg-gradient-to-r from-accent-amber to-accent-amber-light hover:shadow-lg hover:shadow-accent-amber/20 transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Appeler
                      </a>
                      <a
                        href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(`Bonjour, je souhaite un devis pour : ${service.title}`)}`}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ URGENCY CTA ═══ */}
      <section className="py-16 bg-gradient-to-r from-accent-primary/10 via-brand-surface to-accent-amber/10 border-y border-brand-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Zap className="w-10 h-10 text-accent-amber mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Besoin d&apos;une intervention <span className="text-gradient-amber">rapide</span> ?
            </h2>
            <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
              Nos plombiers sont disponibles 24h/24 pour tous vos besoins en {category.title.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${company.phone.raw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-brand-dark bg-gradient-to-r from-accent-amber to-accent-amber-light hover:shadow-2xl hover:shadow-accent-amber/30 transition-all pulse-ring"
              >
                <Phone className="w-5 h-5" />
                {company.phone.display}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-accent-green hover:bg-accent-green/90 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ OTHER SERVICES ═══ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Autres <span className="text-gradient">services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.slice(0, 3).map((cat, i) => {
              const CatIcon = iconMap[cat.icon] || Wrench;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: category.title,
            description: category.description,
            provider: {
              "@type": "Plumber",
              name: company.name,
              telephone: company.phone.international,
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Île-de-France",
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
                  "@type": "PriceSpecification",
                  price: s.priceFrom,
                  priceCurrency: "EUR",
                  minPrice: s.priceFrom,
                },
              })),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "/#services" },
              { "@type": "ListItem", position: 3, name: category.title },
            ],
          }),
        }}
      />
    </div>
  );
}
