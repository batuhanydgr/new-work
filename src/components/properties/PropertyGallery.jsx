"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default function PropertyGallery({ images, title }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden bg-mist sm:aspect-[16/10]">
        <Image
          src={images[active]}
          alt={`${title} görseli ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 68vw"
          className="object-cover"
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`${title} görsel ${index + 1}`}
            aria-pressed={active === index}
            className={cn(
              "relative aspect-[4/3] overflow-hidden bg-mist",
              active === index ? "ring-2 ring-bronze ring-offset-2 ring-offset-paper" : "opacity-80",
            )}
          >
            <Image src={src} alt="" fill sizes="180px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
