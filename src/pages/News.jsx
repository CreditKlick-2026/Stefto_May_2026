import React, { useEffect } from 'react';
import { Newspaper, Calendar, ArrowRight, TrendingUp, Search } from 'lucide-react';
import newsBg from '../assets/insights_dropdown_bg.png';
import growthImg from '../assets/stefto_business_growth.png';
import securityImg from '../assets/stefto_security_hero.png';
import alertsImg from '../assets/stefto_job_alerts.png';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsItems = [
    {
      title: "Stefto Expands Strategic Operations to New Hubs in Pune and Noida",
      date: "Oct 24, 2024",
      category: "Corporate",
      excerpt: "Establishing a stronger presence in the major tech hubs of India to better serve our global BFSI and Retail clients.",
      image: growthImg
    },
    {
      title: "How AI-Powered Analytics is Redefining the Future of Customer Experience",
      date: "Sep 12, 2024",
      category: "Innovation",
      excerpt: "Exploring the delicate balance between automation and the human touch in modern support strategies.",
      image: securityImg
    },
    {
      title: "Stefto Awarded 'Most Innovative Service Provider' for 2024",
      date: "Aug 05, 2024",
      category: "Award",
      excerpt: "Recognizing our dedication to operational excellence and our unique 'machines + human intelligence' approach.",
      image: alertsImg
    }
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Hero Hub */}
      <section 
        className="w-full relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-52 lg:pb-52 flex items-center bg-stefto-navy overflow-hidden"
        style={{
          backgroundImage: `url(${newsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/85 z-0"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <h1 className="text-4xl sm:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
               Latest <span className="text-stefto-sky italic font-serif">News</span> & <br className="hidden sm:block" /> Corporate Updates
             </h1>
             <p className="text-xl text-slate-300 max-w-[700px] mx-auto leading-relaxed mb-10">
               Stay informed with the latest insights, announcements, and milestones from the world of Stefto Management Services.
             </p>
             <div className="max-w-md mx-auto relative group">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full h-14 bg-white/10 border border-white/20 rounded-full px-14 py-2 text-white focus:bg-white focus:text-stefto-navy outline-none transition-all"
                />
                <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
             </div>
        </div>
      </section>

      {/* 2. Featured / Grid Section */}
      <section className="w-full py-20 sm:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-16 border-b border-slate-200 pb-8">
             <h2 className="text-2xl font-bold text-stefto-navy flex items-center gap-3">
               <Newspaper className="text-stefto-indigo" /> Global Press Room
             </h2>
             <div className="flex gap-4">
                <span className="text-sm font-bold text-stefto-indigo border-b-2 border-stefto-sky pb-2 cursor-pointer">ALL NEWS</span>
                <span className="text-sm font-bold text-slate-400 hover:text-stefto-navy transition-colors cursor-pointer pb-2 border-b-2 border-transparent">UPDATES</span>
                <span className="text-sm font-bold text-slate-400 hover:text-stefto-navy transition-colors cursor-pointer pb-2 border-b-2 border-transparent">PRESS</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {newsItems.map((news, idx) => (
              <div key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                   <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full z-20 text-stefto-navy text-[10px] font-black uppercase tracking-widest border border-white">
                      {news.category}
                   </div>
                   <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 text-stefto-indigo font-bold text-xs mb-4">
                      <Calendar size={14} /> {news.date}
                   </div>
                   <h3 className="text-xl font-bold text-stefto-navy mb-4 group-hover:text-stefto-indigo transition-colors leading-tight">
                     {news.title}
                   </h3>
                   <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">
                     {news.excerpt}
                   </p>
                   <button className="flex items-center gap-2 text-stefto-sky font-bold uppercase tracking-widest text-[10px] items-center group-hover:text-stefto-indigo transition-colors">
                     Full Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-20 text-center">
             <button className="bg-white border-2 border-slate-200 text-stefto-navy hover:bg-stefto-navy hover:text-white hover:border-stefto-navy font-bold px-12 py-5 rounded-full shadow-lg transition-all transform hover:scale-105">
               LOAD OLDER POSTS
             </button>
          </div>

        </div>
      </section>

    </main>
  );
};

export default News;
