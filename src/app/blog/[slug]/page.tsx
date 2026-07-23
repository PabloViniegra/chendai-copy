import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.href.replace("/blog/", ""),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.href === `/blog/${slug}`);

  if (!post) {
    notFound();
  }

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-3xl border-x border-line px-4 py-8 sm:px-6 sm:py-12"
    >
      <Link
        href="/blog"
        className="font-mono text-xs text-muted underline-offset-4 hover:text-foreground hover:underline"
      >
        ← All posts
      </Link>
      <article className="mt-8">
        <header className="screen-line-bottom pb-6">
          <p className="font-mono text-xs text-muted">{post.date}</p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-balance">
            {post.title}
          </h1>
        </header>
        <div className="relative mt-6 overflow-hidden rounded-lg border border-line">
          <Image
            src={post.image}
            alt={post.title}
            width={post.imageWidth}
            height={post.imageHeight}
            unoptimized
            priority
            className="h-auto w-full"
          />
        </div>
      </article>
    </main>
  );
}
