import {
  DailyDevIcon,
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";

const links = [
  {
    href: "https://x.com/iamncdai",
    label: "X",
    Icon: XIcon,
  },
  {
    href: "https://github.com/ncdai",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "https://linkedin.com/in/ncdai",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://app.daily.dev/ncdai",
    label: "daily.dev",
    Icon: DailyDevIcon,
  },
  {
    href: "https://discord.com/users/1186630645443739651",
    label: "Discord",
    Icon: DiscordIcon,
  },
  {
    href: "https://www.youtube.com/@ncdai",
    label: "YouTube",
    Icon: YouTubeIcon,
  },
];

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-2" aria-label="Social links">
      {links.map(({ href, label, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex size-9 items-center justify-center rounded-md border border-line text-foreground/70 transition-colors hover:bg-accent-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
