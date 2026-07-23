"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type GlowCardGridProps = {
  children: ReactNode;
};

export function GlowCardGrid({ children }: GlowCardGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;

    const handlePointerMove = (event: PointerEvent) => {
      const cards = grid.querySelectorAll<HTMLElement>("[data-glow-card]");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty("--glow-x", `${x}px`);
        card.style.setProperty("--glow-y", `${y}px`);
      });
    };

    grid.addEventListener("pointermove", handlePointerMove);
    return () => grid.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return <div ref={ref}>{children}</div>;
}
