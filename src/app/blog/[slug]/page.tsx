import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GoldHairline } from "@/components/GoldHairline";
import { Monogram } from "@/components/Monogram";
import { BlogCard } from "@/components/BlogCard";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/lib/blog";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Deník`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* ── Hero ──────────────────────────────────────── */}
        <article className="bg-ivory pt-36 md:pt-44 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <Breadcrumbs
              items={[
                { href: "/", label: "Domů" },
                { href: "/blog", label: "Deník" },
                { label: post.title },
              ]}
              className="mb-10"
            />

            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold-deep mb-8">
              <span>{post.category}</span>
              <span aria-hidden="true" className="w-6 h-px bg-gold-champagne/60" />
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span aria-hidden="true" className="w-6 h-px bg-gold-champagne/60" />
              <span>{post.readingTime}</span>
            </div>

            <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] tracking-tight mb-10">
              {post.title}
            </h1>

            <p className="text-graphite text-lg md:text-xl leading-relaxed mb-12 font-light">
              {post.excerpt}
            </p>

            <div className="relative aspect-[16/9] overflow-hidden bg-bone mb-16">
              <Image
                src={post.heroImage}
                alt={post.heroAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            {/* ── Tělo článku ────────────────────────────── */}
            <div className="space-y-6 text-charcoal text-base md:text-lg leading-[1.85] font-light">
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="font-display font-light text-2xl md:text-3xl text-emerald-deep leading-tight mt-12 mb-4 tracking-tight"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="my-12 pl-8 border-l border-gold-champagne"
                    >
                      <p className="font-display italic font-light text-2xl md:text-3xl text-emerald-deep leading-snug">
                        „{block.text}"
                      </p>
                    </blockquote>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="space-y-3 my-6 pl-6">
                      {block.items.map((item, j) => (
                        <li key={j} className="relative text-graphite">
                          <span
                            aria-hidden="true"
                            className="absolute -left-6 top-[0.85em] w-3 h-px bg-gold-champagne"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-graphite">
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* ── Podpis ─────────────────────────────────── */}
            <div className="mt-20 pt-10 border-t border-gold-champagne/40 flex items-center gap-6">
              <Monogram size={40} color="#0B3D2E" />
              <div>
                <p className="font-display text-lg text-emerald-deep">
                  Atelier Květiny nad Museem
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">
                  Vinohradská 6 · Praha 2
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ── Související ───────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-bone/40 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="flex items-end justify-between mb-14">
                <h2 className="font-display font-light text-3xl md:text-4xl text-charcoal leading-tight">
                  Dál z deníku
                </h2>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-deep hover:text-emerald-deep transition-colors group"
                >
                  Všechny zápisky
                  <span
                    aria-hidden="true"
                    className="block w-10 h-px bg-current transition-all duration-300 group-hover:w-16"
                  />
                </Link>
              </div>

              <GoldHairline variant="solid" className="mb-14" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
