"use client";

import { useEffect, useState } from "react";

const sentences = [
  "Creating with code. Small details matter.",
  "Design Engineer.",
  "Open source contributor.",
  "I own a vintage iPhone.",
];

type FlipSentencesProps = {
  className?: string;
};

export function FlipSentences({ className = "" }: FlipSentencesProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % sentences.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <div
      className={`flex items-center gap-2 font-mono text-sm text-muted ${className}`}
    >
      <div className="relative min-w-0 flex-1 overflow-hidden">
        <span key={sentences[index]} className="flip-sentence block">
          {sentences[index]}
        </span>
      </div>
      <button
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
        className="shrink-0 rounded px-1.5 py-1 text-xs transition-colors hover:text-foreground"
      >
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}
