import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";
import { CommandPalette } from "@/components/command-palette-loader";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteBottomNav } from "@/components/site-bottom-nav";
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

const themeScript = `(function(){try{var t=localStorage.getItem('theme:v1')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.dataset.theme=t;document.documentElement.dataset.avatarLights=localStorage.getItem('avatarLights:v1')||'on';}catch(e){}})();`;

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
        <meta name="theme-color" content="#ffffff" />
        <link rel="preload" as="image" href="/avatars/avatar-light-on.webp" />
        <link
          rel="preload"
          as="image"
          href="/avatars/avatar-dark-on.webp"
          media="(prefers-color-scheme: dark)"
        />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: no-FOUC theme bootstrap
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <SiteFooter />
        <SiteBottomNav />
        <ScrollToTop />
        <CommandPalette links={commandPaletteLinks} />
      </body>
    </html>
  );
}
