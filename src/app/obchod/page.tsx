import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Obchod | Kytice, rostliny a smuteční vazby",
  description: "Prohlédněte si celý sortiment Květiny nad Museem – dárkové kytice, smuteční vazby, pokojové rostliny a svatební floristika.",
};

const SHOP_CATEGORIES = [
  {
    title: "Dárkové kytice",
    desc: "Čerstvé sezónní bouquety pro každou příležitost. Rozvoz do 3 hodin.",
    href: "/obchod/darkove-kytice",
    image: "/images/kategorie-darkove-kytice.jpg",
    alt: "Dárkové kytice",
    color: "from-rose-900/50 to-[#2D5016]/70",
    count: "6 variant",
    cta: "Vybrat kytici",
  },
  {
    title: "Smuteční vazby",
    desc: "Věnce, pietní kytice a aranžmá. Diskrétní servis, rozvoz na pohřební ústavy.",
    href: "/obchod/smutecni-vazby",
    image: "/images/kategorie-smutecni.jpg",
    alt: "Smuteční vazby",
    color: "from-gray-800/60 to-gray-600/50",
    count: "6 variant",
    cta: "Prohlédnout",
  },
  {
    title: "Pokojové rostliny",
    desc: "Orchideje, monstery, sukulenty. Ideální dárek i dekorace interiéru.",
    href: "/obchod/pokojove-rostliny",
    image: "/images/kategorie-rostliny.jpg",
    alt: "Pokojové rostliny",
    color: "from-[#1e3610]/70 to-[#2D5016]/50",
    count: "6 druhů",
    cta: "Vybrat rostlinu",
  },
  {
    title: "Svatební floristika",
    desc: "Kompletní svatební servis od Adély. Konzultace zdarma.",
    href: "/svatby",
    image: "/images/kategorie-svatby.jpg",
    alt: "Svatby",
    color: "from-rose-800/60 to-[#8B6914]/50",
    count: "Konzultace zdarma",
    cta: "Zjistit více",
  },
] as const;

export default function ObchodPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* Header */}
        <div className="pt-16 md:pt-20 bg-[#F7F5F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <AnimateIn animation="fade-up">
              <p className="text-[#8B6914] text-sm font-semibold uppercase tracking-widest mb-3">Vše od Adély</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
                Náš obchod
              </h1>
              <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
                Čerstvé kytice, pokojové rostliny, smuteční vazby a svatební floristika –
                vše s osobním přístupem a láskou k řemeslu.
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Kategorie karty */}
        <section className="bg-[#F7F5F0] pb-16 md:pb-24" aria-labelledby="shop-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="shop-heading" className="sr-only">Kategorie produktů</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {SHOP_CATEGORIES.map((cat, i) => (
                <AnimateIn key={cat.href} animation="fade-up" delay={i * 100}>
                  <Link
                    href={cat.href}
                    className="group block rounded-2xl overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    aria-label={`${cat.title} – ${cat.desc}`}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-200">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-t ${cat.color}`} />
                      {/* Fallback */}
                      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2D5016]/40 to-[#8B6914]/20" />
                    </div>
                    {/* Text overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <span className="text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full w-fit mb-3">
                        {cat.count}
                      </span>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-1">{cat.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed mb-3 max-w-xs">{cat.desc}</p>
                      <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                        {cat.cta}
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

            {/* Rozvoz banner */}
            <AnimateIn animation="fade-up" delay={200} className="mt-12">
              <div className="bg-[#2D5016] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">Rozvoz po celé Praze</p>
                    <p className="text-white/70 text-sm">Doručení do 3 hodin od objednávky · Poplatek od 99 Kč</p>
                  </div>
                </div>
                <Link href="/rozvoz" className="flex-shrink-0 px-5 py-2.5 bg-white text-[#2D5016] font-semibold text-sm rounded-full hover:bg-gray-100 transition-colors">
                  Podmínky rozvozu
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
