import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionNumber } from "@/components/SectionNumber";

const CATEGORIES = [
  {
    number: "01",
    id: "darkove-kytice",
    title: "Dárkové kytice",
    description:
      "Sezonní kompozice pro narozeniny, výročí, poděkování. Sestavované po jedné, vždy čerstvé.",
    href: "/obchod/darkove-kytice",
    image: "/images/kategorie-darkove-kytice.jpg",
    alt: "Sezonní dárková kytice v bílém papíru",
    featured: true,
  },
  {
    number: "02",
    id: "smutecni-vazby",
    title: "Smuteční vazby",
    description:
      "Věnce a pietní aranžmá. Diskrétní přístup a rozvoz na pražské obřadní síně.",
    href: "/obchod/smutecni-vazby",
    image: "/images/kategorie-smutecni.jpg",
    alt: "Bílá smuteční vazba z lilií",
    featured: false,
  },
  {
    number: "03",
    id: "pokojove-rostliny",
    title: "Pokojové rostliny",
    description:
      "Vybrané druhy pro pražské byty — od monstery přes olivovníky až po vzácné druhy.",
    href: "/obchod/pokojove-rostliny",
    image: "/images/kategorie-rostliny.jpg",
    alt: "Pokojová rostlina v keramickém květináči",
    featured: false,
  },
  {
    number: "04",
    id: "svatby",
    title: "Svatby",
    description:
      "Kompletní floristika — od kytice nevěsty po výzdobu stolů. Konzultace v atelieru.",
    href: "/svatby",
    image: "/images/kategorie-svatby.jpg",
    alt: "Elegantní svatební kytice z pivoněk",
    featured: false,
  },
] as const;

/**
 * CategoriesSection — editorální layout: 1 featured (levý sloupec) + 3 menší (pravý sloupec),
 * zlatá čísla, serifní názvy, tenké borderové linky.
 */
export function CategoriesSection() {
  const featured = CATEGORIES[0];
  const rest = CATEGORIES.slice(1);

  return (
    <section
      aria-labelledby="categories-heading"
      className="bg-ivory py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Hlavička sekce */}
        <AnimateIn animation="fade-up" className="max-w-3xl mb-16 md:mb-20">
          <SectionNumber number="02" label="Nabídka" variant="dark" className="mb-6" />
          <h2
            id="categories-heading"
            className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] tracking-tight"
          >
            Čtyři kapitoly
            <br />
            <span className="italic text-gold-deep">jednoho řemesla.</span>
          </h2>
          <p className="mt-8 text-graphite text-lg leading-relaxed max-w-xl">
            Každá zakázka je tvořena po jedné, v našem atelieru na Vinohradech.
            Nemáme katalog — máme sezonu, náladu a věcný rozpočet.
          </p>
        </AnimateIn>

        {/* Grid: 1 featured + 3 menší */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Featured */}
          <AnimateIn animation="fade-up" duration={800}>
            <Link
              href={featured.href}
              className="group block"
              aria-label={`${featured.title} – otevřít kategorii`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div className="absolute top-6 left-6 text-ivory">
                  <span className="block font-display text-3xl md:text-4xl text-gold-foil">
                    {featured.number}
                  </span>
                </div>
              </div>
              <div className="pt-8 flex flex-col gap-4">
                <h3 className="font-display font-light text-3xl md:text-4xl text-charcoal leading-tight group-hover:text-emerald-deep transition-colors">
                  {featured.title}
                </h3>
                <p className="text-graphite text-base leading-relaxed max-w-md">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold-deep group-hover:text-emerald-deep transition-colors mt-2">
                  Prohlédnout
                  <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </AnimateIn>

          {/* 3 sekundární */}
          <div className="flex flex-col divide-y divide-gold-champagne/30">
            {rest.map((cat, i) => (
              <AnimateIn
                key={cat.id}
                animation="fade-up"
                delay={i * 100}
                duration={700}
                className="py-8 first:pt-0"
              >
                <Link
                  href={cat.href}
                  className="group grid grid-cols-[auto_1fr] md:grid-cols-[120px_1fr_auto] gap-6 md:gap-8 items-start"
                  aria-label={`${cat.title} – otevřít kategorii`}
                >
                  <span className="font-display text-3xl md:text-4xl text-gold-champagne leading-none pt-1">
                    {cat.number}
                  </span>

                  <div className="flex flex-col gap-2 min-w-0">
                    <h3 className="font-display font-light text-2xl md:text-3xl text-charcoal group-hover:text-emerald-deep transition-colors leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-graphite text-sm md:text-base leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="hidden md:block relative w-28 h-28 overflow-hidden bg-bone flex-shrink-0">
                    <Image
                      src={cat.image}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
