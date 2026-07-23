"use client";

import { openCommandPalette } from "./command-palette";
import { SearchIcon } from "./icons";
import { NavMobile } from "./nav-mobile";

const navItems = [
  { href: "/components", label: "Components" },
  { href: "/blocks", label: "Blocks" },
  { href: "/blog", label: "Blog" },
  { href: "/sponsors", label: "Sponsors" },
];

export function SiteBottomNav() {
  return (
    <div className="fixed bottom-[calc(0.5rem+env(safe-area-inset-bottom))] left-1/2 z-50 flex -translate-x-1/2 items-center rounded-xl border border-line bg-background px-2 py-1 shadow-md sm:hidden">
      <button
        type="button"
        onClick={openCommandPalette}
        className="flex h-8 min-w-20 items-center justify-center gap-2 rounded-md px-3 text-xs text-foreground/80"
        aria-label="Menu — open command palette"
        aria-haspopup="dialog"
        aria-controls="command-palette"
      >
        <SearchIcon className="size-3.5" />
        <span>Menu</span>
      </button>
      <span aria-hidden className="mx-1 h-6 w-px bg-line" />
      <NavMobile items={navItems} />
    </div>
  );
}
