import { notFound } from "next/navigation";

const blocks = [
  { name: "Hero 01", category: "hero", slug: "hero-01" },
  { name: "Blog 01", category: "blog", slug: "blog-01" },
  { name: "Experience 01", category: "experience", slug: "experience-01" },
  { name: "Metrics 01", category: "metrics", slug: "metrics-01" },
  {
    name: "Social Proof 01",
    category: "social-proof",
    slug: "social-proof-01",
  },
  { name: "Team 01", category: "team", slug: "team-01" },
];

type BlockPageProps = {
  params: Promise<{ category: string; name: string }>;
};

export function generateStaticParams() {
  return blocks.map((block) => ({
    category: block.category,
    name: block.slug,
  }));
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
