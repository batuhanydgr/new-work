import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site";
import { cn } from "@/utils/cn";

export default function Testimonials() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Referans"
          title="Müşteri yorumları"
          description="Anlatılan ev değil, sürecin kendisi. Üç kısa not, son yıllardan."
        />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => {
            const featured = index === 1;
            return (
              <li key={item.id}>
                <figure
                  className={cn(
                    "flex h-full flex-col justify-between p-7 md:p-8",
                    featured ? "bg-ink text-cream" : "bg-cream text-ink",
                  )}
                >
                  <blockquote>
                    <p className="font-display text-[1.7rem] leading-snug md:text-3xl">
                      “{item.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <p className="text-sm tracking-wide">{item.name}</p>
                    <p className={cn("mt-1 text-xs uppercase tracking-[0.16em]", featured ? "text-bronze" : "text-stone")}>
                      {item.role}
                    </p>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
