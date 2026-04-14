"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { Monogram } from "@/components/Monogram";

/**
 * ScrollStory – úvodní scroll-driven příběh (4 kapitoly).
 *
 * Klíčový princip: kapitoly se NEPŘEKRÝVAJÍ.
 * Každá kapitola nejprve zcela zmizí (opacity 0) → krátká pauza
 * v čistém emerald pozadí → teprve pak nastupuje další.
 * Tím se eliminuje "double exposure" efekt překrývajících se textů.
 *
 * Timeline (scrollYProgress 0–1):
 *   Ch1  viditelná  0.00–0.20  fade out  0.20–0.27
 *   Ch2  fade in    0.28–0.35  hold      0.35–0.48  fade out  0.48–0.55
 *   Ch3  fade in    0.56–0.63  hold      0.63–0.74  fade out  0.74–0.81
 *   Ch4  fade in    0.82–0.90  hold      0.90–1.00
 */
export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Kapitola 1 ──────────────────────────────────────────
  const c1Opacity = useTransform(
    scrollYProgress,
    [0, 0.20, 0.27],
    [1, 1, 0]
  );
  const c1Y = useTransform(scrollYProgress, [0.18, 0.27], [0, -20]);
  const monogramScale = useTransform(scrollYProgress, [0, 0.20], [0.94, 1]);

  // ── Kapitola 2 ──────────────────────────────────────────
  const c2Opacity = useTransform(
    scrollYProgress,
    [0.28, 0.35, 0.48, 0.55],
    [0, 1, 1, 0]
  );
  // kenburns: pomalý zoom-out po dobu viditelnosti
  const c2ImgScale = useTransform(scrollYProgress, [0.28, 0.55], [1.06, 1.0]);

  // ── Kapitola 3 ──────────────────────────────────────────
  const c3Opacity = useTransform(
    scrollYProgress,
    [0.56, 0.63, 0.74, 0.81],
    [0, 1, 1, 0]
  );
  const c3ImgScale = useTransform(scrollYProgress, [0.56, 0.81], [1.05, 1.0]);

  // ── Kapitola 4 ──────────────────────────────────────────
  const c4Opacity = useTransform(
    scrollYProgress,
    [0.82, 0.90, 1],
    [0, 1, 1]
  );
  const c4Y = useTransform(scrollYProgress, [0.82, 0.96], [22, 0]);

  // ── Fallback prefers-reduced-motion ─────────────────────
  if (prefersReducedMotion === true) {
    return (
      <section
        className="relative min-h-screen bg-emerald-deep flex items-center justify-center text-ivory py-24 px-6"
        aria-label="Úvodní sekce"
      >
        <div className="text-center max-w-3xl">
          <Monogram size={72} color="#C9A961" className="mx-auto mb-10 opacity-90" />
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
      {/* Sticky viewport — všechny kapitoly jsou zde jako absolute vrstvy */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-emerald-deep">

        {/* ── Kapitola 01: Ticho před kyticí ─────────────── */}
        <motion.div
          style={{ opacity: c1Opacity, y: c1Y, willChange: "opacity, transform" }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center">
            <motion.div style={{ scale: monogramScale }}>
              <Monogram
                size={96}
                color="#C9A961"
                className="mx-auto mb-12 opacity-90"
              />
            </motion.div>
            <p className="eyebrow-light mb-8">Atelier Praha</p>
            <h2 className="font-display font-light text-ivory text-5xl md:text-7xl lg:text-[7rem] leading-[1.02] tracking-tight">
              Ticho před kyticí.
            </h2>
            <div className="mt-14 flex justify-center">
              <span className="block w-24 h-px bg-gold-champagne opacity-70" />
            </div>
          </div>
        </motion.div>

        {/* ── Kapitola 02: Patnáct let praxe ──────────────── */}
        <motion.div
          style={{ opacity: c2Opacity, willChange: "opacity" }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ scale: c2ImgScale, willChange: "transform" }}
            className="absolute inset-0 origin-center"
          >
            <Image
              src="/images/produkt-pivonky.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/70 via-emerald-deep/50 to-emerald-deep/80" />
          </motion.div>
          <div className="relative h-full flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <p className="eyebrow-light mb-8">Řemeslo</p>
              <h2 className="font-display font-light text-ivory text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                Patnáct let praxe
                <br />
                <em className="not-italic italic text-gold-foil">pod cizím jménem.</em>
              </h2>
            </div>
          </div>
        </motion.div>

        {/* ── Kapitola 03: Konečně tady ──────────────────── */}
        <motion.div
          style={{ opacity: c3Opacity, willChange: "opacity" }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ scale: c3ImgScale, willChange: "transform" }}
            className="absolute inset-0 origin-center"
          >
            <Image
              src="/images/prodejna-muzeum.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/40 to-emerald-deep/60" />
          </motion.div>
          <div className="relative h-full flex items-end justify-center px-6 pb-28">
            <div className="text-center max-w-4xl">
              <p className="eyebrow-light mb-8">Vinohradská 6</p>
              <h2 className="font-display font-light text-ivory text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                Konečně tady.
                <br />
                <em className="not-italic italic text-gold-foil">Naproti Museu.</em>
              </h2>
            </div>
          </div>
        </motion.div>

        {/* ── Kapitola 04: Finální claim ─────────────────── */}
        <motion.div
          style={{ opacity: c4Opacity, y: c4Y, willChange: "opacity, transform" }}
          className="absolute inset-0 bg-emerald-deep flex items-center justify-center px-6"
        >
          <div className="text-center">
            <p className="eyebrow-light mb-10">Od roku 2024</p>
            <div
              className="flex items-center justify-center gap-6 mb-10"
              aria-hidden="true"
            >
              <span className="h-px w-16 md:w-24 bg-gold-champagne" />
              <Monogram size={44} color="#C9A961" />
              <span className="h-px w-16 md:w-24 bg-gold-champagne" />
            </div>
            <h2 className="font-display font-light text-ivory text-5xl md:text-7xl lg:text-[7rem] leading-[1.02] tracking-tight mb-10">
              Květinový atelier
              <br />
              <em className="not-italic italic text-gold-foil">na Vinohradech.</em>
            </h2>
            <p className="text-ivory/50 text-xs uppercase tracking-[0.4em] mt-2">
              ↓ pokračujte dál
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
