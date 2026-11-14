import { stats } from "@/data/site";

export default function Stats() {
  return (
    <dl className="grid grid-cols-2 gap-px bg-mist sm:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="bg-cream px-5 py-6">
          <dt className="text-[11px] uppercase tracking-[0.18em] text-stone">{item.label}</dt>
          <dd className="mt-2 font-display text-4xl text-ink md:text-5xl">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
