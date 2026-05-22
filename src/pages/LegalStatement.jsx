import React, { useEffect } from 'react';
import { Mail, Phone, Building2, MapPin, Globe, ShieldCheck } from 'lucide-react';

const LegalStatement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offices = [
    { city: "Gurugram (Head Office)", address: "Plot No. 112, Udyog Vihar, Phase-1, Gurugram, Haryana-122016" },
    { city: "New Delhi Office", address: "IInd Floor, DLF, Moti Nagar, New Delhi-110015" },
    { city: "West Delhi Office", address: "WZ-1, Upper Ground Floor, Main Nazafgarh Road, Uttam Nagar West, Delhi-110059" },
    { city: "Noida Office", address: "Plot No. 125A, Block-C, Sec-2, Phase-1, Noida, Gautam Buddha Nagar, U.P.-201301" },
    { city: "Pune Office", address: "501, 5th Floor, Pride Icon, Kharadi, Pune, Maharashtra-411014" }
  ];

  return (
    <main className="w-full bg-white min-h-screen pt-24 sm:pt-32 pb-20">
      
      {/* 1. Header Section */}
      <section className="w-full py-12 sm:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-[800px]">
                <p className="text-stefto-sky font-bold tracking-widest text-xs uppercase mb-3 px-1 border-l-2 border-stefto-indigo flex items-center gap-2">
                  <ShieldCheck size={14} /> Corporate Compliance
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stefto-navy leading-tight">
                  Legal Notice & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-stefto-indigo to-stefto-sky font-serif italic">Statement</span>
                </h1>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-1">Corporate Identity Number</span>
                <span className="text-lg font-bold text-stefto-indigo">U74140DL2007ULT166363</span>
              </div>
           </div>
        </div>
      </section>

      {/* 2. Identity Section */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            <div className="lg:col-span-4">
              <h4 className="text-stefto-navy font-bold text-lg mb-4 flex items-center gap-2 uppercase tracking-wide">
                <Building2 size={20} className="text-stefto-sky" /> The Company
              </h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                Stefto is the trade name of <strong className="text-slate-800">Incredible Management Services (India) Private Limited</strong>. All services, products, and operational standards are owned and governed by this legal entity.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-700 font-bold group hover:text-stefto-indigo transition-colors cursor-default">
                  <span className="p-2 bg-slate-50 rounded-lg group-hover:bg-stefto-sky/10"><Phone size={18} /></span>
                  +91 88001 01102
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-bold group hover:text-stefto-indigo transition-colors cursor-default">
                   <span className="p-2 bg-slate-50 rounded-lg group-hover:bg-stefto-sky/10"><Mail size={18} /></span>
                  info@stefto.com
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-bold group hover:text-stefto-indigo transition-colors cursor-default">
                   <span className="p-2 bg-slate-50 rounded-lg group-hover:bg-stefto-sky/10"><Globe size={18} /></span>
                  www.stefto.com
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-8">
               <div className="bg-stefto-navy rounded-[2rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-stefto-sky/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-stefto-sky mb-6">Registered Office Address</h3>
                  <div className="flex gap-6 items-start">
                    <MapPin size={32} className="text-stefto-sky shrink-0" />
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold leading-snug">
                        3, DLF, Moti Nagar,<br />
                        Delhi — 110015
                      </p>
                    </div>
                  </div>
               </div>

               <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 relative">
                  <p className="text-sm text-slate-500 italic">
                    "This legal notice serves as the official statement regarding company identifiers, registered domains, and primary contact hubs for Incredible Management Services (India) Private Limited. Accessing our Site constitutes your acknowledgement of the registered corporate entity and jurisdiction of Delhi, India."
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Global Network Section */}
      <section className="w-full py-16 sm:py-24 bg-slate-50/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stefto-navy mb-4">Operational Offices</h2>
            <p className="text-slate-500 font-medium max-w-[600px]">Our specialized across-region presence ensures support continuity and adherence to local compliance laws.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-stefto-sky transition-all duration-300 group">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-stefto-sky group-hover:text-white transition-colors mb-6">
                  <MapPin size={20} />
                </div>
                <h4 className="text-lg font-bold text-stefto-navy mb-3">{office.city}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">{office.address}</p>
                <div className="flex items-center gap-2 text-stefto-indigo font-bold text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  Get Directions <Globe size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer Disclaimer Area */}
      <section className="w-full pt-16 pb-12 sm:pt-24 sm:pb-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 text-center">
           <div className="flex justify-center mb-8">
              <div className="w-1.5 h-1.5 bg-stefto-sky rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-stefto-indigo rounded-full mx-2"></div>
              <div className="w-1.5 h-1.5 bg-stefto-navy rounded-full"></div>
           </div>
           <p className="text-slate-400 text-xs sm:text-sm italic leading-relaxed">
             © 2007 – 2026 Incredible Management Services (India) Private Limited. All rights reserved. 
             "Stefto" is a registered trademark. Any unauthorized reproduction, redistribution or 
             use of company materials is strictly prohibited under intellectual property laws of India.
           </p>
        </div>
      </section>

    </main>
  );
};

export default LegalStatement;
