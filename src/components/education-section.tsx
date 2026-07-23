import { education } from "@/data/education";
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

export function EducationSection() {
  return (
    <div className="space-y-10">
      {education.map((entry) => (
        <article key={entry.school} className="space-y-3">
          <h3 className="text-lg font-medium tracking-tight">{entry.school}</h3>

          <dl className="space-y-1.5">
            <MetaRow label="Period">{entry.period}</MetaRow>
            {entry.degree && <MetaRow label="Degree">{entry.degree}</MetaRow>}
            {entry.field && (
              <MetaRow label="Field of study">{entry.field}</MetaRow>
            )}
          </dl>

          {entry.tech && entry.tech.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {entry.tech.map((tech) => (
                <li key={tech}>
                  <TechBadge>{tech}</TechBadge>
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
