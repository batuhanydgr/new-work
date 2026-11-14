import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Koleksiyon"
          title="Gayrimenkul kategorileri"
          description="Her başlık, portföyde ayrı bir bakış açısı. İlgilendiğiniz tipe geçip ilanları süzebilirsiniz."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.value}
              href={`/properties?type=${category.value}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-ink sm:aspect-[4/5]"
            >
              <Image
                src={category.image}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/10" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="text-[11px] tracking-[0.28em] text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl text-cream sm:text-3xl">{category.label}</h3>
                <p className="mt-2 hidden text-sm leading-relaxed text-cream/75 sm:block">
                  {category.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
