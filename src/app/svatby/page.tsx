import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";
import { SVATEBNI_BALICKY } from "@/lib/products";

export const metadata: Metadata = {
  title: "Svatební floristika Praha | Adéla – Květiny nad Museem",
  description: "Svatební kytice, dekorace a kompletní výzdoba od Adély. 15 let praxe ve floristice. Konzultace zdarma. Praha Vinohrady.",
};

const GALLERY_ITEMS = [
  { src: "/images/svatba-kytice-nevesty.jpg", alt: "Kytice nevěsty z bílých pivoněk a eukalyptu" },
  { src: "/images/svatba-stol.jpg", alt: "Dekorace svatebního stolu" },
  { src: "/images/svatba-obrad.jpg", alt: "Výzdoba obřadní síně" },
  { src: "/images/svatba-kosticek.jpg", alt: "Košíčky pro hosty" },
  { src: "/images/svatba-detaily.jpg", alt: "Florální detaily – stuhy a zelené doplňky" },
  { src: "/images/svatba-komplet.jpg", alt: "Kompletní svatební výzdoba" },
];

export default function SvatbyPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* Hero */}
        <div className="relative pt-16 md:pt-20 min-h-[60vh] flex items-end bg-gradient-to-br from-rose-900/80 via-[#2D5016]/60 to-[#8B6914]/80 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/kategorie-svatby.jpg"
              alt="Svatební floristika"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-24 w-full">
            <nav aria-label="Drobečková navigace" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Domů</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Svatby</li>
              </ol>
            </nav>
            <p className="text-rose-200 text-sm font-semibold uppercase tracking-widest mb-3">💍 Svatební floristika</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-2xl">
              Váš nejkrásnější den <span className="italic text-rose-200">zaslouží krásu</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mb-8">
              Adéla věnuje každé svatbě tolik péče, jako by to byla její vlastní.
              Konzultace zdarma, vizualizace předem, plná koordinace v den D.
            </p>
            <Link
              href="#konzultace"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#2D5016] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Domluvit konzultaci zdarma
            </Link>
          </div>

          <div aria-hidden="true" className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-10 md:h-14">
              <path d="M0 48V24C360 0 720 48 1080 24C1260 12 1380 36 1440 24V48H0Z" fill="#F7F5F0" />
            </svg>
          </div>
        </div>

        {/* Jak to probíhá */}
        <section className="bg-[#F7F5F0] py-14 md:py-20" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn animation="fade-up" className="text-center mb-12">
              <p className="text-[#8B6914] text-sm font-semibold uppercase tracking-widest mb-3">Jak to funguje</p>
              <h2 id="process-heading" className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#2D5016]">
                Od snu k realitě ve 4 krocích
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", icon: "💬", title: "Konzultace", desc: "Sejdeme se nebo zavoláme. Probereme Vaše představy, barevnou paletu a styl." },
                { step: "02", icon: "✏️", title: "Návrh", desc: "Adéla připraví vizualizaci a ceník přesně pro Vaši svatbu." },
                { step: "03", icon: "🌸", title: "Příprava", desc: "V den před svatbou aranžujeme čerstvě dovezené květiny." },
                { step: "04", icon: "💍", title: "Realizace", desc: "V den D doručíme a instalujeme vše na místě. Vy se nemusíte starat o nic." },
              ].map(({ step, icon, title, desc }, i) => (
                <AnimateIn key={step} animation="fade-up" delay={i * 100}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#2D5016]/10 text-2xl mb-4" aria-hidden="true">
                      {icon}
                    </div>
                    <p className="text-[#8B6914] text-xs font-bold uppercase tracking-wider mb-1">Krok {step}</p>
                    <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[#2D5016] text-lg mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Ceníkové balíčky */}
        <section className="bg-white py-14 md:py-20" aria-labelledby="pricing-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn animation="fade-up" className="text-center mb-12">
              <p className="text-[#8B6914] text-sm font-semibold uppercase tracking-widest mb-3">Ceník</p>
              <h2 id="pricing-heading" className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#2D5016] mb-4">
                Ceníkové balíčky
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Ceny jsou orientační – každá svatba je jedinečná a finální cenu sestavíme spolu na konzultaci.
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {SVATEBNI_BALICKY.map((pkg, i) => (
                <AnimateIn key={pkg.id} animation="zoom-in" delay={i * 100}>
                  <div className={`rounded-2xl p-7 h-full flex flex-col ${pkg.popular ? "bg-[#2D5016] text-white ring-2 ring-[#2D5016] scale-[1.02]" : "bg-[#F7F5F0] text-gray-800"}`}>
                    {pkg.popular && (
                      <span className="self-start text-xs font-bold bg-[#8B6914] text-white px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                        Nejoblíbenější
                      </span>
                    )}
                    <h3 className={`font-[family-name:var(--font-playfair)] font-bold text-xl mb-1 ${pkg.popular ? "text-white" : "text-[#2D5016]"}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-2xl font-bold mb-5 ${pkg.popular ? "text-[#e8c96a]" : "text-[#8B6914]"}`}>
                      {pkg.price}
                    </p>
                    <ul className="space-y-2.5 flex-1 mb-6">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 mt-0.5 ${pkg.popular ? "text-[#e8c96a]" : "text-[#2D5016]"}`} aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className={pkg.popular ? "text-white/85" : "text-gray-700"}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#konzultace"
                      className={`block text-center px-5 py-3 rounded-full font-semibold text-sm transition-colors ${pkg.popular ? "bg-white text-[#2D5016] hover:bg-gray-100" : "bg-[#2D5016] text-white hover:bg-[#3a6820]"}`}
                    >
                      Vybrat balíček
                    </Link>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="bg-[#F7F5F0] py-14 md:py-20" aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn animation="fade-up" className="text-center mb-10">
              <p className="text-[#8B6914] text-sm font-semibold uppercase tracking-widest mb-3">Naše práce</p>
              <h2 id="gallery-heading" className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#2D5016]">
                Inspirace pro Vaši svatbu
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {GALLERY_ITEMS.map(({ src, alt }, i) => (
                <AnimateIn key={src} animation="zoom-in" delay={i * 80}>
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <Image src={src} alt={alt} width={400} height={400} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2D5016]/20 to-[#8B6914]/15" />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Kontaktní formulář / CTA */}
        <section id="konzultace" className="bg-[#2D5016] text-white py-14 md:py-20" aria-labelledby="contact-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn animation="fade-up" className="text-center mb-10">
              <p className="text-[#e8c96a] text-sm font-semibold uppercase tracking-widest mb-3">Konzultace zdarma</p>
              <h2 id="contact-heading" className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
                Napište Adéle
              </h2>
              <p className="text-white/75 max-w-xl mx-auto">
                Vyplňte formulář a Adéla se ozve do 24 hodin pro domluvení konzultace.
              </p>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={100}>
              <form
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-4"
                aria-label="Formulář pro svatební konzultaci"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="jmeno" className="block text-sm font-medium text-white/80 mb-1.5">Jméno *</label>
                    <input id="jmeno" name="jmeno" type="text" required autoComplete="given-name" placeholder="Vaše jméno"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/40 focus:border-white focus:bg-white/20 outline-none transition text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">E-mail *</label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="vas@email.cz"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/40 focus:border-white focus:bg-white/20 outline-none transition text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="datum" className="block text-sm font-medium text-white/80 mb-1.5">Datum svatby</label>
                  <input id="datum" name="datum" type="date"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white outline-none focus:border-white focus:bg-white/20 transition text-sm" />
                </div>
                <div>
                  <label htmlFor="zprava" className="block text-sm font-medium text-white/80 mb-1.5">Vaše představy</label>
                  <textarea id="zprava" name="zprava" rows={4} placeholder="Jaké barvy máte rádi? Jaký styl? Počet hostů, místo konání..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/40 focus:border-white focus:bg-white/20 outline-none transition text-sm resize-none" />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#8B6914] hover:bg-[#a07c1a] text-white font-bold rounded-xl transition-colors text-sm"
                >
                  Odeslat a domluvit konzultaci zdarma
                </button>
                <p className="text-white/50 text-xs text-center">Odpovídám do 24 hodin. Žádný závazek.</p>
              </form>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
