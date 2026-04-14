import Image from "next/image";
import Link from "next/link";

/**
 * HeroSection – hlavní banner homepage.
 * Animace: CSS keyframes spuštěné ihned po načtení (není potřeba IntersectionObserver).
 */
export function HeroSection() {
  return (
    <section
      aria-label="Úvodní banner"
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Obrázek na pozadí ───────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kytice.jpg"
          alt="Čerstvá barevná kytice z růží a pivoněk – Květiny nad Museem Praha"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent"
        />
      </div>

      {/* Fallback gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[-1] bg-gradient-to-br from-[#2D5016] via-[#1e3610] to-[#8B6914]"
      />

      {/* ── Obsah hero – animace při načtení ────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">

          {/* Odznáček – fade down z vrchu */}
          <div
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6"
            style={{ animation: "heroFadeDown 0.7s ease both" }}
          >
            <span aria-hidden="true">🌿</span>
            Čerstvé kytice každý den · Praha Vinohrady
          </div>

          {/* H1 – slide up */}
          <h1
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            style={{ animation: "heroFadeUp 0.8s ease 0.15s both" }}
          >
            Květinářství{" "}
            <span className="italic text-[#e8c96a]">s výhledem</span>{" "}
            na Národní muzeum
          </h1>

          {/* Podnadpis */}
          <p
            className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-xl"
            style={{ animation: "heroFadeUp 0.8s ease 0.3s both" }}
          >
            Čerstvé kytice, rozvoz po Praze, svatební floristika.{" "}
            <span className="text-white/70">Vinohradská 6 – naproti Národnímu muzeu.</span>
          </p>

          {/* CTA tlačítka */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            style={{ animation: "heroFadeUp 0.8s ease 0.45s both" }}
          >
            <Link
              href="/obchod"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2D5016] hover:bg-[#3a6820] text-white font-semibold text-base rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#2D5016]/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Objednat kytici
            </Link>
            <Link
              href="/svatby"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold text-base rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Svatební konzultace zdarma
            </Link>
          </div>

          {/* Social proof */}
          <div
            className="mt-10 flex items-center gap-3"
            aria-label="4,9 hvězdiček z 5 – 120 recenzí na Googlu"
            style={{ animation: "heroFadeUp 0.8s ease 0.6s both" }}
          >
            <div className="flex gap-0.5" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">
              4,9 / 5 – přes 120 recenzí na Googlu
            </span>
          </div>
        </div>
      </div>

      {/* Dekorativní vlna */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-16 lg:h-20">
          <path d="M0 80V40C240 0 480 60 720 40C960 20 1200 60 1440 40V80H0Z" fill="#F7F5F0" />
        </svg>
      </div>

      {/* Keyframes definice (inline, jen pro hero – ostatní sekce řeší AnimateIn) */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
