"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 bottom-4 z-50 inline-flex size-8 items-center justify-center rounded-md border border-line bg-background text-foreground shadow-sm transition-[opacity,transform] duration-300 lg:right-8 lg:bottom-8 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
    >
      <ArrowUpIcon className="size-4" />
    </button>
  );
}
