import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, ArrowRight, ChevronRight, BadgeCheck } from "lucide-react";

import heroImg from "../../../assets/HomePageImages.png";

// ── Floating stat card ─────────────────────────────────────────────────────
function FloatCard({ iconBg, icon: Icon, title, sub, delay = 0, style = {} }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "rgba(15,25,70,0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 18,
                padding: "12px 18px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)",
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

export default function HeroSection() {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "92vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                background: "linear-gradient(135deg, #0a1628 0%, #0f1f4b 35%, #132359 60%, #1a3a8f 85%, #1d4ed8 100%)",
            }}
        >
            {/* Ambient glow blobs */}
            <div style={{ position: "absolute", top: -100, right: "25%", width: 500, height: 500, borderRadius: "50%", background: "rgba(37,99,235,0.15)", filter: "blur(100px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -80, left: "5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(96,165,250,0.10)", filter: "blur(80px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "30%", right: "5%", width: 350, height: 350, borderRadius: "50%", background: "rgba(139,92,246,0.08)", filter: "blur(80px)", pointerEvents: "none" }} />

            {/* Dot grid */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

            {/* Content */}
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 48px", width: "100%" }}>
                <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

                    {/* ── LEFT ─────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                    >
                        {/* Eyebrow */}
                        <motion.div
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
                                Since 2007 · Trusted by India's Leading Institutions
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <div style={{ marginBottom: 6 }}>
                            <h1 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
                                Futuristic <span style={{
                                    background: "linear-gradient(90deg, #60a5fa 0%, #93c5fd 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}>Debt</span>
                            </h1>
                            <h1 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
                                Management and Customer Service
                            </h1>
                        </div>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.30)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24 }}>
                            for the Modern Marketplace
                        </p>

                        {/* Divider */}
                        <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #3b82f6, #60a5fa)", borderRadius: 99, marginBottom: 24 }} />

                        {/* Sub-text */}
                        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15.5, lineHeight: 1.8, maxWidth: 490, marginBottom: 28 }}>
                            Transforming debt recovery through data-driven insights for India's leading financial institutions and delivering customer-centric support and business services across the financial sector and diverse industries.
                        </p>

                        {/* Feature chips */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
                            {[
                                { icon: ShieldCheck, text: "100% RBI Compliant" },
                                { icon: BadgeCheck, text: "Secure Data Management" },
                            ].map(({ icon: Icon, text }, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, padding: "7px 14px" }}>
                                    <Icon style={{ width: 14, height: 14, color: "#93c5fd" }} />
                                    <span style={{ color: "rgba(255,255,255,0.80)", fontSize: 12, fontWeight: 600 }}>{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
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

                    </motion.div>

                    {/* ── RIGHT: Image + floating elements ──────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
                        className="hero-image-col"
                        style={{ position: "relative", display: "flex", justifyContent: "flex-end", paddingRight: 20 }}
                    >
                        {/* Glow ring behind image */}
                        <div style={{
                            position: "absolute", top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 460, height: 500,
                            borderRadius: 32,
                            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.35) 0%, transparent 70%)",
                            filter: "blur(30px)",
                            zIndex: 1,
                        }} />

                        {/* Main image frame without background/card */}
                        <div style={{
                            position: "relative", zIndex: 10,
                            width: "100%", maxWidth: 400, height: 500,
                        }}>
                            <img
                                src={heroImg}
                                alt="Stefto Debt Recovery Professional"
                                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", position: "relative", zIndex: 1, transform: "scale(1.75)" }}
                            />

                            {/* Established badge — top right */}
                            <div
                                style={{
                                    position: "absolute", top: 20, right: 10, zIndex: 20,
                                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                                    padding: "10px 18px",
                                    borderRadius: "10px",
                                    background: "linear-gradient(135deg, #0b1530 0%, #152960 100%)",
                                    border: "2px solid rgba(255,255,255,0.25)",
                                    boxShadow: "0 10px 40px rgba(11,21,48,0.65), inset 0 1px 0 rgba(255,255,255,0.2)",
                                    textAlign: "center",
                                }}
                            >
                                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 8, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Established</span>
                                <span style={{ color: "#ffffff", fontSize: 22, fontWeight: 900, lineHeight: 1.1, marginTop: 2 }}>2007</span>
                            </div>

                            {/* RBI Compliant card — bottom left corner */}
                            <FloatCard
                                icon={ShieldCheck}
                                iconBg="linear-gradient(135deg, #2563eb, #3b82f6)"
                                title="RBI Compliant"
                                sub="98% Compliance Score"
                                delay={0.5}
                                style={{ position: "absolute", bottom: 40, left: -60, zIndex: 20 }}
                            />
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Bottom wave */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", overflow: "hidden", lineHeight: 0, pointerEvents: "none" }}>
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
                    .hero-image-col { display: none !important; }
                }
                @media (max-width: 600px) {
                    .hero-grid { padding: 40px 20px !important; }
                }
            `}</style>
        </section>
    );
}
