import React, { useEffect } from 'react';
import { Scale, FileText, Info, ShieldAlert, Link as LinkIcon, Send } from 'lucide-react';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-slate-50 min-h-screen pt-24 sm:pt-32 pb-20">
      
      {/* 1. Header Hero */}
      <section className="w-full bg-white border-b border-slate-200 py-12 sm:py-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
           <p className="text-stefto-sky font-bold tracking-widest text-xs uppercase mb-3 flex justify-center sm:justify-start items-center gap-2">
            <Scale size={14} /> Legal Agreement
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-stefto-navy mb-4 tracking-tight leading-tight">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-stefto-indigo to-stefto-sky italic font-serif">Use</span>
          </h1>
          <div className="w-20 h-1 bg-stefto-indigo/20 rounded-full mx-auto sm:mx-0"></div>
        </div>
      </section>

      {/* 2. Main Text Section */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-sm border border-slate-100 text-slate-700 leading-relaxed space-y-10">
          
          {/* Intro Section */}
          <div className="space-y-6">
            <p className="text-lg font-medium text-slate-800">
              The purpose of these Terms of Use is to define the terms and conditions of access and use of the site www.stefto.com (hereinafter the “Site”).
            </p>
            <p className="border-l-4 border-stefto-indigo pl-6 italic text-slate-600 bg-slate-50 py-6 rounded-r-xl">
              The use of the Site is subject to compliance with these Terms of Use, which all users acknowledge that they accept unreservedly by the mere fact of accessing the said Site. Any user who does not wish to be bound by these Terms of Use must immediately renounce remaining on the Site and immediately cease using it.
            </p>
          </div>

          {/* 3. Legal Notice Area */}
          <div className="pt-8 border-t border-slate-50">
            <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3 decoration-stefto-sky/30 decoration-4">
              <Info size={24} className="text-stefto-indigo" /> Legal Notice
            </h2>
            <p className="bg-slate-50 p-6 rounded-2xl border border-slate-100 leading-relaxed shadow-inner">
              The Site is published by <strong>Stefto</strong>, a company whose registered office is located at <strong>Plot no. 29, New Moti Nagar, New Delhi – 110015</strong>, which can be reached at <strong>+91 88001 01102</strong> (hereinafter “Stefto”).
            </p>
          </div>

          {/* 4. Intellectual Property */}
          <div className="pt-8 border-t border-slate-50">
             <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
              <FileText size={24} className="text-stefto-indigo" /> 
              Copyright, trademarks and other intellectual property rights
            </h2>
            <div className="space-y-4">
              <p>
                This Site and its contents are protected by copyright and/or other intellectual property rights which are the property of Stefto or third parties.
              </p>
              <p>
                The reproduction and use of the elements of this Site (and any information incorporated therein such as, without limitation, articles, graphic images, photographs, diagrams, video recordings…) are authorised provided that:
              </p>
              <div className="grid gap-4 mt-6">
                 {[
                   "this reproduction and use are strictly for information, non-commercial purposes within your organisation to enable you to get to know Stefto better;",
                   "all mentions of origin and in particular copyright notices appear on any reproduction;",
                   "the elements and information are not modified in whole or in part and in any way whatsoever; and",
                   "any other right of reproduction and/or use is expressly prohibited."
                 ].map((point, idx) => (
                   <div key={idx} className="flex gap-4 items-start p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                      <span className="w-6 h-6 rounded-full bg-stefto-indigo text-white text-[10px] flex items-center justify-center font-bold shrink-0 mt-0.5">0{idx + 1}</span>
                      <p className="text-sm font-medium leading-relaxed">{point}</p>
                   </div>
                 ))}
              </div>
              <p className="text-sm text-slate-500 mt-6 italic">
                In addition, some of the names mentioned may be protected by trademarks that are the property of Stefto or third parties without necessarily mentioning this protection.
              </p>
            </div>
          </div>

          {/* 5. Exclusions */}
          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
              <ShieldAlert size={24} className="text-red-500" /> 
              Warranty and liability exclusions
            </h2>
            <div className="space-y-6">
              <p className="font-bold text-slate-800">
                The elements of this Site are provided for general information purposes only and cannot be used as a basis for any transaction. 
              </p>
              <p className="bg-slate-900 text-slate-300 p-8 rounded-3xl relative overflow-hidden font-mono text-sm leading-[1.8] shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-stefto-sky/10 blur-3xl"></div>
                All or any of the information published on this Site is provided <strong>“as is”</strong> without warranty of any kind, either express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose or non-infringement of third party rights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p>Stefto provides no guarantee as to the accuracy or completeness of the elements and/or information published on this Site.</p>
                  <p>Stefto in no way guarantees uninterrupted access to this Site as well as the security of the Site and the absence of all viruses or other undesirable hosts (including in the elements of the Site and in the information incorporated therein).</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-sm italic border-l-4 border-stefto-navy">
                  "The use of the elements of the Site and any information included therein as well as access to this Site are the sole responsibility of the user. Stefto disclaims liability for any damage whatsoever, including without limitation direct and indirect damage that may result from access to this Site and the use of all or part of the elements or information contained therein."
                </div>
              </div>
            </div>
          </div>

          {/* 6. Links */}
          <div className="pt-8 border-t border-slate-50">
            <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
              <LinkIcon size={24} className="text-stefto-indigo" /> Hypertext links
            </h2>
            <p className="text-slate-600">
              This Site may contain links to third party sites. These links are provided solely as a convenience to you and the inclusion of any link does not imply any endorsement of, or guarantee of, the materials on the linked sites. Access to these sites is the sole responsibility of the user.
            </p>
          </div>

          {/* 7. Transmission */}
          <div className="pt-8 border-t border-slate-50">
            <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
              <Send size={24} className="text-stefto-indigo" /> Transmission of information by users
            </h2>
            <div className="space-y-4">
              <p>
                Any information or request for information that you may send to Stefto via the Site or via the electronic mailbox to which the Site may provide access, is considered to be <strong className="text-slate-800">non-confidential</strong>.
              </p>
              <p>
                You may also send your information or requests by post to the address of Stefto head office for the attention of the department identified in the corresponding section of this Site.
              </p>
            </div>
          </div>

          {/* 8. Modifications */}
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-[500px]">
               <h2 className="text-2xl font-bold text-stefto-navy mb-4">Modifications</h2>
               <p className="text-slate-500">
                Stefto may modify at any time and without prior notice the elements published on this Site or any information included therein.
               </p>
            </div>
            <div className="bg-stefto-indigo rounded-3xl p-8 sm:p-10 text-white min-w-[300px] shadow-xl relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 blur-3xl"></div>
               <p className="text-stefto-sky font-bold text-[10px] uppercase mb-1 tracking-[0.2em]">Legal Identity</p>
               <h4 className="text-lg font-bold leading-tight">Incredible Management Services (India) Private Limited</h4>
               <p className="text-xs opacity-60 mt-2">CIN: U74140DL2007ULT166363</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default TermsOfUse;
