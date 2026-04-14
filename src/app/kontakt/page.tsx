import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionNumber } from "@/components/SectionNumber";
import { GoldHairline } from "@/components/GoldHairline";
import { ContactForm } from "@/components/ContactForm";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Kontakt | Květiny nad Museem",
  description:
    "Najdete nás na Vinohradské 6, naproti Národnímu muzeu. Kontakt, otevírací doba, objednávky.",
};

const OPENING_HOURS = [
  { day: "Pondělí – Pátek", hours: "8:00 – 19:00" },
  { day: "Sobota", hours: "9:00 – 17:00" },
  { day: "Neděle", hours: "10:00 – 14:00" },
];

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          number="04"
          eyebrow="Kontakt"
          title="Najdete nás naproti Národnímu muzeu."
          subtitle="Vinohradská 6, Praha 2. Nejbližší metro Muzeum nebo Náměstí Míru — dvě minuty pěšky."
        />

        <section className="bg-ivory pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <Breadcrumbs
                items={[
                  { href: "/", label: "Domů" },
                  { label: "Kontakt" },
                ]}
              />
            </div>

            {/* ── Formulář + boční panel ────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <AnimateIn animation="fade-right" className="lg:col-span-7">
                <SectionNumber number="01" label="Napište nám" variant="dark" className="mb-8" />
                <h2 className="font-display font-light text-3xl md:text-4xl text-charcoal leading-[1.15] tracking-tight mb-10">
                  Rychlé zprávy i větší plány — oboje řešíme stejně pozorně.
                </h2>
                <ContactForm variant="light" />
              </AnimateIn>

              <AnimateIn animation="fade-left" delay={100} className="lg:col-span-5">
                <aside className="bg-bone/40 border border-gold-champagne/30 p-8 md:p-10 space-y-10">
                  {/* Adresa */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">
                      Atelier
                    </p>
                    <address className="not-italic text-charcoal leading-relaxed">
                      <p className="font-display text-2xl">Vinohradská 6</p>
                      <p className="text-graphite">Praha 2, 120 00</p>
                    </address>
                    <a
                      href="https://maps.google.com/?q=Vinohradská+6+Praha+2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-deep hover:text-gold-deep transition-colors group"
                    >
                      Otevřít v mapě
                      <span aria-hidden="true" className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
                    </a>
                  </div>

                  <GoldHairline variant="solid" />

                  {/* Rychlé kontakty */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">
                      Rychlý kontakt
                    </p>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="tel:+420XXXXXXXXX"
                          className="font-display text-xl md:text-2xl text-charcoal hover:text-emerald-deep transition-colors"
                        >
                          +420 XXX XXX XXX
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:info@kvetinynadmuseem.cz"
                          className="link-underline text-emerald-deep"
                        >
                          info@kvetinynadmuseem.cz
                        </a>
                      </li>
                    </ul>
                  </div>

                  <GoldHairline variant="solid" />

                  {/* Otevírací doba */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">
                      Otevírací doba
                    </p>
                    <dl className="space-y-2.5">
                      {OPENING_HOURS.map(({ day, hours }) => (
                        <div
                          key={day}
                          className="flex items-baseline justify-between gap-4 border-b border-gold-champagne/20 pb-2 last:border-0"
                        >
                          <dt className="text-sm text-graphite">{day}</dt>
                          <dd className="tabular-nums text-sm text-charcoal font-medium">
                            {hours}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </aside>
              </AnimateIn>
            </div>

            <GoldHairline variant="solid" className="my-24" />

            {/* ── Mapa ──────────────────────────────────────── */}
            <AnimateIn animation="fade-up">
              <SectionNumber number="02" label="Kudy k nám" variant="dark" className="mb-6" />
              <h2 className="font-display font-light text-3xl md:text-4xl text-charcoal leading-tight mb-10">
                Metro Muzeum. Dvě minuty pěšky.
              </h2>

              {/*
                TODO: Nahradit reálným Google Maps embed URL.
                https://www.google.com/maps → Sdílet → Vložit mapu → zkopírovat src.
              */}
              <div className="aspect-[16/9] w-full overflow-hidden border border-gold-champagne/40 bg-bone/40">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5117.027!2d14.432!3d50.078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVinohradsk%C3%A1%206%2C%20Praha%202!5e0!3m2!1scs!2scz!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Poloha atelieru Květiny nad Museem — Vinohradská 6"
                />
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
