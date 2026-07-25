"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Variant = "light-off" | "light-on" | "dark-off" | "dark-on";

const variants: Record<Variant, { src: string; alt: string }> = {
  "light-off": {
    src: "/avatars/320/avatar-light-off.webp",
    alt: "Avatar with lights off in light mode",
  },
  "light-on": {
    src: "/avatars/320/avatar-light-on.webp",
    alt: "Avatar with lights on in light mode",
  },
  "dark-off": {
    src: "/avatars/320/avatar-dark-off.webp",
    alt: "Avatar with lights off in dark mode",
  },
  "dark-on": {
    src: "/avatars/320/avatar-dark-on.webp",
    alt: "Avatar with lights on in dark mode",
  },
};

const DEFAULT_VARIANT: Variant = "light-on";

export function AvatarToggle() {
  const [variant, setVariant] = useState<Variant>(DEFAULT_VARIANT);

  useEffect(() => {
    setVariant((current) => {
      const isDark = document.documentElement.classList.contains("dark");
      const lightsOn = localStorage.getItem("avatarLights:v1") !== "off";
      return `${isDark ? "dark" : "light"}-${lightsOn ? "on" : "off"}` as Variant;
    });

    const observer = new MutationObserver(() => {
      setVariant((current) => {
        const lightsOn = !current.endsWith("-off");
        const isDark = document.documentElement.classList.contains("dark");
        return `${isDark ? "dark" : "light"}-${lightsOn ? "on" : "off"}` as Variant;
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const { src, alt } = variants[variant];
  const lightsOn = !variant.endsWith("-off");

  return (
    <button
      type="button"
      onClick={() => {
        const next = (lightsOn
          ? variant.replace("-on", "-off")
          : variant.replace("-off", "-on")) as Variant;
        try {
          localStorage.setItem("avatarLights:v1", lightsOn ? "off" : "on");
        } catch {}
        setVariant(next);
      }}
      aria-label={`Turn lights ${lightsOn ? "off" : "on"}`}
      aria-pressed={lightsOn}
      className="group relative inline-block rounded-full transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Image
        src={src}
        alt={alt}
        width={320}
        height={320}
        sizes="160px"
        preload
        fetchPriority="high"
        className="size-40 rounded-full border border-line bg-accent-muted object-cover"
      />
    </button>
  );
}
