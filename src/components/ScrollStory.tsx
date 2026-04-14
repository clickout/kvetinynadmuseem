"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { LogoMark } from "@/components/LogoMark";

/**
 * ScrollStory – úvodní scroll-driven portál.
 *
 * Klíčový princip: JEDNO logo se od začátku do konce spojitě zvětšuje.
 * Transform-origin je umístěn do středu prostředního oblouku (50 %, 78 %),
 * takže na konci scrollu "vstupujeme" tímto obloukem dovnitř.
 * Přes logo se vrství tři krátké textové kapitoly (sekvenční fade –
 * NEPŘEKRÝVAJÍ se, aby se eliminoval double-exposure na diakritice).
 *
 * Timeline (scrollYProgress 0–1):
 *   logoScale   0.50 → 16.00  (kontinuální)
 *   Ch1  viditelná  0.00–0.20   fade out  0.20–0.26
 *   Ch2  fade in    0.30–0.38   hold      0.38–0.58   fade out 0.58–0.66
 *   Ch3  fade in    0.70–0.78   hold      0.78–0.95   fade out 0.95–1.00
 */
export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Kontinuální zoom do prostředního oblouku ─────────────
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.5, 16]);

  // ── Textové kapitoly (sekvenční, bez překryvu) ───────────
  const c1Opacity = useTransform(scrollYProgress, [0, 0.18, 0.26], [1, 1, 0]);
  const c2Opacity = useTransform(
    scrollYProgress,
    [0.30, 0.38, 0.58, 0.66],
    [0, 1, 1, 0]
  );
  const c3Opacity = useTransform(
    scrollYProgress,
    [0.70, 0.78, 0.95, 1],
    [0, 1, 1, 0]
  );

  // ── Fallback prefers-reduced-motion ──────────────────────
  if (prefersReducedMotion === true) {
    return (
      <section
        className="relative min-h-screen bg-emerald-deep flex items-center justify-center text-ivory py-24 px-6"
        aria-label="Úvodní sekce"
      >
        <div className="text-center max-w-3xl">
          <LogoMark size={200} color="#C9A961" className="mx-auto mb-10" />
          <p className="eyebrow-light mb-6">Atelier Praha</p>
          <h1 className="font-display font-light text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8">
            Květinový atelier
            <br />
            na Vinohradech.
          </h1>
          <p className="text-ivory/70 text-lg max-w-xl mx-auto">
            Naproti Národnímu muzeu. Od roku 2024.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh]"
      aria-label="Úvodní příběh atelieru"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-emerald-deep">

        {/* ── Kontinuálně zoomující logo ──────────────────── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            aria-hidden="true"
            className="will-change-transform"
            style={{
              // Logo-div má aspekt 472:862 a základní výšku 70vh.
              // Posuneme jej nahoru o 28 % své výšky, aby bod (50 %, 78 %) —
              // střed prostředního oblouku — ležel v geometrickém středu viewportu.
              // Transform-origin: 50 % 78 %. Při zvětšení tedy oblouk zůstává
              // pevně ukotvený a všechno ostatní roste směrem ven.
              height: "70vh",
              width: "calc(70vh * 472 / 862)",
              backgroundColor: "#C9A961",
              WebkitMaskImage: "url('/images/logo_faithful.png')",
              maskImage: "url('/images/logo_faithful.png')",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              transformOrigin: "50% 78%",
              translateY: "-19.6vh",
              scale: logoScale,
            }}
          />
        </div>

        {/* ── Kapitola 01 — Ticho před kyticí ─────────────── */}
        <motion.div
          style={{ opacity: c1Opacity, willChange: "opacity" }}
          className="absolute inset-x-0 bottom-[10vh] flex flex-col items-center text-center px-6 pointer-events-none"
        >
          <p className="eyebrow-light mb-4">Atelier Praha</p>
          <h2 className="font-display font-light text-ivory text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Ticho před kyticí.
          </h2>
          <span className="mt-8 block w-16 h-px bg-gold-champagne/70" />
        </motion.div>

        {/* ── Kapitola 02 — Patnáct let praxe ─────────────── */}
        <motion.div
          style={{ opacity: c2Opacity, willChange: "opacity" }}
          className="absolute inset-x-0 bottom-[10vh] flex flex-col items-center text-center px-6 pointer-events-none"
        >
          <p className="eyebrow-light mb-4">Řemeslo</p>
          <h2 className="font-display font-light text-ivory text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Patnáct let praxe
            <br />
            <em className="not-italic italic text-gold-foil">pod cizím jménem.</em>
          </h2>
          <span className="mt-8 block w-16 h-px bg-gold-champagne/70" />
        </motion.div>

        {/* ── Kapitola 03 — Naproti Museu ─────────────────── */}
        <motion.div
          style={{ opacity: c3Opacity, willChange: "opacity" }}
          className="absolute inset-x-0 bottom-[10vh] flex flex-col items-center text-center px-6 pointer-events-none"
        >
          <p className="eyebrow-light mb-4">Vinohradská 6 · Od roku 2024</p>
          <h2 className="font-display font-light text-ivory text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Květinový atelier
            <br />
            <em className="not-italic italic text-gold-foil">naproti Museu.</em>
          </h2>
          <span className="mt-8 block w-16 h-px bg-gold-champagne/70" />
        </motion.div>

      </div>
    </section>
  );
}
