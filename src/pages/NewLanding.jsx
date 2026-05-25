import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LandingLayout from "../components/layout/LandingLayout";
import HeroSection from "./LandingPage/components/HeroSection";
import HeroSectionV2 from "./LandingPage/components/HeroSectionV2";
import StatsBar from "./LandingPage/components/StatsBar";
import AboutSection from "./LandingPage/components/AboutSection";
import LogoTicker from "./LandingPage/components/LogoTicker";
import FeaturesGrid from "./LandingPage/components/FeaturesGrid";
import HowItWorksVideo from "./LandingPage/components/HowItWorksVideo";
import FeatureSlider from "./LandingPage/components/FeatureSlider";
import ComparisonSection from "./LandingPage/components/ComparisonSection";
import OfficeSection from "./LandingPage/components/OfficeSection";
import PricingSection from "./LandingPage/components/PricingSection";
import FAQSection from "./LandingPage/components/FAQSection";

export default function NewLanding() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <LandingLayout>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#2563eb] z-[100] origin-left shadow-[0_0_8px_rgba(37,99,235,0.6)]"
                style={{ scaleX }}
            />

            {/* 1. Hero V2 — Paisabazaar-style layout */}
            <HeroSectionV2 />

            {/* Original Hero (hidden — swap if needed) */}
            {/* <HeroSection /> */}

            {/* 2. Stats Bar */}
            <StatsBar />

            {/* 3. About Section (Removed as requested) */}
            {/* <AboutSection /> */}

            {/* 4. Logo Ticker - Social Proof */}
            <LogoTicker />

            {/* 5. Features Grid */}
            <FeaturesGrid />

            {/* 6. Dark Gradient Wrapper */}
            <div
                className="relative overflow-hidden"
                style={{
                    background: "linear-gradient(160deg, #1c469d 0%, #1e3b6f 40%, #193260 80%, #142b54 100%)"
                }}
            >
                {/* Ambient color blobs */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full opacity-35"
                        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.28) 0%, transparent 70%)" }}
                    />
                    <div
                        className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
                        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }}
                    />
                    <div
                        className="absolute bottom-10 left-1/3 w-[450px] h-[450px] rounded-full opacity-20"
                        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)" }}
                    />
                </div>

                {/* 7. How It Works */}
                <HowItWorksVideo />

                {/* 8. Feature Slider */}
                <FeatureSlider />

                {/* Bottom Wave */}
                <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
                    <svg
                        viewBox="0 0 1440 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative block w-full h-[40px] md:h-[60px]"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,60 C240,0 480,50 720,25 C960,0 1200,40 1440,60 L1440,60 L0,60 Z" fill="#142b54" />
                    </svg>
                </div>
            </div>

            {/* 9. Comparison Section */}
            <ComparisonSection />

            {/* 10. Office Section */}
            <OfficeSection />

            {/* 11. Pricing / Service Configurations */}
            <PricingSection />

            {/* 12. FAQ */}
            <FAQSection />
        </LandingLayout>
    );
}
