"use client";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CheckIcon = ({ color = "emerald" }: { color?: string }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
    className={`text-${color}-500 text-sm shrink-0`} height="1em" width="1em"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
  </svg>
);

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const services = [
  {
    id: "launchpad",
    badge: "Most Popular",
    badgeColor: "emerald",
    name: "Accelerated Product Launchpad",
    desc: "Go from idea to market-ready product in record time. Pre-built AI accelerators + expert engineering teams.",
    bullets: ["MVP in 90 days", "AI-first by default", "Built-in scalability"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    id: "ai-agents",
    badge: "New",
    badgeColor: "violet",
    name: "Army of AI Agents",
    desc: "Deploy a coordinated fleet of specialized AI agents for 24/7 autonomous workflow automation.",
    bullets: ["50+ specialized agents", "Multi-agent orchestration", "Custom agent builds"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2m16 0h2M7 13v2m4-2v2m4-2v2" />
      </svg>
    ),
  },
  {
    id: "venture-studio",
    badge: null,
    badgeColor: "amber",
    name: "Technology Venture Studio",
    desc: "We co-found and accelerate AI-first startups, from ideation to IPO-ready exits.",
    bullets: ["Co-founder equity model", "90-day launch playbook", "Domain network access"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "embedded-teams",
    badge: null,
    badgeColor: "sky",
    name: "Embedded Teams",
    desc: "Elite engineering squads that plug directly into your product org, working in your stack and timezone.",
    bullets: ["Same-timezone alignment", "Full code ownership", "Micro-GCC model"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "managed-services",
    badge: null,
    badgeColor: "cyan",
    name: "Managed Services",
    desc: "Full operational ownership of your AI systems and infrastructure — 24/7 with guaranteed SLAs.",
    bullets: ["99.9% uptime SLA", "AI & DevOps coverage", "Monthly reporting"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "fractional-cto",
    badge: null,
    badgeColor: "indigo",
    name: "Fractional CTO",
    desc: "Executive-level tech leadership on demand — architecture decisions, team building, investor roadmaps.",
    bullets: ["10+ hrs/week model", "Board-ready reporting", "Fundraising support"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
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
              <div className="pt-6 text-center md:col-9 lg:col-8">
                <div data-aos="fade-up-sm" className="mx-auto mb-4 w-fit rounded-full p-px border border-white/15">
                  <div className="flex gap-2 rounded-full px-3 py-1.5">
                    <span className="text-sm opacity-70 md:text-base">AI-First Services</span>
                  </div>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">
                  Our Services
                </h1>
                <p data-aos="fade-up-sm" className="mb-8 text-xl/[inherit] opacity-80 max-w-2xl mx-auto">
                  Comprehensive AI-first technology services — from rapid product launches to long-term managed infrastructure — all designed to accelerate your sustainable impact.
                </p>
                <ul className="flex flex-wrap justify-center gap-4" data-aos="fade-up-sm">
                  <li>
                    <Link className="btn btn-primary has-icon" href="/contact">
                      <span className="value"><span data-content="Request a Consultation">Request a Consultation</span></span>
                      <span className="icon"><span><span><ArrowRight size={12} /></span><span><ArrowRight size={12} /></span></span></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn-outline-transparent" href="/products">
                      <span className="value"><span data-content="View Our Products">View Our Products</span></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute left-[15%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-20 blur-[100px] bg-linear-to-tr md:top-1/3" />
        </section>

        {/* ── STATS BAR ── */}
        <section className="section pb-0">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-border bg-dark/40 backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="grid grid-cols-2 divide-x divide-y lg:grid-cols-4 lg:divide-y-0 divide-white/5">
                {[
                  { value: "15+", label: "Global Enterprise Clients", color: "emerald" },
                  { value: "40%", label: "Avg. Operational Efficiency Gain", color: "blue" },
                  { value: "90", label: "Days to MVP Launch", color: "violet" },
                  { value: "99.9%", label: "Uptime SLA Guaranteed", color: "cyan" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex flex-col items-center justify-center gap-1.5 px-6 py-10"
                    data-aos="fade-up-sm" data-aos-delay={`${i * 75}`}>
                    <p className={`text-4xl font-black text-${stat.color}-400 leading-none`}>{stat.value}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 text-center">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SIX SERVICES GRID ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">What We Do</p>
                <h2 className="has-gradient mb-4">Six Ways We Accelerate You</h2>
                <p className="text-lg opacity-75 max-w-xl mx-auto">
                  From a single sprint to a long-term technology partnership — every service is designed around your outcomes.
                </p>
              </div>
            </div>
            <div className="row gy-5">
              {services.map((svc, i) => (
                <div key={svc.id} className="md:col-6 lg:col-4" data-aos="fade-up-sm" data-aos-delay={`${(i % 3) * 100}`}>
                  <div className={`group h-full flex flex-col p-8 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl hover:border-${svc.badgeColor}-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-${svc.badgeColor}-500/15 border border-${svc.badgeColor}-500/25 flex items-center justify-center text-${svc.badgeColor}-400 group-hover:scale-110 transition-transform duration-300`}>
                        {svc.icon}
                      </div>
                      {svc.badge && (
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-${svc.badgeColor}-500/30 bg-${svc.badgeColor}-500/10 text-${svc.badgeColor}-400`}>
                          {svc.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-lg font-bold text-white mb-3 leading-snug">{svc.name}</p>
                    <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">{svc.desc}</p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-sm text-white/65 font-medium">
                          <CheckIcon color={svc.badgeColor} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={`inline-flex items-center gap-2 text-${svc.badgeColor}-400 text-sm font-semibold hover:gap-3 transition-all`}>
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED: ACCELERATED PRODUCT LAUNCHPAD ── */}
        <section className="section bg-dark relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.08)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="overflow-hidden rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-white/[0.04] to-emerald-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="row g-0 items-stretch">
                <div className="lg:col-6 p-8 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-emerald-500/10">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-black uppercase tracking-widest">Most Popular</span>
                      <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-bold uppercase tracking-widest">Featured Service</span>
                    </div>
                    <div>
                      <h2 className="has-gradient mb-4 text-3xl lg:text-4xl font-bold leading-tight">Accelerated Product Launchpad</h2>
                      <p className="text-white/65 text-base leading-relaxed">
                        Go from idea to market-ready product in record time using our pre-built AI accelerators and expert engineering teams. The fastest path from whiteboard to production.
                      </p>
                    </div>
                    <ul className="flex flex-col gap-4">
                      {[
                        { label: "MVP in 90 days", detail: "Scoped, built, and shipped in a single quarter", color: "emerald" },
                        { label: "AI-first by default", detail: "Every product ships with embedded AI capabilities", color: "blue" },
                        { label: "Built-in scalability", detail: "Architecture designed to grow from 10 to 10M users", color: "violet" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-start gap-3">
                          <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-${item.color}-500/15 text-${item.color}-400`}>
                            <CheckIcon color={item.color} />
                          </span>
                          <div>
                            <p className="text-sm font-bold text-white leading-snug">{item.label}</p>
                            <p className="text-white/45 text-xs mt-0.5">{item.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-8">
                    <Link className="btn btn-primary has-icon" href="/contact">
                      <span className="value"><span data-content="Start Your Launchpad">Start Your Launchpad</span></span>
                      <span className="icon"><span><span><ArrowRight size={12} /></span><span><ArrowRight size={12} /></span></span></span>
                    </Link>
                  </div>
                </div>
                <div className="lg:col-6 p-8 lg:p-14 flex flex-col justify-center gap-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-2">How It Works</p>
                  {[
                    { step: "01", title: "Discovery & Strategy", desc: "AI-driven market gap analysis, MVP scoping, and product-market fit validation — completed in 48 hours.", color: "emerald" },
                    { step: "02", title: "Rapid Prototyping", desc: "Interactive prototypes in days, not months — powered by AI code generation and our pre-built module library.", color: "blue" },
                    { step: "03", title: "Go-to-Market Launch", desc: "Scalable cloud infrastructure, monitoring, and growth tooling shipped and production-ready from day one.", color: "violet" },
                  ].map((step, idx) => (
                    <div key={step.step} className="group flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-${step.color}-500/35 bg-${step.color}-500/12 text-${step.color}-400 font-black text-sm group-hover:bg-${step.color}-500/20 transition-colors`}>
                          {step.step}
                        </div>
                        {idx < 2 && <div className={`mt-2 w-px flex-1 bg-gradient-to-b from-${step.color}-500/25 to-transparent`} />}
                      </div>
                      <div className="pt-1 pb-4">
                        <p className="text-base font-bold text-white mb-1.5">{step.title}</p>
                        <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARMY OF AI AGENTS ── */}
        <section className="section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.08)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row g-0 items-center gap-y-12 lg:gap-y-0">
              <div className="lg:col-5 lg:pr-12" data-aos="fade-up-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-black uppercase tracking-widest mb-6">
                  New Service
                </span>
                <h2 className="has-gradient mb-5 text-3xl lg:text-4xl font-bold leading-tight">Army of AI Agents</h2>
                <p className="text-lg opacity-75 mb-8 leading-relaxed">
                  Deploy a coordinated fleet of specialized AI agents for 24/7 autonomous workflow automation. Each agent is purpose-built, each fleet is orchestrated to your exact ops model.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold">50+ specialized agents</span>
                  <span className="px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold">Multi-agent orchestration</span>
                  <span className="px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold">Custom agent builds</span>
                </div>
                <Link href="/contact" className="btn btn-primary has-icon">
                  <span className="value"><span data-content="Deploy Your Fleet">Deploy Your Fleet</span></span>
                  <span className="icon"><span><span><ArrowRight size={12} /></span><span><ArrowRight size={12} /></span></span></span>
                </Link>
              </div>
              <div className="lg:col-7 lg:pl-8 grid sm:grid-cols-2 gap-4" data-aos="fade-up-sm" data-aos-delay="100">
                {[
                  { name: "Data & Analytics Agents", desc: "Continuously mine, clean, and surface insights from live enterprise data streams.", color: "violet" },
                  { name: "Customer Ops Agents", desc: "Handle tier-1 support, lead qualification, and CRM updates autonomously around the clock.", color: "purple" },
                  { name: "DevOps & Infra Agents", desc: "Monitor systems, auto-scale infrastructure, and resolve incidents without human intervention.", color: "fuchsia" },
                  { name: "Research & Intel Agents", desc: "Crawl, summarize, and brief your team on competitive intelligence and market signals daily.", color: "pink" },
                ].map((agent) => (
                  <div key={agent.name} className={`group p-6 rounded-2xl border border-${agent.color}-500/15 bg-${agent.color}-500/[0.04] hover:border-${agent.color}-500/35 hover:bg-${agent.color}-500/[0.08] transition-all duration-300`}>
                    <div className={`w-9 h-9 rounded-xl bg-${agent.color}-500/15 border border-${agent.color}-500/20 flex items-center justify-center text-${agent.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
                        <path d="M2 14h2m16 0h2M7 13v2m4-2v2m4-2v2" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-white mb-2 leading-snug">{agent.name}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{agent.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MORE WAYS TO PARTNER ── */}
        <section className="section bg-dark relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <h2 className="has-gradient mb-4">More Ways to Partner</h2>
                <p className="text-lg opacity-75 max-w-xl mx-auto">
                  Longer-term engagements, deeper integration, and executive-level leverage.
                </p>
              </div>
            </div>
            <div className="row gy-5">
              {/* Venture Studio */}
              <div className="lg:col-6" data-aos="fade-up-sm">
                <div className="group h-full overflow-hidden rounded-3xl border border-amber-500/15 bg-amber-500/[0.03] backdrop-blur-xl hover:border-amber-500/30 transition-all duration-300 flex flex-col">
                  <div className="p-8 lg:p-10 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                      <p className="text-xl font-bold text-white leading-snug">Technology Venture Studio</p>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      We co-found and accelerate AI-first startups, from ideation to IPO-ready exits. Not just a vendor — a co-builder with equity skin in the game.
                    </p>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col gap-5 flex-1">
                    {[
                      { step: "01", title: "Ideation & Thesis", desc: "AI-powered market gap identification aligned with UN Sustainable Development Goals." },
                      { step: "02", title: "Co-Build", desc: "Embedded engineering squads launching full MVPs in 90 days with equity partnership." },
                      { step: "03", title: "Scale & Exit", desc: "M&A advisory, strategic partnerships, and growth capital to investor-ready exits." },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-4">
                        <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-black">{s.step}</span>
                        <div>
                          <p className="text-sm font-bold text-white mb-1">{s.title}</p>
                          <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2.5 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold">Co-founder equity model</span>
                      <span className="px-2.5 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold">90-day launch playbook</span>
                      <span className="px-2.5 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold">Domain network access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded + Managed + Fractional CTO */}
              <div className="lg:col-6 flex flex-col gap-5" data-aos="fade-up-sm" data-aos-delay="100">
                {[
                  {
                    color: "sky",
                    name: "Embedded Teams",
                    desc: "Elite engineering squads that plug directly into your product org, working in your stack and timezone.",
                    bullets: ["Same-timezone alignment", "Full code ownership", "Micro-GCC model"],
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                  },
                  {
                    color: "cyan",
                    name: "Managed Services",
                    desc: "Full operational ownership of your AI systems and infrastructure — 24/7 with guaranteed SLAs.",
                    bullets: ["99.9% uptime SLA", "AI & DevOps coverage", "Monthly reporting"],
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
                  },
                  {
                    color: "indigo",
                    name: "Fractional CTO",
                    desc: "Executive-level tech leadership on demand — architecture decisions, team building, investor roadmaps.",
                    bullets: ["10+ hrs/week model", "Board-ready reporting", "Fundraising support"],
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                  },
                ].map((svc) => (
                  <div key={svc.name} className={`group flex items-start gap-5 p-6 rounded-2xl border border-${svc.color}-500/15 bg-${svc.color}-500/[0.04] hover:border-${svc.color}-500/30 hover:bg-${svc.color}-500/[0.08] transition-all duration-300`}>
                    <div className={`shrink-0 w-11 h-11 rounded-xl bg-${svc.color}-500/15 border border-${svc.color}-500/20 flex items-center justify-center text-${svc.color}-400 group-hover:scale-110 transition-transform`}>
                      {svc.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white mb-1.5 leading-snug">{svc.name}</p>
                      <p className="text-white/50 text-xs leading-relaxed mb-3">{svc.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.bullets.map((b) => (
                          <span key={b} className={`px-2 py-0.5 rounded text-[10px] font-semibold border border-${svc.color}-500/15 bg-${svc.color}-500/[0.08] text-${svc.color}-400`}>{b}</span>
                        ))}
                      </div>
                    </div>
                    <Link href="/contact" className={`shrink-0 text-${svc.color}-400 hover:text-${svc.color}-300 transition-colors`}>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-white/[0.04] to-emerald-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="px-8 py-14 lg:px-20 lg:py-20 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  Let&apos;s Build Together
                </span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">
                  Ready to accelerate your sustainable impact?
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Whether you need a 90-day MVP, a fleet of AI agents, or a co-founder — we have the service model to match. Let&apos;s scope it together.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-2">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Request a Consultation">Request a Consultation</span></span>
                    <span className="icon"><span><span><ArrowRight size={12} /></span><span><ArrowRight size={12} /></span></span></span>
                  </Link>
                  <Link className="btn btn-outline-white" href="/products">
                    <span className="value"><span data-content="Explore Our Products">Explore Our Products</span></span>
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
