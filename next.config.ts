import type { NextConfig } from "next";

/**
 * Next.js konfigurace – Květiny nad Museem
 */
const nextConfig: NextConfig = {
  // Optimalizace obrázků
  images: {
    // Povolené externí domény pro Instagram API (cdn.cdninstagram.com, scontent.cdninstagram.com)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "scontent.xx.fbcdn.net",
      },
    ],
    // Povolené hodnoty quality pro next/image
    qualities: [75, 90],
    // Preferované formáty (WebP + AVIF pro lepší kompresi)
    formats: ["image/avif", "image/webp"],
    // Velikosti pro responzivní obrázky
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // HTTP hlavičky pro bezpečnost a výkon
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      // Cache statických assetů
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Komprese
  compress: true,

  // Výkonnostní optimalizace
  experimental: {
    optimizeCss: false, // Vypnuto – Tailwind CSS to řeší sám
  },
};

export default nextConfig;
