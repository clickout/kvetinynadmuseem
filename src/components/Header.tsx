"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LogoIcon } from "@/components/LogoIcon";

const NAV_LINKS = [
  { href: "/obchod", label: "Obchod" },
  { href: "/svatby", label: "Svatby" },
  { href: "/doporuceni", label: "Doporučení" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── LOGO ───────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Květiny nad Museem – domovská stránka"
          >
            {/* SVG ikona – pivoňka + muzeum */}
            <LogoIcon
              size={52}
              color={isScrolled ? "#2D5016" : "#ffffff"}
              className="transition-all duration-300 flex-shrink-0"
            />

            {/* Kaligrafický text */}
            <div className="flex flex-col leading-none">
              <span
                className={`font-[family-name:var(--font-great-vibes)] text-[1.85rem] leading-[1.1] tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-[#2D5016]" : "text-white"
                }`}
              >
                Květiny
              </span>
              <span
                className={`font-[family-name:var(--font-great-vibes)] text-[1.25rem] leading-[1.1] tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-[#8B6914]" : "text-white/80"
                }`}
              >
                nad museem
              </span>
            </div>
          </Link>

          {/* ── Desktop navigace ───────────────────────────── */}
          <nav aria-label="Hlavní navigace" className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full ${
                  isScrolled ? "text-gray-700 hover:text-[#2D5016]" : "text-white/90 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/obchod"
              className={`ml-2 px-5 py-2.5 font-semibold text-sm rounded-full transition-all duration-200 ${
                isScrolled
                  ? "bg-[#2D5016] text-white hover:bg-[#3a6820]"
                  : "bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30"
              }`}
            >
              Objednat kytici
            </Link>
          </nav>

          {/* ── Hamburger ──────────────────────────────────── */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg transition-colors ${
              isScrolled ? "text-[#2D5016]" : "text-white"
            }`}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ──────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobilní navigace"
        aria-modal="true"
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
        <nav
          aria-label="Mobilní navigace"
          className={`absolute top-0 right-0 w-72 h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Logo v draweru */}
          <div className="flex items-center gap-3 px-8 py-6 border-b border-gray-100">
            <LogoIcon size={44} color="#2D5016" />
            <div className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-great-vibes)] text-[1.6rem] text-[#2D5016] leading-tight">Květiny</span>
              <span className="font-[family-name:var(--font-great-vibes)] text-[1.1rem] text-[#8B6914] leading-tight">nad museem</span>
            </div>
          </div>

          <div className="flex flex-col gap-0 px-8 py-4 flex-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-800 hover:text-[#2D5016] py-3.5 border-b border-gray-100 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="px-8 pb-8 flex flex-col gap-3">
            <Link href="/obchod" onClick={() => setIsMenuOpen(false)}
              className="px-5 py-3 bg-[#2D5016] text-white text-center font-semibold rounded-full hover:bg-[#3a6820] transition-colors">
              Objednat kytici
            </Link>
            <Link href="/svatby" onClick={() => setIsMenuOpen(false)}
              className="px-5 py-3 border border-[#2D5016] text-[#2D5016] text-center font-semibold rounded-full hover:bg-[#F7F5F0] transition-colors">
              Svatební konzultace zdarma
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
