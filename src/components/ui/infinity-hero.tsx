"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────
type State = "idle" | "breaking" | "broken" | "reconnecting" | "pulsing";

interface Spark {
  x: number; y: number;
  vx: number; vy: number;
  life: number; size: number;
  r: number; g: number; b: number;
}

// ─── Math helpers ────────────────────────────────────────────────────────────

/** Single lemniscate of Bernoulli point at parameter t */
function lemPt(t: number, cx: number, cy: number, a: number): [number, number] {
  const s = Math.sin(t);
  const d = 1 + s * s;
  return [
    cx + (a * Math.SQRT2 * Math.cos(t)) / d,
    cy + (a * Math.SQRT2 * Math.cos(t) * s) / d,
  ];
}

/** Build n evenly-spaced points along lemniscate */
function buildCurve(cx: number, cy: number, a: number, n = 700): [number, number][] {
  return Array.from({ length: n }, (_, i) => lemPt((i / n) * Math.PI * 2, cx, cy, a));
}

/** Smooth interpolation at normalised position t ∈ [0,1) */
function ptAt(pts: [number, number][], t: number): [number, number] {
  const n = pts.length;
  const f = ((t % 1) + 1) % 1;
  const i = Math.floor(f * n);
  const j = (i + 1) % n;
  const b = f * n - i;
  return [pts[i][0] * (1 - b) + pts[j][0] * b, pts[i][1] * (1 - b) + pts[j][1] * b];
}

/** Find nearest path point + distance from screen coords */
function nearestPt(pts: [number, number][], mx: number, my: number) {
  let minD2 = Infinity, idx = 0;
  for (let i = 0; i < pts.length; i++) {
    const dx = pts[i][0] - mx, dy = pts[i][1] - my;
    const d2 = dx * dx + dy * dy;
    if (d2 < minD2) { minD2 = d2; idx = i; }
  }
  return { t: idx / pts.length, dist: Math.sqrt(minD2) };
}

/** True if path position t is within halfW of breakT (wrap-aware) */
function inBreak(t: number, breakT: number, halfW: number): boolean {
  let dt = t - breakT;
  if (dt > 0.5) dt -= 1;
  if (dt < -0.5) dt += 1;
  return Math.abs(dt) < halfW;
}

/** Colour gradient: blue → white → purple → pink, returns [r,g,b] */
function gradRGB(t: number): [number, number, number] {
  const stops: [number, number, number][] = [
    [129, 140, 248],  // indigo-blue
    [255, 255, 255],  // white glow
    [192, 132, 252],  // purple
    [244, 114, 182],  // pink
    [129, 140, 248],  // wrap back to blue
  ];
  const f = ((t % 1) + 1) % 1;
  const pos = f * (stops.length - 1);
  const i = Math.floor(pos);
  const b = pos - i;
  const c0 = stops[Math.min(i, stops.length - 1)];
  const c1 = stops[Math.min(i + 1, stops.length - 1)];
  return [
    c0[0] + (c1[0] - c0[0]) * b,
    c0[1] + (c1[1] - c0[1]) * b,
    c0[2] + (c1[2] - c0[2]) * b,
  ];
}

function rgba([r, g, b]: [number, number, number], a: number) {
  return `rgba(${r|0},${g|0},${b|0},${a})`;
}

// Easing functions
const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
const easeOut   = (t: number) => 1 - (1 - t) ** 3;
const easeIn    = (t: number) => t * t * t;

// ─── Canvas component ────────────────────────────────────────────────────────
const InfinityCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    let W = 0, H = 0;
    let pts: [number, number][] = [];
    let animId = 0;

    // ── Particles ──
    const NUM_P = 2400;
    const pT      = new Float32Array(NUM_P);
    const pSpeed  = new Float32Array(NUM_P);
    const pSize   = new Float32Array(NUM_P);

    function initParticles() {
      for (let i = 0; i < NUM_P; i++) {
        pT[i]     = i / NUM_P;
        pSpeed[i] = 0.00022 + Math.random() * 0.00018;
        pSize[i]  = 0.9 + Math.random() * 1.6;
      }
    }

    // ── Sparks ──
    let sparks: Spark[] = [];
    function spawnSparks(x: number, y: number, n = 40) {
      for (let i = 0; i < n; i++) {
        const ang = Math.random() * Math.PI * 2;
        const spd = 0.6 + Math.random() * 3;
        const [r, g, b] = gradRGB(Math.random());
        sparks.push({ x, y, vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
          life: 1, size: 1.2 + Math.random() * 2.2, r, g, b });
      }
    }

    // ── State machine ──
    let state: State = "idle";
    let breakT    = 0;
    let breakSep  = 0;   // 0→1 during breaking, 1→0 during reconnecting
    let reconnP   = 0;
    let pulseP    = 0;   // 0→1 during pulsing
    let stateStart = 0;

    const BREAK_DUR  = 480;
    const BROKEN_DUR = 1400;
    const RECONN_DUR = 580;
    const PULSE_DUR  = 1100;
    const BREAK_DIST = 58;   // px — trigger distance from path
    const HALF_W     = 0.024; // fraction of path removed at break
    const MAX_SEP    = 34;    // px endpoint separation

    // ── Mouse ──
    let mouseX = 0, mouseY = -9999;
    let mouseNear = false;

    // ── Centre intersection zone ──
    // The lemniscate crosses itself at the origin (W/2, H/2)
    let centreFlash = 0; // 0→1 brightness

    function resize() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width  = W * devicePixelRatio;
      canvas!.height = H * devicePixelRatio;
      ctx!.scale(devicePixelRatio, devicePixelRatio);
      const a = Math.min(W * 0.33, H * 0.36);
      pts = buildCurve(W / 2, H / 2, a, 700);
      initParticles();
    }

    // ── Current break half-width (animated) ──
    function currentHalf(): number {
      switch (state) {
        case "breaking":     return HALF_W * easeInOut(breakSep);
        case "broken":       return HALF_W;
        case "reconnecting": return HALF_W * easeInOut(1 - reconnP);
        default: return 0;
      }
    }

    // ── Render: faint glow path ──
    function drawPath() {
      const half = currentHalf();
      ctx.save();
      ctx.lineWidth = 1.8;
      ctx.shadowBlur = 22;
      ctx.shadowColor = "rgba(180,100,255,0.55)";
      ctx.strokeStyle = "rgba(160,100,255,0.28)";
      ctx.beginPath();
      let started = false;
      for (let i = 0; i <= pts.length; i++) {
        const idx = i % pts.length;
        const t = idx / pts.length;
        if (half > 0 && inBreak(t, breakT, half)) {
          if (started) { ctx.stroke(); ctx.beginPath(); started = false; }
          continue;
        }
        const [px, py] = pts[idx];
        if (!started) { ctx.moveTo(px, py); started = true; }
        else ctx.lineTo(px, py);
      }
      if (started) ctx.stroke();
      ctx.restore();
    }

    // ── Render: flowing particles ──
    function drawParticles() {
      const half = currentHalf();

      // Pulse heads (travel in both directions from break point)
      const p1T = state === "pulsing" ? ((breakT + pulseP + 1) % 1) : -1;
      const p2T = state === "pulsing" ? ((breakT - pulseP + 1) % 1) : -1;

      for (let i = 0; i < NUM_P; i++) {
        const t = pT[i];
        if (half > 0 && inBreak(t, breakT, half)) continue;

        const [px, py] = ptAt(pts, t);
        const [r, g, b] = gradRGB(t);

        // Mouse brightness
        const dmx = px - mouseX, dmy = py - mouseY;
        const dMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        const mBright = dMouse < 110 ? 1 + (1 - dMouse / 110) * 2.2 : 1;

        // Pulse brightness — two waves, one each direction
        let pBright = 1;
        if (state === "pulsing") {
          for (const ph of [p1T, p2T]) {
            let dt = t - ph;
            if (dt > 0.5) dt -= 1;
            if (dt < -0.5) dt += 1;
            const near = Math.abs(dt);
            if (near < 0.05) {
              pBright = Math.max(pBright, 1 + 3.5 * (1 - near / 0.05) * (1 - pulseP));
            }
          }
        }

        const bright = mBright * pBright;
        const sz = pSize[i] * 0.78 * Math.min(bright, 2.4);

        ctx.shadowBlur = pSize[i] * 5 * bright;
        ctx.shadowColor = rgba([r, g, b], 1);
        ctx.fillStyle   = rgba([r, g, b], 0.92);
        ctx.beginPath();
        ctx.arc(px, py, sz, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    }

    // ── Render: glowing endpoints + particle stream ──
    function drawEndpoints() {
      if (state === "idle" || state === "pulsing") return;

      const progress =
        state === "breaking"     ? easeInOut(breakSep) :
        state === "broken"       ? 1 :
        state === "reconnecting" ? 1 - easeOut(reconnP) : 0;
      if (progress < 0.01) return;

      const t1 = ((breakT - HALF_W) + 1) % 1;
      const t2 = (breakT + HALF_W) % 1;
      const [x1, y1] = ptAt(pts, t1);
      const [x2, y2] = ptAt(pts, t2);
      const bx = (x1 + x2) / 2, by = (y1 + y2) / 2;

      function ep(px: number, py: number): [number, number] {
        const dx = px - bx, dy = py - by;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        return [px + (dx / len) * MAX_SEP * progress,
                py + (dy / len) * MAX_SEP * progress];
      }

      const [e1x, e1y] = ep(x1, y1);
      const [e2x, e2y] = ep(x2, y2);

      for (const [ex, ey] of [[e1x, e1y], [e2x, e2y]] as [number, number][]) {
        // Outer radial glow
        const rad = 26 * progress;
        const g = ctx.createRadialGradient(ex, ey, 0, ex, ey, rad);
        g.addColorStop(0,   `rgba(255,255,255,${0.95 * progress})`);
        g.addColorStop(0.35,`rgba(210,150,255,${0.65 * progress})`);
        g.addColorStop(1,   "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(ex, ey, rad, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.shadowBlur = 16 * progress;
        ctx.shadowColor = "rgba(255,255,255,1)";
        ctx.fillStyle = `rgba(255,255,255,${progress})`;
        ctx.beginPath();
        ctx.arc(ex, ey, 3.2 * progress, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Connecting particle stream
      const streamVis = state === "broken" ? 1
        : state === "reconnecting" ? Math.max(0, 1 - reconnP * 2) : 0;
      if (streamVis > 0) {
        const numS = 14;
        for (let i = 0; i < numS; i++) {
          const st = ((performance.now() / 650 + i / numS) % 1);
          const sx = e1x + (e2x - e1x) * st;
          const sy = e1y + (e2y - e1y) * st;
          const a = Math.sin(st * Math.PI) * 0.85 * streamVis * progress;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(200,150,255,0.9)";
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.beginPath();
          ctx.arc(sx, sy, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }
    }

    // ── Render: sparks ──
    function drawSparks() {
      ctx.save();
      for (const sp of sparks) {
        ctx.shadowBlur  = 10 * sp.life;
        ctx.shadowColor = rgba([sp.r, sp.g, sp.b], 1);
        ctx.fillStyle   = rgba([sp.r, sp.g, sp.b], sp.life * 0.9);
        ctx.globalAlpha = sp.life;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size * sp.life, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.shadowBlur = 0;
    }

    // ── Render: mouse radial glow ──
    function drawMouseGlow() {
      if (!mouseNear) return;
      const g = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 100);
      g.addColorStop(0,   "rgba(180,100,255,0.13)");
      g.addColorStop(0.5, "rgba(244,114,182,0.06)");
      g.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 100, 0, Math.PI * 2);
      ctx.fill();
    }

    // ── Render: centre intersection flash ──
    function drawCentreFlash() {
      if (centreFlash < 0.01) return;
      const cx2 = W / 2, cy2 = H / 2;
      const g = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, 90 * centreFlash);
      g.addColorStop(0,   `rgba(255,255,255,${0.5 * centreFlash})`);
      g.addColorStop(0.3, `rgba(192,132,252,${0.3 * centreFlash})`);
      g.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx2, cy2, 90 * centreFlash, 0, Math.PI * 2);
      ctx.fill();
    }

    // ── Main loop ──
    function tick() {
      animId = requestAnimationFrame(tick);
      const now = performance.now();
      const elapsed = now - stateStart;

      // ── State transitions ──
      switch (state) {
        case "breaking": {
          breakSep = Math.min(elapsed / BREAK_DUR, 1);
          if (elapsed >= BREAK_DUR) {
            state = "broken"; stateStart = now; breakSep = 1;
          }
          break;
        }
        case "broken": {
          if (elapsed >= BROKEN_DUR) {
            state = "reconnecting"; stateStart = now; reconnP = 0;
          }
          break;
        }
        case "reconnecting": {
          reconnP = Math.min(elapsed / RECONN_DUR, 1);
          breakSep = 1 - reconnP;
          if (elapsed >= RECONN_DUR) {
            // Reconnect flash
            const [bx, by] = ptAt(pts, breakT);
            spawnSparks(bx, by, 55);
            state = "pulsing"; stateStart = now; pulseP = 0; breakSep = 0;
          }
          break;
        }
        case "pulsing": {
          pulseP = Math.min(elapsed / PULSE_DUR, 1);
          if (elapsed >= PULSE_DUR) { state = "idle"; stateStart = now; }
          break;
        }
        case "idle": {
          if (pts.length > 0) {
            const { t, dist } = nearestPt(pts, mouseX, mouseY);
            mouseNear = dist < 160;
            if (dist < BREAK_DIST) {
              state = "breaking"; stateStart = now;
              breakT = t; breakSep = 0;
              const [bx, by] = ptAt(pts, t);
              spawnSparks(bx, by, 32);
            }
          }
          break;
        }
      }

      // ── Update particles ──
      for (let i = 0; i < NUM_P; i++) {
        pT[i] = (pT[i] + pSpeed[i]) % 1;
      }

      // ── Update sparks ──
      sparks = sparks.filter(s => s.life > 0.02);
      for (const sp of sparks) {
        sp.x  += sp.vx; sp.y  += sp.vy;
        sp.vx *= 0.95;  sp.vy *= 0.95;
        sp.life *= 0.91;
      }

      // ── Centre intersection detection ──
      // The lemniscate self-intersects at (W/2, H/2)
      const cdx = mouseX - W / 2, cdy = mouseY - H / 2;
      const cDist = Math.sqrt(cdx * cdx + cdy * cdy);
      if (cDist < 30) {
        centreFlash = Math.min(centreFlash + 0.08, 1);
      } else {
        centreFlash = Math.max(centreFlash - 0.04, 0);
      }

      // ── Render ──
      ctx.clearRect(0, 0, W, H);
      drawMouseGlow();
      drawCentreFlash();
      drawPath();
      drawParticles();
      drawEndpoints();
      drawSparks();
    }

    resize();
    tick();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left);
      mouseY = (e.clientY - rect.top);
    };
    const onResize = () => resize();

    canvas.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />;
};

// ─── Main hero export ────────────────────────────────────────────────────────
export const InfinityHero = () => {
  return (
    <section
      className="relative min-h-[92vh] overflow-hidden flex items-center justify-center"
      style={{ background: "#07080f" }}
    >
      <InfinityCanvas />

      {/* Pragmatiq logo — ghosted behind the particle field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center"
      >
        <img
          src="/pragicon.png"
          alt=""
          className="w-[40%] max-w-[460px] select-none"
          style={{ opacity: 0.07, mixBlendMode: "screen", filter: "brightness(3) saturate(0.3)" }}
        />
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-28"
        style={{ background: "linear-gradient(to bottom, transparent, #07080f)" }}
      />

      {/* Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0.06) 65%, transparent 95%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-7 inline-flex items-center gap-3"
        >
          <span className="h-px w-8"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35))" }} />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.38)" }}>
            Enterprise Technology
          </span>
          <span className="h-px w-8"
            style={{ background: "linear-gradient(270deg, transparent, rgba(255,255,255,0.35))" }} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-6 font-bold leading-[1.07] tracking-[-0.025em] text-white
                     text-[2.5rem] sm:text-5xl lg:text-[3.4rem] xl:text-[4rem]"
        >
          Agile. Adaptive.
          <br />
          <span style={{
            background: "linear-gradient(100deg, #818cf8 0%, #a78bfa 25%, #c084fc 50%, #e879f9 75%, #f472b6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Accountability.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mb-10 max-w-[480px] text-[1.05rem] leading-[1.75]"
          style={{ color: "rgba(255,255,255,0.48)" }}
        >
          Harnessing pragmatic innovation and leading technologies to build
          scalable digital solutions with agility, adaptability, and
          accountability at their core.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-5"
        >
          <Link
            href="/contact/"
            target="_self"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3
                       text-sm font-semibold text-white transition-all duration-300
                       hover:border-white/30 hover:bg-white/5"
            style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.04)" }}
          >
            Explore Solutions
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            href="/contact/"
            target="_self"
            className="text-sm font-medium transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
