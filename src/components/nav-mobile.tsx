"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

type NavMobileProps = {
  items: { href: string; label: string }[];
};

export function NavMobile({ items }: NavMobileProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex size-8 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-accent-muted hover:text-foreground focus-visible:outline-none md:hidden"
      >
        {open ? (
          <CloseIcon className="size-4" />
        ) : (
          <MenuIcon className="size-4" />
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-sm md:hidden"
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-mono text-sm font-medium tracking-tight"
            >
              chanhdai.com
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex size-8 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-accent-muted hover:text-foreground focus-visible:outline-none"
            >
              <CloseIcon className="size-4" />
            </button>
          </div>

          <nav
            aria-label="Mobile primary"
            className="flex flex-col gap-1 p-6 text-base"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-foreground/80 transition-colors hover:bg-accent-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
