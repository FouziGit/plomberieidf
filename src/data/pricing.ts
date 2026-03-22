import type { PricingTier, FAQ } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    id: "jour",
    title: "Intervention Jour",
    subtitle: "Lun-Sam · 8h-20h",
    priceFrom: 80,
    priceLabel: "À partir de",
    highlighted: false,
    features: [
      "Déplacement inclus",
      "Diagnostic sur place",
      "1ère heure de main d'œuvre",
      "Devis gratuit si réparation",
      "Nettoyage du chantier",
    ],
  },
  {
    id: "urgence",
    title: "Urgence & Nuit",
    subtitle: "Soir · Nuit · Dim · Fériés",
    priceFrom: 120,
    priceLabel: "À partir de",
    highlighted: true,
    features: [
      "Arrivée en 30 min",
      "Priorité d'intervention",
      "Diagnostic immédiat",
      "Sécurisation provisoire",
      "Réparation express",
    ],
  },
  {
    id: "projet",
    title: "Projet & Rénovation",
    subtitle: "Devis gratuit sur RDV",
    priceFrom: 0,
    priceLabel: "Devis gratuit",
    highlighted: false,
    features: [
      "Visite technique gratuite",
      "Prise de mesures précises",
      "Devis détaillé sous 48h",
      "Conseil personnalisé",
      "Garantie décennale",
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: "Quel est votre délai d'intervention en urgence ?",
    answer:
      "Pour une urgence plomberie (fuite importante, dégât des eaux, WC débordant), nous garantissons une arrivée en moins de 30 minutes sur Paris et 45 minutes en Île-de-France. Notre réseau d'artisans couvre l'ensemble de la région.",
  },
  {
    question: "Proposez-vous un devis gratuit ?",
    answer:
      "Oui, nous proposons un devis gratuit et sans engagement pour tous nos services. Pour les urgences, un prix fixe vous est communiqué par téléphone avant le déplacement. Aucun frais caché.",
  },
  {
    question: "Mon assurance prend-elle en charge l'intervention ?",
    answer:
      "En tant qu'artisan agréé assurances, nous fournissons une facture détaillée conforme. En cas de dégât des eaux, la plupart des contrats multirisque habitation couvrent les frais. Nous vous accompagnons dans vos démarches.",
  },
  {
    question: "Quelles zones couvrez-vous ?",
    answer:
      "Nous intervenons sur tout Paris (75) et l'ensemble de l'Île-de-France : Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Seine-et-Marne (77), Yvelines (78), Essonne (91) et Val-d'Oise (95).",
  },
  {
    question: "Intervenez-vous la nuit et le week-end ?",
    answer:
      "Oui, notre service d'urgence fonctionne 24h/24, 7j/7, y compris les jours fériés. Un artisan plombier est toujours disponible. Une majoration nuit/week-end s'applique (à partir de 120€).",
  },
  {
    question: "Combien coûte un remplacement de chauffe-eau ?",
    answer:
      "Le remplacement d'un chauffe-eau électrique 200L (fourniture + pose) commence à 650€ TTC. Le prix varie selon la capacité et la technologie. Nous installons les marques Atlantic, Thermor et De Dietrich.",
  },
];
