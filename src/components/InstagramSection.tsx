import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionNumber } from "@/components/SectionNumber";

/* Placeholder data — nahradit Instagram Graph API. */
const INSTAGRAM_POSTS = [
  {
    id: "1",
    image: "/images/ig-1.jpg",
    alt: "Jarní kytice z tulipánů a narcisů",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "2",
    image: "/images/ig-2.jpg",
    alt: "Svatební kytice z pivoněk a eukalyptu",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "3",
    image: "/images/ig-3.jpg",
    alt: "Nová kolekce orchidejí",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "4",
    image: "/images/ig-4.jpg",
    alt: "Letní kytice ze slunečnic",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "5",
    image: "/images/ig-5.jpg",
    alt: "Rustikální aranžmá ze sušených květin",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
  {
    id: "6",
    image: "/images/ig-6.jpg",
    alt: "Detail výlohy atelieru",
    permalink: "https://www.instagram.com/kvetinynadmuseem/",
  },
] as const;

/**
 * InstagramSection — editorální grid 3×2 (mobile 2×3), tmavý hover s zlatým monogramem.
 */
export function InstagramSection() {
  return (
    <section
      aria-labelledby="instagram-heading"
      className="bg-ivory py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Hlavička */}
        <AnimateIn animation="fade-up" className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <SectionNumber number="06" label="Deník · Instagram" variant="dark" className="mb-6" />
            <h2
              id="instagram-heading"
              className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] tracking-tight"
            >
              Záznamy z atelieru.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/kvetinynadmuseem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-deep hover:text-emerald-deep transition-colors group"
            aria-label="Sledovat na Instagramu @kvetinynadmuseem (otevře se v novém okně)"
          >
            @kvetinynadmuseem
            <span
              aria-hidden="true"
              className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16"
            />
          </a>
        </AnimateIn>

        {/* Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
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
              aria-label={post.alt}
              className="group relative block aspect-square overflow-hidden bg-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-champagne focus-visible:outline-offset-2"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
              />

              {/* Hover overlay — emerald tinted s zlatou ikonou */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-emerald-deep/0 group-hover:bg-emerald-deep/60 transition-colors duration-500 flex items-center justify-center"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
