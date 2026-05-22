import React, { useEffect } from 'react';
import { ShieldCheck, Target, Activity, Users, Settings, Globe } from 'lucide-react';
import heroImg from '../assets/stefto_security_hero.png';
import secOpsImg from '../assets/stefto_security_operations.png';

const Security = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <section 
        className="w-full relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-48 flex items-center justify-center overflow-hidden bg-stefto-navy"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/80 xl:bg-stefto-navy/70 z-0"></div>
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-orange-400 font-bold tracking-[0.15em] uppercase text-xs sm:text-sm mb-4">
            About Stefto Service
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Security of the <span className="italic font-serif">new world</span>
          </h1>
          <div className="w-24 h-1 bg-stefto-sky mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* 2. Intro Statement Section */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-stefto-navy mb-8 leading-tight tracking-tight">
            Our security outsourcing services are <br className="hidden sm:block" />
            <span className="text-stefto-indigo italic">unmatched</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Stefto is proud to be a trusted provider of omnichannel solutions for clients, offering unparalleled security outsourcing services. We continuously adapt to technological advancements, monitor risks and threats, comply with international data privacy regulations, and innovate to safeguard company and customer data.
          </p>
        </div>
      </section>

      <section className="w-full py-16 sm:py-24 bg-white border-t border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative group h-[300px] sm:h-[400px]">
              <div className="absolute inset-0 bg-stefto-indigo/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img 
                src={secOpsImg} 
                alt="Security image Stefto" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md w-16 h-16 mb-6">
                <ShieldCheck size={32} className="text-stefto-indigo" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stefto-navy mb-6 leading-tight">
                Make all your processes efficient, accurate, and fast
              </h3>
              <p className="text-lg text-slate-600 border-l-4 border-stefto-sky pl-4 italic">
                Every customer deserves the best experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Standards Section (Next-Level Design) */}
      <section className="w-full py-20 sm:py-32 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 sm:mb-20 gap-8">
            <div className="max-w-[700px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-stefto-sky rounded-full"></div>
                <span className="text-stefto-indigo font-bold tracking-widest text-xs uppercase">Precision & Scale</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-stefto-navy leading-[1.1] tracking-tight">
                Operational Processes <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-stefto-navy to-stefto-sky">and Standards</span>
              </h2>
            </div>
            <div className="max-w-[400px]">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium border-l-2 border-slate-200 pl-6">
                This daily performance management process allows frontline managers to concentrate on providing feedback, coaching, and developing top-performing customer experts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[900px]">
            
            {/* Premium Card 1: Stefto Enterprise Standard */}
            <div className="relative group rounded-2xl p-[1px] overflow-hidden bg-gradient-to-br from-white/20 via-white/10 to-white/20 hover:from-stefto-sky hover:via-white/30 hover:to-stefto-sky transition-all duration-700 shadow-sm hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-stefto-sky/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
              
              <div className="relative h-full bg-stefto-indigo rounded-[15px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Stefto Enterprise Standard
                  </h4>
                  
                  <p className="text-slate-200 text-base leading-relaxed relative z-10 group-hover:text-white transition-colors">
                    Drawing on decades of expertise, our standards ensure consistent management, service quality, and performance across our global operations. We set the benchmark.
                  </p>
                </div>

                <div className="mt-8 flex items-center text-stefto-sky font-bold text-xs tracking-wide opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 uppercase">
                  EXPLORE STANDARD <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Premium Card 2: Six Sigma Lean */}
            <div className="relative group rounded-2xl p-[1px] overflow-hidden bg-gradient-to-br from-white/20 via-white/10 to-white/20 hover:from-stefto-sky hover:via-white/30 hover:to-stefto-sky transition-all duration-700 shadow-sm hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-bl from-stefto-sky/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
              
              <div className="relative h-full bg-stefto-navy rounded-[15px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Six Sigma Lean
                  </h4>
                  
                  <p className="text-slate-200 text-base leading-relaxed relative z-10 group-hover:text-white transition-colors">
                    We analyze customer contact reasons to guide performance, address the most relevant issues, and proactively offer security outsourcing services with maximum efficiency.
                  </p>
                </div>

                <div className="mt-8 flex items-center text-stefto-sky font-bold text-xs tracking-wide opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 uppercase">
                  DISCOVER LEAN <span className="ml-2">→</span>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* 5. Frameworks that are Holistic (Redesigned) */}
      <section className="w-full py-24 sm:py-32 bg-stefto-navy relative overflow-hidden">
        {/* Advanced Background Gradients */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-stefto-sky/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-stefto-indigo/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-[800px] mx-auto mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Frameworks that are <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stefto-sky to-blue-300 font-serif italic"> Holistic</span>
            </h2>
            <div className="w-20 h-1 bg-stefto-sky rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
            
            {/* Pillar 1: People */}
            <div className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.06] hover:border-stefto-sky/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stefto-indigo to-stefto-sky opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-stefto-indigo/20 flex items-center justify-center mb-8 border border-stefto-indigo/30 group-hover:scale-110 transition-transform duration-500">
                <Users size={32} className="text-stefto-sky" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">People</h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed group-hover:text-white transition-colors">
                In everything we do, people are at the center. We prioritize human connections and growth.
              </p>
            </div>

            {/* Pillar 2: Process (Hero Card) */}
            <div className="group relative bg-stefto-indigo/20 border border-stefto-indigo/40 rounded-3xl p-8 sm:p-10 hover:bg-stefto-indigo/40 hover:border-stefto-sky transition-all duration-500 overflow-hidden transform md:-translate-y-6 shadow-[0_0_40px_rgba(26,35,126,0.2)] hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-stefto-sky/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-stefto-sky/20 flex items-center justify-center mb-8 border border-stefto-sky/30 group-hover:rotate-90 transition-transform duration-700">
                <Settings size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Process</h3>
              <p className="text-blue-100/70 text-base sm:text-lg leading-relaxed group-hover:text-blue-50 transition-colors relative z-10">
                Consistent across the globe. Our standardizations ensure scale, efficiency, and reliability.
              </p>
            </div>

            {/* Pillar 3: Culture */}
            <div className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.06] hover:border-stefto-sky/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-stefto-indigo to-stefto-sky opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-stefto-indigo/20 flex items-center justify-center mb-8 border border-stefto-indigo/30 group-hover:rotate-[360deg] transition-transform duration-1000">
                <Globe size={32} className="text-stefto-sky" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Culture</h3>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                Diverse in culture. We celebrate varied perspectives that drive innovation worldwide.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Security;
