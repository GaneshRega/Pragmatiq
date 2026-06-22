"use client";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSharedSections from "@/components/HomeSharedSections";

export default function HomeV2Page() {
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
        {/* ── Hero ── */}
        <section className="relative min-h-[92vh] overflow-hidden flex items-center" style={{background: '#07080f'}}>

          {/* Single soft ambient glow — right side, behind logo */}
          <div aria-hidden="true" className="pointer-events-none absolute right-[-8%] top-1/2 z-0 h-[860px] w-[860px] -translate-y-1/2 rounded-full" style={{
            background: 'radial-gradient(ellipse at center, rgba(88,28,220,0.11) 0%, rgba(139,92,246,0.06) 45%, transparent 72%)',
            filter: 'blur(80px)',
          }} />

          <div className="container relative z-10">
            <div className="flex flex-col lg:flex-row items-center py-24 lg:min-h-[88vh] lg:py-0 lg:gap-0">

              {/* ══════════ LEFT: Content ══════════ */}
              <div className="lg:w-[52%] lg:pr-16" data-aos="fade-up-sm">

                {/* Enterprise label */}
                <div className="mb-7 inline-flex items-center gap-3">
                  <span className="h-px w-8" style={{background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35))'}} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color: 'rgba(255,255,255,0.38)'}}>
                    Enterprise Technology
                  </span>
                </div>

                <h1 className="mb-6 font-bold leading-[1.07] tracking-[-0.025em] text-white text-[2.5rem] sm:text-5xl lg:text-[3.4rem] xl:text-[4rem]">
                  Agile. Adaptive.
                  <br />
                  <span style={{
                    background: 'linear-gradient(100deg, #818cf8 0%, #a78bfa 25%, #c084fc 50%, #e879f9 75%, #f472b6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Accountability.
                  </span>
                </h1>

                <p className="mb-10 max-w-[440px] text-[1.0rem] leading-[1.75]" style={{color: 'rgba(255,255,255,0.48)'}}>
                  Harnessing pragmatic innovation and leading technologies to build scalable digital solutions with agility, adaptability, and accountability at their core.
                </p>

                <div className="flex flex-wrap items-center gap-5" data-aos="fade-up-sm" data-aos-delay="80">
                  <Link
                    href="/contact/"
                    target="_self"
                    className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
                    style={{borderColor: 'rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.04)'}}
                  >
                    Explore Solutions
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact/"
                    target="_self"
                    className="text-sm font-medium transition-colors duration-200 hover:text-white"
                    style={{color: 'rgba(255,255,255,0.42)'}}
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>

              {/* RIGHT — logo only, overflows naturally off the right edge */}
              <div className="hidden lg:block lg:w-[48%]" aria-hidden="true">
                <img
                  src="/pragicon.png"
                  alt=""
                  className="w-[118%] max-w-none select-none"
                  style={{
                    opacity: 0.50,
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.08)',
                  }}
                />
              </div>

            </div>
          </div>

          {/* Bottom separator */}
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 h-px" style={{
            background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0.06) 65%, transparent 95%)',
          }} />
        </section>

        <HomeSharedSections />
      </main>
      <Footer />
    </>
  );
}
