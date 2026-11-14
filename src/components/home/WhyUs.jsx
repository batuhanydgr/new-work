import { Building2, Compass, ShieldCheck, Timer } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Compass,
    title: "Profesyonel danışmanlık",
    text: "Keşiften tapuya kadar aynı danışman yanınızda kalır. Liste uzamaz, karar netleşir.",
  },
  {
    icon: Building2,
    title: "Geniş portföy",
    text: "Daireden arsaya, şehir içinden kıyıya uzanan, tek tek seçilmiş bir seçki.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilir hizmet",
    text: "Fiyat, aidat ve imar notu baştan konuşulur. Sürpriz, sürecin parçası değildir.",
  },
  {
    icon: Timer,
    title: "Hızlı süreç yönetimi",
    text: "Randevu, ekspertiz ve sözleşme aynı haftanın içinde toplanabilir.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Yaklaşım"
          title="Neden biz?"
          description="Velora bir ilan panosu değil. Az sayıda işi, dikkatle yürüten bir ev."
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="lg:border-l lg:border-white/10 lg:px-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <div className="flex items-center justify-between">
                  <Icon size={22} strokeWidth={1.5} className="text-bronze" />
                  <span className="font-display text-3xl text-bronze/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
