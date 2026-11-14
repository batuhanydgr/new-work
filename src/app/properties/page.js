import { Suspense } from "react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import PropertyExplorer from "@/components/properties/PropertyExplorer";
import { photo } from "@/lib/images";

export const metadata = {
  title: "İlanlar",
  description:
    "Satılık ve kiralık villa, daire, rezidans, müstakil ev, ticari gayrimenkul ve arsa ilanlarını şehir ve fiyata göre inceleyin.",
};

export default function PropertiesPage({ searchParams }) {
  return (
    <main>
      <PageHero
        eyebrow="Portföy"
        title="İlanlar"
        description="Satılık ve kiralık seçki. Tip, şehir ve fiyatla daraltın; her kart kendi sayfasına açılır."
        image={photo("1600596542815-ffad4c1539a9", 2000)}
      />
      <Suspense fallback={<ListingFallback />}>
        <PropertyExplorer searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

function ListingFallback() {
  return (
    <Container className="py-16">
      <div className="h-48 animate-pulse bg-mist" />
      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="aspect-[4/3] animate-pulse bg-mist" />
        ))}
      </div>
    </Container>
  );
}
