"use client";

import { type ReactNode, useState } from "react";

type ShowMoreProps = {
  limit: number;
  total: number;
  children: ReactNode;
};

export function ShowMore({ limit, total, children }: ShowMoreProps) {
  const [expanded, setExpanded] = useState(false);

  if (total <= limit) {
    return <>{children}</>;
  }

  return (
    <div>
      {expanded ? children : null}
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="inline-flex h-8 items-center gap-2 rounded-md border border-line bg-accent-muted px-3 text-sm font-medium text-ink-body transition-colors hover:bg-accent-muted/70 hover:text-foreground active:translate-y-px"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}
