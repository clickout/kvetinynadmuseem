import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionNumber } from "@/components/SectionNumber";
import { GoldHairline } from "@/components/GoldHairline";

/**
 * AboutSection — asymetrický layout, pull quote, bez konkrétního jména.
 * Příběh rodinného atelieru: 15 let praxe, nyní pod vlastní značkou.
 */
export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-bone/40 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* ── Obrázková část (5/12) ────────────────────── */}
          <AnimateIn
            animation="fade-right"
            duration={900}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative">
              {/* Hlavní portrét atelieru */}
              <div className="relative aspect-[4/5] overflow-hidden bg-emerald-deep/10">
                <Image
                  src="/images/prodejna-muzeum.jpg"
                  alt="Atelier Květiny nad Museem s výhledem na Národní muzeum"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Zlatý hairline rámeček */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 w-3/4 h-3/4 border border-gold-champagne/60 hidden sm:block -z-10"
              />

              {/* Eyebrow popisek pod fotem */}
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold-deep">
                Vinohradská 6 · Praha 2
              </p>
            </div>
          </AnimateIn>

          {/* ── Text (7/12) ──────────────────────────────── */}
          <AnimateIn
            animation="fade-left"
            duration={900}
            delay={100}
            className="lg:col-span-7"
          >
            <SectionNumber number="03" label="Atelier" variant="dark" className="mb-8" />

            <h2
              id="about-heading"
              className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.08] tracking-tight mb-10"
            >
              Patnáct let praxe.
              <br />
              <span className="italic text-gold-deep">Konečně pod vlastní značkou.</span>
            </h2>

            <GoldHairline variant="solid" className="w-24 mb-10" />

            <div className="space-y-6 text-graphite text-base md:text-lg leading-[1.8] max-w-2xl font-light">
              <p>
                Otevíráme svůj první vlastní atelier. Za každou naší kyticí stojí
                patnáct let praxe v pražských květinářstvích — a rozhodnutí dělat
                věci pomaleji, s péčí, jako to patří čtvrti, kde jsme doma.
              </p>
              <p>
                Nemáme katalog. Máme sezonu, jednu ranní kávu a pět minut hovoru
                o tom, komu kytice patří. Z toho vznikají věci, které stojí za to,
                aby někdo nesl domů.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-14 pl-8 border-l border-gold-champagne">
              <p className="font-display font-light italic text-2xl md:text-3xl text-emerald-deep leading-snug">
                „Ticho před kyticí je stejně důležité jako ticho po ní."
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-gold-deep">
                — Atelier Praha
              </footer>
            </blockquote>

            {/* Milníky */}
            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { value: "15", label: "let praxe" },
                { value: "2024", label: "první vlastní adresa" },
                { value: "01", label: "atelier na Vinohradech" },
              ].map(({ value, label }) => (
                <div key={label} className="border-t border-gold-champagne/50 pt-4">
                  <dt className="font-display text-3xl md:text-4xl text-charcoal font-light">
                    {value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-gold-deep">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/o-nas"
              className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-deep hover:text-gold-deep transition-colors group"
            >
              Celý příběh atelieru
              <span
                aria-hidden="true"
                className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16"
              />
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
