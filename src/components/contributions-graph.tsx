import {
  computeMonthLabels,
  formatLongDate,
  generateDays,
  groupByWeek,
  totalCount,
} from "@/lib/contributions";

const CELL = 11;
const GAP = 3;
const COL_W = CELL + GAP;
const ROW_H = CELL + GAP;
const LABEL_W = 26;
const TOP_PAD = 22;
const BOTTOM_PAD = 8;
const DAY_LABELS: Record<number, string> = {
  1: "Mon",
  3: "Wed",
  5: "Fri",
};

const MONTH_NARROW = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const SUMMARY_LABELS = ["Less", "More"];

export function ContributionsGraph() {
  const days = generateDays();
  const weeks = groupByWeek(days);
  const monthLabels = computeMonthLabels(weeks);
  const total = totalCount(days);

  const width = LABEL_W + weeks.length * COL_W;
  const height = TOP_PAD + 7 * ROW_H + BOTTOM_PAD;

  return (
    <section aria-labelledby="contributions-heading" className="mt-16 sm:mt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2
          id="contributions-heading"
          className="font-mono text-xs tracking-widest text-muted"
        >
          GitHub Contributions
        </h2>
        <p className="font-mono text-xs text-foreground/70">
          <span className="tabular-nums">{total.toLocaleString("en-US")}</span>{" "}
          contributions in the past year
        </p>
      </div>

      <div className="mt-6 overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          role="img"
          aria-label={`GitHub contributions graph showing ${total.toLocaleString(
            "en-US",
          )} contributions in the past year`}
          className="block max-w-full"
          style={{ color: "var(--muted)" }}
        >
          <g>
            {monthLabels.map(({ col, label }) => (
              <text
                key={`${col}-${label}`}
                x={LABEL_W + col * COL_W}
                y={TOP_PAD - 8}
                fill="currentColor"
                fontSize={10}
                fontFamily="var(--font-geist-mono)"
              >
                {label}
              </text>
            ))}
          </g>

          <g>
            {Object.entries(DAY_LABELS).map(([weekday, label]) => (
              <text
                key={weekday}
                x={0}
                y={TOP_PAD + Number(weekday) * ROW_H + CELL - 1}
                fill="currentColor"
                fontSize={10}
                fontFamily="var(--font-geist-mono)"
              >
                {label}
              </text>
            ))}
          </g>

          <g>
            {weeks.map((week, col) =>
              week.map((day, row) => (
                <rect
                  key={day.date}
                  x={LABEL_W + col * COL_W}
                  y={TOP_PAD + row * ROW_H}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={`var(--contrib-${day.level})`}
                >
                  <title>
                    {day.count === 0
                      ? `No contributions on ${formatLongDate(day.date)}`
                      : `${day.count} contribution${
                          day.count === 1 ? "" : "s"
                        } on ${formatLongDate(day.date)}`}
                  </title>
                </rect>
              )),
            )}
          </g>
        </svg>
      </div>

      <div className="mt-3 flex items-center justify-end gap-2 font-mono text-xs text-muted">
        <span>{SUMMARY_LABELS[0]}</span>
        <span aria-hidden="true" className="flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              key={level}
              className="block size-2.5 rounded-sm"
              style={{ background: `var(--contrib-${level})` }}
            />
          ))}
        </span>
        <span>{SUMMARY_LABELS[1]}</span>
      </div>
    </section>
  );
}

export const _MONTH_NARROW = MONTH_NARROW;
