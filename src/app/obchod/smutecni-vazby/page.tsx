import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { AnimateIn } from "@/components/AnimateIn";
import { SMUTECNI_VAZBY } from "@/lib/products";

export const metadata: Metadata = {
  title: "Smuteční vazby Praha | Věnce a pietní aranžmá",
  description: "Smuteční věnce, kytice a pietní aranžmá. Diskrétní a profesionální servis. Rozvoz na pohřební ústavy v Praze. Adéla ze Květiny nad Museem.",
};

export default function SmutecniVazbyPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* Hero */}
        <div className="relative pt-16 md:pt-20 bg-gradient-to-br from-gray-700 to-gray-900 text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <nav aria-label="Drobečková navigace" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Domů</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/obchod" className="hover:text-white transition-colors">Obchod</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Smuteční vazby</li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <p className="text-gray-300 text-sm font-semibold uppercase tracking-widest mb-3">🕊️ Smuteční vazby</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Důstojná rozloučení <span className="italic">s úctou</span>
              </h1>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
                Věnce, pietní kytice a aranžmá pro rozloučení. Pracujeme diskrétně
                a s osobním přístupem. Rozvoz přímo na pohřební ústav nebo místo konání.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {["🤍 Diskrétní servis", "🚚 Rozvoz na pohřební ústavy", "📞 Telefonická objednávka"].map((item) => (
                  <span key={item} className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
              <path d="M0 48V24C360 0 720 48 1080 24C1260 12 1380 36 1440 24V48H0Z" fill="#F7F5F0" />
            </svg>
          </div>
        </div>

        {/* Upozornění – rychlá objednávka */}
        <div className="bg-amber-50 border-b border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p className="text-sm text-amber-800">
              Potřebujete urychlenou objednávku? Zavolejte nám nebo napište – vyřídíme přednostně.
            </p>
          </div>
        </div>

        {/* Grid */}
        <section className="bg-[#F7F5F0] py-12 md:py-16" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="products-heading" className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D5016] mb-8">
              Smuteční vazby
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {SMUTECNI_VAZBY.map((product, i) => (
                <AnimateIn key={product.id} animation="fade-up" delay={i * 80} duration={600}>
                  <ProductCard product={product} />
                </AnimateIn>
              ))}
            </div>
            <AnimateIn animation="fade-up" delay={200}>
              <div className="mt-12 rounded-2xl bg-white border border-gray-200 p-8 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2D5016] mb-2">Individuální přání</p>
                <p className="text-gray-600 mb-5 max-w-lg mx-auto text-sm">
                  Chcete specifické barvy, konkrétní druhy květin nebo napis na stuze? Rádi splníme každé přání.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+420XXXXXXXXX" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D5016] text-white font-semibold rounded-full hover:bg-[#3a6820] transition-colors">
                    Zavolat nám
                  </a>
                  <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#2D5016] text-[#2D5016] font-semibold rounded-full hover:bg-[#F7F5F0] transition-colors">
                    Napsat zprávu
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
