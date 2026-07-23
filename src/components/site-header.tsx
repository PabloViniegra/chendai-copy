import Link from "next/link";
import { ChanhDaiMark } from "./chanhdai-mark";
import { GitHubIcon } from "./icons";
import { SearchTrigger } from "./search-trigger";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/components", label: "Components" },
  { href: "/blocks", label: "Blocks" },
  { href: "/blog", label: "Blog" },
  { href: "/sponsors", label: "Sponsors" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-header items-center gap-2 border-r border-line pr-2 sm:gap-4 md:max-w-3xl">
        <Link href="/" aria-label="Home" className="flex shrink-0">
          <ChanhDaiMark className="h-8 w-16" />
        </Link>

        <div className="flex-1" />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm sm:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <span aria-hidden className="mx-2 hidden h-5 w-px bg-line sm:block" />
          <SearchTrigger />
          <span aria-hidden className="mx-2 hidden h-5 w-px bg-line sm:block" />
          <a
            href="https://github.com/ncdai/chanhdai.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="2.1k GitHub stars"
            className="hidden h-8 items-center gap-1.5 rounded-md px-2 text-xs text-foreground/70 transition-colors hover:bg-accent-muted hover:text-foreground sm:inline-flex"
          >
            <GitHubIcon className="size-4" />
            <span className="font-mono">2.1k</span>
          </a>
          <span aria-hidden className="mx-2 h-5 w-px bg-line" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
