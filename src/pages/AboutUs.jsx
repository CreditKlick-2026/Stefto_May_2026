import React, { useEffect, useRef } from 'react';
import { Target, Eye, Rocket, CheckCircle2, Shield, Zap, TrendingUp, Users, Cpu, FileAudio, ListOrdered, ClipboardCheck } from 'lucide-react';
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
        <section className="w-full pt-16 pb-10 bg-slate-50 relative z-20 overflow-hidden">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#041434] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Our Story
              </h1>
              <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                We provide industry-leading services designed to achieve your Goals .
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-6">
                <span className="text-[#1e3a8a] font-semibold">
                  Incorporated in August 2007
                </span>, as a debt management organization, we have diversified into customer service, sales  & retention.
              </h2>




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
              <div className="min-w-[280px] md:min-w-0 snap-center p-6 sm:p-10 border border-slate-100 rounded-xl shadow-sm bg-white">
                <div className="w-14 h-14 bg-blue-50 text-[#3b82f6] rounded-full flex items-center justify-center mb-6">
                  <Target size={28} />
                </div>
                <h2 className="text-xl font-bold text-[#041434] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>Goals</h2>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm text-justify">
                  We tackle our clients' most difficult challenges by offering exceptional services in strategy, consulting, digital, technology, and operations. Our goal is to drive innovation that enhances both, the way the world operates and the quality of life.
                </p>
              </div>

              {/* Mission Card */}
              <div className="min-w-[280px] md:min-w-0 snap-center p-6 sm:p-10 border border-slate-100 rounded-xl shadow-sm bg-white">
                <div className="w-14 h-14 bg-indigo-50 text-[#1a237e] rounded-full flex items-center justify-center mb-6">
                  <Rocket size={28} />
                </div>
                <h2 className="text-xl font-bold text-[#041434] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>Mission</h2>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm text-justify">
                  To shape the future of the Business Process Management industry by pioneering transformational technologies and capabilities. We strive to stay ahead of the curve to drive growth for our customers, deliver value to investors, and enrich overall experiences.
                </p>
              </div>

              {/* Vision Card  a*/}
              <div className="min-w-[280px] md:min-w-0 snap-center p-6 sm:p-10 border border-slate-100 rounded-xl shadow-sm bg-white">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Eye size={28} />
                </div>
                <h2 className="text-xl font-bold text-[#041434] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>Vision</h2>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm text-justify">
                  Our aim is to lead in the markets we target and be recognized as the most trusted partner by our clients. We achieve this by streamlining complex business processes with advanced technology and top-notch industry practices.
                </p>
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
