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
      className={`screen-line-top relative pt-10 pb-12 sm:pt-12 ${
        withBottomBorder ? "screen-line-bottom" : ""
      } ${className ?? ""}`}
    >
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-[100px_1fr]">
        <div className="relative pl-4 sm:pl-6">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 w-px bg-line"
          />
          <h2
            id={`${id}-heading`}
            className="text-base font-medium tracking-tight"
          >
            <a
              href={`#${id}`}
              className="transition-colors hover:text-foreground/70"
            >
              {title}
            </a>
          </h2>
        </div>
        <div className="mt-6 min-w-0 sm:mt-0 sm:pl-2">{children}</div>
      </div>
    </section>
  );
}
