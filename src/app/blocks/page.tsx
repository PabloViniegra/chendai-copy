import Link from "next/link";

const blocks = [
  { name: "Hero 01", href: "/blocks/hero/hero-01" },
  { name: "Blog 01", href: "/blocks/blog/blog-01" },
  { name: "Experience 01", href: "/blocks/experience/experience-01" },
  { name: "Metrics 01", href: "/blocks/metrics/metrics-01" },
  { name: "Social Proof 01", href: "/blocks/social-proof/social-proof-01" },
  { name: "Team 01", href: "/blocks/team/team-01" },
];

export default function BlocksPage() {
  return (
    <main className="mx-auto w-full max-w-3xl border-x border-line px-4 py-8 sm:px-6 sm:py-12">
      <header className="screen-line-bottom -mx-4 mb-6 px-4 pb-6 sm:-mx-6 sm:px-6">
        <p className="font-mono text-xs tracking-widest text-muted">REGISTRY</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">Blocks</h1>
        <p className="mt-2 max-w-xl text-muted">
          Composable page sections built from the same design language.
        </p>
      </header>

      <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
        {blocks.map((block) => (
          <Link
            key={block.href}
            href={block.href}
            className="flex min-h-24 items-center justify-between border-b border-r border-line p-4 font-medium transition-colors hover:bg-accent-muted"
          >
            {block.name}
            <span aria-hidden className="text-muted">
              →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
