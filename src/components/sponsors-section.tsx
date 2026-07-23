import Link from "next/link";
import { ArrowRightIcon, PlusIcon } from "@/components/icons";
import { sponsors } from "@/data/sponsors";

const SPONSORSHIP_URL = "https://github.com/sponsors/ncdai";

export function SponsorsSection() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-heading"
      className="relative border-t border-line pt-10 pb-12 sm:pt-12"
    >
      <h2
        id="sponsors-heading"
        className="text-base font-medium tracking-tight"
      >
        <span>Backed by</span>{" "}
        <span className="text-foreground/70">the community</span>
      </h2>
      <p className="mt-2 text-sm text-muted">
        Grateful to the sponsors who make this open-source work possible.
      </p>

      <div className="mt-6">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sponsors.map((sponsor) => (
            <li key={sponsor.url}>
              <SponsorTile
                href={sponsor.url}
                name={sponsor.name}
                aria-label={`${sponsor.name} logo`}
              >
                <sponsor.logo
                  aria-hidden
                  className="h-8 w-auto max-w-[180px]"
                />
              </SponsorTile>
            </li>
          ))}
          <li>
            <SponsorTile href={SPONSORSHIP_URL} name="Sponsor my work">
              <PlusIcon className="size-6 text-muted" aria-hidden />
              <span className="font-mono text-xs text-muted">
                Sponsor my work
              </span>
            </SponsorTile>
          </li>
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/sponsors"
          className="inline-flex h-8 items-center gap-2 rounded-md border border-line bg-accent-muted px-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-accent-muted/70 hover:text-foreground focus-visible:outline-none"
        >
          All sponsors
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}

function SponsorTile({
  href,
  name,
  children,
  ...props
}: {
  href: string;
  name: string;
  children: React.ReactNode;
} & React.AriaAttributes) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener sponsored"
      className="flex min-h-[90px] items-center justify-center gap-3 rounded-md border border-line p-4 transition-colors hover:bg-accent-muted"
      {...props}
    >
      {children}
      <span className="sr-only">{name}</span>
    </a>
  );
}
