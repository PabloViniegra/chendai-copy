import Link from "next/link";
import { blocks } from "@/data/blocks";

export default function BlocksPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-3xl border-x border-line px-4 py-8 sm:px-6 sm:py-12"
    >
      <header className="screen-line-bottom -mx-4 mb-6 px-4 pb-6 sm:-mx-6 sm:px-6">
        <p className="font-mono text-xs tracking-widest text-muted">REGISTRY</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">Blocks</h1>
        <p className="mt-2 max-w-xl text-muted">
          Composable page sections built from the same design language.
        </p>
      </header>

      <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
        {blocks.map((block) => {
          const href = `/blocks/${block.category}/${block.slug}`;
          return (
            <li key={href} className="border-b border-r border-line">
              <Link
                href={href}
                className="flex min-h-24 items-center justify-between p-4 font-medium transition-colors hover:bg-accent-muted"
              >
                <h2 className="text-base font-medium tracking-tight">
                  {block.name}
                </h2>
                <span aria-hidden className="text-muted">
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
