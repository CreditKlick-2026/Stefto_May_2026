import React, { useEffect } from 'react';
import { 
  Trophy, 
  Target, 
  BarChart, 
  PhoneCall, 
  Search, 
  Database, 
  ArrowRight, 
  Users, 
  PieChart, 
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import salesBg from '../assets/industries_dropdown_bg.png';

const SalesSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    { title: "Market Research", icon: Search },
    { title: "Telephone Account Management", icon: PhoneCall },
    { title: "Customer Retention Calling", icon: Users },
    { title: "Lead Generation", icon: Target },
    { title: "Data Building & Cleansing", icon: Database },
    { title: "Sales Order Processing", icon: BarChart },
    { title: "Revenue Protection", icon: Trophy },
    { title: "Indirect Lead Generation", icon: Lightbulb },
    { title: "Customer Outreach", icon: CheckCircle }
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section 
        className="w-full relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-52 lg:pb-52 flex items-center bg-stefto-navy overflow-hidden"
        style={{
          backgroundImage: `url(${salesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/85 z-0"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[900px]">
             <p className="text-stefto-sky font-bold tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-3">
               <span className="w-8 h-[1px] bg-stefto-sky"></span>
               B2B and B2C Growth Solutions
             </p>
             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
               Digital <span className="text-stefto-sky italic font-serif">Sales Support</span> <br className="hidden sm:block" />
               Services
             </h1>
             <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-10 max-w-[700px] font-medium">
               We blend the power of digital technologies with human expertise to maximise sales revenues and grow your business.
             </p>
             <div className="flex flex-wrap gap-4">
                <button className="bg-stefto-indigo border border-stefto-indigo hover:bg-white hover:text-stefto-navy text-white font-bold px-10 py-4 rounded-full transition-all shadow-xl">
                  GET STARTED
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Value Prop */}
      <section className="w-full py-20 sm:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              <div className="w-full lg:w-1/2">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stefto-navy mb-8 leading-tight tracking-tight">
                    Maximising the potential of <br />
                    <span className="text-stefto-indigo italic">every sales lead</span>
                 </h2>
                 <p className="text-lg text-slate-600 leading-relaxed mb-8">
                   Stefto specialises in maximising the potential of each sales lead. We use intelligent analysis and decision-making tools to provide customised sales offers that are tailored for each customer’s profile. We transform conversions into sales-opportunities and explore untapped routes to generate revenue.
                 </p>
                 <div className="p-8 bg-slate-50 border-l-4 border-stefto-sky rounded-r-2xl italic text-slate-700 font-medium shadow-sm">
                   "We optimise customer data using modern analytics engine tools to reach out to the right customer with the right offer at the right time."
                 </div>
              </div>
              <div className="w-full lg:w-1/2 bg-slate-900 rounded-[2.5rem] p-10 sm:p-14 text-white relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-stefto-indigo/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                   <Lightbulb className="text-stefto-sky" /> The Science of Sales
                 </h3>
                 <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                   Closing a sale is a science and an art. Stefto has a proven track record across industries to help organisations achieve their goals using strategies like <span className="text-stefto-sky font-bold">BANT</span> (Budget, Authority, Need, Timeline).
                 </p>
                 <p className="text-slate-400 font-medium mb-10">
                   Our services empower your team with timely information, key statistics and the right tools to increase and optimise sales from lead generation to sealing the deal.
                 </p>
                 <button className="flex items-center gap-2 text-stefto-sky font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group">
                   Learn our methodology <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Offerings Grid */}
      <section className="w-full py-20 sm:py-32 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[800px] mx-auto mb-20">
             <h2 className="text-4xl font-bold text-stefto-navy mb-6 tracking-tight">Our Advanced Sales Offerings</h2>
             <p className="text-slate-500 text-lg">We offer a wide range of services to help your business grow, increase sales volumes and reach your objectives.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((svc, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-stefto-indigo transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-stefto-indigo/5 rounded-full -mr-10 -mt-10 group-hover:scale-[2.5] transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-stefto-indigo group-hover:bg-stefto-indigo group-hover:text-white transition-all duration-300 mb-8 relative z-10">
                   <svc.icon size={30} />
                </div>
                <h4 className="text-xl font-bold text-stefto-navy mb-2 relative z-10 group-hover:text-stefto-indigo transition-colors">{svc.title}</h4>
                <div className="w-12 h-1 bg-stefto-sky group-hover:w-24 transition-all duration-500 rounded-full mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Pillars (Bento) */}
      <section className="w-full py-20 sm:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Sales Funnel */}
              <div className="bg-white border-2 border-slate-50 p-10 rounded-[2.5rem] hover:bg-slate-50 transition-all group overflow-hidden relative">
                 <div className="text-7xl font-black text-slate-100 absolute -top-4 -right-4 transition-transform group-hover:scale-110">11</div>
                 <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-stefto-indigo mb-8 group-hover:shadow-lg">
                    <PieChart size={24} />
                 </div>
                 <h4 className="text-2xl font-bold text-stefto-navy mb-6">Sales Funnel Management</h4>
                 <p className="text-slate-500 leading-relaxed font-medium">
                   We use sophisticated CRM tools to track leads and opportunities at various stages of the sales cycle to ensure maximum conversion into final sales.
                 </p>
              </div>

              {/* Team Management */}
              <div className="bg-stefto-navy p-10 rounded-[2.5rem] text-white overflow-hidden relative group shadow-2xl">
                 <div className="text-7xl font-black text-white/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110">12</div>
                 <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-stefto-navy mb-8">
                    <Users size={24} />
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-6">Sales Team Management</h4>
                 <p className="text-slate-300 leading-relaxed font-medium group-hover:text-white transition-colors">
                   Recruit, train, and manage your entire sales department with us. We monitor performance continuously to instil processes that drive efficiency.
                 </p>
              </div>

              {/* Closures */}
              <div className="bg-white border-2 border-slate-50 p-10 rounded-[2.5rem] hover:bg-slate-50 transition-all group overflow-hidden relative">
                 <div className="text-7xl font-black text-slate-100 absolute -top-4 -right-4 transition-transform group-hover:scale-110">13</div>
                 <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-stefto-indigo mb-8 group-hover:shadow-lg">
                    <Target size={24} />
                 </div>
                 <h4 className="text-2xl font-bold text-stefto-navy mb-6">High-Performance Closures</h4>
                 <p className="text-slate-500 leading-relaxed font-medium">
                   We use powerful strategies like non-intrusive calling and diligent follow-up to deliver tangible results and increased sales revenues.
                 </p>
              </div>

           </div>
        </div>
      </section>

      {/* 5. Final Banner */}
      <section className="w-full py-20 bg-slate-900 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 text-center relative z-10">
           <p className="text-stefto-sky font-bold text-xs uppercase tracking-[0.2em] mb-6">Speak to us today</p>
           <h2 className="text-3xl sm:text-5xl font-bold text-white mb-10 leading-tight tracking-tight">
             Ready to Empower Your Sales Team with <br />
             <span className="italic font-serif text-stefto-sky">Intelligent & Smart</span> Sales Solutions?
           </h2>
           <button className="bg-white text-stefto-navy hover:bg-stefto-sky font-bold px-12 py-5 rounded-full shadow-2xl transition-all transform hover:scale-105 uppercase tracking-widest text-sm">
             TALK TO US NOW
           </button>
           <div className="mt-16 text-slate-500 text-sm italic font-medium">
             Through financial clarity, we provide you with the financial confidence you need to achieve.
           </div>
        </div>
      </section>

    </main>
  );
};

export default SalesSupport;
