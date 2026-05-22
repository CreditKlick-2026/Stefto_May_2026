import React, { useEffect } from 'react';
import { 
  ClipboardCheck, 
  BarChart3, 
  Users, 
  Lightbulb, 
  CheckCircle2, 
  Settings, 
  FileSpreadsheet, 
  Database, 
  Receipt, 
  BookOpen, 
  Briefcase, 
  Calculator, 
  FileSearch, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';
import serviceBg from '../assets/services_dropdown_bg.png';

const BackOfficeSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { title: "Payroll Outsourcing", icon: Users },
    { title: "Data Enrichment", icon: Database },
    { title: "Invoice Processing", icon: Receipt },
    { title: "Book Keeping", icon: BookOpen },
    { title: "Data Entry", icon: FileSpreadsheet },
    { title: "Document Imaging", icon: Settings },
    { title: "Human Resource Outsourcing", icon: Briefcase },
    { title: "Cash Flow Management", icon: BarChart3 },
    { title: "Data Extraction", icon: FileSearch },
    { title: "Translingual Data Entry", icon: Globe },
    { title: "Finance Functions", icon: Calculator },
    { title: "Statutory Compliance", icon: ShieldCheck }
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section 
        className="w-full relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-56 lg:pb-56 flex items-center bg-stefto-navy overflow-hidden"
        style={{
          backgroundImage: `url(${serviceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/80 z-0"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-[800px]">
              <p className="text-stefto-sky font-bold tracking-widest text-xs sm:text-sm uppercase mb-4">
                Services for Businesses of All Sizes
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                Intelligent <br />
                <span className="italic font-serif text-stefto-sky">Back-Office Support</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-[600px] leading-relaxed mb-10">
                Running a business is exhausting. Stefto manages your crucial day-to-day administrative tasks so you can finally focus on your core business practices.
              </p>
              <button className="bg-stefto-sky hover:bg-white text-stefto-navy font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                TALK TO US NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Rethinking Operations Section */}
      <section className="w-full py-20 sm:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-[900px]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stefto-navy mb-8 block leading-[1.1]">
                Rethinking back-office operations by leveraging <br className="hidden sm:block" />
                <span className="text-stefto-indigo italic">digitisation and technology</span>
              </h2>
              <div className="w-24 h-1.5 bg-stefto-sky rounded-full mb-10"></div>
              <p className="text-lg text-slate-600 leading-relaxed font-normal mb-8">
                We empower your back-office operations to drive your business growth. When implemented right, administrative tasks can help in accelerating your business growth. We help our clients handle operations holistically with sales, customer service and marketing to provide a unified and enhanced customer experience.
              </p>
              <div className="bg-slate-50 border-l-4 border-stefto-sky p-8 rounded-r-2xl italic text-slate-700 font-medium">
                "Our unique power of machines + human intelligence approach helps you grow your business and race ahead of competitions with a seamless back-office operation."
              </div>
           </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="w-full py-20 sm:py-32 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-[800px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-stefto-navy mb-6">
              Tailored Back-Office Services
            </h2>
            <p className="text-slate-500 font-medium">
              We handle your back-office tasks so that you can concentrate on your core practices. We fully comply with your internal and external guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((svc, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-stefto-indigo transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-stefto-indigo group-hover:bg-stefto-indigo group-hover:text-white transition-all duration-300 mb-6 group-hover:rotate-6 shadow-inner">
                  <svc.icon size={28} />
                </div>
                <h4 className="text-lg font-bold text-stefto-navy leading-tight">{svc.title}</h4>
                <div className="w-0 h-0.5 bg-stefto-sky mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits Section (Dark Side) */}
      <section className="w-full py-20 sm:py-32 bg-stefto-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stefto-sky opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-5xl font-bold mb-10 tracking-tight">
                Benefits of Outsourcing your <span className="text-stefto-sky italic">Back-Office Tasks</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Free up your time and resources to focus on business strengths",
                  "Trust experienced professionals who are experts in their fields",
                  "100% detailed records with regular 24/7 cloud updates",
                  "Enhanced efficiency with years of handling experience",
                  "Significant reduction in operational costs"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-stefto-sky/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-stefto-sky transition-colors">
                       <CheckCircle2 size={16} className="text-stefto-sky group-hover:text-stefto-navy" />
                    </div>
                    <p className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Diverse Approach", icon: Lightbulb },
                  { title: "Expert Advice", icon: ClipboardCheck },
                  { title: "Professional Team", icon: Users },
                  { title: "Result Based", icon: BarChart3 }
                ].map((feat, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all flex flex-col items-center text-center">
                    <feat.icon size={40} className="text-stefto-sky mb-4" />
                    <h5 className="font-bold text-sm uppercase tracking-widest">{feat.title}</h5>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
           <h2 className="text-3xl sm:text-4xl font-bold text-stefto-navy mb-8">
             Customer relations with <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-stefto-indigo to-stefto-sky">transparent communication</span>
           </h2>
           <p className="text-xl text-slate-500 mb-10 max-w-[600px] mx-auto">Business solutions can help you get there. Let's start the transformation.</p>
           <button className="bg-stefto-navy text-white hover:bg-stefto-sky hover:text-stefto-navy font-bold px-12 py-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
             START YOUR JOURNEY — TALK TO US
           </button>
        </div>
      </section>

    </main>
  );
};

export default BackOfficeSupport;
