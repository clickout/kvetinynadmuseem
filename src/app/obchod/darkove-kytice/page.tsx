import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { AnimateIn } from "@/components/AnimateIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DARKOVE_KYTICE } from "@/lib/products";

export const metadata: Metadata = {
  title: "Dárkové kytice | Květiny nad Museem",
  description:
    "Sezonní dárkové kytice z atelieru na Vinohradské 6. Vázané po jedné, rozvoz po Praze.",
};

export default function DarkoveKyticePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          number="02·1"
          eyebrow="Dárkové kytice"
          title="Kytice pro okamžik."
          subtitle="Sezonní kompozice vázané po jedné. Ze sezóny, ze zahrad a z ranního trhu."
        />

        <section
          aria-labelledby="products-heading"
          className="bg-ivory pb-24 md:pb-32"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <Breadcrumbs
                items={[
                  { href: "/", label: "Domů" },
                  { href: "/obchod", label: "Obchod" },
                  { label: "Dárkové kytice" },
                ]}
              />
              <h2
                id="products-heading"
                className="text-xs uppercase tracking-[0.3em] text-gold-deep"
              >
                {DARKOVE_KYTICE.length} kompozic
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
              {DARKOVE_KYTICE.map((product, i) => (
                <AnimateIn
                  key={product.id}
                  animation="fade-up"
                  delay={i * 80}
                  duration={700}
                >
                  <ProductCard product={product} index={i} />
                </AnimateIn>
              ))}
            </div>

            {/* CTA — zakázka */}
            <AnimateIn animation="fade-up" delay={200}>
              <div className="mt-24 bg-emerald-deep text-ivory p-10 md:p-16 text-center max-w-4xl mx-auto">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-5">
                  Na zakázku
                </p>
                <p className="font-display font-light text-2xl md:text-4xl text-ivory leading-[1.2] mb-8">
                  Nenašli jste? Vážeme i{" "}
                  <span className="italic text-gold-foil">podle představy</span>.
                </p>
                <p className="text-ivory/70 max-w-xl mx-auto mb-10 leading-relaxed">
                  Napište nám barvu, náladu nebo konkrétní druh. Ozveme se do následujícího dne
                  s návrhem a cenou.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-foil hover:text-ivory transition-colors group"
                >
                  Zeptat se v atelieru
                  <span
                    aria-hidden="true"
                    className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16"
                  />
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
