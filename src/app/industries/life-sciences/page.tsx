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
    title: "Generative AI for Drug Discovery",
    desc: "Large language models trained on molecular datasets supporting lead identification, compound optimisation, and patent analysis.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="m17 6-2.5-2.5"/><path d="m14 8-1-1"/><path d="m7 18 2.5 2.5"/><path d="m3.5 14.5.5.5"/><path d="m20 9 .5.5"/><path d="m6.5 12.5 1 1"/></svg>,
  },
  {
    title: "Genomic Data Analytics",
    desc: "Bioinformatics pipelines processing whole-genome sequencing to identify biomarkers, disease associations, and therapeutic targets.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2m16 0h2M7 13v2m4-2v2m4-2v2"/></svg>,
  },
  {
    title: "Regulatory Intelligence Platform",
    desc: "AI-powered monitoring of global regulatory feeds (FDA, EMA, CDSCO) — automatically surfacing compliance risks and submission requirement changes.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: "Clinical Trial Optimisation",
    desc: "ML models optimising patient cohort selection, site activation, and protocol deviation prediction to accelerate trial timelines.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
];

const faqs = [
  { q: "Which global pharma companies does Pragmatiq work with?", a: "We serve global top-10 pharmaceutical companies across research, regulatory, and clinical data domains. Client names remain confidential per NDAs, but our work spans drug discovery AI, regulatory automation, and clinical data pipelines." },
  { q: "How does Generative AI accelerate drug discovery?", a: "Our models explore vast chemical spaces, proposing novel molecular structures and reducing discovery cycles from years to months — using graph neural networks, molecular transformers, and physics-based validation workflows." },
  { q: "Do you offer PALS education programs for life sciences professionals?", a: "Yes. The Pragmatiq Academy of Life Sciences (PALS) partners with TISS-SVE to offer B.Sc. programs, diplomas, and certificate courses in bioinformatics, health informatics, and AI for life sciences." },
];

const complianceCards = [
  { title: "21 CFR Part 11 & GxP Compliant", desc: "All AI systems designed for full GxP compliance — validated, auditable, and submission-ready.", borderBg: "border-purple-500/15 bg-purple-500/[0.03]" },
  { title: "ISO 27001 Certified", desc: "Enterprise data security standards certified across all data handling and AI pipeline operations.", borderBg: "border-violet-500/15 bg-violet-500/[0.03]" },
  { title: "Embedded Domain Expertise", desc: "Data scientists with pharma domain knowledge embedded directly into client R&D workflows.", borderBg: "border-fuchsia-500/15 bg-fuchsia-500/[0.03]" },
  { title: "Platform Integrations", desc: "Pre-built connectors for Veeva, CTMS, and major lab informatics systems for zero-friction adoption.", borderBg: "border-pink-500/15 bg-pink-500/[0.03]" },
];

export default function LifeSciencesPage() {
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
                  <span className="text-sm opacity-70 md:text-base">Life Sciences · SDG 9</span>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">AI-Powered Life Sciences Solutions.</h1>
                <p data-aos="fade-up-sm" className="mb-4 text-xl/[inherit] text-light max-w-2xl mx-auto">
                  Accelerating drug discovery, genomic research, and regulatory intelligence for global top-10 pharmaceutical companies — with AI that understands the biology.
                </p>
                <ul className="flex flex-wrap justify-center gap-4 mt-8" data-aos="fade-up-sm">
                  <li>
                    <Link className="btn btn-primary has-icon" href="/contact">
                      <span className="value"><span data-content="Partner With Our Science Team">Partner With Our Science Team</span></span>
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
          <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-purple-500/30 from-40% via-purple-400/20 to-transparent opacity-15 blur-[100px] bg-linear-to-tr" />
        </section>

        {/* STATS */}
        <section className="section pb-0">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-purple-500/10 bg-purple-500/[0.02]" data-aos="fade-up-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                  { value: "Top-10", label: "Global Pharma Clients" },
                  { value: "3×", label: "Faster Lead Discovery" },
                  { value: "60%", label: "Reduction in Manual Review" },
                  { value: "22+", label: "Drug Pipelines Supported" },
                ].map((s) => (
                  <div key={s.label} className="p-8 text-center">
                    <p className="tracking-none text-3xl font-black text-purple-400 mb-1">{s.value}</p>
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
                <h2 className="has-gradient mb-4">AI That Understands the Biology.</h2>
                <p className="text-light text-lg opacity-75 max-w-xl mx-auto">From molecular AI to global regulatory intelligence — purpose-built for pharma, biotech, and life sciences organisations.</p>
              </div>
            </div>
            <div className="row gy-5">
              {solutions.map((s, i) => (
                <div key={s.title} className="md:col-6" data-aos="fade-up-sm" data-aos-delay={`${(i % 2) * 100}`}>
                  <div className="group flex items-start gap-5 p-8 rounded-3xl border border-purple-500/15 bg-purple-500/[0.03] hover:border-purple-500/35 transition-all duration-300 h-full">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
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

        {/* GLOBAL PHARMA */}
        <section className="section bg-dark relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.08)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Serving Global Pharma</p>
                <h2 className="has-gradient mb-4">Enterprise-Grade. Science-First.</h2>
                <p className="text-light text-lg opacity-75 max-w-xl mx-auto">Built to the compliance standards the world&apos;s leading pharmaceutical companies demand.</p>
              </div>
            </div>
            <div className="row gy-4 justify-center">
              <div className="lg:col-10" data-aos="fade-up-sm">
                <div className="row gy-4">
                  {complianceCards.map((item, i) => (
                    <div key={item.title} className="md:col-6" data-aos="fade-up-sm" data-aos-delay={`${(i % 2) * 80}`}>
                      <div className={`p-6 rounded-2xl border ${item.borderBg} h-full`}>
                        <p className="tracking-none text-sm font-bold text-white mb-2">{item.title}</p>
                        <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-6 p-8 rounded-3xl border border-purple-500/20 bg-purple-500/[0.04]" data-aos="fade-up-sm">
                  <p className="tracking-none text-4xl font-black text-purple-400 shrink-0">3×</p>
                  <div>
                    <p className="tracking-none text-base font-bold text-white mb-1">Faster Lead Discovery</p>
                    <p className="text-white/55 text-sm leading-relaxed">Pharma clients using Pragmatiq&apos;s generative molecular AI achieve lead candidate identification 3× faster than traditional computational chemistry approaches.</p>
                  </div>
                </div>
              </div>
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
                        <span className={`shrink-0 w-6 h-6 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
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
            <div className="overflow-hidden rounded-3xl border border-purple-500/15 bg-gradient-to-br from-white/[0.04] to-purple-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="px-8 py-14 lg:px-20 lg:py-20 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest">SDG 9 — Industry &amp; Innovation</span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">Ready to accelerate your drug pipeline with AI?</h2>
                <p className="text-white/60 text-base leading-relaxed">Talk to our life sciences team — we&apos;ll assess your R&amp;D stack and propose a validated AI solution that meets your compliance requirements.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Talk to Our Life Sciences Team">Talk to Our Life Sciences Team</span></span>
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
