import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { ArrowRightIcon } from "./icons";

const FEATURED = TESTIMONIALS.filter((t) => t.isFeatured);

const ROW_A = TESTIMONIALS.filter((_, i) => i % 2 === 0).slice(0, 8);
const ROW_B = TESTIMONIALS.filter((_, i) => i % 2 === 1).slice(0, 8);

function Card({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group/testimonial relative mx-0.5 flex w-xs shrink-0 flex-col gap-4 rounded-xl border border-line bg-background p-4 transition-colors hover:bg-accent-muted">
      <blockquote className="font-serif text-base text-foreground/85">
        {testimonial.quote}
      </blockquote>

      <footer className="mt-auto flex items-center gap-2.5">
        <img
          src={testimonial.authorAvatar}
          alt={testimonial.authorName}
          loading="lazy"
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
}: {
  items: Testimonial[];
  direction?: "left" | "right";
}) {
  const animation =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max ${animation} group-hover/marquee:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((item, idx) => (
          <Card key={`${item.url}-${idx}`} testimonial={item} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="group/marquee"
    >
      <h2
        id="testimonials-heading"
        className="mb-6 font-mono text-xs tracking-widest text-muted-foreground uppercase"
      >
        Trusted by top builders on{" "}
        <a
          href="https://x.com/iamncdai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="text-foreground/70 hover:text-foreground"
        >
          𝕏
        </a>
      </h2>

      {FEATURED.length > 0 && (
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {FEATURED.map((item) => (
            <Card key={item.url} testimonial={item} />
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3">
        <Marquee items={ROW_A} direction="left" />
        <Marquee items={ROW_B} direction="right" />
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="https://x.com/iamncdai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-background px-4 py-1.5 text-sm transition-colors hover:bg-accent-muted"
        >
          All builders
          <ArrowRightIcon className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
