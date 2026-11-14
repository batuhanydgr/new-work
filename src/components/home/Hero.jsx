import Image from "next/image";
import Container from "@/components/ui/Container";
import SearchForm from "@/components/properties/SearchForm";
import { photo } from "@/lib/images";

const heroImage = photo("1600585154340-be6161a56a0c", 2200);

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-ink">
      <Image
        src={heroImage}
        alt="Havuzlu, geniş saçaklı modern bir villa"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <Container className="relative z-10 w-full pt-16 pb-8 md:pb-12">
        <p className="text-[11px] uppercase tracking-[0.34em] text-bronze">
          Seçkin portföy · 2009’dan beri
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-[2.6rem] leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
          Hayalinizdeki Yaşam Alanını Keşfedin
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
          İstanbul’dan Ege kıyılarına, özenle seçilmiş satılık ve kiralık konutlar. Velora,
          yaşam alanını bir adres kadar bir his olarak ele alır.
        </p>
        <div className="mt-8 md:mt-10">
          <SearchForm />
        </div>
      </Container>
    </section>
  );
}
