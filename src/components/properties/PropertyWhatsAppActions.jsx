"use client";

import { Share2 } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function PropertyWhatsAppActions({
  listingCode,
  title,
  consultantName,
  consultantPhone,
  slug,
}) {
  const message = `Merhaba ${consultantName}, "${title}" ilanı (${listingCode}) hakkında bilgi almak istiyorum.`;

  function shareListing() {
    const listingUrl = new URL(`/properties/${slug}`, window.location.origin);
    const shareMessage = `${title} · İlan kodu: ${listingCode}\n${listingUrl}`;
    window.open(getWhatsAppUrl("", shareMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mt-6 grid gap-3">
      <a
        href={getWhatsAppUrl(consultantPhone, message)}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title} ilanı için ${consultantName} danışmanına WhatsApp'tan bilgi sorun`}
        className="inline-flex items-center justify-center gap-2 bg-[#25D366] px-5 py-3.5 text-center text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#1fb95a]"
      >
        Bu ilan hakkında bilgi al
      </a>
      <button
        type="button"
        onClick={shareListing}
        className="inline-flex items-center justify-center gap-2 border border-mist px-5 py-3 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:border-bronze hover:text-bronze"
      >
        <Share2 size={16} strokeWidth={1.5} />
        WhatsApp’ta paylaş
      </button>
    </div>
  );
}
