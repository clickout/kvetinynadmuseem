"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionNumber } from "@/components/SectionNumber";
import { GoldHairline } from "@/components/GoldHairline";

/* Editorální výběr recenzí — pull quotes ve stylu „as featured". */
const REVIEWS = [
  {
    id: 1,
    text: "Kytice pro maminku dorazila přesně na hodinu. Vázaná tak, že ji ani nemusela překládat — jen ji postavila do vázy. Věc, kterou si pamatujete.",
    author: "Martina H.",
    occasion: "Dárková kytice",
    location: "Vinohrady",
  },
  {
    id: 2,
    text: "Pro svatbu nás vedli od první konzultace až po odvoz kytic ze sálu. Nic jsme neřešili. Hostům se zdálo, že všechno vykvetlo samo.",
    author: "Jakub N.",
    occasion: "Svatební floristika",
    location: "Praha 2",
  },
  {
    id: 3,
    text: "Věnec přišel ráno v den obřadu, zabalený tak, aby nebylo nic vidět. Diskrétní, důstojný. Rodina ocenila, že se nemuselo nic organizovat.",
    author: "Pavel Š.",
    occasion: "Smuteční vazba",
    location: "Vinohrady",
  },
  {
    id: 4,
    text: "Chodím sem každý pátek, protože je to pro mě jediné místo v Praze, kde člověk vidí rozdíl mezi kytkou a kyticí.",
    author: "Věra K.",
    occasion: "Stálá zákaznice",
    location: "Praha 2",
  },
] as const;

/**
 * ReviewsSection — editorální pull quoty přes tmavě zelenou plochu.
 * Žádný carousel s šipkami — místo toho taby s jmény, serif velké quoty.
 */
export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = REVIEWS[activeIndex];

  return (
    <section
      aria-labelledby="reviews-heading"
      className="relative bg-emerald-deep text-ivory py-24 md:py-32 overflow-hidden"
    >
      {/* Dekorativní zlatý monogram vpravo nahoře */}
      <div
        aria-hidden="true"
        className="absolute top-12 right-8 md:right-16 text-gold-champagne/20 font-display text-[12rem] md:text-[18rem] leading-none select-none pointer-events-none"
      >
        &ldquo;
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <AnimateIn animation="fade-up" className="mb-16">
          <SectionNumber number="05" label="Doporučení" variant="light" className="mb-6" />
          <h2
            id="reviews-heading"
            className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.1] tracking-tight max-w-3xl"
          >
            Co říkají lidé,
            <br />
            <span className="italic text-gold-foil">kteří nesli kytici domů.</span>
          </h2>
        </AnimateIn>

        {/* Aktivní quote */}
        <AnimateIn animation="fade-up" duration={700}>
          <blockquote
            key={active.id}
            aria-live="polite"
            className="max-w-4xl"
          >
            <p className="font-display font-light text-2xl md:text-4xl lg:text-5xl text-ivory leading-[1.25] mb-10">
              „{active.text}"
            </p>
            <footer className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold-champagne">
              <span className="text-ivory/90 font-medium">{active.author}</span>
              <span aria-hidden="true" className="w-6 h-px bg-gold-champagne/60" />
              <span>{active.occasion}</span>
              <span aria-hidden="true" className="w-6 h-px bg-gold-champagne/60" />
              <span className="text-ivory/60">{active.location}</span>
            </footer>
          </blockquote>
        </AnimateIn>

        <GoldHairline variant="solid" className="mt-16 mb-10 w-full opacity-30" />

        {/* Tabulka jmen — výběr quote */}
        <div
          role="tablist"
          aria-label="Vybrat doporučení"
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-champagne/20"
        >
          {REVIEWS.map((r, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(i)}
                className={`bg-emerald-deep text-left px-5 py-5 transition-colors group ${
                  isActive
                    ? "bg-emerald-900"
                    : "hover:bg-emerald-900"
                }`}
              >
                <span
                  className={`block text-xs uppercase tracking-[0.25em] mb-1 transition-colors ${
                    isActive ? "text-gold-foil" : "text-gold-champagne/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`block font-display text-lg md:text-xl leading-tight transition-colors ${
                    isActive ? "text-ivory" : "text-ivory/60 group-hover:text-ivory/90"
                  }`}
                >
                  {r.author}
                </span>
                <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-ivory/45 mt-1">
                  {r.occasion}
                </span>
              </button>
            );
          })}
        </div>

        {/* Odkaz na Google recenze */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
          <p className="text-ivory/60 text-sm leading-relaxed max-w-md">
            Úplný výběr doporučení — včetně těch, která k nám dorazila v tištěné podobě —
            najdete na samostatné stránce.
          </p>
          <a
            href="/doporuceni"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-champagne hover:text-gold-foil transition-colors group"
          >
            Všechna doporučení
            <span
              aria-hidden="true"
              className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
