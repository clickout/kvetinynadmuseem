/**
 * JsonLd – Schema.org LocalBusiness structured data
 * Vkládáme inline do <head> přes Next.js Script nebo přímo jako script tag.
 */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "@id": "https://kvetinynadmuseem.cz/#business",
    name: "Květiny nad Museem",
    alternateName: "Kvetiny nad Museem",
    description:
      "Květinový atelier naproti Národnímu muzeu. Dárkové kytice, svatební a smuteční floristika, rozvoz po Praze. Patnáct let praxe pod vlastní značkou od roku 2024.",
    url: "https://kvetinynadmuseem.cz",
    telephone: "+420 XXX XXX XXX",
    email: "info@kvetinynadmuseem.cz",
    foundingDate: "2024",
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vinohradská 6",
      addressLocality: "Praha 2",
      addressRegion: "Hlavní město Praha",
      postalCode: "120 00",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.0755381,
      longitude: 14.4378005,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    hasMap: "https://maps.google.com/?q=Vinohradská+6+Praha+2",
    image: "https://kvetinynadmuseem.cz/og-image.jpg",
    logo: "https://kvetinynadmuseem.cz/logo.svg",
    sameAs: [
      "https://www.instagram.com/kvetinynadmuseem",
      "https://www.facebook.com/kvetinynadmuseem",
    ],
    servesCuisine: null, // N/A – Florist
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Produkty a služby",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Dárkové kytice",
            description: "Čerstvé sezónní kytice pro každou příležitost.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Smuteční vazby",
            description: "Věnce, větvičky a smuteční aranžmá.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Svatební floristika",
            description:
              "Kompletní svatební výzdoba – kytice nevěsty, kostýmky, dekorace stolů.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Pokojové rostliny",
            description: "Výběr pokojových rostlin pro domov i kancelář.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
