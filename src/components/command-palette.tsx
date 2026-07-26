"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { COMMAND_PALETTE_OPEN_EVENT } from "@/lib/command-palette-events";
import { SearchIcon } from "./icons";

type Action = {
  id: string;
  label: string;
  keywords?: string;
  perform: () => void;
};

type Section = {
  title: string;
  items: Action[];
};

type CommandPaletteProps = {
  links: { href: string; label: string }[];
};

type Range = readonly [number, number];

function score(
  query: string,
  target: string,
): { score: number; ranges: Range[] } {
  const q = query.toLowerCase().trim();
  if (!q) return { score: 0, ranges: [] };
  const t = target.toLowerCase();
  if (t === q) return { score: 100, ranges: [[0, q.length] as Range] };
  if (t.startsWith(q)) return { score: 80, ranges: [[0, q.length] as Range] };
  const idx = t.indexOf(q);
  if (idx >= 0) return { score: 60, ranges: [[idx, idx + q.length] as Range] };

  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length > 0) {
    let cursor = 0;
    const found: Range[] = [];
    for (const tok of tokens) {
      const at = t.indexOf(tok, cursor);
      if (at < 0) return { score: 0, ranges: [] };
      found.push([at, at + tok.length]);
      cursor = at + tok.length;
    }
    return { score: 40, ranges: found };
  }
  return { score: 0, ranges: [] };
}

function scoreAction(
  query: string,
  item: Action,
): { score: number; ranges: Range[] } {
  const labelMatch = score(query, item.label);
  const kwMatch = item.keywords
    ? score(query, item.keywords)
    : { score: 0, ranges: [] };
  return {
    score: Math.max(labelMatch.score, Math.floor(kwMatch.score * 0.6)),
    ranges: labelMatch.ranges,
  };
}

export function CommandPalette({ links }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setQuery("");
      setActiveIndex(0);
    };
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => {
          if (!value) {
            setQuery("");
            setActiveIndex(0);
          }
          return !value;
        });
        return;
      }
      if (event.key === "Escape") {
        setOpen((value) => (value ? false : value));
      }
    };
    window.addEventListener(COMMAND_PALETTE_OPEN_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(COMMAND_PALETTE_OPEN_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    itemRefs.current.get(activeIndex)?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme:v1", isDark ? "dark" : "light");
    } catch {}
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, []);

  const copyUrl = useCallback(() => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      void navigator.clipboard.writeText(window.location.href);
    }
  }, []);

  const sections: Section[] = useMemo(
    () => [
      {
        title: "Navigation",
        items: links.map((link) => ({
          id: `nav-${link.href}`,
          label: link.label,
          keywords: `go to ${link.label}`,
          perform: () => {
            window.location.href = link.href;
          },
        })),
      },
      {
        title: "Actions",
        items: [
          {
            id: "toggle-theme",
            label: "Toggle theme",
            keywords: "dark light mode appearance",
            perform: toggleTheme,
          },
          {
            id: "copy-url",
            label: "Copy page URL",
            keywords: "share link address clipboard",
            perform: copyUrl,
          },
          {
            id: "view-source",
            label: "View source on GitHub",
            keywords: "github code repository",
            perform: () => {
              window.open(
                "https://github.com/ncdai/chanhdai.com",
                "_blank",
                "noopener,noreferrer",
              );
            },
          },
        ],
      },
    ],
    [links, toggleTheme, copyUrl],
  );

  const filteredSections = useMemo(() => {
    if (!query.trim()) {
      return sections.map((s) => ({
        title: s.title,
        items: s.items,
        ranges: s.items.map(() => [] as Range[]),
      }));
    }
    const out: { title: string; items: Action[]; ranges: Range[][] }[] = [];
    for (const section of sections) {
      const scored = section.items
        .map((item) => ({ item, match: scoreAction(query, item) }))
        .filter((x) => x.match.score > 0)
        .sort((a, b) => b.match.score - a.match.score);
      if (scored.length > 0) {
        out.push({
          title: section.title,
          items: scored.map((x) => x.item),
          ranges: scored.map((x) => x.match.ranges),
        });
      }
    }
    return out;
  }, [sections, query]);

  const flatItems = useMemo(
    () => filteredSections.flatMap((s) => s.items),
    [filteredSections],
  );

  if (!open) return null;

  const runAction = (item: Action) => {
    setOpen(false);
    item.perform();
  };

  return (
    <dialog
      id="command-palette"
      ref={dialogRef}
      aria-label="Command palette"
      onCancel={(event) => {
        event.preventDefault();
        setOpen(false);
      }}
      onClose={() => setOpen(false)}
      className="m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 backdrop:bg-foreground/40 backdrop:backdrop-blur-sm"
    >
      <div className="fixed inset-0 flex items-start justify-center px-4 pt-[20vh]">
        <button
          type="button"
          aria-label="Close command palette"
          onClick={() => setOpen(false)}
          className="absolute inset-0 cursor-pointer"
        />

        <div className="relative z-10 w-full max-w-md overflow-hidden rounded-lg border border-line bg-background shadow-2xl">
          <div className="flex items-center gap-2 border-b border-line px-3 py-2">
            <SearchIcon className="size-4 shrink-0 text-muted" />
            <input
              id="command-search"
              ref={inputRef}
              type="search"
              aria-label="Search commands"
              aria-controls="command-list"
              aria-describedby="command-results"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              placeholder="Type a command or search…"
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setActiveIndex((i) => Math.min(i + 1, flatItems.length - 1));
                } else if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setActiveIndex((i) => Math.max(0, i - 1));
                } else if (event.key === "Enter") {
                  event.preventDefault();
                  const item = flatItems[activeIndex];
                  if (item) runAction(item);
                }
              }}
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
            />
            <kbd className="inline-flex h-5 shrink-0 items-center rounded border border-line bg-accent-muted px-1.5 font-mono text-[10px] text-muted">
              Esc
            </kbd>
          </div>

          <p id="command-results" className="sr-only" aria-live="polite">
            {flatItems.length} {flatItems.length === 1 ? "command" : "commands"}{" "}
            found
          </p>

          <div className="max-h-80 overflow-y-auto" id="command-list">
            {flatItems.length === 0 ? (
              <div className="px-4 py-8 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  No results
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Nothing matched{" "}
                  <span className="font-mono text-foreground">
                    &ldquo;{query}&rdquo;
                  </span>
                  . Try a page name or an action.
                </p>
              </div>
            ) : (
              filteredSections.map((section, sectionIdx) => {
                let flatOffset = 0;
                for (let i = 0; i < sectionIdx; i++) {
                  flatOffset += filteredSections[i].items.length;
                }
                return (
                  <section
                    key={section.title}
                    aria-labelledby={`palette-section-${section.title}`}
                    className="border-b border-line last:border-b-0"
                  >
                    <h3
                      id={`palette-section-${section.title}`}
                      className="flex items-center gap-2 px-3 pt-3 pb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted"
                    >
                      <span>{section.title}</span>
                      <span className="h-px flex-1 bg-line" />
                    </h3>
                    <ul>
                      {section.items.map((item, itemIdx) => {
                        const flatIndex = flatOffset + itemIdx;
                        const ranges = section.ranges[itemIdx];
                        const isActive = flatIndex === activeIndex;
                        return (
                          <li key={item.id}>
                            <button
                              ref={(el) => {
                                if (el) itemRefs.current.set(flatIndex, el);
                                else itemRefs.current.delete(flatIndex);
                              }}
                              type="button"
                              data-active={isActive || undefined}
                              onMouseEnter={() => setActiveIndex(flatIndex)}
                              onClick={() => runAction(item)}
                              className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm text-ink-body transition-colors hover:bg-accent-muted hover:text-foreground data-[active]:bg-accent-muted data-[active]:text-foreground"
                            >
                              <HighlightedLabel
                                label={item.label}
                                ranges={ranges}
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                );
              })
            )}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-line bg-accent-muted/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <KbdHint>↑</KbdHint>
                <KbdHint>↓</KbdHint>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <KbdHint>↵</KbdHint>
                select
              </span>
            </div>
            <span className="flex items-center gap-1">
              <KbdHint>esc</KbdHint>
              close
            </span>
          </div>
        </div>
      </div>
    </dialog>
  );
}

function HighlightedLabel({
  label,
  ranges,
}: {
  label: string;
  ranges: Range[];
}) {
  if (ranges.length === 0) return <span>{label}</span>;
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  ranges.forEach((range) => {
    const [start, end] = range;
    if (start > cursor) parts.push(label.slice(cursor, start));
    parts.push(
      <span
        key={`${start}-${end}`}
        className="rounded-sm bg-foreground/15 text-foreground"
      >
        {label.slice(start, end)}
      </span>,
    );
    cursor = end;
  });
  if (cursor < label.length) parts.push(label.slice(cursor));
  return <>{parts}</>;
}

function KbdHint({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-4 min-w-4 items-center justify-center rounded border border-line bg-background px-1 font-mono text-[10px] leading-none text-muted-foreground">
      {children}
    </kbd>
  );
}
