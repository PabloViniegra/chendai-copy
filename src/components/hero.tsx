import { AvatarToggle } from "./avatar-toggle";
import { FlipSentences } from "./flip-sentences";
import { HeroGeometry } from "./hero-geometry";

function VerifiedIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Verified"
      role="img"
      className="size-4 text-foreground/70"
    >
      <title>Verified</title>
      <path d="M24 12a4.45 4.45 0 0 0-2.56-3.91 4.44 4.44 0 0 0-.95-4.58 4.44 4.44 0 0 0-4.58-.95A4.44 4.44 0 0 0 12 0a4.43 4.43 0 0 0-3.91 2.56 4.44 4.44 0 0 0-4.58.95 4.44 4.44 0 0 0-.95 4.58A4.45 4.45 0 0 0 0 12a4.45 4.45 0 0 0 2.56 3.91 4.44 4.44 0 0 0 .95 4.58 4.44 4.44 0 0 0 4.58.95A4.44 4.44 0 0 0 12 24a4.44 4.44 0 0 0 3.91-2.56 4.44 4.44 0 0 0 4.58-.95 4.44 4.44 0 0 0 .95-4.58A4.45 4.45 0 0 0 24 12Zm-13.71 4.92-4.38-4.38 1.65-1.66 2.65 2.65 5.62-6.12 1.72 1.59-7.26 7.92Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="cover"
      aria-labelledby="hero-name"
      className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-hidden border-x border-line"
    >
      <figure className="relative col-span-2 min-h-[220px] p-2 sm:col-span-1 sm:col-start-2 sm:min-h-[280px] sm:p-4">
        <HeroGeometry />
        <figcaption className="pointer-events-none absolute right-2 bottom-2 font-mono text-xs leading-none text-muted select-none sm:right-4">
          FIG_001
        </figcaption>
      </figure>

      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <AvatarToggle />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-center gap-2 px-4 pt-3">
            <h1
              id="hero-name"
              className="-translate-y-px text-[2rem]/none font-medium tracking-tight"
            >
              Chánh Đại
            </h1>
            <VerifiedIcon />
          </div>
          <FlipSentences className="h-[3.125rem] border-t border-line py-2 pl-4 sm:h-9" />
        </div>
      </div>
    </section>
  );
}
