import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    Bot,
    BarChart3,
    Users,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    TrendingUp,
} from "lucide-react";

const slides = [
    {
        id: 0,
        badge: "Outbound Support",
        title: "High-volume outreach.",
        subtitle: "Built for conversions.",
        description:
            "Launch outbound telesales, follow-up calls, feedback surveys, and payment reminders. Manage lead assignments and dialing lists dynamically with high connect rates.",
        accent: "#3b82f6",
        accentLight: "#3b82f615",
        icon: Send,
        stats: [
            { label: "Avg Connect Rate", value: "78.4%" },
            { label: "Conversion Rate", value: "14.2%" },
            { label: "Daily Calls/Agent", value: "350+" },
        ],
        visual: (
            <div className="flex flex-col gap-2.5 w-full max-w-[260px]">
                {[
                    { name: "Priya M.", msg: "Call connected - Interested", time: "9:41 AM", read: true },
                    { name: "Rahul K.", msg: "Follow-up scheduled", time: "9:42 AM", read: true },
                    { name: "Sneha T.", msg: "Call connected - Disconnected", time: "9:43 AM", read: false },
                ].map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                        className="bg-white rounded-xl px-3.5 py-2.5 flex items-center gap-3 border border-slate-100 shadow-md"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center shrink-0">
                            <span className="text-white text-[11px] font-bold">{m.name[0]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold text-slate-700 truncate">{m.name}</p>
                            <p className="text-[10px] text-slate-400 truncate">{m.msg}</p>
                        </div>
                        <div className="text-right shrink-0">
                            <p className="text-[9px] text-slate-400">{m.time}</p>
                            {m.read && <CheckCircle2 className="w-3 h-3 text-[#3b82f6] ml-auto mt-0.5" />}
                        </div>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-[#3b82f6] text-white text-[10px] font-semibold rounded-xl px-3.5 py-2 text-center shadow-[0_4px_12px_rgba(59,130,246,0.35)]"
                >
                    ✓ Outbound campaign synced: 4,200 leads
                </motion.div>
            </div>
        ),
    },
    {
        id: 1,
        badge: "Smart Assist",
        title: "Automated support routing.",
        subtitle: "Available 24 / 7.",
        description:
            "Intelligent IVR and chat routing to screen customers, answer quick FAQs, and qualify leads before transferring to specialized human agents.",
        accent: "#8B5CF6",
        accentLight: "#8B5CF615",
        icon: Bot,
        stats: [
            { label: "Queries Routed", value: "85%" },
            { label: "Wait Time Reduced", value: "70%" },
            { label: "Transfer Accuracy", value: "98.9%" },
        ],
        visual: (
            <div className="flex flex-col gap-2 w-full max-w-[260px]">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="self-start bg-slate-100 border border-slate-200/50 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[180px]"
                >
                    <p className="text-[11px] text-slate-700">I need help with my billing invoice 💳</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="self-end bg-[#8B5CF6] rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[200px]"
                >
                    <p className="text-[11px] text-white">Understood! Let me route you to our Billing Specialist team.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="self-start bg-slate-100 border border-slate-200/50 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[140px]"
                >
                    <p className="text-[11px] text-slate-700">Perfect, thank you! 👍</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex gap-1.5"
                >
                    {["Connect Agent", "View Invoice"].map((b) => (
                        <div
                            key={b}
                            className="flex-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg py-1.5 text-center text-[9px] font-semibold text-[#8B5CF6]"
                        >
                            {b}
                        </div>
                    ))}
                </motion.div>
            </div>
        ),
    },
    {
        id: 2,
        badge: "KPI Analytics",
        title: "Performance analytics.",
        subtitle: "Track live.",
        description:
            "Real-time dashboards tracking agent performance metrics — call volume, SLA adherence, average handling times (AHT), and CSAT scores.",
        accent: "#F97316",
        accentLight: "#F9731615",
        icon: BarChart3,
        stats: [
            { label: "Dashboard latency", value: "< 1s" },
            { label: "Operational KPIs", value: "25+" },
            { label: "Reports exported", value: "PDF / Excel" },
        ],
        visual: (
            <div className="w-full max-w-[260px] space-y-3">
                <div className="flex gap-2">
                    {[
                        { label: "Calls Handled", value: "1.2M", color: "#F97316" },
                        { label: "CSAT score", value: "95%", color: "#3b82f6" },
                    ].map((s) => (
                        <div key={s.label} className="flex-1 bg-white border border-slate-100 rounded-xl p-2.5 shadow-md">
                            <p className="text-[10px] text-slate-400 mb-0.5">{s.label}</p>
                            <p className="text-[16px] font-bold tracking-tight" style={{ color: s.color }}>{s.value}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-md">
                    <p className="text-[10px] text-slate-400 mb-2.5">Call Queue Performance</p>
                    <div className="flex items-end gap-1.5 h-16">
                        {[35, 55, 40, 75, 50, 90, 65, 85].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: i * 0.07 + 0.3, duration: 0.5, type: "spring" }}
                                className="flex-1 rounded-sm"
                                style={{ background: i === 5 ? "#F97316" : "#F9731622" }}
                            />
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-2 bg-[#F97316]/10 rounded-xl px-3 py-2"
                >
                    <TrendingUp className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                    <p className="text-[10px] text-[#F97316] font-semibold">+18% CSAT increase vs last week</p>
                </motion.div>
            </div>
        ),
    },
    {
        id: 3,
        badge: "Workforce",
        title: "Align your agents.",
        subtitle: "Scale seamlessly.",
        description:
            "Assign queues to agent sets based on skill tags, monitor attendance, set custom SLAs, and perform compliance checks with automatic call recordings.",
        accent: "#0071e3",
        accentLight: "#0071e315",
        icon: Users,
        stats: [
            { label: "Max Active Agents", value: "Unlimited" },
            { label: "Avg Handling Time", value: "↓ 40%" },
            { label: "Manager CSAT Rate", value: "96%" },
        ],
        visual: (
            <div className="w-full max-w-[260px] space-y-2">
                {[
                    { agent: "Priya", tag: "Outbound Sales", msg: "Outbound telesales queue active", color: "#0071e3", online: true },
                    { agent: "Rahul", tag: "Inbound Support", msg: "Inbound customer helpdesk", color: "#F97316", online: true },
                    { agent: "Sneha", tag: "QA & Audit", msg: "Call compliance review pending", color: "#8B5CF6", online: false },
                ].map((c, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.18 + 0.2 }}
                        className="bg-white border border-slate-100 text-slate-800 rounded-xl p-3 shadow-md flex items-center gap-2.5"
                    >
                        <div className="relative shrink-0">
                            <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
                                style={{ background: c.color }}
                            >
                                {c.agent[0]}
                            </div>
                            <span
                                className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ${c.online ? "bg-[#3b82f6]" : "bg-[#d2d2d7]"}`}
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold text-slate-700">{c.agent}</p>
                            <p className="text-[9px] text-slate-400 truncate">{c.msg}</p>
                        </div>
                        <span
                            className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full shrink-0"
                            style={{ background: `${c.color}15`, color: c.color }}
                        >
                            {c.tag}
                        </span>
                    </motion.div>
                ))}
            </div>
        ),
    },
];

const AUTO_PLAY_MS = 4500;

export default function FeatureSlider() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);

    const go = useCallback(
        (idx) => {
            setDirection(idx > active ? 1 : -1);
            setActive(idx);
        },
        [active]
    );

    const next = useCallback(() => go((active + 1) % slides.length), [active, go]);
    const prev = useCallback(() => go((active - 1 + slides.length) % slides.length), [active, go]);

    useEffect(() => {
        if (paused) return;
        timerRef.current = setInterval(next, AUTO_PLAY_MS);
        return () => clearInterval(timerRef.current);
    }, [next, paused]);

    const slide = slides[active];

    const variants = {
        enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
        center: { opacity: 1, x: 0 },
        exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
    };

    return (
        <section className="hidden md:block py-12 md:py-20 relative z-10 bg-white">
            <div className="max-w-[980px] mx-auto px-4 md:px-6 relative">
                {/* Slider card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}

                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    className="relative bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-xl text-slate-800"
                >
                    {/* Progress bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100 z-20">
                        {!paused && (
                            <motion.div
                                key={active}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: AUTO_PLAY_MS / 1000, ease: "linear" }}
                                className="h-full rounded-full"
                                style={{ background: slide.accent }}
                            />
                        )}
                    </div>

                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={active}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] md:min-h-[380px]"
                        >
                            {/* Left — content */}
                            <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-12">
                                {/* Badge */}
                                <div
                                    className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-[11px] font-semibold mb-5"
                                    style={{ background: slide.accentLight, color: slide.accent }}
                                >
                                    <slide.icon className="w-3 h-3" />
                                    {slide.badge}
                                </div>

                                <h3 className="text-[28px] md:text-[34px] font-bold text-[#142b54] tracking-[-0.025em] leading-[1.1] mb-1">
                                    {slide.title}
                                </h3>
                                <h3
                                    className="text-[28px] md:text-[34px] font-bold tracking-[-0.025em] leading-[1.1] mb-5"
                                    style={{ color: slide.accent }}
                                >
                                    {slide.subtitle}
                                </h3>

                                <p className="text-[14px] md:text-[15px] text-slate-500 leading-[1.6] mb-8 max-w-[340px]">
                                    {slide.description}
                                </p>

                                {/* Stats row */}
                                <div className="flex gap-5">
                                    {slide.stats.map((s) => (
                                        <div key={s.label}>
                                            <p
                                                className="text-[17px] font-bold tracking-tight leading-none mb-0.5"
                                                style={{ color: slide.accent }}
                                            >
                                                {s.value}
                                            </p>
                                            <p className="text-[10px] text-slate-400 leading-tight">{s.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right — visual */}
                            <div
                                className="hidden lg:flex items-center justify-center p-10 rounded-none relative overflow-hidden"
                                style={{ background: `linear-gradient(135deg, ${slide.accentLight} 0%, #ffffff 100%)` }}
                            >
                                {/* Decorative ring */}
                                <div
                                    className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-[0.06]"
                                    style={{ background: slide.accent }}
                                />
                                <div
                                    className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-[0.04]"
                                    style={{ background: slide.accent }}
                                />
                                {slide.visual}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Arrow controls */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white 
                                   shadow-lg border border-slate-100
                                   flex items-center justify-center hover:bg-slate-50
                                   transition-all duration-200 group"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-4 h-4 text-slate-600 group-hover:text-[#1c469d] group-hover:scale-110 transition-all" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white 
                                   shadow-lg border border-slate-100
                                   flex items-center justify-center hover:bg-slate-50
                                   transition-all duration-200 group"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-[#1c469d] group-hover:scale-110 transition-all" />
                    </button>
                </motion.div>

                {/* Dot nav + tab pills */}
                <div className="flex flex-col items-center gap-5 mt-7">
                    {/* Tab pills */}
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                        {slides.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => go(i)}
                                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-semibold
                                            transition-all duration-250 border ${
                                    active === i
                                        ? "text-white border-transparent shadow-md"
                                        : "text-slate-500 border-slate-200 bg-white hover:border-slate-300 hover:text-slate-700 hover:bg-slate-50/50 shadow-sm"
                                }`}
                                style={active === i ? { background: s.accent } : {}}
                            >
                                <s.icon className="w-3 h-3" />
                                {s.badge}
                            </button>
                        ))}
                    </div>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-2">
                        {slides.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => go(i)}
                                className="transition-all duration-300 rounded-full"
                                style={{
                                    width: active === i ? 20 : 6,
                                    height: 6,
                                    background: active === i ? s.accent : "rgba(0,0,0,0.15)",
                                }}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
