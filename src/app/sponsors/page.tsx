import Link from "next/link";
import { sponsors } from "@/data/sponsors";

export default function SponsorsPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-full max-w-3xl border-x border-line px-4 py-8 sm:px-6 sm:py-12"
    >
      <header className="screen-line-bottom -mx-4 mb-6 px-4 pb-6 sm:-mx-6 sm:px-6">
        <p className="font-mono text-xs tracking-widest text-muted">SUPPORT</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">Sponsors</h1>
        <p className="mt-2 max-w-xl text-muted">
          Grateful to the sponsors who make this open-source work possible.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.url}
            href={sponsor.url}
            target="_blank"
            rel="noopener sponsored"
            className="flex min-h-24 items-center justify-center rounded-md border border-line p-4 transition-colors hover:bg-accent-muted"
          >
            <sponsor.logo aria-hidden className="h-8 w-auto max-w-[180px]" />
            <span className="sr-only">{sponsor.name}</span>
          </a>
        ))}
        <a
          href="https://github.com/sponsors/ncdai"
          target="_blank"
          rel="noopener sponsored"
          className="flex min-h-24 items-center justify-center rounded-md border border-line p-4 font-mono text-sm text-muted transition-colors hover:bg-accent-muted hover:text-foreground"
        >
          + Sponsor my work
        </a>
      </div>

      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted underline-offset-4 hover:text-foreground hover:underline"
      >
        ← Back home
      </Link>
    </main>
  );
}
