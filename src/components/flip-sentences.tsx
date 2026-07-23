"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % sentences.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [paused, shouldReduceMotion]);

  return (
    <div
      className={`flex items-center gap-2 font-mono text-sm text-muted ${className}`}
    >
      <div className="relative min-w-0 flex-1 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={sentences[index]}
            className="block"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {sentences[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      {!shouldReduceMotion && (
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
          className="shrink-0 rounded px-1.5 py-1 text-xs transition-colors hover:text-foreground"
        >
          {paused ? "Play" : "Pause"}
        </button>
      )}
    </div>
  );
}
