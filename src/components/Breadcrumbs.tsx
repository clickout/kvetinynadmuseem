import Link from "next/link";

interface BreadcrumbItem {
  href?: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Editorální drobečková navigace — malé uppercase linky oddělené čárkou.
 */
export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Drobečková navigace"
      className={`text-xs uppercase tracking-[0.25em] text-graphite ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-3">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="link-underline text-graphite hover:text-emerald-deep transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gold-deep" : ""}>{item.label}</span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-gold-champagne">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
