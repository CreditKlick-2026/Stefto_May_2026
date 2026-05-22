import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Check,
    X,
    Crown,
    Trophy,
    ArrowRight,
    Zap,
    Shield,
    ChevronRight,
    TrendingUp,
    Users,
    BadgeCheck,
} from "lucide-react";

// ─── Animated Counter ───────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = parseInt(target);
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function ComparisonSection() {
    const [hoveredRow, setHoveredRow] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const competitors = [
        { name: "Stefto", isUs: true },
        { name: "Traditional BPO", isUs: false },
        { name: "In-House Support", isUs: false },
    ];

    const features = [
        { name: "Outbound Telesales", Stefto: true, traditional: true, inhouse: true, category: "core" },
        { name: "Inbound Support Assistance", Stefto: true, traditional: true, inhouse: true, category: "core" },
        { name: "Setup Duration", Stefto: "Under 1 Wk", traditional: "1-2 Months", inhouse: "2-3 Months", category: "core" },
        { name: "Pay-Per-Seat Flexibility", Stefto: true, traditional: false, inhouse: false, category: "exclusive", highlight: true },
        { name: "Dedicated SLA & Quality Audits", Stefto: true, traditional: true, inhouse: false, category: "features" },
        { name: "24/7 Operations Coverage", Stefto: true, traditional: true, inhouse: false, category: "features" },
        { name: "Live Performance Dashboard", Stefto: true, traditional: false, inhouse: false, category: "exclusive", highlight: true },
        { name: "Agent Training Overhead", Stefto: "₹0", traditional: "₹0", inhouse: "High Cost", category: "pricing" },
        { name: "No High Minimum Seats", Stefto: true, traditional: false, inhouse: true, category: "exclusive", highlight: true },
        { name: "Priority Account Manager", Stefto: true, traditional: false, inhouse: false, category: "support", highlight: true },
        { name: "Infrastructure Cost", Stefto: "₹0", traditional: "₹0", inhouse: "High CAPEX", category: "pricing" },
    ];

    const stats = [
        { icon: Users, value: "95", suffix: "%", label: "Average CSAT Score", color: "#3b82f6" },
        { icon: TrendingUp, value: "60", suffix: "%", label: "Lower Operating Cost", color: "#3b82f6" },
        { icon: Shield, value: "99", suffix: ".9%", label: "SLA Adherence Rate", color: "#8b5cf6" },
        { icon: Zap, value: "40", suffix: "%", label: "Conversion Rate Boost", color: "#f59e0b" },
    ];

    const steftoScore = features.filter(f => f.Stefto === true || f.Stefto === "Under 1 Wk" || f.Stefto === "₹0").length;
    const scores = {
        traditional: features.filter(f => f.traditional === true || f.traditional === "₹0").length,
        inhouse: features.filter(f => f.inhouse === true).length,
    };

    const renderValue = (value, isStefto = false) => {
        if (value === true) {
            return (
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isStefto
                    ? "bg-[#1c469d] shadow-[0_2px_8px_rgba(28,70,157,0.25)]"
                    : "bg-slate-100 border border-slate-200"
                    }`}>
                    <Check className={`w-3.5 h-3.5 ${isStefto ? "text-white" : "text-slate-500"}`} strokeWidth={3} />
                </div>
            );
        }
        if (value === false) {
            return (
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-red-50 border border-red-200/60">
                    <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
                </div>
            );
        }
        return (
            <span className={`text-[10px] sm:text-[11px] md:text-[13px] font-semibold tracking-tight ${isStefto
                ? "text-[#1c469d] bg-blue-50 border border-blue-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full"
                : "text-slate-400 bg-slate-50 border border-slate-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full"
                }`}>
                {value}
            </span>
        );
    };

    return (
        <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
            {/* Ambient gradients */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] opacity-[0.03]"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)" }} />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] opacity-[0.02]"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)" }} />
            </div>

            <div className="relative max-w-[1200px] mx-auto px-6">

                {/* ── Section Header ── */}
                <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mb-2 sm:mb-3"
                    >
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[13px] font-bold text-[#1c469d] tracking-wide uppercase">
                            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500" />
                            </span>
                            Why 10,000+ Businesses Choose Us
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.08, duration: 0.65 }}
                        className="text-[26px] sm:text-4xl md:text-[48px] font-bold text-[#142b54] tracking-[-0.04em] leading-[1.05] mb-2 sm:mb-3"
                    >
                        See How We{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1c469d] via-[#3b82f6] to-blue-500">
                            Dominate
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.18, duration: 0.6 }}
                        className="text-[13px] sm:text-base md:text-[17px] text-slate-500 leading-[1.4] px-4 sm:px-0"
                    >
                        Head-to-head operational breakdown against traditional agencies and in-house support.{" "}
                        <span className="text-[#1c469d] font-semibold">Spoiler: We win.</span>
                    </motion.p>
                </div>

                {/* ── Animated Stats Row ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25, duration: 0.7 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="relative group bg-slate-50/50 rounded-xl p-3 sm:p-4 md:p-5 border border-slate-200/60 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
                        >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundColor: `${stat.color}10` }}>
                                <stat.icon className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: stat.color }} />
                            </div>
                            <div className="text-[17px] sm:text-xl md:text-2xl font-bold text-[#142b54] tracking-tight leading-tight">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-[10px] sm:text-[13px] text-slate-500 mt-0.5 sm:mt-1 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Comparison Table ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35, duration: 0.8, type: "spring", stiffness: 60 }}
                    className="relative"
                >
                    {/* Mobile scroll hint */}
                    <div className="lg:hidden text-center mb-3">
                        <span className="inline-flex items-center gap-1.5 text-[12px] text-slate-600 bg-slate-100 rounded-full px-3 py-1.5 border border-slate-200/60 shadow-sm">
                            <ChevronRight className="w-3 h-3 animate-pulse" />
                            Swipe to compare
                        </span>
                    </div>

                    <div className="overflow-x-auto rounded-2xl scrollbar-hide">
                        <div className="bg-white rounded-2xl border border-slate-200/80 min-w-[480px] sm:min-w-[720px] lg:min-w-0 overflow-hidden shadow-lg">

                            {/* Table Header */}
                            <div className="grid grid-cols-4 bg-slate-50/80" style={{ borderBottom: "1px solid rgba(226,232,240,0.8)" }}>
                                <div className="px-3 sm:px-5 py-2 sm:py-4 flex items-center" style={{ borderRight: "1px solid rgba(226,232,240,0.8)" }}>
                                    <span className="text-[10px] sm:text-[12px] font-bold text-slate-400 uppercase tracking-[0.06em]">Features</span>
                                </div>
                                {competitors.map((comp, idx) => (
                                    <div key={idx}
                                        className={`px-2 sm:px-4 py-2 sm:py-4 text-center relative flex flex-col items-center justify-center ${comp.isUs ? "bg-blue-50/[0.15]" : ""}`}
                                        style={{ borderRight: idx < competitors.length - 1 ? "1px solid rgba(226,232,240,0.8)" : "none" }}>
                                        {comp.isUs && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="absolute -top-0 left-1/2 -translate-x-1/2 translate-y-[-50%] px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#1c469d] to-[#3b82f6] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm border border-slate-200/50"
                                            >
                                                <span className="flex items-center gap-0.5 sm:gap-1">
                                                    <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" /> Best
                                                </span>
                                            </motion.div>
                                        )}
                                        <span className={`font-semibold text-[12px] sm:text-[14px] ${comp.isUs ? "text-[#1c469d] font-bold" : "text-slate-500"}`}>
                                            {comp.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Table Body */}
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.4 + idx * 0.03 }}
                                    onMouseEnter={() => setHoveredRow(idx)}
                                    onMouseLeave={() => setHoveredRow(null)}
                                    className="grid grid-cols-4 transition-colors duration-150"
                                    style={{
                                        borderBottom: idx < features.length - 1 ? "1px solid rgba(226,232,240,0.6)" : "none",
                                        backgroundColor: hoveredRow === idx ? "rgba(248,250,252,0.8)" : "transparent",
                                    }}
                                >
                                    <div className="px-3 sm:px-5 py-2 sm:py-3.5 flex items-center gap-1.5 sm:gap-2" style={{ borderRight: "1px solid rgba(226,232,240,0.6)" }}>
                                        {feature.highlight && (
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1c469d]" />
                                        )}
                                        <span className="text-[11px] sm:text-[13px] font-medium text-slate-700 leading-tight">
                                            {feature.name}
                                        </span>
                                    </div>
                                    <div
                                        className="px-1.5 sm:px-4 py-2 sm:py-3.5 flex items-center justify-center"
                                        style={{
                                            borderRight: "1px solid rgba(226,232,240,0.6)",
                                            backgroundColor: hoveredRow === idx ? "rgba(28,70,157,0.05)" : "rgba(28,70,157,0.02)",
                                        }}
                                    >
                                        {renderValue(feature.Stefto, true)}
                                    </div>
                                    <div className="px-1.5 sm:px-4 py-2 sm:py-3.5 flex items-center justify-center" style={{ borderRight: "1px solid rgba(226,232,240,0.6)" }}>
                                        {renderValue(feature.traditional)}
                                    </div>
                                    <div className="px-1.5 sm:px-4 py-2 sm:py-3.5 flex items-center justify-center">
                                        {renderValue(feature.inhouse)}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Score Footer */}
                            <div className="grid grid-cols-4 bg-slate-50/50" style={{ borderTop: "1px solid rgba(226,232,240,0.8)" }}>
                                <div className="px-3 sm:px-5 py-3 sm:py-4 flex items-center" style={{ borderRight: "1px solid rgba(226,232,240,0.8)" }}>
                                    <span className="text-[10px] sm:text-[12px] font-bold text-slate-400 uppercase tracking-[0.06em]">Score</span>
                                </div>
                                <div className="px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-center bg-blue-50" style={{ borderRight: "1px solid rgba(226,232,240,0.8)" }}>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <span className="text-base sm:text-xl md:text-2xl font-bold text-[#1c469d]">{steftoScore}/{features.length}</span>
                                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-[#1c469d]" />
                                    </div>
                                </div>
                                {["traditional", "inhouse"].map((key, idx) => (
                                    <div key={key} className="px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-center" style={{ borderRight: idx < 1 ? "1px solid rgba(226,232,240,0.8)" : "none" }}>
                                        <span className="text-sm sm:text-base md:text-lg font-bold text-slate-400">{scores[key]}/{features.length}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Exclusive Badge ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2 sm:px-0"
                >
                    {["Live Operational Dashboard", "No Minimum Seat Locks", "Custom SLA Agreements"].map((item, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-[13px] font-medium text-slate-700 bg-slate-50 border border-slate-200/80 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                            <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1c469d]" />
                            {item}
                            <span className="text-[8px] sm:text-[10px] font-bold text-[#1c469d] bg-blue-50 rounded px-1 sm:px-1.5 py-0.5 ml-0.5 sm:ml-1 border border-blue-100 uppercase">Only Us</span>
                        </span>
                    ))}
                </motion.div>

                {/* ── Bottom CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="mt-14 md:mt-20 text-center"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/login"
                            className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-gradient-to-r from-[#1c469d] to-[#3b82f6] text-white text-[17px] font-bold tracking-[-0.01em] hover:opacity-95 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                        >
                            Go to Dashboard
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="/contact"
                            className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full text-[#1c469d] text-[17px] font-semibold tracking-[-0.01em] hover:text-[#142b54] hover:underline transition-colors duration-200"
                        >
                            Talk to Sales
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-6 text-[13px] text-slate-500">
                        {["Free migration", "No credit card", "7‑day trial"].map((item, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <span className="w-px h-3 bg-slate-200" />}
                                <span className="inline-flex items-center gap-1.5">
                                    <Check className="w-3.5 h-3.5 text-[#3b82f6]" />
                                    {item}
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
);
}
