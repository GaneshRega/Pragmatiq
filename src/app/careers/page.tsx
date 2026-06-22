"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Arr = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const roles = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    team: "AI Engineering Squad",
    location: "Hyderabad, India",
    type: "Full-time",
    level: "Senior",
    color: "emerald",
    description: "Design and deploy production-grade LLM, computer vision, and multi-agent systems across our HEAL product suite.",
    skills: ["Python", "PyTorch", "LangChain", "MLOps", "AWS/GCP"],
  },
  {
    id: 2,
    title: "Full-Stack Engineer (React / Next.js)",
    team: "Product Launchpad Squad",
    location: "Hyderabad, India · Remote",
    type: "Full-time",
    level: "Mid–Senior",
    color: "sky",
    description: "Build fast, accessible product interfaces for our 90-day MVP programmes across healthcare, edtech, and agri sectors.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: 3,
    title: "Healthcare AI Product Manager",
    team: "Domain Intelligence Squad",
    location: "Hyderabad, India",
    type: "Full-time",
    level: "Mid–Senior",
    color: "blue",
    description: "Own the product roadmap for ClinAlly CDSS — working at the intersection of clinical workflows, AI capabilities, and hospital deployment.",
    skills: ["Product Strategy", "Clinical Workflows", "ABDM", "AI Literacy", "Stakeholder Management"],
  },
  {
    id: 4,
    title: "DevOps / Site Reliability Engineer",
    team: "DevOps & Managed Services",
    location: "Hyderabad, India · Remote",
    type: "Full-time",
    level: "Mid",
    color: "cyan",
    description: "Maintain 99.99% uptime across client environments — Kubernetes, CI/CD, observability, and incident response.",
    skills: ["Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "AWS"],
  },
  {
    id: 5,
    title: "Life Sciences AI Researcher",
    team: "PALS Academy Team",
    location: "Hyderabad, India",
    type: "Full-time",
    level: "Senior",
    color: "purple",
    description: "Develop curriculum and research on generative molecular AI, clinical data intelligence, and ADMET prediction for our PALS programme and pharma clients.",
    skills: ["Drug Discovery", "Cheminformatics", "Python", "NLP", "Scientific Writing"],
  },
  {
    id: 6,
    title: "Venture Studio Associate",
    team: "Venture Studio Crew",
    location: "Hyderabad, India",
    type: "Full-time",
    level: "Junior–Mid",
    color: "violet",
    description: "Support co-founded startups from idea through launch — market research, go-to-market, financial modelling, and operational setup.",
    skills: ["Market Research", "Financial Modelling", "GTM Strategy", "Ops", "Startup Ecosystem"],
  },
];

const perks = [
  { icon: "🌍", title: "Mission-Driven Work", desc: "Every line of code, every product decision maps directly to UN SDGs. Your work has a measurable impact on millions of lives." },
  { icon: "🧠", title: "Learn from the Frontier", desc: "Work on cutting-edge AI problems across four industries. Access to the latest models, tools, and research." },
  { icon: "🚀", title: "Move Fast, Ship Real", desc: "No committee approvals for features. Ideas go from whiteboard to production in days, not quarters." },
  { icon: "💰", title: "Competitive Compensation", desc: "Market-rate salaries, performance bonuses, and equity participation for senior roles in the Venture Studio." },
  { icon: "🏡", title: "Flexible Work", desc: "Hybrid by default. Engineering roles can be fully remote. We care about output, not office attendance." },
  { icon: "📚", title: "Learning Budget", desc: "₹50,000/year per person for courses, conferences, and certifications. We invest in people who invest in themselves." },
];

const colorMap: Record<string, string> = {
  emerald: "border-emerald-500/20 bg-emerald-500/[0.04] text-emerald-400",
  sky:     "border-sky-500/20 bg-sky-500/[0.04] text-sky-400",
  blue:    "border-blue-500/20 bg-blue-500/[0.04] text-blue-400",
  cyan:    "border-cyan-500/20 bg-cyan-500/[0.04] text-cyan-400",
  purple:  "border-purple-500/20 bg-purple-500/[0.04] text-purple-400",
  violet:  "border-violet-500/20 bg-violet-500/[0.04] text-violet-400",
};

const cardBorder: Record<string, string> = {
  emerald: "border-emerald-500/12 hover:border-emerald-500/30",
  sky:     "border-sky-500/12 hover:border-sky-500/30",
  blue:    "border-blue-500/12 hover:border-blue-500/30",
  cyan:    "border-cyan-500/12 hover:border-cyan-500/30",
  purple:  "border-purple-500/12 hover:border-purple-500/30",
  violet:  "border-violet-500/12 hover:border-violet-500/30",
};

const levelColor: Record<string, string> = {
  Junior:         "text-white/40 bg-white/5 border-white/10",
  "Junior–Mid":   "text-white/40 bg-white/5 border-white/10",
  Mid:            "text-sky-400 bg-sky-500/8 border-sky-500/20",
  "Mid–Senior":   "text-sky-400 bg-sky-500/8 border-sky-500/20",
  Senior:         "text-amber-400 bg-amber-500/8 border-amber-500/20",
};

const filters = ["All Teams", "AI Engineering Squad", "Product Launchpad Squad", "Domain Intelligence Squad", "DevOps & Managed Services", "PALS Academy Team", "Venture Studio Crew"];

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All Teams");

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      import("aos/dist/aos.css");
      AOS.init({ once: true, duration: 800 });
    };
    initAOS();
  }, []);

  const filtered = activeFilter === "All Teams" ? roles : roles.filter((r) => r.team === activeFilter);

  return (
    <>
      <Header />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="overflow-hidden pb-0 pt-16 relative">
          <div className="container">
            <div className="row justify-center">
              <div className="pt-6 text-center md:col-9 lg:col-8">
                <div data-aos="fade-up-sm" className="mx-auto mb-4 w-fit rounded-full border border-white/15 px-3 py-1.5">
                  <span className="text-sm opacity-70 md:text-base">We&apos;re Hiring</span>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">
                  Build AI That Changes Lives.
                </h1>
                <p data-aos="fade-up-sm" className="mb-8 text-xl/[inherit] opacity-70 max-w-2xl mx-auto">
                  Join a team of engineers, researchers, and domain experts working at the intersection of AI and the world&apos;s most important challenges — healthcare, education, agriculture, and life sciences.
                </p>
                <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up-sm">
                  <a className="btn btn-primary has-icon" href="#open-roles">
                    <span className="value"><span data-content="See Open Roles">See Open Roles</span></span>
                    <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                  </a>
                  <Link className="btn btn-outline-white" href="/about">
                    <span className="value"><span data-content="About Pragmatiq">About Pragmatiq</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-emerald-500/25 from-40% via-violet-500/15 to-transparent opacity-15 blur-[100px] bg-linear-to-tr" />
        </section>

        {/* ── STATS ── */}
        <section className="section pb-0">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02]" data-aos="fade-up-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                  { value: "6+", label: "Open Positions" },
                  { value: "4", label: "Specialist Squads" },
                  { value: "₹50K", label: "Annual Learning Budget" },
                  { value: "Hybrid", label: "Work Mode" },
                ].map((s) => (
                  <div key={s.label} className="p-8 text-center">
                    <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY PRAGMATIQ ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Why Join Us</p>
                <h2 className="has-gradient mb-4">More Than a Job.</h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto">We don&apos;t offer perks as a substitute for meaningful work — we offer both.</p>
              </div>
            </div>
            <div className="row gy-5">
              {perks.map((perk, i) => (
                <div key={perk.title} className="md:col-6 lg:col-4" data-aos="fade-up-sm" data-aos-delay={`${(i % 3) * 80}`}>
                  <div className="h-full p-7 rounded-3xl border border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300 flex flex-col gap-4">
                    <span className="text-3xl">{perk.icon}</span>
                    <p className="text-base font-bold text-white leading-snug">{perk.title}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPEN ROLES ── */}
        <section className="section bg-dark relative overflow-hidden" id="open-roles">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.05)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-10">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Open Positions</p>
                <h2 className="has-gradient mb-4">Find Your Squad.</h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto">Every role at Pragmatiq sits inside one of six specialist squads — each with full ownership of its domain.</p>
              </div>
            </div>

            {/* Team filter */}
            <div className="flex flex-wrap gap-2 mb-10" data-aos="fade-up-sm">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                    activeFilter === f
                      ? "border-secondary/40 bg-secondary/15 text-secondary"
                      : "border-white/10 bg-white/5 text-white/45 hover:border-white/20 hover:text-white/70"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {filtered.map((role, i) => (
                <div
                  key={role.id}
                  className={`group p-7 rounded-3xl border ${cardBorder[role.color]} bg-white/[0.015] hover:bg-white/[0.025] transition-all duration-300`}
                  data-aos="fade-up-sm"
                  data-aos-delay={`${i * 60}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                    {/* Left: role info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${colorMap[role.color]}`}>
                          {role.team}
                        </span>
                        <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${levelColor[role.level]}`}>
                          {role.level}
                        </span>
                        <span className="text-[10px] text-white/30">{role.type}</span>
                        <span className="text-[10px] text-white/30">· {role.location}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug">{role.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{role.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {role.skills.map((skill) => (
                          <span key={skill} className="px-2.5 py-1 rounded-lg border border-white/8 bg-white/[0.03] text-[10px] text-white/40">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: apply button */}
                    <div className="shrink-0">
                      <Link
                        href="/contact"
                        className="btn btn-primary has-icon"
                      >
                        <span className="value"><span data-content="Apply Now">Apply Now</span></span>
                        <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="py-20 text-center text-white/30 text-sm">
                  No open roles in this squad right now — check back soon.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── CULTURE QUOTE ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center">
              <div className="lg:col-9" data-aos="fade-up-sm">
                <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 lg:p-14 text-center">
                  <p className="text-2xl lg:text-3xl text-white/80 italic leading-relaxed mb-8 font-light">
                    &ldquo;We hire for attitude and mission alignment first. Technical skills can be taught — curiosity and care for impact cannot.&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                      <span className="text-violet-400 text-xs font-black">SV</span>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-white">Sasikanth Vanga</p>
                      <p className="text-xs text-white/40 uppercase tracking-widest">VP — Operations, Pragmatiq</p>
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
              <div className="px-8 py-14 lg:px-20 lg:py-20 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  Don&apos;t See Your Role?
                </span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">
                  Send an Open Application.
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  If you believe in the mission and think you can contribute, write to us. We read every application — and we&apos;ve hired people who reached out before a role existed.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Get in Touch">Get in Touch</span></span>
                    <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                  </Link>
                  <Link className="btn btn-outline-white" href="/about">
                    <span className="value"><span data-content="Learn About Us">Learn About Us</span></span>
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
