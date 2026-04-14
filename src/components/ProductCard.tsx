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
  /** Editorální kód produktu, např. „№ 042" */
  code?: string;
}

interface ProductCardProps {
  product: Product;
  /** Pořadí v mřížce — používá se pro automatický kód, pokud není `code`. */
  index?: number;
}

/**
 * ProductCard — luxury editorální karta. Zlatý produktový kód,
 * serifní název, tenká spodní linka místo stínu.
 */
export function ProductCard({ product, index }: ProductCardProps) {
  const code =
    product.code ??
    `№ ${String((index ?? 0) + 1).padStart(3, "0")}`;

  return (
    <article className="group">
      <Link
        href={`/obchod/${product.category}/${product.slug}`}
        className="block"
        aria-label={`${product.name} – detail`}
      >
        {/* Obrázek */}
        <div className="relative aspect-[3/4] overflow-hidden bg-bone">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-ivory/95 text-emerald-deep text-[0.65rem] uppercase tracking-[0.25em] px-3 py-1">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="pt-5 pb-1 border-b border-gold-champagne/30 group-hover:border-emerald-deep transition-colors">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold-deep mb-2">
            {code}
          </p>
          <h3 className="font-display font-light text-xl md:text-2xl text-charcoal group-hover:text-emerald-deep transition-colors leading-tight mb-2">
            {product.name}
          </h3>
          <p className="text-graphite text-sm leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-baseline justify-between pb-4">
            <span className="font-display text-lg text-emerald-deep">
              {product.price}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.25em] text-gold-deep group-hover:text-emerald-deep transition-colors">
              Detail →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
