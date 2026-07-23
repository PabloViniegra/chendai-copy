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
    <>
      {expanded ? children : null}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mt-2 font-mono text-xs tracking-widest text-muted transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </>
  );
}
