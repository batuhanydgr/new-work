import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bath, BedDouble, MapPin, Maximize } from "lucide-react";
import { bathLabel, formatArea, formatPrice, getStatusLabel, roomLabel } from "@/lib/format";
import { cn } from "@/utils/cn";

export default function PropertyCard({ property, priority = false, large = false }) {
  const facts = [
    { icon: Maximize, label: formatArea(property.area) },
    { icon: BedDouble, label: roomLabel(property) },
    { icon: Bath, label: bathLabel(property) },
  ];

  return (
    <article className="group min-w-0">
      <Link href={`/properties/${property.slug}`} className="block">
        <div
          className={cn(
            "relative overflow-hidden bg-mist",
            large ? "aspect-[4/5] sm:aspect-[16/11]" : "aspect-[4/3]",
          )}
        >
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            priority={priority}
            sizes={large ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span
            className={cn(
              "absolute top-4 left-4 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em]",
              property.status === "rent" ? "bg-cream text-ink" : "bg-bronze text-ink",
            )}
          >
            {getStatusLabel(property.status)}
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent px-5 pt-16 pb-5">
            <p className="font-display text-3xl leading-none text-cream md:text-4xl">
              {formatPrice(property.price, property.status)}
            </p>
          </div>
        </div>

        <div className="pt-5">
          <h3 className="font-display text-2xl leading-tight text-ink md:text-[1.7rem]">
            {property.title}
          </h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-stone">
            <MapPin size={15} strokeWidth={1.5} className="shrink-0 text-bronze" />
            {property.district}, {property.city}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-mist pt-4 text-sm text-stone">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <li key={fact.label} className="inline-flex items-center gap-2">
                  <Icon size={15} strokeWidth={1.5} className="text-bronze" />
                  <span>{fact.label}</span>
                </li>
              );
            })}
          </ul>
          <span className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink">
            Detayı incele
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
