import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionNumber } from "@/components/SectionNumber";
import { GoldHairline } from "@/components/GoldHairline";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Rozvoz | Květiny nad Museem",
  description:
    "Rozvoz po Praze — Vinohrady, Nové Město, Karlín, Holešovice a dál. Ceník a časové okno.",
};

const ZONES = [
  {
    zone: "Zóna I",
    price: "149 Kč",
    areas: "Vinohrady · Nové Město · Žižkov",
    time: "do 2 hodin",
  },
  {
    zone: "Zóna II",
    price: "199 Kč",
    areas: "Karlín · Holešovice · Smíchov · Vršovice",
    time: "do 3 hodin",
  },
  {
    zone: "Zóna III",
    price: "249 Kč",
    areas: "Zbraslav · Modřany · Libeň · Dejvice",
    time: "do 4 hodin",
  },
  {
    zone: "Zóna IV",
    price: "od 349 Kč",
    areas: "Ostatní pražské čtvrti",
    time: "dle dohody",
  },
];

const FAQ = [
  {
    q: "Kdy objednávat, aby kytice dorazila dnes?",
    a: "Pro rozvoz v tentýž den prosíme objednávku do 14:00. Po 14:00 zaručujeme doručení následující pracovní den dopoledne.",
  },
  {
    q: "Můžete doručit na konkrétní čas?",
    a: "Ano. Při objednávce uveďte požadovaný časový slot — pokusíme se jej splnit v rozmezí ±30 minut.",
  },
  {
    q: "Co když adresát není doma?",
    a: "Zavoláme předem. Pokud se nedovoláme, kytici necháme u vrátnice nebo odložíme doručení s novým slotem.",
  },
  {
    q: "Doručujete mimo Prahu?",
    a: "Do Středočeského kraje po individuální dohodě. Napište nám destinaci a zašleme cenový návrh.",
  },
];

export default function RozvozPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          number="05"
          eyebrow="Rozvoz"
          title="Po celé Praze. Pozorně."
          subtitle="Vlastní auto, vlastní ruce, vlastní zodpovědnost. Bez zprostředkovatelů a kurýrů."
        />

        <section className="bg-ivory pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <Breadcrumbs
                items={[
                  { href: "/", label: "Domů" },
                  { label: "Rozvoz" },
                ]}
              />
            </div>

            {/* ── Zóny ──────────────────────────────────────── */}
            <AnimateIn animation="fade-up" className="mb-16">
              <SectionNumber number="01" label="Zóny · ceník" variant="dark" className="mb-6" />
              <h2 className="font-display font-light text-4xl md:text-5xl text-charcoal leading-[1.1] tracking-tight">
                Čtyři zóny,
                <br />
                <span className="italic text-gold-deep">jedna cena za doručení.</span>
              </h2>
            </AnimateIn>

            <div className="border-t border-gold-champagne/40">
              {ZONES.map((z, i) => (
                <AnimateIn key={z.zone} animation="fade-up" delay={i * 80}>
                  <div className="grid grid-cols-[1fr_auto] md:grid-cols-[120px_1fr_1fr_auto] gap-4 md:gap-8 items-baseline py-6 border-b border-gold-champagne/30">
                    <p className="font-display text-xl md:text-2xl text-emerald-deep">
                      {z.zone}
                    </p>
                    <p className="text-graphite text-sm md:text-base leading-relaxed col-span-2 md:col-span-1">
                      {z.areas}
                    </p>
                    <p className="hidden md:block text-xs uppercase tracking-[0.25em] text-gold-deep">
                      {z.time}
                    </p>
                    <p className="font-display text-lg md:text-xl text-charcoal text-right">
                      {z.price}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <p className="mt-8 text-sm text-graphite leading-relaxed max-w-xl">
              Uvedené ceny platí pro standardní pracovní dny. Víkendový rozvoz
              nebo expresní slot (do 60 minut) účtujeme samostatně — přesnou částku
              sdělíme před potvrzením objednávky.
            </p>

            <GoldHairline variant="solid" className="my-24" />

            {/* ── Časy ──────────────────────────────────────── */}
            <AnimateIn animation="fade-up">
              <SectionNumber number="02" label="Časy" variant="dark" className="mb-6" />
              <h2 className="font-display font-light text-4xl md:text-5xl text-charcoal leading-[1.1] tracking-tight mb-10">
                Kdy rozvážíme.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
                <div className="border-l border-gold-champagne pl-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-3">
                    Pondělí – Pátek
                  </p>
                  <p className="font-display text-3xl text-charcoal mb-3">9:00 – 19:00</p>
                  <p className="text-graphite text-sm leading-relaxed">
                    Objednávku do 14:00 obvykle doručujeme tentýž den.
                  </p>
                </div>
                <div className="border-l border-gold-champagne pl-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-deep mb-3">
                    Sobota · Neděle
                  </p>
                  <p className="font-display text-3xl text-charcoal mb-3">10:00 – 15:00</p>
                  <p className="text-graphite text-sm leading-relaxed">
                    Víkendový rozvoz má vlastní sazbu. Svatby a urgenty po dohodě.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <GoldHairline variant="solid" className="my-24" />

            {/* ── FAQ ───────────────────────────────────────── */}
            <AnimateIn animation="fade-up">
              <SectionNumber number="03" label="Časté dotazy" variant="dark" className="mb-6" />
              <h2 className="font-display font-light text-4xl md:text-5xl text-charcoal leading-[1.1] tracking-tight mb-12">
                Co se obvykle ptáte.
              </h2>

              <div className="divide-y divide-gold-champagne/30 border-t border-gold-champagne/40">
                {FAQ.map((item, i) => (
                  <details
                    key={i}
                    className="group py-6"
                  >
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                      <h3 className="font-display font-light text-xl md:text-2xl text-charcoal group-hover:text-emerald-deep transition-colors">
                        {item.q}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="text-gold-deep font-display text-2xl leading-none mt-1 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-graphite leading-relaxed max-w-2xl">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </AnimateIn>

            {/* ── CTA ──────────────────────────────────────── */}
            <AnimateIn animation="fade-up" delay={200}>
              <div className="mt-24 bg-emerald-deep text-ivory p-10 md:p-16 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-5">
                  Objednávka
                </p>
                <p className="font-display font-light text-2xl md:text-3xl text-ivory leading-snug mb-10">
                  Vybíráte kytici k narozeninám,
                  <br />
                  <span className="italic text-gold-foil">nebo potřebujete poradit?</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/obchod"
                    className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-foil hover:text-ivory transition-colors group"
                  >
                    Do obchodu
                    <span aria-hidden="true" className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-foil hover:text-ivory transition-colors group"
                  >
                    Kontaktovat atelier
                    <span aria-hidden="true" className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
