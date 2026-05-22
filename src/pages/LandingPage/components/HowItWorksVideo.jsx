import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    MessageSquare,
    Send,
    Bot,
    BarChart3,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";


const STEP_DURATION = 5000; // 5s per step

const steps = [
    {
        number: "01",
        title: "Sync Your CRM & Channels",
        description: "Link your customer records, support platforms, and calling systems directly to the Stefto ecosystem.",
        icon: MessageSquare,
        accent: "#3b82f6",
        accentBg: "rgba(59,130,246,0.12)",
    },
    {
        number: "02",
        title: "Configure Logic & AI",
        description: "Activate voice triage, chat screening, and automated logic to pre-qualify inbound customer interactions.",
        icon: Bot,
        accent: "#8B5CF6",
        accentBg: "rgba(139,92,246,0.12)",
    },
    {
        number: "03",
        title: "Deploy Expert Teams",
        description: "Match customer inquiries to dedicated, pre-trained support agents and professional telecallers.",
        icon: Send,
        accent: "#ec4899",
        accentBg: "rgba(236,72,153,0.12)",
    },
    {
        number: "04",
        title: "Track, Analyze & Scale",
        description: "Review live SLA counters, call recordings, agent answer rates, and CSAT scores from one dashboard.",
        icon: BarChart3,
        accent: "#F97316",
        accentBg: "rgba(249,115,22,0.12)",
    },
];

// ─── Circular Progress Ring ────────────────────────────────────────────────
function ProgressRing({ progress, size = 48, strokeWidth = 2.5, color }) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full -rotate-90">
            <circle
                cx={size / 2} cy={size / 2} r={radius}
                fill="none" stroke="currentColor" strokeWidth={strokeWidth}
                className="text-slate-200/60"
            />
            <circle
                cx={size / 2} cy={size / 2} r={radius}
                fill="none" stroke={color} strokeWidth={strokeWidth}
                strokeDasharray={circumference} strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 100ms linear" }}
            />
        </svg>
    );
}

// ─── Step Images ───────────────────────────────────────────────────────────
const stepImages = [
    {
        src: "https://res.cloudinary.com/dkzzt7wbj/image/upload/v1779094371/ChatGPT_Image_May_18_2026_02_22_36_PM_aznizp.png",
        alt: "Connect WhatsApp — QR Code Scan Screen",
    },
    {
        src: "https://res.cloudinary.com/dkzzt7wbj/image/upload/v1779094264/ChatGPT_Image_May_18_2026_02_19_34_PM_kpsskk.png",
        alt: "Import Contacts — CSV Upload Dashboard",
    },
    {
        src: "https://res.cloudinary.com/dkzzt7wbj/image/upload/v1779094265/ChatGPT_Image_May_18_2026_02_20_36_PM_alhwxa.png",
        alt: "Create Campaigns — Template Builder",
    },
    {
        src: "https://res.cloudinary.com/dkzzt7wbj/image/upload/v1779094336/ChatGPT_Image_May_18_2026_02_21_52_PM_wyed4v.png",
        alt: "Track & Scale — Analytics Dashboard",
    },
];

function StepVisual({ stepIndex }) {
    const img = stepImages[stepIndex];
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center"
        >
            <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain rounded-2xl"
                loading="lazy"
            />
        </motion.div>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function HowItWorksVideo() {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
    const intervalRef = useRef(null);

    // Auto-play timer
    useEffect(() => {
        if (!isInView || isPaused) return;

        const tick = 50; // ms
        intervalRef.current = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setActiveStep(s => (s + 1) % steps.length);
                    return 0;
                }
                return prev + (tick / STEP_DURATION) * 100;
            });
        }, tick);

        return () => clearInterval(intervalRef.current);
    }, [isInView, isPaused, activeStep]);

    const handleStepClick = useCallback((idx) => {
        setActiveStep(idx);
        setProgress(0);
    }, []);

    const step = steps[activeStep];

    return (
        <section ref={sectionRef} id="how-it-works" className="relative pt-12 md:pt-32 pb-16 md:pb-24 z-10 bg-white text-slate-800">
            <div className="max-w-[1100px] mx-auto px-6 relative">

                {/* ── Header ── */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-50 border border-slate-200/80 mb-3 sm:mb-5 shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[12px] sm:text-[13px] font-semibold text-[#1c469d] tracking-wide">How It Works</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.06 }}
                        className="text-[26px] sm:text-5xl md:text-[56px] font-bold tracking-[-0.03em] leading-[1.05] mb-3 sm:mb-5"
                    >
                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #142b54 0%, #1c469d 55%, #3b82f6 100%)" }}>
                            Up and running.
                        </span>{" "}
                        <span className="text-slate-400">In minutes.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.12 }}
                        className="text-[13px] sm:text-lg md:text-[21px] text-slate-500 max-w-[560px] mx-auto leading-[1.5] px-2 sm:px-0"
                    >
                        From CRM integration to deploying your dedicated support agents — fast setup, zero complexity.
                    </motion.p>
                </div>

                {/* ── Two-column layout ── */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* ── Left: Steps timeline ── */}
                    <div className="relative flex flex-col gap-2">
                        {/* Vertical timeline line */}
                        <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-100 hidden lg:block" />
                        <motion.div
                            className="absolute left-6 top-8 w-px bg-[#1c469d] hidden lg:block origin-top"
                            style={{ transformOrigin: "top" }}
                            animate={{
                                height: `${((activeStep) / (steps.length - 1)) * 100}%`,
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />

                        {steps.map((s, i) => {
                            const isActive = activeStep === i;
                            const isPast = i < activeStep;
                            return (
                                <motion.button
                                    key={i}
                                    onClick={() => handleStepClick(i)}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.2 + i * 0.08 }}
                                    className={`relative text-left flex gap-3 sm:gap-5 p-3 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border
                                        ${isActive
                                            ? "bg-slate-50 border-slate-200/80 shadow-md text-slate-800"
                                            : "bg-white border-transparent text-slate-600 hover:bg-slate-50/55 hover:border-slate-100"}`}
                                    style={isActive ? {
                                        borderLeft: `3px solid ${s.accent}`,
                                        boxShadow: `0 4px 20px rgba(0,0,0,0.03), 0 0 0 1px ${s.accent}15`
                                    } : {}}
                                >
                                    {/* Step circle with progress ring */}
                                    <div className="relative w-9 h-9 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
                                        {isActive && (
                                            <ProgressRing
                                                progress={progress}
                                                size={48}
                                                strokeWidth={2.5}
                                                color={s.accent}
                                            />
                                        )}
                                        <div
                                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                                            style={{
                                                background: isActive ? s.accent : isPast ? `${s.accent}15` : "#f8fafc",
                                            }}
                                        >
                                            {isPast ? (
                                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: s.accent }} />
                                            ) : (
                                                <s.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? "text-white" : "text-slate-400"}`} />
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">
                                            Step {s.number}
                                        </p>
                                        <h3 className={`text-[14px] sm:text-[16px] font-semibold tracking-[-0.01em] mb-0.5 transition-colors duration-300 ${isActive ? "text-slate-800" : "text-slate-600"}`}>
                                            {s.title}
                                        </h3>
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="text-[12px] sm:text-[14px] text-slate-500 leading-[1.55] overflow-hidden"
                                                >
                                                    {s.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* ── Right: Visual panel ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="rounded-3xl overflow-hidden sticky top-28 bg-white border border-slate-200/80"
                        style={{
                            boxShadow: `0 12px 40px rgba(0,0,0,0.06), 0 0 0 2px ${step.accent}15, 0 0 40px ${step.accent}05`,
                            transition: "box-shadow 0.5s ease",
                        }}
                    >
                        {/* Window chrome */}
                        <div className="px-5 py-3 flex items-center gap-2 border-b border-slate-100"
                            style={{ background: `linear-gradient(135deg, #f8fafc, #f1f5f9)` }}
                        >
                            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                            <div className="flex-1 text-center">
                                <span className="text-[11px] text-slate-500 font-medium bg-white border border-slate-200/60 rounded-md px-3 py-0.5">
                                    stefto.com — {step.title}
                                </span>
                            </div>
                        </div>

                        {/* Step progress bar */}
                        <div className="h-[3px] bg-slate-100 relative">
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-r-full"
                                style={{ background: step.accent }}
                                animate={{ width: `${((activeStep) / steps.length) * 100 + (progress / steps.length)}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>

                        {/* Visual content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.25 }}
                                className="p-3 sm:p-6 md:p-8 min-h-[240px] sm:min-h-[380px] flex flex-col justify-center bg-slate-50/50"
                            >
                                <StepVisual stepIndex={activeStep} />
                            </motion.div>
                        </AnimatePresence>

                        {/* Step dots indicator */}
                        <div className="flex items-center justify-center gap-2 py-4 bg-slate-50 border-t border-slate-100">
                            {steps.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleStepClick(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeStep
                                        ? "w-6 rounded-full"
                                        : "bg-slate-200 hover:bg-slate-300"
                                    }`}
                                    style={i === activeStep ? { background: s.accent } : {}}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ── CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <a
                        href="/login"
                        className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-[#1c469d] text-white text-[17px] font-bold tracking-[-0.01em] hover:bg-[#142b54] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(28,70,157,0.2)]"
                    >
                        Get Started Now
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <div className="mt-6 flex items-center justify-center gap-5 text-[13px] text-slate-500">
                        {["Trained Agents", "24/7 Availability", "Omnichannel Setup"].map((t, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <span className="w-px h-3 bg-slate-200" />}
                                <span className="inline-flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6]" />
                                    {t}
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
