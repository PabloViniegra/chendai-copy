"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Variant = "light-off" | "light-on" | "dark-off" | "dark-on";

const variants: Record<Variant, { src: string; alt: string }> = {
  "light-off": {
    src: "/avatars/avatar-light-off.webp",
    alt: "Avatar with lights off in light mode",
  },
  "light-on": {
    src: "/avatars/avatar-light-on.webp",
    alt: "Avatar with lights on in light mode",
  },
  "dark-off": {
    src: "/avatars/avatar-dark-off.webp",
    alt: "Avatar with lights off in dark mode",
  },
  "dark-on": {
    src: "/avatars/avatar-dark-on.webp",
    alt: "Avatar with lights on in dark mode",
  },
};

export function AvatarToggle() {
  const [lightsOn, setLightsOn] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return <div className="size-40 rounded-full border border-line" />;
  }

  const variant: Variant = `${isDark ? "dark" : "light"}-${lightsOn ? "on" : "off"}`;
  const { src, alt } = variants[variant];

  return (
    <button
      type="button"
      onClick={() => setLightsOn((v) => !v)}
      aria-label={`Turn lights ${lightsOn ? "off" : "on"}`}
      aria-pressed={lightsOn}
      className="group relative inline-block rounded-full transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Image
        src={src}
        alt={alt}
        width={160}
        height={160}
        priority
        className="size-40 rounded-full border border-line bg-accent-muted object-cover"
      />
    </button>
  );
}
