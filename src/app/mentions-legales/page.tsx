import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { company } from "@/data/company";

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <nav className="flex items-center gap-2 text-xs text-foreground/40 mb-8">
        <Link href="/" className="hover:text-accent-primary transition-colors">
          Accueil
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground/70">Mentions légales</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gradient mb-8">Mentions légales</h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-8 text-foreground/60">
        <section>
          <h2 className="text-lg font-bold text-foreground">Éditeur du site</h2>
          <p>
            {company.legalName}<br />
            {company.address.full}<br />
            SIRET : {company.siret}<br />
            Téléphone : {company.phone.display}<br />
            Email : {company.email}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Activité</h2>
          <p>
            Travaux de plomberie, dépannage, installation et rénovation de sanitaires en Île-de-France.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Assurance</h2>
          <p>{company.insurance}</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Hébergement</h2>
          <p>
            Vercel Inc.<br />
            440 N Bayard St #890, Wilmington, DE 19801, USA
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos) est protégé par le droit de la
            propriété intellectuelle. Toute reproduction est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">Conception &amp; réalisation</h2>
          <p>
            Ce site a été conçu et réalisé par <strong className="text-foreground">Nouh Benzidane</strong>, développeur web freelance.<br />
            Portfolio :{" "}
            <a
              href="https://nouhbenzidane.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline"
            >
              nouhbenzidane.fr
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
