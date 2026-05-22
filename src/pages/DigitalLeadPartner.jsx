import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Activity, ArrowRight, Cpu, Database, FileText, Globe, HandCoins,
    PieChart, ShieldAlert, ShieldCheck, Smartphone, Zap
} from 'lucide-react';

// Component removed per user request

const DigitalLeadPartner = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    return (
        <main className="font-sans overflow-x-hidden bg-white">
            {/* Section 1: Ultra-Clean Minimal Centered Hero */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-white text-center">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
                
                <div className="container mx-auto px-4 relative z-20 flex flex-col items-center mt-6">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-5 py-2 rounded-full mb-3 shadow-sm">
                            <Activity size={14} className="text-stefto-red animate-pulse" />
                            <span className="text-stefto-blue text-xs font-black tracking-[0.1em] uppercase">Next-Gen Credit Intelligence</span>
                        </div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Part of Incredible Management Services Pvt Ltd</p>
                    </motion.div>
                    
                    {/* Main Headline */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-slate-900 mb-6 leading-[1.05] tracking-tight"
                    >
                        Your Credit Score.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-stefto-red">Unlocked For Free.</span>
                    </motion.h1>
                    
                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl leading-relaxed"
                    >
                        Instantly check your credit health with our advanced intelligence hub. Get deep diagnostics, fraud alerts, and personalized paths to financial growth.
                    </motion.p>
                    
                    {/* Action Area */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-6 mb-20 z-30"
                    >
                        <a
                            href="https://creditklick.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-stefto-red text-white font-bold px-10 py-4 rounded-xl shadow-[0_10px_20px_rgba(255,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,0,0,0.3)] hover:-translate-y-0.5 transition-all flex items-center gap-3 text-lg"
                        >
                            Access Platform <ArrowRight size={20} />
                        </a>
                        
                        <div className="flex items-center gap-4 bg-white border border-slate-200 px-6 py-3 rounded-2xl shadow-sm">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=ck${i}`} alt="Client" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="font-black text-slate-900 text-lg leading-tight">5,00,000+</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Profiles Analyzed</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Consolidated Metrics Dashboard */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full max-w-5xl bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col mt-4"
                    >
                        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            {/* Score Stats section */}
                            <div className="flex-1 p-8 md:p-12 flex flex-col md:flex-row items-center justify-around gap-8">
                                <div className="text-center group cursor-default">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-500 rounded-full mb-4 group-hover:scale-110 transition-transform"><Activity size={20} /></div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Score</div>
                                    <div className="text-4xl font-serif italic font-extrabold text-slate-900 tracking-tight">Top 1%</div>
                                </div>
                                <div className="hidden md:block w-px h-20 bg-slate-100"></div>
                                <div className="text-center group cursor-default">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 text-green-500 rounded-full mb-4 group-hover:scale-110 transition-transform"><Zap size={20} /></div> 
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> 
                                        Analysis Active
                                    </div>
                                    <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Deep Diagnostics v5.0</div>
                                </div>
                            </div>
                        </div>

                        {/* Detail Stats */}
                        <div className="bg-slate-50/50 rounded-b-[2.5rem] border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 p-6">
                            {[
                                { label: 'Network', val: 'Experian', icon: <Database className="text-blue-500 mb-2" size={20}/> },
                                { label: 'Security', val: '256B Encrypted', icon: <ShieldCheck className="text-stefto-red mb-2" size={20}/> },
                                { label: 'Status', val: 'Excellent', icon: <Activity className="text-green-500 mb-2" size={20}/> },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center justify-center text-center py-4 px-2 group">
                                    <div className="transform transition-transform group-hover:-translate-y-1">{stat.icon}</div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1 tracking-[0.2em]">{stat.label}</div>
                                    <div className="text-lg font-black text-slate-900 leading-none">{stat.val}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Core Philosophy & Integrated Infrastructure */}
            <section className="py-16 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-stefto-blue mb-8 tracking-tighter">Redefining the <br />Financial DNA.</h2>
                            <p className="text-xl text-gray-600 font-light leading-relaxed">
                                CreditKlick isn't just a score checker. It is a comprehensive financial operating system that leverages Stefto's enterprise-grade AI to bridge the gap between complex credit data and actionable financial growth.
                            </p>
                            <div className="mt-10 space-y-4">
                                {[
                                    "Real-Time Experian Integration",
                                    'Proprietary "Credit Refine" Repair Protocol',
                                    "Secured Multi-Layer Data Encryption"
                                ].map((text, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                                        className="flex items-center gap-4 group cursor-default"
                                    >
                                        <div className="w-2 h-2 bg-stefto-red rounded-full group-hover:scale-150 transition-transform"></div>
                                        <span className="font-bold text-stefto-blue">{text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            {[
                                { title: 'AI Score Engine', icon: <Cpu />, desc: 'Advanced neural networks that predict score shifts.', val: '800+' },
                                { title: 'Risk Guard', icon: <ShieldAlert />, desc: 'Instant fraud detection and credit security.', val: '24/7' },
                                { title: 'Data Vault', icon: <Database />, desc: 'Bank-grade storage for your financial history.', val: '256B' },
                                { title: 'Market Reach', icon: <Globe />, desc: 'Connected to premium loan and credit card partners.', val: 'Top 5%' },
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:bg-stefto-blue group cursor-default"
                                >
                                    <div className="text-stefto-red mb-6 transition-colors group-hover:text-white">{card.icon}</div>
                                    <div className="text-3xl font-serif italic font-extrabold text-stefto-blue mb-2 group-hover:text-white">{card.val}</div>
                                    <h4 className="font-bold text-stefto-blue text-sm mb-2 group-hover:text-white uppercase tracking-widest">{card.title}</h4>
                                    <p className="text-xs text-gray-500 group-hover:text-white/70 leading-relaxed">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Professional Features (Corporate Grid) */}
            <section className="bg-slate-50 py-20 overflow-hidden relative border-y border-slate-100">
                <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-50/50 skew-x-[-20deg] translate-x-1/2 pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mb-16 text-center mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">The Professional Edge.</h2>
                        <p className="text-slate-500 text-lg md:text-xl">Sophisticated tools designed for precision financial management.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { t: 'Report Hub', d: 'Granular breakdown of every line item in your credit history.', i: <FileText /> },
                            { t: 'Analysis Engine', d: 'Automated identification of credit utilization and scoring metrics.', i: <PieChart /> },
                            { t: 'Optimization', d: 'Algorithmic suggestions to maximize your potential score.', i: <Zap /> },
                            { t: 'Direct Refine', i: <HandCoins />, d: 'One-click access to expert credit restoration services.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-white border border-slate-200 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200 transition-all cursor-default group"
                            >
                                <div className="text-stefto-blue bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-stefto-blue group-hover:text-white transition-all">{item.i}</div>
                                <h3 className="text-xl font-black text-slate-900 mb-3">{item.t}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Enterprise Solutions Spotlight */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto bg-slate-50 rounded-[2.5rem] p-8 lg:p-12 border border-slate-100 flex flex-col lg:flex-row gap-12 items-center shadow-sm"
                    >
                        <div className="lg:w-1/2 relative group flex justify-center mt-8 lg:mt-0">
                            {/* Decorative Background for the App */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/5 rounded-full blur-[60px] pointer-events-none"></div>

                            {/* Main App Container - Scaled down */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="relative z-10 w-[240px] aspect-[9/17.5] bg-[#0047AB] rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl overflow-hidden"
                            >
                                <img
                                    src="/ck-app.png"
                                    alt="CreditKlick Mobile Interface"
                                    className="absolute inset-0 w-full h-full object-cover object-top scale-[1.02] transition-all duration-700"
                                />
                                {/* Bottom Navigation Bar Simulation Overlay */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full"></div>
                                {/* Subtle Bottom Shadow overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                            </motion.div>

                            {/* --- FLOATING APP INTERFACE ELEMENTS (Scaled) --- */}
                            
                            {/* Top Score Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-2 md:-top-8 md:-right-8 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 z-20 flex flex-col items-center min-w-[120px]"
                            >
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Excellent</div>
                                <div className="text-3xl font-black text-green-500 tracking-tighter">823</div>
                                <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                    <div className="w-[85%] h-full bg-gradient-to-r from-yellow-400 to-green-500"></div>
                                </div>
                            </motion.div>

                            {/* Home Loan / EMI Card */}
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/3 -left-4 md:-left-12 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 z-20 flex items-center gap-3 min-w-[160px]"
                            >
                                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                                    <HandCoins size={20} />
                                </div>
                                <div>
                                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Affordable</div>
                                    <div className="text-sm font-black text-slate-900">Personal Loan</div>
                                </div>
                            </motion.div>

                            {/* Security / Free Card */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 z-20 flex items-center gap-3 min-w-[180px]"
                            >
                                <div className="w-10 h-10 bg-red-50 text-stefto-red rounded-xl flex items-center justify-center">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Protection</div>
                                    <div className="text-sm font-black text-slate-900">100% Secured</div>
                                </div>
                            </motion.div>
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:w-1/2 pr-4"
                        >
                            <div className="inline-block bg-slate-200 text-slate-600 text-[10px] font-black px-4 py-1.5 rounded-full mb-5 uppercase tracking-[2px]">Enterprise Grade</div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">Elite Performance <br />At Your Fingertips.</h2>
                            <p className="text-lg text-slate-500 mb-8 font-medium">"Deploying the world's most advanced credit monitoring software into a seamless mobile experience."</p>
                            <div className="flex flex-wrap gap-4 items-center">
                                <motion.a
                                    href="https://play.google.com/store/apps/details?id=com.creditklick"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-3.5 bg-stefto-blue text-white rounded-xl font-bold text-base flex items-center gap-2 shadow-md hover:bg-stefto-red transition-all cursor-pointer"
                                    style={{textDecoration: 'none'}}
                                >
                                    <Smartphone size={18} /> Play Store
                                </motion.a>
                                <div className="flex items-center gap-3 px-5 py-3 border border-slate-200 rounded-xl bg-white shadow-sm">
                                    <div className="text-slate-800 font-bold text-sm tracking-tight">V 4.2.0 Stable</div>
                                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 bg-green-500 rounded-full"></motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section 6: Intelligence Hub (FAQ) */}
            <section className="pb-20 pt-4 px-4 md:px-8 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-6 mb-16"
                    >
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-1 h-20 bg-stefto-red origin-top"
                        ></motion.div>
                        <h2 className="text-5xl font-black text-stefto-blue italic tracking-tighter leading-none">Intelligence <br />Hub.</h2>
                    </motion.div>
                    <div className="space-y-4">
                        {[
                            { q: "What is CreditKlick?", a: "CreditKlick is a premium fintech ecosystem part of Incredible Management Services Pvt Ltd. It's designed to simplify credit monitoring, providing individuals and businesses with real-time access to their credit health and financial growth tools." },
                            { q: "How does CreditKlick function?", a: "We integrate directly with major credit bureaus to fetch your latest data. Our AI-driven engine then analyzes this data to provide personalized insights, score improvement roadmaps, and tailored loan recommendations." },
                            { q: "What are the key features available?", a: "Members get access to Real-time Score Tracking, Deep Score Diagnostics, Personal Loan Marketplaces, AI-based Score Improvement Protocols, and 24/7 Credit Monitoring alerts." },
                            { q: "How is my data protected?", a: "We employ bank-grade AES-256 encryption. As a part of Incredible Management Services Pvt Ltd, we strictly adhere to RBI guidelines and Indian data residency laws, ensuring your financial information never leaves secure environments." },
                            { q: "Will checking my score impact my rating?", a: "Absolutely not. All credit checks performed through the CreditKlick dashboard are 'Soft Inquiries.' This means you can monitor your score as many times as you like without losing a single point." }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="border-b border-gray-100 last:border-0"
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full py-8 text-left flex justify-between items-center group outline-none bg-transparent cursor-pointer border-none"
                                >
                                    <span className="font-bold text-xl text-stefto-blue group-hover:text-stefto-red transition-colors">{faq.q}</span>
                                    <div className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-45 text-stefto-red' : 'text-gray-300'}`}>
                                        <Zap size={24} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 text-gray-500 text-lg leading-relaxed font-light">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DigitalLeadPartner;
