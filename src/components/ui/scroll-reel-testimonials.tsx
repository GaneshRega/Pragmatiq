"use client";

import * as React from "react";

export interface ScrollReelTestimonial {
  quote: string;
  author: string;
  image: string;
  alt?: string;
}

export interface ScrollReelTestimonialsProps {
  testimonials: ScrollReelTestimonial[];
  charStaggerMs?: number;
  className?: string;
}

const CELL = 121.33;
const GAP = 8;
const STEP = 3 * (CELL + GAP);

const EXIT_MS = 240;
const SLIDE_MS = 800;

const EASE_INOUT = "cubic-bezier(0.65,0,0.35,1)";

const QUOTE_CLASSES =
  "m-0 text-base font-medium leading-relaxed tracking-[-0.01em] text-white/90 sm:text-[20px]";
const AUTHOR_CLASSES =
  "m-0 text-sm font-medium leading-[1.3] text-white/50";

const FEATURED_SHADOW =
  "0 4px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Cell() {
  return (
    <div
      aria-hidden="true"
      className="shrink-0 rounded-xl border border-white/5 bg-white/3"
      style={{
        width: CELL,
        height: CELL,
        background: "linear-gradient(to bottom, rgba(45,87,238,0.08), rgba(11,11,12,0.4))",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    />
  );
}

function Featured({ src, alt }: { src: string; alt?: string }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-xl"
      style={{ width: CELL, height: CELL, boxShadow: FEATURED_SHADOW }}
    >
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      {/* Blue gradient sheen overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(45,87,238,0.3) 0%, rgba(45,87,238,0) 60%)",
        }}
      />
    </div>
  );
}

function Chars({
  text,
  startIndex,
  staggerMs,
}: {
  text: string;
  startIndex: number;
  staggerMs: number;
}) {
  let idx = startIndex;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const wordSpan = (
          <span key={`w-${wi}`} className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, ci) => {
              const delay = idx * staggerMs;
              idx++;
              return (
                <span
                  key={ci}
                  className="scroll-reel-char"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        );
        if (wi < words.length - 1) idx++;
        return (
          <React.Fragment key={wi}>
            {wordSpan}
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export function ScrollReelTestimonials({
  testimonials,
  charStaggerMs = 6,
  className,
}: ScrollReelTestimonialsProps) {
  const [index, setIndex] = React.useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const animating = React.useRef(false);
  const timeouts = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const count = testimonials.length;

  React.useEffect(() => {
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    );
    return () => {
      cancelAnimationFrame(raf);
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  const paginate = React.useCallback(
    (dir: 1 | -1) => {
      if (animating.current) return;
      const next = index + dir;
      if (next < 0 || next >= count) return;
      animating.current = true;

      setIndex(next);
      setExiting(true);

      timeouts.current.push(
        setTimeout(() => {
          setDisplayIndex(next);
          setExiting(false);
        }, EXIT_MS)
      );
      timeouts.current.push(
        setTimeout(() => {
          animating.current = false;
        }, SLIDE_MS)
      );
    },
    [index, count]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); paginate(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); paginate(-1); }
  };

  const middleItems = React.useMemo(() => {
    const items: Array<{ type: "cell" } | { type: "featured"; i: number }> = [];
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    testimonials.forEach((_, i) => {
      items.push({ type: "featured", i });
      if (i < count - 1) {
        items.push({ type: "cell" }, { type: "cell" });
      }
    });
    for (let i = 0; i < 3; i++) items.push({ type: "cell" });
    return items;
  }, [testimonials, count]);

  const sideCellCount = 4 + 2 * count;
  const centerIdx = (count - 1) / 2;
  const middleY = (centerIdx - index) * STEP;
  const sideY = -middleY;

  const colStyle = (y: number): React.CSSProperties => ({
    transform: `translateY(${y}px)`,
    transition: mounted ? `transform ${SLIDE_MS}ms ${EASE_INOUT}` : "none",
  });

  const current = testimonials[displayIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn(
        "relative flex w-full max-w-[1060px] flex-col overflow-hidden rounded-2xl border border-white/8 outline-none",
        "md:flex-row",
        className
      )}
      style={{ background: "#0b0b0c" }}
    >
      {/* ── Reel section ── */}
      <div
        aria-hidden="true"
        className="relative shrink-0 overflow-hidden"
        style={{ height: 280, width: "100%" }}
      >
        {/* Three columns — centered inside the reel box */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ gap: GAP }}
        >
          {/* Left column */}
          <div
            className="flex shrink-0 flex-col"
            style={{ gap: GAP, ...colStyle(sideY) }}
          >
            {Array.from({ length: sideCellCount }).map((_, i) => (
              <Cell key={i} />
            ))}
          </div>

          {/* Middle column */}
          <div
            className="flex shrink-0 flex-col"
            style={{ gap: GAP, ...colStyle(middleY) }}
          >
            {middleItems.map((item, i) =>
              item.type === "featured" ? (
                <Featured
                  key={i}
                  src={testimonials[item.i].image}
                  alt={testimonials[item.i].alt}
                />
              ) : (
                <Cell key={i} />
              )
            )}
          </div>

          {/* Right column */}
          <div
            className="flex shrink-0 flex-col"
            style={{ gap: GAP, ...colStyle(sideY) }}
          >
            {Array.from({ length: sideCellCount }).map((_, i) => (
              <Cell key={i} />
            ))}
          </div>
        </div>

        {/* Gradient fade overlays — top, bottom, left, right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #0b0b0c 0%, transparent 18%, transparent 82%, #0b0b0c 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(to right, #0b0b0c 0%, transparent 18%, transparent 82%, #0b0b0c 100%)",
          }}
        />
      </div>

      {/* ── Content section ── */}
      <div
        className="flex flex-col justify-between px-6 py-8 md:px-10 md:py-10"
        style={{ flex: "1 1 0", minWidth: 0 }}
      >
        <div className="flex flex-col" style={{ gap: 16 }}>
          {/* Quote icon */}
          <svg
            className="block h-10 w-10 text-secondary opacity-30"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.58 17.32C3.55 16.23 3 15 3 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18zm10 0C13.55 16.23 13 15 13 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18z" />
          </svg>

          {/* Animated text stage */}
          <div
            className="relative overflow-hidden"
            style={{ maxWidth: 400 }}
            aria-live="polite"
          >
            {/* Invisible sizer — reserves layout space for the current text */}
            <div
              aria-hidden="true"
              className="invisible flex flex-col"
              style={{ gap: 16, minHeight: 120 }}
            >
              <p className={QUOTE_CLASSES}>{current.quote}</p>
              <p className={AUTHOR_CLASSES}>{current.author}</p>
            </div>

            {/* Visible animated layer */}
            <div
              key={displayIndex}
              className={cn(
                "absolute inset-x-0 top-0 flex flex-col",
                exiting && "scroll-reel-exit"
              )}
              style={{ gap: 16 }}
            >
              <p className={QUOTE_CLASSES}>
                <Chars text={current.quote} startIndex={0} staggerMs={charStaggerMs} />
              </p>
              <p className={AUTHOR_CLASSES}>
                <Chars
                  text={current.author}
                  startIndex={current.quote.length + 6}
                  staggerMs={charStaggerMs}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Prev / Next controls */}
        <div className="mt-8 flex items-center gap-2 md:mt-10">
          <button
            type="button"
            onClick={() => paginate(-1)}
            disabled={index === 0}
            aria-label="Previous testimonial"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-transparent text-white transition-all hover:enabled:bg-white/10 disabled:cursor-default disabled:opacity-40"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.5 2.5 3.5 6l4 3.5" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-1.5 px-1">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  const dir = i > index ? 1 : -1;
                  if (i !== index) paginate(dir);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-5 bg-secondary" : "w-1.5 bg-white/25"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => paginate(1)}
            disabled={index === count - 1}
            aria-label="Next testimonial"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-transparent text-white transition-all hover:enabled:bg-white/10 disabled:cursor-default disabled:opacity-40"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m4.5 2.5 4 3.5-4 3.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScrollReelTestimonials;
