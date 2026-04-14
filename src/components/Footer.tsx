import Link from "next/link";
import { Monogram } from "@/components/Monogram";

/* Otevírací doba */
const OPENING_HOURS = [
  { day: "Pondělí – Pátek", hours: "8:00 – 19:00" },
  { day: "Sobota", hours: "9:00 – 17:00" },
  { day: "Neděle", hours: "10:00 – 14:00" },
];

/* Navigace ve footeru — editorální 3 sloupce */
const FOOTER_NAV = {
  Atelier: [
    { href: "/o-nas", label: "Atelier" },
    { href: "/svatby", label: "Svatby" },
    { href: "/blog", label: "Deník" },
    { href: "/doporuceni", label: "Doporučení" },
  ],
  Nabídka: [
    { href: "/obchod", label: "Obchod" },
    { href: "/obchod/darkove-kytice", label: "Dárkové kytice" },
    { href: "/obchod/smutecni-vazby", label: "Smuteční vazby" },
    { href: "/obchod/pokojove-rostliny", label: "Pokojové rostliny" },
  ],
  Informace: [
    { href: "/kontakt", label: "Kontakt" },
    { href: "/rozvoz", label: "Rozvoz" },
    { href: "/obchodni-podminky", label: "Obchodní podmínky" },
    { href: "/ochrana-osobnich-udaju", label: "Ochrana údajů" },
    { href: "/reklamace", label: "Reklamace" },
  ],
};

/* Sociální sítě — tenké ikony v kroužku */
const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/kvetinynadmuseem/",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/kvetinynadmuseem/",
    label: "Facebook",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

/**
 * Luxury footer — emerald-deep pozadí, zlatá hairline rytmus, editorální 4 sloupce.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-deep text-ivory" role="contentinfo">
      {/* ── Horní hairline ─────────────────────────────────── */}
      <div className="h-px bg-gold-champagne/30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* ── Monogram & claim ─────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-16">
          <Monogram size={56} color="#C9A961" className="mb-6" />
          <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-4">
            Atelier Praha · Od roku 2024
          </p>
          <p className="font-display font-light text-2xl md:text-3xl text-ivory/90 max-w-xl leading-snug">
            Květinový atelier na Vinohradech.
            <br />
            <span className="italic text-gold-foil">Naproti Národnímu muzeu.</span>
          </p>
        </div>

        {/* ── Zlatá hairline ───────────────────────────────── */}
        <div className="flex items-center justify-center mb-16" aria-hidden="true">
          <span className="h-px w-20 bg-gold-champagne/60" />
        </div>

        {/* ── 4 sloupce: kontakt + 3× nav ──────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          {/* Sloupec 1 — Kontakt */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-5">
              Atelier
            </p>
            <address className="not-italic space-y-4 text-sm text-ivory/70 leading-relaxed">
              <p>
                Vinohradská 6<br />
                Praha 2, 120 00
              </p>
              <div className="space-y-1.5">
                <a
                  href="tel:+420XXXXXXXXX"
                  className="block link-underline text-ivory hover:text-gold-foil transition-colors"
                >
                  +420 XXX XXX XXX
                </a>
                <a
                  href="mailto:info@kvetinynadmuseem.cz"
                  className="block link-underline text-ivory hover:text-gold-foil transition-colors"
                >
                  info@kvetinynadmuseem.cz
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=Vinohradská+6+Praha+2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs uppercase tracking-[0.25em] text-gold-champagne hover:text-gold-foil transition-colors"
              >
                Zobrazit na mapě →
              </a>
            </address>
          </div>

          {/* Sloupce 2–4 — Navigace */}
          {Object.entries(FOOTER_NAV).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-5">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-ivory/70 hover:text-ivory transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Otevírací doba ───────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-gold-champagne/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-5">
                Otevírací doba
              </p>
              <dl className="space-y-2.5">
                {OPENING_HOURS.map(({ day, hours }) => (
                  <div
                    key={day}
                    className="flex items-baseline justify-between gap-4 text-sm border-b border-ivory/10 pb-2"
                  >
                    <dt className="text-ivory/65">{day}</dt>
                    <dd className="tabular-nums text-ivory font-medium">{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col md:items-end md:text-right">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-5">
                Sledujte nás
              </p>
              <div className="flex gap-3 md:justify-end mb-6">
                {SOCIAL_LINKS.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} – otevře se v novém okně`}
                    className="w-11 h-11 rounded-full border border-gold-champagne/40 flex items-center justify-center text-ivory/80 hover:text-emerald-deep hover:bg-gold-champagne hover:border-gold-champagne transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <p className="text-xs text-ivory/55 leading-relaxed max-w-xs md:ml-auto">
                Zápisky z našeho atelieru, sezonní novinky a občasné pozvánky na ranní kávu.
              </p>
            </div>
          </div>
        </div>

        {/* ── Copyright ────────────────────────────────────── */}
        <div className="mt-14 pt-6 border-t border-gold-champagne/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/45">
          <p>© {currentYear} Květiny nad Museem. Všechna práva vyhrazena.</p>
          <p className="uppercase tracking-[0.25em]">Praha · Vinohrady</p>
        </div>
      </div>
    </footer>
  );
}
