import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { company } from "@/data/company";

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <nav className="flex items-center gap-2 text-xs text-foreground/40 mb-8">
        <Link href="/" className="hover:text-accent-primary transition-colors">
          Accueil
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground/70">Politique de confidentialité</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gradient mb-8">Politique de confidentialité</h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-8 text-foreground/60">
        <section>
          <h2 className="text-lg font-bold text-foreground">Collecte des données</h2>
          <p>
            Les données personnelles collectées via le formulaire de contact (nom, téléphone, message)
            sont utilisées uniquement pour répondre à votre demande d&apos;intervention ou de devis.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Utilisation des données</h2>
          <p>
            Vos données ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.
            Elles sont conservées uniquement le temps nécessaire au traitement de votre demande.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques
            essentiels au fonctionnement du site peuvent être utilisés.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à :{" "}
            {company.email}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Contact</h2>
          <p>
            {company.legalName}<br />
            {company.address.full}<br />
            Email : {company.email}<br />
            Téléphone : {company.phone.display}
          </p>
        </section>
      </div>
    </div>
  );
}
