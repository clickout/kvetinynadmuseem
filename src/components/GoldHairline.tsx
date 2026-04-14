interface GoldHairlineProps {
  variant?: "solid" | "fade" | "center";
  className?: string;
}

/**
 * 1px zlatý separátor — luxury design detail.
 * - solid: plná tenká linka přes celou šířku
 * - fade: přechází od průhledné ke zlaté a zpět
 * - center: jen krátký úsek uprostřed (~80px)
 */
export function GoldHairline({ variant = "fade", className = "" }: GoldHairlineProps) {
  if (variant === "center") {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        <span className="block w-20 h-px bg-gold-champagne" />
      </div>
    );
  }

  if (variant === "solid") {
    return (
      <div
        className={`h-px bg-gold-champagne/60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return <div className={`gold-hairline ${className}`} aria-hidden="true" />;
}
