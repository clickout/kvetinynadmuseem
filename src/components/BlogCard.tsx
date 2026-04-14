import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
}

/**
 * BlogCard — editorální karta článku.
 * `featured` varianta zabírá více prostoru (1. článek v listingu).
 */
export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  if (variant === "featured") {
    return (
      <article className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <Link href={`/blog/${post.slug}`} className="block" aria-label={post.title}>
          <div className="relative aspect-[4/5] overflow-hidden bg-bone">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
            />
          </div>
        </Link>

        <div>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold-deep mb-6">
            <span>{post.category}</span>
            <span aria-hidden="true" className="w-6 h-px bg-gold-champagne/60" />
            <span>{post.readingTime}</span>
          </div>
          <Link href={`/blog/${post.slug}`} className="group/link">
            <h3 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.15] tracking-tight group-hover/link:text-emerald-deep transition-colors mb-6">
              {post.title}
            </h3>
          </Link>
          <p className="text-graphite text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <time dateTime={post.date} className="text-xs uppercase tracking-[0.25em] text-graphite/70">
              {post.dateLabel}
            </time>
            <span aria-hidden="true" className="w-6 h-px bg-gold-champagne/60" />
            <Link
              href={`/blog/${post.slug}`}
              className="text-xs uppercase tracking-[0.3em] text-emerald-deep hover:text-gold-deep transition-colors"
            >
              Přečíst
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group h-full flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block mb-6" aria-label={post.title}>
        <div className="relative aspect-[4/5] overflow-hidden bg-bone">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-deep mb-4">
          <span>{post.category}</span>
          <span aria-hidden="true" className="w-4 h-px bg-gold-champagne/60" />
          <span>{post.readingTime}</span>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-display font-light text-xl md:text-2xl text-charcoal leading-[1.2] group-hover:text-emerald-deep transition-colors mb-3">
            {post.title}
          </h3>
        </Link>
        <p className="text-graphite text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <time
          dateTime={post.date}
          className="text-xs uppercase tracking-[0.25em] text-graphite/70 pt-4 border-t border-gold-champagne/30"
        >
          {post.dateLabel}
        </time>
      </div>
    </article>
  );
}
