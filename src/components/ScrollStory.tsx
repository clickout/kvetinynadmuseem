"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Monogram } from "@/components/Monogram";

/**
 * ScrollStory – úvodní scroll-driven příběh (4 kapitoly).
 *
 * Technika:
 *  - kontejner `h-[400vh]` s vnitřním `sticky top-0 h-screen`
 *  - framer-motion `useScroll` + `useTransform` mapuje progress na opacity/translateY/scale
 *  - každá kapitola má vlastní okno progressu (0–0.25, 0.25–0.5, …)
 *  - respektuje `prefers-reduced-motion` → fallback na statickou úvodní sekci
 */
export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Kapitola 1: 0 – 0.25
  const c1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [0, 1, 1, 0]);
  const c1Y = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const monogramScale = useTransform(scrollYProgress, [0, 0.15], [0.85, 1]);

  // Kapitola 2: 0.25 – 0.5
  const c2Opacity = useTransform(scrollYProgress, [0.22, 0.3, 0.47, 0.53], [0, 1, 1, 0]);
  const c2ImgScale = useTransform(scrollYProgress, [0.22, 0.5], [1.15, 1]);

  // Kapitola 3: 0.5 – 0.75
  const c3Opacity = useTransform(scrollYProgress, [0.47, 0.55, 0.72, 0.78], [0, 1, 1, 0]);
  const c3ImgScale = useTransform(scrollYProgress, [0.47, 0.75], [1.1, 1]);

  // Kapitola 4: 0.75 – 1
  const c4Opacity = useTransform(scrollYProgress, [0.72, 0.82, 1], [0, 1, 1]);
  const c4Y = useTransform(scrollYProgress, [0.8, 1], [30, 0]);

  // Fallback pro reduced-motion
  if (prefersReducedMotion || (mounted === false)) {
    return (
      <section className="relative min-h-screen bg-emerald-deep flex items-center justify-center text-ivory py-24 px-6">
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
      className="relative h-[400vh] bg-emerald-deep"
      aria-label="Úvodní příběh květinového atelieru"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ── Kapitola 01: Ticho před kyticí ─────────────── */}
        <motion.div
          style={{ opacity: c1Opacity, y: c1Y }}
          className="absolute inset-0 bg-emerald-deep flex items-center justify-center px-6"
        >
          <div className="text-center">
            <motion.div style={{ scale: monogramScale }}>
              <Monogram size={96} color="#C9A961" className="mx-auto mb-12 opacity-90" />
            </motion.div>
            <p className="eyebrow-light mb-8">Atelier Praha</p>
            <h2 className="font-display font-light text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
              Ticho před kyticí.
            </h2>
            <div className="mt-14 flex justify-center">
              <span className="block w-24 h-px bg-gold-champagne opacity-80" />
            </div>
          </div>
        </motion.div>

        {/* ── Kapitola 02: Patnáct let praxe ──────────────── */}
        <motion.div
          style={{ opacity: c2Opacity }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ scale: c2ImgScale }}
            className="absolute inset-0"
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
                <span className="italic text-gold-foil">pod cizím jménem.</span>
              </h2>
            </div>
          </div>
        </motion.div>

        {/* ── Kapitola 03: Konečně tady ──────────────────── */}
        <motion.div
          style={{ opacity: c3Opacity }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ scale: c3ImgScale }}
            className="absolute inset-0"
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
                <span className="italic text-gold-foil">Naproti Museu.</span>
              </h2>
            </div>
          </div>
        </motion.div>

        {/* ── Kapitola 04: Finální claim ─────────────────── */}
        <motion.div
          style={{ opacity: c4Opacity, y: c4Y }}
          className="absolute inset-0 bg-emerald-deep flex items-center justify-center px-6"
        >
          <div className="text-center">
            <p className="eyebrow-light mb-10">Od roku 2024</p>
            <div className="flex items-center justify-center gap-6 mb-10" aria-hidden="true">
              <span className="h-px w-16 md:w-24 bg-gold-champagne" />
              <Monogram size={44} color="#C9A961" />
              <span className="h-px w-16 md:w-24 bg-gold-champagne" />
            </div>
            <h2 className="font-display font-light text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight mb-10">
              Květinový atelier
              <br />
              <span className="italic text-gold-foil">na Vinohradech.</span>
            </h2>
            <p className="text-ivory/60 text-sm uppercase tracking-[0.3em]">
              ↓ Pokračujte dál
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
