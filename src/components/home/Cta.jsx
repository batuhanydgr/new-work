import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { photo } from "@/lib/images";

const image = photo("1613490493576-7fde63acd811", 2000);

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/50" />
      <Container className="relative z-10">
        <p className="text-[11px] uppercase tracking-[0.32em] text-bronze">Bir sonraki adım</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-cream md:text-6xl">
          Hayalinizdeki Gayrimenkul Sizi Bekliyor
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
          Kısa bir not bırakın. Uygun danışman, portföyden size göre bir seçkiyle geri dönsün.
        </p>
        <Button href="/contact" variant="bronze" className="mt-8">
          Bizimle İletişime Geçin
        </Button>
      </Container>
    </section>
  );
}
