import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";
import { CommandPalette } from "@/components/command-palette-loader";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteBottomNav } from "@/components/site-bottom-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { THEME_COLOR_LIGHT } from "@/lib/theme-colors";
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
  weight: "400",
  display: "swap",
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme:v1')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.dataset.theme=t;document.documentElement.dataset.avatarLights=localStorage.getItem('avatarLights:v1')||'on';}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://chanhdai.com"),
  title: {
    default: "Chánh Đại – Design Engineer",
    template: "%s – Chánh Đại",
  },
  description: "Creating with code. Small details matter.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "Chánh Đại – Design Engineer",
    description: "Creating with code. Small details matter.",
    siteName: "Chánh Đại",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chánh Đại – Design Engineer",
    description: "Creating with code. Small details matter.",
  },
  alternates: {
    canonical: "/",
  },
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
        <meta name="theme-color" content={THEME_COLOR_LIGHT} />
        <link
          rel="preconnect"
          href="https://unavatar.io"
          crossOrigin="anonymous"
        />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: no-FOUC theme bootstrap
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only fixed top-2 left-2 z-skip-link rounded-md bg-background px-4 py-2 font-medium text-foreground shadow-lg focus:not-sr-only"
        >
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <SiteBottomNav />
        <ScrollToTop />
        <CommandPalette links={commandPaletteLinks} />
      </body>
    </html>
  );
}
