import type { ReactNode } from "react";

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-badge items-center rounded-full border border-line bg-accent-muted px-2.5 font-mono text-[11px] leading-none text-foreground/80">
      {children}
    </span>
  );
}
