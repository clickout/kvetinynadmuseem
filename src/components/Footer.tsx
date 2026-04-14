import Link from "next/link";
import { LogoIcon } from "@/components/LogoIcon";

/* Otevírací doba */
const OPENING_HOURS = [
  { day: "Pondělí – Pátek", hours: "8:00 – 19:00" },
  { day: "Sobota", hours: "9:00 – 17:00" },
  { day: "Neděle", hours: "10:00 – 14:00" },
];

/* Navigace ve footeru */
const FOOTER_NAV = {
  "Produkty": [
    { href: "/obchod/darkove-kytice", label: "Dárkové kytice" },
    { href: "/obchod/smutecni-vazby", label: "Smuteční vazby" },
    { href: "/obchod/pokojove-rostliny", label: "Pokojové rostliny" },
    { href: "/svatby", label: "Svatební floristika" },
  ],
  "Informace": [
    { href: "/o-nas", label: "O nás" },
    { href: "/doporuceni", label: "Doporučení" },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  "Zákaznická péče": [
    { href: "/rozvoz", label: "Rozvoz a doručení" },
    { href: "/obchodni-podminky", label: "Obchodní podmínky" },
    { href: "/ochrana-osobnich-udaju", label: "Ochrana osobních údajů" },
    { href: "/reklamace", label: "Reklamace" },
  ],
};

/* Sociální sítě */
const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/kvetinynadmuseem/",
    label: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/kvetinynadmuseem/",
    label: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
];

/**
 * Footer – kontakt, adresa, otevírací doba, navigace, sociální sítě.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3610] text-white" role="contentinfo">

      {/* ── Banner před footerem ─────────────────────────────── */}
      <div className="bg-[#8B6914]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="1" y="3" width="15" height="13" rx="2"/>
                <path d="M16 8h4l3 3v5h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              <span className="font-semibold text-sm sm:text-base">
                Rozvoz po celé Praze do 3 hodin
              </span>
            </div>
            <Link
              href="/obchod"
              className="flex-shrink-0 px-5 py-2.5 bg-white text-[#8B6914] font-bold text-sm rounded-full hover:bg-gray-100 transition-colors"
            >
              Objednat s rozvozem
            </Link>
          </div>
        </div>
      </div>

      {/* ── Hlavní footer obsah ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Sloupec 1 – Brand + kontakt */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group" aria-label="Květiny nad Museem">
              <LogoIcon size={50} color="white" className="opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col leading-none">
                <span className="font-[family-name:var(--font-great-vibes)] text-[1.7rem] text-white leading-tight">Květiny</span>
                <span className="font-[family-name:var(--font-great-vibes)] text-[1.15rem] text-[#8B6914] leading-tight">nad museem</span>
              </div>
            </Link>

            <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-xs">
              Čerstvé kytice a floristické služby v srdci Prahy.
              Naproti Národnímu muzeu od roku 2010.
            </p>

            {/* Kontaktní informace */}
            <address className="not-italic space-y-3 text-sm">
              <a
                href="https://maps.google.com/?q=Vinohradská+6+Praha+2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/75 hover:text-white transition-colors group"
                aria-label="Adresa: Vinohradská 6, Praha 2 – otevřít v Google Maps"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5 group-hover:text-[#8B6914] transition-colors" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Vinohradská 6<br />Praha 2, 120 00</span>
              </a>

              <a
                href="tel:+420XXXXXXXXX"
                className="flex items-center gap-3 text-white/75 hover:text-white transition-colors group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 group-hover:text-[#8B6914] transition-colors" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.89 5.89l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +420 XXX XXX XXX
              </a>

              <a
                href="mailto:info@kvetinynadmuseem.cz"
                className="flex items-center gap-3 text-white/75 hover:text-white transition-colors group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 group-hover:text-[#8B6914] transition-colors" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@kvetinynadmuseem.cz
              </a>
            </address>

            {/* Sociální sítě */}
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} – otevře se v novém okně`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B6914] flex items-center justify-center transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigační sloupce */}
          {Object.entries(FOOTER_NAV).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Otevírací doba ───────────────────────────────────── */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

            <div className="lg:col-span-1">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Otevírací doba
              </h3>
              <dl className="space-y-2">
                {OPENING_HOURS.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between gap-4 text-sm">
                    <dt className="text-white/60">{day}</dt>
                    <dd className="text-white font-medium">{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Google Maps embed / odkaz */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Kde nás najdete
              </h3>
              {/*
                TODO: Vložit skutečný Google Maps iframe.
                Pro produkci: získejte embed URL z Google Maps →
                Sdílet → Vložit mapu → zkopírujte src z iframe.
              */}
              <div className="rounded-xl overflow-hidden bg-white/10 h-36 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=Vinohradská+6+Praha+2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors p-6 text-center"
                  aria-label="Otevřít polohu v Google Maps (otevře se v novém okně)"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="text-sm font-medium">Vinohradská 6, Praha 2</span>
                  <span className="text-xs text-white/50">Zobrazit na Google Maps →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Copyright ───────────────────────────────────────── */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {currentYear} Květiny nad Museem. Všechna práva vyhrazena.</p>
          <p>
            Vytvořeno s{" "}
            <span aria-label="láskou" role="img">❤️</span>
            {" "}v Praze
          </p>
        </div>
      </div>
    </footer>
  );
}
