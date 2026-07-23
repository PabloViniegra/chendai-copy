import Image from "next/image";
import { experiences } from "@/data/experience";
import { TechBadge } from "./tech-badge";

function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-sm">
      <dt className="font-mono text-xs text-muted">{label}</dt>
      <dd className="text-foreground/85">{children}</dd>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <div className="space-y-10">
      {experiences.map((exp) => (
        <article
          id={`experience-${exp.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          key={exp.company}
          className="space-y-5 border-b border-line pb-8 last:border-b-0 last:pb-0"
        >
          <header className="flex items-center gap-3">
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={exp.logoWidth}
              height={exp.logoHeight}
              className="size-7 rounded-sm object-contain"
            />
            <h3 className="text-lg font-medium tracking-tight">
              {exp.href ? (
                <a
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </h3>
          </header>

          <dl className="space-y-1.5">
            <MetaRow label="Location">{exp.location}</MetaRow>
            <MetaRow label="Location type">{exp.locationType}</MetaRow>
            {exp.status && <MetaRow label="Status">{exp.status}</MetaRow>}
          </dl>

          <div className="space-y-6">
            {exp.roles.map((role) => (
              <div key={`${exp.company}-${role.title}`} className="space-y-3">
                <h4 className="text-base font-medium text-foreground">
                  {role.title}
                </h4>

                <dl className="space-y-1.5">
                  <MetaRow label="Employment Type">{role.type}</MetaRow>
                  <MetaRow label="Employment Period">{role.period}</MetaRow>
                  <MetaRow label="Duration">{role.duration}</MetaRow>
                </dl>

                {role.bullets && role.bullets.length > 0 && (
                  <ul className="list-disc space-y-1 pl-5 text-[15px] leading-6 text-foreground/85 marker:text-muted">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {role.tech && role.tech.length > 0 && (
                  <ul className="flex flex-wrap gap-1.5">
                    {role.tech.map((tech) => (
                      <li key={tech}>
                        <TechBadge>{tech}</TechBadge>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
