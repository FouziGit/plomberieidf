export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  priceFrom: number;
  image: string;
  features: string[];
};

export type ServiceCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  colorHex: string;
  image: string;
  services: ServiceItem[];
};

export type Zone = {
  name: string;
  code: string;
  cities: string[];
  geo?: { lat: number; lng: number };
  responseTime?: string;
};

export type PricingTier = {
  id: string;
  title: string;
  subtitle: string;
  priceFrom: number;
  priceLabel: string;
  highlighted: boolean;
  features: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};
