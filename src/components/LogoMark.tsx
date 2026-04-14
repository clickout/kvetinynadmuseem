interface LogoMarkProps {
  /** Výška v px. Šířka se dopočítá z poměru 472:862. */
  size?: number;
  /** CSS barva (hex / rgb / var) — aplikuje se přes background-color přes mask. */
  color?: string;
  className?: string;
}

/**
 * LogoMark – brandové logo Květiny nad Museem.
 * Zdroj: /images/logo_faithful.png (472×862, černé linky na průhledném BG).
 * Použití přes CSS mask → barvu řídíme prop `color`, logo lze libovolně
 * barvit (gold na tmavém BG, emerald na světlém) bez nutnosti dalších verzí.
 */
export function LogoMark({
  size = 80,
  color = "#0B3D2E",
  className = "",
}: LogoMarkProps) {
  const aspectRatio = 472 / 862;
  const width = Math.round(size * aspectRatio);
  const url = "url('/images/logo_faithful.png')";

  return (
    <div
      role="img"
      aria-label="Květiny nad Museem"
      className={className}
      style={{
        width: `${width}px`,
        height: `${size}px`,
        backgroundColor: color,
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
