"use client";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
    className={className ?? "text-emerald-500 text-base"} height="1em" width="1em"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
  </svg>
);
const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export default function ProductsPage() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      import("aos/dist/aos.css");
      AOS.init({ once: true, duration: 800 });
    };
    initAOS();
  }, []);

  return (
    <>
      <Header />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="overflow-hidden pb-0 pt-16 relative">
          <div className="container">
            <div className="row justify-center">
              <div className="pt-6 text-center md:col-10 lg:col-8">
                <div data-aos="fade-up-sm" className="mx-auto mb-4 w-fit rounded-full p-px border border-white/15">
                  <div className="flex gap-2 rounded-full px-3 py-1.5">
                    <span className="text-sm opacity-70 md:text-base">Foundational IP</span>
                  </div>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">
                  Enterprise Engines.<br />Intelligent Frameworks.
                </h1>
                <p data-aos="fade-up-sm" className="mb-8 text-xl/[inherit] opacity-80 max-w-2xl mx-auto">
                  We don&apos;t just build software — we build <strong className="text-white font-semibold">Foundational IP</strong>. Battle-tested code designed for security, scalability, and AI-driven intelligence.
                </p>
                <ul className="flex flex-wrap justify-center gap-4" data-aos="fade-up-sm">
                  <li>
                    <Link className="btn btn-primary has-icon" href="/contact">
                      <span className="value"><span data-content="Request a Product Demo">Request a Product Demo</span></span>
                      <span className="icon"><span><span><ArrowRight size={12} /></span><span><ArrowRight size={12} /></span></span></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn-outline-transparent" href="/industries">
                      <span className="value"><span data-content="View Industry Exposure">View Industry Exposure</span></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute left-[15%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-20 blur-[100px] bg-linear-to-tr md:top-1/3" />
        </section>

        {/* ── 4 PRODUCT SUITE CARDS ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">The Pragmatiq Product Suite</p>
                <h2 className="has-gradient mb-4">Four Products. One Mission.</h2>
                <p className="text-lg opacity-75 max-w-xl mx-auto">
                  Backed by 30+ years of global CTO-level governance. Available as white-label or full source code handover.
                </p>
              </div>
            </div>

            {/* Asymmetric grid — large left card + 3 stacked right */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

              {/* Card 1: Core Learning Engines — large left */}
              <div className="group lg:col-span-5" data-aos="fade-up-sm" data-aos-delay="0">
                <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-green-500/15 bg-[#0b0f0d] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-green-500/35 hover:shadow-[0_24px_60px_-12px_rgba(34,197,94,0.18)]">
                  <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green-500/12 blur-[80px]" />
                  <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-green-950/30 to-transparent" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> EdTech
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-widest opacity-30">v2.4</span>
                  </div>
                  <div className="relative z-10 my-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
                      <svg className="h-8 w-8 text-green-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">Core Learning Engines</h3>
                    <p className="text-sm leading-relaxed opacity-55">
                      PurpleGene®-powered LMS, AI coding compilers, adaptive evaluation, and autonomous campus systems — built for 100 to 10 million concurrent learners.
                    </p>
                  </div>
                  <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                    {["Connect LMS", "PurpleGene AI", "AI Campus", "Adaptive Eval"].map((f) => (
                      <span key={f} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">{f}</span>
                    ))}
                  </div>
                  <div className="relative z-10 mt-auto pt-8">
                    <a href="#learning" className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition-all duration-200 hover:gap-3 hover:text-green-300">
                      Explore Suite <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column: 3 compact cards */}
              <div className="flex flex-col gap-5 lg:col-span-7">

                {/* Card 2: Startup OS */}
                <div className="group" data-aos="fade-up-sm" data-aos-delay="100">
                  <div className="relative overflow-hidden rounded-2xl border border-blue-500/15 bg-[#0a0d12] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-[0_24px_60px_-12px_rgba(59,130,246,0.18)]">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-500/10 blur-[70px]" />
                    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-blue-950/25 to-transparent" />
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                        <svg className="h-7 w-7 text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm3 10h2v3h3v2h-3v3h-2v-3h-3v-2h3z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="mb-3 flex items-center gap-3">
                          <h3 className="text-xl font-bold tracking-tight text-white">Startup OS</h3>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> New
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed opacity-55">
                          Employee Connect workspace, AHA compliance engine, and unified governance tools — the Business-in-a-Box for privacy-conscious startups.
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          {["Employee Connect", "AHA Suite", "Analytics"].map((f) => (
                            <span key={f} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">{f}</span>
                          ))}
                          <a href="#startup-os" className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition-all duration-200 hover:gap-2.5 hover:text-blue-300">
                            Explore Suite <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: HealthOS */}
                <div className="group" data-aos="fade-up-sm" data-aos-delay="200">
                  <div className="relative overflow-hidden rounded-2xl border border-purple-500/15 bg-[#0d0a10] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/35 hover:shadow-[0_24px_60px_-12px_rgba(168,85,247,0.18)]">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px]" />
                    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-purple-950/25 to-transparent" />
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                        <svg className="h-7 w-7 text-purple-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14.93V17a1 1 0 00-2 0v-.07A8.003 8.003 0 014.07 11H5a1 1 0 000-2h-.93A8.003 8.003 0 0111 4.07V5a1 1 0 002 0v-.93A8.003 8.003 0 0119.93 11H19a1 1 0 000 2h.93A8.003 8.003 0 0113 16.93zM12 8a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="mb-3 flex items-center gap-3">
                          <h3 className="text-xl font-bold tracking-tight text-white">HealthOS</h3>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-purple-400">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" /> Live
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed opacity-55">
                          ClinAlly CDSS, HEAL Suite AI, and NLP workflows — HIPAA and ABDM compliant clinical intelligence for underserved and urban care delivery.
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          {["ClinAlly CDSS", "NLP Workflows", "ABDM Ready"].map((f) => (
                            <span key={f} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">{f}</span>
                          ))}
                          <a href="#healthos" className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 transition-all duration-200 hover:gap-2.5 hover:text-purple-300">
                            Explore Suite <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: AgroSense */}
                <div className="group" data-aos="fade-up-sm" data-aos-delay="300">
                  <div className="relative overflow-hidden rounded-2xl border border-lime-500/15 bg-[#0a0f0b] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-lime-500/35 hover:shadow-[0_24px_60px_-12px_rgba(132,204,22,0.18)]">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-lime-500/10 blur-[70px]" />
                    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-lime-950/25 to-transparent" />
                    <div className="relative z-10 flex items-start gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-lime-500/20 bg-lime-500/10">
                        <svg className="h-7 w-7 text-lime-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4.42 0 4-4 8-4 1.23 0 2.38.4 3.37 1.06A10 10 0 0021 13c0-1.77-.47-3.43-1.28-4.88C18.85 8.04 17.96 8 17 8z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="mb-3 flex items-center gap-3">
                          <h3 className="text-xl font-bold tracking-tight text-white">AgroSense</h3>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-500/25 bg-lime-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-lime-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" /> AgriTech
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed opacity-55">
                          Digital Twin Farming with geospatial AI, drone integration, soil intelligence, and Landlordz blockchain-backed land title protection.
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          {["Digital Twin", "Drone Suite", "Soil AI"].map((f) => (
                            <span key={f} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">{f}</span>
                          ))}
                          <a href="#agrosense" className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-lime-400 transition-all duration-200 hover:gap-2.5 hover:text-lime-300">
                            Explore Suite <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── SUITE 01: CORE LEARNING & CAMPUS ENGINES ── */}
        <section id="learning" className="section bg-dark relative overflow-hidden" style={{ scrollMarginTop: "100px" }}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.07)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-16">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
                  Suite 01 · Core Learning &amp; Campus Engines
                </span>
                <h2 className="has-gradient mb-4">High-Concurrency Learning at Institutional Scale</h2>
                <p className="text-lg opacity-75 max-w-2xl mx-auto">
                  From adaptive LMS to fully autonomous campus systems — built for the 2026 landscape and beyond.
                </p>
              </div>
            </div>

            {/* Connect LMS */}
            <div className="overflow-hidden rounded-3xl border border-border bg-dark/60 backdrop-blur-xl mb-8" data-aos="fade-up-sm">
              <div className="row g-0 items-stretch">
                <div className="lg:col-5 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="p-8 lg:p-12 flex flex-col h-full">
                    <div className="mb-6">
                      <span className="inline-block px-2.5 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Connect LMS</span>
                      <p className="text-2xl font-bold text-white mb-3 leading-snug">A high-concurrency learning management platform built for the 2026 landscape</p>
                      <p className="text-white/60 text-sm leading-relaxed">
                        PurpleGene®-powered personalization engine at the core. Designed for 20+ languages, IRT-adaptive assessments, and sub-second response at global scale.
                      </p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {[".NET 8/9", "Next.js", "Multi-Agent AI"].map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-7">
                  <div className="p-8 lg:p-12 grid sm:grid-cols-3 gap-6 h-full">
                    {[
                      { color: "emerald", name: "Intelligent Coding Compiler", desc: "AI-assisted debugging for 20+ programming languages with real-time feedback loops." },
                      { color: "emerald", name: "Adaptive Evaluation", desc: "Uses Item Response Theory (IRT) to adjust difficulty in real-time per learner." },
                      { color: "emerald", name: "PurpleGene® Personalization", desc: "Mapping student learning DNA for fully tailored curricula and engagement paths." },
                    ].map((f) => (
                      <div key={f.name} className={`group p-6 rounded-2xl border border-${f.color}-500/15 bg-${f.color}-500/[0.04] hover:border-${f.color}-500/35 hover:bg-${f.color}-500/[0.08] transition-all duration-300`}>
                        <div className={`w-10 h-10 rounded-xl bg-${f.color}-500/15 border border-${f.color}-500/25 flex items-center justify-center text-${f.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                          <CheckIcon className={`text-${f.color}-500 text-base`} />
                        </div>
                        <p className="text-sm font-bold text-white mb-2 leading-snug">{f.name}</p>
                        <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Campus System */}
            <div className="overflow-hidden rounded-3xl border border-border bg-dark/60 backdrop-blur-xl" data-aos="fade-up-sm" data-aos-delay="100">
              <div className="row g-0 items-stretch">
                <div className="lg:col-5 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="p-8 lg:p-12 flex flex-col h-full">
                    <div className="mb-6">
                      <span className="inline-block px-2.5 py-1 rounded-full border border-teal-500/25 bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">AI Campus System</span>
                      <p className="text-2xl font-bold text-white mb-3 leading-snug">An autonomous backbone for institutions — from admissions to retention</p>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Fully autonomous processing of global student applications, predictive risk flagging, and intelligent scheduling — all in one unified institutional platform.
                      </p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {["Multi-Agent AI", "SOC2 Ready", "White-Label"].map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-7">
                  <div className="p-8 lg:p-12 grid sm:grid-cols-3 gap-6 h-full">
                    {[
                      { color: "teal", name: "Admissions Agents", desc: "Autonomous processing of global student applications with AI-driven triage and scoring." },
                      { color: "teal", name: "Predictive Retention", desc: "AI modules that flag student risk before it becomes a drop-out event." },
                      { color: "teal", name: "Smart Admin", desc: "Fully automated scheduling, resource management, and institutional reporting." },
                    ].map((f) => (
                      <div key={f.name} className={`group p-6 rounded-2xl border border-${f.color}-500/15 bg-${f.color}-500/[0.04] hover:border-${f.color}-500/35 hover:bg-${f.color}-500/[0.08] transition-all duration-300`}>
                        <div className={`w-10 h-10 rounded-xl bg-${f.color}-500/15 border border-${f.color}-500/25 flex items-center justify-center text-${f.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                          <CheckIcon className={`text-${f.color}-500 text-base`} />
                        </div>
                        <p className="text-sm font-bold text-white mb-2 leading-snug">{f.name}</p>
                        <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUITE 02: STARTUP OS ── */}
        <section id="startup-os" className="section relative overflow-hidden" style={{ scrollMarginTop: "100px" }}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.07)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-16">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-5">
                  Suite 02 · Startup OS: Operations
                </span>
                <h2 className="has-gradient mb-4">The Business-in-a-Box for Modern Startups</h2>
                <p className="text-lg opacity-75 max-w-2xl mx-auto">
                  Privacy-conscious. Sovereign. Unified. Replacing fragmented tools with one enterprise-grade operational backbone.
                </p>
              </div>
            </div>

            <div className="row gy-8">
              {/* Employee Connect */}
              <div className="lg:col-6" data-aos="fade-up-sm">
                <div className="h-full overflow-hidden rounded-3xl border border-border bg-dark/60 backdrop-blur-xl flex flex-col">
                  <div className="p-8 lg:p-10 border-b border-white/5">
                    <span className="inline-block px-2.5 py-1 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Employee Connect</span>
                    <p className="text-xl font-bold text-white mb-3 leading-snug">The Startup Intranet — Unified Workspace</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Replace fragmented SaaS tools with a single, sovereign workspace. From bug tracking to team velocity insights, everything in one secure environment.
                    </p>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col gap-5 flex-1">
                    {[
                      { name: "Execution Suite", desc: "Bug tracking, timesheets, and leave management in one seamless flow." },
                      { name: "Productivity AI", desc: "Team velocity and project health insights powered by embedded AI analytics." },
                      { name: "Integrated Chat", desc: "Real-time collaboration in secure, project-scoped workspaces with no external dependencies." },
                    ].map((f) => (
                      <div key={f.name} className="flex items-start gap-4 group">
                        <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                          <CheckIcon className="text-blue-500 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white mb-1">{f.name}</p>
                          <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AHA Suite */}
              <div className="lg:col-6" data-aos="fade-up-sm" data-aos-delay="100">
                <div className="h-full overflow-hidden rounded-3xl border border-border bg-dark/60 backdrop-blur-xl flex flex-col">
                  <div className="p-8 lg:p-10 border-b border-white/5">
                    <span className="inline-block px-2.5 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">AHA Suite</span>
                    <p className="text-xl font-bold text-white mb-3 leading-snug">The Privacy-First Compliance Engine for Accounts, HR &amp; Admin</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      A locally-hosted sovereign system that keeps your data fully within your control. Pre-built legal and HR workflows designed for compliance from day one.
                    </p>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col gap-5 flex-1">
                    {[
                      { name: "Sovereign Hosting", desc: "Locally hosted system ensuring complete data control and regulatory compliance." },
                      { name: "Startup Templates", desc: "Pre-built HR policies and legal workflows so you're compliant before you ship." },
                      { name: "Unified Governance", desc: "Payroll and office management in one secure environment — no third-party leakage." },
                    ].map((f) => (
                      <div key={f.name} className="flex items-start gap-4 group">
                        <div className="shrink-0 w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                          <CheckIcon className="text-indigo-500 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white mb-1">{f.name}</p>
                          <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUITE 03: HEALTHOS ── */}
        <section id="healthos" className="section bg-dark relative overflow-hidden" style={{ scrollMarginTop: "100px" }}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.07)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-16">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" /> Suite 03 · HealthOS
                </span>
                <h2 className="has-gradient mb-4">Clinical Decision Intelligence for Modern Care Delivery</h2>
                <p className="text-lg opacity-75 max-w-2xl mx-auto">
                  HIPAA &amp; ABDM compliant clinical intelligence for underserved and urban care delivery — from district hospitals to national networks.
                </p>
              </div>
            </div>

            {/* ClinAlly CDSS */}
            <div className="overflow-hidden rounded-3xl border border-purple-500/15 bg-gradient-to-br from-white/[0.03] to-purple-500/[0.03] backdrop-blur-xl mb-8" data-aos="fade-up-sm">
              <div className="row g-0 items-stretch">
                <div className="lg:col-5 p-8 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-purple-500/10">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-5">HealthOS · ClinAlly</span>
                    <p className="text-2xl font-bold text-white mb-4 leading-snug">AI-Powered Clinical Decision Support at District Scale</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-8">
                      ClinAlly CDSS brings evidence-based diagnostic intelligence to district hospitals, NLP workflows for unstructured clinical data, and full HIPAA &amp; ABDM compliance built in from day one.
                    </p>
                    <ul className="flex flex-col gap-3">
                      {["Evidence-based clinical decision support", "HIPAA & ABDM compliant from day one", "NLP pipeline for unstructured data", "Real-time rural impact at district level"].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-white/70 font-medium">
                          <CheckIcon className="text-purple-500 text-sm shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {["ABDM Ready", "NLP AI", "Clinical Workflows", "HIPAA"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-7 p-8 lg:p-14 grid sm:grid-cols-1 gap-6">
                  {[
                    { name: "ClinAlly CDSS", desc: "AI-powered Clinical Decision Support System for district hospitals with evidence-based diagnostic suggestions integrated with EMRs.", stat: "SDG 3", statLabel: "Good Health", color: "purple" },
                    { name: "NLP Workflows", desc: "Natural language processing pipelines that extract, structure, and act on unstructured clinical data in real-time across specialties.", stat: "100%", statLabel: "Compliance Ready", color: "violet" },
                    { name: "ABDM Integration", desc: "Full compliance with India's Ayushman Bharat Digital Mission and global HIPAA standards, built in from the first line of code.", stat: "22+", statLabel: "Hospitals Served", color: "blue" },
                  ].map((f) => (
                    <div key={f.name} className={`group flex items-start gap-5 p-6 rounded-2xl border border-${f.color}-500/15 bg-${f.color}-500/[0.04] hover:border-${f.color}-500/30 hover:bg-${f.color}-500/[0.08] transition-all duration-300`}>
                      <div className={`shrink-0 w-11 h-11 rounded-xl bg-${f.color}-500/15 border border-${f.color}-500/25 flex items-center justify-center text-${f.color}-400 group-hover:scale-110 transition-transform`}>
                        <CheckIcon className={`text-${f.color}-500 text-base`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <p className="text-sm font-bold text-white leading-snug">{f.name}</p>
                          <div className="text-right shrink-0">
                            <p className={`text-lg font-black text-${f.color}-400 leading-none`}>{f.stat}</p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-white/35 mt-0.5">{f.statLabel}</p>
                          </div>
                        </div>
                        <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUITE 04: AGROSENSE ── */}
        <section id="agrosense" className="section relative overflow-hidden" style={{ scrollMarginTop: "100px" }}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(132,204,22,0.07)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-16">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-xs font-bold uppercase tracking-widest mb-5">
                  Suite 04 · AgroSense
                </span>
                <h2 className="has-gradient mb-4">Precision Agriculture Intelligence at Scale</h2>
                <p className="text-lg opacity-75 max-w-2xl mx-auto">
                  Turning dirt into data — geospatial AI, drone integration, digital twin farming, and blockchain-backed land title protection for a sustainable future.
                </p>
              </div>
            </div>

            {/* Landlordz / AgroSense deep-dive */}
            <div className="overflow-hidden rounded-3xl border border-lime-500/15 bg-gradient-to-br from-white/[0.03] to-lime-500/[0.03] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="row g-0 items-stretch">
                <div className="lg:col-5 p-8 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-lime-500/10">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full border border-lime-500/25 bg-lime-500/10 text-lime-400 text-xs font-bold uppercase tracking-widest mb-5">AgroSense · Landlordz</span>
                    <p className="text-2xl font-bold text-white mb-4 leading-snug">Digital Twin Farming with Sovereign Land Intelligence</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-8">
                      Blockchain-backed title protection, real-time soil intelligence, drone integration suite, and a vetted partner marketplace — modernising land ownership and agri-sustainability aligned to UN SDG 2.
                    </p>
                    <ul className="flex flex-col gap-3">
                      {["Blockchain-backed digital land fencing", "Real-time soil health & carbon tracking", "Drone integration for field monitoring", "Vetted sustainable partners marketplace"].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-white/70 font-medium">
                          <CheckIcon className="text-lime-500 text-sm shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {["Blockchain", "Drone AI", "Geospatial", "Carbon Credits"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-7 p-8 lg:p-14 grid sm:grid-cols-1 gap-6">
                  {[
                    { name: "Digital Twin Farming", desc: "Create a live digital replica of every field — monitor crop health, soil composition, and micro-climate in real time with AI-driven alerts.", stat: "SDG 2", statLabel: "Zero Hunger", color: "lime" },
                    { name: "Drone Integration Suite", desc: "Automated aerial surveillance and precision spraying integrated with on-ground IoT sensors for end-to-end farm visibility.", stat: "60%", statLabel: "Cost Reduction", color: "green" },
                    { name: "Soil & Land Intelligence", desc: "Blockchain-backed title protection combined with soil health analytics and carbon credit tracking to unlock new revenue streams.", stat: "500+", statLabel: "Vetted Partners", color: "teal" },
                  ].map((f) => (
                    <div key={f.name} className={`group flex items-start gap-5 p-6 rounded-2xl border border-${f.color}-500/15 bg-${f.color}-500/[0.04] hover:border-${f.color}-500/30 hover:bg-${f.color}-500/[0.08] transition-all duration-300`}>
                      <div className={`shrink-0 w-11 h-11 rounded-xl bg-${f.color}-500/15 border border-${f.color}-500/25 flex items-center justify-center text-${f.color}-400 group-hover:scale-110 transition-transform`}>
                        <CheckIcon className={`text-${f.color}-500 text-base`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <p className="text-sm font-bold text-white leading-snug">{f.name}</p>
                          <div className="text-right shrink-0">
                            <p className={`text-lg font-black text-${f.color}-400 leading-none`}>{f.stat}</p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-white/35 mt-0.5">{f.statLabel}</p>
                          </div>
                        </div>
                        <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCT STANDARD SPECS ── */}
        <section className="section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.05)_0%,_transparent_70%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Product Standard</p>
                <h2 className="has-gradient mb-4">Built to Enterprise Specification</h2>
                <p className="text-lg opacity-75 max-w-xl mx-auto">
                  Every Pragmatiq product ships with the same enterprise-grade guarantees — security, flexibility, and governance baked in.
                </p>
              </div>
            </div>
            <div className="row gy-4" data-aos="fade-up-sm" data-aos-delay="100">
              {[
                { label: "Tech Stack",  value: "Modern .NET 8/9, Next.js, and Multi-Agent AI Workflows", color: "emerald" },
                { label: "Data Privacy", value: "Localised hosting options (AHA) and SOC2-compliant architectures", color: "blue" },
                { label: "Flexibility",  value: "White-Labeling or full Source Code Handover available", color: "violet" },
                { label: "Expertise",   value: "Backed by 30+ years of global CTO-level governance", color: "amber" },
              ].map((spec, i) => (
                <div key={spec.label} className="md:col-6 lg:col-3" data-aos="fade-up-sm" data-aos-delay={`${i * 75}`}>
                  <div className={`group h-full p-7 rounded-2xl border border-${spec.color}-500/15 bg-${spec.color}-500/[0.04] hover:border-${spec.color}-500/35 hover:bg-${spec.color}-500/[0.08] transition-all duration-300 flex flex-col gap-4`}>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-2">{spec.label}</p>
                      <p className="text-sm font-semibold text-white leading-snug">{spec.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-white/[0.04] to-emerald-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="px-8 py-14 lg:px-20 lg:py-20 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  Ready to Deploy
                </span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">
                  Ready to stabilise your mission-critical platform or launch globally?
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  From campus engines to sovereign compliance platforms — request a demo and see it in action.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-2">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Request a Product Demo">Request a Product Demo</span></span>
                    <span className="icon"><span><span><ArrowRight size={12} /></span><span><ArrowRight size={12} /></span></span></span>
                  </Link>
                  <Link className="btn btn-outline-white" href="/industries">
                    <span className="value"><span data-content="View Industry Exposure">View Industry Exposure</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
