interface SectionNumberProps {
  number: string;
  label: string;
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Markér kapitoly — „01 — NAŠE ŘEMESLO".
 * Používá se nahoře v každé sekci pro editorální pocit.
 */
export function SectionNumber({
  number,
  label,
  variant = "dark",
  className = "",
}: SectionNumberProps) {
  const isLight = variant === "light";
  const numberColor = isLight ? "text-gold-champagne" : "text-gold-deep";
  const labelColor = isLight ? "text-ivory/80" : "text-charcoal/80";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className={`font-display text-sm ${numberColor} tracking-[0.2em]`}>
        {number}
      </span>
      <span className="w-10 h-px bg-gold-champagne/60" aria-hidden="true" />
      <span
        className={`text-[11px] font-medium uppercase tracking-[0.3em] ${labelColor}`}
      >
        {label}
      </span>
    </div>
  );
}
