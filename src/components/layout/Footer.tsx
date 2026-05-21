import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Droplets, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { phoneHref, whatsappHref, emailHref } from "@/lib/contact";
import { serviceCategories } from "@/data/services";
import { zones } from "@/data/zones";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-accent-primary rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-base font-bold text-white">Plomberie</span>
                <span className="text-base font-bold text-accent-primary-light">IDF</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {company.description.slice(0, 200)}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Nos services
            </h4>
            <ul className="space-y-2.5">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services/${cat.id}`}
                    className="text-sm text-gray-400 hover:text-accent-primary-light transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Zones d&apos;intervention
            </h4>
            <ul className="space-y-2.5">
              {zones.slice(0, 6).map((zone) => (
                <li key={zone.code}>
                  <Link
                    href={`/zones-intervention/${zone.code}`}
                    className="text-sm text-gray-400 hover:text-accent-primary-light transition-colors"
                  >
                    {zone.name} ({zone.code})
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/zones-intervention"
                  className="text-sm font-medium text-accent-primary-light hover:text-accent-primary transition-colors"
                >
                  Voir toutes les zones &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={phoneHref}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent-primary-light transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {company.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent-green transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={emailHref}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent-primary-light transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {company.address.full}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Clock className="w-4 h-4 flex-shrink-0" />
                {company.officeHours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; 2026 {company.name}. Tous droits r&eacute;serv&eacute;s. SIRET : {company.siret}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/mentions-legales"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Mentions l&eacute;gales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Confidentialit&eacute;
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800/50 text-center">
            <p className="text-xs text-gray-500">
              Site r&eacute;alis&eacute; par{" "}
              <a
                href="https://nouhbenzidane.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary-light hover:text-white transition-colors font-medium"
              >
                Nouh Benzidane
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
