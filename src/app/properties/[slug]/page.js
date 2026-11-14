import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Bath, BedDouble, Mail, MapPin, Maximize, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PropertyGallery from "@/components/properties/PropertyGallery";
import PropertyCard from "@/components/properties/PropertyCard";
import {
  getPropertyBySlug,
  getRelatedProperties,
  properties,
} from "@/data/properties";
import { getConsultant } from "@/data/consultants";
import {
  bathLabel,
  formatArea,
  formatPrice,
  getStatusLabel,
  getTypeLabel,
  roomLabel,
} from "@/lib/format";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return { title: "İlan bulunamadı" };
  }

  return {
    title: property.title,
    description: property.summary,
    openGraph: {
      title: property.title,
      description: property.summary,
      images: [{ url: property.images[0] }],
    },
  };
}

export default async function PropertyDetailPage({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const agent = getConsultant(property.agentId);
  const related = getRelatedProperties(property);
  const facts = [
    { icon: Maximize, label: "Alan", value: formatArea(property.area) },
    { icon: BedDouble, label: "Oda", value: roomLabel(property) },
    { icon: Bath, label: "Banyo", value: bathLabel(property) },
    { icon: MapPin, label: "Konum", value: `${property.district}, ${property.city}` },
  ];

  return (
    <main className="bg-paper pb-20">
      <Container className="pt-8 md:pt-12">
        <nav aria-label="Sayfa yolu" className="text-sm text-stone">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-ink">
                Ana Sayfa
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/properties" className="hover:text-ink">
                İlanlar
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">{property.title}</li>
          </ol>
        </nav>

        <div className="mt-6 flex flex-col gap-4 border-b border-mist pb-8 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">
              {getStatusLabel(property.status)} · {getTypeLabel(property.type)}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              {property.title}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-stone">
              <MapPin size={16} strokeWidth={1.5} className="text-bronze" />
              {property.district}, {property.city}
            </p>
          </div>
          <p className="font-display text-4xl text-ink md:text-5xl">
            {formatPrice(property.price, property.status)}
          </p>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <PropertyGallery images={property.images} title={property.title} />

          <aside className="border border-mist bg-cream p-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-mist">
                <Image src={agent.image} alt="" fill sizes="64px" className="object-cover object-top" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-bronze">{agent.role}</p>
                <h2 className="font-display text-2xl text-ink">{agent.name}</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone">{agent.bio}</p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`tel:${agent.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-bronze">
                <Phone size={15} strokeWidth={1.5} className="text-bronze" />
                {agent.phone}
              </a>
              <a href={`mailto:${agent.email}`} className="flex items-center gap-2 break-all hover:text-bronze">
                <Mail size={15} strokeWidth={1.5} className="shrink-0 text-bronze" />
                {agent.email}
              </a>
            </div>
            <Button href={`/contact?ilan=${property.slug}`} className="mt-6 w-full">
              Bu ilan için yazın
            </Button>
          </aside>
        </div>

        <dl className="mt-8 grid grid-cols-2 border border-mist bg-mist lg:grid-cols-4">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="bg-cream px-4 py-5 sm:px-6">
                <dt className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-stone">
                  <Icon size={14} strokeWidth={1.5} className="text-bronze" />
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display text-2xl text-ink">{fact.value}</dd>
              </div>
            );
          })}
        </dl>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <h2 className="font-display text-3xl text-ink">İlan açıklaması</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-stone md:text-lg">
              {property.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink">Özellikler</h2>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {property.features.map((feature) => (
                <li key={feature} className="border-b border-mist py-2 text-sm text-ink">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-12 font-display text-3xl text-ink">Teknik bilgiler</h2>
        <dl className="mt-5 divide-y divide-mist border-y border-mist">
          {property.specs.map(([label, value]) => (
            <div key={label} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-stone">{label}</dt>
              <dd className="text-ink">{value}</dd>
            </div>
          ))}
          {property.year ? (
            <div className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-stone">Yapım yılı</dt>
              <dd className="text-ink">{property.year}</dd>
            </div>
          ) : null}
        </dl>
      </Container>

      {related.length > 0 ? (
        <section className="mt-20">
          <Container>
            <h2 className="font-display text-4xl text-ink">Benzer ilanlar</h2>
            <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <PropertyCard key={item.slug} property={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
