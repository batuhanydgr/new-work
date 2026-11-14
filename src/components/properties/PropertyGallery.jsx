"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/utils/cn";

export default function PropertyGallery({ images, title }) {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const openerRef = useRef(null);

  function showImage(index, opener) {
    setActive(index);
    openerRef.current = opener;
    setIsOpen(true);
  }

  function changeImage(direction) {
    setActive((current) => (current + direction + images.length) % images.length);
  }

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowRight") {
        setActive((current) => (current + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setActive((current) => (current - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [isOpen, images.length]);

  return (
    <div>
      <button
        type="button"
        onClick={(event) => showImage(active, event.currentTarget)}
        aria-label={`${title} görselini tam ekran aç`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-mist text-left sm:aspect-[16/10]"
      >
        <Image
          src={images[active]}
          alt={`${title} görseli ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 68vw"
          className="object-cover"
        />
      </button>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={(event) => showImage(index, event.currentTarget)}
            aria-label={`${title} görsel ${index + 1} - tam ekran aç`}
            className={cn(
              "relative aspect-[4/3] overflow-hidden bg-mist",
              active === index ? "ring-2 ring-bronze ring-offset-2 ring-offset-paper" : "opacity-80",
            )}
          >
            <Image src={src} alt="" fill sizes="180px" className="object-cover" />
          </button>
        ))}
      </div>
      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} fotoğraf galerisi`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Galeriyi kapat"
            className="absolute top-4 right-4 z-10 grid h-11 w-11 place-items-center text-cream hover:text-bronze sm:top-6 sm:right-6"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => changeImage(-1)}
            aria-label="Önceki fotoğraf"
            className="absolute left-2 z-10 grid h-12 w-12 place-items-center text-cream hover:text-bronze sm:left-6"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
          <figure className="flex h-full w-full max-w-6xl flex-col items-center justify-center">
            <div className="relative min-h-0 w-full flex-1">
              <Image
                src={images[active]}
                alt={`${title} görseli ${active + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="pt-4 text-sm text-cream/75">
              {active + 1} / {images.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={() => changeImage(1)}
            aria-label="Sonraki fotoğraf"
            className="absolute right-2 z-10 grid h-12 w-12 place-items-center text-cream hover:text-bronze sm:right-6"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
