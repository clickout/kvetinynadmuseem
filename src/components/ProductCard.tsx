import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  badge?: string;
  slug: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard – karta produktu sdílená napříč kategoriemi.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <Link href={`/obchod/${product.category}/${product.slug}`} className="block">
        {/* Obrázek */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2D5016]/15 to-[#8B6914]/10"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-[#8B6914] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-[#2D5016] text-base mb-1 group-hover:text-[#3a6820] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#2D5016] text-base">
              {product.price}
            </span>
            <span className="text-[#2D5016] text-xs font-medium flex items-center gap-1 group-hover:gap-1.5 transition-all">
              Detail
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
