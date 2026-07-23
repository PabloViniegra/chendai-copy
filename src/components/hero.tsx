import { AvatarToggle } from "./avatar-toggle";
import { HeroGeometry } from "./hero-geometry";
import { LinkIcon, MapPinIcon } from "./icons";
import { SocialLinks } from "./social-links";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-name"
      className="relative isolate flex flex-col items-center pt-16 text-center"
    >
      <HeroGeometry />
      <p className="font-mono text-xs tracking-widest text-muted">FIG_001</p>

      <div className="mt-8">
        <AvatarToggle />
      </div>

      <h1
        id="hero-name"
        className="mt-8 text-4xl font-medium tracking-tight md:text-5xl"
      >
        Chánh Đại
      </h1>

      <p className="mt-3 text-balance text-lg text-foreground/70">
        Creating with code. Small details matter.
      </p>

      <div className="mt-10 w-full text-left">
        <h2 className="font-mono text-xs tracking-widest text-muted">
          Overview
        </h2>

        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <dt className="sr-only">Role</dt>
            <dd>
              <span className="text-foreground/70">Design Engineer @</span>
              <a
                href="#experience-shadcncraft"
                className="font-medium underline-offset-4 hover:underline"
              >
                shadcncraft
              </a>
            </dd>
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <dt className="sr-only">Role</dt>
            <dd>
              <span className="text-foreground/70">Founder @</span>
              <a
                href="#experience-quaric"
                className="font-medium underline-offset-4 hover:underline"
              >
                Quaric
              </a>
            </dd>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center gap-1.5 text-foreground/70">
              <MapPinIcon className="size-3.5" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ho+Chi+Minh+City%2C+Viet+Nam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground hover:underline underline-offset-4"
              >
                Ho Chi Minh City, Viet Nam
              </a>
            </dd>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <dt className="sr-only">Website</dt>
            <dd className="flex items-center gap-1.5 text-foreground/70">
              <LinkIcon className="size-3.5" />
              <a
                href="https://chanhdai.com"
                className="hover:text-foreground hover:underline underline-offset-4"
              >
                chanhdai.com
              </a>
            </dd>
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <dt className="sr-only">Pronouns</dt>
            <dd className="text-foreground/70">he/him</dd>
          </div>
        </dl>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
