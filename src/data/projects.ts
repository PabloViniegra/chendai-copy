export type Project = {
  name: string;
  period: string;
  href: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  description: string;
  bullets?: string[];
  tech?: string[];
};

export const projects: Project[] = [
  {
    name: "React Wheel Picker",
    period: "05.2025—",
    href: "https://react-wheel-picker.chanhdai.com/",
    logo: "/projects/react-wheel-picker.svg",
    logoWidth: 28,
    logoHeight: 28,
    description:
      "iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. / Backed by ▲Vercel OSS Program",
    bullets: [
      "Natural touch scrolling with smooth inertia, mouse drag and scroll for desktop",
      "Infinite loop scrolling",
      "Unstyled core for complete style customization",
      "Full keyboard navigation and type-ahead search",
    ],
    tech: [
      "Open Source",
      "React",
      "TypeScript",
      "Monorepo",
      "Turborepo",
      "pnpm-workspace",
      "Package Publishing",
      "NPM Registry",
      "GitHub Actions",
    ],
  },
  {
    name: "chanhdai.com",
    period: "01.2025—",
    href: "https://github.com/ncdai/chanhdai.com",
    logo: "/projects/chanhdaidotcom.svg",
    logoWidth: 28,
    logoHeight: 28,
    description: "A pixel-perfect dev portfolio and shadcn registry.",
    bullets: [
      "Built with Next.js 16, Tailwind CSS v4, shadcn/ui, MDX",
      "Light/Dark themes, PWA, vCard integration, SEO-optimized",
      "Centralized content layer for blog posts and component docs",
      "Dynamic OG images, RSS feed, /llms.txt for AI-readability",
      "Custom shadcn registry for reusable components, hooks, pages",
      "Open Source Program: ▲Vercel, Claude, 1Password, Mintlify, OpenPanel",
    ],
    tech: [
      "Open Source",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MDX",
      "Contentlayer",
      "shadcn/registry",
      "Fumadocs",
      "Vercel OG",
      "PWA",
    ],
  },
  {
    name: "quaric.com",
    period: "03.2024—",
    href: "https://quaric.com/",
    logo: "/projects/quaricdotcom.svg",
    logoWidth: 28,
    logoHeight: 28,
    description:
      "An online English tutoring platform with 1-on-1 classes, study materials, and progress tracking.",
    bullets: [
      "Designed and built the marketing website, content platform, and admin dashboard",
      "Implemented the booking and payment flow with VNPAY-QR integration",
      "Built a browser extension to help users learn vocabulary in context",
      "Authored the UX writing system and design system documentation",
    ],
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
    name: "ZaDark",
    period: "01.2022—",
    href: "https://zadark.com/",
    logo: "/projects/zadark.svg",
    logoWidth: 28,
    logoHeight: 28,
    description:
      "A popular theme for Zalo (Viet Nam's #1 messaging app) with dark mode, custom fonts, and ad-blocking.",
    bullets: [
      "Built a desktop app (Electron) and browser extension",
      "Reached 80k+ downloads and 30k+ active users",
      "Handled auto-updates, distribution, and licensing",
    ],
    tech: [
      "Open Source",
      "JavaScript",
      "Electron",
      "Browser Extension",
      "Tailwind CSS",
    ],
  },
  {
    name: "QABox",
    period: "07.2023—07.2023",
    href: "https://github.com/ncdai/qabox",
    description:
      "A Q&A platform built as a university project — earned a perfect 10/10 score.",
    bullets: [
      "Course: Distributed Applications — FIT@HCMUS",
      "Project Score: 10/10",
      "Source Code: https://github.com/ncdai/qabox",
    ],
    tech: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
  },
  {
    name: "TaskBox",
    period: "07.2023—07.2023",
    href: "https://github.com/ncdai/taskbox",
    description:
      "A Trello-like task management app — earned a perfect 10/10 score in Distributed Applications.",
    bullets: [
      "Course: Distributed Applications — FIT@HCMUS",
      "Project Score: 10/10",
      "Source Code: https://github.com/ncdai/taskbox",
    ],
    tech: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
  },
  {
    name: "DaiChat App",
    period: "07.2020—07.2020",
    href: "https://www.youtube.com/watch?v=H5U3J_W1low",
    description:
      "A real-time chat application built with Java — earned a perfect 10/10 score.",
    bullets: [
      "Course: Java Application Programming — FIT@HCMUS",
      "Requirement: Developed a real-time chat application using Java technologies",
      "Project Score: 10/10",
      "Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server",
      "Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client",
    ],
    tech: ["University Project", "Java", "Java Swing", "Java Networking"],
  },
  {
    name: "QLSV App",
    period: "06.2020—06.2020",
    href: "https://www.youtube.com/watch?v=tG9SZEBrwog",
    description:
      "A student management system with role-based functionalities — earned a perfect 10/10 score.",
    bullets: [
      "Course: Java Application Programming — FIT@HCMUS",
      "Requirement: Built a student management system with role-based functionalities using Java technologies",
      "Project Score: 10/10",
      "Source Code: https://github.com/ncdai/ltudjava-summer2020-hibernate",
    ],
    tech: ["University Project", "Java", "Java Swing", "Hibernate", "MySQL"],
  },
  {
    name: "Penphy",
    period: "01.2019—08.2019",
    href: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
    description:
      "An English learning app for high school students — won 2nd Prize at Business Startup Competition 2019.",
    bullets: ["2nd Prize — Business Startup Competition 2019"],
    tech: ["Startup Project", "JavaScript", "React Native"],
  },
  {
    name: "UnlimitedStudy",
    period: "01.2017—08.2018",
    href: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
    description:
      "A teaching and learning support platform for teachers and high school students — reached 7k+ users.",
    bullets: [
      "UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.",
      "3rd Prize — National Science and Engineering Fair 2018 (ViSEF)",
      "1st Prize — Can Tho City Science and Engineering Fair 2018",
      "3rd Prize — National Young Informatics Contest 2018",
      "2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018",
      "3rd Prize — Can Tho City Young Informatics Contest 2018",
      "Reached 7k+ users, mainly high school students in Can Tho City",
      "Pilot implemented in high schools across Can Tho City with English quizzes",
    ],
    tech: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
      "jQuery",
      "Bootstrap 3",
    ],
  },
  {
    name: "DMessage",
    period: "05.2017—05.2017",
    href: "https://github.com/ncdai/DMessage",
    description:
      "A Messenger clone built to practice real-time communication using Socket.IO.",
    bullets: [
      "A Messenger clone built to practice real-time communication using Socket.IO.",
      "This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
    ],
    tech: [
      "Self-learning Project",
      "Pet Project",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose ODM",
    ],
  },
  {
    name: "Study English",
    period: "11.2016—12.2017",
    href: "https://www.youtube.com/watch?v=OYgugvjqU4A",
    description:
      "A free, mobile-friendly website for high school English learning — won multiple national prizes.",
    bullets: [
      "Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.",
      "Consolation Prize — National Youth and Children's Creativity Contest 2016",
      "1st Prize — Can Tho City Youth and Children's Creativity Contest 2016",
      "Consolation Prize — Can Tho City Young Informatics Contest 2016",
    ],
    tech: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
  },
];
