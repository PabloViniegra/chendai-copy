"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChanhDaiMark } from "./chanhdai-mark";
import { CloseIcon, MenuIcon } from "./icons";

type NavMobileProps = {
  items: { href: string; label: string }[];
};

export function NavMobile({ items }: NavMobileProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

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
    const desktop = window.matchMedia("(min-width: 640px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-haspopup="dialog"
        aria-controls="mobile-navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex size-8 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-accent-muted hover:text-foreground md:hidden"
      >
        {open ? (
          <CloseIcon className="size-4" />
        ) : (
          <MenuIcon className="size-4" />
        )}
      </button>

      <dialog
        id="mobile-navigation"
        ref={dialogRef}
        aria-label="Mobile navigation"
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-screen max-w-none flex-col border-0 bg-background/95 p-0 text-foreground backdrop:bg-background/95 backdrop:backdrop-blur-sm open:flex md:hidden"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Home"
            className="flex"
          >
            <ChanhDaiMark className="h-8 w-16" />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex size-8 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-accent-muted hover:text-foreground"
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
      </dialog>
    </>
  );
}
