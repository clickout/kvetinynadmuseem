import { SectionNumber } from "@/components/SectionNumber";
import { GoldHairline } from "@/components/GoldHairline";

interface PageHeroProps {
  /** Section number like „01" */
  number?: string;
  /** Eyebrow label (uppercase) */
  eyebrow: string;
  /** Main heading (serif) */
  title: string;
  /** Optional subtitle / intro paragraph */
  subtitle?: string;
  /** Background variant */
  variant?: "light" | "dark";
  /** Center or left-align */
  align?: "center" | "left";
}

/**
 * Reusable hero pro vnitřní stránky (/o-nas, /kontakt, /blog, …).
 * Minimalistický, serifní nadpis, zlatá linka.
 */
export function PageHero({
  number = "01",
  eyebrow,
  title,
  subtitle,
  variant = "light",
  align = "center",
}: PageHeroProps) {
  const isDark = variant === "dark";
  const bgClass = isDark ? "bg-emerald-deep text-ivory" : "bg-ivory text-charcoal";
  const subtitleClass = isDark ? "text-ivory/70" : "text-graphite";
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section className={`${bgClass} pt-36 md:pt-44 pb-16 md:pb-24 relative`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className={`flex flex-col ${alignClass} gap-8`}>
          <SectionNumber
            number={number}
            label={eyebrow}
            variant={isDark ? "light" : "dark"}
          />
          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg md:text-xl ${subtitleClass} leading-relaxed max-w-2xl`}>
              {subtitle}
            </p>
          )}
          <GoldHairline variant="center" className="mt-4" />
        </div>
      </div>
    </section>
  );
}
