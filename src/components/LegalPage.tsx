import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GoldHairline } from "@/components/GoldHairline";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updatedLabel: string;
  intro?: string;
  breadcrumbLabel: string;
  children: ReactNode;
}

/**
 * Sdílený layout pro legal stránky (Obchodní podmínky, GDPR, Reklamace).
 * Editorální typografie, čitelný sloupec, zlaté hairline oddělovače sekcí.
 */
export function LegalPage({
  eyebrow,
  title,
  updatedLabel,
  intro,
  breadcrumbLabel,
  children,
}: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main-content">
        <article className="bg-ivory pt-36 md:pt-44 pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <Breadcrumbs
              items={[
                { href: "/", label: "Domů" },
                { label: breadcrumbLabel },
              ]}
              className="mb-12"
            />

            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold-deep mb-8">
              <span>{eyebrow}</span>
              <span aria-hidden="true" className="w-6 h-px bg-gold-champagne/60" />
              <span>Aktualizováno {updatedLabel}</span>
            </div>

            <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] tracking-tight mb-10">
              {title}
            </h1>

            {intro && (
              <p className="text-graphite text-lg md:text-xl leading-relaxed mb-12 font-light">
                {intro}
              </p>
            )}

            <GoldHairline variant="solid" className="mb-12" />

            <div className="legal-prose space-y-8 text-charcoal text-base md:text-[17px] leading-[1.85] font-light">
              {children}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
