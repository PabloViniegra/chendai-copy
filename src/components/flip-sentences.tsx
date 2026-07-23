"use client";

import { AnimatePresence, motion } from "motion/react";
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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % sentences.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative overflow-hidden font-mono text-sm text-muted ${className}`}
      aria-live="polite"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={sentences[index]}
          className="block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {sentences[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
