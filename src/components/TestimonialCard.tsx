import type { Testimonial } from "@/lib/reviews";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

/**
 * TestimonialCard — editorální karta s pull-quotem a signaturou.
 */
export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <article className="group bg-ivory border border-gold-champagne/30 hover:border-emerald-deep/50 transition-colors p-8 md:p-10 h-full flex flex-col">
      <p className="font-display text-4xl text-gold-champagne leading-none mb-6">
        {String(index + 1).padStart(2, "0")}
      </p>
      <blockquote className="flex-1 mb-8">
        <p className="font-display font-light text-lg md:text-xl text-charcoal leading-[1.5]">
          „{testimonial.text}"
        </p>
      </blockquote>
      <footer className="pt-6 border-t border-gold-champagne/30 space-y-1">
        <p className="font-display text-base text-emerald-deep">{testimonial.author}</p>
        <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gold-deep">
          {testimonial.occasion} · {testimonial.location}
        </p>
        <p className="text-xs text-graphite/60">{testimonial.date}</p>
      </footer>
    </article>
  );
}
