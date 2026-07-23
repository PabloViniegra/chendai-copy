export type InsightsSeriesItem = {
  date: string;
  unique_visitors: number;
  total_sessions: number;
};

export type InsightsData = {
  summary: {
    unique_visitors: number;
    total_sessions: number;
    total_screen_views: number;
    avg_session_duration_seconds: number;
  };
  series: InsightsSeriesItem[];
  startDate: string;
  endDate: string;
};

const series: InsightsSeriesItem[] = [
  { date: "2025-06-23", unique_visitors: 312, total_sessions: 367 },
  { date: "2025-06-24", unique_visitors: 401, total_sessions: 478 },
  { date: "2025-06-25", unique_visitors: 528, total_sessions: 612 },
  { date: "2025-06-26", unique_visitors: 612, total_sessions: 718 },
  { date: "2025-06-27", unique_visitors: 489, total_sessions: 573 },
  { date: "2025-06-28", unique_visitors: 423, total_sessions: 502 },
  { date: "2025-06-29", unique_visitors: 388, total_sessions: 459 },
  { date: "2025-06-30", unique_visitors: 542, total_sessions: 631 },
  { date: "2025-07-01", unique_visitors: 678, total_sessions: 789 },
  { date: "2025-07-02", unique_visitors: 723, total_sessions: 845 },
  { date: "2025-07-03", unique_visitors: 591, total_sessions: 698 },
  { date: "2025-07-04", unique_visitors: 502, total_sessions: 598 },
  { date: "2025-07-05", unique_visitors: 467, total_sessions: 553 },
  { date: "2025-07-06", unique_visitors: 489, total_sessions: 581 },
  { date: "2025-07-07", unique_visitors: 712, total_sessions: 834 },
  { date: "2025-07-08", unique_visitors: 798, total_sessions: 932 },
  { date: "2025-07-09", unique_visitors: 845, total_sessions: 988 },
  { date: "2025-07-10", unique_visitors: 723, total_sessions: 856 },
  { date: "2025-07-11", unique_visitors: 612, total_sessions: 728 },
  { date: "2025-07-12", unique_visitors: 534, total_sessions: 641 },
  { date: "2025-07-13", unique_visitors: 489, total_sessions: 583 },
  { date: "2025-07-14", unique_visitors: 723, total_sessions: 856 },
  { date: "2025-07-15", unique_visitors: 812, total_sessions: 952 },
  { date: "2025-07-16", unique_visitors: 845, total_sessions: 992 },
  { date: "2025-07-17", unique_visitors: 712, total_sessions: 841 },
  { date: "2025-07-18", unique_visitors: 589, total_sessions: 702 },
  { date: "2025-07-19", unique_visitors: 498, total_sessions: 593 },
  { date: "2025-07-20", unique_visitors: 432, total_sessions: 518 },
  { date: "2025-07-21", unique_visitors: 612, total_sessions: 728 },
  { date: "2025-07-22", unique_visitors: 689, total_sessions: 813 },
  { date: "2025-07-23", unique_visitors: 612, total_sessions: 728 },
];

export const INSIGHTS: InsightsData = {
  summary: {
    unique_visitors: series.reduce(
      (sum, item) => sum + item.unique_visitors,
      0,
    ),
    total_sessions: series.reduce((sum, item) => sum + item.total_sessions, 0),
    total_screen_views: 139369,
    avg_session_duration_seconds: 392,
  },
  series,
  startDate: series[0]?.date ?? "2025-06-23",
  endDate: series[series.length - 1]?.date ?? "2025-07-23",
};
