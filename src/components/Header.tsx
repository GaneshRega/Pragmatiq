"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const homeLinks = [
  { label: "Design 1", href: "/home-v1", icon: "🎬", desc: "Full-screen video hero" },
  { label: "Design 2", href: "/home-v2", icon: "🖼️", desc: "Split card hero layout" },
];

const industryLinks = [
  { label: "Healthcare", href: "/industries/healthcare", icon: "🏥", desc: "Precision care & AI diagnostics" },
  { label: "Education", href: "/industries/education", icon: "🎓", desc: "Intelligent learning at scale" },
  { label: "Agriculture", href: "/industries/agriculture", icon: "🌿", desc: "Sustainable farming intelligence" },
  { label: "Life Sciences", href: "/industries/life-sciences", icon: "🧬", desc: "Genomic & bio-AI research" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Thought Leadership", href: "/thought-leadership" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const searchIndex = [
  { title: "Home", desc: "Agile. Adaptive. Accountable.", href: "/", tag: "Page" },
  { title: "About", desc: "Our story, mission, and team", href: "/about", tag: "Page" },
  { title: "Careers", desc: "Join Pragmatiq — open roles", href: "/careers", tag: "Page" },
  { title: "Contact", desc: "Get in touch with Pragmatiq", href: "/contact", tag: "Page" },
  { title: "Thought Leadership", desc: "Articles, insights and research", href: "/thought-leadership", tag: "Page" },
  { title: "Healthcare", desc: "Precision care & AI diagnostics", href: "/industries/healthcare", tag: "Industry" },
  { title: "Education", desc: "Intelligent learning at scale", href: "/industries/education", tag: "Industry" },
  { title: "Agriculture", desc: "Sustainable farming intelligence", href: "/industries/agriculture", tag: "Industry" },
  { title: "Life Sciences", desc: "Genomic & bio-AI research", href: "/industries/life-sciences", tag: "Industry" },
  { title: "Products", desc: "All Pragmatiq products", href: "/products", tag: "Product" },
  { title: "PurpleGene", desc: "AI-powered personalised learning platform", href: "/products", tag: "Product" },
  { title: "ClinAlly", desc: "Clinical decision support AI for healthcare", href: "/products", tag: "Product" },
  { title: "Landlordz AI", desc: "India's first personalised agriculture AI", href: "/products", tag: "Product" },
  { title: "Connect LMS", desc: "Adaptive learning management system", href: "/products", tag: "Product" },
  { title: "Services", desc: "All Pragmatiq services", href: "/services", tag: "Service" },
  { title: "Venture Studio", desc: "Co-found and accelerate startups", href: "/services", tag: "Service" },
  { title: "Army of AI Agents", desc: "Autonomous AI agent squads for enterprise", href: "/services", tag: "Service" },
  { title: "Embedded Teams", desc: "Expert engineering squads in your org", href: "/services", tag: "Service" },
  { title: "Fractional CTO", desc: "On-demand technology leadership", href: "/services", tag: "Service" },
];

const tagColors: Record<string, string> = {
  Page:     "text-white/40 border-white/10 bg-white/5",
  Industry: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  Product:  "text-blue-400 border-blue-500/20 bg-blue-500/10",
  Service:  "text-violet-400 border-violet-500/20 bg-violet-500/10",
};

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = searchQuery.trim().length > 1
    ? searchIndex.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 7)
    : [];

  const closeSearch = () => { setSearchOpen(false); setSearchQuery(""); };

  useEffect(() => {
    if (!searchOpen) return;
    function onClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) closeSearch();
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeSearch();
      if (e.key === "Enter" && results.length > 0) { closeSearch(); router.push(results[0].href); }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [searchOpen, results]);

  return (
    <header className={`header sticky top-0 z-30 transition-colors duration-300 ${transparent ? "bg-transparent backdrop-blur-sm" : "bg-body"}`}>
      <nav className="navbar container relative z-10 flex flex-row items-center justify-between" style={{ minHeight: "72px" }}>

        {/* Logo */}
        <div className="order-0 flex items-center shrink-0">
          <Link href="/" className="inline-flex items-center">
            <img
              src="/pragmatiq_logo.png"
              alt="Pragmatiq Systems"
              loading="eager"
              decoding="async"
              style={{ height: "56px", width: "auto", display: "block" }}
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2 order-1">

          {/* Home dropdown */}
          <li className="nav-item nav-dropdown group relative">
            <Link href="/" className="nav-link inline-flex items-center gap-1 px-3 py-2">
              Home
              <svg className="h-4 w-4 fill-current transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50">
              <div className="w-60 rounded-2xl border border-white/10 bg-[#0D1220] shadow-2xl shadow-black/40 backdrop-blur-xl p-2">
                {homeLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-start gap-3 rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-white/5 group/item">
                    <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover/item:text-secondary transition-colors">{item.label}</p>
                      <p className="text-xs text-white/45 mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Industries dropdown */}
          <li className="nav-item nav-dropdown group relative">
            <Link href="/industries" className="nav-link inline-flex items-center gap-1 px-3 py-2">
              Industries
              <svg className="h-4 w-4 fill-current transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50">
              <div className="w-72 rounded-2xl border border-white/10 bg-[#0D1220] shadow-2xl shadow-black/40 backdrop-blur-xl p-2">
                {industryLinks.map((ind) => (
                  <Link key={ind.href} href={ind.href} className="flex items-start gap-3 rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-white/5 group/item">
                    <span className="text-xl mt-0.5 shrink-0">{ind.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover/item:text-emerald-400 transition-colors">{ind.label}</p>
                      <p className="text-xs text-white/45 mt-0.5">{ind.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {navLinks.filter(l => l.label !== "Home" && l.label !== "Industries").map((link) => (
            <li key={link.href} className="nav-item">
              <Link href={link.href} className="nav-link block px-3 py-2">{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Right: search + mobile hamburger */}
        <div className="order-1 ml-auto flex items-center gap-3 lg:order-2 lg:ml-0">
          {searchOpen ? (
            <div ref={searchRef} className="relative flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, products, services..."
                autoFocus
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white placeholder-white/40 outline-none focus:border-secondary/50 focus:bg-white/15 transition-all w-64"
              />
              <button onClick={closeSearch} className="text-white/60 hover:text-white transition-colors shrink-0">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
                </svg>
              </button>

              {searchQuery.trim().length > 1 && (
                <div className="absolute top-full right-0 mt-2 w-80 rounded-2xl border border-white/10 bg-[#0D1220] shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden z-50">
                  {results.length > 0 ? (
                    <div className="p-2">
                      {results.map((item) => (
                        <Link
                          key={item.href + item.title}
                          href={item.href}
                          onClick={closeSearch}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/5 transition-colors group/result"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white group-hover/result:text-secondary transition-colors truncate">{item.title}</p>
                            <p className="text-xs text-white/40 mt-0.5 truncate">{item.desc}</p>
                          </div>
                          <span className={`shrink-0 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${tagColors[item.tag]}`}>
                            {item.tag}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <p className="text-sm text-white/40">No results for <span className="text-white/60">&ldquo;{searchQuery}&rdquo;</span></p>
                    </div>
                  )}
                  <div className="border-t border-white/5 px-4 py-2 flex items-center justify-between">
                    <span className="text-[10px] text-white/25">↵ to open first result</span>
                    <span className="text-[10px] text-white/25">esc to close</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
              </svg>
            ) : (
              <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[#0A0E17] px-4 py-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search pages, products, services..."
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-secondary/50 transition-all"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const q = (e.target as HTMLInputElement).value;
                  const res = searchIndex.filter(item =>
                    item.title.toLowerCase().includes(q.toLowerCase()) ||
                    item.desc.toLowerCase().includes(q.toLowerCase())
                  );
                  if (res.length > 0) { setMobileOpen(false); router.push(res[0].href); }
                }
              }}
            />
          </div>

          <ul className="flex flex-col gap-1">
            {navLinks.filter(l => l.label !== "Home" && l.label !== "Industries").map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link block px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                className="nav-link w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
              >
                <span>Home</span>
                <svg className={`h-4 w-4 fill-current transition-transform duration-200 ${mobileHomeOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {mobileHomeOpen && (
                <ul className="ml-4 mt-1 flex flex-col gap-1">
                  {homeLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{item.icon}</span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button
                className="nav-link w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              >
                <span>Industries</span>
                <svg className={`h-4 w-4 fill-current transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {mobileIndustriesOpen && (
                <ul className="ml-4 mt-1 flex flex-col gap-1">
                  {industryLinks.map((ind) => (
                    <li key={ind.href}>
                      <Link
                        href={ind.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{ind.icon}</span>
                        {ind.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
