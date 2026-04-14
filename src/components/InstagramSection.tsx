import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

/*
 * ── Instagram Feed ─────────────────────────────────────────────────
 * Implementační poznámka:
 * Instagram Graph API vyžaduje:
 *   1. Business / Creator účet na Instagramu
 *   2. Facebook App s Instagram Basic Display nebo Graph API přístupem
 *   3. Long-lived access token (obnovovat každých ~60 dní nebo použít CRON)
 *
 * Pro produkci doporučuji:
 *   - knihovnu `instagram-feed` nebo vlastní API route (/api/instagram)
 *   - cachování přes Next.js fetch({ next: { revalidate: 3600 } })
 *   - fallback na statická data při selhání API
 *
 * Momentálně zobrazujeme placeholder data.
 * ──────────────────────────────────────────────────────────────────
 */

/* Placeholder data – nahradit daty z Instagram API */
const INSTAGRAM_POSTS = [
  {
    id: "1",
    image: "/images/ig-1.jpg",
    alt: "Barevná jarní kytice z tulipánů a narcisů",
    likes: 142,
    caption: "Jarní nálada v celé kráse 🌷 #kytice #jaro #Praha",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "2",
    image: "/images/ig-2.jpg",
    alt: "Nevěstinská kytice z bílých pivoněk a eukalyptu",
    likes: 218,
    caption: "Krásná svatba v sobotu 💍 #svatba #wedding #floristika",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "3",
    image: "/images/ig-3.jpg",
    alt: "Nová kolekce orchidejí na prodejně",
    likes: 97,
    caption: "Nové orchideje přijely! 🌸 #orchidej #pokojovérostliny",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "4",
    image: "/images/ig-4.jpg",
    alt: "Letní kytice z slunečnic a kopretiny",
    likes: 185,
    caption: "Léto v kytici ☀️ #slunečnice #léto #kvetiny",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "5",
    image: "/images/ig-5.jpg",
    alt: "Rustikální aranžmá z sušených květin",
    likes: 134,
    caption: "Sušené kytice – trend, který nekončí 🌾 #bohostyl #sušenékytice",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "6",
    image: "/images/ig-6.jpg",
    alt: "Detail výlohy prodejny s sezónními aranžmá",
    likes: 209,
    caption: "Výloha je připravena na víkend 🌿 #Praha #Vinohrady #kvetiny",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
] as const;

/**
 * InstagramSection – grid 3×2 posledních příspěvků.
 * Na mobilech 2×3, na desktopu 3×2.
 */
export function InstagramSection() {
  return (
    <section
      aria-labelledby="instagram-heading"
      className="py-16 md:py-24 bg-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nadpis */}
        <AnimateIn animation="fade-up" className="text-center mb-10 md:mb-12">
          <p className="text-[#8B6914] text-sm font-semibold uppercase tracking-widest mb-3">
            Sledujte nás
          </p>
          <h2
            id="instagram-heading"
            className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D5016] mb-4"
          >
            Instagram feed
          </h2>
          <a
            href="https://www.instagram.com/kvetinynadmuseem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2D5016] text-sm transition-colors"
            aria-label="Přejít na Instagram profil @kvetinynadmuseem (otevře se v novém okně)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @kvetinynadmuseem
          </a>
        </AnimateIn>

        {/* Instagram grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
          role="list"
          aria-label="Instagram příspěvky"
        >
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label={`Instagram příspěvek: ${post.alt} – ${post.likes} likes`}
              className="group relative block aspect-square overflow-hidden rounded-xl bg-gray-100 focus-visible:ring-2 focus-visible:ring-[#2D5016] focus-visible:ring-offset-2"
            >
              {/* Obrázek */}
              {/*
                TODO: Nahradit placeholder obrázky daty z Instagram Graph API.
                Endpoint: GET https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,permalink,timestamp&access_token={TOKEN}
              */}
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"

              />

              {/* Fallback gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2D5016]/30 via-[#8B6914]/20 to-[#2D5016]/10"
              />

              {/* Hover overlay s likes */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span className="font-semibold text-sm">{post.likes}</span>
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2 px-4">{post.caption}</p>
                </div>
              </div>

              {/* Instagram ikona – vždy viditelná */}
              <div
                aria-hidden="true"
                className="absolute top-2 right-2 w-7 h-7 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Tlačítko – sledovat */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/kvetinynadmuseem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#2D5016] text-[#2D5016] font-semibold rounded-full hover:bg-[#2D5016] hover:text-white transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Sledovat na Instagramu
          </a>
        </div>
      </div>
    </section>
  );
}
