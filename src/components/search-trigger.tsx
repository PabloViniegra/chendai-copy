"use client";

import { openCommandPalette } from "./command-palette";
import { SearchIcon } from "./icons";

export function SearchTrigger() {
  return (
    <button
      type="button"
      aria-label="Open command palette"
      onClick={openCommandPalette}
      className="hidden h-8 items-center gap-2 rounded-md border border-line px-2.5 font-mono text-xs text-muted transition-colors hover:bg-accent-muted hover:text-foreground focus-visible:outline-none sm:inline-flex"
    >
      <SearchIcon className="size-3.5" />
      <span>⌘K</span>
    </button>
  );
}
