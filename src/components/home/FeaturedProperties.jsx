import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/properties/PropertyCard";
import { getFeaturedProperties } from "@/data/properties";

export default function FeaturedProperties() {
  const featured = getFeaturedProperties();
  const [lead, ...rest] = featured;

  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portföy"
          title="Öne çıkan ilanlar"
          description="Bu sezon öne aldıklarımız: Boğaz hattı, kıyı villaları ve şehir içinde ışığı doğru daireler."
          action={
            <Link
              href="/properties"
              className="text-[12px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-bronze"
            >
              Tüm ilanlar
            </Link>
          }
        />

        <div className="mt-12 grid gap-x-8 gap-y-14 lg:grid-cols-2">
          {lead ? <PropertyCard property={lead} priority large /> : null}
          <div className="grid gap-14">
            {rest.slice(0, 2).map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {rest.slice(2).map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
}
