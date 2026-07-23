import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { components } from "@/data/components-list";

export default function ComponentsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl border-x border-line px-4 py-8 sm:px-6 sm:py-12">
      <header className="screen-line-bottom -mx-4 mb-6 px-4 pb-6 sm:-mx-6 sm:px-6">
        <p className="font-mono text-xs tracking-widest text-muted">REGISTRY</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">Components</h1>
        <p className="mt-2 max-w-xl text-muted">
          Reusable components and interaction patterns from the portfolio.
        </p>
      </header>

      <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 md:grid-cols-3">
        {components.map((component) => (
          <Link
            key={component.href}
            href={component.href}
            className="group flex min-h-24 items-center justify-between gap-3 border-b border-r border-line p-4 transition-colors hover:bg-accent-muted"
          >
            <span className="font-medium tracking-tight">{component.name}</span>
            <ArrowRightIcon className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </main>
  );
}
