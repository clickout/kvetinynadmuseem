"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { Monogram } from "@/components/Monogram";

/**
 * NewsletterInline — tichý opt-in blok. Bez toastů, bez vykřičníků.
 * Uchovávat email zatím jen v state (pipe na Resend / SendGrid doplníme později).
 */
export function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: pipe on /api/newsletter (Resend / SendGrid)
    setStatus("submitted");
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-emerald-deep text-ivory py-24 md:py-28"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <AnimateIn animation="fade-up">
          <Monogram size={48} color="#C9A961" className="mx-auto mb-8 opacity-90" />

          <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-6">
            Atelierní deník
          </p>

          <h2
            id="newsletter-heading"
            className="font-display font-light text-3xl md:text-5xl text-ivory leading-[1.15] tracking-tight mb-6"
          >
            Občasné zápisky
            <br />
            <span className="italic text-gold-foil">z našeho atelieru.</span>
          </h2>

          <p className="text-ivory/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Jednou za měsíc. Sezonní květy, pozvánky na ranní kávu
            a pár vět o tom, co právě voní v ateliéru.
          </p>

          {status === "idle" ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label="Přihlášení k odběru"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                E-mailová adresa
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.cz"
                className="flex-1 bg-transparent border-b border-gold-champagne/40 focus:border-gold-foil outline-none px-1 py-3 text-ivory placeholder:text-ivory/40 transition-colors"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-[0.3em] text-gold-champagne hover:text-gold-foil border-b border-transparent hover:border-gold-foil px-2 py-3 transition-colors"
              >
                Odebírat →
              </button>
            </form>
          ) : (
            <p className="text-gold-foil italic font-display text-xl">
              Děkujeme. Napíšeme, až bude sezona.
            </p>
          )}

          <p className="mt-8 text-xs text-ivory/40 max-w-md mx-auto leading-relaxed">
            Odhlásit se můžete kdykoli jedním kliknutím.
            Adresu nesdílíme se třetími stranami.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
