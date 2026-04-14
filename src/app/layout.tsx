import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";

/* ── Fonty ────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

/* ── Metadata (SEO + Open Graph) ──────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://kvetinynadmuseem.cz"),
  title: {
    default: "Květiny nad Museem — Květinový atelier na Vinohradech",
    template: "%s · Květiny nad Museem",
  },
  description:
    "Květinový atelier naproti Národnímu muzeu. Dárkové kytice, svatební a smuteční floristika, rozvoz po Praze. Vinohradská 6, Praha 2.",
  keywords: [
    "květinový atelier Praha",
    "květiny Vinohrady",
    "rozvoz kytic Praha",
    "svatební floristika Praha",
    "smuteční vazby",
    "luxusní kytice Praha",
  ],
  authors: [{ name: "Květiny nad Museem" }],
  creator: "Květiny nad Museem",
  publisher: "Květiny nad Museem",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://kvetinynadmuseem.cz",
    siteName: "Květiny nad Museem",
    title: "Květiny nad Museem — Květinový atelier na Vinohradech",
    description:
      "Květinový atelier naproti Národnímu muzeu. Dárkové kytice, svatební a smuteční floristika, rozvoz po Praze.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Květiny nad Museem — Atelier Vinohradská 6, naproti Národnímu muzeu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Květiny nad Museem — Atelier Vinohrady",
    description:
      "Květinový atelier naproti Národnímu muzeu. Rozvoz po Praze.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://kvetinynadmuseem.cz",
  },
};

/* ── Root Layout ──────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="cs"
      className={`${cormorant.variable} ${lato.variable} ${greatVibes.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal font-body font-light">
        {children}
      </body>
    </html>
  );
}
