import { cn } from "@/utils/cn";

export function fieldClass(invalid = false) {
  return cn(
    "w-full min-w-0 border bg-cream px-4 py-3 text-base text-ink outline-none transition placeholder:text-stone/70 focus:border-bronze",
    invalid ? "border-red-800" : "border-mist",
  );
}

export const labelClass =
  "mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-stone";
