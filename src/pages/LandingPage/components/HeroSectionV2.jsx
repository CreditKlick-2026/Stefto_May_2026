import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Users, BadgeCheck, Zap, Shield, Clock, Globe } from "lucide-react";

// ─── Service Category Cards (Stefto Actual Services) ─────────────────────────
const services = [
    {
        label: "Inbound Support",
        badge: "24/7 Available",
        badgeColor: "bg-green-500",
        emoji: "📞",
        href: "/inbound",
    },
    {
        label: "Outbound Calling",
        badge: "High Conversion",
        badgeColor: "bg-blue-500",
        emoji: "📤",
        href: "/outbound",
    },
    {
        label: "Back Office",
        badge: "Zero Errors",
        badgeColor: "bg-purple-500",
        emoji: "🗂️",
        href: "/back-office-support",
    },
    {
        label: "Digital Solutions",
        badge: "Omnichannel",
        badgeColor: "bg-orange-500",
        emoji: "💻",
        href: "/digital-debt-management",
    },
    {
        label: "Sales Support",
        badge: "Upto 3x ROI",
        badgeColor: "bg-rose-500",
        emoji: "📈",
        href: "/sales-support",
    },
    {
        label: "Retention & Persistency",
        badge: "Upto 85% Retention",
        badgeColor: "bg-teal-500",
        emoji: "🤝",
        href: "/retention-and-persistency",
    },
    {
        label: "Healthcare BPO",
        badge: "HIPAA Ready",
        badgeColor: "bg-red-500",
        emoji: "🏥",
        href: "/health-care",
    },
    {
        label: "Automotive",
        badge: "Aftersales BPO",
        badgeColor: "bg-slate-600",
        emoji: "🚗",
        href: "/automotive",
    },
];

// ─── Trust Badges (Stefto Real Stats) ────────────────────────────────────────
const trustBadges = [
    {
        icon: Users,
        iconColor: "text-[#2563eb]",
        bgColor: "bg-blue-50 border-blue-100",
        title: "85+ Premium Clients",
        sub: "served across India",
    },
    {
        icon: Zap,
        iconColor: "text-orange-500",
        bgColor: "bg-orange-50 border-orange-100",
        title: "Quick, easy &",
        sub: "hassle free onboarding",
    },
    {
        icon: BadgeCheck,
        iconColor: "text-green-600",
        bgColor: "bg-green-50 border-green-100",
        title: "100% SLA",
        sub: "fulfillment guarantee",
    },
    {
        icon: Shield,
        iconColor: "text-purple-600",
        bgColor: "bg-purple-50 border-purple-100",
        title: "98% Compliance",
        sub: "RBI & industry guidelines",
    },
];

// ─── Promo Slides (Premium redesign) ─────────────────────────────────────────
const promoSlides = [
    {
        grad: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)",
        accentColor: "rgba(96,165,250,0.25)",
        tag: "PILOT RUN — RISK FREE",
        emoji: "💰",
        headline: "Boost Recovery Rate",
        headlineSuffix: "from Day 1",
        sub: "Zero setup cost. Zero risk. Full SLA & RBI compliance guaranteed.",
        stats: [
            { value: "72h", label: "Go-Live" },
            { value: "₹0", label: "Setup Cost" },
            { value: "98%", label: "Compliance" },
        ],
        cta: "Start Free Pilot",
        ctaHref: "/contact-us",
    },
    {
        grad: "linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)",
        accentColor: "rgba(52,211,153,0.2)",
        tag: "DEDICATED VOICE TEAM",
        emoji: "🎯",
        headline: "100% Brand-Trained",
        headlineSuffix: "Agents",
        sub: "Agents trained on your CRM, scripts & brand tone.",
        stats: [
            { value: "8+", label: "Centers" },
            { value: "2,500+", label: "Agents" },
            { value: "CRM", label: "Integrated" },
        ],
        cta: "View Plans",
        ctaHref: "/#pricing",
    },
    {
        grad: "linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)",
        accentColor: "rgba(251,146,60,0.2)",
        tag: "OMNICHANNEL BPO",
        emoji: "🌐",
        headline: "Chat · Email · Voice",
        headlineSuffix: "Unified",
        sub: "One team. 25+ channels. 12 languages. PAN-India.",
        stats: [
            { value: "25+", label: "Channels" },
            { value: "12", label: "Languages" },
            { value: "24/7", label: "Uptime" },
        ],
        cta: "Know More",
        ctaHref: "/digital-debt-management",
    },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HeroSectionV2() {
    const [activeSlide, setActiveSlide] = useState(0);

    const next = useCallback(
        () => setActiveSlide((s) => (s + 1) % promoSlides.length),
        []
    );
    const prev = useCallback(
        () => setActiveSlide((s) => (s - 1 + promoSlides.length) % promoSlides.length),
        []
    );

    useEffect(() => {
        const t = setInterval(next, 4000);
        return () => clearInterval(t);
    }, [next]);

    return (
        <section className="relative pt-24 pb-14 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-white">

            {/* ── Radial blue glow: center → fades to white at edges ── */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37,99,235,0.09) 0%, rgba(37,99,235,0.04) 35%, rgba(255,255,255,0) 70%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            <div className="max-w-[1280px] mx-auto relative z-10">


                {/* ── Top Row: Headline Left + Promo Banner Right ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">

                    {/* LEFT: Headline + Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2563eb]" />
                            </span>
                            <span className="text-[12px] font-bold text-[#2563eb] tracking-wide">
                                Banks · NBFCs · Financial Institutions · Since 2007
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-normal text-slate-800 leading-[1.15] mb-4">
                            Trusted Debt Collection &amp;<br />
                            <span className="font-extrabold text-[#1e3a8a]">
                                Recovery Operations Partner
                            </span>
                        </h1>

                        {/* Sub-headline */}
                        <p className="text-[14px] sm:text-[15px] text-slate-500 leading-[1.65] max-w-[480px] mb-8 font-medium">
                            Helping financial institutions improve recovery performance through
                            professional borrower engagement, collections operations and
                            structured recovery workflows.
                        </p>

                        {/* Trust Badges Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {trustBadges.map((badge, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${badge.bgColor}`}>
                                        <badge.icon className={`w-5 h-5 ${badge.iconColor}`} />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-bold text-slate-800 leading-tight">{badge.title}</p>
                                        <p className="text-[11px] text-slate-500">{badge.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT: Promo Banner Carousel — Premium Design */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative rounded-[24px] overflow-hidden shadow-2xl h-[300px] sm:h-[320px] select-none"
                    >
                        <AnimatePresence mode="wait">
                            {promoSlides.map((slide, i) =>
                                i === activeSlide ? (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.97 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.45, ease: "easeInOut" }}
                                        className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7"
                                        style={{ background: slide.grad }}
                                    >
                                        {/* Decorative circles */}
                                        <div aria-hidden="true" style={{
                                            position: "absolute", top: "-40px", right: "-40px",
                                            width: 200, height: 200, borderRadius: "50%",
                                            background: slide.accentColor,
                                            filter: "blur(40px)",
                                            pointerEvents: "none",
                                        }} />
                                        <div aria-hidden="true" style={{
                                            position: "absolute", bottom: "-30px", left: "20%",
                                            width: 140, height: 140, borderRadius: "50%",
                                            background: slide.accentColor,
                                            filter: "blur(30px)",
                                            pointerEvents: "none",
                                        }} />
                                        {/* Subtle grid pattern */}
                                        <div aria-hidden="true" style={{
                                            position: "absolute", inset: 0,
                                            backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                                            backgroundSize: "28px 28px",
                                            pointerEvents: "none",
                                        }} />

                                        {/* ── Row 1: Tag + Emoji ── */}
                                        <div className="flex items-start justify-between relative z-10">
                                            <span className="inline-block text-[9px] font-black tracking-[0.15em] text-white/60 uppercase border border-white/15 rounded-full px-3 py-1 backdrop-blur-sm bg-white/5">
                                                {slide.tag}
                                            </span>
                                            <motion.span
                                                animate={{ y: [0, -6, 0] }}
                                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                                className="text-[56px] sm:text-[64px] leading-none drop-shadow-lg"
                                            >
                                                {slide.emoji}
                                            </motion.span>
                                        </div>

                                        {/* ── Row 2: Headline ── */}
                                        <div className="relative z-10">
                                            <h3 className="text-white font-black leading-none tracking-tight mb-1" style={{ fontSize: "clamp(22px,4vw,32px)" }}>
                                                {slide.headline}
                                            </h3>
                                            <span className="text-white/50 font-semibold text-[13px]">{slide.headlineSuffix}</span>
                                            <p className="text-white/75 text-[13px] leading-snug mt-2 max-w-[280px]">{slide.sub}</p>
                                        </div>

                                        {/* ── Row 3: Stat Pills ── */}
                                        <div className="flex items-center gap-2 relative z-10">
                                            {slide.stats.map((s, si) => (
                                                <div key={si} className="flex flex-col items-center px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                                                    <span className="text-white text-[14px] font-black leading-none">{s.value}</span>
                                                    <span className="text-white/55 text-[9px] font-semibold uppercase tracking-wide mt-0.5">{s.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* ── Row 4: CTA + Dots ── */}
                                        <div className="flex items-center justify-between relative z-10">
                                            <a
                                                href={slide.ctaHref}
                                                className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] text-[12px] font-extrabold px-5 py-2.5 rounded-full no-underline transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.03] shadow-lg"
                                            >
                                                {slide.cta} <ChevronRight className="w-3.5 h-3.5" />
                                            </a>

                                            {/* Dots */}
                                            <div className="flex gap-1.5">
                                                {promoSlides.map((_, di) => (
                                                    <button
                                                        key={di}
                                                        onClick={() => setActiveSlide(di)}
                                                        aria-label={`Slide ${di + 1}`}
                                                        className={`rounded-full transition-all duration-300 ${di === activeSlide ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                                            <motion.div
                                                key={`progress-${i}`}
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 4, ease: "linear" }}
                                                className="h-full bg-white/40 rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                ) : null
                            )}
                        </AnimatePresence>

                        {/* Arrow buttons */}
                        <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all z-20">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all z-20">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

                {/* ── Key Stats Strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-5 mb-12 border-y border-slate-100"
                >
                    {[
                        { value: "98%", label: "Compliance Score", color: "text-[#2563eb]" },
                        { value: "2,500+", label: "Trained Agents", color: "text-green-600" },
                        { value: "8+", label: "PAN-India Centers", color: "text-orange-500" },
                        { value: "12", label: "Languages Supported", color: "text-purple-600" },
                        { value: "24/7", label: "Live Operations", color: "text-rose-500" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className={`text-[22px] font-black ${stat.color}`}>{stat.value}</p>
                            <p className="text-[11px] text-slate-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* ── Trusted By + Review Badges ── */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-5 mb-10 bg-slate-50 rounded-2xl border border-slate-100 px-4"
                >

                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        {/* G2 */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
                            {/* G2 Brand Logo SVG */}
                            <svg width="22" height="22" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="80" height="80" rx="12" fill="#FF492C" />
                                <path d="M40 12L49.5 28H69L54 42L59.5 60L40 49L20.5 60L26 42L11 28H30.5L40 12Z" fill="white" />
                                <text x="50%" y="72%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="Arial">G2</text>
                            </svg>
                            <div className="flex flex-col leading-none">
                                <div className="flex gap-[1px]">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-2.5 h-2.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold text-slate-700 mt-0.5">4.8 <span className="font-normal text-slate-400">(420+)</span></span>
                            </div>
                        </div>

                        {/* Capterra */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
                            {/* Capterra Brand Logo SVG */}
                            <svg width="22" height="22" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="80" height="80" rx="12" fill="#FF3D2E" />
                                <path d="M10 40H40V10L10 40Z" fill="#FF9D28" />
                                <path d="M40 10V40H70L40 10Z" fill="#68C5ED" />
                                <path d="M40 40H70L40 70V40Z" fill="#044D80" />
                                <path d="M10 40L40 40V70L10 40Z" fill="#E54747" />
                            </svg>
                            <div className="flex flex-col leading-none">
                                <div className="flex gap-[1px]">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-2.5 h-2.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold text-slate-700 mt-0.5">4.7 <span className="font-normal text-slate-400">(310+)</span></span>
                            </div>
                        </div>

                        {/* Trustpilot */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
                            {/* Trustpilot Brand Logo SVG */}
                            <svg width="22" height="22" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="80" height="80" rx="12" fill="#00B67A" />
                                <path d="M40 10L47.5 33H72L53 47L60 70L40 56L20 70L27 47L8 33H32.5L40 10Z" fill="white" />
                            </svg>
                            <div className="flex flex-col leading-none">
                                <div className="flex gap-[1px]">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-2.5 h-2.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold text-slate-700 mt-0.5">4.9 <span className="font-normal text-slate-400">(1.2k+)</span></span>
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* ── Service Cards Grid ── */}
                <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">
                        Explore Our Services
                    </p>


                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
                        {services.map((svc, i) => (
                            <motion.a
                                key={i}
                                href={svc.href}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04, duration: 0.4 }}
                                className="group flex flex-col items-center gap-2 p-3 pt-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#2563eb]/30 hover:shadow-lg transition-all duration-200 cursor-pointer no-underline relative"
                            >
                                {/* Badge */}
                                <span className={`absolute -top-2 left-1/2 -translate-x-1/2 text-white text-[8.5px] font-black tracking-wide px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm ${svc.badgeColor}`}>
                                    {svc.badge}
                                </span>

                                {/* Emoji Icon */}
                                <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[28px] group-hover:shadow-md group-hover:scale-110 transition-all duration-200">
                                    {svc.emoji}
                                </div>

                                {/* Label */}
                                <span className="text-[11px] sm:text-[12px] font-semibold text-slate-700 text-center leading-tight group-hover:text-[#2563eb] transition-colors">
                                    {svc.label}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
