import { company } from "@/data/company";

export const phoneHref = `tel:${company.phone.raw}`;
export const whatsappHref = `https://wa.me/${company.whatsapp.number}`;
export const whatsappHrefWithText = (text: string) =>
  `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(text)}`;
export const emailHref = `mailto:${company.email}`;
