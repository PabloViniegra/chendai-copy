import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blocks } from "@/data/blocks";

type BlockPageProps = {
  params: Promise<{ category: string; name: string }>;
};

export function generateStaticParams() {
  return blocks.map((block) => ({
    category: block.category,
    name: block.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlockPageProps): Promise<Metadata> {
  const { category, name } = await params;
  const block = blocks.find(
    (item) => item.category === category && item.slug === name,
  );
  if (!block) return { title: "Block not found" };
  return {
    title: `${block.name} block`,
    description: `${block.name} – production-ready block from the Chánh Đại registry.`,
    alternates: { canonical: `/blocks/${category}/${name}` },
    robots: { index: false, follow: true },
  };
}

export default async function BlockPage({ params }: BlockPageProps) {
  const { category, name } = await params;
  const block = blocks.find(
    (item) => item.category === category && item.slug === name,
  );

  if (!block) {
    notFound();
  }

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-3xl border-x border-line px-4 py-8 sm:px-6 sm:py-12"
    >
      <p className="font-mono text-xs tracking-widest text-muted">BLOCK</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight">{block.name}</h1>
      <section className="screen-line-top screen-line-bottom mt-8 grid min-h-80 place-items-center border-x border-line bg-accent-muted p-6">
        <p className="font-mono text-sm text-muted">Live preview</p>
      </section>
    </main>
  );
}
