import { AwardIcon, PaperclipIcon } from "@/components/icons";
import { LinedSection } from "@/components/lined-section";
import { ShowMore } from "@/components/show-more";
import { awards, formatAwardDate } from "@/data/awards";

const VISIBLE_LIMIT = 6;

export function AwardsSection() {
  const visible = awards.slice(0, VISIBLE_LIMIT);
  const hidden = awards.slice(VISIBLE_LIMIT);

  return (
    <LinedSection
      id="awards"
      title={
        <>
          Awards{" "}
          <span className="font-mono text-xs text-muted">
            ({awards.length})
          </span>
        </>
      }
    >
      <div>
        {visible.map((award) => (
          <AwardRow key={award.id} award={award} />
        ))}

        <ShowMore limit={VISIBLE_LIMIT} total={awards.length}>
          {hidden.map((award) => (
            <AwardRow key={award.id} award={award} />
          ))}
        </ShowMore>
      </div>
    </LinedSection>
  );
}

function AwardRow({ award }: { award: (typeof awards)[number] }) {
  return (
    <article className="list-row group/award flex items-center border-b border-line first:border-t transition-colors hover:bg-accent-muted">
      <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-accent-muted text-muted">
        <AwardIcon className="size-4" />
      </div>

      <div className="flex-1 border-l border-dashed border-line">
        <div className="flex items-center gap-2 p-4 pr-2">
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-medium leading-tight tracking-tight text-balance">
              {award.title}
            </h3>
            <dl className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
              <div>
                <dt className="sr-only">Prize</dt>
                <dd>{award.prize}</dd>
              </div>
              <span aria-hidden className="text-line">
                |
              </span>
              <div>
                <dt className="sr-only">Awarded in</dt>
                <dd className="font-mono">{formatAwardDate(award.date)}</dd>
              </div>
              <span aria-hidden className="text-line">
                |
              </span>
              <div>
                <dt className="sr-only">Received in Grade</dt>
                <dd>{award.grade}</dd>
              </div>
            </dl>
          </div>

          {award.referenceLink && (
            <a
              href={award.referenceLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open reference for ${award.title}`}
              className="relative flex size-7 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              <PaperclipIcon className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
