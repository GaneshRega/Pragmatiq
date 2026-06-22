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
    title: "LAND LORDZ — Personalised Agri AI",
    desc: "Integrates satellite data, IoT sensors, drone imagery, and AI with farmer knowledge for optimised yields and sustainable recommendations.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  },
  {
    title: "Soil Intelligence Platform",
    desc: "Continuous soil health monitoring using IoT probes and satellite spectral analysis with real-time irrigation, fertilisation, and crop rotation recommendations.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12C12 7 8 3 3 3c0 5 4 9 9 9zM12 12c0-5 4-9 9-9 0 5-4 9-9 9z"/></svg>,
  },
  {
    title: "Drone Analytics & Precision Spraying",
    desc: "AI-powered drone coordination for crop health monitoring, pest detection, and variable-rate precision spraying reducing chemical usage by up to 40%.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  {
    title: "Market Price & Supply Chain AI",
    desc: "Predictive models connecting farmers to optimal market prices with reduced middlemen involvement and AI-driven supply chain transparency.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  },
];

const faqs = [
  { q: "What is LAND LORDZ and how is it different from other agri-tech apps?", a: "LAND LORDZ is India's first truly personalised agriculture system. Unlike generic agri apps, it builds a unique farm profile incorporating local soil data, micro-climate patterns, crop history, market proximity, and farmer preferences to deliver hyper-local AI recommendations." },
  { q: "Do farmers need smartphones or internet to use the platform?", a: "No. Our basic tier works via SMS and USSD menus, allowing feature-phone users in low-connectivity areas to receive daily recommendations. The full AI experience is available via the mobile app with offline capability." },
  { q: "How do drones integrate with the LAND LORDZ platform?", a: "LAND LORDZ integrates with DJI and AgEagle drones via our AgriDrone API. Flight paths are autonomously planned by AI based on crop stress maps, and spray patterns are dynamically adjusted for variable-rate application." },
];

export default function AgriculturePage() {
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
                  <span className="text-sm opacity-70 md:text-base">Agriculture · SDG 2</span>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">AI-Powered Agriculture Solutions.</h1>
                <p data-aos="fade-up-sm" className="mb-4 text-xl/[inherit] text-light max-w-2xl mx-auto">
                  Empowering India&apos;s 150 million smallholder farmers with precision AI, drone analytics, and data-driven insights through LAND LORDZ — the nation&apos;s first personalised agriculture system.
                </p>
                <ul className="flex flex-wrap justify-center gap-4 mt-8" data-aos="fade-up-sm">
                  <li>
                    <Link className="btn btn-primary has-icon" href="/contact">
                      <span className="value"><span data-content="Explore for Your Farm">Explore for Your Farm</span></span>
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
          <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-green-500/30 from-40% via-green-400/20 to-transparent opacity-15 blur-[100px] bg-linear-to-tr" />
        </section>

        {/* STATS */}
        <section className="section pb-0">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-green-500/10 bg-green-500/[0.02]" data-aos="fade-up-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                {[
                  { value: "18,000+", label: "Farmers on LAND LORDZ" },
                  { value: "23%", label: "Average Yield Increase" },
                  { value: "40%", label: "Reduction in Pesticides" },
                  { value: "6", label: "States Covered" },
                ].map((s) => (
                  <div key={s.label} className="p-8 text-center">
                    <p className="tracking-none text-3xl font-black text-green-400 mb-1">{s.value}</p>
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
                <h2 className="has-gradient mb-4">Data, Drones &amp; Deep Learning.</h2>
                <p className="text-light text-lg opacity-75 max-w-xl mx-auto">Working together to build India&apos;s most sustainable agricultural future — one farm at a time.</p>
              </div>
            </div>
            <div className="row gy-5">
              {solutions.map((s, i) => (
                <div key={s.title} className="md:col-6" data-aos="fade-up-sm" data-aos-delay={`${(i % 2) * 100}`}>
                  <div className="group flex items-start gap-5 p-8 rounded-3xl border border-green-500/15 bg-green-500/[0.03] hover:border-green-500/35 transition-all duration-300 h-full">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-green-500/15 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
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

        {/* LAND LORDZ DEEP DIVE */}
        <section className="section bg-dark relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(34,197,94,0.08)_0%,_transparent_60%)]" />
          <div className="container relative z-10">
            <div className="row justify-center mb-14">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Flagship Product</p>
                <h2 className="has-gradient mb-4">LAND LORDZ: Farmer-First AI</h2>
                <p className="text-light text-lg opacity-75 max-w-xl mx-auto">The name says it all. LAND LORDZ puts farmers in command of their land with intelligence previously accessible only to large agribusinesses.</p>
              </div>
            </div>
            <div className="row justify-center">
              <div className="lg:col-10" data-aos="fade-up-sm">
                <div className="p-8 lg:p-12 rounded-3xl border border-green-500/20 bg-green-500/[0.03]">
                  <div className="flex items-center gap-4 mb-8">
                    <img src="/logos/landlordz.png" alt="LAND LORDZ" className="h-8 w-auto opacity-90" />
                    <span className="px-2.5 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-widest">India&apos;s First Personalised Agriculture AI</span>
                  </div>
                  <div className="row gy-4 mb-8">
                    {[
                      { title: "Satellite + Drone Monitoring", desc: "Multi-spectral satellite imagery combined with UAV data for comprehensive crop health visibility." },
                      { title: "AI Daily Action Plans", desc: "Personalised farming recommendations generated every morning based on real-time field conditions." },
                      { title: "Weather-Integrated Calendars", desc: "Planting, irrigation, and harvest schedules dynamically adjusted for hyperlocal micro-climate patterns." },
                      { title: "Government Scheme Integration", desc: "Automatic eligibility checks and application support for crop insurance and subsidies." },
                    ].map((f) => (
                      <div key={f.title} className="md:col-6">
                        <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] h-full">
                          <p className="tracking-none text-sm font-bold text-white mb-1.5">{f.title}</p>
                          <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { v: "23%", l: "Avg. Yield Increase" },
                      { v: "40%", l: "Less Pesticide Use" },
                      { v: "6", l: "States Active" },
                    ].map((item) => (
                      <div key={item.l} className="text-center p-4 rounded-2xl border border-green-500/15 bg-green-500/5">
                        <p className="tracking-none text-2xl font-black text-green-400 mb-1">{item.v}</p>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.l}</p>
                      </div>
                    ))}
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
                        <span className={`shrink-0 w-6 h-6 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center text-green-400 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
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
            <div className="overflow-hidden rounded-3xl border border-green-500/15 bg-gradient-to-br from-white/[0.04] to-green-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="px-8 py-14 lg:px-20 lg:py-20 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest">SDG 2 — Zero Hunger</span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">Ready to bring AI to your farm or agri-business?</h2>
                <p className="text-white/60 text-base leading-relaxed">Talk to our AgriTech team — we&apos;ll assess your farm&apos;s potential and show you exactly how LAND LORDZ can increase your yield this season.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Talk to Our AgriTech Team">Talk to Our AgriTech Team</span></span>
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
