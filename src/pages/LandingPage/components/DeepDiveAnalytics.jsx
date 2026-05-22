import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import promoAnalyticsImg from "../../../assets/promo_analytics.png";

export default function DeepDiveAnalytics() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
                            Real-time Analytics
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
                            Data that drives<br />decisions
                        </h2>
                        <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
                            Stop guessing. Our advanced analytics engine gives you granular visibility into every message sent, delivered, and read. Track ROI in real-time.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Conversion tracking', 'Failed delivery analysis', 'Cost-per-message optimization', 'Geographic heatmaps'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                    <span className="font-medium text-blue-100">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="inline-flex items-center justify-center h-12 rounded-full px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer">
                            Explore Analytics
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl p-3 bg-slate-900/40 border border-white/10 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
                    >
                        <img 
                            src={promoAnalyticsImg} 
                            alt="Deep Dive Analytics Dashboard" 
                            className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]" 
                        />

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
