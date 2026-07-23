import Image from "next/image";
import { ChevronsUpDownIcon, LinkIcon } from "@/components/icons";
import { LinedSection } from "@/components/lined-section";
import { ShowMore } from "@/components/show-more";
import { TechBadge } from "@/components/tech-badge";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  defaultOpen,
}: {
  project: (typeof projects)[number];
  defaultOpen: boolean;
}) {
  const hasContent = project.description || project.bullets || project.tech;

  return (
    <article className="list-row group/project border-b border-line first:border-t">
      <div className="flex items-stretch transition-colors hover:bg-accent-muted">
        <details
          open={defaultOpen}
          className="flex flex-1 flex-col [&::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center gap-2 px-2 py-4 marker:content-none">
            <div className="mx-2 flex size-6 shrink-0 items-center justify-center">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={project.logoWidth ?? 24}
                  height={project.logoHeight ?? 24}
                  className="size-6 select-none rounded-sm object-contain grayscale transition-all group-hover/project:grayscale-0 group-open/project:grayscale-0"
                  unoptimized
                />
              ) : (
                <span className="flex size-6 items-center justify-center rounded-md border border-line bg-accent-muted font-mono text-[10px] text-muted">
                  {project.name.charAt(0)}
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1 border-l border-dashed border-line pl-4">
              <h3 className="text-base font-medium leading-tight tracking-tight">
                {project.name}
              </h3>
              <dl className="mt-1 flex items-center gap-1 font-mono text-xs text-muted">
                <dt className="sr-only">Period</dt>
                <dd>
                  <span>{project.period}</span>
                </dd>
              </dl>
            </div>

            {hasContent && (
              <ChevronsUpDownIcon
                aria-hidden
                className="mr-2 size-4 shrink-0 text-muted transition-transform group-open:rotate-180"
              />
            )}
          </summary>

          {hasContent && (
            <div className="space-y-4 border-t border-line p-4">
              {project.description && (
                <p className="text-[15px] leading-6 text-foreground/85">
                  {project.description}
                </p>
              )}

              {project.bullets && project.bullets.length > 0 && (
                <ul className="list-disc space-y-1 pl-5 text-[15px] leading-6 text-foreground/85 marker:text-muted">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {project.tech && project.tech.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <TechBadge>{tech}</TechBadge>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </details>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name}`}
          className="relative flex w-9 shrink-0 items-center justify-center text-muted transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
        >
          <LinkIcon className="size-4" />
        </a>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const visible = projects.slice(0, 4);
  const hidden = projects.slice(4);

  return (
    <LinedSection
      id="projects"
      title={
        <>
          Projects{" "}
          <span className="font-mono text-xs text-muted">
            ({projects.length})
          </span>
        </>
      }
    >
      <div>
        {visible.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            defaultOpen={index === 0}
          />
        ))}

        <ShowMore limit={4} total={projects.length}>
          {hidden.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              defaultOpen={false}
            />
          ))}
        </ShowMore>
      </div>
    </LinedSection>
  );
}
