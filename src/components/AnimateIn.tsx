"use client";

import { useInView } from "@/hooks/useInView";

type AnimationType = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";

interface AnimateInProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const INITIAL: Record<AnimationType, string> = {
  "fade-up":    "opacity-0 translate-y-10",
  "fade-in":    "opacity-0",
  "fade-left":  "opacity-0 -translate-x-10",
  "fade-right": "opacity-0 translate-x-10",
  "zoom-in":    "opacity-0 scale-95",
};

const VISIBLE = "opacity-100 translate-y-0 translate-x-0 scale-100";

/**
 * AnimateIn – scroll-triggered animace pomocí IntersectionObserver.
 * Vždy renderuje <div> – styly aplikovány při vstupu do viewportu.
 */
export function AnimateIn({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.15,
}: AnimateInProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-transform ${INITIAL[animation]} ${inView ? VISIBLE : ""} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
