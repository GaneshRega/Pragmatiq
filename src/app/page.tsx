"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
const clientLogos = [
  { name: "Clinally Logo", src: "/logos/Clinally Logo.png" },
  { name: "dr reddys", src: "/logos/dr reddys.png" },
  { name: "icga", src: "/logos/icga.png" },
  { name: "icmr", src: "/logos/icmr.png" },
  { name: "idf logo", src: "/logos/idf logo.png" },
  { name: "l&t", src: "/logos/l&t.png" },
  { name: "learnsquare", src: "/logos/learnsquare.png" },
  { name: "pihealth", src: "/logos/pihealth.png" },
  { name: "quinary", src: "/logos/quinary.png" },
  { name: "ritebook", src: "/logos/ritebook.png" },
  { name: "seateat", src: "/logos/seateat.png" },
  { name: "time", src: "/logos/time.png" },
];

export default function Page() {
  useEffect(() => {
    // Dynamic AOS import to avoid SSR issues
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
      <div aria-hidden="true">
        {" "}
        <img
          src="/_astro/banner-bg.DWsuhNy-_1gDK3j.webp"
          alt="banner bg image"
          loading="eager"
          decoding="async"
          width="2399"
          height="1617"
          className="pointer-events-none absolute inset-x-0 top-[80%] -z-10 w-full -translate-y-2/4 object-cover p-0 md:top-[95%]"
        />{" "}
      </div>{" "}
      <main id="main-content">
        {" "}
        <section className="overflow-hidden pb-0 relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[15%] top-1/3 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-30 blur-[100px] bg-linear-to-tr"
          />
          <ContainerScroll
            titleComponent={
              <div className="pt-6">
                <div
                  data-aos="fade-up-sm"
                  className="border-animation mx-auto mb-4 w-fit rounded-full p-px"
                >
                  <div className="border-animation-inner flex gap-2 rounded-full border border-white/15 px-3 py-1.5">
                    <img
                      src="/_astro/award.DBICt9v7_1KM3nu.svg"
                      alt="note"
                      loading="lazy"
                      decoding="async"
                      width="17"
                      height="17"
                    />
                    <span className="text-sm opacity-70 md:text-base">
                      PRAGMATIQ IN ACTION
                    </span>
                  </div>
                </div>
                <h1
                  data-aos="fade-up-sm"
                  className="has-gradient mb-4 text-h2 lg:text-h1"
                >
                  Agile. Adaptive. Accountability.
                </h1>
                <p
                  data-aos="fade-up-sm"
                  className="mb-8 text-xl/[inherit] text-light max-w-2xl mx-auto"
                >
                  Harnessing pragmatic innovation and leading technologies to
                  build scalable digital solutions with agility, adaptability,
                  and accountability at their core.
                </p>
                <ul className="flex flex-wrap justify-center gap-4">
                  <li data-aos="fade-up-sm" data-aos-delay="100">
                    <Link
                      className="btn btn-primary has-icon"
                      href="/contact/"
                      target="_self"
                      rel="noopener"
                    >
                      <span className="value">
                        <span data-content="Explore Solutions">
                          Explore Solutions
                        </span>
                      </span>
                      <span className="icon">
                        <span>
                          <span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 320 512"
                              className="text-xs"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                          </span>
                          <span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 320 512"
                              aria-hidden="true"
                              className="text-xs"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li data-aos="fade-up-sm" data-aos-delay="150">
                    <Link
                      className="btn btn-outline-transparent"
                      href="/contact/"
                      target="_self"
                      rel="noopener"
                    >
                      <span className="value">
                        <span data-content="Partner with Us">
                          Partner with Us
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            }
          >
            {/* Browser mockup with video fills the 3D card */}
            <div className="relative flex flex-col h-full w-full rounded-2xl overflow-hidden bg-[#070707]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02] shrink-0">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 shadow-[0_0_8px_rgba(255,95,86,0.4)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 shadow-[0_0_8px_rgba(255,189,46,0.4)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 shadow-[0_0_8px_rgba(39,201,63,0.4)]" />
                </div>
                <div className="mx-auto bg-white/5 border border-white/10 text-[10px] text-white/50 px-8 py-0.5 rounded-full w-1/3 text-center truncate font-mono select-none">
                  pragmatiq.systems
                </div>
                <div className="w-14" />
              </div>
              <div className="flex-1 overflow-hidden">
                <video
                  className="w-full h-full object-cover block"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/_astro/banner.DSZMVOBl_ZAdTgc.webp"
                >
                  <source src="/agile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </ContainerScroll>
        </section>{" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="row">
              {" "}
              <div className="mx-auto text-center lg:col-6" data-aos="fade-up-sm">
                {" "}
                <h2 className="has-gradient mb-6">
                  Our Clients &amp; Partners
                </h2>
                <p className="text-lg/[inherit] opacity-80">
                  Empowering organizations through technology, innovation, and collaboration.
                </p>{" "}
              </div>{" "}
              <div
                className="col-12 pt-14"
                data-aos="fade-up-sm"
                data-aos-delay="200"
              >
                {" "}
                <div className="relative flex gap-x-6 md:gap-x-8 overflow-hidden before:pointer-events-none before:absolute before:left-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-body before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:right-0 after:h-full after:w-20 after:bg-linear-to-r after:from-transparent after:to-body after:content-[''] before:md:w-40 after:md:w-40">
                  {" "}
                  <div className="animate-client-logo flex shrink-0 items-center justify-center gap-x-6 gap-y-6 opacity-90 md:gap-x-8">
                    {clientLogos.map((logo, idx) => (
                      <div key={`logo-1-${idx}`} className="bg-white/95 p-5 rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] h-44 w-44 shrink-0 transition-all duration-300 hover:scale-105 hover:bg-white">
                        <img
                          src={logo.src}
                          alt={logo.name}
                          loading="lazy"
                          decoding="async"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>{" "}
                  <div
                    className="animate-client-logo flex shrink-0 items-center justify-center gap-x-6 gap-y-6 opacity-90 md:gap-x-8"
                    aria-hidden="true"
                  >
                    {clientLogos.map((logo, idx) => (
                      <div key={`logo-2-${idx}`} className="bg-white/95 p-5 rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] h-44 w-44 shrink-0 transition-all duration-300 hover:scale-105 hover:bg-white">
                        <img
                          src={logo.src}
                          alt={logo.name}
                          loading="lazy"
                          decoding="async"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className=""></div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="row mb-16">
              <div className="mx-auto text-center lg:col-7" data-aos="fade-up-sm">
                <h2 className="has-gradient mb-6">Industry Exposure</h2>
                <p className="text-lg/[inherit] opacity-80">
                  Every product we build maps to a UN Sustainable Development Goal — purposeful technology that creates measurable impact across critical sectors.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-[#0a0d12] max-lg:mb-10 max-lg:last:mb-0 lg:sticky lg:top-[120px]">
              {/* Top-right corner glow — mirrors Startup OS card pattern */}
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 z-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[100px]" />
              {/* Secondary glow on image side */}
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 right-[15%] z-0 h-[280px] w-[280px] rounded-full bg-blue-600/8 blur-[80px]" />
              {/* Bottom gradient fade — mirrors Startup OS card */}
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-0 h-40 w-full bg-linear-to-t from-blue-950/25 to-transparent" />
              <div className="row relative z-10">
                <div className="lg:col-6" data-aos="fade-up-sm">
                  <div className="min-h-full py-10 pl-5 pr-4 md:py-16 md:pl-10 md:pr-9 lg:py-20 lg:pl-20 lg:pr-[70px]">
                    <span className="mb-4 inline-block rounded-full border border-green-400/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400" data-aos="fade-up-sm">
                      SDG 3 &bull; Good Health &amp; Well-being
                    </span>
                    <h2 className="has-gradient mb-6" data-aos="fade-up-sm">
                      Healthcare. Intelligent Care at Scale.
                    </h2>
                    <p className="text-lg/[inherit] opacity-80" data-aos="fade-up-sm" data-aos-delay="100">
                      Advancing patient outcomes through AI-powered diagnostics, clinical decision support, and intelligent healthcare data systems — HIPAA and ABDM compliant from day one.
                    </p>
                    <ul className="mt-10 columns-1 md:columns-2 lg:mt-20">
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-yellow-200 -mt-px inline-block mr-2.5 text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                        Clinical Decision Support
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-yellow-200 -mt-px inline-block mr-2.5 text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                        HIPAA &amp; ABDM Ready
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-yellow-200 -mt-px inline-block mr-2.5 text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                        NLP Workflows
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-yellow-200 -mt-px inline-block mr-2.5 text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                        Real-time Rural Impact
                      </li>
                    </ul>
                    <Link className="btn btn-primary mt-6 md:mt-10 has-icon" target="_self" href="/industries/healthcare">
                      <span className="value"><span data-content="Explore Healthcare">Explore Healthcare</span></span>
                      <span className="icon">
                        <span><span>
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
                        </span><span>
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" aria-hidden="true" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
                        </span></span>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="relative flex items-center justify-center overflow-hidden lg:col-6" data-aos="fade-up-sm" data-aos-delay="200">
                  <img
                    src="/industries/health.png"
                    alt="Healthcare – Intelligent Care at Scale"
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 w-[115%] max-w-none object-cover"
                    style={{filter: 'drop-shadow(0 0 48px rgba(59,130,246,0.45))'}}
                  />
                  {/* Left edge fade into card bg */}
                  <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[38%]" style={{background: 'linear-gradient(to right, #0a0d12 0%, rgba(10,13,18,0.55) 55%, transparent 100%)'}} />
                  {/* Top edge fade */}
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20" style={{background: 'linear-gradient(to bottom, #0a0d12, transparent)'}} />
                  {/* Bottom edge fade */}
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20" style={{background: 'linear-gradient(to top, #0a0d12, transparent)'}} />
                </div>
              </div>
            </div>
            {/* Education — purple neon image */}
            <div className="relative overflow-hidden rounded-3xl border border-purple-500/15 bg-[#0d0a10] max-lg:mb-10 max-lg:last:mb-0 lg:sticky lg:top-40">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 z-0 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[100px]" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 right-[15%] z-0 h-[280px] w-[280px] rounded-full bg-purple-600/8 blur-[80px]" />
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-0 h-40 w-full bg-linear-to-t from-purple-950/25 to-transparent" />
              <div className="row relative z-10">
                <div className="lg:col-6" data-aos="fade-up-sm">
                  <div className="min-h-full py-10 pl-5 pr-4 md:py-16 md:pl-10 md:pr-9 lg:py-20 lg:pl-20 lg:pr-[70px]">
                    <span className="mb-4 inline-block rounded-full border border-red-400/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400" data-aos="fade-up-sm">
                      SDG 4 &bull; Quality Education
                    </span>{" "}
                    <h2 className="has-gradient mb-6" data-aos="fade-up-sm">
                      Education. Intelligent Learning at Scale.
                    </h2>{" "}
                    <p
                      className="text-lg/[inherit] opacity-80"
                      data-aos="fade-up-sm"
                      data-aos-delay="100"
                    >
                      Empowering educators and learners with adaptive AI engines, personalised curricula, and real-time engagement toolsets — built for classrooms, vocational centres, and edge-learning environments.
                    </p>{" "}
                    <ul className="mt-10 columns-1 md:columns-2 lg:mt-20">
                      {" "}
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        PurpleGene AI{" "}
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        Connect LMS{" "}
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        Edge-Learning Environments{" "}
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        Scale-Ready Infrastructure{" "}
                      </li>{" "}
                    </ul>{" "}
                    <Link
                      className="btn btn-primary mt-6 md:mt-10 has-icon"
                      target="_self"
                      href="/"
                    >
                      {" "}
                      <span className="value">
                        {" "}
                        <span data-content="Explore EdTech">
                          Explore EdTech
                        </span>{" "}
                      </span>{" "}
                      <span className="icon">
                        {" "}
                        <span>
                          {" "}
                          <span>
                            {" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 320 512"
                              className="text-xs"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                            </svg>{" "}
                          </span>{" "}
                          <span>
                            {" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 320 512"
                              aria-hidden="true"
                              className="text-xs"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </span>{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="relative flex items-center justify-center overflow-hidden lg:col-6" data-aos="fade-up-sm" data-aos-delay="200">
                  <img src="/industries/edtech.png" alt="Education – Intelligent Learning at Scale" loading="lazy" decoding="async" className="relative z-10 w-[115%] max-w-none object-cover" style={{filter: 'drop-shadow(0 0 48px rgba(168,85,247,0.45))'}} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[38%]" style={{background: 'linear-gradient(to right, #0d0a10 0%, rgba(13,10,16,0.55) 55%, transparent 100%)'}} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20" style={{background: 'linear-gradient(to bottom, #0d0a10, transparent)'}} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20" style={{background: 'linear-gradient(to top, #0d0a10, transparent)'}} />
                </div>
              </div>
            </div>
            {/* Agriculture — green neon image */}
            <div className="relative overflow-hidden rounded-3xl border border-green-500/15 bg-[#0b0f0d] max-lg:mb-10 max-lg:last:mb-0 lg:sticky lg:top-[120px]">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 z-0 h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[100px]" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 right-[15%] z-0 h-[280px] w-[280px] rounded-full bg-green-600/8 blur-[80px]" />
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-0 h-40 w-full bg-linear-to-t from-green-950/25 to-transparent" />
              <div className="row relative z-10">
                <div className="lg:col-6" data-aos="fade-up-sm">
                  <div className="min-h-full py-10 pl-5 pr-4 md:py-16 md:pl-10 md:pr-9 lg:py-20 lg:pl-20 lg:pr-[70px]">
                    <span className="mb-4 inline-block rounded-full border border-yellow-400/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-400" data-aos="fade-up-sm">
                      SDG 2 &bull; Zero Hunger
                    </span>{" "}
                    <h2 className="has-gradient mb-6" data-aos="fade-up-sm">
                      Agriculture. Sustainable Innovation for Growth.
                    </h2>{" "}
                    <p
                      className="text-lg/[inherit] opacity-80"
                      data-aos="fade-up-sm"
                      data-aos-delay="100"
                    >
                      Turning "Dirt" into "Data" — modernising food production with Digital Twin Farming, geospatial AI, drone integration, and real-time soil intelligence. Portfolio: Landlordz.
                    </p>{" "}
                    <ul className="mt-10 columns-1 md:columns-2 lg:mt-20">
                      {" "}
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        Smart Farming Solutions{" "}
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        Digital Twin Farming{" "}
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        Geospatial AI{" "}
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        Drone Integration Suite{" "}
                      </li>{" "}
                    </ul>{" "}
                    <Link
                      className="btn btn-primary mt-6 md:mt-10 has-icon"
                      target="_self"
                      href="/"
                    >
                      {" "}
                      <span className="value">
                        {" "}
                        <span data-content="Explore AgriTech">
                          Explore AgriTech
                        </span>{" "}
                      </span>{" "}
                      <span className="icon">
                        {" "}
                        <span>
                          {" "}
                          <span>
                            {" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 320 512"
                              className="text-xs"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                            </svg>{" "}
                          </span>{" "}
                          <span>
                            {" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 320 512"
                              aria-hidden="true"
                              className="text-xs"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </span>{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="relative flex items-center justify-center overflow-hidden lg:col-6" data-aos="fade-up-sm" data-aos-delay="200">
                  <img src="/industries/agritech.png" alt="Agriculture – Sustainable Innovation for Growth" loading="lazy" decoding="async" className="relative z-10 w-[115%] max-w-none object-cover" style={{filter: 'drop-shadow(0 0 48px rgba(34,197,94,0.45))'}} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[38%]" style={{background: 'linear-gradient(to right, #0b0f0d 0%, rgba(11,15,13,0.55) 55%, transparent 100%)'}} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20" style={{background: 'linear-gradient(to bottom, #0b0f0d, transparent)'}} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20" style={{background: 'linear-gradient(to top, #0b0f0d, transparent)'}} />
                </div>
              </div>
            </div>
            {/* Life Sciences — purple DNA image */}
            <div className="relative overflow-hidden rounded-3xl border border-purple-500/15 bg-[#070509] max-lg:mb-10 max-lg:last:mb-0 lg:sticky lg:top-40">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 z-0 h-[420px] w-[420px] rounded-full bg-purple-500/8 blur-[120px]" />
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-0 h-36 w-full bg-linear-to-t from-purple-950/15 to-transparent" />
              <div className="row relative z-10">
                <div className="lg:col-6" data-aos="fade-up-sm">
                  <div className="min-h-full py-10 pl-5 pr-4 md:py-16 md:pl-10 md:pr-9 lg:py-20 lg:pl-20 lg:pr-[70px]">
                    <span className="mb-4 inline-block rounded-full border border-orange-400/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400" data-aos="fade-up-sm">
                      SDG 9 &bull; Industry, Innovation &amp; Infrastructure
                    </span>{" "}
                    <h2 className="has-gradient mb-6" data-aos="fade-up-sm">
                      Life Sciences. Accelerating Discovery &amp; Innovation.
                    </h2>{" "}
                    <p
                      className="text-lg/[inherit] opacity-80"
                      data-aos="fade-up-sm"
                      data-aos-delay="100"
                    >
                      Pioneering bio-AI research through DNA modelling, genomic intelligence, and autonomous lab data infrastructure — powered by PurpleGene. Portfolio: Sunblue Technologies.
                    </p>{" "}
                    <ul className="mt-10 columns-1 md:columns-2 lg:mt-20">
                      {" "}
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        Compliance First{" "}
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        AI-Native Data Lakes{" "}
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        DNA Modelling{" "}
                      </li>
                      <li className="mb-3 text-lg/[inherit] font-medium">
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-yellow-200 -mt-px inline-block mr-2.5 text-base"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>{" "}
                        Discovery Acceleration{" "}
                      </li>{" "}
                    </ul>{" "}
                    <Link
                      className="btn btn-primary mt-6 md:mt-10 has-icon"
                      target="_self"
                      href="/"
                    >
                      {" "}
                      <span className="value">
                        {" "}
                        <span data-content="Explore Life Sciences">
                          Explore Life Sciences
                        </span>{" "}
                      </span>{" "}
                      <span className="icon">
                        {" "}
                        <span>
                          {" "}
                          <span>
                            {" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 320 512"
                              className="text-xs"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                            </svg>{" "}
                          </span>{" "}
                          <span>
                            {" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 320 512"
                              aria-hidden="true"
                              className="text-xs"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </span>{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="relative flex items-center justify-center overflow-hidden bg-[#070509] lg:col-6" data-aos="fade-up-sm" data-aos-delay="200">
                  {/* Very subtle biotech pattern — particles only, no fills */}
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" style={{opacity: 0.035}}>
                    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                      <line x1="55" y1="55" x2="95" y2="38" stroke="#a855f7" strokeWidth="0.8"/>
                      <line x1="95" y1="38" x2="135" y2="58" stroke="#a855f7" strokeWidth="0.8"/>
                      <line x1="55" y1="55" x2="135" y2="58" stroke="#a855f7" strokeWidth="0.5"/>
                      <circle cx="55" cy="55" r="3" fill="#a855f7"/>
                      <circle cx="95" cy="38" r="2" fill="#a855f7"/>
                      <circle cx="135" cy="58" r="2.5" fill="#a855f7"/>
                      <line x1="335" y1="75" x2="368" y2="58" stroke="#c084fc" strokeWidth="0.7"/>
                      <circle cx="335" cy="75" r="2.5" fill="#c084fc"/>
                      <circle cx="368" cy="58" r="2" fill="#c084fc"/>
                      <line x1="152" y1="95" x2="248" y2="95" stroke="#a855f7" strokeWidth="0.5"/>
                      <line x1="145" y1="138" x2="255" y2="138" stroke="#a855f7" strokeWidth="0.5"/>
                      <line x1="152" y1="181" x2="248" y2="181" stroke="#a855f7" strokeWidth="0.5"/>
                      <line x1="145" y1="224" x2="255" y2="224" stroke="#a855f7" strokeWidth="0.5"/>
                      <polygon points="330,205 350,194 370,205 370,227 350,238 330,227" fill="none" stroke="#a855f7" strokeWidth="0.8"/>
                      <polygon points="305,238 325,227 345,238 345,260 325,271 305,260" fill="none" stroke="#a855f7" strokeWidth="0.6"/>
                      <line x1="330" y1="216" x2="305" y2="249" stroke="#a855f7" strokeWidth="0.5"/>
                      <circle cx="28" cy="185" r="1.5" fill="#c084fc"/>
                      <circle cx="48" cy="210" r="1" fill="#c084fc"/>
                      <circle cx="375" cy="195" r="1.5" fill="#c084fc"/>
                      <circle cx="358" cy="265" r="1" fill="#c084fc"/>
                      <circle cx="195" cy="18" r="1.5" fill="#a855f7"/>
                      <circle cx="218" cy="315" r="1.5" fill="#a855f7"/>
                      <circle cx="38" cy="115" r="1" fill="#a855f7"/>
                      <circle cx="362" cy="130" r="1" fill="#a855f7"/>
                      <circle cx="305" cy="38" r="1.5" fill="#a855f7"/>
                      <circle cx="325" cy="28" r="1" fill="#a855f7"/>
                      <circle cx="345" cy="38" r="1.5" fill="#a855f7"/>
                      <circle cx="315" cy="52" r="1" fill="#a855f7"/>
                      <circle cx="335" cy="52" r="1" fill="#a855f7"/>
                    </svg>
                  </div>
                  <img
                    src="/industries/lifescience.png"
                    alt="Life Sciences – Accelerating Discovery & Innovation"
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 w-[130%] max-w-none object-cover"
                    style={{filter: 'drop-shadow(0 0 56px rgba(168,85,247,0.5))'}}
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[42%]" style={{background: 'linear-gradient(to right, #070509 0%, rgba(7,5,9,0.6) 52%, transparent 100%)'}} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20" style={{background: 'linear-gradient(to bottom, #070509, transparent)'}} />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20" style={{background: 'linear-gradient(to top, #070509, transparent)'}} />
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="row">
              {" "}
              <div
                className="mx-auto text-center lg:col-6"
                data-aos="fade-up-sm"
              >
                {" "}
                <h2 className="has-gradient mb-6">
                  The Pragmatiq Product Suite
                </h2>{" "}
                <p className="text-lg/[inherit] opacity-80">
                  Battle-tested enterprise engines and intelligent frameworks
                  designed for high-growth environments.
                </p>{" "}
              </div>{" "}
              <div className="col-12 pt-20">
                {" "}
                {/* Asymmetric flagship grid */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                  {" "}

                  {/* ── Card 1: Core Learning Engines (large, left) ── */}
                  <div
                    className="group lg:col-span-5"
                    data-aos="fade-up-sm"
                    data-aos-delay="0"
                  >
                    <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-green-500/15 bg-[#0b0f0d] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-green-500/35 hover:shadow-[0_24px_60px_-12px_rgba(34,197,94,0.18)]">
                      {/* Ambient glow */}
                      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green-500/12 blur-[80px] transition-opacity duration-500 group-hover:opacity-150" />
                      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-green-950/30 to-transparent" />
                      {/* Product identity row */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-green-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                          EdTech
                        </span>
                        <span className="text-[11px] font-medium uppercase tracking-widest opacity-30">v2.4</span>
                      </div>
                      {/* Large decorative icon */}
                      <div className="relative z-10 my-8">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
                          <svg className="h-8 w-8 text-green-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                          </svg>
                        </div>
                      </div>
                      {/* Product name & tagline */}
                      <div className="relative z-10">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
                          Core Learning Engines
                        </h3>
                        <p className="text-sm leading-relaxed opacity-55">
                          PurpleGene®-powered LMS, AI coding compilers, adaptive evaluation, and autonomous campus systems — built for 100 to 10 million concurrent learners.
                        </p>
                      </div>
                      {/* Feature chips */}
                      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                        {["Connect LMS", "PurpleGene AI", "AI Campus", "Adaptive Eval"].map((f) => (
                          <span key={f} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                            {f}
                          </span>
                        ))}
                      </div>
                      {/* CTA */}
                      <div className="relative z-10 mt-auto pt-8">
                        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition-all duration-200 hover:gap-3 hover:text-green-300">
                          Explore Suite
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* ── Right column: two stacked cards ── */}
                  <div className="flex flex-col gap-5 lg:col-span-7">

                    {/* Card 2: Startup OS */}
                    <div
                      className="group"
                      data-aos="fade-up-sm"
                      data-aos-delay="100"
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-blue-500/15 bg-[#0a0d12] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-[0_24px_60px_-12px_rgba(59,130,246,0.18)]">
                        {/* Ambient glow */}
                        <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-500/10 blur-[70px]" />
                        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-blue-950/25 to-transparent" />
                        <div className="relative z-10 flex items-start gap-6">
                          {/* Icon */}
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                            <svg className="h-7 w-7 text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm3 10h2v3h3v2h-3v3h-2v-3h-3v-2h3z"/>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="mb-3 flex items-center gap-3">
                              <h3 className="text-xl font-bold tracking-tight text-white">Startup OS</h3>
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                New
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed opacity-55">
                              Employee Connect workspace, AHA compliance engine, and unified governance tools — the Business-in-a-Box for privacy-conscious startups.
                            </p>
                            <div className="mt-5 flex flex-wrap items-center gap-3">
                              {["Employee Connect", "AHA Suite", "Analytics"].map((f) => (
                                <span key={f} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                                  {f}
                                </span>
                              ))}
                              <Link href="/" className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition-all duration-200 hover:gap-2.5 hover:text-blue-300">
                                Explore Suite
                                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: HealthOS */}
                    <div
                      className="group flex-1"
                      data-aos="fade-up-sm"
                      data-aos-delay="200"
                    >
                      <div className="relative h-full overflow-hidden rounded-2xl border border-purple-500/15 bg-[#0d0a10] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/35 hover:shadow-[0_24px_60px_-12px_rgba(168,85,247,0.18)]">
                        {/* Ambient glow */}
                        <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px]" />
                        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-purple-950/25 to-transparent" />
                        <div className="relative z-10 flex items-start gap-6">
                          {/* Icon */}
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                            <svg className="h-7 w-7 text-purple-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14.93V17a1 1 0 00-2 0v-.07A8.003 8.003 0 014.07 11H5a1 1 0 000-2h-.93A8.003 8.003 0 0111 4.07V5a1 1 0 002 0v-.93A8.003 8.003 0 0119.93 11H19a1 1 0 000 2h.93A8.003 8.003 0 0113 16.93zM12 8a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"/>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="mb-3 flex items-center gap-3">
                              <h3 className="text-xl font-bold tracking-tight text-white">HealthOS</h3>
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-purple-400">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
                                Live
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed opacity-55">
                              ClinAlly CDSS, HEAL Suite AI, and NLP workflows — HIPAA and ABDM compliant clinical intelligence for underserved and urban care delivery.
                            </p>
                            <div className="mt-5 flex flex-wrap items-center gap-3">
                              {["ClinAlly CDSS", "NLP Workflows", "ABDM Ready"].map((f) => (
                                <span key={f} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                                  {f}
                                </span>
                              ))}
                              <Link href="/" className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 transition-all duration-200 hover:gap-2.5 hover:text-purple-300">
                                Explore Suite
                                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 4: AgroSense */}
                    <div
                      className="group flex-1"
                      data-aos="fade-up-sm"
                      data-aos-delay="300"
                    >
                      <div className="relative h-full overflow-hidden rounded-2xl border border-lime-500/15 bg-[#0a0f0b] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-lime-500/35 hover:shadow-[0_24px_60px_-12px_rgba(132,204,22,0.18)]">
                        <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-lime-500/10 blur-[70px]" />
                        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-lime-950/25 to-transparent" />
                        <div className="relative z-10 flex items-start gap-6">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-lime-500/20 bg-lime-500/10">
                            <svg className="h-7 w-7 text-lime-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4.42 0 4-4 8-4 1.23 0 2.38.4 3.37 1.06A10 10 0 0021 13c0-1.77-.47-3.43-1.28-4.88C18.85 8.04 17.96 8 17 8zm1 5.28c-1.16-.43-2.38-.68-3.59-.68-1.93 0-3.08.66-4.19 1.3C9.13 14.56 8.05 15.2 6.5 15.2c-.3 0-.6-.03-.87-.08C6.5 12.25 8.87 9.5 14 8.67c.75-.12 1.5-.17 2.29-.17.42 0 .85.02 1.27.05.28.63.44 1.34.44 2.08v2.65z"/>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="mb-3 flex items-center gap-3">
                              <h3 className="text-xl font-bold tracking-tight text-white">AgroSense</h3>
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-500/25 bg-lime-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-lime-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                                AgriTech
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed opacity-55">
                              Digital Twin Farming with geospatial AI, drone integration, soil intelligence, and Landlordz blockchain-backed land title protection.
                            </p>
                            <div className="mt-5 flex flex-wrap items-center gap-3">
                              {["Digital Twin", "Drone Suite", "Soil AI"].map((f) => (
                                <span key={f} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                                  {f}
                                </span>
                              ))}
                              <Link href="/" className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-lime-400 transition-all duration-200 hover:gap-2.5 hover:text-lime-300">
                                Explore Suite
                                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>{/* end right column */}
                </div>{/* end grid */}
              </div>{" "}
              <div className="col-12 pt-14 text-center" data-aos="fade-up-sm">
                {" "}
                <Link
                  className="btn btn-primary has-icon"
                  target="_self"
                  href="/"
                >
                  {" "}
                  <span className="value">
                    {" "}
                    <span data-content="Review All Products">
                      Review All Products
                    </span>{" "}
                  </span>{" "}
                  <span className="icon">
                    {" "}
                    <span>
                      {" "}
                      <span>
                        {" "}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                        </svg>{" "}
                      </span>{" "}
                      <span>
                        {" "}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" aria-hidden="true" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                        </svg>{" "}
                      </span>{" "}
                    </span>{" "}
                  </span>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="section">
          {" "}
          <div className="container">
            {" "}
            {/* Section header */}
            <div className="row">
              {" "}
              <div
                className="mx-auto text-center lg:col-7"
                data-aos="fade-up-sm"
              >
                {" "}
                <span className="mb-5 inline-block rounded-full border border-secondary/40 bg-secondary/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
                  What We Do
                </span>{" "}
                <h2 className="has-gradient mb-6">Our Core Services</h2>{" "}
                <p className="text-lg/[inherit] opacity-80">
                  From rapid product launches to embedded teams and venture
                  co-building — we deliver end-to-end AI-first solutions
                  tailored for scale.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Two-column content */}
            <div className="row g-5 pt-20 items-center">
              {" "}
              {/* Left column */}
              <div className="lg:col-5" data-aos="fade-up-sm">
                {" "}
                <h2 className="has-gradient mb-6">
                  Accelerated Product Launchpad
                </h2>{" "}
                <p
                  className="text-lg/[inherit] opacity-80"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                >
                  Go from idea to market-ready product in record time using our
                  pre-built AI accelerators and expert engineering teams.
                </p>{" "}
                <ul className="mt-10 space-y-4" data-aos="fade-up-sm" data-aos-delay="150">
                  {" "}
                  <li className="flex items-center gap-3 text-base/[inherit] font-medium">
                    {" "}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                      <svg className="h-3.5 w-3.5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </span>
                    MVP strategy &amp; scoping in 48 hours
                  </li>
                  <li className="flex items-center gap-3 text-base/[inherit] font-medium">
                    {" "}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                      <svg className="h-3.5 w-3.5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </span>
                    AI-powered rapid prototyping
                  </li>
                  <li className="flex items-center gap-3 text-base/[inherit] font-medium">
                    {" "}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20">
                      <svg className="h-3.5 w-3.5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </span>
                    Enterprise-grade launch infrastructure
                  </li>{" "}
                </ul>{" "}
                <Link
                  className="btn btn-primary mt-10 has-icon"
                  target="_self"
                  href="/"
                  data-aos="fade-up-sm"
                  data-aos-delay="200"
                >
                  {" "}
                  <span className="value">
                    {" "}
                    <span data-content="Learn More">Learn More</span>{" "}
                  </span>{" "}
                  <span className="icon">
                    {" "}
                    <span>
                      {" "}
                      <span>
                        {" "}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                        </svg>{" "}
                      </span>{" "}
                      <span>
                        {" "}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" aria-hidden="true" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                        </svg>{" "}
                      </span>{" "}
                    </span>{" "}
                  </span>{" "}
                </Link>{" "}
              </div>{" "}
              {/* Right column – service cards */}
              <div
                className="lg:col-6 lg:col-start-7"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                {" "}
                <div className="space-y-4">
                  {" "}
                  {/* Card 1 – Discovery & Strategy */}
                  <div className="flex items-start gap-5 rounded-xl border border-white/5 bg-dark p-6">
                    {" "}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                      <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                      </svg>
                    </span>{" "}
                    <div>
                      {" "}
                      <h3 className="tracking-none mb-2 text-lg/snug font-semibold">
                        Discovery &amp; Strategy
                      </h3>{" "}
                      <p className="text-sm opacity-60">
                        Define your MVP with AI-driven market analysis and
                        validated product-market fit insights.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* Card 2 – Rapid Prototyping */}
                  <div className="flex items-start gap-5 rounded-xl border border-white/5 bg-dark p-6">
                    {" "}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                      <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                      </svg>
                    </span>{" "}
                    <div>
                      {" "}
                      <h3 className="tracking-none mb-2 text-lg/snug font-semibold">
                        Rapid Prototyping
                      </h3>{" "}
                      <p className="text-sm opacity-60">
                        Interactive prototypes in days, not months — powered by
                        AI code generation and pre-built modules.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* Card 3 – Go-to-Market */}
                  <div className="flex items-start gap-5 rounded-xl border border-white/5 bg-dark p-6">
                    {" "}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                      </svg>
                    </span>{" "}
                    <div>
                      {" "}
                      <h3 className="tracking-none mb-2 text-lg/snug font-semibold">
                        Go-to-Market
                      </h3>{" "}
                      <p className="text-sm opacity-60">
                        Scalable infrastructure from day one — cloud deployment,
                        monitoring, and growth tooling ready out of the box.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}

        {/* ── Technology Venture Studio ── */}
        <section className="section">
          <div className="container">
            <div className="row g-5 items-center flex flex-col lg:flex-row">
              {/* Left column – numbered steps (sits below heading on mobile) */}
              <div className="order-2 lg:order-1 lg:col-5" data-aos="fade-up-sm">
                <div className="space-y-10">
                  {/* Step 01 */}
                  <div className="flex gap-6" data-aos="fade-up-sm" data-aos-delay="0">
                    <span className="shrink-0 text-4xl font-bold leading-none text-white/10">01</span>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">Ideation &amp; Thesis</h3>
                      <p className="text-sm leading-relaxed opacity-60">
                        Market gap identification aligned with UN Sustainable Development Goals and real-world impact metrics.
                      </p>
                    </div>
                  </div>
                  {/* Step 02 */}
                  <div className="flex gap-6" data-aos="fade-up-sm" data-aos-delay="100">
                    <span className="shrink-0 text-4xl font-bold leading-none text-white/10">02</span>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">Co-Build</h3>
                      <p className="text-sm leading-relaxed opacity-60">
                        Embedded engineering squads launching full MVPs in 90 days with an equity partnership model.
                      </p>
                    </div>
                  </div>
                  {/* Step 03 */}
                  <div className="flex gap-6" data-aos="fade-up-sm" data-aos-delay="200">
                    <span className="shrink-0 text-4xl font-bold leading-none text-white/10">03</span>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">Scale &amp; Exit</h3>
                      <p className="text-sm leading-relaxed opacity-60">
                        M&amp;A advisory, strategic partnerships, and growth capital to investor-ready exits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column – heading, stats, tags, CTA (shows first on mobile) */}
              <div className="order-1 lg:order-2 lg:col-6 lg:col-start-7" data-aos="fade-up-sm" data-aos-delay="100">
                <h2 className="has-gradient mb-6">Technology Venture Studio</h2>
                <p className="text-lg/[inherit] opacity-80">
                  We don&apos;t just build products — we co-found and accelerate startups from ideation to IPO-ready exits.
                </p>

                {/* Stats row */}
                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div className="rounded-xl border border-white/8 bg-dark px-5 py-6 text-center">
                    <p className="text-3xl font-bold tracking-tight text-white">22<span className="text-secondary">+</span></p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest opacity-50">Ventures</p>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-dark px-5 py-6 text-center">
                    <p className="text-3xl font-bold tracking-tight text-white">90<span className="text-secondary">d</span></p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest opacity-50">To MVP</p>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-dark px-5 py-6 text-center">
                    <p className="text-3xl font-bold tracking-tight text-white">4<span className="text-secondary">×</span></p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest opacity-50">Verticals</p>
                  </div>
                </div>

                {/* Tag pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Co-founding equity model", "90-day launch playbook", "4 vertical networks"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link className="btn btn-primary has-icon" target="_self" href="/">
                    <span className="value"><span data-content="Explore Studio">Explore Studio</span></span>
                    <span className="icon">
                      <span>
                        <span>
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                          </svg>
                        </span>
                        <span>
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" aria-hidden="true" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}

        {/* ── Embedded Teams & Managed Services ── */}
        <section className="section">
          <div className="container">
            <div className="row g-5 items-center">

              {/* Left column – heading + description */}
              <div className="lg:col-5" data-aos="fade-up-sm">
                <h2 className="has-gradient mb-6">
                  Embedded Teams &amp; Managed Services
                </h2>
                <p className="text-lg/[inherit] opacity-80">
                  Extend your engineering capacity with our expert squads — or hand over operations entirely with our managed service model.
                </p>
              </div>

              {/* Right column – three service cards */}
              <div className="lg:col-6 lg:col-start-7" data-aos="fade-up-sm" data-aos-delay="100">
                <div className="space-y-3">

                  {/* Card 1 – Embedded Teams */}
                  <div className="group flex items-center gap-5 rounded-xl border border-white/8 bg-dark p-5 transition-all duration-200 hover:border-white/15">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                      <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-lg font-semibold tracking-tight text-white">Embedded Teams</h3>
                      <p className="text-sm opacity-60">Dedicated squads in your stack and timezone, shipping like your own team.</p>
                    </div>
                    <Link href="/" className="shrink-0 text-secondary/60 transition-transform duration-200 group-hover:translate-x-0.5">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                      </svg>
                    </Link>
                  </div>

                  {/* Card 2 – Managed Services */}
                  <div className="group flex items-center gap-5 rounded-xl border border-white/8 bg-dark p-5 transition-all duration-200 hover:border-white/15">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                      <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-lg font-semibold tracking-tight text-white">Managed Services</h3>
                      <p className="text-sm opacity-60">Full operational ownership of AI systems, infra, and workflows — you focus on growth.</p>
                    </div>
                    <Link href="/" className="shrink-0 text-secondary/60 transition-transform duration-200 group-hover:translate-x-0.5">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                      </svg>
                    </Link>
                  </div>

                  {/* Card 3 – Fractional CTO */}
                  <div className="group flex items-center gap-5 rounded-xl border border-white/8 bg-dark p-5 transition-all duration-200 hover:border-white/15">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                      <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-lg font-semibold tracking-tight text-white">Fractional CTO</h3>
                      <p className="text-sm opacity-60">Strategic tech leadership on-demand — architecture to investor-ready roadmaps.</p>
                    </div>
                    <Link href="/" className="shrink-0 text-secondary/60 transition-transform duration-200 group-hover:translate-x-0.5">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>{" "}

        {/* ── Testimonials ── */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto text-center lg:col-7" data-aos="fade-up-sm">
                <span className="mb-5 inline-block rounded-full border border-secondary/40 bg-secondary/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
                  Testimonials
                </span>
                <h2 className="has-gradient mb-6">Hear from our clients</h2>
                <p className="text-lg/[inherit] opacity-80">
                  Real feedback from the teams we&apos;ve partnered with across healthcare, education, and beyond.
                </p>
              </div>
            </div>

            {/* Three testimonial cards */}
            <div className="row g-5 pt-16">

              {/* Card 1 – Sudhir Patel */}
              <div className="lg:col-4" data-aos="fade-up-sm" data-aos-delay="0">
                <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-dark p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <svg className="h-8 w-8 text-secondary/20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed opacity-70">
                    &ldquo;Pragmatiq is our technology partner since 2020. Team is professional and has in depth knowledge of subject. We have always seen that leadership believes in quality work and long term impact. They are not only the service provider but thought partners too.&rdquo;
                  </p>
                  <div className="mt-7 flex items-center gap-3 border-t border-white/8 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-sm font-bold text-secondary">
                      SP
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Sudhir Patel</p>
                      <p className="text-xs opacity-50">Co-Founder &amp; CEO, Quinary Global</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 – Dr. Devraj Jindal */}
              <div className="lg:col-4" data-aos="fade-up-sm" data-aos-delay="100">
                <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-dark p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <svg className="h-8 w-8 text-secondary/20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed opacity-70">
                    &ldquo;Pragmatiq has proven to be an excellent technology partner for ClinAlly. They seamlessly collaborated with our product team, efficiently collected user requirements, comprehended the scope of work, and consistently delivered the high-quality products on time, providing continuous support.&rdquo;
                  </p>
                  <div className="mt-7 flex items-center gap-3 border-t border-white/8 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-sm font-bold text-teal-400">
                      DDJ
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Dr. Devraj Jindal</p>
                      <p className="text-xs opacity-50">CEO, Clinally</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 – Rajdeep Singh */}
              <div className="lg:col-4" data-aos="fade-up-sm" data-aos-delay="200">
                <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-dark p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <svg className="h-8 w-8 text-secondary/20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed opacity-70">
                    &ldquo;As the founder of PadhoBadho, I highly recommend Pragmatiq Systems for their exceptional technical expertise in enhancing our website, server configurations, email setups, and AWS management. Their professionalism, dedication, and in-depth knowledge have significantly contributed to our platform&apos;s success. If you need a reliable tech partner, Pragmatiq Systems is the way to go. Highly recommended!&rdquo;
                  </p>
                  <div className="mt-7 flex items-center gap-3 border-t border-white/8 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-sm font-bold text-red-400">
                      RS
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Rajdeep Singh</p>
                      <p className="text-xs opacity-50">Founder &amp; CEO, PadhoBadho</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>{" "}

        <section className="section">
          {" "}
          <div className="container">
            {" "}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-dark/60 p-8 md:p-12 lg:p-16">
              {/* Ambient glow */}
              <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-secondary/10 blur-[100px]" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-secondary/8 blur-[80px]" />

              <div className="row relative z-10 g-5 items-center">
                {/* Left – heading + contact info */}
                <div className="lg:col-5" data-aos="fade-up-sm">
                  <span className="mb-5 inline-block rounded-full border border-secondary/40 bg-secondary/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
                    Contact Us
                  </span>
                  <h2 className="has-gradient mb-6">
                    Let&apos;s build something great together
                  </h2>
                  <p className="text-lg/[inherit] opacity-70">
                    Have a project in mind or want to explore how Pragmatiq can help? Reach out — we respond within 24 hours.
                  </p>
                  <ul className="mt-10 space-y-5">
                    <li className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                        <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </span>
                      <span className="text-sm opacity-70">hello@pragmatiq.in</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                        <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </span>
                      <span className="text-sm opacity-70">+91 98765 43210</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                        <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                      </span>
                      <span className="text-sm opacity-70">Hyderabad, India</span>
                    </li>
                  </ul>
                </div>

                {/* Right – contact form */}
                <div className="lg:col-6 lg:col-start-7" data-aos="fade-up-sm" data-aos-delay="100">
                  <div className="rounded-2xl border border-white/8 bg-body/60 p-8 backdrop-blur-sm">
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider opacity-50">Full Name</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-secondary/50 focus:bg-secondary/5"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider opacity-50">Email</label>
                          <input
                            type="email"
                            placeholder="john@company.com"
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-secondary/50 focus:bg-secondary/5"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider opacity-50">Company / Organisation</label>
                        <input
                          type="text"
                          placeholder="Acme Inc."
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-secondary/50 focus:bg-secondary/5"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider opacity-50">Message</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your project..."
                          className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-secondary/50 focus:bg-secondary/5"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary has-icon w-full justify-center"
                      >
                        <span className="value"><span data-content="Send Message">Send Message</span></span>
                        <span className="icon">
                          <span>
                            <span>
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                              </svg>
                            </span>
                            <span>
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" aria-hidden="true" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      <Footer />
    </>
  );
}
