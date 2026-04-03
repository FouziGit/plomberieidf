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
    question: "Quel est le délai d'intervention d'un plombier en urgence à Paris ?",
    answer:
      "En cas d'urgence plomberie à Paris (fuite d'eau importante, dégât des eaux, WC débordant), Plomberie IDF garantit l'arrivée d'un artisan en moins de 30 minutes dans Paris intra-muros et 45 minutes dans le reste de l'Île-de-France. Le service d'urgence est disponible 24h/24, 7j/7, y compris les jours fériés.",
  },
  {
    question: "Combien coûte un plombier à Paris en 2026 ?",
    answer:
      "Le tarif d'un plombier à Paris en 2026 varie selon le type d'intervention : réparation de fuite simple à partir de 80€, débouchage dès 80€, dépannage chauffe-eau dès 90€. Pour les interventions de nuit, week-end ou jours fériés, le tarif d'urgence démarre à 120€. Le devis est systématiquement gratuit et sans engagement, avec un prix fixé avant l'intervention.",
  },
  {
    question: "Le devis est-il gratuit pour un plombier en Île-de-France ?",
    answer:
      "Oui, Plomberie IDF propose un devis 100% gratuit et sans engagement pour tous les services de plomberie en Île-de-France. Pour les urgences, le prix est communiqué par téléphone avant le déplacement du plombier. Il n'y a aucun frais caché : le tarif annoncé est le tarif appliqué, déplacement inclus.",
  },
  {
    question: "L'assurance habitation prend-elle en charge le plombier ?",
    answer:
      "En cas de dégât des eaux, la plupart des contrats d'assurance multirisque habitation couvrent les frais de plomberie. Plomberie IDF est agréé par les compagnies d'assurance et fournit une facture détaillée conforme aux exigences des assureurs. L'entreprise accompagne également ses clients dans les démarches de déclaration de sinistre.",
  },
  {
    question: "Dans quelles villes intervient Plomberie IDF ?",
    answer:
      "Plomberie IDF intervient dans les 8 départements d'Île-de-France, soit plus de 120 villes : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Seine-et-Marne (77), Yvelines (78), Essonne (91) et Val-d'Oise (95). Le délai d'intervention est de 30 minutes à Paris et 45 minutes en banlieue.",
  },
  {
    question: "Peut-on appeler un plombier la nuit ou le week-end à Paris ?",
    answer:
      "Oui, Plomberie IDF dispose d'un service d'urgence plomberie fonctionnant 24 heures sur 24, 7 jours sur 7, nuits, week-ends et jours fériés inclus. Un artisan plombier est toujours de garde. Le tarif d'intervention nuit et week-end commence à 120€ TTC, déplacement et diagnostic inclus.",
  },
  {
    question: "Combien coûte le remplacement d'un chauffe-eau à Paris ?",
    answer:
      "Le remplacement d'un chauffe-eau électrique 200L à Paris (fourniture + pose + dépose de l'ancien) est proposé à partir de 650€ TTC par Plomberie IDF. Le prix varie selon la capacité (100L à 300L) et la technologie (électrique, gaz, thermodynamique). Les marques installées incluent Atlantic, Thermor et De Dietrich, avec une garantie de 5 ans.",
  },
  {
    question: "Quelles certifications possède Plomberie IDF ?",
    answer:
      "Plomberie IDF est une entreprise certifiée Qualibat et labellisée RGE (Reconnu Garant de l'Environnement). Tous les artisans sont couverts par une assurance responsabilité civile professionnelle et une garantie décennale. L'entreprise, enregistrée sous le SIRET 907 922 256 00017, cumule plus de 15 ans d'expérience et plus de 5 000 interventions réalisées en Île-de-France.",
  },
  {
    question: "Que faire en cas de fuite d'eau urgente ?",
    answer:
      "En cas de fuite d'eau urgente : 1) Coupez immédiatement l'arrivée d'eau au robinet d'arrêt général. 2) Coupez l'électricité si l'eau atteint des prises ou appareils électriques. 3) Protégez vos biens en plaçant des serpillières ou bassines. 4) Appelez un plombier d'urgence (Plomberie IDF : 07 65 82 26 26, arrivée en 30 minutes à Paris). 5) Prévenez votre assurance dans les 5 jours pour la déclaration de sinistre.",
  },
];
