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
    title: "Clinical Decision Support (CDSS)",
    desc: "AI-driven system integrated with 50+ healthcare providers, identifying non-communicable diseases, drug interactions, and diagnostic pathways.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
  {
    title: "Patient Triage Optimisation",
    desc: "Machine learning reduces ER wait times by up to 35% with dynamic resource allocation across hospital departments.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    title: "Health Data Interoperability",
    desc: "HL7/FHIR-compliant pipelines unifying EHR systems into unified clinical records accessible across care settings.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  },
  {
    title: "AI-Powered Diagnostics",
    desc: "Computer vision models for radiology, pathology, and dermatology matching specialist-level diagnostic accuracy.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  },
];

const faqs = [
  { q: "Is your platform HIPAA and ABDM compliant?", a: "Yes. All Pragmatiq healthcare systems are built with zero-trust architecture, AES-256 encryption, and full compliance with HIPAA, ABDM, and applicable regional data protection frameworks from day one." },
  { q: "Can you integrate with our existing EHR system?", a: "Yes. We support HL7/FHIR standards and have pre-built connectors for major EHR platforms. Custom integration typically completes in 4–8 weeks depending on system complexity." },
  { q: "What is the Clinally partnership?", a: "Pragmatiq provides core AI infrastructure for Clinally, India's leading clinical decision support platform — powering its 94% NCD recall rate and real-time medication alert system across 50+ integrated providers." },
];

export default function HealthcarePage() {
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
                  <span className="text-sm opacity-70 md:text-base">Healthcare · SDG 3</span>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">AI-Powered Healthcare Solutions.</h1>
                <p data-aos="fade-up-sm" className="mb-4 text-xl/[inherit] text-light max-w-2xl mx-auto">
                  Transforming patient care, clinical operations, and health outcomes through responsible AI — from rural CDSS deployments to global hospital networks.
                </p>
                <ul className="flex flex-wrap justify-center gap-4 mt-8" data-aos="fade-up-sm">
                  <li>
                    <Link className="btn btn-primary has-icon" href="/contact">
                      <span className="value"><span data-content="Partner With Us">Partner With Us</span></span>
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
          <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-blue-500/30 from-40% via-blue-400/20 to-transparent opacity-15 blur-[100px] bg-linear-to-tr" />
        </section>

        {/* STATS */}
        <section className="section pb-0">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-blue-500/10 bg-blue-500/[0.02]" data-aos="fade-up-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                  { value: "50+", label: "Healthcare Software Partners" },
                  { value: "14", label: "Hospitals on Platform" },
                  { value: "40%", label: "Fewer Diagnostic Errors" },
                  { value: "99.9%", label: "System Uptime SLA" },
                ].map((s) => (
                  <div key={s.label} className="p-8 text-center">
                    <p className="tracking-none text-3xl font-black text-blue-400 mb-1">{s.value}</p>
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
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">What We Build</p>
                <h2 className="has-gradient mb-4">Our Healthcare Solutions</h2>
                <p className="text-light text-lg opacity-75 max-w-xl mx-auto">Full-stack clinical AI from diagnostics to operations — built to scale across India and globally.</p>
              </div>
            </div>
            <div className="row gy-5">
              {solutions.map((s, i) => (
                <div key={s.title} className="md:col-6" data-aos="fade-up-sm" data-aos-delay={`${(i % 2) * 100}`}>
                  <div className="group flex items-start gap-5 p-8 rounded-3xl border border-blue-500/15 bg-blue-500/[0.03] hover:border-blue-500/35 transition-all duration-300 h-full">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
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

        {/* CLINALLY SPOTLIGHT */}
        <section className="section bg-dark relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.08)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Featured Partnership</p>
                <h2 className="has-gradient mb-4">Clinally — India&apos;s Clinical AI Platform</h2>
                <p className="text-light text-lg opacity-75 max-w-xl mx-auto">Pragmatiq powers the AI infrastructure behind India&apos;s leading clinical decision support system.</p>
              </div>
            </div>
            <div className="row gy-5 justify-center">
              <div className="lg:col-8" data-aos="fade-up-sm">
                <div className="p-8 lg:p-12 rounded-3xl border border-blue-500/20 bg-blue-500/[0.04]">
                  <div className="flex items-center gap-4 mb-8">
                    <img src="/logos/Clinally Logo.png" alt="Clinally" className="h-8 w-auto opacity-90" />
                    <span className="px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest">Healthcare AI Partner</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      { stat: "94%", label: "NCD Recall Rate", desc: "AI-powered detection of non-communicable diseases across all patient cohorts." },
                      { stat: "50+", label: "Software Integrations", desc: "Seamlessly connected to India's leading EHR and hospital management systems." },
                      { stat: "35%", label: "Faster Triage", desc: "Machine learning reduces ER wait times with dynamic resource allocation." },
                      { stat: "100%", label: "ABDM Compliant", desc: "Full Ayushman Bharat Digital Mission compliance across all deployments." },
                    ].map((item) => (
                      <div key={item.stat} className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <p className="tracking-none text-2xl font-black text-blue-400 shrink-0">{item.stat}</p>
                        <div>
                          <p className="tracking-none text-sm font-bold text-white mb-1">{item.label}</p>
                          <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    From rural primary care centres to multi-speciality hospital networks, Clinally&apos;s CDSS — powered by Pragmatiq AI — delivers real-time medication alerts, diagnostic pathways, and clinical risk scoring to clinicians at the point of care.
                  </p>
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
                        <span className={`shrink-0 w-6 h-6 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
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
            <div className="overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-br from-white/[0.04] to-blue-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="px-8 py-14 lg:px-20 lg:py-20 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">SDG 3 — Good Health</span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">Ready to transform healthcare with AI?</h2>
                <p className="text-white/60 text-base leading-relaxed">Talk to our healthcare team — we&apos;ll assess your clinical stack and propose an AI roadmap built for your patient population.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Talk to Our Healthcare Team">Talk to Our Healthcare Team</span></span>
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
