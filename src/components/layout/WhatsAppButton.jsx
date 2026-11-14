import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl(contactInfo.whatsapp, "Merhaba, Velora Gayrimenkul hakkında bilgi almak istiyorum.")}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp üzerinden iletişime geçin"
      className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
