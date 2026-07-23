export type EducationEntry = {
  school: string;
  period: string;
  degree?: string;
  field?: string;
  tech?: string[];
};

export const education: EducationEntry[] = [
  {
    school: "University of Science — VNUHCM",
    period: "08.2018—08.2026",
    degree: "Bachelor's degree",
    field: "Information Systems",
    tech: [
      "C++",
      "Java",
      "Python",
      "PHP",
      "DSA",
      "Advanced Databases",
      "Systems Design",
      "Distributed Systems",
      "Software Engineering",
    ],
  },
  {
    school: "Ly Tu Trong High School for the Gifted",
    period: "08.2015—06.2018",
    field: "Computer Science",
    tech: ["Algorithms", "C++", "PHP", "MySQL", "Laravel", "Node.js", "Pandoc"],
  },
  {
    school: "Thuan Hung Secondary School",
    period: "08.2011—06.2015",
    tech: ["Pascal", "HTML", "CSS", "JavaScript", "NukeViet"],
  },
];
