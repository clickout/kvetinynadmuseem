import type { Product } from "@/components/ProductCard";

/* ============================================================
   Datová vrstva – produkty / ceník
   TODO: Nahradit skutečným CMS nebo headless e-commerce
         (Shopify Storefront API, Sanity, nebo Prismic).
   ============================================================ */

export const DARKOVE_KYTICE: Product[] = [
  { id: "d1", name: "Romantická červená", description: "Buket červených růží s gypsophilou, zabalený v kraftovém papíru.", price: "od 650 Kč", image: "/images/produkt-cervene-ruze.jpg", alt: "Buket červených růží", badge: "Bestseller", slug: "romanticka-cervena", category: "darkove-kytice" },
  { id: "d2", name: "Jarní radost", description: "Sezónní mix tulipánů, narcisů a sněženek ve veselých barvách.", price: "od 480 Kč", image: "/images/produkt-jarni.jpg", alt: "Jarní kytice z tulipánů a narcisů", slug: "jarni-radost", category: "darkove-kytice" },
  { id: "d3", name: "Pivoňková něha", description: "Nádherné pivoňky ve světle růžových odstínech s eukalyptem.", price: "od 750 Kč", image: "/images/produkt-pivonky.jpg", alt: "Kytice z pivoněk", badge: "Sezónní", slug: "pivonkova-neha", category: "darkove-kytice" },
  { id: "d4", name: "Slunečnicový úsměv", description: "Velká slunečnice jako dominanta, doplněná sezónními doplňky.", price: "od 420 Kč", image: "/images/produkt-slunecnice.jpg", alt: "Kytice se slunečnicemi", slug: "slunecnicovy-usmev", category: "darkove-kytice" },
  { id: "d5", name: "Lila sny", description: "Levandule, lila frézie a bílé alstromerie – čistá elegance.", price: "od 550 Kč", image: "/images/produkt-lila.jpg", alt: "Fialová kytice z frézie a levandule", slug: "lila-sny", category: "darkove-kytice" },
  { id: "d6", name: "Divoká krása", description: "Volný buket ze sezónních polních květin ve stylu boho.", price: "od 390 Kč", image: "/images/produkt-polni.jpg", alt: "Polní buket ve stylu boho", slug: "divoka-krasa", category: "darkove-kytice" },
];

export const SMUTECNI_VAZBY: Product[] = [
  { id: "s1", name: "Bílý věnec", description: "Klasický kruhový věnec z bílých chryzantém a zeleně. Průměr 50 cm.", price: "od 1 200 Kč", image: "/images/produkt-venec-bily.jpg", alt: "Bílý smuteční věnec", slug: "bily-venec", category: "smutecni-vazby" },
  { id: "s2", name: "Smuteční kytice", description: "Pietní kytice z bílých lilií a zelených doplňků.", price: "od 850 Kč", image: "/images/produkt-smutecni-kytice.jpg", alt: "Bílá smuteční kytice z lilií", slug: "smutecni-kytice", category: "smutecni-vazby" },
  { id: "s3", name: "Srdce ze zeleně", description: "Aranžmá ve tvaru srdce ze zelených rostlin s bílými akcenty.", price: "od 1 500 Kč", image: "/images/produkt-srdce.jpg", alt: "Smuteční aranžmá ve tvaru srdce", slug: "srdce-ze-zelene", category: "smutecni-vazby" },
  { id: "s4", name: "Tichá lilie", description: "Jednoduchá a důstojná vazba z bílých orientálních lilií.", price: "od 680 Kč", image: "/images/produkt-lilie.jpg", alt: "Kytice z bílých lilií", slug: "ticha-lilie", category: "smutecni-vazby" },
  { id: "s5", name: "Věnec s mašlí", description: "Věnec z lesní zeleně a bílých chryzantém s hedvábnou stuhou.", price: "od 1 350 Kč", image: "/images/produkt-venec-masle.jpg", alt: "Věnec se stuhou", slug: "venec-s-masli", category: "smutecni-vazby" },
  { id: "s6", name: "Vazba na zakázku", description: "Individuální pietní vazba dle Vašich přání. Konzultace zdarma.", price: "dle dohody", image: "/images/produkt-zakazka.jpg", alt: "Smuteční aranžmá na zakázku", badge: "Individuální", slug: "zakazka", category: "smutecni-vazby" },
];

export const POKOJOVE_ROSTLINY: Product[] = [
  { id: "r1", name: "Orchidej Phalaenopsis", description: "Klasická pokojová orchidej ve výběru barev. Snadno pěstovatelná.", price: "od 380 Kč", image: "/images/produkt-orchidej.jpg", alt: "Bílá orchidej Phalaenopsis", badge: "Oblíbená", slug: "orchidej-phalaenopsis", category: "pokojove-rostliny" },
  { id: "r2", name: "Monstera deliciosa", description: "Velkolistá tropická rostlina, ideální dekorace moderního interiéru.", price: "od 590 Kč", image: "/images/produkt-monstera.jpg", alt: "Monstera deliciosa v květináči", slug: "monstera-deliciosa", category: "pokojove-rostliny" },
  { id: "r3", name: "Sada sukulentů", description: "Kolekce 3 sukulentů v keramických hrnících. Minimální péče.", price: "od 290 Kč", image: "/images/produkt-sukulenty.jpg", alt: "Sada tří sukulentů v keramice", slug: "sada-sukulentu", category: "pokojove-rostliny" },
  { id: "r4", name: "Pothos zlatý", description: "Nenáročná popínavá rostlina, čistí vzduch. Ideální pro začátečníky.", price: "od 220 Kč", image: "/images/produkt-pothos.jpg", alt: "Zlatý pothos v závěsném košíku", slug: "pothos-zlaty", category: "pokojove-rostliny" },
  { id: "r5", name: "Ficus lyrata", description: "Stromková houslistka – ikona moderního designu. Výška 80–120 cm.", price: "od 1 290 Kč", image: "/images/produkt-ficus.jpg", alt: "Ficus lyrata v dekorativním hrnci", badge: "Luxusní", slug: "ficus-lyrata", category: "pokojove-rostliny" },
  { id: "r6", name: "Calathea orbifolia", description: "Nádherně vzorované listy. Ozdoba každé místnosti.", price: "od 450 Kč", image: "/images/produkt-calathea.jpg", alt: "Calathea orbifolia", slug: "calathea-orbifolia", category: "pokojove-rostliny" },
];

/* Svatby nemají produkty – mají služby / ceník */
export const SVATEBNI_BALICKY = [
  { id: "sv1", name: "Základní balíček", items: ["Kytice nevěsty", "2× košíčky pro hosty", "Korsáž pro ženicha"], price: "od 4 500 Kč", popular: false },
  { id: "sv2", name: "Romantický balíček", items: ["Kytice nevěsty + hoďka", "4× košíčky pro hosty", "Korsáž pro ženicha + svědky", "Dekorace obřadního stolu"], price: "od 9 900 Kč", popular: true },
  { id: "sv3", name: "Kompletní svatba", items: ["Kytice nevěsty + hoďka", "6× košíčky", "Korsáže pro celý bridal party", "Výzdoba obřadní síně", "Dekorace 10 stolů na recepci", "Konzultace + vizualizace"], price: "od 22 000 Kč", popular: false },
];

export const ALL_PRODUCTS: Record<string, Product[]> = {
  "darkove-kytice": DARKOVE_KYTICE,
  "smutecni-vazby": SMUTECNI_VAZBY,
  "pokojove-rostliny": POKOJOVE_ROSTLINY,
};
