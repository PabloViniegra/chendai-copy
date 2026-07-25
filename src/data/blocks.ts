export type Block = {
  name: string;
  category: string;
  slug: string;
};

export const blocks: Block[] = [
  { name: "Hero 01", category: "hero", slug: "hero-01" },
  { name: "Blog 01", category: "blog", slug: "blog-01" },
  { name: "Experience 01", category: "experience", slug: "experience-01" },
  { name: "Metrics 01", category: "metrics", slug: "metrics-01" },
  {
    name: "Social Proof 01",
    category: "social-proof",
    slug: "social-proof-01",
  },
  { name: "Team 01", category: "team", slug: "team-01" },
];
