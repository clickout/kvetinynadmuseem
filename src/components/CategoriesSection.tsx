import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

const CATEGORIES = [
  {
    id: "darkove-kytice",
    title: "Dárkové kytice",
    description: "Pro každou příležitost – narozeniny, výročí, poděkování. Sestavujeme ze sezónního i exotického květu.",
    href: "/obchod/darkove-kytice",
    image: "/images/kategorie-darkove-kytice.jpg",
    alt: "Barevná dárková kytice z růží a slunečnic",
    emoji: "💐",
    tag: "Bestseller",
  },
  {
    id: "smutecni-vazby",
    title: "Smuteční vazby",
    description: "Věnce, větvičky a pietní aranžmá. Osobní přístup, diskrétní servis, rozvoz na pohřební ústavy.",
    href: "/obchod/smutecni-vazby",
    image: "/images/kategorie-smutecni.jpg",
    alt: "Bílá smuteční kytice s liliemi",
    emoji: "🕊️",
    tag: null,
  },
  {
    id: "pokojove-rostliny",
    title: "Pokojové rostliny",
    description: "Orchideje, monstery, sukulenty i vzácné druhy. Ideální dárek i výzdoba domova nebo kanceláře.",
    href: "/obchod/pokojove-rostliny",
    image: "/images/kategorie-rostliny.jpg",
    alt: "Sbírka pokojových rostlin v květináčích",
    emoji: "🌿",
    tag: "Novinka",
  },
  {
    id: "svatby",
    title: "Svatby",
    description: "Kompletní svatební floristika – kytice nevěsty, kostýmky, dekorace stolů, výzdoba obřadní síně.",
    href: "/svatby",
    image: "/images/kategorie-svatby.jpg",
    alt: "Elegantní bílá nevěstinská kytice s pivoňkami",
    emoji: "💍",
    tag: "Konzultace zdarma",
  },
] as const;

export function CategoriesSection() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="py-16 md:py-24 bg-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nadpis */}
        <AnimateIn animation="fade-up" className="text-center mb-12 md:mb-16">
          <p className="text-[#8B6914] text-sm font-semibold uppercase tracking-widest mb-3">Co nabízíme</p>
          <h2
            id="categories-heading"
            className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D5016] mb-4"
          >
            Naše kategorie
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Od romantických kytiček po smuteční věnce a velkolepé svatební výzdoby –
            každou zakázku vytváříme s láskou k řemeslu.
          </p>
        </AnimateIn>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {CATEGORIES.map((cat, i) => (
            <AnimateIn
              key={cat.id}
              animation="fade-up"
              delay={i * 100}
              duration={700}
            >
              <Link
                href={cat.href}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#2D5016] focus-visible:ring-offset-2 block h-full"
                aria-label={`${cat.title} – přejít na kategorii`}
              >
                {/* Obrázek */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#2D5016]/0 group-hover:bg-[#2D5016]/10 transition-colors duration-300"
                  />
                  {/* Fallback gradient */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2D5016]/20 to-[#8B6914]/20"
                  />
                  <div aria-hidden="true" className="absolute top-4 left-4 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                    {cat.emoji}
                  </div>
                  {cat.tag && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-[#8B6914] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        {cat.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#2D5016] mb-2 group-hover:text-[#3a6820] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#2D5016] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    Prohlédnout
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
