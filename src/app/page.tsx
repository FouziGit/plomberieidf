"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock,
  Shield,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Zap,
  Award,
  ThumbsUp,
  MapPin,
  Droplets,
  RotateCcw,
  Flame,
  Wrench,
  Bath,
  AlertTriangle,
  Users,
  Send,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { company } from "@/data/company";
import { serviceCategories } from "@/data/services";
import { pricingTiers, faqs } from "@/data/pricing";
import { zones, totalCities } from "@/data/zones";

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  RotateCcw,
  Flame,
  Wrench,
  Bath,
  AlertTriangle,
};

/* ─── Counter Animation ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2000;
        const startTime = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString("fr-FR")}{suffix}</span>;
}

/* ─── FAQ Item ─── */
function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border border-gray-200 rounded-xl overflow-hidden hover:border-accent-primary/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm sm:text-base font-semibold text-foreground pr-4">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-accent-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="px-6 pb-5 text-sm text-foreground/60 leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── MAIN PAGE ─── */
export default function HomePage() {
  return (
    <div className="relative">

      {/* ═══════════════════════════════════════
          HERO — 2 colonnes desktop
      ═══════════════════════════════════════ */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        {/* Blob décoratif */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-primary/8 blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Colonne gauche */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-semibold text-accent-primary mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                </span>
                Disponible maintenant — Intervention en {company.responseTime}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground"
              >
                Votre <span className="text-gradient">plombier</span><br />
                à Paris &amp;<br />
                Île-de-France
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="mt-5 text-base sm:text-lg text-foreground/60 leading-relaxed max-w-lg"
              >
                Dépannage <strong className="text-foreground font-semibold">24h/24 et 7j/7</strong>. Fuite d&apos;eau, débouchage, chauffe-eau, rénovation. Artisan certifié, devis gratuit, tarifs transparents.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href={`tel:${company.phone.raw}`}
                  className="relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-accent-primary hover:bg-accent-primary-dark shadow-xl shadow-accent-primary/25 transition-all pulse-ring"
                >
                  <Phone className="w-5 h-5" />
                  {company.phone.display}
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-accent-green hover:bg-accent-green/90 shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp gratuit
                </a>
              </motion.div>

              {/* Micro-réassurance */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-wrap gap-5"
              >
                {[
                  { icon: Shield, label: "Garantie décennale" },
                  { icon: Clock, label: "Intervention 30 min" },
                  { icon: BadgeCheck, label: "Devis gratuit" },
                  { icon: Star, label: `${company.stats.rating}/5 (${company.stats.reviews} avis)` },
                ].map((item) => (
                  <span key={item.label} className="flex items-center gap-1.5 text-xs font-medium text-foreground/50">
                    <item.icon className="w-4 h-4 text-accent-primary" />
                    {item.label}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Colonne droite — image + card flottante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white">
                <img
                  src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=700&h=520&fit=crop"
                  alt="Plombier professionnel en intervention Paris"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
              </div>

              {/* Card note Google */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{company.stats.rating} / 5</div>
                  <div className="text-xs text-foreground/50">{company.stats.reviews} avis clients</div>
                </div>
              </div>

              {/* Card urgence */}
              <div className="absolute -top-5 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                  </span>
                  <span className="text-xs font-bold text-accent-green">En ligne</span>
                </div>
                <div className="text-sm font-bold text-foreground">Urgence 24h/24</div>
                <div className="text-xs text-foreground/50">Réponse &lt; 5 min</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════ */}
      <section className="border-y border-gray-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: company.stats.experience, suffix: "+", label: "Années d'expérience", icon: Award },
              { value: company.stats.interventions, suffix: "+", label: "Interventions réalisées", icon: Wrench },
              { value: company.stats.satisfaction, suffix: "%", label: "Clients satisfaits", icon: ThumbsUp },
              { value: totalCities, suffix: "+", label: "Villes couvertes", icon: MapPin },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-primary/8 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-accent-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-gradient">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-sm text-foreground/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — grille 3 colonnes desktop
      ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Nos expertises</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-foreground">
              Tous vos besoins en <span className="text-gradient">plomberie</span>
            </h2>
            <p className="mt-4 text-foreground/55 max-w-2xl mx-auto">
              Du dépannage d&apos;urgence à la rénovation complète, nos artisans qualifiés interviennent partout en Île-de-France.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Wrench;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={`/services/${cat.id}`} className="group block bg-white rounded-2xl border border-gray-100 p-6 card-hover h-full shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.colorHex}12` }}>
                        <Icon className="w-6 h-6" style={{ color: cat.colorHex }} />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${cat.colorHex}10`, color: cat.colorHex }}>
                        {cat.subtitle}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent-primary transition-colors">{cat.title}</h3>
                    <p className="mt-2 text-sm text-foreground/55 leading-relaxed">{cat.description}</p>
                    <div className="mt-5 pt-4 border-t border-gray-50 flex items-center gap-1 text-sm font-semibold text-accent-primary">
                      Voir les tarifs
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ENGAGEMENTS — 4 colonnes
      ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Pourquoi nous choisir</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-foreground">
              Nos <span className="text-gradient">engagements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Intervention rapide", desc: "Arrivée en 30 min sur Paris, 45 min en Île-de-France. 24h/24 et 7j/7 sans supplément de déplacement.", color: "#F59E0B", bg: "#FEF3C7" },
              { icon: Shield, title: "Garantie décennale", desc: "Tous nos travaux sont couverts par notre assurance décennale et RC professionnelle. Facture conforme assurance.", color: "#0284C7", bg: "#EFF6FF" },
              { icon: CheckCircle2, title: "Devis gratuit", desc: "Diagnostic et devis détaillé avant chaque intervention. Prix fixé à l'avance, aucun frais caché garanti.", color: "#16A34A", bg: "#F0FDF4" },
              { icon: Star, title: "Artisans certifiés", desc: `${company.stats.rating}/5 sur ${company.stats.reviews} avis Google. Plus de ${company.stats.experience} ans d'expérience en plomberie.`, color: "#A855F7", bg: "#FAF5FF" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 card-hover shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: item.bg }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ÉQUIPE — 2 colonnes
      ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 section-alt border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Notre équipe</span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-foreground">
                Des artisans <span className="text-gradient">qualifiés</span> et expérimentés
              </h2>
              <p className="mt-5 text-foreground/60 leading-relaxed">
                Nos plombiers sont tous diplômés, assurés et expérimentés. Formés aux dernières techniques et normes NF, ils interviennent proprement et efficacement chez vous.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  "Artisans certifiés RGE et Qualibat",
                  "Équipement professionnel haute performance",
                  "Formation continue aux nouvelles normes",
                  "Respect de votre domicile et nettoyage après intervention",
                  "Facture détaillée conforme pour votre assurance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/70">
                    <CheckCircle2 className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <a
                  href={`tel:${company.phone.raw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-accent-primary hover:bg-accent-primary-dark shadow-lg shadow-accent-primary/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {company.phone.display}
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-accent-green hover:bg-accent-green/90 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/8 border border-gray-100">
                <img
                  src="https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop"
                  alt="Plombier professionnel qualifié"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent-green" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{company.stats.interventions}+</div>
                  <div className="text-xs text-foreground/50">Interventions réussies</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TARIFS — 3 colonnes
      ═══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Tarifs transparents</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-foreground">
              Des prix <span className="text-gradient">clairs</span> et sans surprise
            </h2>
            <p className="mt-4 text-foreground/55 max-w-2xl mx-auto">
              Devis gratuit avant chaque intervention. Le prix est fixé à l&apos;avance, aucune mauvaise surprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-7 relative card-hover ${
                  tier.highlighted
                    ? "bg-accent-primary text-white shadow-2xl shadow-accent-primary/30 scale-[1.03]"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-amber text-xs font-bold text-white shadow">
                    Le + demandé
                  </div>
                )}
                <h3 className={`text-lg font-bold ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                  {tier.title}
                </h3>
                <p className={`text-xs mt-1 ${tier.highlighted ? "text-white/70" : "text-foreground/50"}`}>
                  {tier.subtitle}
                </p>
                <div className="mt-5">
                  <span className={`text-xs ${tier.highlighted ? "text-white/70" : "text-foreground/40"}`}>
                    {tier.priceLabel}
                  </span>
                  <div className={`text-4xl font-extrabold mt-0.5 ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                    {tier.priceFrom > 0 ? `${tier.priceFrom}€` : "Gratuit"}
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${tier.highlighted ? "text-white/90" : "text-foreground/65"}`}>
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${tier.highlighted ? "text-white" : "text-accent-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${company.phone.raw}`}
                  className={`mt-7 block text-center py-3.5 rounded-xl text-sm font-bold transition-all ${
                    tier.highlighted
                      ? "text-accent-primary bg-white hover:bg-gray-50"
                      : "text-white bg-accent-primary hover:bg-accent-primary-dark shadow-lg shadow-accent-primary/20"
                  }`}
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Appeler maintenant
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          URGENCE CTA — bande pleine largeur
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-accent-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Zap className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Une urgence plomberie ?
            </h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto text-lg">
              Fuite d&apos;eau, dégât des eaux, WC bouché ? Nos plombiers arrivent en moins de 30 minutes, 24h/24 et 7j/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${company.phone.raw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-accent-primary bg-white hover:bg-gray-50 shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Appeler : {company.phone.display}
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
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section id="faq" className="py-20 lg:py-28 section-alt border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">FAQ</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-foreground">
              Questions <span className="text-gradient">fréquentes</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT — 2 colonnes
      ═══════════════════════════════════════ */}
      <section id="contact" className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Contact</span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-foreground">
                Besoin d&apos;un <span className="text-gradient">plombier</span> ?
              </h2>
              <p className="mt-4 text-foreground/60 leading-relaxed">
                Appelez-nous directement ou envoyez-nous un message. Réponse en moins de 5 minutes.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { href: `tel:${company.phone.raw}`, icon: Phone, label: company.phone.display, sub: "24h/24 - 7j/7", color: "text-accent-primary", bg: "bg-blue-50" },
                  { href: `https://wa.me/${company.whatsapp.number}`, icon: MessageCircle, label: "WhatsApp", sub: "Réponse rapide", color: "text-accent-green", bg: "bg-green-50", target: "_blank" },
                  { href: `mailto:${company.email}`, icon: Award, label: company.email, sub: "Email", color: "text-foreground/60", bg: "bg-gray-50" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={(item as { target?: string }).target}
                    rel={(item as { target?: string }).target ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-accent-primary/20 hover:bg-gray-50 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{item.label}</div>
                      <div className="text-xs text-foreground/50">{item.sub}</div>
                    </div>
                  </a>
                ))}

                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground/40" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{company.address.full}</div>
                    <div className="text-xs text-foreground/50">Intervention toute Île-de-France</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.target as HTMLFormElement);
                  const text = `Bonjour, je suis ${data.get("name")}. ${data.get("message")} (Tél: ${data.get("phone")})`;
                  window.open(`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(text)}`, "_blank");
                }}
              >
                <h3 className="text-xl font-bold text-foreground">Demander un devis gratuit</h3>
                {[
                  { name: "name", label: "Votre nom", type: "text", placeholder: "Jean Dupont" },
                  { name: "phone", label: "Téléphone", type: "tel", placeholder: "06 00 00 00 00" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold text-foreground/70 mb-1.5">{field.label}</label>
                    <input
                      name={field.name}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground text-sm placeholder:text-foreground/30 focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/10 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Votre problème</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Décrivez votre problème de plomberie..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-foreground text-sm placeholder:text-foreground/30 focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/10 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold text-white bg-accent-primary hover:bg-accent-primary-dark shadow-lg shadow-accent-primary/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Envoyer via WhatsApp
                </button>
                <p className="text-xs text-center text-foreground/40">Réponse garantie en moins de 5 minutes</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ZONES PREVIEW
      ═══════════════════════════════════════ */}
      <section className="py-16 section-alt border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground">
              Toute l&apos;<span className="text-gradient">Île-de-France</span> couverte
            </h2>
            <p className="mt-3 text-foreground/55 max-w-xl mx-auto">
              Nous intervenons dans les 8 départements IDF, soit plus de {totalCities} villes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {zones.map((zone) => (
                <Link
                  key={zone.code}
                  href={`/zones-intervention/${zone.code}`}
                  className="px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-medium text-foreground/70 hover:text-accent-primary hover:border-accent-primary/30 hover:shadow-sm transition-all"
                >
                  {zone.name} <span className="text-foreground/40">({zone.code})</span>
                </Link>
              ))}
            </div>
            <Link
              href="/zones-intervention"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:text-accent-primary-dark transition-colors"
            >
              Voir toutes les zones
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Plumber",
        name: company.name, description: company.description,
        telephone: company.phone.international, email: company.email,
        address: { "@type": "PostalAddress", streetAddress: company.address.street, addressLocality: company.address.city, postalCode: company.address.zip, addressCountry: "FR" },
        geo: { "@type": "GeoCoordinates", latitude: company.coordinates.lat, longitude: company.coordinates.lng },
        openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: company.stats.rating, reviewCount: company.stats.reviews, bestRating: 5 },
        areaServed: zones.map((z) => ({ "@type": "AdministrativeArea", name: z.name })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      })}} />
    </div>
  );
}
