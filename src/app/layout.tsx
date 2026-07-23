import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";
import { CommandPalette } from "@/components/command-palette";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const commandPaletteLinks = [
  { href: "/components", label: "Components" },
  { href: "/blocks", label: "Blocks" },
  { href: "/blog", label: "Blog" },
  { href: "/sponsors", label: "Sponsors" },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark');}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Chánh Đại – Design Engineer",
  description: "Creating with code. Small details matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: no-FOUC theme bootstrap
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <SiteFooter />
        <CommandPalette links={commandPaletteLinks} />
      </body>
    </html>
  );
}
