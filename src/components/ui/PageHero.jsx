import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative flex min-h-[320px] items-end overflow-hidden bg-ink pt-12 pb-14 md:min-h-[420px] md:pb-16">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" />
      <Container className="relative z-10">
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.32em] text-bronze">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] text-cream md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
