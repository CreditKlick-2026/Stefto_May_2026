import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
    MessageCircle,
    Zap,
    Shield,
    Globe,
    Server,
    Smartphone,
    Activity,
    TrendingUp,
    Users
} from "lucide-react";

// Floating particle component
const FloatingParticle = ({ delay, duration, size, color, startX, startY }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            background: color,
            left: startX,
            top: startY,
        }}
        animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

// Animated flow node component
const FlowNode = ({ icon: Icon, label, sublabel, bgColor, borderColor, iconBg, iconText, delay, isActive, position }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08, y: -8 }}
        className="relative cursor-pointer group"
        style={position}
    >
        {/* Glow effect on hover/active */}
        {isActive && (
            <motion.div
                className={`absolute -inset-3 rounded-2xl ${borderColor.replace('border-', 'bg-')} opacity-30 blur-xl`}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
        )}

        {/* Card */}
        <div className={`relative ${bgColor} border-2 ${borderColor} rounded-2xl p-4 shadow-xl transition-all duration-300 group-hover:shadow-2xl`}>
            <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${iconText}`} />
                </div>
                <div>
                    <p className="font-bold text-slate-800 dark:text-white text-sm">{label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{sublabel}</p>
                </div>
            </div>

            {/* Activity indicator */}
            {isActive && (
                <motion.div
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                />
            )}
        </div>
    </motion.div>
);

// Message bubble animation
const MessageBubble = ({ index }) => {
    const delay = index * 0.5;

    return (
        <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ x: -150, y: 0, opacity: 0, scale: 0 }}
            animate={{
                x: [-150, -50, 50, 150],
                y: [0, -35, 35, 0],
                opacity: [0, 1, 1, 0],
                scale: [0.4, 1, 1, 0.4],
            }}
            transition={{
                duration: 4,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-300/50">
                    <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <motion.div
                    className="absolute inset-0 rounded-full bg-green-400"
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                    transition={{ duration: 1.2, delay: delay + 0.3, repeat: Infinity }}
                />
            </div>
        </motion.div>
    );
};

// Stats card
const StatCard = ({ icon: Icon, value, label, iconColor, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-3 min-w-[100px] shadow-lg"
    >
        <div className="flex items-center gap-2 mb-1">
            <Icon className={`w-4 h-4 ${iconColor}`} />
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</span>
        </div>
        <p className="text-xl font-bold text-slate-800 dark:text-white">{value}</p>
    </motion.div>
);

export default function HeroVisualizer() {
    const [activeFlow, setActiveFlow] = useState(0);
    const [messageCount, setMessageCount] = useState(0);
    const containerRef = useRef(null);

    // Cycle through flow states
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFlow((prev) => (prev + 1) % 4);
            setMessageCount((prev) => prev + Math.floor(Math.random() * 50) + 10);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Mouse parallax effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
    const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);
    const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full aspect-square max-w-xl mx-auto overflow-hidden"
            style={{ perspective: "1200px" }}
        >
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(12)].map((_, i) => (
                    <FloatingParticle
                        key={i}
                        delay={i * 0.4}
                        duration={5 + Math.random() * 3}
                        size={6 + Math.random() * 10}
                        color={i % 3 === 0 ? "rgba(34, 197, 94, 0.6)" : i % 3 === 1 ? "rgba(59, 130, 246, 0.6)" : "rgba(168, 85, 247, 0.6)"}
                        startX={`${Math.random() * 100}%`}
                        startY={`${75 + Math.random() * 25}%`}
                    />
                ))}
            </div>

            {/* Main 3D container */}
            <motion.div
                className="relative w-full h-full"
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Central hub */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                    {/* Outer rotating ring */}
                    <motion.div
                        className="absolute inset-0 -m-10 rounded-full border-[3px] border-dashed border-green-400/40"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Second ring */}
                    <motion.div
                        className="absolute inset-0 -m-6 rounded-full border-2 border-blue-400/30"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Central orb */}
                    <div className="relative">
                        {/* Glow */}
                        <motion.div
                            className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-green-400/40 via-emerald-500/40 to-blue-500/40 blur-2xl"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Main circle */}
                        <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-blue-600 p-1 shadow-2xl shadow-green-400/40">
                            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                >
                                    <Zap className="w-12 h-12 text-blue-500" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Pulse rings */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0 rounded-full border-2 border-green-400/40"
                                initial={{ scale: 1, opacity: 0.6 }}
                                animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                                transition={{ duration: 2.5, delay: i * 0.8, repeat: Infinity }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Flow nodes */}
                <FlowNode
                    icon={Smartphone}
                    label="Your App"
                    sublabel="API Request"
                    bgColor="bg-white dark:bg-slate-800"
                    borderColor="border-purple-300 dark:border-purple-500/50"
                    iconBg="bg-purple-100 dark:bg-purple-500/20"
                    iconText="text-purple-600 dark:text-purple-400"
                    delay={0.2}
                    isActive={activeFlow === 0}
                    position={{ position: 'absolute', left: '0%', top: '15%' }}
                />

                <FlowNode
                    icon={Server}
                    label="Stefto Queue"
                    sublabel="Processing..."
                    bgColor="bg-white dark:bg-slate-800"
                    borderColor="border-green-300 dark:border-blue-500/50"
                    iconBg="bg-green-100 dark:bg-blue-500/20"
                    iconText="text-blue-600 dark:text-green-400"
                    delay={0.4}
                    isActive={activeFlow === 1}
                    position={{ position: 'absolute', right: '0%', top: '8%' }}
                />

                <FlowNode
                    icon={Shield}
                    label="Rate Limiter"
                    sublabel="Anti-Ban Active"
                    bgColor="bg-white dark:bg-slate-800"
                    borderColor="border-blue-300 dark:border-blue-500/50"
                    iconBg="bg-blue-100 dark:bg-blue-500/20"
                    iconText="text-blue-600 dark:text-blue-400"
                    delay={0.6}
                    isActive={activeFlow === 2}
                    position={{ position: 'absolute', right: '0%', top: '55%' }}
                />

                <FlowNode
                    icon={Globe}
                    label="WhatsApp"
                    sublabel="Delivered ✓"
                    bgColor="bg-white dark:bg-slate-800"
                    borderColor="border-emerald-300 dark:border-emerald-500/50"
                    iconBg="bg-emerald-100 dark:bg-emerald-500/20"
                    iconText="text-emerald-600 dark:text-emerald-400"
                    delay={0.8}
                    isActive={activeFlow === 3}
                    position={{ position: 'absolute', left: '0%', top: '65%' }}
                />

                {/* Animated message bubbles */}
                {[...Array(4)].map((_, i) => (
                    <MessageBubble key={i} index={i} />
                ))}

                {/* Stats bar */}
                <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <StatCard
                        icon={Activity}
                        value={`${(messageCount / 10).toFixed(1)}k`}
                        label="Sent"
                        iconColor="text-blue-500"
                        delay={1.3}
                    />
                    <StatCard
                        icon={TrendingUp}
                        value="99.9%"
                        label="Success"
                        iconColor="text-blue-500"
                        delay={1.4}
                    />
                    <StatCard
                        icon={Users}
                        value="2.1M"
                        label="Users"
                        iconColor="text-purple-500"
                        delay={1.5}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
