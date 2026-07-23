"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const OPEN_EVENT = "command-palette:open";

type CommandPaletteProps = {
  links: { href: string; label: string }[];
};

export function CommandPalette({ links }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setQuery("");
    };
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => {
          if (!value) {
            setQuery("");
          }
          return !value;
        });
        return;
      }
      if (event.key === "Escape") {
        setOpen((value) => (value ? false : value));
      }
    };

    window.addEventListener(OPEN_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

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

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme:v1", isDark ? "dark" : "light");
    } catch {}
  }, []);

  const actions = useMemo(
    () => [
      ...links.map((link) => ({
        id: `nav-${link.href}`,
        label: link.label,
        keywords: `go to ${link.label}`,
        perform: () => {
          window.location.href = link.href;
        },
      })),
      {
        id: "toggle-theme",
        label: "Toggle theme",
        keywords: "dark light mode",
        perform: toggleTheme,
      },
    ],
    [links, toggleTheme],
  );

  const filtered = useMemo(() => {
    if (!query.trim()) {
      return actions;
    }
    const q = query.toLowerCase();
    return actions.filter(
      (action) =>
        action.label.toLowerCase().includes(q) ||
        action.keywords?.toLowerCase().includes(q),
    );
  }, [actions, query]);

  if (!open) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-100 flex items-start justify-center px-4 pt-[20vh]"
    >
      <button
        type="button"
        aria-label="Close command palette"
        onClick={() => setOpen(false)}
        className="absolute inset-0 cursor-default bg-foreground/40 backdrop-blur-sm"
      />

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-lg border border-line bg-background shadow-2xl">
        <div className="flex items-center justify-between gap-2 border-b border-line px-3 py-2">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a command to run..."
            // biome-ignore lint/a11y/noAutofocus: command palette intentionally focuses on open
            autoFocus
            className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
          <kbd className="inline-flex h-5 shrink-0 items-center rounded border border-line bg-accent-muted px-1.5 font-mono text-[10px] text-muted">
            Esc
          </kbd>
        </div>

        <ul className="max-h-72 overflow-y-auto p-1">
          {filtered.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted">
              No commands found
            </li>
          ) : (
            filtered.map((action) => (
              <li key={action.id}>
                <button
                  type="button"
                  onClick={() => {
                    action.perform();
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left text-sm text-foreground/85 transition-colors hover:bg-accent-muted hover:text-foreground focus-visible:bg-accent-muted focus-visible:outline-none"
                >
                  <span>{action.label}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}
