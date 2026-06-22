"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, colorMap } from "../articles";

const ArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5m7 7-7-7 7-7" />
  </svg>
);

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      import("aos/dist/aos.css");
      AOS.init({ once: true, duration: 800 });
    };
    initAOS();
  }, []);

  if (!article) {
    notFound();
    return null;
  }

  const related = articles.filter(
    (a) => a.id !== article.id && (a.category === article.category || a.categoryColor === article.categoryColor)
  ).slice(0, 3);

  const fallbackRelated = articles.filter((a) => a.id !== article.id).slice(0, 3);
  const relatedArticles = related.length > 0 ? related : fallbackRelated;

  return (
    <>
      <Header />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="overflow-hidden pb-0 pt-16 relative">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute left-[5%] top-1/2 z-0 h-[400px] w-[600px] rotate-[-15deg] rounded-full bg-gradient-to-tr ${article.coverGradient} opacity-20 blur-[120px]`}
          />
          <div className="container relative z-10">
            <div className="row justify-center">
              <div className="pt-6 md:col-10 lg:col-8">
                {/* Back link */}
                <div data-aos="fade-up-sm" className="mb-8">
                  <Link
                    href="/thought-leadership"
                    className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    <ArrowLeft />
                    Back to Thought Leadership
                  </Link>
                </div>

                {/* Category + read time */}
                <div data-aos="fade-up-sm" className="flex flex-wrap items-center gap-3 mb-5">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${colorMap[article.categoryColor]}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-white/30">{article.readTime}</span>
                  <span className="text-xs text-white/30">{article.date}</span>
                </div>

                {/* Title */}
                <h1 data-aos="fade-up-sm" className="has-gradient mb-6 text-h3 lg:text-h2 leading-tight">
                  {article.title}
                </h1>

                {/* Excerpt */}
                <p data-aos="fade-up-sm" className="mb-8 text-lg/[inherit] opacity-70 max-w-2xl">
                  {article.excerpt}
                </p>

                {/* Author */}
                <div data-aos="fade-up-sm" className="flex items-center gap-3 pb-10 border-b border-white/8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary text-sm font-bold">
                    {article.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/80">{article.author}</p>
                    <p className="text-xs text-white/40">{article.authorTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <section className="section pb-0">
          <div className="container">
            <div className="row justify-center">
              <div className="md:col-10 lg:col-8">

                {/* Key Takeaways */}
                <div
                  data-aos="fade-up-sm"
                  className={`mb-12 p-6 rounded-2xl border ${colorMap[article.categoryColor].replace("text-", "border-").split(" ")[0]} bg-white/[0.02]`}
                >
                  <p className={`text-xs font-black uppercase tracking-widest mb-4 ${colorMap[article.categoryColor].split(" ").pop()}`}>
                    Key Takeaways
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {article.keyTakeaways.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className={`mt-0.5 shrink-0 h-1.5 w-1.5 rounded-full ${colorMap[article.categoryColor].split(" ").pop()?.replace("text-", "bg-")}`} />
                        <span className="text-sm text-white/65 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Article sections */}
                <div className="flex flex-col gap-10">
                  {article.sections.map((section, i) => (
                    <div key={i} data-aos="fade-up-sm">
                      {section.heading && (
                        <h2 className="text-xl font-bold text-white mb-4">{section.heading}</h2>
                      )}
                      <div className="flex flex-col gap-4">
                        {section.body.split("\n\n").map((para, pi) => (
                          <p key={pi} className="text-white/60 text-base leading-[1.8]">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div data-aos="fade-up-sm" className="mt-12 pt-8 border-t border-white/8 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author card */}
                <div data-aos="fade-up-sm" className="mt-10 p-6 rounded-2xl border border-white/8 bg-white/[0.02] flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary font-bold">
                    {article.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{article.author}</p>
                    <p className="text-xs text-white/40 mb-2">{article.authorTitle}</p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      A member of Pragmatiq&apos;s leadership and research team, writing on AI, venture building, and the industries we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED ARTICLES ── */}
        {relatedArticles.length > 0 && (
          <section className="section">
            <div className="container">
              <div className="row justify-center">
                <div className="md:col-10 lg:col-8">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-8" data-aos="fade-up-sm">
                    More Articles
                  </p>
                  <div className="flex flex-col gap-4">
                    {relatedArticles.map((a, i) => (
                      <Link
                        key={a.id}
                        href={`/thought-leadership/${a.slug}`}
                        data-aos="fade-up-sm"
                        data-aos-delay={`${i * 80}`}
                        className={`group flex items-start gap-5 p-5 rounded-2xl border border-white/8 hover:border-white/15 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded-full border text-[9px] font-black uppercase tracking-widest ${colorMap[a.categoryColor]}`}>
                              {a.category}
                            </span>
                            <span className="text-[10px] text-white/30">{a.readTime}</span>
                          </div>
                          <p className="text-sm font-semibold text-white/80 group-hover:text-white leading-snug transition-colors">{a.title}</p>
                          <p className="text-xs text-white/40 mt-1">{a.author} · {a.date}</p>
                        </div>
                        <span className={`shrink-0 mt-1 opacity-40 group-hover:opacity-100 transition-opacity ${colorMap[a.categoryColor].split(" ").pop()}`}>
                          <ArrowRight />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="overflow-hidden rounded-3xl border border-emerald-500/15 bg-gradient-to-br from-white/[0.04] to-emerald-500/[0.04] backdrop-blur-xl" data-aos="fade-up-sm">
              <div className="px-8 py-14 lg:px-20 lg:py-20 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  Stay Informed
                </span>
                <h2 className="has-gradient text-3xl lg:text-4xl font-bold leading-snug">
                  Want to work with us?
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  Whether you&apos;re building a product, scaling a team, or exploring AI for your industry — let&apos;s talk.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link className="btn btn-primary has-icon" href="/contact">
                    <span className="value"><span data-content="Get in Touch">Get in Touch</span></span>
                    <span className="icon"><span><span><ArrowRight /></span><span><ArrowRight /></span></span></span>
                  </Link>
                  <Link className="btn btn-outline-white" href="/thought-leadership">
                    <span className="value"><span data-content="More Articles">More Articles</span></span>
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
