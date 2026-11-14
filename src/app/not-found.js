import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="bg-paper py-24">
      <Container>
        <div className="max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.32em] text-bronze">404</p>
        <h1 className="mt-3 font-display text-5xl text-ink">Bu sayfa portföyde yok</h1>
        <p className="mt-4 text-stone">
          Aradığınız adres taşınmış veya hiç açılmamış olabilir. İlanlara dönüp aramaya oradan
          devam edebilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Ana sayfa</Button>
          <Link
            href="/properties"
            className="inline-flex items-center px-6 py-3.5 text-[12px] uppercase tracking-[0.18em] text-ink"
          >
            İlanlar
          </Link>
        </div>
        </div>
      </Container>
    </main>
  );
}
