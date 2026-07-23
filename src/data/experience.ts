export type ExperienceRole = {
  title: string;
  type: string;
  period: string;
  duration: string;
  bullets?: string[];
  tech?: string[];
};

export type ExperienceCompany = {
  company: string;
  href?: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  location: string;
  locationType: string;
  status?: string;
  roles: ExperienceRole[];
};

export const experiences: ExperienceCompany[] = [
  {
    company: "shadcncraft",
    href: "https://shadcncraft.com",
    logo: "/companies/shadcncraft.svg",
    logoWidth: 28,
    logoHeight: 28,
    location: "Melbourne, Australia",
    locationType: "(Remote)",
    status: "Current",
    roles: [
      {
        title: "Design Engineer",
        type: "Full-time",
        period: "01.2026—",
        duration: "7m",
        bullets: [
          "Design and build Pro components/blocks, from Figma to production-ready React.",
          "Build and maintain the @shadcncraft registry.",
          "Build and enhance features for the marketing website.",
          "Build and maintain Storybook documentation.",
          "Design and build the Upgrade Bundle feature.",
        ],
        tech: [
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "shadcn/registry",
          "Figma",
          "Polar",
          "Storybook",
          "Design",
        ],
      },
    ],
  },
  {
    company: "Quaric",
    href: "https://quaric.com",
    logo: "/companies/quaric.svg",
    logoWidth: 28,
    logoHeight: 28,
    location: "Can Tho, Viet Nam",
    locationType: "(Remote)",
    status: "Current",
    roles: [
      {
        title: "Design Engineer",
        type: "Part-time",
        period: "03.2024—",
        duration: "2y 5m",
        tech: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension",
          "UI/UX Design",
          "UX Writing",
          "Design System",
          "Brand Design",
          "Figma",
        ],
      },
      {
        title: "Founder",
        type: "Part-time",
        period: "03.2024—",
        duration: "2y 5m",
        tech: ["Business Ownership", "Business Law", "Business Tax"],
      },
    ],
  },
  {
    company: "Simplamo",
    logo: "/companies/simplamo.webp",
    logoWidth: 28,
    logoHeight: 28,
    location: "Ho Chi Minh City, Viet Nam",
    locationType: "(On-site)",
    roles: [
      {
        title: "Senior Frontend Developer",
        type: "Full-time",
        period: "10.2022—01.2026",
        duration: "3y 4m",
        tech: [
          "TypeScript",
          "Next.js",
          "React Native",
          "MobX",
          "MobX-State-Tree",
          "Tailwind CSS",
          "Dify",
          "Zalo Mini App",
          "Agile",
        ],
      },
      {
        title: "UI Lead",
        type: "Full-time",
        period: "10.2022—01.2026",
        duration: "3y 4m",
        tech: ["Creativity", "UI/UX Design", "Figma"],
      },
    ],
  },
];
