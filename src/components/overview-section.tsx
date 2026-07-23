"use client";

import { useEffect, useState } from "react";
import {
  ClockIcon,
  CodeIcon,
  EmailIcon,
  LightbulbIcon,
  LinkIcon,
  MapPinIcon,
  MarsIcon,
  PhoneIcon,
} from "./icons";

const TIME_ZONE = "Asia/Ho_Chi_Minh";

function IntroItem({
  icon,
  children,
  className = "",
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 font-mono text-sm ${className}`}>
      <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-muted/20 bg-accent-muted ring-1 ring-line ring-offset-1 ring-offset-background [&_svg]:size-4 [&_svg]:text-muted">
        {icon}
      </span>
      <div className="min-w-0 text-balance">{children}</div>
    </div>
  );
}

function IntroLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
      className={`underline-offset-4 hover:underline ${className}`}
    >
      {children}
    </a>
  );
}

function getTime() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
}

function getTimeDifference() {
  const now = new Date();
  const viewerOffset = -now.getTimezoneOffset();
  const targetOffset =
    (new Date(now.toLocaleString("en-US", { timeZone: TIME_ZONE })).getTime() -
      new Date(now.toLocaleString("en-US", { timeZone: "UTC" })).getTime()) /
    60000;
  const hours = Math.abs(targetOffset - viewerOffset) / 60;

  if (hours < 1) {
    return " // same time";
  }

  return ` // ${Math.floor(hours)}h ${targetOffset > viewerOffset ? "ahead" : "behind"}`;
}

export function OverviewSection() {
  const [time, setTime] = useState("");
  const [difference, setDifference] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(getTime());
      setDifference(getTimeDifference());
    };

    updateTime();
    const interval = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="screen-line-top screen-line-bottom-none border-x border-line"
    >
      <h2 id="overview-heading" className="sr-only">
        Overview
      </h2>

      <div className="relative grid gap-x-4 gap-y-2.5 p-4 sm:grid-cols-2">
        <IntroItem icon={<CodeIcon />} className="sm:col-span-2">
          Design Engineer <span>@</span>{" "}
          <IntroLink href="#experience-shadcncraft" className="font-medium">
            shadcncraft
          </IntroLink>
        </IntroItem>

        <IntroItem icon={<LightbulbIcon />} className="sm:col-span-2">
          Founder <span>@</span>{" "}
          <IntroLink href="#experience-quaric" className="font-medium">
            Quaric
          </IntroLink>
        </IntroItem>

        <IntroItem icon={<MapPinIcon />}>
          <IntroLink href="https://www.google.com/maps/search/?api=1&query=Ho+Chi+Minh+City%2C+Viet+Nam">
            Ho Chi Minh City, Viet Nam
          </IntroLink>
        </IntroItem>

        <IntroItem icon={<ClockIcon />}>
          <span suppressHydrationWarning>{time}</span>
          <span className="text-muted" aria-hidden suppressHydrationWarning>
            {difference}
          </span>
        </IntroItem>

        <IntroItem icon={<PhoneIcon />}>
          <IntroLink href="tel:+84777888148">+84 777 888 148</IntroLink>
        </IntroItem>

        <IntroItem icon={<EmailIcon />}>
          <IntroLink href="mailto:dai@chanhdai.com">dai@chanhdai.com</IntroLink>
        </IntroItem>

        <IntroItem icon={<LinkIcon />}>
          <IntroLink href="https://chanhdai.com">chanhdai.com</IntroLink>
        </IntroItem>

        <IntroItem icon={<MarsIcon />}>
          <span>he/him</span>
        </IntroItem>

        <div
          aria-hidden
          className="pointer-events-none absolute top-px bottom-0 left-1/2 hidden w-px -translate-x-2.25 bg-[linear-gradient(to_bottom,var(--line)_4px,transparent_2px)] bg-size-[1px_6px] sm:block"
        />
      </div>
    </section>
  );
}
