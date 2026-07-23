import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const SOURCE_CODE_URL = "https://github.com/ncdai/chanhdai.com";
const LICENSE_URL = "https://github.com/ncdai/chanhdai.com/blob/main/LICENSE";
const SPONSORSHIP_URL = "https://github.com/sponsors/ncdai";
const X_URL = "https://x.com/iamncdai";
const GITHUB_URL = "https://github.com/ncdai";
const LINKEDIN_URL = "https://linkedin.com/in/ncdai";
const OPENPANEL_URL =
  "https://openpanel.dev?utm_source=chanhdai.com&utm_medium=referral&utm_campaign=footer";
const DMCA_URL = "https://www.dmca.com/ProtectionPro.aspx";

const inspiredBy = [
  "Tailwind CSS",
  "shadcn/ui",
  "Vercel",
  "Evil Charts",
  "Devouring Details",
  "Skiper UI",
  "Making Software",
];

export function SiteFooter() {
  return (
    <footer className="w-full overflow-x-clip px-2">
      <div className="mx-auto max-w-3xl border-x border-line">
        <div className="screen-line-top screen-line-bottom h-12" />

        <dl className="flex flex-col gap-4 py-8 font-mono [&_dd]:text-sm [&_dt]:text-right [&_dt]:text-sm [&_dt]:text-muted">
          <Row label="Crafted by">
            <a
              className="underline-offset-4 hover:underline"
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              @iamncdai
            </a>
          </Row>

          <Row label="Inspired by">
            <ul className="flex flex-col gap-2">
              {inspiredBy.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </Row>

          <Row label="Deployed on">Vercel</Row>

          <Row label="Analytics">
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="underline-offset-4 hover:underline"
                  href={OPENPANEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenPanel
                </a>
              </li>
              <li>Google Analytics</li>
            </ul>
          </Row>

          <Row label="Source code">
            <a
              className="underline-offset-4 hover:underline"
              href={SOURCE_CODE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Row>

          <Row label="License">
            <a
              className="underline-offset-4 hover:underline"
              href={LICENSE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
          </Row>
        </dl>

        <div className="screen-line-top screen-line-bottom flex">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4 py-3">
            <a
              className="text-muted transition-colors hover:text-foreground"
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile"
            >
              <XIcon className="size-4" />
            </a>
            <span aria-hidden className="h-4 w-px bg-line" />
            <a
              className="text-muted transition-colors hover:text-foreground"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="size-4" />
            </a>
            <span aria-hidden className="h-4 w-px bg-line" />
            <a
              className="text-muted transition-colors hover:text-foreground"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <span aria-hidden className="h-4 w-px bg-line" />
            <a
              className="text-muted transition-colors hover:text-foreground"
              href={SPONSORSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sponsor"
            >
              <span className="font-mono text-xs">♥</span>
            </a>
            <span aria-hidden className="h-4 w-px bg-line" />
            <a
              className="text-muted transition-colors hover:text-foreground"
              href={DMCA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DMCA Protection Status"
            >
              <span className="font-mono text-[10px]">DMCA</span>
            </a>
          </div>
        </div>

        <div className="screen-line-bottom relative overflow-hidden py-5 after:z-1 after:bg-foreground/15">
          <div
            aria-hidden="true"
            className="text-center font-mono text-[clamp(2.5rem,13vw,7rem)] font-bold leading-none tracking-[0.24em] text-foreground/45 transition-colors duration-300 hover:text-foreground/60"
          >
            CHANHDAI
          </div>
        </div>
      </div>

      <div className="h-12" />
    </footer>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
