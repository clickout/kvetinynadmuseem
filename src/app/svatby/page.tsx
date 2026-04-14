import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionNumber } from "@/components/SectionNumber";
import { GoldHairline } from "@/components/GoldHairline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SVATEBNI_BALICKY } from "@/lib/products";

export const metadata: Metadata = {
  title: "Svatby | Květiny nad Museem",
  description:
    "Kompletní svatební floristika — od kytice nevěsty po výzdobu sálu. Konzultace v atelieru na Vinohradech.",
};

const GALLERY_ITEMS = [
  { src: "/images/svatba-kytice-nevesty.jpg", alt: "Kytice nevěsty z pivoněk a eukalyptu" },
  { src: "/images/svatba-stol.jpg", alt: "Dekorace svatebního stolu" },
  { src: "/images/svatba-obrad.jpg", alt: "Výzdoba obřadní síně" },
  { src: "/images/svatba-kosticek.jpg", alt: "Košíčky pro hosty" },
  { src: "/images/svatba-detaily.jpg", alt: "Florální detaily se stuhami" },
  { src: "/images/svatba-komplet.jpg", alt: "Kompletní svatební výzdoba" },
];

const PROCESS = [
  {
    step: "01",
    title: "Konzultace",
    desc: "Sedneme si v atelieru. Probereme barevnou paletu, styl, místo konání a rozpočet.",
  },
  {
    step: "02",
    title: "Návrh",
    desc: "Připravíme moodboard a kalkulaci. Doladíme tak, aby seděl do každého detailu.",
  },
  {
    step: "03",
    title: "Vazba",
    desc: "Den před svatbou vážeme z čerstvě dovezeného květu. Každá kytice je dílem.",
  },
  {
    step: "04",
    title: "Den D",
    desc: "Instalujeme na místě, koordinujeme s dodavateli a po obřadu odvážíme.",
  },
];

export default function SvatbyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero — full-bleed foto ─────────────────────────── */}
        <section className="relative min-h-[85vh] flex items-end bg-emerald-deep text-ivory overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/kategorie-svatby.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/70 to-emerald-deep/30"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28 pt-40 w-full">
            <div className="mb-10">
              <Breadcrumbs
                items={[
                  { href: "/", label: "Domů" },
                  { label: "Svatby" },
                ]}
                className="text-ivory/70"
              />
            </div>
            <SectionNumber number="07" label="Svatby" variant="light" className="mb-8" />
            <h1 className="font-display font-light text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.03] tracking-tight max-w-4xl mb-8">
              Vaše svatba.
              <br />
              <span className="italic text-gold-foil">Naše řemeslo.</span>
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
              Od kytice nevěsty přes boutonnières až po výzdobu stolů. Vedeme vás
              krok za krokem — konzultace, návrh, instalace a odvoz.
            </p>
            <Link
              href="#konzultace"
              className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold-champagne hover:text-gold-foil transition-colors group"
            >
              Domluvit konzultaci
              <span
                aria-hidden="true"
                className="block w-14 h-px bg-current transition-all duration-500 group-hover:w-24"
              />
            </Link>
          </div>
        </section>

        {/* ── Proces (4 kroky) ──────────────────────────────── */}
        <section className="bg-ivory py-24 md:py-32" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <AnimateIn animation="fade-up" className="max-w-3xl mb-16">
              <SectionNumber number="01" label="Proces" variant="dark" className="mb-6" />
              <h2
                id="process-heading"
                className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] tracking-tight"
              >
                Čtyři rozhovory,
                <br />
                <span className="italic text-gold-deep">jeden den.</span>
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-champagne/30">
              {PROCESS.map(({ step, title, desc }, i) => (
                <AnimateIn key={step} animation="fade-up" delay={i * 100} duration={700}>
                  <div className="bg-ivory p-8 md:p-10 h-full">
                    <p className="font-display text-4xl md:text-5xl text-gold-champagne leading-none mb-6">
                      {step}
                    </p>
                    <h3 className="font-display font-light text-2xl text-charcoal mb-4">
                      {title}
                    </h3>
                    <p className="text-graphite text-sm leading-relaxed">{desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Balíčky ──────────────────────────────────────── */}
        <section className="bg-bone/40 py-24 md:py-32" aria-labelledby="pricing-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <AnimateIn animation="fade-up" className="max-w-3xl mb-16">
              <SectionNumber number="02" label="Balíčky" variant="dark" className="mb-6" />
              <h2
                id="pricing-heading"
                className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] tracking-tight"
              >
                Orientační ceníky.
              </h2>
              <p className="mt-8 text-graphite text-lg max-w-xl leading-relaxed">
                Finální cena vzniká na konzultaci — podle rozsahu, sezony a počtu hostů.
                Žádný nátlak, žádná skrytá položka.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {SVATEBNI_BALICKY.map((pkg, i) => (
                <AnimateIn key={pkg.id} animation="fade-up" delay={i * 100}>
                  <div
                    className={`h-full flex flex-col p-10 ${
                      pkg.popular
                        ? "bg-emerald-deep text-ivory"
                        : "bg-ivory border border-gold-champagne/40 text-charcoal"
                    }`}
                  >
                    {pkg.popular && (
                      <p className="text-xs uppercase tracking-[0.3em] text-gold-foil mb-6">
                        Nejvíce volené
                      </p>
                    )}
                    <h3
                      className={`font-display font-light text-3xl mb-6 ${
                        pkg.popular ? "text-ivory" : "text-charcoal"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`font-display text-4xl mb-8 ${
                        pkg.popular ? "text-gold-foil" : "text-gold-deep"
                      }`}
                    >
                      {pkg.price}
                    </p>
                    <GoldHairline
                      variant="solid"
                      className={pkg.popular ? "mb-8 opacity-60" : "mb-8"}
                    />
                    <ul className="space-y-4 flex-1 mb-10">
                      {pkg.items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-3 text-sm leading-relaxed ${
                            pkg.popular ? "text-ivory/85" : "text-graphite"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`block w-4 h-px mt-2.5 flex-shrink-0 ${
                              pkg.popular ? "bg-gold-foil" : "bg-gold-champagne"
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#konzultace"
                      className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] transition-colors group ${
                        pkg.popular
                          ? "text-gold-foil hover:text-ivory"
                          : "text-emerald-deep hover:text-gold-deep"
                      }`}
                    >
                      Domluvit
                      <span
                        aria-hidden="true"
                        className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-14"
                      />
                    </Link>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Galerie ──────────────────────────────────────── */}
        <section className="bg-ivory py-24 md:py-32" aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <AnimateIn animation="fade-up" className="max-w-3xl mb-16">
              <SectionNumber number="03" label="Inspirace" variant="dark" className="mb-6" />
              <h2
                id="gallery-heading"
                className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] tracking-tight"
              >
                Z našich svateb.
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              {GALLERY_ITEMS.map(({ src, alt }, i) => (
                <AnimateIn key={src} animation="fade-up" delay={i * 80}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-bone">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
                    />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Konzultace formulář ──────────────────────────── */}
        <section
          id="konzultace"
          className="bg-emerald-deep text-ivory py-24 md:py-32"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <AnimateIn animation="fade-up" className="mb-12 text-center">
              <SectionNumber number="04" label="Konzultace" variant="light" className="mb-6 justify-center" />
              <h2
                id="contact-heading"
                className="font-display font-light text-4xl md:text-5xl text-ivory leading-tight mb-6"
              >
                Napište nám
                <br />
                <span className="italic text-gold-foil">o své svatbě.</span>
              </h2>
              <p className="text-ivory/70 max-w-xl mx-auto leading-relaxed">
                Ozveme se do následujícího pracovního dne. Konzultace je zdarma a k ničemu nezavazuje.
              </p>
            </AnimateIn>

            <AnimateIn animation="fade-up" delay={100}>
              <form
                className="space-y-8"
                aria-label="Formulář pro svatební konzultaci"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="jmeno"
                      className="block text-xs uppercase tracking-[0.25em] text-gold-champagne mb-2"
                    >
                      Jméno *
                    </label>
                    <input
                      id="jmeno"
                      name="jmeno"
                      type="text"
                      required
                      autoComplete="given-name"
                      className="w-full bg-transparent border-b border-gold-champagne/40 focus:border-gold-foil outline-none px-1 py-3 text-ivory placeholder:text-ivory/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-[0.25em] text-gold-champagne mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full bg-transparent border-b border-gold-champagne/40 focus:border-gold-foil outline-none px-1 py-3 text-ivory transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="datum"
                    className="block text-xs uppercase tracking-[0.25em] text-gold-champagne mb-2"
                  >
                    Datum svatby
                  </label>
                  <input
                    id="datum"
                    name="datum"
                    type="date"
                    className="w-full bg-transparent border-b border-gold-champagne/40 focus:border-gold-foil outline-none px-1 py-3 text-ivory transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zprava"
                    className="block text-xs uppercase tracking-[0.25em] text-gold-champagne mb-2"
                  >
                    Představy
                  </label>
                  <textarea
                    id="zprava"
                    name="zprava"
                    rows={5}
                    placeholder="Barvy, styl, místo konání, počet hostů..."
                    className="w-full bg-transparent border-b border-gold-champagne/40 focus:border-gold-foil outline-none px-1 py-3 text-ivory placeholder:text-ivory/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold-foil hover:text-ivory transition-colors group pt-4"
                >
                  Odeslat žádost
                  <span
                    aria-hidden="true"
                    className="block w-14 h-px bg-current transition-all duration-500 group-hover:w-24"
                  />
                </button>
              </form>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
