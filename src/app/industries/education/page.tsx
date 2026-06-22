"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Arr = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
);

const solutions = [
  {
    title: "PurpleGene® Personalised Learning",
    desc: "AI engine adapting curriculum in real-time to cognitive patterns, learning velocity, and knowledge gaps for K-12 schools across India.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  },
  {
    title: "Campus Automation System",
    desc: "AI-powered automation handling attendance, scheduling, performance analytics, and administrative workflows for schools and colleges.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  },
  {
    title: "AI-Powered Tutoring Agents",
    desc: "Intelligent tutoring agents providing conversational learning with Socratic-method guidance 24/7 without human intervention.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2m16 0h2M7 13v2m4-2v2m4-2v2"/></svg>,
  },
  {
    title: "Learning Analytics Dashboard",
    desc: "Real-time dashboards tracking engagement, comprehension, and mastery levels with AI-driven actionable insights for teachers.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  },
];

const faqs = [
  { q: "How does PurpleGene® personalise learning for each child?", a: "PurpleGene® uses a proprietary cognitive profiling model that assesses each student's learning style, pace, and knowledge state — then dynamically selects content, difficulty level, and instructional modality in real-time." },
  { q: "Is the campus automation system compatible with existing software?", a: "Yes. It integrates via REST APIs with popular platforms like Fedena, Classter, and MySchool. Setup typically takes under 2 weeks with full data migration support." },
  { q: "How does Pragmatiq support Learnsquare Technologies?", a: "We co-built the AI infrastructure for campus automation, providing embedded engineering teams and ongoing AI model development for Learnsquare's school management platform." },
];

const palsCourses = [
  { badge: "Degree Program", title: "B.Sc. Life Sciences", partner: "TISS-SVE", duration: "3 Years · Blended", color: "violet", modules: ["Molecular Biology & Genetics", "AI for Drug Discovery", "Biochemistry & Cell Biology", "Research Methodology"] },
  { badge: "Certificate", title: "Bioinformatics", partner: "PALS Academy", duration: "6 Months · Online + Lab", color: "purple", modules: ["Genomics & Proteomics", "Python for Bioinformatics", "Sequence Analysis", "Research Project"] },
  { badge: "Diploma", title: "Health Informatics", partner: "PALS + Clinally", duration: "1 Year · Online", color: "blue", modules: ["EHR / HL7 / FHIR", "Clinical Data Analytics", "AI in Diagnostics", "HIPAA & Privacy"] },
  { badge: "Executive", title: "AI for Life Sciences", partner: "PALS Academy", duration: "3 Months · Online", color: "emerald", modules: ["AI/ML Fundamentals", "Generative AI in Research", "Regulatory Affairs & AI", "Capstone Project"] },
];

const palsColorMap: Record<string, { border: string; bg: string; hover: string; accent: string; dot: string }> = {
  violet:  { border: "border-violet-500/20",  bg: "bg-violet-500/[0.03]",  hover: "hover:border-violet-500/40",  accent: "text-violet-400",  dot: "bg-violet-400" },
  purple:  { border: "border-purple-500/20",  bg: "bg-purple-500/[0.03]",  hover: "hover:border-purple-500/40",  accent: "text-purple-400",  dot: "bg-purple-400" },
  blue:    { border: "border-blue-500/20",    bg: "bg-blue-500/[0.03]",    hover: "hover:border-blue-500/40",    accent: "text-blue-400",    dot: "bg-blue-400" },
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/[0.03]", hover: "hover:border-emerald-500/40", accent: "text-emerald-400", dot: "bg-emerald-400" },
};

export default function EducationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const init = async () => {
      const AOS = (await import("aos")).default;
      import("aos/dist/aos.css");
      AOS.init({ once: true, duration: 800 });
    };
    init();
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">

        {/* HERO */}
        <section className="overflow-hidden pb-0 pt-16 relative">
          <div className="container">
            <div className="row justify-center">
              <div className="pt-6 text-center md:col-9 lg:col-8">
                <div data-aos="fade-up-sm" className="mx-auto mb-4 w-fit rounded-full border border-white/15 px-3 py-1.5">
                  <span className="text-sm opacity-70 md:text-base">Education · SDG 4</span>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">AI-Powered Education Solutions.</h1>
                <p data-aos="fade-up-sm" className="mb-4 text-xl/[inherit] text-light max-w-2xl mx-auto">
                  Personalising learning at scale with PurpleGene®, PALS, and AI-powered campus automation — making quality education accessible to every student in India and beyond.
                </p>
                <ul className="flex flex-wrap justify-center gap-4 mt-8" data-aos="fade-up-sm">
                  <li>
                    <Link className="btn btn-primary has-icon" href="/contact">
                      <span className="value"><span data-content="Explore for Your Institution">Explore for Your Institution</span></span>
                      <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn-outline-transparent" href="/industries">
                      <span className="value"><span data-content="All Industries">All Industries</span></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-emerald-500/30 from-40% via-emerald-400/20 to-transparent opacity-15 blur-[100px] bg-linear-to-tr" />
        </section>

        {/* STATS */}
        <section className="section pb-0">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-emerald-500/10 bg-emerald-500/[0.02]" data-aos="fade-up-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                  { value: "1,200+", label: "Schools Served" },
                  { value: "4.2L+", label: "Students on PurpleGene®" },
                  { value: "28%", label: "Better Learning Outcomes" },
                  { value: "98%", label: "Teacher Satisfaction" },
                ].map((s) => (
                  <div key={s.label} className="p-8 text-center">
                    <p className="tracking-none text-3xl font-black text-emerald-400 mb-1">{s.value}</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="section">
          <div className="container">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Our Solutions</p>
                <h2 className="has-gradient mb-4">Transforming Every Dimension of Learning.</h2>
                <p className="text-light text-lg opacity-75 max-w-xl mx-auto">From personalised K-12 learning to life sciences education, our AI solutions transform every dimension of the student experience.</p>
              </div>
            </div>
            <div className="row gy-5">
              {solutions.map((s, i) => (
                <div key={s.title} className="md:col-6" data-aos="fade-up-sm" data-aos-delay={`${(i % 2) * 100}`}>
                  <div className="group flex items-start gap-5 p-8 rounded-3xl border border-emerald-500/15 bg-emerald-500/[0.03] hover:border-emerald-500/35 transition-all duration-300 h-full">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                    <div>
                      <p className="tracking-none text-base font-bold text-white mb-2 leading-snug">{s.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PURPLEGENE DEEP DIVE */}
        <section className="section bg-dark relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.08)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Flagship Product</p>
                <h2 className="has-gradient mb-4">PurpleGene®: Personalised at Scale</h2>
                <p className="text-light text-lg opacity-75 max-w-xl mx-auto">India has 260 million school-age children. Traditional one-size-fits-all teaching leaves too many behind.</p>
              </div>
            </div>
            <div className="row gy-5 justify-center">
              <div className="lg:col-10" data-aos="fade-up-sm">
                <div className="p-8 lg:p-12 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03]">
                  <div className="flex items-center gap-4 mb-8">
                    <img src="/logos/purplegene logo.png" alt="PurpleGene" className="h-8 w-auto opacity-90" />
                    <span className="px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest">India&apos;s First Personalised Learning AI</span>
                  </div>
                  <div className="row gy-4 mb-8">
                    {[
                      { title: "Real-Time Cognitive Profiling", desc: "Adapts content difficulty and modality based on each student's live learning patterns." },
                      { title: "Multi-Language Support", desc: "Regional Indian language support ensuring no student is excluded due to language barriers." },
                      { title: "Offline-First Architecture", desc: "Works without internet — critical for low-connectivity schools across rural India." },
                      { title: "Curriculum Aligned", desc: "Fully mapped to NCERT and state board syllabi across all grades and subjects." },
                    ].map((f) => (
                      <div key={f.title} className="md:col-6">
                        <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] h-full">
                          <p className="tracking-none text-sm font-bold text-white mb-1.5">{f.title}</p>
                          <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                    <p className="tracking-none text-3xl font-black text-emerald-400 shrink-0">28%</p>
                    <p className="text-white/65 text-sm leading-relaxed">Schools using PurpleGene® report 28% improvement in annual learning assessments versus the national average — within 12 months of deployment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PALS SECTION */}
        <section className="section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.07)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-widest mb-4">Partner Programme</span>
                <h2 className="has-gradient mb-4">PALS — Pragmatiq Academic &amp; Life Sciences</h2>
                <p className="text-light text-lg opacity-75 max-w-2xl mx-auto">
                  India&apos;s first AI-integrated academic platform for life sciences and healthcare education — co-built with TISS-SVE, offering globally recognised degrees, diplomas, and certifications.
                </p>
              </div>
            </div>
            <div className="row gy-5 mb-14">
              {palsCourses.map((p, i) => {
                const c = palsColorMap[p.color];
                return (
                  <div key={p.title} className="md:col-6" data-aos="fade-up-sm" data-aos-delay={`${(i % 2) * 100}`}>
                    <div className={`group p-7 rounded-3xl border ${c.border} ${c.bg} ${c.hover} transition-all duration-300 h-full flex flex-col gap-5`}>
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${c.accent} bg-white/5 border border-white/10 mb-3`}>{p.badge}</span>
                        <h3 className="tracking-none text-base font-bold text-white leading-snug">{p.title}</h3>
                        <p className="text-xs text-white/40 mt-0.5">{p.partner} · {p.duration}</p>
                      </div>
                      <ul className="flex flex-col gap-2 flex-1">
                        {p.modules.map((m) => (
                          <li key={m} className="flex items-center gap-2 text-sm text-white/60">
                            <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                            {m}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className={`inline-flex items-center gap-2 text-sm font-semibold ${c.accent} hover:gap-3 transition-all`}>
                        Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="row justify-center mb-12">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <h2 className="has-gradient mb-4">Common Questions</h2>
              </div>
            </div>
            <div className="row justify-center">
              <div className="lg:col-8">
                <div className="flex flex-col gap-3">
                  {faqs.map((faq, i) => (
                    <div key={i} data-aos="fade-up-sm" data-aos-delay={`${i * 60}`} className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
                        <p className="tracking-none text-sm font-bold text-white leading-snug">{faq.q}</p>
                        <span className={`shrink-0 w-6 h-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>
                        </span>
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-6">
                          <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-white/[0.04] to-emerald-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="px-8 py-14 lg:px-20 lg:py-20 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">SDG 4 — Quality Education</span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">Ready to personalise learning for every student?</h2>
                <p className="text-white/60 text-base leading-relaxed">Talk to our education team — we&apos;ll assess your institution&apos;s needs and propose an AI solution that ships in 90 days.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Talk to Our Education Team">Talk to Our Education Team</span></span>
                    <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                  </Link>
                  <Link className="btn btn-outline-white" href="/industries">
                    <span className="value"><span data-content="All Industries">All Industries</span></span>
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
