import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl border-x border-line px-4 py-8 sm:px-6 sm:py-12">
      <header className="screen-line-bottom -mx-4 mb-6 px-4 pb-6 sm:-mx-6 sm:px-6">
        <p className="font-mono text-xs tracking-widest text-muted">
          SOCIAL PROOF
        </p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">
          All builders
        </h1>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {TESTIMONIALS.map((testimonial, index) => (
          <article
            key={`${testimonial.url}-${index}`}
            className="flex min-h-48 flex-col justify-between rounded-xl border border-line p-4 transition-colors hover:bg-accent-muted"
          >
            <blockquote className="font-serif text-base text-foreground/85">
              “{testimonial.quote}”
            </blockquote>
            <footer className="mt-6 flex items-center gap-3">
              <Image
                src={testimonial.authorAvatar}
                alt={testimonial.authorName}
                width={32}
                height={32}
                unoptimized
                className="size-8 rounded-full grayscale"
              />
              <a
                href={testimonial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline-offset-4 hover:underline"
              >
                {testimonial.authorName}
                <span className="block text-muted">
                  {testimonial.authorTagline}
                </span>
              </a>
            </footer>
          </article>
        ))}
      </div>
    </main>
  );
}
