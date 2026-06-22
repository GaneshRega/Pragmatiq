"use client";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Check = ({ color }: { color: string }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
    className={`text-${color}-500 text-base shrink-0`} height="1em" width="1em"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
  </svg>
);
const Arr = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const domains = [
  {
    id: "healthcare",
    sdg: "SDG Goal 3",
    sdgLabel: "Good Health & Well-being",
    color: "blue",
    accentBg: "rgba(59,130,246,0.07)",
    letter: "H",
    title: "Healthcare.",
    subtitle: "Precision Care. Scalable Impact.",
    desc: "Advancing patient outcomes through AI-powered diagnostics, clinical decision support, and intelligent healthcare data systems — HIPAA and ABDM compliant from day one.",
    portfolio: "Clinally",
    portfolioDesc:
      "AI-powered Clinical Decision Support System for district hospitals, providing evidence-based diagnostic suggestions integrated with EMRs and standardising treatment protocols across rural clinics.",
    features: [
      { name: "Clinical Decision Support", desc: "Evidence-based diagnostic suggestions integrated with electronic medical records — Clinally Assist." },
      { name: "Real-time Impact", desc: "Standardising treatment protocols across rural clinics, bringing specialist-level care to underserved regions." },
      { name: "HIPAA & ABDM Ready", desc: "Full compliance with Indian ABDM and global HIPAA standards built in from the first line of code." },
      { name: "NLP Workflows", desc: "Natural language processing pipelines that extract, structure, and act on unstructured clinical data." },
    ],
    products: ["ClinAlly CDSS", "HealthOS", "NLP Workflows", "HIPAA / ABDM Ready"],
    cta: "Explore HealthTech",
    ctaHref: "/products",
  },
  {
    id: "education",
    sdg: "SDG Goal 4",
    sdgLabel: "Quality Education",
    color: "emerald",
    accentBg: "rgba(16,185,129,0.07)",
    letter: "E",
    title: "Education.",
    subtitle: "Intelligent Learning at Scale.",
    desc: "Empowering educators and learners with adaptive AI engines, personalised curricula, and real-time engagement toolsets — built for classrooms, vocational centres, and edge-learning environments.",
    portfolio: "Ritebook & PadhoBadho",
    portfolioDesc:
      "Powered by the Connect Learning Management Platform — solving the one-size-fits-none challenge through intelligent pedagogical design and a PurpleGene® adaptive engine.",
    features: [
      { name: "Adaptive Engine", desc: "Analyses student performance in real-time and adjusts content difficulty — personalising each learner's path automatically." },
      { name: "Scale-Ready Infrastructure", desc: "Supports high-concurrency test prep and primary schooling environments from 100 to 10 million concurrent users." },
      { name: "PurpleGene® Personalization", desc: "Maps student learning DNA to deliver tailored curricula, engagement nudges, and remediation paths." },
      { name: "Edge-Learning Environments", desc: "Offline-first, low-bandwidth delivery for vocational centres and rural classrooms with limited connectivity." },
    ],
    products: ["Connect LMS", "PurpleGene AI", "PALS Vocational", "Padhobadho Edge"],
    cta: "Explore EdTech",
    ctaHref: "/products",
  },
  {
    id: "agriculture",
    sdg: "SDG Goal 2",
    sdgLabel: "Zero Hunger",
    color: "green",
    accentBg: "rgba(34,197,94,0.07)",
    letter: "A",
    title: "Agriculture.",
    subtitle: "Sustainable Farming Intelligence.",
    desc: 'Turning "Dirt" into "Data" to ensure global food security. Modernising food production with drone integrations, real-time soil intelligence, and AI-driven crop optimisation — enabling sustainable yield at every scale of farming.',
    portfolio: "Landlordz",
    portfolioDesc:
      "Digital Twin Farming platform integrating geospatial satellite data, soil sensors, and market intelligence to give landowners and farmers actionable, real-time yield insights.",
    features: [
      { name: "Digital Twin Farming", desc: "Virtual farm model integrating geospatial data, IoT sensors, and historical yield patterns for full field intelligence." },
      { name: "Geospatial AI", desc: "Optimises resource allocation — water, fertiliser, labour — using satellite imagery and ground-truth sensor fusion." },
      { name: "Yield Forecast", desc: "Actionable insights on soil health, weather patterns, and market price trends delivered before planting decisions." },
      { name: "Drone Integration Suite", desc: "Native integration with precision agriculture drones for crop scouting, spray automation, and aerial mapping." },
    ],
    products: ["Precision Farming AI", "Drone Integration Suite", "Soil Intelligence", "Crop Yield Analytics"],
    cta: "Explore AgriTech",
    ctaHref: "/products",
  },
  {
    id: "lifesciences",
    sdg: "SDG Goal 9",
    sdgLabel: "Industry & Innovation",
    color: "purple",
    accentBg: "rgba(168,85,247,0.07)",
    letter: "L",
    title: "Life Sciences.",
    subtitle: "Genomic Intelligence.",
    desc: "Pioneering bio-AI research through DNA modelling, ultra-realistic data visualisation, and autonomous lab intelligence — powered by PurpleGene and Sunblue Technologies.",
    portfolio: "Sunblue Technologies",
    portfolioDesc:
      "Compliance-focused digital infrastructure for laboratories, providing 100% auditability for sensitive clinical datasets and AI-Native data lakes that accelerate the path from lab discovery to drug deployment.",
    features: [
      { name: "Compliance First", desc: "100% auditability and data integrity for sensitive clinical datasets — built to the strictest regulatory standards globally." },
      { name: "AI-Native Data Lakes", desc: "Secure, schema-on-read data infrastructure ensuring seamless R&D workflows and cross-institutional data sharing." },
      { name: "DNA Modelling", desc: "PurpleGene-powered genomic modelling that maps biological markers to clinical outcomes at population scale." },
      { name: "Discovery Acceleration", desc: "Compresses the timeline from lab discovery to life-saving drug deployment through autonomous lab intelligence." },
    ],
    products: ["DNA Modelling", "Bio-AI Research", "Data Visualisation", "PurpleGene Lab"],
    cta: "Explore Bio-AI",
    ctaHref: "/products",
  },
];

export default function IndustriesPage() {
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
                    <span className="text-sm opacity-70 md:text-base">The HEAL Strategy</span>
                  </div>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">
                  The HEAL Strategy:<br />Powering Progress.
                </h1>
                <p data-aos="fade-up-sm" className="mb-3 text-xl/[inherit] opacity-70 max-w-2xl mx-auto">
                  Healthcare · Education · Agriculture · Life Sciences
                </p>
                <p data-aos="fade-up-sm" className="mb-8 text-base text-white/55 max-w-2xl mx-auto leading-relaxed">
                  We focus our 30+ years of expertise on the sectors that form the bedrock of human progress — building AI-first platforms that bridge accessibility, normalise quality, and enable predictive precision at scale.
                </p>
                <ul className="flex flex-wrap justify-center gap-4" data-aos="fade-up-sm">
                  <li>
                    <Link className="btn btn-primary has-icon" href="/contact">
                      <span className="value"><span data-content="Request a Sector Audit">Request a Sector Audit</span></span>
                      <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn-outline-transparent" href="/products">
                      <span className="value"><span data-content="Explore Our Products">Explore Our Products</span></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute left-[15%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-20 blur-[100px] bg-linear-to-tr md:top-1/3" />
        </section>

        {/* ── HEAL 4-UP OVERVIEW CARDS ── */}
        <section className="section pb-0">
          <div className="container">
            <div className="row gy-4">
              {[
                { letter: "H", color: "blue",    label: "Healthcare",    sdg: "SDG 3", href: "#healthcare" },
                { letter: "E", color: "emerald",  label: "Education",     sdg: "SDG 4", href: "#education" },
                { letter: "A", color: "green",    label: "Agriculture",   sdg: "SDG 2", href: "#agriculture" },
                { letter: "L", color: "purple",   label: "Life Sciences", sdg: "SDG 9", href: "#lifesciences" },
              ].map((d, i) => (
                <div key={d.letter} className="sm:col-6 lg:col-3" data-aos="fade-up-sm" data-aos-delay={`${i * 75}`}>
                  <a href={d.href} className={`group flex flex-col items-center gap-4 p-7 rounded-3xl border border-${d.color}-500/15 bg-${d.color}-500/[0.03] hover:border-${d.color}-500/40 hover:bg-${d.color}-500/[0.07] hover:-translate-y-1 transition-all duration-300`}>
                    <div className={`w-16 h-16 rounded-2xl bg-${d.color}-500/15 border border-${d.color}-500/25 flex items-center justify-center text-${d.color}-400 text-3xl font-black group-hover:scale-110 transition-transform`}>
                      {d.letter}
                    </div>
                    <p className="text-lg font-bold text-white">{d.label}</p>
                    <span className={`px-2.5 py-1 rounded-full border border-${d.color}-500/20 bg-${d.color}-500/10 text-${d.color}-400 text-[10px] font-bold uppercase tracking-widest`}>{d.sdg}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY HEAL — 3 AI BENEFITS ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Our AI Philosophy</p>
                <h2 className="has-gradient mb-4">Three Ways AI Changes Everything</h2>
                <p className="text-lg opacity-75 max-w-xl mx-auto">
                  Across every HEAL domain, Pragmatiq AI delivers the same three transformational outcomes.
                </p>
              </div>
            </div>
            <div className="row gy-5">
              {[
                {
                  color: "emerald", num: "01",
                  title: "Bridge Accessibility",
                  desc: "Bringing specialist-level expertise to rural and underserved regions where resources are traditionally scarce — so geography stops determining outcomes.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                },
                {
                  color: "blue", num: "02",
                  title: "Normalise Quality",
                  desc: "Ensuring a Gold Standard of service — whether in a district clinic or a digital classroom — via intelligent automation that removes human variability.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
                },
                {
                  color: "violet", num: "03",
                  title: "Predictive Precision",
                  desc: "Moving from reactive fixes to proactive solutions — predicting risks before they impact lives or livelihoods, through continuous learning systems.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
                },
              ].map((b, i) => (
                <div key={b.num} className="lg:col-4" data-aos="fade-up-sm" data-aos-delay={`${i * 100}`}>
                  <div className={`group h-full p-8 rounded-3xl border border-${b.color}-500/15 bg-${b.color}-500/[0.03] hover:border-${b.color}-500/35 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5`}>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-${b.color}-500/15 border border-${b.color}-500/25 flex items-center justify-center text-${b.color}-400 group-hover:scale-110 transition-transform`}>
                        {b.icon}
                      </div>
                      <span className={`text-4xl font-black text-${b.color}-500/20`}>{b.num}</span>
                    </div>
                    <p className="text-xl font-bold text-white leading-snug">{b.title}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUR DOMAIN DEEP-DIVES ── */}
        {domains.map((domain, idx) => (
          <section
            key={domain.id}
            id={domain.id}
            className={`section ${idx % 2 === 1 ? "bg-dark" : ""} relative overflow-hidden`}
            style={{ scrollMarginTop: "120px" }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: `radial-gradient(ellipse at ${idx % 2 === 0 ? "top left" : "bottom right"}, ${domain.accentBg} 0%, transparent 60%)` }}
            />
            <div className="container relative z-10">
              <div className="row justify-center mb-12">
                <div className="col-12 text-center" data-aos="fade-up-sm">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-${domain.color}-500/30 bg-${domain.color}-500/10 text-${domain.color}-400 text-xs font-bold uppercase tracking-widest`}>
                    {domain.sdg} · {domain.sdgLabel}
                  </span>
                </div>
              </div>

              <div className={`overflow-hidden rounded-3xl border border-${domain.color}-500/15 backdrop-blur-xl`}
                style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, ${domain.accentBg} 100%)` }}>
                <div className="row g-0 items-stretch">
                  {/* Left: text */}
                  <div className={`lg:col-5 p-8 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-${domain.color}-500/10`} data-aos="fade-up-sm">
                    <div>
                      <div className={`text-8xl font-black text-${domain.color}-500/10 leading-none select-none mb-4`}>{domain.letter}</div>
                      <h2 className="has-gradient mb-2 text-3xl lg:text-4xl font-bold leading-tight">{domain.title}</h2>
                      <p className={`text-${domain.color}-400 font-semibold text-lg mb-5`}>{domain.subtitle}</p>
                      <p className="text-white/65 text-base leading-relaxed mb-8">{domain.desc}</p>

                      <div className={`p-5 rounded-2xl border border-${domain.color}-500/20 bg-${domain.color}-500/[0.07] mb-8`}>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-2">Portfolio Company</p>
                        <p className={`text-base font-bold text-${domain.color}-400 mb-2`}>{domain.portfolio}</p>
                        <p className="text-white/55 text-sm leading-relaxed">{domain.portfolioDesc}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {domain.products.map((p) => (
                          <span key={p} className={`px-3 py-1 rounded-full border border-${domain.color}-500/20 bg-${domain.color}-500/[0.08] text-${domain.color}-400 text-xs font-semibold`}>{p}</span>
                        ))}
                      </div>
                    </div>

                    <Link className="btn btn-outline-white mt-10 has-icon self-start" href={domain.ctaHref}>
                      <span className="value"><span data-content={domain.cta}>{domain.cta}</span></span>
                      <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                    </Link>
                  </div>

                  {/* Right: 4 feature tiles */}
                  <div className="lg:col-7 p-8 lg:p-12 grid sm:grid-cols-2 gap-5 content-start" data-aos="fade-up-sm" data-aos-delay="100">
                    {domain.features.map((feat) => (
                      <div key={feat.name} className={`group p-6 rounded-2xl border border-${domain.color}-500/12 bg-${domain.color}-500/[0.04] hover:border-${domain.color}-500/30 hover:bg-${domain.color}-500/[0.09] transition-all duration-300`}>
                        <div className={`w-9 h-9 rounded-xl bg-${domain.color}-500/15 border border-${domain.color}-500/20 flex items-center justify-center text-${domain.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                          <Check color={domain.color} />
                        </div>
                        <p className="text-sm font-bold text-white mb-2 leading-snug">{feat.name}</p>
                        <p className="text-white/50 text-xs leading-relaxed">{feat.desc}</p>
                      </div>
                    ))}

                    {/* SDG callout */}
                    <div className={`sm:col-span-2 flex items-center gap-5 p-6 rounded-2xl border border-${domain.color}-500/20 bg-${domain.color}-500/[0.07]`}>
                      <div className={`shrink-0 w-14 h-14 rounded-2xl bg-${domain.color}-500/20 border border-${domain.color}-500/30 flex items-center justify-center`}>
                        <p className={`text-xl font-black text-${domain.color}-400`}>{domain.sdg.split(" ")[2]}</p>
                      </div>
                      <div>
                        <p className={`text-sm font-bold text-${domain.color}-400 mb-1`}>{domain.sdg} — {domain.sdgLabel}</p>
                        <p className="text-white/50 text-xs leading-relaxed">
                          Every initiative in this domain directly advances the United Nations Sustainable Development Goal for {domain.sdgLabel}.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── CTA ── */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-white/[0.04] to-emerald-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="row g-0 items-stretch">
                <div className="lg:col-7 px-8 py-14 lg:px-16 lg:py-16 flex flex-col justify-center gap-6 border-b lg:border-b-0 lg:border-r border-emerald-500/10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest self-start">
                    Work With Us
                  </span>
                  <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">
                    Ready to build in a HEAL domain?
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed max-w-lg">
                    Whether you&apos;re a startup seeking a launchpad or an enterprise requiring an embedded technical team — we have the domain expertise, the IP, and the co-building model to accelerate your mission.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link className="btn btn-primary has-icon" href="/contact">
                      <span className="value"><span data-content="Request a Sector Audit">Request a Sector-Specific Audit</span></span>
                      <span className="icon"><span><span><Arr /></span><span><Arr /></span></span></span>
                    </Link>
                    <Link className="btn btn-outline-white" href="/products">
                      <span className="value"><span data-content="Explore Our Products">Explore Our Products</span></span>
                    </Link>
                  </div>
                </div>
                <div className="lg:col-5 px-8 py-14 lg:px-12 lg:py-16 flex flex-col justify-center gap-8">
                  {[
                    { value: "30+", label: "Years of domain expertise", color: "emerald" },
                    { value: "4",   label: "UN SDG-aligned verticals",  color: "blue" },
                    { value: "22+", label: "Healthcare & education institutions", color: "green" },
                    { value: "100%",label: "AI-first, compliance-ready builds", color: "purple" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-5">
                      <p className={`text-3xl font-black text-${s.color}-400 leading-none shrink-0 w-20`}>{s.value}</p>
                      <p className="text-sm text-white/50 leading-snug">{s.label}</p>
                    </div>
                  ))}
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
