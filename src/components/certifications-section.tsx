import { ArrowUpRightIcon, CheckCircleIcon } from "@/components/icons";
import { LinedSection } from "@/components/lined-section";
import { ShowMore } from "@/components/show-more";
import { certifications, formatCertDate } from "@/data/certifications";

const VISIBLE_LIMIT = 6;

export function CertificationsSection() {
  const visible = certifications.slice(0, VISIBLE_LIMIT);
  const hidden = certifications.slice(VISIBLE_LIMIT);

  return (
    <LinedSection
      id="certs"
      title={
        <>
          Certifications{" "}
          <span className="font-mono text-xs text-muted">
            ({certifications.length})
          </span>
        </>
      }
    >
      <div>
        {visible.map((cert) => (
          <CertRow key={cert.credentialURL} cert={cert} />
        ))}

        <ShowMore limit={VISIBLE_LIMIT} total={certifications.length}>
          {hidden.map((cert) => (
            <CertRow key={cert.credentialURL} cert={cert} />
          ))}
        </ShowMore>
      </div>
    </LinedSection>
  );
}

function CertRow({ cert }: { cert: (typeof certifications)[number] }) {
  return (
    <article className="group/cert relative flex items-center border-b border-line first:border-t pr-2 transition-colors hover:bg-accent-muted">
      <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-accent-muted text-muted">
        <CheckCircleIcon className="size-4" />
      </div>

      <div className="flex-1 space-y-1 border-l border-dashed border-line p-4 pr-2">
        <h3 className="text-base font-medium leading-tight tracking-tight text-balance">
          <a
            href={cert.credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            {cert.title}
          </a>
        </h3>
        <dl className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          <div>
            <dt className="sr-only">Issued by</dt>
            <dd>
              <span aria-hidden>@</span>
              <span className="ml-0.5">{cert.issuer}</span>
            </dd>
          </div>
          <span aria-hidden className="text-line">
            |
          </span>
          <div>
            <dt className="sr-only">Issued on</dt>
            <dd className="font-mono">{formatCertDate(cert.issueDate)}</dd>
          </div>
        </dl>
      </div>

      <ArrowUpRightIcon className="size-4 shrink-0 text-muted" />
    </article>
  );
}
