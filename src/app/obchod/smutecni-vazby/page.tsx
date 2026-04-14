import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { AnimateIn } from "@/components/AnimateIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SMUTECNI_VAZBY } from "@/lib/products";

export const metadata: Metadata = {
  title: "Smuteční vazby | Květiny nad Museem",
  description:
    "Věnce a pietní aranžmá. Diskrétní servis, rozvoz na pohřební ústavy a obřadní síně v Praze.",
};

export default function SmutecniVazbyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          number="02·2"
          eyebrow="Smuteční vazby"
          title="Tichý jazyk úcty."
          subtitle="Věnce, kytice a pietní aranžmá. Důstojně, včas, s osobním přístupem."
        />

        {/* Diskrétní info lišta */}
        <div className="bg-bone/40 border-y border-gold-champagne/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap items-center gap-4 text-sm text-graphite">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-deep">
              Urgentní objednávka
            </span>
            <span aria-hidden="true" className="w-6 h-px bg-gold-champagne/60" />
            <span>
              Zavolejte nám, vyřídíme přednostně — vazba může být hotová
              i do několika hodin.
            </span>
          </div>
        </div>

        <section
          aria-labelledby="products-heading"
          className="bg-ivory py-24 md:py-32"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <Breadcrumbs
                items={[
                  { href: "/", label: "Domů" },
                  { href: "/obchod", label: "Obchod" },
                  { label: "Smuteční vazby" },
                ]}
              />
              <h2
                id="products-heading"
                className="text-xs uppercase tracking-[0.3em] text-gold-deep"
              >
                {SMUTECNI_VAZBY.length} vazeb
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
              {SMUTECNI_VAZBY.map((product, i) => (
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

            {/* Zakázkové CTA */}
            <AnimateIn animation="fade-up" delay={200}>
              <div className="mt-24 border border-gold-champagne/40 p-10 md:p-16 max-w-4xl mx-auto text-center bg-bone/30">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-5">
                  Individuální vazby
                </p>
                <p className="font-display font-light text-2xl md:text-3xl text-charcoal leading-snug mb-8">
                  Konkrétní barvy, text na stuze, druh květiny.
                  <br />
                  <span className="italic text-emerald-deep">Navážeme podle vašeho přání.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+420XXXXXXXXX"
                    className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-deep hover:text-gold-deep transition-colors group"
                  >
                    Zavolat
                    <span aria-hidden="true" className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
                  </a>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-deep hover:text-gold-deep transition-colors group"
                  >
                    Napsat v klidu
                    <span aria-hidden="true" className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
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
