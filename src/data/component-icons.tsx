import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

function SpotlightLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 512 256" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
      />
    </svg>
  );
}

function MobiusLoopIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 16C11 16 13 8 18 8C23.333 8 23.333 16 18 16C13 16 11 8 6 8C0.667 8 0.667 16 6 16Z" />
    </svg>
  );
}

function TocMinimap(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 5H3" />
      <path d="M21 12H9" />
      <path d="M21 19H9" />
    </svg>
  );
}

function ElasticSlider(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      {...props}
    >
      <path d="M3 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path d="M17 10v4" strokeLinecap="round" />
    </svg>
  );
}

function GithubContributions(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M11 5h2v2h-2zM15 17h2v2h-2zM7 17h2v2H7zM15 5h2v2h-2zM15 13h2v2h-2zM11 13h2v2h-2zM11 17h2v2h-2zM15 9h2v2h-2zM3 13h2v2H3zM3 17h2v2H3zM3 9h2v2H3zM3 5h2v2H3zM7 9h2v2H7zM19 17h2v2h-2zM19 9h2v2h-2zM7 5h2v2H7z"
      />
    </svg>
  );
}

function ConsentManager(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.182a1.636 1.636 0 1 0 0 3.273 1.636 1.636 0 0 0 0-3.273ZM8.182 3.818a3.818 3.818 0 1 1 2.002 3.36l-3.006 3.006c.125.23.226.474.3.725h9.044A3.82 3.82 0 0 1 24 12a3.818 3.818 0 0 1-7.478 1.092H7.478c-.098.33-.241.647-.425.939l2.917 2.917a3.818 3.818 0 1 1-1.442 1.644L5.41 15.47a3.818 3.818 0 1 1 .225-6.831l3.007-3.005a3.801 3.801 0 0 1-.46-1.817ZM18.546 12v.004a1.636 1.636 0 1 0 0-.008V12ZM3.818 10.364a1.636 1.636 0 1 0 0 3.272 1.636 1.636 0 0 0 0-3.272Zm6.546 9.818a1.636 1.636 0 1 1 3.272 0 1.636 1.636 0 0 1-3.272 0Z"
      />
    </svg>
  );
}

function SlideToUnlock(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      {...props}
    >
      <path d="M3 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path
        d="M6 12h6M9 15l3-3-3-3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReactWheelPicker(props: IconProps) {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M144 16H112A64.07 64.07 0 0 0 48 80v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80A64.07 64.07 0 0 0 144 16Zm2.34 146.34a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 172.69V83.31L109.66 93.66A8 8 0 0 1 98.34 82.34l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32L136 83.31v89.38Z"
      />
    </svg>
  );
}

function AppleHelloEffect(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
      />
    </svg>
  );
}

function Twemoji(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="m18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function LineNav(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M4 3h16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M4 9h16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M4 15h16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M4 21h16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShareMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 6l-4-4-4 4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 2v13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Testimonial2(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6 15h15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M21 19h-15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15 11h6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M21 7h-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 9h1a1 1 0 1 1-1 1v-2.5a2 2 0 0 1 2-2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3 9h1a1 1 0 1 1-1 1v-2.5a2 2 0 0 1 2-2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function LogosCarousel(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 7c3-2 6-2 9 0s6 2 9 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3 17c3-2 6-2 9 0s6 2 9 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3 12c3-2 6-2 9 0s6 2 9 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ChevronsUpDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m7 15 5 5 5-5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="m7 9 5-5 5 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function SpinningCircularText(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function DotGridSpotlight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0" fill="currentColor" />
      <path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0" fill="currentColor" />
      <path d="M18 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0" fill="currentColor" />
      <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0" fill="currentColor" />
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0" fill="currentColor" />
      <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0" fill="currentColor" />
      <path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" fill="currentColor" />
      <path d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" fill="currentColor" />
      <path d="M18 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" fill="currentColor" />
    </svg>
  );
}

function IconSwap(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 12a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2l0-7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function BrandAssetsMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M5 3a2 2 0 0 0-2 2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M19 3a2 2 0 0 1 2 2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M21 19a2 2 0 0 1-2 2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5 21a2 2 0 0 1-2-2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 3h1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 21h1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14 3h1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14 21h1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3 9v1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M21 9v1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3 14v1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M21 14v1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function FluidGradientText(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ThemeToggleEffect(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m14.622 17.897-10.68-2.913"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function MiddleTruncation(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle
        cx="6"
        cy="6"
        r="3"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M8.12 8.12 12 12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20 4 8.12 15.88"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="6"
        cy="18"
        r="3"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M14.8 14.8 20 20"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function GlowCardGrid(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect
        width="7"
        height="7"
        x="3"
        y="3"
        rx="1"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <rect
        width="7"
        height="7"
        x="14"
        y="3"
        rx="1"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <rect
        width="7"
        height="7"
        x="14"
        y="14"
        rx="1"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <rect
        width="7"
        height="7"
        x="3"
        y="14"
        rx="1"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

function TestimonialSpotlight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M12 4h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20 12h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 20h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M4 12h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17.657 6.343h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17.657 17.657h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M6.343 17.657h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M6.343 6.343h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Haptic(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m2 8 2 2-2 2 2 2-2 2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="m22 8-2 2 2 2-2 2 2 2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect
        width="8"
        height="14"
        x="8"
        y="5"
        rx="1"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

function TextFlip(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m16 16-4 4-4-4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3 12h18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="m8 8 4-4 4 4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CopyButton(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect
        width="14"
        height="14"
        x="8"
        y="8"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Testimonial(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

function CodeBlockCommand(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 19h8"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="m4 17 6-6-6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ScrollFadeEffect(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="7"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M12 6v4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function GithubStars(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ShimmeringText(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function TestimonialsMarquee(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M2 7v10"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M6 5v14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect
        width="12"
        height="18"
        x="10"
        y="3"
        rx="2"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

function WorkExperience(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 12h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M22 13a18.15 18.15 0 0 1-20 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect
        width="20"
        height="14"
        x="2"
        y="6"
        rx="2"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

function ThemeSwitcher(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M18 5h4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20 3v4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function DefaultIcon(props: IconProps) {
  return <Icon {...props} />;
}

const ICONS: Record<string, (props: IconProps) => React.ReactElement> = {
  "spotlight-logo": SpotlightLogo,
  "line-nav": LineNav,
  "share-menu": ShareMenu,
  "testimonial-2": Testimonial2,
  "logos-carousel": LogosCarousel,
  "chevrons-up-down-icon": ChevronsUpDownIcon,
  "mobius-loop-icon": MobiusLoopIcon,
  "spinning-circular-text": SpinningCircularText,
  "dot-grid-spotlight": DotGridSpotlight,
  "icon-swap": IconSwap,
  "brand-assets-menu": BrandAssetsMenu,
  "fluid-gradient-text": FluidGradientText,
  "toc-minimap": TocMinimap,
  "elastic-slider": ElasticSlider,
  "github-contributions": GithubContributions,
  "theme-toggle-effect": ThemeToggleEffect,
  twemoji: Twemoji,
  "middle-truncation": MiddleTruncation,
  "glow-card-grid": GlowCardGrid,
  "testimonial-spotlight": TestimonialSpotlight,
  haptic: Haptic,
  "text-flip": TextFlip,
  "copy-button": CopyButton,
  testimonial: Testimonial,
  "code-block-command": CodeBlockCommand,
  "consent-manager": ConsentManager,
  "scroll-fade-effect": ScrollFadeEffect,
  "github-stars": GithubStars,
  "shimmering-text": ShimmeringText,
  "testimonials-marquee": TestimonialsMarquee,
  "slide-to-unlock": SlideToUnlock,
  "work-experience": WorkExperience,
  "react-wheel-picker": ReactWheelPicker,
  "theme-switcher": ThemeSwitcher,
  "apple-hello-effect": AppleHelloEffect,
};

export function getComponentIcon(slug: string) {
  return ICONS[slug] ?? DefaultIcon;
}
