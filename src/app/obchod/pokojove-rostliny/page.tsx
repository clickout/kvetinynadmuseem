import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { AnimateIn } from "@/components/AnimateIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { POKOJOVE_ROSTLINY } from "@/lib/products";

export const metadata: Metadata = {
  title: "Pokojové rostliny | Květiny nad Museem",
  description:
    "Vybrané druhy pokojových rostlin pro pražské byty. Orchideje, monstery, ficusy a vzácné druhy.",
};

export default function PokojoveRostlinyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          number="02·3"
          eyebrow="Pokojové rostliny"
          title="Zeleň, která zůstane."
          subtitle="Vybrané druhy pro pražské byty. S kartičkou péče psanou rukou."
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
                  { label: "Pokojové rostliny" },
                ]}
              />
              <h2
                id="products-heading"
                className="text-xs uppercase tracking-[0.3em] text-gold-deep"
              >
                {POKOJOVE_ROSTLINY.length} druhů
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
              {POKOJOVE_ROSTLINY.map((product, i) => (
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

            {/* Péče tip */}
            <AnimateIn animation="fade-up" delay={200}>
              <div className="mt-24 bg-bone/40 border border-gold-champagne/30 p-10 md:p-16 max-w-4xl mx-auto text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-5">
                  Péče
                </p>
                <p className="font-display font-light text-2xl md:text-3xl text-charcoal leading-snug mb-6">
                  Ke každé rostlině napíšeme krátký návod —
                  <br />
                  <span className="italic text-emerald-deep">kolik světla, kolik vody, kdy přesadit.</span>
                </p>
                <p className="text-graphite text-sm leading-relaxed max-w-xl mx-auto mb-8">
                  Hledáte konkrétní druh, který v obchodě nevidíte?
                  Některé rostliny umíme sehnat do týdne.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-deep hover:text-gold-deep transition-colors group"
                >
                  Ptejte se v atelieru
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
