"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── Icons ── */
const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/>
  </svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  interest?: string;
  message?: string;
}

const FIELD_CLASS = "w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-200";
const FIELD_IDLE  = "border-white/10 focus:border-secondary/60 focus:bg-secondary/[0.03] focus:shadow-[0_0_0_3px_rgba(45,87,238,0.12)]";
const FIELD_ERROR = "border-red-500/50 focus:border-red-500/60 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]";

const trustBadges = [
  { label: "22+ Institutions" },
  { label: "4 UN SDGs" },
  { label: "0 Cost First Call" },
  { label: "2-Week Kick-off" },
];

export default function ContactPage() {
  const [form, setForm]         = useState<FormState>({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
  const [errors, setErrors]     = useState<FormErrors>({});
  const [loading, setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      import("aos/dist/aos.css");
      AOS.init({ once: true, duration: 800 });
    };
    initAOS();
  }, []);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (field === "message") setCharCount(e.target.value.length);
    if (errors[field as keyof FormErrors]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim())  e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.interest)     e.interest = "Please select a project interest";
    if (!form.message.trim()) e.message = "Please tell us a bit about your project";
    else if (form.message.trim().length < 20) e.message = "Message should be at least 20 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="overflow-hidden pb-0 pt-16 relative">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse 70% 50% at 15% 30%, rgba(99,102,241,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 60%, rgba(236,72,153,0.10) 0%, transparent 70%)" }} />
          <div className="container relative z-10">
            <div className="row justify-center">
              <div className="pt-6 text-center md:col-9 lg:col-7">
                <div data-aos="fade-up-sm" className="mx-auto mb-5 w-fit rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 flex items-center gap-2">
                  <span className="text-secondary text-xs">✦</span>
                  <span className="text-sm font-medium text-white/70">Start a Conversation</span>
                </div>
                <h1 data-aos="fade-up-sm" className="has-gradient mb-5 text-h2 lg:text-h1">
                  Let&apos;s Build Something Remarkable.
                </h1>
                <p data-aos="fade-up-sm" className="mb-8 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
                  Whether it&apos;s an MVP, an AI system, or a strategic partnership — tell us what you&apos;re working on. We read every message.
                </p>
                {/* Trust badges */}
                <div data-aos="fade-up-sm" className="flex flex-wrap justify-center gap-2 mb-2">
                  {trustBadges.map((b) => (
                    <span key={b.label} className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold text-white/45 uppercase tracking-widest">
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="section">
          <div className="container">
            <div className="row gy-8">

              {/* ── LEFT: Form ── */}
              <div className="lg:col-7" data-aos="fade-up-sm">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-24 gap-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03]">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                      <CheckIcon />
                    </div>
                    <div>
                      <h2 className="has-gradient text-3xl font-black mb-3">Message Received!</h2>
                      <p className="text-white/50 text-base max-w-xs mx-auto leading-relaxed">
                        Thank you, {form.name.split(" ")[0]}. We&apos;ll review your message and get back within 1–2 business days.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", interest: "", message: "" }); setCharCount(0); }}
                      className="btn btn-outline-white"
                    >
                      <span className="value"><span data-content="Send Another Message">Send Another Message</span></span>
                    </button>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-8 lg:p-10">
                    <h2 className="text-xl font-bold text-white mb-1">Send Us a Message</h2>
                    <p className="text-white/40 text-sm mb-8">Fields marked <span className="text-red-400">*</span> are required.</p>

                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name <span className="text-red-400">*</span></label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={update("name")}
                            placeholder="Jane Doe"
                            className={`${FIELD_CLASS} ${errors.name ? FIELD_ERROR : FIELD_IDLE}`}
                          />
                          {errors.name && <p className="text-red-400 text-[11px] mt-0.5">{errors.name}</p>}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address <span className="text-red-400">*</span></label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={update("email")}
                            placeholder="jane@company.com"
                            className={`${FIELD_CLASS} ${errors.email ? FIELD_ERROR : FIELD_IDLE}`}
                          />
                          {errors.email && <p className="text-red-400 text-[11px] mt-0.5">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Company + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Company</label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={update("company")}
                            placeholder="Your company"
                            className={`${FIELD_CLASS} ${FIELD_IDLE}`}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone (optional)</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={update("phone")}
                            placeholder="+91 999 666 4467"
                            className={`${FIELD_CLASS} ${FIELD_IDLE}`}
                          />
                        </div>
                      </div>

                      {/* Project Interest */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Project Interest <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <select
                            value={form.interest}
                            onChange={update("interest")}
                            className={`${FIELD_CLASS} ${errors.interest ? FIELD_ERROR : FIELD_IDLE} appearance-none cursor-pointer pr-10 ${!form.interest ? "text-white/20" : "text-white"}`}
                            style={{ WebkitAppearance: "none" }}
                          >
                            <option value="" disabled>Select an option</option>
                            <option value="mvp">MVP Development (90-Day Launchpad)</option>
                            <option value="healthcare">Healthcare AI — ClinAlly CDSS</option>
                            <option value="edtech">EdTech — PurpleGene® Adaptive Learning</option>
                            <option value="agriculture">Agriculture AI — LAND LORDZ</option>
                            <option value="pharma">Life Sciences &amp; Drug Discovery</option>
                            <option value="automation">Enterprise AI Automation</option>
                            <option value="embedded">Embedded Engineering Teams</option>
                            <option value="gcc">Micro-GCC Setup</option>
                            <option value="managed">Managed Services</option>
                            <option value="cto">Fractional CTO</option>
                            <option value="venture">Venture Studio Co-founding</option>
                            <option value="pals">PALS Life Sciences Training</option>
                            <option value="other">Other / Not Sure Yet</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-white/30">
                            <ChevronDown />
                          </div>
                        </div>
                        {errors.interest && <p className="text-red-400 text-[11px] mt-0.5">{errors.interest}</p>}
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Message <span className="text-red-400">*</span></label>
                          <span className={`text-[10px] tabular-nums ${charCount > 1000 ? "text-red-400" : "text-white/25"}`}>{charCount}/1000</span>
                        </div>
                        <textarea
                          value={form.message}
                          onChange={update("message")}
                          rows={5}
                          maxLength={1000}
                          placeholder="Tell us about your goals, timeline, and any constraints. The more context, the better we can prepare for our first call."
                          className={`${FIELD_CLASS} ${errors.message ? FIELD_ERROR : FIELD_IDLE} resize-none leading-relaxed`}
                        />
                        {errors.message && <p className="text-red-400 text-[11px] mt-0.5">{errors.message}</p>}
                      </div>

                      {/* Submit */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn btn-primary has-icon disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <span className="value">
                                <span data-content="Sending…">Sending…</span>
                              </span>
                              <span className="icon">
                                <span>
                                  <span>
                                    <svg className="animate-spin h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                                    </svg>
                                  </span>
                                  <span>
                                    <svg className="animate-spin h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                                    </svg>
                                  </span>
                                </span>
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="value">
                                <span data-content="Send Message">Send Message</span>
                              </span>
                              <span className="icon">
                                <span>
                                  <span><SendIcon /></span>
                                  <span><SendIcon /></span>
                                </span>
                              </span>
                            </>
                          )}
                        </button>
                        <p className="text-[11px] text-white/25 leading-relaxed">
                          No spam. We&apos;ll only use this to follow up on your enquiry.
                        </p>
                      </div>

                    </form>
                  </div>
                )}
              </div>

              {/* ── RIGHT: Info card ── */}
              <div className="lg:col-5" data-aos="fade-up-sm" data-aos-delay="120">
                <div className="sticky top-24 flex flex-col gap-5">

                  {/* Offices */}
                  <div className="rounded-3xl border border-secondary/18 bg-white/[0.025] p-7" style={{ boxShadow: "0 0 0 1px rgba(45,87,238,0.1), 0 24px 60px rgba(45,87,238,0.06)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/70 mb-1.5">Global Offices</p>
                    <h3 className="text-lg font-bold text-white mb-6">Where to Find Us</h3>

                    <div className="flex flex-col gap-4">
                      {[
                        { flag: "🇮🇳", city: "Hyderabad, India", addr: "3rd Floor, Neelagiri Complex, Kondapur, Hyderabad — 500084" },
                        { flag: "🇺🇸", city: "New Jersey, USA", addr: "Strategic Logistics & Operations Hub, Skillman, NJ" },
                      ].map((loc) => (
                        <div key={loc.city} className="flex gap-4 p-4 rounded-2xl border border-white/6 bg-white/[0.02]">
                          <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/15 flex items-center justify-center">
                            <span className="text-lg leading-none">{loc.flag}</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white mb-0.5">{loc.city}</p>
                            <p className="text-[11px] text-white/35 leading-relaxed">{loc.addr}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact links */}
                  <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-7">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 mb-5">Direct Contact</p>
                    <div className="flex flex-col gap-2">
                      {[
                        { href: "mailto:info@pragmatiq.in", icon: <EmailIcon />, label: "info@pragmatiq.in", color: "hover:text-secondary" },
                        { href: "tel:+919996664467", icon: <PhoneIcon />, label: "+91 999 666 4467", color: "hover:text-secondary" },
                        { href: "https://wa.me/919996664467", icon: <WhatsAppIcon />, label: "WhatsApp Us", color: "hover:text-emerald-400", ext: true },
                        { href: "https://www.linkedin.com/company/30900609/", icon: <LinkedInIcon />, label: "LinkedIn", color: "hover:text-sky-400", ext: true },
                      ].map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          target={item.ext ? "_blank" : undefined}
                          rel={item.ext ? "noopener noreferrer" : undefined}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/12 hover:bg-white/[0.04] text-sm text-white/50 ${item.color} transition-all duration-200 group`}
                        >
                          <span className="shrink-0 w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/8 transition-colors">
                            {item.icon}
                          </span>
                          {item.label}
                          {item.ext && <svg className="ml-auto w-3 h-3 opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Response indicator */}
                  <div className="flex items-start gap-3 px-5 py-4 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04]">
                    <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 8px rgba(52,211,153,0.8)" }} />
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">Typically respond in &lt; 24 hours</p>
                      <p className="text-xs text-white/35 leading-relaxed">Mon–Fri, 9am–7pm IST. For urgent matters, call or WhatsApp directly.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section pb-0">
          <div className="container">
            <div className="row justify-center mb-12">
              <div className="col-12 text-center" data-aos="fade-up-sm">
                <p className="text-xs uppercase tracking-widest text-white/35 mb-3">After You Submit</p>
                <h2 className="has-gradient mb-3">What Happens Next.</h2>
                <p className="text-white/45 text-base max-w-lg mx-auto">Every enquiry is reviewed by a human. Here&apos;s the typical path from first message to first sprint.</p>
              </div>
            </div>
            <div className="row gy-5">
              {[
                { step: "01", title: "We Read It", desc: "No bots, no auto-responders. A team member reviews every submission within one business day.", icon: "📬" },
                { step: "02", title: "Discovery Call", desc: "We schedule a 30-minute call to understand your goals, timeline, and constraints.", icon: "📞" },
                { step: "03", title: "Tailored Proposal", desc: "You receive a detailed proposal with team composition, approach, timeline, and investment.", icon: "📋" },
                { step: "04", title: "Kick Off", desc: "Once aligned, we move fast. Most engagements kick off within 2 weeks of agreement.", icon: "🚀" },
              ].map((item, i) => (
                <div key={item.step} className="md:col-6 lg:col-3" data-aos="fade-up-sm" data-aos-delay={`${i * 80}`}>
                  <div className="h-full p-7 rounded-3xl border border-white/8 bg-white/[0.015] hover:border-secondary/20 hover:bg-secondary/[0.02] transition-all duration-300 flex flex-col gap-4 group">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-xs font-black text-white/15 tracking-widest group-hover:text-secondary/30 transition-colors">{item.step}</span>
                    </div>
                    <p className="text-base font-bold text-white leading-snug">{item.title}</p>
                    <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section">
          <div className="container">
            <div className="row justify-center">
              <div className="lg:col-8" data-aos="fade-up-sm">
                <div className="text-center mb-10">
                  <p className="text-xs uppercase tracking-widest text-white/35 mb-3">FAQ</p>
                  <h2 className="has-gradient">Common Questions.</h2>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { q: "Do you work with early-stage startups?", a: "Yes — our Product Launchpad service is specifically designed for startups with validated ideas who need to ship an MVP in 90 days. We've taken companies from idea to live product in as little as 6 weeks." },
                    { q: "What industries do you focus on?", a: "Our primary focus is the HEAL sectors: Healthcare, Education, Agriculture, and Life Sciences. We also take selected engagements in fintech and enterprise SaaS where AI can create meaningful impact." },
                    { q: "Can we start with a small pilot before committing?", a: "Absolutely. Most Micro-GCC and Embedded Team engagements begin with a 30–60 day scoped pilot to establish fit and process alignment before scaling the team." },
                    { q: "Do you offer equity-for-services arrangements?", a: "For Venture Studio co-founders, yes — equity is part of our model. For service engagements, we typically work on a fixed or time-and-materials basis." },
                    { q: "Is the first consultation really free?", a: "Yes. The discovery call is complimentary with no obligation. We use that time to understand your goals and determine whether we're the right fit — that conversation has value regardless of what comes next." },
                  ].map((faq, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-white/12 transition-colors">
                      <p className="text-sm font-semibold text-white mb-2 flex items-start gap-2">
                        <span className="shrink-0 text-secondary mt-0.5">Q.</span>
                        {faq.q}
                      </p>
                      <p className="text-xs text-white/40 leading-relaxed pl-5">{faq.a}</p>
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
