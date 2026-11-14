import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import Consultants from "@/components/home/Consultants";
import Cta from "@/components/home/Cta";
import { photo } from "@/lib/images";

export const metadata = {
  title: "Hakkımızda",
  description:
    "Velora Gayrimenkul, 2009’dan bu yana seçilmiş konutlar üzerine çalışan bağımsız bir emlak evidir.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kurumsal"
        title="Hakkımızda"
        description="Az sayıda iş, uzun soluklu ilişki. Velora portföyünü vitrine göre değil, içinde yaşanacak hissiyatına göre kurar."
        image={photo("1487958449943-2429e8be8625", 2000)}
      />

      <section className="bg-paper py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-bronze">2009’dan beri</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              Bir ilan panosu değil, bir ev
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone md:text-lg">
              <p>
                Velora, Etiler’de küçük bir ofiste başladı. İlk yıllar yalnızca Boğaz hattı ve
                birkaç yazlık villadan ibaretti. Bugün portföy Ege ve Akdeniz’e uzanır; çalışma
                biçimi değişmedi.
              </p>
              <p>
                Her ilan yerinde görülür, fiyat konuşulmadan önce aidat, imar ve kullanım notu
                masaya gelir. Alıcı, kiracı ve mal sahibi aynı sakinlikte bilgilendirilir.
              </p>
              <p>
                Danışmanlarımız coğrafyaya göre ayrılır. Şehir içi konut, kıyı villası ve ticari
                gayrimenkul aynı kişiye yüklenmez. İlk görüşmede sizi doğru masaya alırız.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-mist">
            <Image
              src={photo("1600210492486-724fe5c67fb0", 1400)}
              alt="Aydınlık bir salonda keten koltuklar ve geniş pencereler"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <Stats />
        </Container>
      </section>
      <WhyUs />
      <Consultants />
      <Cta />
    </main>
  );
}
