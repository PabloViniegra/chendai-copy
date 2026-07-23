import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { LinedSection } from "@/components/lined-section";
import { blogPosts } from "@/data/blog";

const VISIBLE_LIMIT = 6;

export function BlogSection() {
  const visible = blogPosts.slice(0, VISIBLE_LIMIT);

  return (
    <LinedSection
      id="blog"
      title={
        <>
          Blog{" "}
          <span className="font-mono text-xs text-muted">
            ({blogPosts.length})
          </span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visible.map((post) => (
          <article
            key={post.href}
            className="group/post relative flex flex-col gap-2 rounded-lg p-2 transition-colors hover:bg-accent-muted"
          >
            {post.image && (
              <div className="relative aspect-[1200/630] overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={post.imageWidth}
                  height={post.imageHeight}
                  loading="lazy"
                  quality={100}
                  className="size-full object-cover grayscale transition-[filter] duration-300 ease-out group-hover/post:grayscale-0"
                  unoptimized
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-lg inset-ring-1 inset-ring-black/15 dark:inset-ring-white/15"
                />
              </div>
            )}

            <div className="flex flex-col gap-1 p-2">
              <h3 className="line-clamp-2 text-base font-medium leading-snug tracking-tight text-balance">
                <Link
                  href={post.href}
                  className="hover:underline underline-offset-4"
                >
                  {post.title}
                </Link>
              </h3>
              <dl className="flex items-center gap-1.5 text-xs text-muted">
                <dt className="sr-only">Published on</dt>
                <dd>
                  <span className="text-muted-foreground/70">Published on</span>{" "}
                  <time
                    dateTime={post.date.split(".").reverse().join("-")}
                    className="font-mono"
                  >
                    {post.date}
                  </time>
                </dd>
              </dl>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Link
          href="/blog"
          className="inline-flex h-8 items-center gap-2 rounded-md border border-line bg-accent-muted px-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-accent-muted/70 hover:text-foreground focus-visible:outline-none"
        >
          All posts
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>
    </LinedSection>
  );
}
