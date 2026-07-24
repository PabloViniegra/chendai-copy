import type { ReactNode } from "react";

type TechBadgeVariant = "filled" | "outline";

const variantClass: Record<TechBadgeVariant, string> = {
  filled: "bg-accent-muted text-foreground/80",
  outline: "text-muted",
};

type TechBadgeProps = {
  children: ReactNode;
  variant?: TechBadgeVariant;
};

export function TechBadge({ children, variant = "filled" }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex h-badge items-center rounded-full border border-line px-2.5 font-mono text-xs leading-none ${variantClass[variant]}`}
    >
      {children}
    </span>
  );
}
