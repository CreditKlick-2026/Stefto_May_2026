import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, ArrowRight, ChevronRight, BadgeCheck } from "lucide-react";

import heroImg from "../../../assets/HomePageImages.png";

// ── Floating stat card ─────────────────────────────────────────────────────
function FloatCard({ iconBg, icon: Icon, title, sub, delay = 0, style = {}, className = "" }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "transparent",
                borderRadius: 18,
                padding: "12px 18px",
                minWidth: 200,
                ...style,
            }}
        >
            <div style={{
                width: 38, height: 38, borderRadius: "50%",
                background: iconBg,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: `0 4px 14px rgba(0,0,0,0.35)`
            }}>
                <Icon style={{ width: 18, height: 18, color: "#fff" }} />
            </div>
            <div>
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>{title}</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, margin: 0, lineHeight: 1.3 }}>{sub}</p>
            </div>
        </motion.div>
    );
}

const slides = [
    {
        id: 1,
        eyebrow: "",
        headlinePart1: "Providing Compliant\n",
        headlineHighlight: "Debt Management\n",
        headlinePart2: "Services Across Leading\nFinancial Institutions.",
        subHeadline: "",
        description: "",
        features: [],
        showCTAs: false,
        image: "https://res.cloudinary.com/dtz8hacj4/image/upload/v1779790838/Untitled_design_3_wgc83t.png",
        badgeTop: "Established",
        badgeBottom: "2007",
        badgeBg: "linear-gradient(135deg, #0b1530 0%, #152960 100%)",
        badgeShadow: "0 10px 40px rgba(11,21,48,0.65), inset 0 1px 0 rgba(255,255,255,0.2)",
        imageGlow: "rgba(37,99,235,0.35)",
        background: "linear-gradient(135deg, #0a1628 0%, #0f1f4b 35%, #132359 60%, #1a3a8f 85%, #1d4ed8 100%)",
        floatCard: { icon: ShieldCheck, bg: "linear-gradient(135deg, #2563eb, #3b82f6)", title: "RBI Compliant", sub: "98% Compliance Score" },
        imageScale: 1.7
    },
    {
        id: 2,
        eyebrow: "",
        headlinePart1: "Delivering Seamless \n",
        headlineHighlight: "Customer Support &\n",
        headlinePart2: "Service Across Diverse Industries.",
        subHeadline: "",
        description: "",
        features: [],
        showCTAs: false,
        image: "https://res.cloudinary.com/dtz8hacj4/image/upload/v1779787911/Why_are_we_the_best_Because_we_listen_to_our_customers_wholeheartedly._1_j39bty.png",
        badgeTop: "Guaranteed",
        badgeBottom: "ROI",
        badgeBg: "linear-gradient(135deg, #300b0b 0%, #601515 100%)",
        badgeShadow: "0 10px 40px rgba(48,11,11,0.65), inset 0 1px 0 rgba(255,255,255,0.2)",
        imageGlow: "rgba(220,38,38,0.35)",
        background: "linear-gradient(135deg, #1a0808 0%, #3d0c0c 35%, #5c1111 60%, #8f1a1a 85%, #dc2626 100%)",
        floatCard: { icon: TrendingUp, bg: "linear-gradient(135deg, #dc2626, #991b1b)", title: "Top Performance", sub: "100% SLA Fulfillment" },
        imageScale: 1.1
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const slide = slides[currentSlide];

    return (
        <section
            className="hero-section"
            style={{
                position: "relative",
                minHeight: "55vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "#000",
            }}
        >
            {/* Animated Backgrounds */}
            <AnimatePresence>
                <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: slide.background,
                        zIndex: 0
                    }}
                >
                    {slide.id === 1 ? (
                        <>
                            <div style={{ position: "absolute", top: -100, right: "25%", width: 500, height: 500, borderRadius: "50%", background: "rgba(37,99,235,0.15)", filter: "blur(100px)", pointerEvents: "none" }} />
                            <div style={{ position: "absolute", bottom: -80, left: "5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(96,165,250,0.10)", filter: "blur(80px)", pointerEvents: "none" }} />
                            <div style={{ position: "absolute", top: "30%", right: "5%", width: 350, height: 350, borderRadius: "50%", background: "rgba(139,92,246,0.08)", filter: "blur(80px)", pointerEvents: "none" }} />
                        </>
                    ) : (
                        <>
                            <div style={{ position: "absolute", top: -100, right: "25%", width: 500, height: 500, borderRadius: "50%", background: "rgba(220,38,38,0.15)", filter: "blur(100px)", pointerEvents: "none" }} />
                            <div style={{ position: "absolute", bottom: -80, left: "5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(248,113,113,0.10)", filter: "blur(80px)", pointerEvents: "none" }} />
                            <div style={{ position: "absolute", top: "30%", right: "5%", width: 350, height: 350, borderRadius: "50%", background: "rgba(251,146,60,0.08)", filter: "blur(80px)", pointerEvents: "none" }} />
                        </>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Dot grid */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "30px 30px", zIndex: 1 }} />

            {/* Floating Badges at Viewport Edge */}
            <AnimatePresence>
                <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.6, ease: "easeOut" } }}
                    exit={{ opacity: 0, x: -100, transition: { duration: 0.4, ease: "easeIn" } }}
                    className="hero-badge"
                    style={{
                        position: "absolute", top: 70, right: 40, zIndex: 20,
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        background: "transparent",
                        textAlign: "center",
                    }}
                >
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Established</span>
                    <span style={{ color: "#ffffff", fontSize: 26, fontWeight: 900, lineHeight: 1.1, marginTop: 2 }}>2007</span>
                </motion.div>
            </AnimatePresence>



            {/* Content */}
            <div className="hero-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 48px 20px 48px", width: "100%", position: "relative", zIndex: 10, display: "grid", gridTemplateAreas: "'stack'" }}>
                <AnimatePresence>
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.6, ease: "easeOut" } }}
                        exit={{ opacity: 0, x: -100, transition: { duration: 0.4, ease: "easeIn" } }}
                        className="hero-grid"
                        style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 40, alignItems: "center", gridArea: "stack" }}
                    >

                        {/* ── LEFT ─────────────────────────────────────────────── */}
                        <div className="hero-text">
                            {/* Eyebrow */}
                            {slide.eyebrow && (
                                <motion.div
                                    className="hero-eyebrow"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                    style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderRadius: 999, padding: "7px 18px", marginBottom: 32 }}
                                >
                                    <span style={{ position: "relative", display: "flex", width: 7, height: 7 }}>
                                        <span className="animate-ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#34d399", opacity: 0.7 }} />
                                        <span style={{ position: "relative", width: 7, height: 7, borderRadius: "50%", background: "#34d399", display: "block" }} />
                                    </span>
                                    <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.75)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                                        {slide.eyebrow}
                                    </span>
                                </motion.div>
                            )}

                            {/* Headline */}
                            <div style={{ marginBottom: 6, textAlign: "left" }}>
                                <h1 style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, whiteSpace: "pre-line", textAlign: "left" }}>
                                    {slide.headlinePart1}{slide.headlineHighlight && (
                                        <span style={{
                                            whiteSpace: "pre-line"
                                        }}>{slide.headlineHighlight}</span>
                                    )}{slide.headlinePart2}
                                </h1>
                            </div>

                            {slide.subHeadline && (
                                <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.30)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24 }}>
                                    {slide.subHeadline}
                                </p>
                            )}

                            {/* Sub-text */}
                            {slide.description && (
                                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15.5, lineHeight: 1.8, maxWidth: 490, marginBottom: 28, textAlign: "left" }}>
                                    {slide.description}
                                </p>
                            )}

                            {/* Feature chips */}
                            {slide.features && slide.features.length > 0 && (
                                <div className="hero-features" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
                                    {slide.features.map(({ icon: Icon, text }, i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, padding: "7px 14px" }}>
                                            <Icon style={{ width: 14, height: 14, color: "#93c5fd" }} />
                                            <span style={{ color: "rgba(255,255,255,0.80)", fontSize: 12, fontWeight: 600 }}>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* CTAs */}
                            {slide.showCTAs && (
                                <div className="hero-buttons" style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                                    <Link
                                        to="/contact-us"
                                        style={{
                                            display: "inline-flex", alignItems: "center", gap: 8,
                                            border: "1px solid rgba(255,255,255,0.22)",
                                            background: "rgba(255,255,255,0.07)",
                                            backdropFilter: "blur(8px)",
                                            color: "#fff", fontSize: 14, fontWeight: 600,
                                            padding: "14px 28px", borderRadius: 999,
                                            textDecoration: "none"
                                        }}
                                    >
                                        Contact Us <ArrowRight style={{ width: 16, height: 16 }} />
                                    </Link>
                                    <Link
                                        to="/about-us"
                                        style={{
                                            display: "inline-flex", alignItems: "center", gap: 8,
                                            border: "1px solid rgba(255,255,255,0.22)",
                                            background: "rgba(255,255,255,0.07)",
                                            backdropFilter: "blur(8px)",
                                            color: "#fff", fontSize: 14, fontWeight: 600,
                                            padding: "14px 28px", borderRadius: 999,
                                            textDecoration: "none"
                                        }}
                                    >
                                        Our Story <ChevronRight style={{ width: 16, height: 16 }} />
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* ── RIGHT: Image + floating elements ──────────────── */}
                        <div
                            className="hero-image-col"
                            style={{ position: "relative", display: "flex", justifyContent: "flex-end", paddingRight: 0, transform: "translateX(50px)" }}
                        >
                            {/* Glow ring behind image */}
                            <div style={{
                                position: "absolute", top: "50%", left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: 460, height: 500,
                                borderRadius: 32,
                                background: `radial-gradient(ellipse at center, ${slide.imageGlow} 0%, transparent 70%)`,
                                filter: "blur(30px)",
                                zIndex: 1,
                            }} />

                            {/* Main image frame without background/card */}
                            <div className="hero-img-wrapper" style={{
                                position: "relative", zIndex: 10,
                                width: "100%", maxWidth: 400, height: 500,
                            }}>
                                <img
                                    src={slide.image}
                                    alt="Stefto Professional"
                                    style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", position: "relative", zIndex: 1, transform: `scale(${slide.imageScale || 1.75})` }}
                                />
                                {/* Floating card — bottom left corner */}
                                <FloatCard
                                    icon={slide.floatCard.icon}
                                    iconBg={slide.floatCard.bg}
                                    title={slide.floatCard.title}
                                    sub={slide.floatCard.sub}
                                    delay={0.2}
                                    style={{ position: "absolute", bottom: -20, left: -60, zIndex: 20 }}
                                    className="hero-float-card"
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Dots */}
                <div className="hero-dots" style={{ position: "absolute", bottom: 85, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 12, alignItems: "center", zIndex: 20 }}>
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                background: currentSlide === idx ? "#ffffff" : "rgba(255,255,255,0.4)",
                                border: "none",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                transform: currentSlide === idx ? "scale(1.2)" : "scale(1)",
                            }}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom wave */}
            <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", overflow: "hidden", lineHeight: 0, pointerEvents: "none", transform: "translateY(1px)", zIndex: 10 }}>
                <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }} preserveAspectRatio="none">
                    <path d="M0,70 C240,20 480,60 720,30 C960,0 1200,50 1440,25 L1440,70 L0,70 Z" fill="white" />
                </svg>
            </div>

            {/* Responsive CSS */}
            <style>{`
                @keyframes scanline {
                    0% { transform: translateY(-20px); }
                    100% { transform: translateY(520px); }
                }
                .hero-scanline {
                    animation: scanline 4s linear infinite;
                }
                @media (max-width: 900px) {
                    .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 60px 24px !important; }
                    .hero-image-col { transform: none !important; justify-content: center !important; margin-top: 20px; display: flex !important; width: 100%; }
                    .hero-image-col img { transform: scale(1.1) !important; max-height: 400px; }
                    .hero-float-card { left: 50% !important; transform: translateX(-50%) !important; bottom: -30px !important; width: max-content; }
                }
                @media (max-width: 600px) {
                    .hero-section { min-height: 40vh !important; }
                    .hero-container { padding: 40px 5px !important; }
                    .hero-grid { 
                        grid-template-columns: 1.25fr 0.75fr !important; 
                        padding: 0 !important; 
                        gap: 10px !important; 
                    }
                    .hero-text { text-align: left !important; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; width: 100%; }
                    .hero-text h1, .hero-text h1 span { text-align: left !important; white-space: normal !important; font-size: 15px !important; line-height: 1.3 !important; }
                    .hero-text p { text-align: left !important; font-size: 11px !important; margin-bottom: 10px !important; line-height: 1.4 !important; }
                    .hero-eyebrow { font-size: 8px !important; padding: 4px 8px !important; margin-bottom: 10px !important; }
                    .hero-buttons { flex-direction: column; gap: 8px !important; align-items: flex-start !important; width: 100%; }
                    .hero-buttons a { padding: 6px 12px !important; font-size: 11px !important; width: 100%; justify-content: center; }
                    
                    .hero-img-wrapper { height: 220px !important; display: flex; align-items: center; justify-content: center; max-width: none !important; }
                    .hero-image-col { margin-top: 0 !important; justify-content: flex-end !important; align-items: center; transform: none !important; width: 100%; }
                    .hero-image-col img { max-height: 220px !important; transform: scale(1.3) !important; object-fit: contain; }
                    
                    .hero-float-card { 
                        bottom: -15px !important; 
                        left: -10px !important; 
                        right: auto !important; 
                        transform: scale(0.6) !important; 
                        transform-origin: bottom left !important; 
                    }
                    .hero-badge { top: 15px !important; right: 15px !important; transform: scale(0.6) !important; transform-origin: top right; }
                    .hero-dots { bottom: 15px !important; transform: translateX(-50%) scale(0.8) !important; }
                    .hero-features { display: none !important; }
                }
            `}</style>
        </section>
    );
}

