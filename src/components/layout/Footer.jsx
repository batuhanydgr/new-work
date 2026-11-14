import Link from "next/link";
import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  Phone,
  UsersRound,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import { contactInfo, navLinks } from "@/data/site";

const social = [
  { label: "Instagram", href: "https://instagram.com", icon: Camera },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: BriefcaseBusiness },
  { label: "Facebook", href: "https://facebook.com", icon: UsersRound },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/75">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Velora, İstanbul, Ege ve Akdeniz’de seçilmiş konutlar üzerine çalışan bağımsız bir
            gayrimenkul evidir. Portföyü ilan sayısına göre değil, yaşam kalitesine göre kurar.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-[11px] uppercase tracking-[0.28em] text-bronze">Keşfet</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-[11px] uppercase tracking-[0.28em] text-bronze">Kurumsal</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/about" className="transition-colors hover:text-cream">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/about#danismanlar" className="transition-colors hover:text-cream">
                Danışmanlarımız
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-cream">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h2 className="text-[11px] uppercase tracking-[0.28em] text-bronze">İletişim</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-bronze" />
              <span>
                {contactInfo.address}
                <br />
                {contactInfo.district}
              </span>
            </li>
            <li>
              <a href={contactInfo.phoneHref} className="inline-flex items-center gap-3 hover:text-cream">
                <Phone size={16} strokeWidth={1.5} className="text-bronze" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a href={contactInfo.emailHref} className="inline-flex items-center gap-3 hover:text-cream">
                <Mail size={16} strokeWidth={1.5} className="text-bronze" />
                {contactInfo.email}
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex gap-3">
            {social.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center border border-white/15 text-cream transition-colors hover:border-bronze hover:text-bronze"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs tracking-wide text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velora Gayrimenkul. Tüm hakları saklıdır.</p>
          <p>{contactInfo.hours}</p>
        </Container>
      </div>
    </footer>
  );
}
