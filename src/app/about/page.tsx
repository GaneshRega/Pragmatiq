"use client";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Arr = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const milestones = [
  { year: "2018", text: "Founded with a mission to accelerate SDGs through AI-first solutions." },
  { year: "2019", text: "Launched PurpleGene®, India's first AI-powered personalized learning engine." },
  { year: "2020", text: "Partnered with Clinally to build AI-powered Clinical Decision Support Systems integrated with 50+ healthcare providers." },
  { year: "2021", text: "Launched PALS (Pragmatiq Academy of Life Sciences) with TISS-SVE partnership." },
  { year: "2022", text: "Introduced LAND LORDZ, India's first personalized agriculture system combining satellite data, drone analytics, and AI." },
  { year: "2023", text: "Expanded to serve global top-10 pharmaceutical companies with AI-powered research and regulatory automation." },
  { year: "2024", text: "Launched Technology Venture Studio, co-founding 4 AI-first startups across 3 continents." },
  { year: "2025+", text: "Deploying AI agents and establishing Micro-GCC hubs globally." },
];

const team = [
  { name: "Bharat Gujavarti", title: "Founder & CEO", bio: "Visionary entrepreneur with 30+ years in enterprise technology, orchestrating the HEAL strategy and global venture studio operations.", initials: "BG", color: "emerald" },
  { name: "Archana Kadarla", title: "VP — Products", bio: "Expert in product lifecycle management and AI-driven solutioning, leading the HEAL-aligned product ecosystem evolution.", initials: "AK", color: "sky" },
  { name: "Sasikanth Vanga", title: "VP — Operations", bio: "Operational excellence leader with expertise in high-performance engineering hubs and Micro-GCC logistics.", initials: "SV", color: "violet" },
  { name: "Ram Yeleswarapu", title: "Advisor", bio: "Strategic advisor experienced in life sciences and technology, guiding cross-border growth and regulatory compliance.", initials: "RY", color: "amber" },
  { name: "Ajay Vamadevan", title: "Advisor", bio: "Scholar and digital health expert focusing on epidemiology and mHealth interventions for clinical domains.", initials: "AV", color: "teal" },
];

const squads = [
  { color: "emerald", name: "AI Engineering Squad", desc: "LLMs, computer vision, NLP, and multi-agent orchestration specialists.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2m16 0h2M7 13v2m4-2v2m4-2v2"/></svg> },
  { color: "sky", name: "Product Launchpad Squad", desc: "Full-stack engineers and designers running 90-day launchpad programs.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg> },
  { color: "blue", name: "Domain Intelligence Squad", desc: "Healthcare, Education, Agriculture, and Life Sciences domain experts.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { color: "cyan", name: "DevOps & Managed Services", desc: "SREs and cloud architects ensuring 99.99% uptime across all client environments.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg> },
  { color: "violet", name: "Venture Studio Crew", desc: "Strategy, market research, and go-to-market specialists for co-founded startups.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/></svg> },
  { color: "purple", name: "PALS Academy Team", desc: "Educators, curriculum designers, and learning technologists for life sciences training.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
];

const values = [
  { color: "emerald", title: "AI-First by Design", desc: "Every product, every service, and every engagement starts with AI as a core capability — not an afterthought.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2m16 0h2M7 13v2m4-2v2m4-2v2"/></svg> },
  { color: "sky", title: "Sustainable by Purpose", desc: "We align every initiative to the UN Sustainable Development Goals — impact is our primary KPI.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg> },
  { color: "violet", title: "Impact at Scale", desc: "We build for millions, not thousands — our architecture is designed for the underserved and the global simultaneously.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { color: "amber", title: "People Over Profit", desc: "We choose partners whose vision aligns with ours — long-term trust over short-term transactions.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
];

const sdgs = [
  { num: "SDG 3", label: "Good Health & Well-being", color: "blue", desc: "AI-powered clinical tools and healthcare infrastructure that reach the last mile." },
  { num: "SDG 4", label: "Quality Education", color: "emerald", desc: "Personalised learning engines and edtech platforms that democratise access to knowledge." },
  { num: "SDG 2", label: "Zero Hunger", color: "green", desc: "Precision agriculture systems that empower farmers with satellite data and AI insights." },
  { num: "SDG 9", label: "Industry & Innovation", color: "purple", desc: "Life sciences and pharma AI that accelerates discovery and regulatory compliance." },
];

const colorBorder: Record<string, string> = {
  emerald: "border-emerald-500/15 hover:border-emerald-500/30",
  sky:     "border-sky-500/15 hover:border-sky-500/30",
  violet:  "border-violet-500/15 hover:border-violet-500/30",
  amber:   "border-amber-500/15 hover:border-amber-500/30",
  teal:    "border-teal-500/15 hover:border-teal-500/30",
  blue:    "border-blue-500/15 hover:border-blue-500/30",
  cyan:    "border-cyan-500/15 hover:border-cyan-500/30",
  purple:  "border-purple-500/15 hover:border-purple-500/30",
  green:   "border-green-500/15 hover:border-green-500/30",
};

const colorBg: Record<string, string> = {
  emerald: "bg-emerald-500/[0.03]",
  sky:     "bg-sky-500/[0.03]",
  violet:  "bg-violet-500/[0.03]",
  amber:   "bg-amber-500/[0.03]",
  teal:    "bg-teal-500/[0.03]",
  blue:    "bg-blue-500/[0.03]",
  cyan:    "bg-cyan-500/[0.03]",
  purple:  "bg-purple-500/[0.03]",
  green:   "bg-green-500/[0.03]",
};

const colorIcon: Record<string, string> = {
  emerald: "bg-emerald-500/15 border border-emerald-500/20 text-emerald-400",
  sky:     "bg-sky-500/15 border border-sky-500/20 text-sky-400",
  violet:  "bg-violet-500/15 border border-violet-500/20 text-violet-400",
  amber:   "bg-amber-500/15 border border-amber-500/20 text-amber-400",
  teal:    "bg-teal-500/15 border border-teal-500/20 text-teal-400",
  blue:    "bg-blue-500/15 border border-blue-500/20 text-blue-400",
  cyan:    "bg-cyan-500/15 border border-cyan-500/20 text-cyan-400",
  purple:  "bg-purple-500/15 border border-purple-500/20 text-purple-400",
  green:   "bg-green-500/15 border border-green-500/20 text-green-400",
};

const colorText: Record<string, string> = {
  emerald: "text-emerald-400",
  sky:     "text-sky-400",
  violet:  "text-violet-400",
  amber:   "text-amber-400",
  teal:    "text-teal-400",
  blue:    "text-blue-400",
  cyan:    "text-cyan-400",
  purple:  "text-purple-400",
  green:   "text-green-400",
};

const colorBadge: Record<string, string> = {
  blue:    "border-blue-500/30 bg-blue-500/10 text-blue-400",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  green:   "border-green-500/30 bg-green-500/10 text-green-400",
  purple:  "border-purple-500/30 bg-purple-500/10 text-purple-400",
};

const yearGradient: React.CSSProperties = {
  background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function AboutPage() {
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
              <div className="pt-6 text-center md:col-10 lg:col-9">
                <div data-aos="fade-up-sm" className="mx-auto mb-4 w-fit rounded-full border border-white/15 px-3 py-1.5 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span className="text-sm opacity-70 md:text-base">About Pragmatiq</span>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">
                  Building AI-First Solutions For a Sustainable Future.
                </h1>
                <p data-aos="fade-up-sm" className="mb-4 text-xl/[inherit] opacity-80 max-w-2xl mx-auto">
                  Impact-driven technology company accelerating Sustainable Development Goals through responsible AI across Healthcare, Education, Agriculture, and Life Sciences.
                </p>
                <p data-aos="fade-up-sm" className="mb-8 text-base text-white/55 max-w-2xl mx-auto leading-relaxed">
                  We democratise elite AI capabilities through our Micro-GCC model and embedded team approach — serving healthcare startups, educational institutions, agri-tech companies, and life sciences organisations globally.
                </p>
                <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up-sm">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Work With Us">Work With Us</span></span>
                    <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                  </Link>
                  <Link className="btn btn-outline-white" href="/services">
                    <span className="value"><span data-content="Our Services">Our Services</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-emerald-500/30 from-40% via-sky-500/20 to-transparent opacity-15 blur-[100px] bg-linear-to-tr" />
          <div aria-hidden="true" className="pointer-events-none absolute right-[5%] top-1/3 z-10 h-[280px] w-[400px] rotate-[15deg] rounded-full from-violet-500/20 from-40% to-transparent opacity-10 blur-[80px] bg-linear-to-tl" />
        </section>

        {/* ── STATS BAR ── */}
        <section className="section pb-0">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                  { value: "2018", label: "Year Founded" },
                  { value: "30+", label: "Years Engineering Pedigree" },
                  { value: "4", label: "UN SDGs Addressed" },
                  { value: "22+", label: "Institutions Served" },
                ].map((stat) => (
                  <div key={stat.label} className="p-8 text-center">
                    <p className="tracking-none text-3xl font-black text-white mb-1">{stat.value}</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center">
              <div className="lg:col-10" data-aos="fade-up-sm">
                <div className="rounded-3xl border border-emerald-500/15 bg-emerald-500/[0.03] p-10 lg:p-16 text-center">
                  <p className="text-xs uppercase tracking-widest text-emerald-400/70 mb-4">Our Mission</p>
                  <h2 className="has-gradient mb-6 text-3xl lg:text-4xl">Democratising Elite AI</h2>
                  <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                    Cutting-edge AI should not be exclusive to Fortune 500 companies. We build technology that matters — from clinical decision support in rural India to AI-powered drug discovery for global pharmaceutical companies.
                  </p>
                  <p className="text-white/45 text-base leading-relaxed max-w-2xl mx-auto">
                    Through our HEAL strategy — Healthcare, Education, Agriculture, and Life Sciences — we align every product and partnership with humanity&apos;s most pressing challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="section bg-dark relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.06)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">What Drives Us</p>
                <h2 className="has-gradient mb-4">Four Principles. One Direction.</h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto">Every decision at Pragmatiq runs through these four filters.</p>
              </div>
            </div>
            <div className="row gy-5">
              {values.map((v, i) => (
                <div key={v.title} className="md:col-6" data-aos="fade-up-sm" data-aos-delay={`${(i % 2) * 100}`}>
                  <div className={`group flex items-start gap-5 p-8 rounded-3xl border ${colorBorder[v.color]} ${colorBg[v.color]} transition-all duration-300`}>
                    <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${colorIcon[v.color]}`}>
                      {v.icon}
                    </div>
                    <div>
                      <p className="text-base font-bold text-white mb-2 leading-snug">{v.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Our Journey</p>
                <h2 className="has-gradient mb-4">From Idea to Impact.</h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto">Seven years of building technology that changes lives — and counting.</p>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Center line — desktop only */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
                style={{ background: "linear-gradient(180deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)" }}
              />

              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                const isLast = m.year === "2025+";
                const borderGradient = isLast
                  ? "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)"
                  : "linear-gradient(135deg, rgba(59,130,246,0.28), rgba(139,92,246,0.28), rgba(236,72,153,0.28))";

                const Card = () => (
                  <div className="p-px rounded-2xl transition-all duration-300 hover:-translate-y-1" style={{ background: borderGradient }}>
                    <div className={`p-5 rounded-[15px] ${isLast ? "bg-[#0d1525]" : "bg-[#0A0E17]"}`}>
                      <p className="text-lg font-black mb-2 tracking-tight" style={yearGradient}>{m.year}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                );

                return (
                  <div key={m.year} className="relative flex items-center mb-5 md:mb-0 md:min-h-[120px]" data-aos="fade-up-sm" data-aos-delay={`${i * 70}`}>
                    <div className={`w-full md:w-[calc(50%-28px)] hidden md:block ${!isLeft ? "invisible" : ""}`}>
                      {isLeft && <Card />}
                    </div>
                    <div className="hidden md:flex shrink-0 w-14 items-center justify-center z-10">
                      <div
                        className="w-3.5 h-3.5 rounded-full"
                        style={isLast
                          ? { background: "linear-gradient(135deg,#34d399,#10b981)", border: "2px solid #34d399", boxShadow: "0 0 12px rgba(52,211,153,0.6)" }
                          : { background: "linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)", border: "2px solid #8b5cf6" }
                        }
                      />
                    </div>
                    <div className={`w-full md:w-[calc(50%-28px)] hidden md:block ${isLeft ? "invisible" : ""}`}>
                      {!isLeft && <Card />}
                    </div>
                    {/* Mobile */}
                    <div className={`md:hidden w-full pl-4 border-l-2 ${isLast ? "border-emerald-400" : "border-violet-500/50"}`}>
                      <p className="text-base font-black mb-1" style={yearGradient}>{m.year}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP ── */}
        <section className="section bg-dark relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.07)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">The People Behind Pragmatiq</p>
                <h2 className="has-gradient mb-4">Leadership & Advisors</h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto">Decades of combined expertise across enterprise technology, life sciences, and digital health.</p>
              </div>
            </div>
            <div className="row gy-5 justify-center">
              {team.map((member, i) => (
                <div key={member.name} className="md:col-6 lg:col-4" data-aos="fade-up-sm" data-aos-delay={`${(i % 3) * 100}`}>
                  <div className={`group h-full p-8 rounded-3xl border ${colorBorder[member.color]} ${colorBg[member.color]} transition-all duration-300 flex flex-col gap-5`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorIcon[member.color]}`}>
                      <span className="text-sm font-black tracking-wide">{member.initials}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-white leading-snug mb-1">{member.name}</p>
                      <p className={`text-xs font-bold uppercase tracking-widest mb-3 opacity-70 ${colorText[member.color]}`}>{member.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SDG FOCUS ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Our UN SDG Alignment</p>
                <h2 className="has-gradient mb-4">Technology with a Higher Purpose.</h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto">Every product we build maps directly to a Sustainable Development Goal.</p>
              </div>
            </div>
            <div className="row gy-5">
              {sdgs.map((sdg, i) => (
                <div key={sdg.num} className="md:col-6 lg:col-3" data-aos="fade-up-sm" data-aos-delay={`${i * 80}`}>
                  <div className={`group h-full p-7 rounded-3xl border ${colorBorder[sdg.color]} ${colorBg[sdg.color]} transition-all duration-300 flex flex-col gap-4`}>
                    <span className={`inline-block w-fit px-2.5 py-1 rounded-full border text-xs font-black uppercase tracking-widest ${colorBadge[sdg.color]}`}>
                      {sdg.num}
                    </span>
                    <p className="text-base font-bold text-white leading-snug">{sdg.label}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{sdg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SQUADS ── */}
        <section className="section bg-dark relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.05)_0%,_transparent_55%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">How We&apos;re Organised</p>
                <h2 className="has-gradient mb-4">Six Squads. One Mission.</h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto">Cross-functional teams built for depth — each squad owns its domain end-to-end.</p>
              </div>
            </div>
            <div className="row gy-4">
              {squads.map((sq, i) => (
                <div key={sq.name} className="md:col-6 lg:col-4" data-aos="fade-up-sm" data-aos-delay={`${(i % 3) * 80}`}>
                  <div className={`group flex items-start gap-4 p-6 rounded-2xl border ${colorBorder[sq.color]} ${colorBg[sq.color]} transition-all duration-300`}>
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${colorIcon[sq.color]}`}>
                      {sq.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1.5 leading-snug">{sq.name}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{sq.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER QUOTE ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center">
              <div className="lg:col-9" data-aos="fade-up-sm">
                <div className="rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-10 lg:p-14 text-center">
                  <p className="text-2xl lg:text-3xl text-white/80 italic leading-relaxed mb-8 font-light">
                    &ldquo;We are not just building software — we are building the infrastructure for a more equitable future. AI is the most powerful tool humanity has ever created, and we believe it belongs to everyone.&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <span className="text-emerald-400 text-xs font-black">BG</span>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-white">Bharat Gujavarti</p>
                      <p className="text-xs text-white/40 uppercase tracking-widest">Founder &amp; CEO, Pragmatiq Systems</p>
                    </div>
                  </div>
                </div>
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
                  Join Our Mission
                </span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">
                  Ready to build technology that matters?
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  Whether you&apos;re a founder, enterprise, or institution — if your mission aligns with ours, let&apos;s talk. We&apos;re also always looking for exceptional people to join the team.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Start the Conversation">Start the Conversation</span></span>
                    <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                  </Link>
                  <Link className="btn btn-outline-white has-icon" href="/careers">
                    <span className="value"><span data-content="We're Hiring">We&apos;re Hiring</span></span>
                    <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
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
