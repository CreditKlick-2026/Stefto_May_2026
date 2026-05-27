import React, { useEffect, useRef } from 'react';
import { Target, Eye, Rocket, CheckCircle2, Shield, Zap, TrendingUp, Users, Cpu, FileAudio, ListOrdered, ClipboardCheck, Landmark } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LandingLayout from '../components/layout/LandingLayout';

const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group h-full">
    <div className="w-12 h-12 bg-blue-50 text-[#1a237e] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-bold text-[#041434] mb-2">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-normal text-xs sm:text-sm flex-1 text-justify">{desc}</p>
  </div>
);



const AboutUs = () => {
  const carouselRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#why-stefto') {
      const element = document.getElementById('why-stefto');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {

    // Auto-scroll logic for mobile carousel
    let scrollInterval;
    if (window.innerWidth < 768) {
      scrollInterval = setInterval(() => {
        if (carouselRef.current) {
          const container = carouselRef.current;
          const cardWidth = container.offsetWidth * 0.85 + 24; // Width + gap
          const currentScroll = container.scrollLeft;
          const maxScroll = container.scrollWidth - container.offsetWidth;

          if (currentScroll >= maxScroll - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }
      }, 3500);
    }

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <LandingLayout footerCurveColor="fill-slate-50">
      <main className="w-full bg-slate-50 min-h-screen overflow-x-hidden pt-16">

        {/* Our Story Section */}
        <section className="w-full pt-20 pb-16 relative z-20 overflow-hidden" style={{ minHeight: 340 }}>
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f4f7fc] via-[#f0f4fb] to-[#e8eef8]"></div>

            {/* Cityscape image — full background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
              }}
            >
              {/* Blue overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f0f4fb] via-[#e8eef8]/90 to-[#dde5f4]/60"></div>
              <div className="absolute inset-0 bg-[#e8eef8]/40 mix-blend-multiply"></div>
            </div>

            {/* Glowing light orbs */}
            <div className="absolute top-[20%] right-[25%] w-3 h-3 bg-white rounded-full shadow-[0_0_20px_8px_rgba(255,255,255,0.8)]"></div>
            <div className="absolute top-[35%] right-[40%] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_6px_rgba(255,255,255,0.7)]"></div>
            <div className="absolute top-[15%] right-[35%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_18px_7px_rgba(255,255,255,0.75)]"></div>
            <div className="absolute top-[50%] right-[20%] w-2 h-2 bg-white rounded-full shadow-[0_0_12px_5px_rgba(255,255,255,0.6)]"></div>
            <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_4px_rgba(255,255,255,0.5)]"></div>

            {/* Sweeping light streak */}
            <div className="absolute bottom-[30%] left-[10%] w-[60%] h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-[-5deg]"></div>
          </div>

          <div className="max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            {/* Left-aligned heading like Figma */}
            <div className="max-w-md mb-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#041434] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Our Story
              </h1>
              <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                We provide industry-leading services<br className="hidden sm:block" /> designed to achieve your Goals .
              </p>
            </div>

            {/* Info block (no card) */}
            <div className="max-w-[700px] flex items-start gap-4 sm:gap-6 mt-4">
              <div className="shrink-0 flex items-center justify-center mt-1 sm:mt-1.5">
                <Landmark className="text-[#1e3a8a] w-8 h-8 sm:w-9 sm:h-9" strokeWidth={1.75} />
              </div>
              <p className="text-[15px] sm:text-[17px] font-semibold text-slate-800 leading-relaxed">
                Incorporated in <span className="text-[#1e3a8a] font-bold">August 2007</span>, as a debt management organization, we have diversified into customer service, sales & retention.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Goals */}
        <section className="w-full pt-4 pb-12 bg-slate-50 relative z-20 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 sm:pb-0 md:grid md:grid-cols-3 snap-x snap-mandatory scrollbar-hide"
            >
              {/* Goal Card */}
              <div className="min-w-[280px] md:min-w-0 snap-center relative overflow-hidden p-6 sm:p-7 border border-slate-100 rounded-2xl shadow-sm bg-white">
                {/* Decorative blob */}
                <div className="absolute -top-6 -right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl rotate-12 bg-gradient-to-br from-[#0f57a6] to-[#0a3d7a] opacity-90"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-50 text-[#3b82f6] rounded-full flex items-center justify-center mb-4">
                    <Target size={24} />
                  </div>
                  <h2 className="text-lg font-bold text-[#041434] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>Goals</h2>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm text-justify">
                    We tackle our clients' most difficult challenges by offering exceptional services in strategy, consulting, digital, technology, and operations. Our goal is to drive innovation that enhances both, the way the world operates and the quality of life.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="min-w-[280px] md:min-w-0 snap-center relative overflow-hidden p-6 sm:p-7 border border-slate-100 rounded-2xl shadow-sm bg-white">
                {/* Decorative blob */}
                <div className="absolute -top-6 -right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl rotate-12 bg-gradient-to-br from-[#0f57a6] to-[#0a3d7a] opacity-90"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-50 text-[#1a237e] rounded-full flex items-center justify-center mb-4">
                    <Rocket size={24} />
                  </div>
                  <h2 className="text-lg font-bold text-[#041434] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>Mission</h2>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm text-justify">
                    To shape the future of the Business Process Management industry by pioneering transformational technologies and capabilities. We strive to stay ahead of the curve to drive growth for our customers, deliver value to investors, and enrich overall experiences.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="min-w-[280px] md:min-w-0 snap-center relative overflow-hidden p-6 sm:p-7 border border-slate-100 rounded-2xl shadow-sm bg-white">
                {/* Decorative blob */}
                <div className="absolute -top-6 -right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl rotate-12 bg-gradient-to-br from-[#0f57a6] to-[#0a3d7a] opacity-90"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Eye size={24} />
                  </div>
                  <h2 className="text-lg font-bold text-[#041434] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>Vision</h2>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm text-justify">
                    Our aim is to lead in the markets we target and be recognized as the most trusted partner by our clients. We achieve this by streamlining complex business processes with advanced technology and top-notch industry practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Our Partner Section */}
        {/*
      <section className="w-full py-16 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041434]">Our Partners</h2>
          </div>
          
          <div className="ticker-container">
            <div className="ticker-content gap-12 sm:gap-20 items-center">
              {[1, 2].map((loop) => (
                <div key={loop} className="flex gap-12 sm:gap-20 items-center px-6">
                  {[
                    "BAJAJ", "CASHE", "HINDUJA", "ZEST", 
                    "YES BANK", "IDFC", "AU", "TATA", "PAYTM"
                  ].map((partner, index) => (
                    <div 
                      key={`${loop}-${index}`}
                      className="px-5 py-3 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center min-w-[120px] transition-all duration-300"
                    >
                      <span className="text-base sm:text-lg font-black text-slate-300 tracking-widest uppercase">{partner}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

        {/* Core Values */}
        <section className="w-full py-16 sm:py-24 bg-slate-50 relative">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041434] mb-6" style={{ fontFamily: "'Fraunces', serif" }}>What we value</h2>
              <p className="text-slate-500 text-lg sm:text-xl">
                These core principles shape our culture, guide our interactions, and form the foundation of our operations worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ValueCard
                icon={Shield}
                title="Professionalism"
                desc="At our core, we uphold the highest standards of professionalism, ensuring every interaction reflects our commitment to excellence."
              />
              <ValueCard
                icon={TrendingUp}
                title="Empowerment"
                desc="We celebrate the individual journey of growth and success, fostering an environment where personal achievements are recognized and valued."
              />
              <ValueCard
                icon={Users}
                title="Solidarity"
                desc="Our emphasis on solidarity creates a cohesive community, where collaboration and communication thrive to achieve common goals."
              />
              <ValueCard
                icon={CheckCircle2}
                title="Authenticity"
                desc="Transparency and honesty form the foundation of our operations. We believe in the power of authenticity to build trust and credibility."
              />
              <ValueCard
                icon={Zap}
                title="Vibrancy"
                desc="Infusing energy and enthusiasm into everything we do, our vibrant culture sparks creativity and innovation, driving dynamic solutions."
              />
              <ValueCard
                icon={Cpu}
                title="Innovation"
                desc="We leverage cutting-edge technology and intelligent automation to continually refine our services and drive forward-thinking results."
              />

            </div>
          </div>
        </section>

        {/* Why Trust Stefto section has been moved to its own dedicated page `/why-trust-stefto` */}



      </main>
    </LandingLayout>
  );
};

export default AboutUs;
