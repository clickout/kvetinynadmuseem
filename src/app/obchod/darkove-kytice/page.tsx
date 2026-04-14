import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { AnimateIn } from "@/components/AnimateIn";
import { DARKOVE_KYTICE } from "@/lib/products";

export const metadata: Metadata = {
  title: "Dárkové kytice Praha | Rozvoz do 3 hodin",
  description: "Čerstvé dárkové kytice z Prahy Vinohrad. Narozeninové, romantické i sezónní bouquety s rozvozem po Praze. Objednejte online.",
};

export default function DarkoveKyticePage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* ── Hero banner kategorie ─────────────────────────── */}
        <div className="relative pt-16 md:pt-20 bg-gradient-to-br from-[#2D5016] to-[#1e3610] text-white overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 opacity-10">
            {/* Dekorativní pattern */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-6xl select-none"
                style={{
                  left: `${(i * 17) % 100}%`,
                  top: `${(i * 23) % 100}%`,
                  transform: `rotate(${i * 18}deg)`,
                  opacity: 0.3,
                }}
                aria-hidden="true"
              >
                🌸
              </div>
            ))}
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            {/* Drobečková navigace */}
            <nav aria-label="Drobečková navigace" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Domů</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/obchod" className="hover:text-white transition-colors">Obchod</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Dárkové kytice</li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <p className="text-[#e8c96a] text-sm font-semibold uppercase tracking-widest mb-3">💐 Dárkové kytice</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Kytice, která řekne <span className="italic">vše</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                Čerstvé kytice sestavované každý den z nejlepšího dostupného květu.
                Rozvoz po celé Praze do 3 hodin, osobní odběr kdykoliv.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {["🚚 Rozvoz do 3 hodin", "✂️ Čerstvé každý den", "🎁 Krásné balení zdarma"].map((item) => (
                  <span key={item} className="bg-white/15 border border-white/25 px-3 py-1.5 rounded-full">{item}</span>
                ))}
              </div>
            </div>
          </div>
          {/* Vlna */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
              <path d="M0 48V24C360 0 720 48 1080 24C1260 12 1380 36 1440 24V48H0Z" fill="#F7F5F0" />
            </svg>
          </div>
        </div>

        {/* ── Grid produktů ─────────────────────────────────── */}
        <section className="bg-[#F7F5F0] py-12 md:py-16" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 id="products-heading" className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D5016]">
                {DARKOVE_KYTICE.length} kytic k výběru
              </h2>
              <p className="text-gray-500 text-sm">
                Nenašli jste? <Link href="/kontakt" className="text-[#2D5016] font-medium underline underline-offset-2">Napište nám</Link>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {DARKOVE_KYTICE.map((product, i) => (
                <AnimateIn key={product.id} animation="fade-up" delay={i * 80} duration={600}>
                  <ProductCard product={product} />
                </AnimateIn>
              ))}
            </div>

            {/* CTA – objednávka na zakázku */}
            <AnimateIn animation="fade-up" delay={200}>
              <div className="mt-12 rounded-2xl bg-[#2D5016] text-white p-8 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2">Máte specifické přání?</p>
                <p className="text-white/75 mb-5 max-w-lg mx-auto">
                  Adéla vytvoří kytici přesně podle Vás – oblíbené barvy, sezónní i exotické druhy, jakákoliv příležitost.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2D5016] font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Objednat na zakázku
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
