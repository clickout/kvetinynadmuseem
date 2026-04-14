interface MonogramProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Monogram K·M — značkový brand mark pro Květiny nad Museem.
 * Serifní iniciály spojené středovou tečkou ve zlaté.
 */
export function Monogram({ className = "", size = 48, color = "#C9A961" }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-label="Květiny nad Museem monogram"
      className={className}
    >
      {/* Zlatý tenký rámeček */}
      <circle cx="50" cy="50" r="46" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <circle cx="50" cy="50" r="44" fill="none" stroke={color} strokeWidth="0.5" />

      {/* K · M v serifním duchu */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill={color}
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="32"
        fontWeight="400"
        letterSpacing="2"
      >
        K·M
      </text>
    </svg>
  );
}
