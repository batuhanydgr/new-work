"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data/site";
import { useLockBody } from "@/hooks/useLockBody";
import { cn } from "@/utils/cn";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/about#")) return false;
  const path = href.split("#")[0];
  return pathname === path || pathname.startsWith(`${path}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState(null);
  const open = menuPath === pathname;
  useLockBody(open);

  useEffect(() => {
    if (!open) return undefined;

    function onKey(event) {
      if (event.key === "Escape") setMenuPath(null);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-cream">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[12px] uppercase tracking-[0.18em] text-cream/75 transition-colors hover:text-bronze",
                isActive(pathname, link.href) && "text-bronze",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-white/15 text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() =>
              setMenuPath((current) => (current === pathname ? null : pathname))
            }
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobil-menu"
          className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-ink px-6 py-8 lg:hidden"
          aria-label="Mobil menü"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border-b border-white/10 py-4 font-display text-4xl text-cream"
                  onClick={() => setMenuPath(null)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
