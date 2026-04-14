import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AnimateIn } from "@/components/AnimateIn";
import { TESTIMONIALS } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Doporučení | Květiny nad Museem",
  description:
    "Co říkají lidé, kteří si od nás odnesli kytici. Výběr doporučení z atelieru na Vinohradech.",
};

export default function DoporuceniPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          number="06"
          eyebrow="Doporučení"
          title="Slova, která k nám dorazila."
          subtitle="Výběr zpráv, e-mailů a Google recenzí od těch, kteří si od nás odnesli kytici."
        />

        <section className="bg-ivory pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <Breadcrumbs
                items={[
                  { href: "/", label: "Domů" },
                  { label: "Doporučení" },
                ]}
              />
              <a
                href="https://maps.google.com/?q=Květiny+nad+Museem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-deep hover:text-emerald-deep transition-colors group"
              >
                Všechny Google recenze
                <span
                  aria-hidden="true"
                  className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16"
                />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {TESTIMONIALS.map((t, i) => (
                <AnimateIn
                  key={t.id}
                  animation="fade-up"
                  delay={(i % 3) * 80}
                  duration={700}
                >
                  <TestimonialCard testimonial={t} index={i} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
