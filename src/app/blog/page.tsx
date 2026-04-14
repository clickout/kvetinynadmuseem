import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/BlogCard";
import { AnimateIn } from "@/components/AnimateIn";
import { GoldHairline } from "@/components/GoldHairline";
import { NewsletterInline } from "@/components/NewsletterInline";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Deník | Květiny nad Museem",
  description:
    "Zápisky z našeho atelieru — péče o květiny, sezonní úvahy, svatební rady a praktické návody.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          number="07"
          eyebrow="Deník"
          title="Z našeho atelieru."
          subtitle="Praktické návody, sezonní zápisky a úvahy o řemesle. Občas."
        />

        <section className="bg-ivory pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <Breadcrumbs
                items={[
                  { href: "/", label: "Domů" },
                  { label: "Deník" },
                ]}
              />
            </div>

            {/* Featured */}
            {featured && (
              <AnimateIn animation="fade-up" className="mb-20">
                <BlogCard post={featured} variant="featured" />
              </AnimateIn>
            )}

            <GoldHairline variant="solid" className="mb-16" />

            {/* Zbytek článků */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {rest.map((post, i) => (
                <AnimateIn
                  key={post.slug}
                  animation="fade-up"
                  delay={i * 100}
                  duration={700}
                >
                  <BlogCard post={post} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <NewsletterInline />
      </main>
      <Footer />
    </>
  );
}
