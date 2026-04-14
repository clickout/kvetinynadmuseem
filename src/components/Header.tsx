"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/LogoMark";

const NAV_LINKS = [
  { href: "/obchod", label: "Obchod" },
  { href: "/svatby", label: "Svatby" },
  { href: "/o-nas", label: "Atelier" },
  { href: "/blog", label: "Deník" },
  { href: "/kontakt", label: "Kontakt" },
];

/**
 * Luxury header — minimalistická navigace, zlatá hairline pod headerem,
 * barvy adaptují se podle scrollu (na homepage je úvodní ScrollStory tmavá).
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Na homepage je ScrollStory tmavá → transparentní header zpočátku.
  // Na ostatních stránkách vždy "solidní" stav.
  const isHome = pathname === "/";
  const solidHeader = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const textColor = solidHeader ? "text-charcoal" : "text-ivory";
  const logoColor = solidHeader ? "#0B3D2E" : "#F5F1E8";
  const subtextColor = solidHeader ? "text-gold-deep" : "text-gold-champagne";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidHeader
          ? "bg-ivory/95 backdrop-blur-md border-b border-gold-champagne/30"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* ── Logo ─────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Květiny nad Museem – domovská stránka"
          >
            <LogoMark
              size={48}
              color={logoColor}
              className="transition-all duration-500 flex-shrink-0"
            />

            <div className="flex flex-col leading-none">
              <span
                className={`font-script text-[1.85rem] leading-[1.1] tracking-wide transition-colors duration-500 ${textColor}`}
              >
                Květiny
              </span>
              <span
                className={`font-script text-[1.1rem] leading-[1.1] tracking-wide transition-colors duration-500 ${subtextColor}`}
              >
                nad museem
              </span>
            </div>
          </Link>

          {/* ── Desktop navigation ───────────────────────── */}
          <nav
            aria-label="Hlavní navigace"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[0.78rem] uppercase tracking-[0.25em] font-medium link-underline transition-colors duration-300 ${
                  solidHeader
                    ? "text-charcoal hover:text-emerald-deep"
                    : "text-ivory/90 hover:text-ivory"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Hamburger ───────────────────────────────── */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 transition-colors ${textColor}`}
          >
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ──────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobilní navigace"
        aria-modal="true"
        className={`md:hidden fixed inset-0 top-20 z-40 transition-all duration-300 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-emerald-deep/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          aria-label="Mobilní navigace"
          className={`absolute top-0 right-0 w-full max-w-sm h-[calc(100vh-5rem)] bg-ivory shadow-2xl flex flex-col transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-8 py-10 flex-1 overflow-y-auto">
            <p className="eyebrow mb-8">Navigace</p>
            <ul className="space-y-5">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-3xl text-charcoal hover:text-emerald-deep transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 py-8 border-t border-gold-champagne/30 bg-bone/40">
            <p className="eyebrow mb-3">Atelier</p>
            <address className="not-italic text-sm text-graphite leading-relaxed">
              Vinohradská 6<br />
              Praha 2, 120 00
              <br />
              <a
                href="tel:+420XXXXXXXXX"
                className="link-underline text-emerald-deep font-medium mt-2 inline-block"
              >
                +420 XXX XXX XXX
              </a>
            </address>
          </div>
        </nav>
      </div>
    </header>
  );
}
