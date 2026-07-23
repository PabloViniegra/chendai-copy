export type StackItem = {
  name: string;
  href: string;
};

export type StackCategory = {
  index: string;
  title: string;
  items: StackItem[];
};

export const stack: StackCategory[] = [
  {
    index: "01",
    title: "Language",
    items: [
      { name: "TypeScript", href: "https://www.typescriptlang.org" },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "Python", href: "https://www.python.org" },
    ],
  },
  {
    index: "02",
    title: "Frontend",
    items: [
      { name: "React", href: "https://react.dev" },
      { name: "Next.js", href: "https://nextjs.org" },
      { name: "Tailwind CSS", href: "https://tailwindcss.com" },
      { name: "shadcn/ui", href: "https://ui.shadcn.com" },
      { name: "Radix UI", href: "https://www.radix-ui.com" },
      { name: "Base UI", href: "https://base-ui.com" },
      { name: "Motion", href: "https://motion.dev" },
      { name: "Expo", href: "https://expo.dev" },
      { name: "TanStack", href: "https://tanstack.com" },
      { name: "MobX-State-Tree", href: "https://mobx-state-tree.js.org" },
    ],
  },
  {
    index: "03",
    title: "Backend & Database",
    items: [
      { name: "Node.js", href: "https://nodejs.org" },
      { name: "Bun", href: "https://bun.sh" },
      { name: "PostgreSQL", href: "https://www.postgresql.org" },
      { name: "MongoDB", href: "https://www.mongodb.com" },
      { name: "Redis", href: "https://redis.io" },
      { name: "nginx", href: "https://nginx.org" },
    ],
  },
  {
    index: "04",
    title: "Workflow & AI",
    items: [
      { name: "Cursor", href: "https://cursor.com" },
      { name: "Claude", href: "https://claude.ai" },
      { name: "Gemini", href: "https://gemini.google.com" },
      { name: "ChatGPT", href: "https://chatgpt.com" },
      { name: "Git", href: "https://git-scm.com" },
      { name: "GitHub", href: "https://github.com" },
      { name: "Docker", href: "https://www.docker.com" },
      { name: "Vercel", href: "https://vercel.com" },
    ],
  },
  {
    index: "05",
    title: "Analytics",
    items: [
      { name: "OpenPanel", href: "https://openpanel.dev" },
      { name: "PostHog", href: "https://posthog.com" },
    ],
  },
  {
    index: "06",
    title: "Design",
    items: [
      { name: "Figma", href: "https://www.figma.com" },
      { name: "Paper", href: "https://paper.design" },
      {
        name: "Photoshop",
        href: "https://www.adobe.com/vn_en/products/photoshop.html",
      },
    ],
  },
];
