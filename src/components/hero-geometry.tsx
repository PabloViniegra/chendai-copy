"use client";

import { useEffect, useId, useRef } from "react";

const STYLE_FILLED_FACE = { fill: "var(--background)" } as const;
const STYLE_STROKED_FACE = {
  fill: "url(#ncdai-radial-gradient)",
  stroke: "var(--stroke)",
} as const;

const STROKE_NORMAL =
  "M28.21 240.58 L0.50 224.58 V192.58 L111.35 128.58 L166.78 160.58 V192.58 L83.64 240.58M166.78 160.58 L0.50 256.58 V288.58 L111.35 352.58 L166.78 320.58 L222.20 352.58 L333.05 288.58 V256.58 L277.63 224.58 L166.78 288.58 L0.50 192.58M0.50 256.58 L111.35 320.58 L166.78 288.58 L222.20 320.58 L333.05 256.58M111.35 320.58 V352.58M166.78 288.58 V320.58M222.20 320.58 V352.58M499.33 96.58 L554.76 128.58 V160.58 L388.48 256.58 L166.78 128.58 V96.58 L333.05 0.58 L499.33 96.58M166.78 96.58 L388.48 224.58 L554.76 128.58M527.04 112.58 L554.76 96.58 V64.58 L443.90 0.58 L277.63 96.58 L388.48 160.58 L554.76 64.58M305.34 112.58 L388.48 64.58 L471.62 112.58M388.48 224.58 V256.58M388.48 32.58 V64.58";

const STROKE_PRESSED =
  "M42.07 248.58 L0.50 224.58 V208.58 L111.35 144.58 L166.78 176.58 V192.58 L69.78 248.58M166.78 176.58 L0.5 272.58 V288.58 L111.35 352.58 L166.78 320.58 L222.20 352.58 L333.05 288.58 V272.58 L277.63 240.58 L166.78 304.58 L0.5 208.58M0.5 272.58 L111.35 336.58 L166.78 304.58 L222.20 336.58 L333.05 272.58M111.35 336.58 V352.58M166.78 304.58 V320.58M222.20 336.58 V352.58M499.33 112.58 L554.76 144.58 V160.58 L388.48 256.58 L166.78 128.58 V112.58 L333.05 16.58 L499.33 112.58M166.78 112.58 L388.48 240.58 L554.76 144.58M513.19 120.58 L554.76 96.58 V80.58 L443.90 16.58 L277.63 112.58 L388.48 176.58 L554.76 80.58M291.48 120.58 L388.48 64.58 L485.47 120.58M388.48 240.58 V256.58M388.48 48.58 V64.58";

const FACE_TRANSLATE_NORMAL = "translate(0px, 0px)";
const FACE_TRANSLATE_PRESSED = "translate(0px, 16px)";

export function HeroGeometry() {
  const rawId = useId();
  const ids = {
    facePattern: `ncdai-face-pattern-${rawId}`,
    faceFill: `ncdai-face-fill-${rawId}`,
    stroke: `ncdai-stroke-${rawId}`,
    radialGradient: `ncdai-radial-gradient-${rawId}`,
  };

  const ref = useRef<HTMLDivElement>(null);
  const faceFillRef = useRef<SVGGElement>(null);
  const strokeRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const touchOnly = window.matchMedia("(hover: none)").matches;
    if (reducedMotion || touchOnly) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        window.addEventListener("mousemove", handleMouseMove, {
          passive: true,
        });
      },
      { rootMargin: "80px" },
    );
    observer.observe(root);

    const handleMouseMove = (event: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      root.style.setProperty("--glow-x", `${x}%`);
      root.style.setProperty("--glow-y", `${y}%`);
    };

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handlePointerDown = () => {
    faceFillRef.current?.setAttribute("transform", FACE_TRANSLATE_PRESSED);
    strokeRef.current?.setAttribute("d", STROKE_PRESSED);
  };

  const handlePointerUp = () => {
    faceFillRef.current?.setAttribute("transform", FACE_TRANSLATE_NORMAL);
    strokeRef.current?.setAttribute("d", STROKE_NORMAL);
  };

  return (
    <div
      ref={ref}
      data-glow-card
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="touch-manipulation [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
    >
      <svg
        className="h-auto w-full overflow-visible"
        viewBox="0 0 556 354"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <title>Isometric monogram</title>
        <defs>
          <pattern
            id={ids.facePattern}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
              stroke="var(--pattern)"
              strokeWidth="1"
            />
          </pattern>

          <g id={ids.faceFill} ref={faceFillRef}>
            <path d="M333.05 256.58L222.20 320.58L166.78 288.58L277.63 224.58L333.05 256.58Z" />
            <path d="M388.48 32.58L277.63 96.58L388.48 160.58L499.33 96.58L554.76 128.58L388.48 224.58L166.78 96.58L333.05 0.58L388.48 32.58Z" />
            <path d="M166.78 288.58L111.35 320.58L0.50 256.58L55.93 224.58L166.78 288.58Z" />
            <path d="M554.76 64.58L499.33 96.58L388.48 32.58L443.90 0.58L554.76 64.58Z" />
            <path d="M166.78 160.58L55.93 224.58L0.50 192.58L111.35 128.58L166.78 160.58Z" />
          </g>

          <path
            id={ids.stroke}
            ref={strokeRef}
            stroke="var(--stroke)"
            d={STROKE_NORMAL}
          />

          <radialGradient
            id={ids.radialGradient}
            cx="50%"
            cy="50%"
            r="0.36"
            gradientUnits="objectBoundingBox"
          >
            <stop
              className="dark:stop-color-(--foreground)"
              stopColor="var(--muted)"
            />
            <stop offset="1" stopColor="var(--muted)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g
          style={{ stroke: "var(--line)" }}
          strokeWidth="1"
          strokeDasharray="4 2"
        >
          <path d="M-477.55 756.57L1254.51 -243.41" />
          <path d="M-782.39 676.57L949.67 -323.41" />
          <path d="M977.37 788.58L-754.67 -211.42" />
          <path d="M1143.65 692.58L-588.39 -307.42" />
          <path d="M1337.65 612.57L-394.41 -387.41" />
        </g>

        <g fillRule="evenodd" clipRule="evenodd">
          <path
            style={STYLE_FILLED_FACE}
            d="M166.78 160.58L55.93 224.58L0.50 192.58V224.58L55.93 256.58L166.78 192.58V160.58Z"
          />
          <path
            style={STYLE_FILLED_FACE}
            d="M166.78 288.58L111.35 320.58L0.50 256.58V288.58L111.35 352.58L166.78 320.58L222.20 352.58L333.05 288.58V256.58L222.20 320.58L166.78 288.58Z"
          />
          <path
            style={STYLE_FILLED_FACE}
            d="M388.48 224.58L166.78 96.58V128.58L388.48 256.58L554.76 160.58V128.58L388.48 224.58Z"
          />
          <path
            style={STYLE_FILLED_FACE}
            d="M388.48 32.58L277.63 96.58V128.58L388.48 64.58L499.33 128.58L554.75 96.58V64.58L499.33 96.58L388.48 32.58Z"
          />
        </g>

        <use href={`#${ids.faceFill}`} style={STYLE_FILLED_FACE} />
        <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

        <use href={`#${ids.stroke}`} stroke="var(--stroke)" />
        <use href={`#${ids.stroke}`} style={STYLE_STROKED_FACE} />
      </svg>
    </div>
  );
}
