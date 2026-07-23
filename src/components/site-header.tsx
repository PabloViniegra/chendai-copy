import Link from "next/link";
import { NavMobile } from "./nav-mobile";
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
    <header className="sticky top-0 z-50 w-full border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-header w-full max-w-3xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          aria-label="Home"
          className="font-mono text-sm font-medium tracking-tight"
        >
          chanhdai.com
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm md:flex"
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

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/ncdai/chanhdai.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="2.1k GitHub stars"
            className="hidden items-center gap-2 rounded-md px-2 py-1 font-mono text-xs text-foreground/70 transition-colors hover:bg-accent-muted hover:text-foreground sm:inline-flex"
          >
            2.1k
          </a>

          <SearchTrigger />

          <ThemeToggle />

          <NavMobile items={navItems} />
        </div>
      </div>
    </header>
  );
}
