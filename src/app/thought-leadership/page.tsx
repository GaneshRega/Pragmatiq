"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, colorMap, cardBorder } from "./articles";

const ArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const categories = ["All", "Healthcare AI", "Education Technology", "Agriculture AI", "Life Sciences", "AI Strategy", "Venture Building", "Education", "SDGs & Tech"];

export default function ThoughtLeadershipPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      import("aos/dist/aos.css");
      AOS.init({ once: true, duration: 800 });
    };
    initAOS();
  }, []);

  const featured = articles.filter((a) => a.featured);
  const filtered =
    activeCategory === "All"
      ? articles.filter((a) => !a.featured)
      : articles.filter((a) => a.category === activeCategory);

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
                  <span className="text-sm opacity-70 md:text-base">Thought Leadership</span>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">
                  Insights from the AI Frontier.
                </h1>
                <p data-aos="fade-up-sm" className="mb-8 text-xl/[inherit] opacity-80 max-w-2xl mx-auto">
                  In-depth articles, research, and perspectives from Pragmatiq&apos;s engineers, venture architects, and domain experts — shaping the conversation around responsible AI.
                </p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-emerald-500/25 from-40% via-sky-500/15 to-transparent opacity-15 blur-[100px] bg-linear-to-tr" />
        </section>

        {/* ── FEATURED ARTICLES ── */}
        <section className="section pb-0">
          <div className="container">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-8" data-aos="fade-up-sm">
              Featured Articles
            </p>
            <div className="row gy-5">
              {featured.map((a, i) => (
                <div key={a.id} className="lg:col-6" data-aos="fade-up-sm" data-aos-delay={`${i * 100}`}>
                  <Link href={`/thought-leadership/${a.slug}`} className="block h-full">
                    <div className={`group h-full p-8 rounded-3xl border ${cardBorder[a.categoryColor]} bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5`}>
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${colorMap[a.categoryColor]}`}>
                          {a.category}
                        </span>
                        <span className="text-xs text-white/30">{a.readTime}</span>
                      </div>
                      <p className="text-xl font-bold text-white leading-snug flex-1">{a.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{a.excerpt}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <div>
                          <p className="text-xs text-white/50 font-medium">{a.author}</p>
                          <p className="text-[10px] text-white/30">{a.date}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${colorMap[a.categoryColor].split(" ").pop()} opacity-70 group-hover:opacity-100 transition-opacity`}>
                          Read article <ArrowRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALL ARTICLES ── */}
        <section className="section">
          <div className="container">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10" data-aos="fade-up-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                    activeCategory === cat
                      ? "border-secondary/40 bg-secondary/15 text-secondary"
                      : "border-white/10 bg-white/5 text-white/45 hover:border-white/20 hover:text-white/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="row gy-5">
              {filtered.map((a, i) => (
                <div key={a.id} className="md:col-6 lg:col-4" data-aos="fade-up-sm" data-aos-delay={`${(i % 3) * 80}`}>
                  <Link href={`/thought-leadership/${a.slug}`} className="block h-full">
                    <div className={`group h-full p-7 rounded-3xl border ${cardBorder[a.categoryColor]} bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4`}>
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${colorMap[a.categoryColor]}`}>
                          {a.category}
                        </span>
                        <span className="text-[10px] text-white/30">{a.readTime}</span>
                      </div>
                      <p className="text-base font-bold text-white leading-snug flex-1">{a.title}</p>
                      <p className="text-white/45 text-xs leading-relaxed">{a.excerpt}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <div>
                          <p className="text-[10px] text-white/50">{a.author}</p>
                          <p className="text-[10px] text-white/30">{a.date}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold ${colorMap[a.categoryColor].split(" ").pop()} opacity-60 group-hover:opacity-100 transition-opacity`}>
                          Read <ArrowRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-20 text-center text-white/30 text-sm">
                No articles in this category yet.
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-white/[0.04] to-emerald-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="px-8 py-14 lg:px-20 lg:py-20 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  Stay Informed
                </span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">
                  Get HEAL insights delivered.
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  Deep-dives on AI, healthcare, education, and life sciences — straight from the people building it.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Get in Touch">Get in Touch</span></span>
                    <span className="icon"><span><span><ArrowRight /></span><span><ArrowRight /></span></span></span>
                  </Link>
                  <Link className="btn btn-outline-white" href="/about">
                    <span className="value"><span data-content="About Us">About Us</span></span>
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
