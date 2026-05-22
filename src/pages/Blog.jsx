import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Search, ArrowUpRight } from 'lucide-react';
import blogBg from '../assets/insights_dropdown_bg.png';
import rbiImg from '../assets/stefto_business_growth.png';
import aiImg from '../assets/stefto_security_operations.png';
import recoveryImg from '../assets/tech3.png';
const Blog = () => {
  const [blogPosts, setBlogPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/blog');
        const data = await response.json();
        if (data.success) {
          setBlogPosts(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Simple placeholder for when images aren't present in DB
  const getPlaceholderImage = (idx) => {
    const images = [rbiImg, aiImg, recoveryImg];
    return images[idx % images.length];
  };

  return (
    <main className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Hero Hub */}
      <section 
        className="w-full relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-52 lg:pb-52 flex items-center bg-stefto-navy overflow-hidden"
        style={{
          backgroundImage: `url(${blogBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/85 z-0"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <p className="text-stefto-sky font-bold tracking-[0.2em] text-xs uppercase mb-6">Expert Perspectives & Analysis</p>
             <h1 className="text-4xl sm:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
               Our <span className="text-stefto-sky italic font-serif">Blog</span> & <br className="hidden sm:block" /> Insights Hub
             </h1>
             <div className="max-w-[800px] mx-auto mb-10 h-1 bg-gradient-to-r from-transparent via-stefto-indigo to-transparent opacity-30"></div>
             <p className="text-xl text-slate-300 max-w-[700px] mx-auto leading-relaxed mb-10">
               Deep diving into the trends, technologies, and strategies that are transforming the management service landscape.
             </p>
             <div className="max-w-md mx-auto relative group">
                <input 
                  type="text" 
                  placeholder="Search our insights..." 
                  className="w-full h-14 bg-white/10 border border-white/20 rounded-full px-14 py-2 text-white focus:bg-white focus:text-stefto-navy outline-none transition-all"
                />
                <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
             </div>
        </div>
      </section>

      {/* 2. Blog Post Grid */}
      <section className="w-full py-20 sm:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                   <div className="absolute inset-0 bg-stefto-navy/30 group-hover:bg-stefto-navy/0 transition-colors duration-500 z-10"></div>
                   <img src={getPlaceholderImage(idx)} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center justify-between mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                      <div className="flex items-center gap-2 text-stefto-indigo">
                         <Calendar size={14} /> {new Date(post.published_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-2">
                         <User size={14} /> Stefto Insights
                      </div>
                   </div>
                   <h3 className="text-xl font-bold text-stefto-navy mb-4 group-hover:text-stefto-indigo transition-colors leading-tight line-clamp-2">
                     {post.title}
                   </h3>
                   <div className="text-slate-500 text-sm mb-10 flex-grow leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: post.content.substring(0, 150) + '...' }}>
                   </div>
                   <Link 
                    to={`/blog/${post.id}`} 
                    className="flex items-center justify-between group/btn py-4 border-t border-slate-50 hover:border-stefto-sky transition-all duration-300 no-underline"
                   >
                     <span className="text-xs font-bold text-stefto-navy uppercase tracking-widest group-hover/btn:text-stefto-indigo transition-colors">Read Article</span>
                     <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover/btn:bg-stefto-sky group-hover/btn:text-stefto-navy transition-all duration-300">
                        <ArrowUpRight size={18} />
                     </div>
                   </Link>
                </div>
              </div>
            ))}
            {blogPosts.length === 0 && !isLoading && (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 text-lg font-bold">No articles found in the database. Use the admin panel to publish some!</p>
              </div>
            )}
          </div>

          {/* Stay Updated Banner */}
          <div className="mt-32 bg-stefto-navy rounded-[3rem] p-10 sm:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-stefto-indigo/20 blur-[120px] -mr-32 -mt-32"></div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 tracking-tighter">Stay Ahead of the <span className="text-stefto-sky italic font-serif">Curve</span></h2>
              <p className="text-slate-400 mb-10 text-lg max-w-[600px] mx-auto">Get monthly market insights and corporate updates delivered straight to your inbox.</p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 p-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                 <input type="email" placeholder="Enter your email" className="bg-transparent text-white px-6 py-3 rounded-full outline-none flex-grow" />
                 <button className="bg-stefto-sky text-stefto-navy font-bold px-8 py-3 rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase tracking-widest text-xs">
                    SUBSCRIBE
                 </button>
              </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Blog;
