import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-3xl border-x border-line px-4 py-8 sm:px-6 sm:py-12"
    >
      <header className="screen-line-bottom -mx-4 mb-6 px-4 pb-6 sm:-mx-6 sm:px-6">
        <p className="font-mono text-xs tracking-widest text-muted">WRITING</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">Blog</h1>
        <p className="mt-2 max-w-xl text-muted">
          Notes on design engineering, open source and the details behind the
          work.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.href}
            className="group rounded-lg border border-line p-2 transition-colors hover:bg-accent-muted"
          >
            <Link href={post.href} className="block">
              <div className="relative aspect-[1200/630] overflow-hidden rounded-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={post.imageWidth}
                  height={post.imageHeight}
                  unoptimized
                  className="size-full object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                />
              </div>
              <div className="p-2">
                <h2 className="font-medium leading-snug tracking-tight group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h2>
                <time className="mt-2 block font-mono text-xs text-muted">
                  {post.date}
                </time>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
