import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Bot, User, Wifi, Battery, Signal } from "lucide-react";

const AVATAR_URL = "https://res.cloudinary.com/dtz8hacj4/image/upload/v1779277117/Stefto_Chibi_Character_rkwucv.png";
const WA_NUMBER = "919999999999"; // Change to your WhatsApp number

// Time-based greeting (#5)
const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
};

// Pop sound (#2)
const playPop = () => {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.15);
    } catch (_) {}
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [showBubble, setShowBubble] = useState(false);
    const [bubbleDismissed, setBubbleDismissed] = useState(false);
    const [message, setMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isAwake, setIsAwake] = useState(false); // #8 character reaction
    const [isDark, setIsDark] = useState(false); // #7 dark mode
    const endRef = useRef(null);

    const greeting = getGreeting();

    const [messages, setMessages] = useState([{
        type: "bot",
        text: `${greeting}! 👋 I'm here to help you get started with Stefto. What would you like to know?`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);

    const quickActions = [
        { icon: "📞", label: "View Services", desc: "BPO & Call Center" },
        { icon: "⚙️", label: "How It Works", desc: "Tailored operations" },
        { icon: "🤝", label: "Talk to Experts", desc: "Consult our team" },
        { icon: "📅", label: "Book a Demo", desc: "Schedule a walkthrough" },
    ];

    // #7 Dark mode detection
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(mq.matches);
        const handler = (e) => setIsDark(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);

    // #2 Show bubble with pop sound
    useEffect(() => {
        if (bubbleDismissed || isOpen) return;
        const t = setTimeout(() => { setShowBubble(true); playPop(); }, 3000);
        return () => clearTimeout(t);
    }, [bubbleDismissed, isOpen]);

    // #8 Character wake reaction
    const triggerWake = useCallback(() => {
        setIsAwake(true);
        setTimeout(() => setIsAwake(false), 1800);
    }, []);

    const addBotReply = (text) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(p => [...p, { type: "bot", text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        }, 1200);
    };

    const handleSend = () => {
        if (!message.trim()) return;
        setMessages(p => [...p, { type: "user", text: message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setMessage("");
        triggerWake(); // #8
        addBotReply("Thanks for your message! Our relationship team will get back to you shortly. Reach us at contact@stefto.com 📧");
    };

    const handleQuickAction = (action) => {
        // #1 WhatsApp redirect for "Talk to Experts"
        if (action.label.includes("Experts")) {
            window.open(`https://wa.me/${WA_NUMBER}?text=Hi! I'd like to learn more about Stefto BPO and customer support services.`, '_blank');
            return;
        }
        setMessages(p => [...p, { type: "user", text: action.label, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        triggerWake(); // #8
        const responses = {
            "Services": "Stefto provides comprehensive BPO & customer experience solutions:\n\n📞 Inbound Helpdesk & Customer Support\n📤 Outbound Tele-calling & Sales Assistance\n📊 Real-Time Operations Analytics\n⚙️ Back-Office & Workflow Outsourcing",
            "Works": "Stefto works in 3 clear steps:\n\n1️⃣ Requirement Analysis: Define your BPO and support workflow needs.\n2️⃣ Team Alignment: We deploy professional telecallers and support staff.\n3️⃣ Operations & Scale: Real-time tracking and quality support launch immediately.",
            "Demo": "Excellent choice! 📅 Let me help schedule a personalized platform walkthrough. Please share your email or phone here, and our team will get in touch!",
        };
        const key = Object.keys(responses).find(k => action.label.includes(k));
        addBotReply(responses[key] || "Thanks for reaching out! 🙏");
    };

    const handleSureClick = () => { setShowBubble(false); setBubbleDismissed(true); setIsOpen(true); };
    const handleDismiss = () => { setShowBubble(false); setBubbleDismissed(true); };
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Dark mode conditional classes
    const dk = isDark;
    const screenBg = dk ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' : 'linear-gradient(180deg, #fff 0%, #f9fafb 100%)';
    const headerBg = dk ? 'bg-[#0f172a] border-b border-white/[0.06]' : 'bg-white border-b border-gray-100/80';
    const statusBg = dk ? 'bg-[#0f172a]' : 'bg-white';
    const statusText = dk ? 'text-white' : 'text-[#0f172a]';
    const inputBg = dk ? 'bg-[#0f172a] border-t border-white/[0.06]' : 'bg-white border-t border-gray-100';
    const inputFieldBg = dk ? 'bg-white/[0.06] ring-white/[0.08] text-white placeholder:text-gray-500' : 'bg-gray-50 ring-gray-200/60 text-gray-800 placeholder:text-gray-400';
    const botBubble = dk ? 'bg-white/[0.08] text-gray-200 rounded-2xl rounded-tl-sm' : 'bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm';
    const homeBg = dk ? 'bg-[#0f172a]' : 'bg-white';
    const homeBar = dk ? 'bg-white opacity-20' : 'bg-gray-900 opacity-20';
    const closeBtnCls = dk ? 'bg-white/[0.08] hover:bg-white/[0.15]' : 'bg-gray-100 hover:bg-gray-200';
    const closeIcon = dk ? 'text-gray-400' : 'text-gray-500';
    const nameColor = dk ? 'text-white' : 'text-[#0f172a]';
    const onlineColor = dk ? 'text-gray-500' : 'text-gray-400';
    const wallpaper = dk ? 'chat-wallpaper-dark' : 'chat-wallpaper';
    const cardCls = dk
        ? 'bg-white/[0.06] border-white/[0.08] hover:border-[#0ea5e9]/40 hover:shadow-[0_2px_12px_rgba(14,165,233,0.12)]'
        : 'bg-white border-gray-100 hover:border-[#0ea5e9]/30 hover:shadow-[0_2px_12px_rgba(14,165,233,0.08)]';
    const cardLabel = dk ? 'text-gray-200' : 'text-gray-900';
    const cardDesc = dk ? 'text-gray-500' : 'text-gray-400';

    return (
        <>
            {/* ═══ IDLE STATE ═══ */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div className="fixed bottom-0 right-4 sm:right-6 z-[110] flex items-end gap-0 flex-row-reverse"
                        initial={{ y: 80 }} animate={{ y: 0 }} exit={{ y: 80, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                        <div className="relative cursor-pointer select-none" onClick={() => setIsOpen(true)}>
                            {/* #4 Notification badge */}
                            <div className="absolute -top-1 -right-1 z-10">
                                <div className="chat-badge-pulse w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                    <span className="text-[8px] font-bold text-white relative z-10">1</span>
                                </div>
                            </div>
                            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
                                <img src={AVATAR_URL} alt="Chat" className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]" />
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {showBubble && (
                                <motion.div initial={{ opacity: 0, scale: 0.8, x: 10 }} animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: 10 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="relative mb-4 mr-1">
                                    <div className="bg-white rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100/80" style={{ maxWidth: '260px', minWidth: '220px' }}>
                                        <p className="text-[14px] text-gray-800 font-medium leading-relaxed">
                                            Hi friend! 👋 Can I tell you how <span className="text-stefto-blue font-semibold">Stefto</span> optimizes and boosts your business operations?
                                        </p>
                                        <div className="flex items-center gap-4 mt-4">
                                            <button onClick={handleSureClick} className="text-[14px] font-bold text-stefto-blue hover:text-stefto-dark transition-colors">Sure!</button>
                                            <button onClick={handleDismiss} className="text-[14px] font-medium text-gray-500 hover:text-gray-700 transition-colors">No thanks</button>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-5 -right-[8px] w-0 h-0" style={{ borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid white' }} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ═══ OPEN STATE: Phone + Sleeping Character ═══ */}
            <AnimatePresence>
                {isOpen && (<>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[119]" onClick={() => setIsOpen(false)} />

                    {/* #6 Drag to dismiss */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.88 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.88 }} transition={{ type: "spring", stiffness: 280, damping: 26 }}
                        drag="y" dragConstraints={{ top: 0, bottom: 0 }} dragElastic={0.4}
                        onDragEnd={(_, info) => { if (info.offset.y > 120) setIsOpen(false); }}
                        className="fixed bottom-4 right-4 sm:right-8 z-[120]">

                        {/* ── Sleeping/Waking Character on phone ── */}
                        <div className="relative flex justify-center mb-[-18px] z-[2]">
                            <div className="relative">
                                <img src={AVATAR_URL} alt="Assistant"
                                    className={`${isAwake ? 'chat-character-wake' : 'chat-character-sleep'} w-[60px] h-[60px] object-contain`} />
                                <div className="chat-sleep-shadow" />
                                {!isAwake && (<>
                                    <span className="chat-zzz text-[14px] top-0 right-[-8px]">z</span>
                                    <span className="chat-zzz text-[14px] top-[-4px] right-[-16px]">z</span>
                                    <span className="chat-zzz text-[14px] top-[-8px] right-[-22px]">z</span>
                                </>)}
                                {isAwake && (
                                    <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="absolute -top-1 right-[-6px] text-[14px]">👀</motion.span>
                                )}
                            </div>
                        </div>

                        {/* ── Phone Body ── */}
                        <div className="relative w-[280px] sm:w-[300px] h-[500px] sm:h-[530px] flex flex-col overflow-hidden"
                            style={{ borderRadius: '40px', background: '#1a1a1a', padding: '8px',
                                boxShadow: '0 40px 80px -15px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.04)' }}>
                            {/* Side buttons */}
                            <div className="absolute -left-[2px] top-[100px] w-[3px] h-[24px] bg-[#2a2a2a] rounded-l-sm" />
                            <div className="absolute -left-[2px] top-[134px] w-[3px] h-[42px] bg-[#2a2a2a] rounded-l-sm" />
                            <div className="absolute -left-[2px] top-[184px] w-[3px] h-[42px] bg-[#2a2a2a] rounded-l-sm" />
                            <div className="absolute -right-[2px] top-[148px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-r-sm" />

                            {/* Drag hint bar */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/20 rounded-full z-10" />

                            {/* Screen */}
                            <div className="relative flex-1 flex flex-col overflow-hidden" style={{ borderRadius: '34px', background: screenBg }}>
                                {/* Status bar */}
                                <div className={`shrink-0 flex items-center justify-between px-5 pt-2.5 pb-0.5 ${statusBg}`}>
                                    <span className={`text-[11px] font-bold w-10 ${statusText}`}>{now}</span>
                                    <div className="w-[80px] h-[22px] bg-black rounded-full flex items-center justify-center mx-auto">
                                        <div className="w-[7px] h-[7px] rounded-full bg-[#1a1a1a] ring-1 ring-[#333]" />
                                    </div>
                                    <div className="flex items-center gap-0.5 w-10 justify-end">
                                        <Signal className={`w-2.5 h-2.5 ${statusText}`} />
                                        <Wifi className={`w-2.5 h-2.5 ${statusText}`} />
                                        <Battery className={`w-3.5 h-2.5 ${statusText}`} />
                                    </div>
                                </div>

                                {/* Chat header */}
                                <div className={`shrink-0 px-3.5 py-2 ${headerBg} flex items-center justify-between`}>
                                    <div className="flex items-center gap-2">
                                        <div className="relative">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center">
                                                <Sparkles className="w-3.5 h-3.5 text-white" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border-[1.5px] border-white" />
                                        </div>
                                        <div>
                                            <h3 className={`text-[13px] font-bold tracking-tight leading-tight ${nameColor}`}>Stefto</h3>
                                            <div className="flex items-center gap-1">
                                                <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                                                <span className={`text-[9px] font-medium ${onlineColor}`}>Online</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsOpen(false)} className={`w-6 h-6 rounded-full flex items-center justify-center ${closeBtnCls} transition-colors`}>
                                        <X className={`w-3 h-3 ${closeIcon}`} />
                                    </button>
                                </div>

                                {/* Messages with wallpaper (#3) */}
                                <div className={`flex-1 overflow-y-auto px-2.5 py-2.5 space-y-2.5 ${wallpaper} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
                                    {messages.map((msg, idx) => (
                                        <motion.div key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                                            className={`flex gap-1.5 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                            {msg.type === 'bot'
                                                ? <div className="shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center mt-0.5"><Bot className="w-2.5 h-2.5 text-white" /></div>
                                                : <div className="shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mt-0.5"><User className="w-2.5 h-2.5 text-white" /></div>
                                            }
                                            <div className={`max-w-[80%] px-3 py-2 ${msg.type === 'user' ? 'bg-[#0f172a] text-white rounded-2xl rounded-tr-sm' : botBubble}`}>
                                                <p className="text-[11px] leading-relaxed whitespace-pre-line">{msg.text}</p>
                                                <p className={`text-[8px] mt-1 ${msg.type === 'user' ? 'text-white/40' : dk ? 'text-gray-500' : 'text-gray-400'} text-right`}>{msg.time}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                    <AnimatePresence>
                                        {isTyping && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex gap-1.5">
                                                <div className="shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center"><Bot className="w-2.5 h-2.5 text-white" /></div>
                                                <div className={`${botBubble} px-3 py-2 flex items-center gap-0.5`}>
                                                    {[0, 0.2, 0.4].map(d => <motion.span key={d} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: d }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />)}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    {messages.length <= 1 && !isTyping && (
                                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 gap-1.5 pt-0.5">
                                            {quickActions.map((a, i) => (
                                                <motion.button key={i} whileTap={{ scale: 0.97 }} onClick={() => handleQuickAction(a)}
                                                    className={`group flex flex-col items-start gap-1 p-2.5 rounded-xl border transition-all text-left ${cardCls}`}>
                                                    <span className="text-sm leading-none">{a.icon}</span>
                                                    <p className={`text-[10px] font-semibold group-hover:text-[#0ea5e9] transition-colors leading-tight ${cardLabel}`}>{a.label}</p>
                                                    <p className={`text-[8px] font-medium leading-tight ${cardDesc}`}>{a.desc}</p>
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    )}
                                    <div ref={endRef} />
                                </div>

                                {/* Input */}
                                <div className={`shrink-0 px-2.5 py-2 ${inputBg}`}>
                                    <div className={`flex items-center gap-1.5 rounded-full px-3 py-0.5 ring-1 focus-within:ring-2 focus-within:ring-[#0ea5e9]/30 transition-all ${inputFieldBg}`}>
                                        <input type="text" value={message} onChange={e => setMessage(e.target.value)}
                                            onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Type a message..."
                                            className="flex-1 min-w-0 py-2 bg-transparent text-[11px] focus:outline-none font-medium" />
                                        <motion.button onClick={handleSend} whileTap={{ scale: 0.9 }} disabled={!message.trim()}
                                            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-[#0ea5e9] text-white disabled:opacity-20 transition-all">
                                            <Send className="w-2.5 h-2.5" />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Home indicator */}
                                <div className={`shrink-0 flex justify-center pb-1.5 pt-0.5 ${homeBg}`}>
                                    <div className={`w-[80px] h-[3px] rounded-full ${homeBar}`} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>)}
            </AnimatePresence>
        </>
    );
}
