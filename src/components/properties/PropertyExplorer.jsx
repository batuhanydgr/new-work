import Container from "@/components/ui/Container";
import SearchForm from "@/components/properties/SearchForm";
import PropertyCard from "@/components/properties/PropertyCard";
import { filterProperties, normalizeQuery } from "@/lib/filters";
import { properties } from "@/data/properties";

export default async function PropertyExplorer({ searchParams }) {
  const query = normalizeQuery(await searchParams);
  const results = filterProperties(properties, query);

  return (
    <section className="bg-paper py-12 md:py-16">
      <Container>
        <SearchForm
          key={JSON.stringify(query)}
          variant="bar"
          allowAll
          buttonLabel="Filtrele"
          initialValues={query}
        />

        <p className="mt-8 text-sm tracking-wide text-stone">
          {results.length} ilan listeleniyor
        </p>

        {results.length === 0 ? (
          <div className="mt-8 border border-mist bg-cream px-6 py-16 text-center">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Bu kriterlere uygun ilan bulunamadı
            </h2>
            <p className="mx-auto mt-3 max-w-md text-stone">
              Fiyat aralığını veya gayrimenkul tipini genişleterek portföyün tamamına göz
              atabilirsiniz.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {results.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
