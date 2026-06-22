"use client";
import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSharedSections from "@/components/HomeSharedSections";

export default function HomeV1Page() {
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
      <Header transparent />
      <main id="main-content">
        {/* ── Hero: Full-screen video ── */}
        <section className="overflow-hidden relative min-h-screen flex items-center -mt-[72px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-70"
          >
            <source src="/landing_video.mp4" type="video/mp4" />
          </video>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-black/65" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-blue-900/20 via-black/5 to-pink-900/20" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-[2] h-40 w-full bg-gradient-to-t from-body to-transparent" />

          <div className="container relative z-10 py-24 pt-[120px]">
            <div className="row justify-center">
              <div className="text-center md:col-9 lg:col-9">
                <div data-aos="fade-up-sm" className="border-animation mx-auto mb-4 w-fit rounded-full p-px">
                  <div className="border-animation-inner flex gap-2 rounded-full border border-white/15 px-3 py-1.5">
                    <img src="/_astro/award.DBICt9v7_1KM3nu.svg" alt="note" loading="lazy" decoding="async" width="17" height="17" />
                    <span className="text-sm opacity-70 md:text-base">PRAGMATIQ IN ACTION</span>
                  </div>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-4 text-h2 lg:text-h1">
                  Agile Adaptive Accountability
                </h1>
                <p data-aos="fade-up-sm" className="mb-8 text-xl/[inherit] text-light">
                  Harnessing pragmatic innovation and leading technologies to build scalable digital solutions with agility, adaptability, and accountability at their core.
                </p>
                <ul className="flex flex-wrap justify-center gap-4">
                  <li data-aos="fade-up-sm" data-aos-delay="100">
                    <Link className="btn btn-primary has-icon" href="/contact/" target="_self" rel="noopener">
                      <span className="value"><span data-content="Explore Solutions">Explore Solutions</span></span>
                      <span className="icon">
                        <span>
                          <span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                          </span>
                          <span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" aria-hidden="true" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li data-aos="fade-up-sm" data-aos-delay="150">
                    <Link className="btn btn-outline-transparent" href="/contact/" target="_self" rel="noopener">
                      <span className="value"><span data-content="Partner with Us">Partner with Us</span></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <HomeSharedSections />
      </main>
      <Footer />
    </>
  );
}
