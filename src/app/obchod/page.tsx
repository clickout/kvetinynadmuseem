import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Obchod | Květiny nad Museem",
  description:
    "Sezonní kytice, pokojové rostliny, smuteční vazby a svatební floristika — vše z atelieru naproti Národnímu muzeu.",
};

const SHOP_CATEGORIES = [
  {
    number: "01",
    title: "Dárkové kytice",
    desc: "Sezonní kompozice vázané po jedné. Čerstvé květy, krabička nebo kraft papír.",
    href: "/obchod/darkove-kytice",
    image: "/images/kategorie-darkove-kytice.jpg",
    alt: "Sezonní dárková kytice",
    meta: "6 signature kompozic",
  },
  {
    number: "02",
    title: "Smuteční vazby",
    desc: "Věnce a pietní aranžmá s důstojností, jakou okamžik žádá. Rozvoz na pražské obřadní síně.",
    href: "/obchod/smutecni-vazby",
    image: "/images/kategorie-smutecni.jpg",
    alt: "Bílá smuteční vazba",
    meta: "6 vazeb + zakázky",
  },
  {
    number: "03",
    title: "Pokojové rostliny",
    desc: "Vybrané druhy pro pražské byty. Od monstery přes olivovník po vzácné calathey.",
    href: "/obchod/pokojove-rostliny",
    image: "/images/kategorie-rostliny.jpg",
    alt: "Pokojová rostlina v keramice",
    meta: "6 druhů v nabídce",
  },
  {
    number: "04",
    title: "Svatby",
    desc: "Kompletní floristika — od kytice nevěsty až po odvoz kytic ze sálu. Konzultace v atelieru.",
    href: "/svatby",
    image: "/images/kategorie-svatby.jpg",
    alt: "Svatební kytice z pivoněk",
    meta: "Tři balíčky · konzultace",
  },
] as const;

export default function ObchodPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          number="02"
          eyebrow="Nabídka"
          title="Náš obchod"
          subtitle="Čtyři kapitoly jednoho řemesla. Každá zakázka je vázaná po jedné v atelieru na Vinohradské 6."
        />

        <section className="bg-ivory pb-24 md:pb-32" aria-labelledby="shop-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <Breadcrumbs
                items={[
                  { href: "/", label: "Domů" },
                  { label: "Obchod" },
                ]}
              />
            </div>

            <h2 id="shop-heading" className="sr-only">
              Kategorie
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              {SHOP_CATEGORIES.map((cat, i) => (
                <AnimateIn key={cat.href} animation="fade-up" delay={i * 100} duration={800}>
                  <Link
                    href={cat.href}
                    className="group block"
                    aria-label={`${cat.title} – ${cat.desc}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-emerald-deep/0 group-hover:bg-emerald-deep/20 transition-colors duration-500"
                      />
                      <span className="absolute top-6 left-6 font-display text-3xl md:text-4xl text-gold-foil">
                        {cat.number}
                      </span>
                    </div>

                    <div className="pt-6 border-b border-gold-champagne/30 group-hover:border-emerald-deep transition-colors pb-6">
                      <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold-deep mb-3">
                        {cat.meta}
                      </p>
                      <h3 className="font-display font-light text-2xl md:text-3xl text-charcoal group-hover:text-emerald-deep transition-colors mb-3">
                        {cat.title}
                      </h3>
                      <p className="text-graphite text-sm md:text-base leading-relaxed max-w-md mb-4">
                        {cat.desc}
                      </p>
                      <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-deep group-hover:text-emerald-deep transition-colors">
                        Prohlédnout
                        <span
                          aria-hidden="true"
                          className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-14"
                        />
                      </span>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>

            {/* Rozvoz & Kontakt blok */}
            <AnimateIn animation="fade-up" delay={200} className="mt-24">
              <div className="bg-emerald-deep text-ivory p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
                  <div className="max-w-xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-4">
                      Rozvoz · Praha
                    </p>
                    <p className="font-display font-light text-2xl md:text-3xl text-ivory leading-snug">
                      Doručíme po celé Praze —
                      <br />
                      <span className="italic text-gold-foil">nebo vás rádi vidíme v atelieru.</span>
                    </p>
                  </div>
                  <Link
                    href="/rozvoz"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-champagne hover:text-gold-foil group whitespace-nowrap"
                  >
                    Podmínky rozvozu
                    <span
                      aria-hidden="true"
                      className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16"
                    />
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
