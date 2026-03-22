"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  Clock,
  Zap,
  MessageCircle,
  ChevronDown,
  Droplets,
  RotateCcw,
  Flame,
  Wrench,
  Bath,
  AlertTriangle,
} from "lucide-react";
import { company } from "@/data/company";
import { serviceCategories } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  RotateCcw,
  Flame,
  Wrench,
  Bath,
  AlertTriangle,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-accent-primary text-white text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              Plombier d&apos;urgence 24h/24 &mdash; Intervention en{" "}
              {company.responseTime}
            </span>
            <span className="sm:hidden">Urgence 24h/24</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${company.phone.raw}`}
              className="flex items-center gap-1.5 font-bold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              {company.phone.display}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-accent-primary rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-primary/20 transition-all">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  <span className="text-foreground">Plomberie</span>
                  <span className="text-accent-primary">IDF</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
              >
                Accueil
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors">
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 p-2 overflow-hidden"
                    >
                      {serviceCategories.map((cat) => {
                        const Icon = iconMap[cat.icon] || Wrench;
                        return (
                          <Link
                            key={cat.id}
                            href={`/services/${cat.id}`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{
                                backgroundColor: `${cat.colorHex}12`,
                              }}
                            >
                              <Icon
                                className="w-4.5 h-4.5"
                                style={{ color: cat.colorHex }}
                              />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-foreground group-hover:text-accent-primary transition-colors">
                                {cat.title}
                              </div>
                              <div className="text-xs text-foreground/50">
                                {cat.subtitle}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/zones-intervention"
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
              >
                Zones d&apos;intervention
              </Link>
              <a
                href="/#faq"
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
              >
                FAQ
              </a>
              <a
                href="/#contact"
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${company.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-accent-green border border-accent-green/30 hover:bg-accent-green/5 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`tel:${company.phone.raw}`}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-accent-primary hover:bg-accent-primary-dark shadow-lg shadow-accent-primary/20 transition-all pulse-ring"
              >
                <Phone className="w-4 h-4" />
                {company.phone.display}
              </a>
            </div>

            {/* Mobile buttons */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${company.phone.raw}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white bg-accent-primary"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{company.phone.display}</span>
                <span className="sm:hidden">Appeler</span>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-foreground/70 hover:bg-gray-100 transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-1 bg-white">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                >
                  Accueil
                </Link>

                <div className="px-4 py-2 text-xs font-semibold text-foreground/40 uppercase tracking-wider">
                  Services
                </div>
                {serviceCategories.map((cat) => {
                  const Icon = iconMap[cat.icon] || Wrench;
                  return (
                    <Link
                      key={cat.id}
                      href={`/services/${cat.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/60 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: cat.colorHex }}
                      />
                      {cat.title}
                    </Link>
                  );
                })}

                <div className="border-t border-gray-100 my-2" />

                <Link
                  href="/zones-intervention"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                >
                  Zones d&apos;intervention
                </Link>
                <a
                  href="/#faq"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent-primary hover:bg-accent-primary/5 transition-colors"
                >
                  Contact
                </a>

                <div className="pt-2 flex gap-2">
                  <a
                    href={`https://wa.me/${company.whatsapp.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-accent-green"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${company.phone.raw}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-accent-primary"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
