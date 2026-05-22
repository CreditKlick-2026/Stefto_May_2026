import React from "react";
import { motion } from "framer-motion";
import {
    MessageCircle,
    Zap,
    Shield,
    Users,
    BarChart3,
    Bot,
    Send,
    Code,
    Workflow,
    Globe,
    Terminal
} from "lucide-react";

const PathConnection = ({ startX, startY, endX, endY, gradientId, delay = 0 }) => {
    // Cubic bezier to make lines flow out horizontally before curving
    const cp1X = startX + (endX - startX) * 0.4;
    const cp2X = startX + (endX - startX) * 0.6;
    const pathD = `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp2X} ${endY}, ${endX} ${endY}`;
    
    return (
        <g>
            {/* Background static wire */}
            <path d={pathD} stroke="rgba(20, 43, 84, 0.08)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
            
            {/* Animated data beam */}
            <path 
                d={pathD} 
                stroke={`url(#${gradientId})`} 
                strokeWidth="3" 
                fill="none" 
                vectorEffect="non-scaling-stroke"
                pathLength="100"
                strokeDasharray="15 85"
                strokeLinecap="round"
            >
                <animate 
                    attributeName="stroke-dashoffset" 
                    from="100" 
                    to="0" 
                    dur="3s" 
                    begin={`${delay}s`}
                    repeatCount="indefinite" 
                />
            </path>
        </g>
    );
};

const NodeCard = ({ title, desc, icon: Icon, color }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
            className="relative bg-white border border-slate-100 rounded-xl md:rounded-2xl p-2 md:p-6 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:border-[var(--hover-color)] font-sans group w-full"
            style={{ '--hover-color': color }}
        >
            {/* Ambient Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl pointer-events-none blur-xl" style={{ backgroundColor: color }} />
            
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center md:justify-between mb-1 md:mb-4 border-b border-slate-100 pb-1 md:pb-4 relative z-10 text-center md:text-left gap-1 md:gap-0">
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                    <div className="p-1 md:p-2.5 rounded-lg md:rounded-xl bg-slate-50 border border-slate-200/60 group-hover:bg-slate-100 transition-colors duration-300">
                        <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color }} strokeWidth={2.5} />
                    </div>
                    <span className="text-[#142b54] font-extrabold text-[9px] md:text-[16px] tracking-tight leading-tight md:leading-normal">{title}</span>
                </div>
                <div className="hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-slate-50 border border-slate-200/60">
                    <span className="w-2 h-2 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
                </div>
            </div>
            
            {/* Body (Hidden on mobile to save space) */}
            <p className="hidden md:block text-slate-500 text-[13.5px] leading-relaxed font-medium relative z-10">
                {desc}
            </p>
            
            {/* Left Port */}
            <div className="absolute top-1/2 -left-[8px] w-4 h-4 bg-white border-[3px] border-slate-200/80 rounded-full transform -translate-y-1/2 z-20 flex items-center justify-center group-hover:border-[var(--hover-color)] group-hover:scale-110 shadow-sm transition-all duration-300">
                 <div className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: color }} />
            </div>
            {/* Right Port */}
            <div className="absolute top-1/2 -right-[8px] w-4 h-4 bg-white border-[3px] border-slate-200/80 rounded-full transform -translate-y-1/2 z-20 flex items-center justify-center group-hover:border-[var(--hover-color)] group-hover:scale-110 shadow-sm transition-all duration-300">
                 <div className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: color }} />
            </div>
        </motion.div>
    );
};

export default function FeaturesGrid() {
    return (
        <section id="features" className="pt-16 pb-16 bg-white relative overflow-hidden font-sans border-b border-slate-100">
            {/* Tech Grid Background Pattern */}
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#1c469d 1px, transparent 1px), linear-gradient(90deg, #1c469d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
                
                {/* ── Header ── */}
                <div className="text-center mb-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 mb-5 shadow-sm"
                    >
                        <Terminal size={14} className="text-[#1c469d]" />
                        <span className="text-[12px] font-mono font-bold text-[#1c469d] uppercase tracking-wider mt-0.5">
                            BPO Operations System
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-[46px] leading-tight font-extrabold text-[#142b54] tracking-tight mb-4"
                    >
                        Connected Operations
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[15px] md:text-[17px] text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        A powerful, integrated BPO system designed for scale. Seamlessly route customer interactions from system CRM integrations through smart logic and live support down to real-time performance analytics.
                    </motion.p>
                </div>

                {/* ── Node Graph Container ── */}
                <div className="relative w-full rounded-2xl md:rounded-3xl bg-slate-50/50 border border-slate-200/80 p-2 md:p-8 shadow-xl">
                    
                    {/* SVG Connecting Lines (Visible everywhere) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none block" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 0 }}>
                        <defs>
                            {/* Gradients mapping from Source color to Target color */}
                            <linearGradient id="grad-api-auto" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1"/>
                            </linearGradient>
                            <linearGradient id="grad-api-bots" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#f97316" stopOpacity="1"/>
                            </linearGradient>
                            <linearGradient id="grad-inbox-bots" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#22c55e" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#f97316" stopOpacity="1"/>
                            </linearGradient>
                            <linearGradient id="grad-auto-bulk" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#ec4899" stopOpacity="1"/>
                            </linearGradient>
                            <linearGradient id="grad-auto-analytics" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="1"/>
                            </linearGradient>
                            <linearGradient id="grad-bots-bulk" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f97316" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#ec4899" stopOpacity="1"/>
                            </linearGradient>
                            <linearGradient id="grad-bots-analytics" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f97316" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="1"/>
                            </linearGradient>
                        </defs>
                        
                        {/* 1st to 2nd Column connections */}
                        <PathConnection startX={16.66} startY={25} endX={50} endY={25} gradientId="grad-api-auto" delay={0} />
                        <PathConnection startX={16.66} startY={25} endX={50} endY={75} gradientId="grad-api-bots" delay={1.2} />
                        <PathConnection startX={16.66} startY={75} endX={50} endY={75} gradientId="grad-inbox-bots" delay={0.5} />
                        
                        {/* 2nd to 3rd Column connections */}
                        <PathConnection startX={50} startY={25} endX={83.33} endY={25} gradientId="grad-auto-bulk" delay={0.8} />
                        <PathConnection startX={50} startY={25} endX={83.33} endY={75} gradientId="grad-auto-analytics" delay={1.8} />
                        
                        <PathConnection startX={50} startY={75} endX={83.33} endY={25} gradientId="grad-bots-bulk" delay={1.5} />
                        <PathConnection startX={50} startY={75} endX={83.33} endY={75} gradientId="grad-bots-analytics" delay={0.2} />
                    </svg>

                    {/* Nodes CSS Grid (Always 3 columns, 2 rows with small mobile gaps) */}
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-x-12 md:gap-y-12 relative z-10 w-full h-full">
                        
                        {/* Column 1: Triggers / Inputs */}
                        <div className="col-start-1 row-start-1 flex items-center">
                            <NodeCard 
                                title="CRM Integration" 
                                desc="Sync customer records, ticketing systems, and lead databases directly with Stefto operations." 
                                icon={Code} color="#3b82f6" 
                            />
                        </div>
                        <div className="col-start-1 row-start-2 flex items-center">
                            <NodeCard 
                                title="Agent Workforce" 
                                desc="Deploy trained, professional customer support teams and telecallers specialized in your domain." 
                                icon={Users} color="#22c55e" 
                            />
                        </div>
                        
                        {/* Column 2: Logic / Processing */}
                        <div className="col-start-2 row-start-1 flex items-center">
                            <NodeCard 
                                title="Omnichannel Routing" 
                                desc="Intelligently distribute inbound calls, chat queues, and emails to the correct support agents." 
                                icon={Workflow} color="#8b5cf6" 
                            />
                        </div>
                        <div className="col-start-2 row-start-2 flex items-center">
                            <NodeCard 
                                title="Smart Assist Bots" 
                                desc="Automate initial customer triage, FAQ responses, and lead routing before human agent takeover." 
                                icon={Bot} color="#f97316" 
                            />
                        </div>
                        
                        {/* Column 3: Actions / Outputs */}
                        <div className="col-start-3 row-start-1 flex items-center">
                            <NodeCard 
                                title="Outbound Campaigns" 
                                desc="Execute high-converting telesales, follow-up calling, satisfaction surveys, and collection reminders." 
                                icon={Send} color="#ec4899" 
                            />
                        </div>
                        <div className="col-start-3 row-start-2 flex items-center">
                            <NodeCard 
                                title="Analytics Dashboard" 
                                desc="Track call response metrics, SLAs, agent efficiency, average handling times, and CSAT scores in real-time." 
                                icon={BarChart3} color="#06b6d4" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
