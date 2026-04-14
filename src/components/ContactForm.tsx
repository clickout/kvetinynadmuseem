"use client";

import { useState } from "react";

type Variant = "light" | "dark";

interface ContactFormProps {
  variant?: Variant;
}

/**
 * ContactForm — tichý, serifní formulář bez obrubených tlačítek.
 * Zatím bez backendu — stav se ukládá lokálně a po odeslání se zobrazí poděkování.
 * TODO: pipe na /api/contact (Resend / SendGrid).
 */
export function ContactForm({ variant = "light" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitted");
  };

  const isDark = variant === "dark";

  const labelCls = isDark
    ? "text-gold-champagne"
    : "text-gold-deep";
  const inputCls = isDark
    ? "bg-transparent border-b border-gold-champagne/40 focus:border-gold-foil text-ivory placeholder:text-ivory/40"
    : "bg-transparent border-b border-gold-champagne/50 focus:border-emerald-deep text-charcoal placeholder:text-graphite/40";
  const helperCls = isDark ? "text-ivory/50" : "text-graphite/70";
  const submitCls = isDark
    ? "text-gold-foil hover:text-ivory"
    : "text-emerald-deep hover:text-gold-deep";

  if (status === "submitted") {
    return (
      <div className="text-center py-12">
        <p
          className={`font-display text-2xl md:text-3xl italic mb-4 ${
            isDark ? "text-gold-foil" : "text-emerald-deep"
          }`}
        >
          Děkujeme. Napíšeme zpět.
        </p>
        <p className={`text-sm ${helperCls}`}>
          Obvykle odpovídáme do následujícího pracovního dne.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      aria-label="Kontaktní formulář"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="cf-jmeno"
            className={`block text-xs uppercase tracking-[0.25em] mb-2 ${labelCls}`}
          >
            Jméno *
          </label>
          <input
            id="cf-jmeno"
            name="jmeno"
            type="text"
            required
            autoComplete="given-name"
            className={`w-full outline-none px-1 py-3 transition-colors ${inputCls}`}
          />
        </div>
        <div>
          <label
            htmlFor="cf-email"
            className={`block text-xs uppercase tracking-[0.25em] mb-2 ${labelCls}`}
          >
            E-mail *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`w-full outline-none px-1 py-3 transition-colors ${inputCls}`}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="cf-telefon"
          className={`block text-xs uppercase tracking-[0.25em] mb-2 ${labelCls}`}
        >
          Telefon
        </label>
        <input
          id="cf-telefon"
          name="telefon"
          type="tel"
          autoComplete="tel"
          className={`w-full outline-none px-1 py-3 transition-colors ${inputCls}`}
        />
      </div>

      <div>
        <label
          htmlFor="cf-temat"
          className={`block text-xs uppercase tracking-[0.25em] mb-2 ${labelCls}`}
        >
          Téma
        </label>
        <select
          id="cf-temat"
          name="temat"
          defaultValue="obecne"
          className={`w-full outline-none px-1 py-3 transition-colors bg-transparent border-b ${
            isDark
              ? "border-gold-champagne/40 focus:border-gold-foil text-ivory"
              : "border-gold-champagne/50 focus:border-emerald-deep text-charcoal"
          }`}
        >
          <option value="obecne">Obecný dotaz</option>
          <option value="kytice">Dárková kytice</option>
          <option value="svatba">Svatba</option>
          <option value="smutecni">Smuteční vazba</option>
          <option value="rostliny">Pokojové rostliny</option>
          <option value="spoluprace">Spolupráce</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="cf-zprava"
          className={`block text-xs uppercase tracking-[0.25em] mb-2 ${labelCls}`}
        >
          Zpráva *
        </label>
        <textarea
          id="cf-zprava"
          name="zprava"
          rows={5}
          required
          placeholder="Napište nám několik vět..."
          className={`w-full outline-none px-1 py-3 transition-colors resize-none ${inputCls}`}
        />
      </div>

      <div className="flex items-center justify-between pt-4">
        <p className={`text-xs leading-relaxed max-w-xs ${helperCls}`}>
          Odesláním souhlasíte se zpracováním osobních údajů.
          Adresu nikdy nesdílíme.
        </p>
        <button
          type="submit"
          className={`inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] transition-colors group whitespace-nowrap ${submitCls}`}
        >
          Odeslat
          <span
            aria-hidden="true"
            className="block w-12 h-px bg-current transition-all duration-500 group-hover:w-20"
          />
        </button>
      </div>
    </form>
  );
}
