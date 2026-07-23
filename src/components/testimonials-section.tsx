"use client";

import Image from "next/image";
import { useState } from "react";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { ArrowRightIcon } from "./icons";

const FEATURED: Testimonial[] = [];
const ROW_A: Testimonial[] = [];
const ROW_B: Testimonial[] = [];
for (let i = 0; i < TESTIMONIALS.length; i++) {
  const t = TESTIMONIALS[i];
  if (t.isFeatured) FEATURED.push(t);
  if (i % 2 === 0) {
    if (ROW_A.length < 8) ROW_A.push(t);
  } else if (ROW_B.length < 8) {
    ROW_B.push(t);
  }
}

function Card({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group/testimonial relative mx-0.5 flex w-xs shrink-0 flex-col gap-4 rounded-xl border border-line bg-background p-4 transition-colors hover:bg-accent-muted">
      <blockquote className="font-serif text-base text-foreground/85">
        {testimonial.quote}
      </blockquote>

      <footer className="mt-auto flex items-center gap-2.5">
        <Image
          src={testimonial.authorAvatar}
          alt={testimonial.authorName}
          width={32}
          height={32}
          loading="lazy"
          unoptimized
          className="size-8 rounded-full bg-accent-muted grayscale transition duration-300 group-hover/testimonial:grayscale-0"
        />
        <div className="flex flex-col text-sm leading-tight">
          <a
            href={testimonial.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline-offset-4 hover:underline"
          >
            <span aria-hidden className="absolute inset-0" />
            {testimonial.authorName}
          </a>
          <span className="text-muted-foreground">
            {testimonial.authorTagline}
          </span>
        </div>
      </footer>
    </article>
  );
}

function Marquee({
  items,
  direction = "left",
  paused,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  paused: boolean;
}) {
  const animation =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max ${animation} group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused]`}
        style={paused ? { animationPlayState: "paused" } : undefined}
      >
        {items.map((item, index) => (
          <Card key={`${item.url}-${index}`} testimonial={item} />
        ))}
        <div aria-hidden="true" inert className="marquee-copy contents">
          {items.map((item, index) => (
            <Card key={`duplicate-${item.url}-${index}`} testimonial={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="screen-line-top screen-line-bottom border-x border-line"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2
          id="testimonials-heading"
          className="font-mono text-xs tracking-widest text-muted-foreground uppercase"
        >
          Trusted by top builders on{" "}
          <a
            href="https://x.com/iamncdai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="𝕏 (X/Twitter)"
            className="text-foreground underline underline-offset-4"
          >
            𝕏
          </a>
        </h2>
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
          className="shrink-0 rounded-md border border-line px-2 py-1 font-mono text-xs text-muted transition-colors hover:text-foreground"
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>

      {FEATURED.length > 0 && (
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {FEATURED.map((item) => (
            <Card key={item.url} testimonial={item} />
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3">
        <Marquee items={ROW_A} direction="left" paused={paused} />
        <Marquee items={ROW_B} direction="right" paused={paused} />
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="/testimonials"
          target="_self"
          rel=""
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-background px-4 py-1.5 text-sm transition-colors hover:bg-accent-muted"
        >
          All builders
          <ArrowRightIcon className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
