import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { AnimateIn } from "@/components/AnimateIn";
import { POKOJOVE_ROSTLINY } from "@/lib/products";

export const metadata: Metadata = {
  title: "Pokojové rostliny Praha Vinohrady | Orchideje, Monstery a další",
  description: "Výběr pokojových rostlin – orchideje, monstery, sukulenty a vzácné druhy. Skvělý dárek i výzdoba domova. Osobní odběr Praha Vinohrady.",
};

export default function PokojoveRostlinyPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* Hero */}
        <div className="relative pt-16 md:pt-20 bg-gradient-to-br from-[#1e3610] via-[#2D5016] to-[#3d6b22] text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <nav aria-label="Drobečková navigace" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Domů</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/obchod" className="hover:text-white transition-colors">Obchod</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Pokojové rostliny</li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-3">🌿 Pokojové rostliny</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Zeleň, která <span className="italic text-green-300">oživí</span> váš domov
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                Orchideje, monstery, sukulenty i vzácné druhy. Každá rostlina
                pečlivě vybraná a připravená jako krásný dárek nebo výzdoba interiéru.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {["🌱 Zdravé a silné rostliny", "🎁 Darování v dárkovém balení", "💡 Poradenství o péči"].map((item) => (
                  <span key={item} className="bg-white/15 border border-white/25 px-3 py-1.5 rounded-full">{item}</span>
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

        {/* Péče tip banner */}
        <div className="bg-green-50 border-b border-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
            <span aria-hidden="true" className="text-green-700">🌿</span>
            <p className="text-sm text-green-800">
              Ke každé rostlině dostanete kartičku s pečovatelskými tipy. Máte otázky? Adéla poradí.
            </p>
          </div>
        </div>

        {/* Grid */}
        <section className="bg-[#F7F5F0] py-12 md:py-16" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="products-heading" className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D5016] mb-8">
              {POKOJOVE_ROSTLINY.length} druhů v nabídce
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {POKOJOVE_ROSTLINY.map((product, i) => (
                <AnimateIn key={product.id} animation="fade-up" delay={i * 80} duration={600}>
                  <ProductCard product={product} />
                </AnimateIn>
              ))}
            </div>
            <AnimateIn animation="fade-up" delay={200}>
              <div className="mt-12 rounded-2xl bg-[#2D5016] text-white p-8 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2">Hledáte konkrétní druh?</p>
                <p className="text-white/75 mb-5 max-w-lg mx-auto">
                  Pokud v nabídce nenajdete, co hledáte, napište nám – pokusíme se rostlinu sehnat.
                </p>
                <Link href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2D5016] font-semibold rounded-full hover:bg-gray-100 transition-colors">
                  Zeptat se Adély
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
