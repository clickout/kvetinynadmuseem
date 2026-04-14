import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";

/* ── Fonty ────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    default: "Květiny nad Museem | Květinářství Praha Vinohrady | Rozvoz kytic",
    template: "%s | Květiny nad Museem",
  },
  description:
    "Čerstvé kytice s rozvozem po Praze. Dárkové kytice, smuteční vazby, svatební floristika. Vinohradská 6, naproti Národnímu muzeu.",
  keywords: [
    "květinářství Praha",
    "kytice rozvoz Praha",
    "Vinohrady květiny",
    "svatební floristika Praha",
    "smuteční vazby",
    "dárkové kytice",
    "pokojové rostliny Praha",
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
    title: "Květiny nad Museem | Čerstvé kytice s rozvozem po Praze",
    description:
      "Čerstvé kytice s rozvozem po Praze. Dárkové kytice, smuteční vazby, svatební floristika. Naproti Národnímu muzeu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Květiny nad Museem – Výloha květinářství s pohledem na Národní muzeum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Květiny nad Museem | Čerstvé kytice Praha",
    description:
      "Čerstvé kytice s rozvozem po Praze. Dárkové kytice, smuteční vazby, svatební floristika.",
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
      className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F5F0] font-[family-name:var(--font-lato)]">
        {children}
      </body>
    </html>
  );
}
