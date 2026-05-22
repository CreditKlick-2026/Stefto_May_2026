import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, ArrowRight, Shield, Clock, CreditCard, Headphones, Sparkles, Layers, Cpu, Users } from "lucide-react";
import { Link } from "react-router-dom";

// ─── Service Card (Compact, Professional & B2B Capacity Focused) ──────────────
const cardAccents = [
    { gradient: "linear-gradient(135deg, #2563eb, #60a5fa)", color: "#2563eb", light: "rgba(37,99,235,0.1)" }, // Starter (Brand Blue theme)
    { gradient: "linear-gradient(135deg, #2563eb, #93c5fd)", color: "#1d4ed8", light: "rgba(29,78,216,0.1)" }, // Growth (Blue lighter)
    { gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)", color: "#7c3aed", light: "rgba(139,92,246,0.1)" }, // Pro (Purple theme)
    { gradient: "linear-gradient(135deg, #10b981, #34d399)", color: "#059669", light: "rgba(16,185,129,0.1)" }, // Enterprise (Green theme)
];

function ServiceCard({ plan, index }) {
    const accent = cardAccents[index % cardAccents.length];
    const specs = plan.specs || [];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col h-full transition-all duration-500 rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:border-slate-300 min-w-[85vw] sm:min-w-[300px] lg:min-w-0 snap-center group bg-white hover:shadow-2xl hover:scale-[1.02]"
        >
            {/* Colorful top strip */}
            <div className="h-1.5 w-full" style={{ background: accent.gradient }} />

            <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="text-[17px] font-extrabold tracking-tight" style={{ color: accent.color }}>
                        {plan.name}
                    </h3>
                    <p className="text-[12px] text-slate-500 leading-snug mt-1.5 min-h-[50px]">
                        {plan.description}
                    </p>
                </div>

                {/* Divider */}
                <hr className="border-t border-slate-100 mb-5" />

                {/* Operational Technical Specs */}
                <div className="flex-1">
                    <p className="text-[10px] font-bold mb-4 uppercase tracking-widest text-slate-400">
                        Operational Specifications
                    </p>
                    <div className="space-y-4">
                        {specs.map((spec, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{spec.label}</span>
                                <span className="text-[13px] text-slate-800 font-semibold leading-snug">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main Pricing/Service Configurations Section ─────────────────────────────
export default function PricingSection() {
    const [isOmni, setIsOmni] = useState(false);

    const voicePlans = [
        {
            id: 'starter-voice',
            name: 'Shared Queue Routing',
            description: 'Deploy pre-trained agents in a shared queue for seasonal campaigns, script validations, or low-frequency inbound spikes.',
            specs: [
                { label: 'Operational Sizing', value: 'On-demand routing & dynamic seat allocation' },
                { label: 'Telephony & Tech', value: 'Standard IVR, cloud ACD routing, call logging' },
                { label: 'Quality Assurance', value: 'Shared supervisors & baseline QA checks' },
                { label: 'SLA Parameters', value: 'Standard queue response SLA' }
            ]
        },
        {
            id: 'growth-voice',
            name: 'Dedicated Voice Operations',
            description: 'Deploy dedicated full-time calling agents trained exclusively on your brand scripts, values, and CRM software.',
            specs: [
                { label: 'Operational Sizing', value: '100% brand-focused active calling agents' },
                { label: 'Telephony & Tech', value: 'Full HubSpot/Zoho CRM dialers sync & softphones' },
                { label: 'Quality Assurance', value: 'Daily manager sync & 100% call recording access' },
                { label: 'SLA Parameters', value: 'Priority response SLA & direct contact access' }
            ]
        },
        {
            id: 'pro-voice',
            name: 'Multi-Queue Scale Operations',
            description: 'Scale complex, high-volume calling campaigns with structured agent teams, active supervisors, and power dialers.',
            specs: [
                { label: 'Operational Sizing', value: '10 to 100+ concurrent seats' },
                { label: 'Telephony & Tech', value: 'Predictive dialer configuration & custom APIs' },
                { label: 'Quality Assurance', value: 'Dedicated Quality Analyst (QA) & script tuning' },
                { label: 'SLA Parameters', value: 'Strict SLA targets & weekly conversion reporting' }
            ]
        },
        {
            id: 'enterprise-voice',
            name: 'Fully Managed Custom BPO',
            description: 'Completely outsource your support division. We manage recruitment pipelines, training centers, hardware, and SLA execution.',
            specs: [
                { label: 'Operational Sizing', value: 'Unlimited custom seats with elastic expansion' },
                { label: 'Telephony & Tech', value: 'Dedicated secure networks & custom API portals' },
                { label: 'Quality Assurance', value: 'Dedicated Operations Director & custom training centers' },
                { label: 'SLA Parameters', value: 'Guaranteed CSAT & SLA fulfillment audits' }
            ]
        }
    ];

    const omniPlans = [
        {
            id: 'starter-omni',
            name: 'On-Demand Ticket Triage',
            description: 'Manage low-volume ticketing queues and inbound triage over email and live chat platforms.',
            specs: [
                { label: 'Operational Sizing', value: 'Shared agent ticketing queue' },
                { label: 'Telephony & Tech', value: 'Zendesk, Freshdesk, or Help Scout integration' },
                { label: 'Quality Assurance', value: 'Shared supervisor oversight & ticket scoring' },
                { label: 'SLA Parameters', value: 'Standard response SLA' }
            ]
        },
        {
            id: 'growth-omni',
            name: 'Dedicated Helpdesk Executives',
            description: 'Deploy high-touch customer support professionals to cover live chat channels, emails, and database updates.',
            specs: [
                { label: 'Operational Sizing', value: '100% dedicated customer success agents' },
                { label: 'Telephony & Tech', value: 'Live chat software (Intercom/LiveChat) & CRM syncing' },
                { label: 'Quality Assurance', value: 'Product training modules & 100% conversation reviews' },
                { label: 'SLA Parameters', value: 'Priority chat response & custom resolution SLA' }
            ]
        },
        {
            id: 'pro-omni',
            name: 'Omnichannel Service Teams',
            description: 'Ensure comprehensive coverage across chat, email, social, and helpdesk systems with escalation routing rules.',
            specs: [
                { label: 'Operational Sizing', value: '25+ dedicated omnichannel agents' },
                { label: 'Telephony & Tech', value: 'Custom workflow automations, macros & API syncs' },
                { label: 'Quality Assurance', value: 'Dedicated Quality & Training Lead, direct Slack sync' },
                { label: 'SLA Parameters', value: 'SLA-driven customer response & escalation audits' }
            ]
        },
        {
            id: 'enterprise-omni',
            name: 'Managed Back-Office Operations',
            description: 'Outsource complete back-office, data entry, workflow execution, compliance auditing, and administrative functions.',
            specs: [
                { label: 'Operational Sizing', value: 'Full back-office workforce recruitment & scaling' },
                { label: 'Telephony & Tech', value: 'Custom ERP, database, and system-level integrations' },
                { label: 'Quality Assurance', value: 'Multi-stage QA, supervisor oversight, and NDA compliance' },
                { label: 'SLA Parameters', value: '100% SLA fulfillment & weekly operations audit reports' }
            ]
        }
    ];

    const plans = isOmni ? omniPlans : voicePlans;

    return (
        <section id="pricing" className="relative overflow-hidden -mt-[1px] z-10 bg-white">
            {/* ── Flowing Water Header Banner ── */}
            <div className="relative pt-12 md:pt-20 pb-8 md:pb-12 overflow-hidden bg-transparent">

                {/* Flowing Water Exact CSS Background Layer */}
                <style>{`
                    @keyframes waterFlow {
                        0% { transform: translate3d(0, 0, 0); }
                        100% { transform: translate3d(-50%, 0, 0); }
                    }
                    @keyframes waterFlowReverse {
                        0% { transform: translate3d(-50%, 0, 0); }
                        100% { transform: translate3d(0, 0, 0); }
                    }
                    .water-wave-bg-1 {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 200%;
                        height: 50%;
                        background: url('https://image.ibb.co/fmHm66/wave.png');
                        background-repeat: repeat-x;
                        background-size: 1500px 100%;
                        animation: waterFlow 22s linear infinite;
                        opacity: 0.35;
                        pointer-events: none;
                        z-index: 1;
                        will-change: transform;
                        filter: invert(22%) sepia(85%) saturate(1900%) hue-rotate(205deg) brightness(85%) contrast(90%);
                    }
                    .water-wave-bg-2 {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 200%;
                        height: 50%;
                        background: url('https://image.ibb.co/fmHm66/wave.png');
                        background-repeat: repeat-x;
                        background-size: 2000px 100%;
                        animation: waterFlowReverse 28s linear infinite;
                        opacity: 0.20;
                        pointer-events: none;
                        z-index: 0;
                        will-change: transform;
                        filter: invert(22%) sepia(85%) saturate(1900%) hue-rotate(205deg) brightness(85%) contrast(90%);
                    }
                `}</style>
                <div className="water-wave-bg-1" />
                <div className="water-wave-bg-2" />

                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-[#2563eb] font-semibold text-[10px] sm:text-sm mb-2 sm:mb-4 uppercase tracking-wider"
                        >
                            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563eb] animate-pulse" />
                            Service Configurations
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[22px] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#142b54] mb-1.5 sm:mb-4 tracking-tight leading-[1.1] px-2 sm:px-0"
                        >
                            Operational Formats <br className="hidden sm:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb] via-blue-500 to-[#60a5fa]">Built to Scale</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[11px] sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium px-4 sm:px-0 leading-relaxed"
                        >
                            Configure your support workforce based on your interaction volumes. Clear delivery parameters, guaranteed deliverables, zero infrastructure overhead.
                        </motion.p>

                        {/* Voice vs Omnichannel BPO Toggle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-center mt-3 sm:mt-6"
                        >
                            <div className="relative inline-flex items-center bg-slate-100 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-slate-200/80">
                                <div className="absolute inset-0 z-0 flex items-center p-1 sm:p-1.5">
                                    <motion.div
                                        className="h-full w-1/2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-lg sm:rounded-xl shadow-md"
                                        animate={{ x: isOmni ? "100%" : "0%" }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                </div>

                                <button
                                    onClick={() => setIsOmni(false)}
                                    className={`relative z-10 px-4 sm:px-6 py-2 sm:py-3 font-semibold text-[12px] sm:text-[14px] transition-colors rounded-lg sm:rounded-xl w-[140px] sm:w-[180px] cursor-pointer text-center ${!isOmni ? 'text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
                                >
                                    Voice Campaigns
                                </button>
                                <button
                                    onClick={() => setIsOmni(true)}
                                    className={`relative z-10 px-4 sm:px-6 py-2 sm:py-3 font-semibold text-[12px] sm:text-[14px] transition-colors rounded-lg sm:rounded-xl w-[140px] sm:w-[180px] cursor-pointer text-center ${isOmni ? 'text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
                                >
                                    Omnichannel BPO
                                </button>

                                {/* Floating Pilot Runs Badge */}
                                <div className="absolute -top-3 -right-2 sm:-right-8 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-[9px] sm:text-[10px] font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-md transform rotate-12 z-20 border border-white/10 shadow-[0_0_12px_rgba(37,99,235,0.3)]">
                                    PILOT RUNS
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="max-w-[1200px] mx-auto px-6 relative z-10 mt-4 sm:mt-8">
                    {/* Swipe Hint for Mobile */}
                    <div className="lg:hidden text-center mb-4 sm:mb-6">
                        <span className="text-[12px] text-slate-600 bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200 shadow-sm">
                            ↔ Swipe to compare configurations
                        </span>
                    </div>

                    <div className="flex overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-4 items-stretch pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 scrollbar-hide">
                        {plans.length > 0 ? (
                            plans.slice(0, 4).map((plan, idx) => (
                                <ServiceCard
                                    key={plan.id}
                                    plan={plan}
                                    index={idx}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center p-16 bg-white rounded-3xl border border-slate-200 shadow-md">
                                <p className="text-xl font-medium text-[#142b54]">Configurations are being updated. Check back later.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Custom B2B Consultative CTA Banner ── */}
                <div className="mt-10 sm:mt-12 text-center z-10 relative px-4">
                    <Link to="/contact">
                        <button className="inline-flex items-center justify-center gap-2.5 h-14 px-10 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] shadow-xl hover:shadow-[0_4px_25px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer">
                            Request a Custom Operational Proposal
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                    <p className="text-xs text-slate-500 mt-4 font-semibold">Custom SLAs, service pilot runs, and process audits available upon request.</p>
                </div>

                {/* Trust Bar */}
                <div className="max-w-[1200px] mx-auto px-6 relative z-10 mt-10 md:mt-14 pb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-slate-200/60 pt-12"
                    >
                        {[
                            { icon: Clock, text: "Flexible Process Pilots" },
                            { icon: CreditCard, text: "No Obligation Proposals" },
                            { icon: Shield, text: "100% SLA Fulfillment Guarantee" },
                            { icon: Headphones, text: "Dedicated Operations Support" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                                <item.icon className="w-5 h-5 text-[#2563eb]" />
                                <span className="text-sm font-semibold">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ── Bottom Symmetrical Hill Curve Transition to FAQ ── */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[40px] md:h-[80px]" preserveAspectRatio="none">
                    <path d="M0,100 L1440,100 L1440,50 Q720,0 0,50 Z" fill="#ffffff" />
                </svg>
            </div>
        </section>
    );
}
