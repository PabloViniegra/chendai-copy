import type { ReactNode } from "react";

type LinedSectionProps = {
  id: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
  withBottomBorder?: boolean;
};

export function LinedSection({
  id,
  title,
  children,
  className,
  withBottomBorder = false,
}: LinedSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`screen-line-top screen-line-bottom border-x border-line ${withBottomBorder ? "screen-line-bottom" : ""} ${className ?? ""}`}
    >
      <header className="screen-line-bottom px-4 pb-4 pt-5 sm:pt-6">
        <h2
          id={`${id}-heading`}
          className="text-3xl font-medium tracking-tight text-balance"
        >
          <a
            href={`#${id}`}
            className="transition-colors hover:text-foreground/70"
          >
            {title}
          </a>
        </h2>
      </header>
      <div className="min-w-0 px-4 pt-2 pb-6">{children}</div>
    </section>
  );
}
