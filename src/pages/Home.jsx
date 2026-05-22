import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LandingLayout from "../components/layout/LandingLayout";
import HeroSection from "./LandingPage/components/HeroSection";
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
import ServicesSection from "./LandingPage/components/ServicesSection";
import ContactSection from "./LandingPage/components/ContactSection";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <LandingLayout>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#3b82f6] z-[100] origin-left shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                style={{ scaleX }}
            />

            {/* 1. Hero Section - Main Value Proposition */}
            <HeroSection />

            {/* Stats Bar */}
            <StatsBar />



            {/* About Section */}
            <AboutSection />

            {/* 2. Logo Ticker - Social Proof */}
            <LogoTicker />

            {/* 3. Features - What We Offer */}
            {/* <FeaturesGrid /> */}

            {/* Shared Gradient Wrapper for Seamless Flow */}
            {/*
            <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #1c469d 0%, #1e3b6f 40%, #193260 80%, #142b54 100%)" }}>
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full opacity-35"
                        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.28) 0%, transparent 70%)" }} />
                    <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
                        style={{ background: "radial-gradient(circle, rgba(0,113,227,0.25) 0%, transparent 70%)" }} />
                    <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] rounded-full opacity-20"
                        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)" }} />
                </div>

                {/* 4. How It Works - Step by Step Guide * /}
                {/* <HowItWorksVideo /> * /}

                {/* 5. Feature Slider - Platform Highlights * /}
                <FeatureSlider />

                {/* Bottom Wave joining Pricing Section * /}
                <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none pointer-events-none z-20">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[40px] md:h-[60px]" preserveAspectRatio="none">
                        <path d="M0,60 C240,0 480,50 720,25 C960,0 1200,40 1440,60 L1440,60 L0,60 Z" fill="#142b54" />
                    </svg>
                </div>
            </div>
            */}

            {/* 9. Comparison - Why Choose Stefto */}
            {/* <ComparisonSection /> */}

            {/* 10. Office Section */}
            {/* <OfficeSection /> */}

            {/* 11. Pricing - Plans & Pricing */}
            {/* <PricingSection /> */}

            {/* Core Services Section from previous Next.js repo */}
            <ServicesSection />

            {/* 12. FAQ - Common Questions */}
            <FAQSection />

            {/* 13. Contact Section */}
            <ContactSection />
        </LandingLayout>
    );
}