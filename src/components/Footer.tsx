import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Thought Leadership", href: "/thought-leadership" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Fractional CTO", href: "/contact" },
      { label: "Embedded Teams", href: "/contact" },
      { label: "Managed Services", href: "/contact" },
      { label: "Army of AI Agents", href: "/contact" },
      { label: "Product Launchpad", href: "/contact" },
      { label: "Venture Studio", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Connect Learning & LMS", href: "/contact" },
      { label: "AI Campus System", href: "/contact" },
      { label: "Startup OS", href: "/contact" },
      { label: "Landlordz AI", href: "/contact" },
    ],
  },
  {
    title: "Domains",
    links: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Life Sciences", href: "/industries/life-sciences" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/contact" },
      { label: "Terms & Conditions", href: "/contact" },
      { label: "Blog / Insights", href: "/thought-leadership" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Book a Demo", href: "/contact" },
      { label: "info@pragmatiq.in", href: "mailto:info@pragmatiq.in" },
      { label: "Start a Project", href: "/contact" },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/30900609/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/pragmatiqsys",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/pragmatiq-systems",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070707] overflow-hidden rounded-t-3xl">

      {/* Emerald glow — bottom-left */}
      <div
        className="pointer-events-none absolute bottom-0 left-[8%] rounded-full"
        style={{
          width: 600,
          height: 480,
          background: "radial-gradient(circle, #10b981 0%, #059669 50%, transparent 80%)",
          filter: "blur(130px)",
          opacity: 0.18,
        }}
      />

      {/* Sky glow — bottom-right */}
      <div
        className="pointer-events-none absolute bottom-0 right-[5%] rounded-full"
        style={{
          width: 500,
          height: 400,
          background: "radial-gradient(circle, #2d57ee 0%, #3b82f6 40%, #6366f1 70%, transparent 90%)",
          filter: "blur(130px)",
          opacity: 0.2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-[72px]">

        {/* Logo + SDG badges */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 pb-9"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <Link href="/" className="inline-block">
            <img
              src="/pragmatiq_logo.png"
              alt="Pragmatiq Systems"
              loading="eager"
              decoding="async"
              className="h-16 w-auto"
            />
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            {["SDG 3", "SDG 4", "SDG 2", "SDG 9"].map((sdg) => (
              <span
                key={sdg}
                className="px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400/70 text-[0.6rem] font-bold uppercase tracking-widest"
              >
                {sdg}
              </span>
            ))}
            <span className="ml-4 text-[0.72rem] text-white/25 hidden sm:inline">
              AI-First · HEAL Strategy · UN SDGs
            </span>
          </div>
        </div>

        {/* Contact block */}
        <div className="flex flex-col gap-10 pb-12 sm:flex-row sm:justify-between sm:items-start sm:gap-12 sm:pb-16">
          <div className="flex flex-col gap-6 max-w-[560px]">
            <span className="text-secondary/70 text-[0.75rem] font-medium tracking-[0.08em] uppercase">
              ✦ Contact Us
            </span>
            <h2 className="text-white font-bold leading-tight" style={{ fontSize: "clamp(1.55rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
              Interested in working together,{" "}
              <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>
                trying our platform or simply learning more?
              </span>
            </h2>
            <div className="flex flex-col gap-1.5">
              <p className="text-white/30 text-[0.8rem] m-0">Reach us at</p>
              <a
                href="mailto:info@pragmatiq.in"
                className="text-white/80 hover:text-secondary transition-colors duration-200 text-base font-medium no-underline"
              >
                info@pragmatiq.in ↗
              </a>
              <a
                href="tel:+919996664467"
                className="text-white/45 hover:text-emerald-400 transition-colors duration-200 text-[0.9rem] no-underline"
              >
                +91 999 666 4467
              </a>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div
          className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:grid-cols-3 lg:grid-cols-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-secondary/50">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[0.8rem] text-white/40 hover:text-white/80 transition-colors duration-200 no-underline block leading-snug"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant brand watermark */}
        <div className="overflow-hidden leading-none text-center">
          <span
            className="font-bold select-none whitespace-nowrap block"
            style={{
              fontSize: "clamp(68px, 14vw, 180px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.35) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            pragmatiq
          </span>
        </div>

        {/* Bottom strip */}
        <div
          className="flex flex-col gap-3 py-5 mt-2 sm:flex-row sm:justify-between sm:items-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-white/25 text-[0.75rem]">
            © 2026 Pragmatiq Systems Pvt. Ltd. All Rights Reserved.
          </span>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/45 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
