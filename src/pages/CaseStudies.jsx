import React, { useEffect } from 'react';
import { ChevronRight, ArrowUpRight, TrendingUp, Users, Zap, Award } from 'lucide-react';
import growthImg from '../assets/stefto_business_growth.png';
import securityOpsImg from '../assets/stefto_security_operations.png';
import techImg from '../assets/tech3.png';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      title: "Next-Gen Security Outsourcing",
      category: "Compliance",
      description: "Safeguarding client data through international regulations and innovative monitoring tools.",
      image: securityOpsImg,
      stats: "Zero Violations",
      link: "/security"
    },
    {
      title: "Seamless Customer Journey Design",
      category: "Customer Service",
      description: "Empowering customer experts to drive growth through omnichannel communication strategies.",
      image: techImg,
      stats: "99% satisfaction",
      link: "/customer-stories"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-24 sm:pt-32 pb-20">
      
      {/* 1. Hero Header */}
      <section className="w-full bg-white border-b border-slate-200 py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px]">
             <p className="text-stefto-sky font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2">
              <TrendingUp size={14} /> Proven Success
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-stefto-navy mb-8 block tracking-tight leading-tight">
              Real Impact through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stefto-indigo to-stefto-sky italic font-serif">Advanced Insights</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Explore how we help businesses leverage technology and human intelligence to drive sustainable growth and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Success Indicators Bar */}
      <section className="bg-stefto-navy w-full py-8 text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center gap-4 border-r border-white/10 last:border-0 pr-4">
                 <Zap className="text-stefto-sky" />
                 <div>
                    <h5 className="text-lg font-bold">15+</h5>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Industry Awards</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 border-r border-white/10 last:border-0 pr-4">
                 <Users className="text-stefto-sky" />
                 <div>
                    <h5 className="text-lg font-bold">250+</h5>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Global Clients</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 border-r border-white/10 last:border-0 pr-4">
                 <Award className="text-stefto-sky" />
                 <div>
                    <h5 className="text-lg font-bold">1200+</h5>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Experts Certified</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 border-r border-white/10 last:border-0 pr-4">
                 <TrendingUp className="text-stefto-sky" />
                 <div>
                    <h5 className="text-lg font-bold">₹10B+</h5>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Wealth Managed</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Case Studies Grid */}
      <section className="w-full py-20 sm:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {cases.map((cs, idx) => (
              <div key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                   <div className="absolute inset-0 bg-stefto-navy/40 group-hover:bg-stefto-navy/10 transition-colors duration-500 z-10"></div>
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full z-20 text-stefto-navy text-xs font-bold shadow-lg border border-white">
                      {cs.category}
                   </div>
                   <div className="absolute bottom-4 left-4 z-20">
                      <div className="bg-stefto-sky text-stefto-navy font-bold px-4 py-2 rounded-xl text-sm shadow-xl">
                         {cs.stats}
                      </div>
                   </div>
                   <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold text-stefto-navy mb-4 group-hover:text-stefto-indigo transition-colors leading-tight">
                     {cs.title}
                   </h3>
                   <p className="text-slate-500 text-sm sm:text-base mb-8 flex-grow leading-relaxed">
                     {cs.description}
                   </p>
                   <a 
                    href={cs.link} 
                    className="flex items-center gap-2 text-stefto-indigo font-bold uppercase tracking-widest text-xs hover:text-stefto-sky transition-colors group/btn"
                   >
                     Read Success Story 
                     <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                   </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="w-full py-20 bg-stefto-navy text-white text-center rounded-[3rem] max-w-[1200px] mx-auto px-8 shadow-2xl relative overflow-hidden mb-20">
         <div className="absolute top-0 left-0 w-64 h-64 bg-stefto-sky/10 blur-3xl translate-x-[-20%] translate-y-[-20%]"></div>
         <h2 className="text-3xl sm:text-4xl font-bold mb-8 relative z-10 italic">
           Think business analysis can reach <br />
           <span className="text-stefto-sky not-italic font-bold">new heights?</span>
         </h2>
         <p className="text-slate-400 mb-10 text-lg relative z-10">We have the expert advice and professional team to get you there.</p>
         <button className="bg-stefto-sky font-bold text-stefto-navy px-12 py-5 rounded-full hover:bg-white transition-all transform hover:scale-105 relative z-10 shadow-xl">
           GET IN TOUCH — TALK TO US
         </button>
      </section>

    </main>
  );
};

export default CaseStudies;
