import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { consultants } from "@/data/consultants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Consultants() {
  return (
    <section id="danismanlar" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ekip"
          title="Danışmanlarımız"
          description="Her danışmanın bir coğrafyası ve bir iş tipi vardır. İlk görüşmede sizi doğru kişiyle eşleştiririz."
        />
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {consultants.map((person) => (
            <li key={person.id} className="min-w-0">
              <article>
                <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-bronze">{person.role}</p>
                <h3 className="mt-2 font-display text-3xl text-ink">{person.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{person.bio}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-ink transition-colors hover:text-bronze"
                  >
                    <Phone size={15} strokeWidth={1.5} className="text-bronze" />
                    {person.phone}
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2 break-all text-ink transition-colors hover:text-bronze"
                  >
                    <Mail size={15} strokeWidth={1.5} className="shrink-0 text-bronze" />
                    {person.email}
                  </a>
                  <a
                    href={getWhatsAppUrl(person.whatsapp, `Merhaba ${person.name}, Velora'daki ilanlar hakkında bilgi almak istiyorum.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-ink transition-colors hover:text-bronze"
                  >
                    <MessageCircle size={15} strokeWidth={1.5} className="text-bronze" />
                    WhatsApp
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
