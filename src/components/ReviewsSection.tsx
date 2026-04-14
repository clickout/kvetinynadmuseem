"use client";

import { useState, useRef, useCallback } from "react";
import { AnimateIn } from "@/components/AnimateIn";

/* ── Placeholder data recenzí (nahradit Google Places API) ── */
const REVIEWS = [
  {
    id: 1,
    author: "Martina Horáčková",
    avatar: "MH",
    rating: 5,
    date: "před 2 týdny",
    text: "Naprosto úžasné květinářství! Objednala jsem kytici ke kulatinám maminky – přivezli ji přesně na čas a byly nádherné. Personál moc milý, doporučuji všem!",
    occasion: "Dárková kytice",
  },
  {
    id: 2,
    author: "Jakub Novotný",
    avatar: "JN",
    rating: 5,
    date: "před 1 měsícem",
    text: "Skvělá volba pro svatební floristiku. Paní floristka nám pomohla s celou výzdobou – od kytic nevěsty přes dekorace stolů až po výzdobu sálu. Vše bylo přesně podle našich představ.",
    occasion: "Svatební floristika",
  },
  {
    id: 3,
    author: "Věra Kratochvílová",
    avatar: "VK",
    rating: 5,
    date: "před 3 týdny",
    text: "Chodím sem pravidelně. Vždy čerstvé, vždy krásné. Ceny jsou přiměřené kvalitě. Oceňuji, že mají vždy sezónní i exotické druhy.",
    occasion: "Pravidelná zákaznice",
  },
  {
    id: 4,
    author: "Tomáš Bureš",
    avatar: "TB",
    rating: 5,
    date: "před 5 dny",
    text: "Potřeboval jsem rychle smuteční věnec. Zavolal jsem ráno, odpoledne byl hotový a byl naprosto důstojný. Velice diskrétní a profesionální přístup. Děkuji.",
    occasion: "Smuteční vazba",
  },
  {
    id: 5,
    author: "Lenka Marková",
    avatar: "LM",
    rating: 5,
    date: "před 2 měsíci",
    text: "Překvapila jsem kamarádku rozvozem kytice k narozeninám. Kytice dorazila nádherně zabalená s ručně psanou přáníčkem. Kamarádka byla nadšena!",
    occasion: "Rozvoz kytice",
  },
  {
    id: 6,
    author: "Pavel Šimánek",
    avatar: "PŠ",
    rating: 5,
    date: "před 1 týdnem",
    text: "Koupil jsem orchidej jako dárek do kanceláře. Výběr pokojových rostlin je skvělý, ceny rozumné. Rostlina po 3 měsících stále krásně kvete!",
    occasion: "Pokojová rostlina",
  },
] as const;

/** Hvězdičkové hodnocení */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Hodnocení ${rating} z 5 hvězd`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i <= rating ? "#FBBF24" : "#E5E7EB"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * ReviewsSection – horizontální carousel s Google recenzemi.
 * Navigace šipkami i přejetím prstu (touch).
 */
export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  /* Pohyb carouselu */
  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, REVIEWS.length - 1));
    setActiveIndex(clamped);
  }, []);

  /* Touch handlers */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(activeIndex + (diff > 0 ? 1 : -1));
  };

  return (
    <section
      aria-labelledby="reviews-heading"
      className="py-16 md:py-24 bg-[#2D5016] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nadpis */}
        <AnimateIn animation="fade-up" className="text-center mb-12">
          {/* Google Reviews logo / badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium text-white/90">Google recenze</span>
          </div>

          <h2
            id="reviews-heading"
            className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
          >
            Co říkají naši zákazníci
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-white/80 text-base">
              <strong className="text-white">4,9</strong> z 5 · přes 120 recenzí
            </p>
          </div>
        </AnimateIn>

        {/* Carousel track */}
        <div
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-live="polite"
          aria-atomic="true"
          className="relative"
        >
          {/* Karty – na desktopu zobrazujeme 3, na mobilu 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mobile: jen aktivní karta. Desktop: 3 karty posuneme */}
            {[0, 1, 2].map((offset) => {
              const index = (activeIndex + offset) % REVIEWS.length;
              const review = REVIEWS[index];
              return (
                <article
                  key={review.id}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-300 ${
                    offset === 0 ? "block" : "hidden md:block"
                  } ${offset === 1 ? "md:scale-100" : "md:scale-95 md:opacity-80"}`}
                  aria-label={`Recenze od ${review.author}`}
                >
                  {/* Hlavička */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar s iniciálami */}
                      <div
                        className="w-11 h-11 rounded-full bg-[#8B6914] flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        aria-hidden="true"
                      >
                        {review.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{review.author}</p>
                        <p className="text-white/60 text-xs">{review.date}</p>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Text recenze */}
                  <blockquote className="text-white/85 text-sm leading-relaxed mb-3">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>

                  {/* Štítek příležitosti */}
                  <span className="inline-block bg-white/15 text-white/80 text-xs px-3 py-1 rounded-full">
                    {review.occasion}
                  </span>
                </article>
              );
            })}
          </div>

          {/* Navigace – šipky */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Předchozí recenze"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Tečky */}
            <div className="flex gap-2" role="tablist" aria-label="Výběr recenze">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Recenze ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-white w-6"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex >= REVIEWS.length - 1}
              aria-label="Další recenze"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Odkaz na všechny recenze */}
        <div className="text-center mt-8">
          <a
            href="https://maps.google.com/?q=Květiny+nad+Museem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors underline underline-offset-4"
          >
            Zobrazit všechny recenze na Google
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
