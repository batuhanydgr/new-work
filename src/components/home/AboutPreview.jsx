import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Stats from "@/components/home/Stats";
import { photo } from "@/lib/images";

const aboutImage = photo("1600607687939-ce8a6c25118c", 1600);

export default function AboutPreview() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 hidden h-full w-full border border-bronze lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden bg-mist">
              <Image
                src={aboutImage}
                alt="Yüksek tavanlı, taş ve ahşap detaylı bir salon"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-bronze">Hakkımızda</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              Az ilan, net süreç, uzun soluklu ilişki
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone md:text-lg">
              <p>
                Velora, 2009’dan bu yana İstanbul, Ege ve Akdeniz’de seçilmiş konutlar üzerine
                çalışan bağımsız bir gayrimenkul evidir. Portföyümüzü vitrine göre değil, içinde
                yaşanacak hissiyatına göre kurarız.
              </p>
              <p>
                Danışmanlarımız alıcı, kiracı ve mal sahibiyle aynı masada, acele ettirmeden
                durur. Keşif, fiyat ve sözleşme aynı sakin tempoda ilerler.
              </p>
            </div>

            <div className="mt-10">
              <Stats />
            </div>

            <Button href="/about" variant="outline" className="mt-8 text-ink">
              Kurumsal hikaye
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
