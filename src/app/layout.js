import { Cormorant_Garamond, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Velora Gayrimenkul | Seçkin Yaşam Alanları",
    template: "%s | Velora Gayrimenkul",
  },
  description:
    "Velora Gayrimenkul; İstanbul, Ege ve Akdeniz’de satılık ve kiralık villa, daire, rezidans, ticari gayrimenkul ve arsa portföyü sunar.",
};

export const viewport = {
  themeColor: "#171614",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-cream focus:px-4 focus:py-2"
        >
          İçeriğe geç
        </a>
        <Header />
        <div id="icerik" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
