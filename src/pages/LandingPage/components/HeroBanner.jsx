import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * HeroBanner
 * ──────────────────────────────────────────────────────────
 * Standalone hero text block:
 *   • Eyebrow tag  — "Next‑Gen BPO & Customer Experience Solutions"
 *   • Headline     — "Connect. Support. Scale."
 *   • Sub-headline — Stefto description paragraph
 *   • Trust pills  — Inbound & Outbound | 24/7 Operations
 *
 * Designed to sit on any dark/blue background.
 * Import and drop anywhere you need this content block.
 */
export default function HeroBanner({ className = "" }) {
    return (
        <div className={`flex flex-col items-start text-left ${className}`}>

            {/* ── Eyebrow Tag ── */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5"
            >
                <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#ef4444] tracking-wide">
                    {/* Pulsing dot */}
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]" />
                    </span>
                    Next‑Gen BPO &amp; Customer Experience Solutions
                </span>
            </motion.div>

            {/* ── Main Headline ── */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.65 }}
                className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6"
            >
                Connect. Support.{" "}
                <span
                    className="bg-clip-text text-transparent"
                    style={{
                        backgroundImage: "linear-gradient(135deg, #ffffff 0%, #f87171 55%, #ef4444 100%)"
                    }}
                >
                    Scale.
                </span>
            </motion.h1>

            {/* ── Sub‑headline ── */}
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.6 }}
                className="text-lg md:text-[20px] text-blue-100/90 max-w-[580px] leading-[1.4] mb-10"
            >
                Maximize operational efficiency with Stefto's advanced business process
                outsourcing ecosystem. Leverage professional inbound, outbound, and tailored
                back-office solutions.
            </motion.p>

            {/* ── Trust Pills ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42, duration: 0.5 }}
                className="flex items-center gap-6 text-[13px] text-blue-200/80"
            >
                <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb]" />
                    Inbound &amp; Outbound Support
                </span>
                <span className="w-px h-3 bg-white/20" />
                <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb]" />
                    24/7 Operations Support
                </span>
            </motion.div>

        </div>
    );
}
