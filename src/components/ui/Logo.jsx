import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Logo({ tone = "light", className = "" }) {
  const text = tone === "light" ? "text-cream" : "text-ink";

  return (
    <Link href="/" className={cn("flex items-center gap-3", text, className)} aria-label="Velora ana sayfa">
      <span className="grid h-9 w-9 shrink-0 place-items-center border border-bronze text-[13px] text-bronze">
        V
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] tracking-[0.28em]">VELORA</span>
        <span className="mt-1 text-[9px] tracking-[0.32em] text-bronze">GAYRİMENKUL</span>
      </span>
    </Link>
  );
}
