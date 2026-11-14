import { ArrowUpRight, Building2, Compass, ShieldCheck, Sparkles, Timer } from "lucide-react";
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
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-ink-soft via-ink to-ink py-20 text-cream md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-8rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-bronze/10 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow="Yaklaşım"
            title="Güven, iyi bir başlangıçtır."
            description="Velora bir ilan panosu değil. Az sayıda işi, dikkatle yürüten bir ev."
          />
          <div className="flex max-w-sm items-center gap-4 border-l border-bronze/50 pl-4 text-sm leading-relaxed text-cream/70">
            <Sparkles size={20} strokeWidth={1.5} className="shrink-0 text-bronze" />
            <p>Her adımda aynı danışman, net bilgi ve özenli takip.</p>
          </div>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 xl:mt-16 xl:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <article className="relative flex h-full min-h-64 flex-col overflow-hidden bg-white/[0.035] p-6 sm:p-7">
                  <div className="flex h-16 items-center justify-between">
                    <span aria-hidden="true" className="text-bronze">
                      <Icon size={34} strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-6xl leading-none text-bronze/65">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-[1.7rem] leading-tight text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{item.text}</p>
                </article>
              </li>
            );
          })}
        </ol>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-cream/60">Size uygun evi, doğru danışmanla birlikte bulalım.</p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-bronze transition-colors hover:text-cream"
          >
            Bizimle tanışın
            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
