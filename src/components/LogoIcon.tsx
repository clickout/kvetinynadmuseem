interface LogoIconProps {
  className?: string;
  /** CSS color – přenáší se přes currentColor na stroke */
  color?: string;
  size?: number;
}

/**
 * LogoIcon – inline SVG ikona Květiny nad Museem.
 * Pivoňka rostoucí z kupole Národního muzea.
 * Renderuje se jako čistá liniová kresba, barvu řídí prop `color`.
 */
export function LogoIcon({ className = "", color = "#2D5016", size = 48 }: LogoIconProps) {
  const aspectRatio = 100 / 168;
  const width = size * aspectRatio;

  return (
    <svg
      viewBox="0 0 100 168"
      width={width}
      height={size}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {/* ══════════════════════════════════
          PIVOŇKA – vnější plátky (6)
          Elipsy rozmístěné po kružnici r=16
          od středu (50, 30)
      ══════════════════════════════════ */}
      {/* Nahoře */}
      <ellipse cx="50"    cy="14"   rx="7.5" ry="13" strokeWidth="2.3" />
      {/* Vpravo nahoře */}
      <ellipse cx="63.86" cy="22"   rx="7.5" ry="13" strokeWidth="2.3" transform="rotate(60,63.86,22)" />
      {/* Vpravo dole */}
      <ellipse cx="63.86" cy="38"   rx="7.5" ry="13" strokeWidth="2.3" transform="rotate(120,63.86,38)" />
      {/* Dole */}
      <ellipse cx="50"    cy="46"   rx="7.5" ry="13" strokeWidth="2.3" />
      {/* Vlevo dole */}
      <ellipse cx="36.14" cy="38"   rx="7.5" ry="13" strokeWidth="2.3" transform="rotate(240,36.14,38)" />
      {/* Vlevo nahoře */}
      <ellipse cx="36.14" cy="22"   rx="7.5" ry="13" strokeWidth="2.3" transform="rotate(300,36.14,22)" />

      {/* ── Vnitřní plátky (6, pootočené o 30°, r=9) ── */}
      <ellipse cx="54.5"  cy="22.2" rx="5"   ry="8.5" strokeWidth="2" transform="rotate(30,54.5,22.2)" />
      <ellipse cx="59"    cy="30"   rx="5"   ry="8.5" strokeWidth="2" transform="rotate(90,59,30)" />
      <ellipse cx="54.5"  cy="37.8" rx="5"   ry="8.5" strokeWidth="2" transform="rotate(150,54.5,37.8)" />
      <ellipse cx="45.5"  cy="37.8" rx="5"   ry="8.5" strokeWidth="2" transform="rotate(210,45.5,37.8)" />
      <ellipse cx="41"    cy="30"   rx="5"   ry="8.5" strokeWidth="2" transform="rotate(270,41,30)" />
      <ellipse cx="45.5"  cy="22.2" rx="5"   ry="8.5" strokeWidth="2" transform="rotate(330,45.5,22.2)" />

      {/* ── Střed pivoňky ── */}
      <circle cx="50" cy="30" r="6" strokeWidth="2.2" />
      <circle cx="50" cy="30" r="2.5" fill={color} stroke="none" />

      {/* ══════════════════════════════════
          STONEK + LISTY
      ══════════════════════════════════ */}
      <line x1="50" y1="60" x2="50" y2="104" strokeWidth="3" />

      {/* Levý list */}
      <path d="M50,83 C44,74 29,73 27,81 C27,89 41,91 50,87Z" strokeWidth="2.2" />
      <line x1="50" y1="83" x2="31" y2="81" strokeWidth="1.3" />

      {/* Pravý list */}
      <path d="M50,83 C56,74 71,73 73,81 C73,89 59,91 50,87Z" strokeWidth="2.2" />
      <line x1="50" y1="83" x2="69" y2="81" strokeWidth="1.3" />

      {/* ══════════════════════════════════
          KUPOLE NÁRODNÍHO MUZEA
      ══════════════════════════════════ */}
      {/* Hlavní oblouk kupole */}
      <path d="M17,109 Q17,81 50,77 Q83,81 83,109" strokeWidth="2.6" />

      {/* Žebra kupole */}
      <line x1="50"  y1="77"  x2="50"  y2="109" strokeWidth="1.5" />
      <line x1="44"  y1="78"  x2="38"  y2="109" strokeWidth="1.5" />
      <line x1="56"  y1="78"  x2="62"  y2="109" strokeWidth="1.5" />
      <line x1="33"  y1="83"  x2="21"  y2="109" strokeWidth="1.5" />
      <line x1="67"  y1="83"  x2="79"  y2="109" strokeWidth="1.5" />

      {/* Římsová linie základny kupole */}
      <line x1="13" y1="109" x2="87" y2="109" strokeWidth="2.6" />

      {/* ══════════════════════════════════
          BUDOVA (PRŮČELÍ)
      ══════════════════════════════════ */}
      <rect x="12" y="109" width="76" height="42" strokeWidth="2.6" />

      {/* Horizontální římsa */}
      <line x1="12" y1="122" x2="88" y2="122" strokeWidth="1.8" />

      {/* Levé obloukové okno */}
      <path d="M22,151 L22,134 Q22,126 29,126 Q36,126 36,134 L36,151" strokeWidth="2" />

      {/* Centrální portál (vyšší) */}
      <path d="M42,151 L42,128 Q42,120 50,120 Q58,120 58,128 L58,151" strokeWidth="2" />

      {/* Pravé obloukové okno */}
      <path d="M64,151 L64,134 Q64,126 71,126 Q78,126 78,134 L78,151" strokeWidth="2" />

      {/* ══════════════════════════════════
          SCHODY
      ══════════════════════════════════ */}
      <line x1="8"  y1="151" x2="92" y2="151" strokeWidth="2" />
      <line x1="4"  y1="157" x2="96" y2="157" strokeWidth="2" />
      <line x1="0"  y1="163" x2="100" y2="163" strokeWidth="2" />
    </svg>
  );
}
