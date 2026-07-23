export type Level = 0 | 1 | 2 | 3 | 4;

export type Day = {
  date: string;
  count: number;
  level: Level;
  weekday: number;
};

export type Week = Day[];

export type MonthLabel = {
  col: number;
  label: string;
};

const MONTHS = [
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

function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function levelFromCount(count: number): Level {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 12) return 3;
  return 4;
}

export function generateDays(endDate: Date = new Date()): Day[] {
  const today = new Date(endDate);
  today.setHours(0, 0, 0, 0);

  const start = new Date(today);
  start.setDate(start.getDate() - 52 * 7);
  start.setDate(start.getDate() - start.getDay());

  const seed = start.getTime();
  const rand = mulberry32(seed);

  const days: Day[] = [];
  const cursor = new Date(start);

  while (cursor <= today) {
    const dow = cursor.getDay();
    const isWeekend = dow === 0 || dow === 6;
    const baseProb = isWeekend ? 0.35 : 0.78;
    const active = rand() < baseProb;

    let count = 0;
    if (active) {
      const intensity = rand();
      if (intensity < 0.55) count = 1 + Math.floor(rand() * 3);
      else if (intensity < 0.85) count = 4 + Math.floor(rand() * 6);
      else if (intensity < 0.97) count = 10 + Math.floor(rand() * 12);
      else count = 20 + Math.floor(rand() * 15);
    }

    days.push({
      date: formatDate(cursor),
      count,
      level: levelFromCount(count),
      weekday: dow,
    });

    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

export function groupByWeek(days: Day[]): Week[] {
  const weeks: Week[] = [];
  let current: Week = [];
  for (const day of days) {
    current.push(day);
    if (day.weekday === 6) {
      weeks.push(current);
      current = [];
    }
  }
  if (current.length > 0) weeks.push(current);
  return weeks;
}

export function computeMonthLabels(weeks: Week[]): MonthLabel[] {
  const labels: MonthLabel[] = [];
  let prevMonth = -1;
  weeks.forEach((week, col) => {
    const firstDay = week[0];
    if (!firstDay) return;
    const m = new Date(firstDay.date).getMonth();
    if (m !== prevMonth) {
      labels.push({ col, label: MONTHS[m] ?? "" });
      prevMonth = m;
    }
  });
  return labels;
}

export function totalCount(days: Day[]): number {
  return days.reduce((sum, d) => sum + d.count, 0);
}

export function formatLongDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
