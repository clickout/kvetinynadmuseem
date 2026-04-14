import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { ScrollStory } from "@/components/ScrollStory";
import { CategoriesSection } from "@/components/CategoriesSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { NewsletterInline } from "@/components/NewsletterInline";
import { Footer } from "@/components/Footer";

/**
 * Homepage — Květiny nad Museem
 *
 * Pořadí kapitol:
 *  01. ScrollStory (úvodní scroll-driven příběh ve 4 kapitolách)
 *  02. Nabídka (Categories)
 *  03. Atelier (About)
 *  05. Doporučení (Reviews)
 *  06. Deník · Instagram
 *  07. Newsletter
 */
export default function HomePage() {
  return (
    <>
      <JsonLd />

      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ivory focus:text-emerald-deep focus:font-semibold focus:rounded focus:shadow-luxe"
      >
        Přeskočit na hlavní obsah
      </a>

      <Header />

      <main id="main-content">
        <ScrollStory />
        <CategoriesSection />
        <AboutSection />
        <ReviewsSection />
        <InstagramSection />
        <NewsletterInline />
      </main>

      <Footer />
    </>
  );
}
