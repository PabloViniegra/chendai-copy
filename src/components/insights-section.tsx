import { INSIGHTS, type InsightsSeriesItem } from "@/data/insights";

const CHART_W = 600;
const CHART_H = 200;
const PADDING_X = 32;
const PADDING_Y = 16;

function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
}

function formatDateRange(startDate: string, endDate: string) {
  const fmt = (date: string) => {
    const [, month, day] = date.split("-");
    return `${day}.${month}`;
  };
  return `${fmt(startDate)} – ${fmt(endDate)}`;
}

function buildPath(
  series: InsightsSeriesItem[],
  key: "unique_visitors" | "total_sessions",
  maxValue: number,
) {
  if (series.length === 0) {
    return "";
  }

  const innerW = CHART_W - PADDING_X * 2;
  const innerH = CHART_H - PADDING_Y * 2;

  return series
    .map((item, idx) => {
      const x = PADDING_X + (idx / (series.length - 1)) * innerW;
      const y = PADDING_Y + innerH - (item[key] / maxValue) * innerH;
      return `${idx === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export function InsightsSection() {
  const data = INSIGHTS;
  let maxValue = 0;
  for (const item of data.series) {
    if (item.total_sessions > maxValue) maxValue = item.total_sessions;
    if (item.unique_visitors > maxValue) maxValue = item.unique_visitors;
  }

  const sessionsPath = buildPath(data.series, "total_sessions", maxValue);
  const visitorsPath = buildPath(data.series, "unique_visitors", maxValue);
  const innerH = CHART_H - PADDING_Y * 2;

  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="relative"
    >
      <h2
        id="insights-heading"
        className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase"
      >
        Insights{" "}
        <span className="text-muted-foreground">
          ({formatDateRange(data.startDate, data.endDate)})
        </span>
      </h2>

      <div className="relative border-y border-line">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-line" />
          <div className="border-r border-line max-md:hidden" />
          <div className="border-r border-line max-md:hidden" />
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2 p-4 max-sm:nth-[2n+1]:border-b sm:nth-[3n+1]:border-b md:nth-[3n+1]:border-b-0">
            <dt className="text-sm text-muted-foreground">Unique visitors</dt>
            <dd className="font-semibold text-lg tabular-nums">
              {data.summary.unique_visitors.toLocaleString()}
            </dd>
          </div>

          <div className="flex flex-col gap-2 p-4 max-sm:nth-[2n]:border-b max-sm:nth-[2n+1]:border-b sm:nth-[2n]:border-b">
            <dt className="text-sm text-muted-foreground">Sessions</dt>
            <dd className="font-semibold text-lg tabular-nums">
              {data.summary.total_sessions.toLocaleString()}
            </dd>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <dt className="text-sm text-muted-foreground">Views</dt>
            <dd className="font-semibold text-lg tabular-nums">
              {data.summary.total_screen_views.toLocaleString()}
            </dd>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <dt className="text-sm text-muted-foreground">Session duration</dt>
            <dd className="font-semibold text-lg tabular-nums">
              {formatDuration(data.summary.avg_session_duration_seconds)}
            </dd>
          </div>
        </dl>
      </div>

      <figure className="relative mt-4">
        <svg
          viewBox={`0 0 ${CHART_W} ${CHART_H}`}
          className="aspect-2/1 w-full sm:aspect-3/1"
          preserveAspectRatio="none"
          role="img"
          aria-label={`Traffic from ${data.startDate} to ${data.endDate}: ${data.summary.total_sessions.toLocaleString()} sessions and ${data.summary.unique_visitors.toLocaleString()} unique visitors`}
        >
          <title>Traffic over time: sessions and unique visitors</title>
          <g className="text-foreground/20">
            {[0.25, 0.5, 0.75].map((ratio) => (
              <line
                key={ratio}
                x1={PADDING_X}
                x2={CHART_W - PADDING_X}
                y1={PADDING_Y + innerH * ratio}
                y2={PADDING_Y + innerH * ratio}
                stroke="currentColor"
                strokeWidth={1}
                strokeDasharray="2 4"
              />
            ))}
          </g>

          <path
            d={sessionsPath}
            fill="none"
            stroke="var(--muted-foreground)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d={visitorsPath}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <figcaption className="pointer-events-none absolute right-4 bottom-2 font-mono text-xs leading-none text-muted-foreground select-none">
          FIG_002
        </figcaption>
      </figure>
    </section>
  );
}
