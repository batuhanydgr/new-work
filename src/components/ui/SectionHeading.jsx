import { cn } from "@/utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action = null,
  tone = "light",
  align = "left",
}) {
  const titleColor = tone === "dark" ? "text-cream" : "text-ink";
  const bodyColor = tone === "dark" ? "text-cream/70" : "text-stone";
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        centered && "md:flex-col md:items-center md:text-center",
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.32em] text-bronze">{eyebrow}</p>
        ) : null}
        <h2 className={cn("mt-3 font-display text-4xl leading-[1.05] md:text-5xl", titleColor)}>
          {title}
        </h2>
        {description ? (
          <p className={cn("mt-4 text-base leading-relaxed md:text-lg", bodyColor)}>{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
