import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

/**
 * AboutSection – příběh Adély, zakladatelky Květiny nad Museem.
 */
export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Obrázek prodejny ────────────────────────────── */}
          <AnimateIn animation="fade-right" duration={800} className="order-2 lg:order-1">
            <div className="relative">
              {/* Hlavní obrázek */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/prodejna-muzeum.jpg"
                  alt="Adéla ve svém květinářství Květiny nad Museem s výhledem na Národní muzeum"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Fallback gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2D5016]/30 to-[#8B6914]/20"
                />
              </div>

              {/* Dekorativní rámeček */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-2xl border-2 border-[#2D5016]/15 -z-10 hidden sm:block"
              />

              {/* Citát – floating karta */}
              <div className="absolute -bottom-5 left-4 sm:left-8 bg-white rounded-xl shadow-lg px-5 py-4 max-w-[260px]">
                <p className="text-[#2D5016] text-sm font-medium leading-snug italic font-[family-name:var(--font-playfair)]">
                  „Celý život jsem tvořila kytice pro druhé – teď je tvořím pod vlastním jménem."
                </p>
                <p className="text-[#8B6914] text-xs font-semibold mt-2">— Adéla, zakladatelka</p>
              </div>
            </div>
          </AnimateIn>

          {/* ── Text Adélin příběh ───────────────────────────── */}
          <AnimateIn animation="fade-left" duration={800} delay={100} className="order-1 lg:order-2">
            <p className="text-[#8B6914] text-sm font-semibold uppercase tracking-widest mb-4">
              Příběh Adély
            </p>
            <h2
              id="about-heading"
              className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D5016] mb-6 leading-tight"
            >
              15 let v květinách.{" "}
              <span className="italic text-[#8B6914]">Konečně pod svým jménem.</span>
            </h2>

            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Jmenuji se <strong className="text-[#2D5016]">Adéla</strong> a
                s květinami pracuji od svých dvaceti let. Patnáct let jsem
                aranžovala, tvořila a milovala každý den v práci – ale vždy
                v cizím ateliéru, vždy pod cizím jménem.
              </p>
              <p>
                Před třemi lety jsem se odhodlala a otevřela vlastní prodejnu
                přesně tam, kde jsem to vždy snila – na Vinohradské ulici,
                pár kroků od Národního muzea. Dnes mi každé ráno, když
                vyklápím výlohu, dochází, že to stálo za to.
              </p>
              <p>
                Každý zákazník dostane ode mě osobní přístup. Ať přijdete
                pro narozeninovou kytičku nebo plánujete svatbu – sedíme spolu,
                povídáme si, a já tvořím přesně to, co cítíte.
              </p>
            </div>

            {/* Milníky */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "15+", label: "let zkušeností" },
                { value: "3", label: "roky vlastní prodejny" },
                { value: "1 200+", label: "spokojených zákazníků" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#2D5016]">
                    {value}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/o-nas"
              className="mt-8 inline-flex items-center gap-2 text-[#2D5016] font-semibold text-base hover:gap-3 transition-all duration-200 group"
            >
              Přečíst celý příběh
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
