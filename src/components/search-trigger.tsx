"use client";

import { openCommandPalette } from "./command-palette";
import { SearchIcon } from "./icons";

const preloadCommandPalette = () => {
  void import("./command-palette");
};

export function SearchTrigger() {
  return (
    <button
      type="button"
      aria-label="Search… open command palette"
      aria-haspopup="dialog"
      aria-controls="command-palette"
      onClick={openCommandPalette}
      onMouseEnter={preloadCommandPalette}
      onFocus={preloadCommandPalette}
      className="hidden h-8 items-center gap-2 rounded-md border border-line px-2.5 font-mono text-xs text-muted transition-colors hover:bg-accent-muted hover:text-foreground sm:inline-flex"
    >
      <SearchIcon className="size-3.5" />
      <span>Search…</span>
      <span aria-hidden className="font-mono">
        ⌘K
      </span>
    </button>
  );
}
