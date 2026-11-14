import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo } from "@/data/site";
import { getPropertyBySlug } from "@/data/properties";
import { photo } from "@/lib/images";

export const metadata = {
  title: "İletişim",
  description:
    "Velora Gayrimenkul ile iletişime geçin. Etiler ofisi, telefon ve mesaj formu.",
};

export default function ContactPage({ searchParams }) {
  return (
    <main>
      <PageHero
        eyebrow="Ofis"
        title="İletişim"
        description="Kısa bir not yeterli. Uygun danışman, çalışma saatleri içinde size döner."
        image={photo("1600210492493-0946911123ea", 2000)}
      />
      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl text-ink">Etiler ofisi</h2>
            <p className="mt-4 text-stone leading-relaxed">
              Randevusuz da uğrayabilirsiniz. Keşif günlerinde ekip sahada olabilir; önceden not
              bırakmanız görüşmeyi hızlandırır.
            </p>
            <ul className="mt-8 space-y-5 text-sm text-ink">
              <li className="flex gap-3">
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-bronze" />
                <span>
                  {contactInfo.address}
                  <br />
                  {contactInfo.district}
                </span>
              </li>
              <li>
                <a href={contactInfo.phoneHref} className="inline-flex items-center gap-3 hover:text-bronze">
                  <Phone size={18} strokeWidth={1.5} className="text-bronze" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={contactInfo.emailHref} className="inline-flex items-center gap-3 hover:text-bronze">
                  <Mail size={18} strokeWidth={1.5} className="text-bronze" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} strokeWidth={1.5} className="text-bronze" />
                {contactInfo.hours}
              </li>
            </ul>
          </div>
          <Suspense fallback={<ContactForm />}>
            <ContactPanel searchParams={searchParams} />
          </Suspense>
        </Container>
      </section>
    </main>
  );
}

async function ContactPanel({ searchParams }) {
  const query = await searchParams;
  const slug = Array.isArray(query.ilan) ? query.ilan[0] : query.ilan || "";
  const property = slug ? getPropertyBySlug(slug) : null;

  return <ContactForm propertyTitle={property?.title || ""} />;
}
