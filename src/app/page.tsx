import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer } from "@/components/Footer";

/**
 * Homepage – Květiny nad Museem
 *
 * Struktura:
 * 1. JSON-LD (Schema.org LocalBusiness – Florist)
 * 2. Header (fixní navigace)
 * 3. Hero (fullscreen banner s CTA)
 * 4. Kategorie (grid 2×2)
 * 5. O nás (příběh + foto prodejny)
 * 6. Recenze (carousel)
 * 7. Instagram feed
 * 8. Footer (kontakt, mapa, sociální sítě)
 */
export default function HomePage() {
  return (
    <>
      {/* Strukturovaná data pro Google */}
      <JsonLd />

      {/* Přeskočit na hlavní obsah (přístupnost) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#2D5016] focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Přeskočit na hlavní obsah
      </a>

      {/* Navigace */}
      <Header />

      {/* Hlavní obsah stránky */}
      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Kategorie */}
        <CategoriesSection />

        {/* 3. O nás */}
        <AboutSection />

        {/* 4. Recenze */}
        <ReviewsSection />

        {/* 5. Instagram */}
        <InstagramSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
