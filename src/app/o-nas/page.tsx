import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionNumber } from "@/components/SectionNumber";
import { GoldHairline } from "@/components/GoldHairline";
import { Monogram } from "@/components/Monogram";

export const metadata: Metadata = {
  title: "Atelier | Květiny nad Museem",
  description:
    "Atelier na Vinohradské 6 naproti Národnímu muzeu. Patnáct let praxe, první vlastní adresa od roku 2024.",
};

const VALUES = [
  {
    title: "Sezona, ne katalog",
    desc:
      "Vážeme z toho, co právě roste. Žádné leden-červen-prosinec stejné kytice — kompozice následují rytmus zahrad a čerstvého trhu.",
  },
  {
    title: "Jedna po jedné",
    desc:
      "Žádné předsvázané série. Každá kytice vzniká na stole před zákazníkem, nebo ráno v den rozvozu.",
  },
  {
    title: "Méně, lépe",
    desc:
      "Raději tři druhy květu v krásné harmonii než deset nacpaných dohromady. Práce s prostorem, barvou a tichem.",
  },
  {
    title: "Vinohrady",
    desc:
      "Atelier otevíráme tam, kde jsme doma. Naproti Muzeu, mezi kavárnou a galerií — patří sem čas a pozornost.",
  },
];

export default function OnasPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          number="03"
          eyebrow="Atelier"
          title="Patnáct let praxe. Konečně pod vlastní značkou."
          subtitle="Otevíráme svůj první vlastní atelier. Za každou kyticí stojí dlouhá léta práce v pražských květinářstvích — a rozhodnutí dělat věci pomaleji."
        />

        <section className="bg-ivory pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <Breadcrumbs
                items={[
                  { href: "/", label: "Domů" },
                  { label: "Atelier" },
                ]}
              />
            </div>

            {/* ── Dvousloupcový příběh ────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <AnimateIn animation="fade-right" className="lg:col-span-7 space-y-6 text-graphite text-lg leading-[1.8] font-light">
                <p>
                  Patnáct let jsme stáli za pulty cizích květinářství. Vázali jsme
                  kytice, které nesly jiná jména. Učili se od majitelek, kterých si
                  vážíme, a potají si psali do sešitu, jak by vypadal <em>náš</em> atelier.
                </p>
                <p>
                  V roce 2024 jsme otevřeli první vlastní adresu. Vinohradská 6,
                  pár metrů od Národního muzea — ulice, kterou máme dlouho projitou,
                  a kterou jsme si konečně mohli vybrat.
                </p>
                <p>
                  Není to obchod s řeznou kvantitou. Je to atelier — tichý prostor,
                  kde se dá usednout, mluvit o okamžiku, pro který kytice vzniká,
                  a dostat něco, co stojí za to odnést domů.
                </p>
              </AnimateIn>

              <AnimateIn
                animation="fade-left"
                delay={100}
                className="lg:col-span-5 lg:sticky lg:top-28"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-bone">
                  <Image
                    src="/images/prodejna-muzeum.jpg"
                    alt="Atelier na Vinohradské 6"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold-deep">
                  Vinohradská 6 · Praha 2
                </p>
              </AnimateIn>
            </div>

            <GoldHairline variant="solid" className="my-24" />

            {/* ── Filozofie / hodnoty ─────────────────────── */}
            <div className="max-w-3xl mb-16">
              <SectionNumber number="02" label="Filozofie" variant="dark" className="mb-6" />
              <h2 className="font-display font-light text-4xl md:text-5xl text-charcoal leading-[1.1] tracking-tight">
                Čtyři věty,
                <br />
                <span className="italic text-gold-deep">podle kterých žijeme.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold-champagne/30">
              {VALUES.map((v, i) => (
                <AnimateIn key={v.title} animation="fade-up" delay={i * 100}>
                  <div className="bg-ivory p-10 h-full">
                    <p className="font-display text-4xl text-gold-champagne leading-none mb-6">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display font-light text-2xl text-charcoal mb-4">
                      {v.title}
                    </h3>
                    <p className="text-graphite text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <GoldHairline variant="solid" className="my-24" />

            {/* ── Tým (anonymně) ─────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimateIn animation="fade-right">
                <SectionNumber number="03" label="Tým" variant="dark" className="mb-6" />
                <h2 className="font-display font-light text-4xl md:text-5xl text-charcoal leading-[1.1] tracking-tight mb-8">
                  Rodinný atelier.
                </h2>
                <div className="space-y-5 text-graphite text-base md:text-lg leading-[1.8] font-light max-w-xl">
                  <p>
                    Jsme rodinný podnik. Vážeme, objednáváme květ, staráme se o rostliny
                    a píšeme kartičky rukou. V atelieru se střídáme podle dne a ročního období.
                  </p>
                  <p>
                    Nikdy nebudeme řetězec. Ani franšíza. Zůstaneme tím, čím jsme teď —
                    jedním atelierem, jednou adresou, jednou péčí.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn animation="fade-left" delay={100}>
                <div className="bg-emerald-deep text-ivory p-12 md:p-16 text-center">
                  <Monogram size={56} color="#C9A961" className="mx-auto mb-8 opacity-90" />
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-champagne mb-6">
                    Pozvánka
                  </p>
                  <p className="font-display font-light text-2xl md:text-3xl text-ivory leading-snug mb-8">
                    Přijďte se v atelieru
                    <br />
                    <span className="italic text-gold-foil">pozdravit.</span>
                  </p>
                  <p className="text-ivory/70 text-sm leading-relaxed max-w-sm mx-auto mb-10">
                    Káva, chvíle, čas. Konzultace je nezávazná a rádi vás provedeme.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-foil hover:text-ivory transition-colors group"
                  >
                    Domluvit návštěvu
                    <span
                      aria-hidden="true"
                      className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16"
                    />
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
