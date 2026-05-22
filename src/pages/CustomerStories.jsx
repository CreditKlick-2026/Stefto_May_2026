import React, { useEffect } from 'react';
import { Quote, User, Star, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import storyBg from '../assets/global_interactions.png';

const CustomerStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stories = [
    {
      name: "Ankita Mishra",
      role: "Software Engineer at an MNC",
      initialProblem: "She had a complicated history of billing disputes. She was overwhelmed by the automated follow-up alerts.",
      agent: "Anjali",
      description: "was very stressed for a long time due to my outstanding bills. I was getting repeated automated reminders. Many times, agents just read scripts to me, but no one was willing to give me any personalized solution. I really wanted to resolve the discrepancy and clear my account.",
      resolution: "She again called me in the evening with a resolution and provided me with a direct link to reconcile the billing details. I was really amazed by the kind of experience I got with that conversation.",
      recommendation: "I recommend her and her supervisor and suggest this is the way one should resolve customer's billing and account issues."
    },
    {
      name: "Sumit Yadav",
      role: "Businessman",
      initialProblem: "Defaulting on home loan EMIs and paying high late charges. He felt harassed until an agent offered a real solution.",
      agent: "Vishal",
      description: "I was really frustrated due to the charges which I had to pay every month for my home loan along with the EMI. I tried to contact the bank too many times but did not get any resolution.",
      resolution: "He (Vishal) was very calm with me and understood my problem. He helped me get the payment done and provided the solution by registering my bank account for auto-debit.",
      recommendation: "Every bank should have these kinds of representatives who are focused on providing the best customer experience instead of just focussing on their targets."
    }
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Hero Header */}
      <section 
        className="w-full relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-52 lg:pb-52 flex items-center bg-stefto-navy overflow-hidden"
        style={{
          backgroundImage: `url(${storyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/85 z-0"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <p className="text-stefto-sky font-bold tracking-[0.2em] text-xs uppercase mb-6">
              Our Track Record of Success
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Customer <span className="italic font-serif text-stefto-sky">Stories</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-[700px] mx-auto leading-relaxed">
              Real voices, real transformations. Discover how Stefto's human-centric approach turns difficult customer operations into positive customer experiences.
            </p>
        </div>
      </section>

      {/* 2. Main content section */}
      <section className="w-full py-20 sm:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* 2a. Stories Column */}
            <div className="w-full lg:w-2/3 space-y-20 sm:space-y-32">
              
              {stories.map((story, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-slate-100 group-hover:bg-stefto-sky transition-colors duration-500 rounded-full"></div>
                  
                  <div className="pl-6 sm:pl-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-full bg-stefto-indigo flex items-center justify-center text-white shadow-xl">
                        <User size={30} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-stefto-navy">{story.name}</h3>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{story.role}</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 shadow-sm border border-slate-100 relative group-hover:shadow-2xl transition-all duration-500">
                      <Quote size={60} className="absolute top-10 right-10 text-slate-50 group-hover:text-stefto-indigo/5 transition-colors duration-700" />
                      
                      <div className="mb-10">
                        <h4 className="text-stefto-indigo font-bold text-sm uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
                          <Heart size={14} className="text-stefto-sky" /> The Customer's Story
                        </h4>
                        <p className="text-xl text-slate-700 leading-relaxed font-medium italic">
                          "{story.description}"
                        </p>
                      </div>

                      <div className="mb-10 p-6 bg-slate-50 rounded-2xl border-l-4 border-stefto-sky">
                         <h4 className="font-bold text-stefto-navy text-sm uppercase mb-3">Resolution with Stefto Member ({story.agent})</h4>
                         <p className="text-slate-600 leading-relaxed italic">{story.resolution}</p>
                      </div>

                      <div className="flex items-start gap-4 p-6 bg-stefto-indigo/5 rounded-2xl">
                         <Star size={24} className="text-stefto-indigo shrink-0" fill="currentColor" />
                         <p className="text-stefto-navy font-bold italic leading-relaxed">
                           "{story.recommendation}"
                         </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-8 bg-white border border-slate-200 rounded-2xl text-center text-slate-400 text-sm font-medium italic">
                <ShieldCheck size={20} className="mx-auto mb-3 opacity-30" />
                "Please note that customer names have been changed to protect their privacy."
              </div>

            </div>

            {/* 2b. Sidebar / Links Column */}
            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                
                {/* Services Links Block */}
                <div className="bg-stefto-navy rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-stefto-indigo/20 blur-3xl -mr-16 -mt-16"></div>
                   <h3 className="text-xl font-bold uppercase tracking-widest text-stefto-sky mb-8">Related Services</h3>
                   <nav className="flex flex-col gap-4">
                     {[
                       "Outbound Solutions",
                       "Inbound Solutions",
                       "Digital Support & Solutions",
                       "Retention and Persistency",
                       "Sales Support",
                       "Back Office Support"
                     ].map((link, idx) => (
                       <a key={idx} href="#" className="flex items-center justify-between group py-3 border-b border-white/10 hover:border-stefto-sky transition-colors">
                         <span className="text-sm font-bold opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">{link}</span>
                         <ArrowRight size={16} className="text-slate-500 group-hover:text-stefto-sky transition-colors" />
                       </a>
                     ))}
                   </nav>
                </div>

                {/* Impact Highlight */}
                <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm text-center">
                   <div className="w-20 h-20 bg-stefto-sky/10 rounded-full flex items-center justify-center mx-auto mb-6 text-stefto-indigo">
                      <Star size={40} />
                   </div>
                   <h4 className="text-stefto-navy font-bold text-xl mb-4 leading-tight">Transforming Support Operations</h4>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8">Because every customer deserves a calm, resolution-oriented experience.</p>
                   <button className="bg-stefto-indigo font-bold text-white px-8 py-3 rounded-full hover:bg-stefto-navy transition-all w-full text-xs tracking-widest">
                     VIEW ALL SUCCESS STORIES
                   </button>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

    </main>
  );
};

export default CustomerStories;
