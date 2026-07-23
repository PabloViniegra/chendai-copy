export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  credentialURL: string;
};

export const certifications: Certification[] = [
  {
    title: "Certificate of Trademark Registration No. 594593",
    issuer: "Intellectual Property Office of Viet Nam",
    issueDate: "2026-02-04",
    credentialURL:
      "https://drive.google.com/file/d/1XrT62TF4FjItkT2TVq29OzJRm32Bcwfk/view?usp=sharing",
  },
  {
    title: "Gemini Certified Educator",
    issuer: "Google for Education",
    issueDate: "2025-12-09",
    credentialURL:
      "https://edu.google.accredible.com/c05d3bad-3be0-4915-b41c-b8384357093a",
  },
  {
    title: "Certificate of Trademark Registration No. 584461",
    issuer: "Intellectual Property Office of Viet Nam",
    issueDate: "2025-12-04",
    credentialURL:
      "https://drive.google.com/file/d/1paFtOlUGRgH6hXJ47hl3kxCA4HflAHje/view?usp=sharing",
  },
  {
    title: "Animations on the Web",
    issuer: "animations.dev",
    issueDate: "2025-11-03",
    credentialURL:
      "https://animations.dev/certificate/dfb419c8-5ed7-43f2-b60c-446bc50a39b1",
  },
  {
    title: "Certificate of Trademark Registration No. 565092",
    issuer: "Intellectual Property Office of Viet Nam",
    issueDate: "2025-08-18",
    credentialURL:
      "https://drive.google.com/file/d/1NgRp81ZAAUKEtuI9RefG0e8yni6JkoE8/view?usp=sharing",
  },
  {
    title: "Certificate of Trademark Registration No. 543682",
    issuer: "Intellectual Property Office of Viet Nam",
    issueDate: "2025-05-08",
    credentialURL:
      "https://drive.google.com/file/d/1x7YzlK1kyz16h28ux9k3KAwnZFAabsvq/view?usp=sharing",
  },
  {
    title: "Next.js SEO Fundamentals",
    issuer: "Vercel",
    issueDate: "2025-04-26",
    credentialURL:
      "https://nextjs.org/learn/certificate?course=seo&user=47463&certId=seo-47463-1745634751873",
  },
  {
    title: "Next.js App Router Fundamentals",
    issuer: "Vercel",
    issueDate: "2025-04-26",
    credentialURL:
      "https://nextjs.org/learn/certificate?course=dashboard-app&user=47463&certId=dashboard-app-47463-1745633258744",
  },
  {
    title: "React Foundations for Next.js",
    issuer: "Vercel",
    issueDate: "2025-04-26",
    credentialURL:
      "https://nextjs.org/learn/certificate?course=react-foundations&user=47463&certId=react-foundations-47463-1745634245158",
  },
  {
    title: "Certificate of Copyright Registration No. 0040/2025/QTG",
    issuer: "Copyright Office of Viet Nam",
    issueDate: "2025-01-02",
    credentialURL:
      "https://drive.google.com/file/d/1kVBByVLlYPyyUJvxKga670wvVPNmZ2nV/view?usp=sharing",
  },
  {
    title: "Vietnamese Standardized Test of English Proficiency (CEFR B1)",
    issuer: "USSH-VNUHCM",
    issueDate: "2024-12-17",
    credentialURL: "https://vbcc.hcmussh.edu.vn/",
  },
  {
    title: "Certificate of Copyright Registration No. 7994/2024/QTG",
    issuer: "Copyright Office of Viet Nam",
    issueDate: "2024-09-18",
    credentialURL:
      "https://drive.google.com/file/d/1otjV4GNOLFj4JD2tHWLuZpUIVyITYNUy/view?usp=sharing",
  },
  {
    title: "Engaging in Persuasive and Credible Communication",
    issuer: "National University of Singapore",
    issueDate: "2022-09-13",
    credentialURL: "https://coursera.org/verify/C6DHB9A5XQHV",
  },
  {
    title: "Introduction to Databases",
    issuer: "Meta",
    issueDate: "2022-08-28",
    credentialURL: "https://coursera.org/verify/YV5VQ5MXZ5YH",
  },
  {
    title: "Solving Problems with Creative and Critical Thinking",
    issuer: "IBM Skills Network",
    issueDate: "2022-08-27",
    credentialURL: "https://coursera.org/verify/4UKZQJGM2932",
  },
  {
    title: "Digital Skills: Social Media",
    issuer: "Accenture",
    issueDate: "2022-08-27",
    credentialURL: "https://www.futurelearn.com/certificates/pc4345i",
  },
  {
    title: "The Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    issueDate: "2022-08-22",
    credentialURL:
      "https://drive.google.com/file/d/14laAMWmVKhCfgKwVEgJyWse7o0sZDD4N/view?usp=sharing",
  },
  {
    title: "Microsoft Office Specialist: Microsoft Office PowerPoint 2013",
    issuer: "Microsoft",
    issueDate: "2017-04-16",
    credentialURL:
      "https://drive.google.com/file/d/117DE6bMkHvRqXbED2tmSMNkbx9s7OahM/view?usp=sharing",
  },
  {
    title: "Google Code-in 2016",
    issuer: "Google",
    issueDate: "2017-01-16",
    credentialURL:
      "https://drive.google.com/file/d/162RXtAVIZEvfx6LvP3xeBj-cSI9ZpPUX/view?usp=sharing",
  },
  {
    title: "HSGS Olympiad 2016",
    issuer: "HUS High School for Gifted Students",
    issueDate: "2016-05-08",
    credentialURL:
      "https://drive.google.com/file/d/1eKv-2ldfw8-hF27sKfKWXL8MmwcSkzPq/view?usp=sharing",
  },
  {
    title: "Microsoft Office Specialist: Microsoft Office Word 2013",
    issuer: "Microsoft",
    issueDate: "2016-04-24",
    credentialURL:
      "https://drive.google.com/file/d/1-NHhjKlQbhlcO7bpRue1XzDgDaudOf2N/view?usp=sharing",
  },
];

export function formatCertDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${day}.${month}.${year}`;
}
