"use client";

import { Phone, MessageCircle } from "lucide-react";
import { phoneHref, whatsappHref } from "@/lib/contact";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={phoneHref}
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-white bg-accent-primary hover:bg-accent-primary-dark transition-colors"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-white bg-accent-green hover:bg-accent-green/90 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
