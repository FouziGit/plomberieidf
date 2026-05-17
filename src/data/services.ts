import type { ServiceCategory } from "@/types";

// Pexels CDN helper
const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const serviceCategories: ServiceCategory[] = [
  // ─── 1. FUITE D'EAU ───────────────────────────────────────────────────────
  {
    id: "fuite-eau",
    title: "Fuite d'eau",
    subtitle: "Urgence 24h/24",
    description:
      "Recherche et réparation de toutes fuites d'eau en urgence. Détection par caméra thermique, réparation durable.",
    icon: "Droplets",
    color: "accent-red",
    colorHex: "#EF4444",
    // Plumber installs pipe fittings
    image: px(6419128),
    services: [
      {
        id: "reparation-fuite-simple",
        title: "Réparation fuite simple",
        description: "Joint, raccord, robinet qui goutte",
        longDescription:
          "Réparation rapide de fuites sur joints, raccords, robinets et flexibles. Intervention en moins de 30 minutes avec remplacement des pièces défectueuses.",
        priceFrom: 80,
        // Handywoman holding plumber's wrench — réparation à la main
        image: px(8486972, 600, 400),
        features: [
          "Diagnostic immédiat",
          "Pièces incluses",
          "Garantie 1 an",
          "Sans dégât",
          "Facture assurance",
        ],
      },
      {
        id: "fuite-canalisation",
        title: "Fuite sur canalisation",
        description: "Canalisation cuivre, PER, PVC",
        longDescription:
          "Réparation ou remplacement de tronçons de canalisation endommagés. Intervention sur cuivre, PER, PVC et multicouche.",
        priceFrom: 150,
        // Leaking pipe fixed with plastic clamp
        image: px(15206136, 600, 400),
        features: [
          "Tous matériaux",
          "Soudure cuivre",
          "Sertissage PER",
          "Collage PVC",
          "Garantie décennale",
        ],
      },
      {
        id: "recherche-fuite",
        title: "Recherche de fuite",
        description: "Caméra thermique, gaz traceur",
        longDescription:
          "Détection précise de fuites encastrées par caméra thermique, gaz traceur ou écoute acoustique. Rapport détaillé pour assurance.",
        priceFrom: 200,
        // Plumber installing pipe fittings — diagnostic sur canalisation
        image: px(6419128, 600, 400),
        features: [
          "Caméra thermique",
          "Gaz traceur",
          "Sans démolition",
          "Rapport assurance",
          "Détection précise",
        ],
      },
    ],
  },

  // ─── 2. DÉBOUCHAGE ────────────────────────────────────────────────────────
  {
    id: "debouchage",
    title: "Débouchage",
    subtitle: "Résultat garanti",
    description:
      "Débouchage professionnel d'éviers, douches, WC et canalisations par furet électrique ou hydrocurage haute pression.",
    icon: "RotateCcw",
    color: "accent-primary",
    colorHex: "#0EA5E9",
    // Blocked drain — canalisation bouchée
    image: px(333650),
    services: [
      {
        id: "debouchage-evier",
        title: "Débouchage évier / lavabo",
        description: "Ventouse pro, furet manuel",
        longDescription:
          "Débouchage rapide d'évier ou lavabo bouché par accumulation de graisse, cheveux ou résidus alimentaires.",
        priceFrom: 80,
        // Person cleaning glass shower unit — nettoyage bonde de siphon
        image: px(4239091, 600, 400),
        features: [
          "Intervention rapide",
          "Furet électrique",
          "Nettoyage siphon",
          "Résultat garanti",
          "Sans produit chimique",
        ],
      },
      {
        id: "debouchage-wc",
        title: "Débouchage WC",
        description: "Furet électrique, pompe",
        longDescription:
          "Débouchage de WC obstrué par furet électrique ou pompe haute pression. Intervention propre et efficace.",
        priceFrom: 100,
        // Blocked drain — WC bouché / canalisation obstruée
        image: px(333650, 600, 400),
        features: [
          "Furet électrique",
          "Pompe HP",
          "Intervention propre",
          "Résultat immédiat",
          "Désinfection",
        ],
      },
      {
        id: "hydrocurage",
        title: "Hydrocurage haute pression",
        description: "Nettoyage complet canalisations",
        longDescription:
          "Nettoyage en profondeur de vos canalisations par jet d'eau à 200 bars. Élimine graisse, calcaire et racines.",
        priceFrom: 250,
        // Plumber installing pipe — professionnel avec matériel hydrocurage
        image: px(6419128, 600, 400),
        features: [
          "200 bars",
          "Nettoyage complet",
          "Préventif",
          "Caméra inspection",
          "Rapport état",
        ],
      },
    ],
  },

  // ─── 3. CHAUFFE-EAU ───────────────────────────────────────────────────────
  {
    id: "chauffe-eau",
    title: "Chauffe-eau",
    subtitle: "Pose le jour même",
    description:
      "Installation, remplacement et réparation de chauffe-eau électriques, gaz et thermodynamiques. Marques premium.",
    icon: "Flame",
    color: "accent-orange",
    colorHex: "#F97316",
    // Gray water heater in bathroom
    image: px(9551366),
    services: [
      {
        id: "depannage-chauffe-eau",
        title: "Dépannage / Réparation",
        description: "Thermostat, résistance, groupe sécurité",
        longDescription:
          "Diagnostic et réparation de panne de chauffe-eau : thermostat, résistance, groupe de sécurité, anode.",
        priceFrom: 90,
        // Gray water heater — dépannage ballon
        image: px(9551366, 600, 400),
        features: [
          "Diagnostic inclus",
          "Pièces d'origine",
          "Toutes marques",
          "Intervention rapide",
          "Garantie pièces",
        ],
      },
      {
        id: "remplacement-200l",
        title: "Chauffe-eau 200L",
        description: "Idéal 3-4 personnes",
        longDescription:
          "Fourniture et pose d'un chauffe-eau 200 litres. Dépose de l'ancien, raccordements, mise en service. Marques : Atlantic, Thermor, De Dietrich.",
        priceFrom: 650,
        // Water heater / boiler installation
        image: px(9551366, 600, 400),
        features: [
          "Fourniture + Pose",
          "Dépose ancien",
          "Mise en service",
          "Garantie 5 ans",
          "Marques premium",
        ],
      },
      {
        id: "thermodynamique",
        title: "Chauffe-eau thermodynamique",
        description: "Économique, éligible aides",
        longDescription:
          "Installation de chauffe-eau thermodynamique pour réduire votre facture d'énergie de 70%. Éligible aux aides de l'État.",
        priceFrom: 2500,
        // Water heater — thermodynamique pompe à chaleur
        image: px(9551366, 600, 400),
        features: [
          "-70% énergie",
          "Aides État",
          "Installation complète",
          "Garantie 5 ans",
          "Marques certifiées",
        ],
      },
    ],
  },

  // ─── 4. ROBINETTERIE & SANITAIRES ─────────────────────────────────────────
  {
    id: "robinetterie",
    title: "Robinetterie & Sanitaires",
    subtitle: "Toutes marques",
    description:
      "Installation et réparation de robinets, mitigeurs, WC, lavabos et douches. Toutes marques et modèles.",
    icon: "Wrench",
    color: "accent-emerald",
    colorHex: "#10B981",
    // Person holding a faucet — robinetterie
    image: px(5710332),
    services: [
      {
        id: "reparation-robinet",
        title: "Réparation robinet",
        description: "Joint, cartouche, aérateur",
        longDescription:
          "Réparation de robinet qui goutte, mitigeur défectueux, joint usé. Remplacement de cartouche céramique.",
        priceFrom: 60,
        // Person holding a faucet — robinet à réparer
        image: px(5710332, 600, 400),
        features: [
          "Toutes marques",
          "Pièces incluses",
          "Intervention rapide",
          "Arrêt fuite",
          "Garantie",
        ],
      },
      {
        id: "remplacement-wc",
        title: "Remplacement WC complet",
        description: "Dépose ancien + pose neuf",
        longDescription:
          "Dépose de l'ancien WC et installation du nouveau. Raccordement eau et évacuation. WC à poser ou suspendu.",
        priceFrom: 250,
        // White bathroom interior — WC et sanitaires
        image: px(1454804, 600, 400),
        features: [
          "Fourniture + Pose",
          "Dépose ancien",
          "Raccordements",
          "Étanchéité",
          "Nettoyage",
        ],
      },
      {
        id: "colonne-douche",
        title: "Colonne de douche",
        description: "Thermostatique ou mécanique",
        longDescription:
          "Installation de colonne de douche complète. Dépose ancienne, pose nouvelle colonne, raccordements.",
        priceFrom: 180,
        // Person cleaning glass shower — installation paroi douche
        image: px(4239091, 600, 400),
        features: [
          "Fourniture + Pose",
          "Thermostatique",
          "Anti-brûlure",
          "Jets multiples",
          "Garantie 2 ans",
        ],
      },
    ],
  },

  // ─── 5. RÉNOVATION SALLE DE BAIN ──────────────────────────────────────────
  {
    id: "renovation-salle-de-bain",
    title: "Rénovation Salle de Bain",
    subtitle: "Clé en main",
    description:
      "Rénovation complète ou partielle de votre salle de bain. Plomberie, carrelage, étanchéité, douche à l'italienne.",
    icon: "Bath",
    color: "accent-purple",
    colorHex: "#A855F7",
    // Modern design of bathroom
    image: px(17069809),
    services: [
      {
        id: "renovation-partielle",
        title: "Rénovation partielle",
        description: "Sanitaires, robinetterie, accessoires",
        longDescription:
          "Remplacement des sanitaires, robinetterie et accessoires sans toucher au carrelage existant.",
        priceFrom: 3500,
        // White bathroom interior — salle de bain rénovée
        image: px(1454804, 600, 400),
        features: [
          "Sanitaires neufs",
          "Robinetterie",
          "Raccordements",
          "Sans démolition",
          "1-2 jours",
        ],
      },
      {
        id: "renovation-complete",
        title: "Rénovation complète",
        description: "Démolition, plomberie, carrelage",
        longDescription:
          "Rénovation intégrale : démolition, plomberie, étanchéité, carrelage sol et murs, sanitaires, robinetterie.",
        priceFrom: 6000,
        // Modern design of bathroom — résultat rénovation complète
        image: px(17069809, 600, 400),
        features: [
          "Clé en main",
          "Démolition",
          "Étanchéité SPEC",
          "Carrelage",
          "5-7 jours",
        ],
      },
      {
        id: "douche-italienne",
        title: "Douche à l'italienne",
        description: "Création complète plain-pied",
        longDescription:
          "Création d'une douche à l'italienne avec receveur extra-plat, étanchéité renforcée et paroi vitrée.",
        priceFrom: 4500,
        // Person cleaning glass shower unit — douche avec paroi vitrée
        image: px(4239091, 600, 400),
        features: [
          "Receveur extra-plat",
          "Étanchéité SPEC",
          "Paroi vitrée",
          "Colonne thermostatique",
          "3-4 jours",
        ],
      },
    ],
  },

  // ─── 6. URGENCE PLOMBERIE ─────────────────────────────────────────────────
  {
    id: "urgence-plomberie",
    title: "Urgence Plomberie",
    subtitle: "24h/24 - 7j/7",
    description:
      "Intervention d'urgence pour dégât des eaux, rupture de canalisation, WC débordant. Arrivée en 30 minutes.",
    icon: "AlertTriangle",
    color: "accent-amber",
    colorHex: "#F59E0B",
    // Handywoman with plumber's wrench — plombier prêt à intervenir
    image: px(8486972),
    services: [
      {
        id: "degat-des-eaux",
        title: "Dégât des eaux",
        description: "Fuite massive, inondation",
        longDescription:
          "Intervention immédiate pour stopper un dégât des eaux : coupure d'eau, réparation, pompage. Rapport pour assurance.",
        priceFrom: 80,
        // Flooded small village — inondation dégât des eaux
        image: px(6471927, 600, 400),
        features: [
          "Arrivée 30 min",
          "Coupure d'eau",
          "Réparation immédiate",
          "Rapport assurance",
          "24h/24",
        ],
      },
      {
        id: "rupture-canalisation",
        title: "Rupture de canalisation",
        description: "Canalisation éclatée, gel",
        longDescription:
          "Réparation d'urgence de canalisation éclatée par gel, corrosion ou choc. Remplacement du tronçon endommagé.",
        priceFrom: 150,
        // Leaking pipe fixed with plastic — canalisation qui fuit
        image: px(15206136, 600, 400),
        features: [
          "Urgence absolue",
          "Remplacement",
          "Tous matériaux",
          "Nuit & week-end",
          "Facture détaillée",
        ],
      },
      {
        id: "wc-debordant",
        title: "WC débordant",
        description: "Refoulement, bouchon",
        longDescription:
          "Intervention d'urgence pour WC qui déborde ou refoule. Débouchage immédiat et désinfection.",
        priceFrom: 100,
        // Blocked drain — WC bouché qui déborde
        image: px(333650, 600, 400),
        features: [
          "Intervention rapide",
          "Débouchage pro",
          "Désinfection",
          "Résultat garanti",
          "7j/7",
        ],
      },
    ],
  },

  // ─── 7. ENTRETIEN CHAUDIÈRE & BALLON ──────────────────────────────────────
  {
    id: "entretien-chaudiere-ballon",
    title: "Entretien Chaudière & Ballon",
    subtitle: "Toutes marques",
    description:
      "Entretien annuel de votre chaudière (gaz, fioul, condensation) et de votre ballon d'eau chaude. Plombier-chauffagiste certifié, attestation d'entretien remise. Forfait HT hors déplacement et pièces.",
    icon: "ShieldCheck",
    color: "accent-teal",
    colorHex: "#14B8A6",
    // Plumber installing pipe — technicien chauffagiste au travail
    image: px(6419128),
    services: [
      {
        id: "entretien-chaudiere",
        title: "Entretien chaudière annuel",
        description: "Gaz, fioul, condensation — multi-marque",
        longDescription:
          "Entretien annuel obligatoire (décret 2009-649) de votre chaudière. Nettoyage du brûleur, contrôle de la combustion, mesure du CO, vérification des organes de sécurité, attestation d'entretien remise. Toutes marques : Saunier Duval, Frisquet, De Dietrich, Vaillant, ELM Leblanc, Chappée, Bosch, Viessmann. Forfait à partir de 155 € HT, hors déplacement et pièces.",
        priceFrom: 155,
        // Plumber installing pipe — entretien chaudière par un pro
        image: px(6419128, 600, 400),
        features: [
          "Multi-marque",
          "Attestation d'entretien",
          "Contrôle CO + combustion",
          "Nettoyage brûleur",
          "Forfait HT (hors déplacement & pièces)",
        ],
      },
      {
        id: "entretien-ballon",
        title: "Entretien ballon d'eau chaude",
        description: "Détartrage, anode, groupe sécurité",
        longDescription:
          "Entretien complet de votre ballon d'eau chaude : détartrage de la résistance, contrôle de l'anode magnésium, vérification du groupe de sécurité, contrôle du thermostat. Toutes marques : Atlantic, Thermor, De Dietrich, Sauter, Ariston, Chaffoteaux. Forfait à partir de 175 € HT, hors déplacement et pièces.",
        priceFrom: 175,
        // Gray water heater — ballon d'eau chaude entretien
        image: px(9551366, 600, 400),
        features: [
          "Multi-marque",
          "Détartrage résistance",
          "Contrôle anode magnésium",
          "Vérification groupe sécurité",
          "Forfait HT (hors déplacement & pièces)",
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return serviceCategories.find((c) => c.id === slug);
}
