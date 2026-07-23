import Link from "next/link";
import { GlowCardGrid } from "@/components/glow-card";
import { ArrowRightIcon } from "@/components/icons";
import { LinedSection } from "@/components/lined-section";
import { getComponentIcon } from "@/data/component-icons";
import { components } from "@/data/components-list";

const VISIBLE_LIMIT = 12;

function slugFromHref(href: string): string {
  return href.replace(/^\/components\//, "");
}

export function ComponentsSection() {
  const visible = components.slice(0, VISIBLE_LIMIT);

  return (
    <LinedSection
      id="components"
      title={
        <>
          Components{" "}
          <span className="font-mono text-xs text-muted">
            ({components.length})
          </span>
        </>
      }
    >
      <GlowCardGrid>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {visible.map((component) => {
            const slug = slugFromHref(component.href);
            const Icon = getComponentIcon(slug);
            return (
              <Link
                key={component.href}
                href={component.href}
                data-glow-card
                className="group/component relative flex items-center gap-3 border-b border-r border-line p-4 pr-2 transition-colors last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(3n)]:border-r-0 hover:bg-accent-muted"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-accent-muted text-muted [&_svg]:size-4">
                  <Icon aria-hidden />
                </span>
                <h3 className="line-clamp-1 text-base font-medium tracking-tight">
                  {component.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </GlowCardGrid>

      <div className="mt-4 flex justify-center">
        <Link
          href="/components"
          className="inline-flex h-8 items-center gap-2 rounded-md border border-line bg-accent-muted px-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-accent-muted/70 hover:text-foreground"
        >
          All components
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>
    </LinedSection>
  );
}
