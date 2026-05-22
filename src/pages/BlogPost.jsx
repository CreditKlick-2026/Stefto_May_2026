import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Calendar, Clock, User, Share2, 
  ChevronRight, ArrowRight, Loader2, AlertCircle, FileText, Tag
} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch main post
        const postRes = await fetch(`http://localhost:3000/api/v1/blog/${id}`);
        const postData = await postRes.json();
        
        if (postData.success) {
          setPost(postData.data);
          
          // Fetch related posts (latest posts in this case)
          const relatedRes = await fetch(`http://localhost:3000/api/v1/blog?limit=4`);
          const relatedData = await relatedRes.json();
          if (relatedData.success) {
            setRelatedPosts(relatedData.data.filter(p => p.id.toString() !== id.toString()));
          }
        } else {
          setError(postData.message || 'Article not found');
        }
      } catch (err) {
        setError('Connection error with backend server.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData();
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="w-12 h-12 text-stefto-indigo animate-spin mb-4" />
        <p className="text-slate-500 font-bold animate-pulse">Loading Article...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-red-100 text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-slate-800 mb-2">Oops! Article Missing</h2>
          <p className="text-slate-500 mb-6">{error || "We couldn't find the blog post you're looking for."}</p>
          <Link to="/blogs" className="inline-flex items-center gap-2 bg-stefto-indigo text-white px-6 py-3 rounded-full font-bold hover:bg-stefto-navy transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Header / Breadcrumb Section */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-4">
            <Link to="/" className="hover:text-stefto-indigo transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blogs" className="hover:text-stefto-indigo transition-colors">Insights</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 truncate max-w-[200px] md:max-w-md">{post.title}</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                <User className="w-4 h-4 text-stefto-indigo" />
              </div>
              Stefto Insights
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              5 min read
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Article Content */}
          <div className="lg:col-span-8">
            <motion.article 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(43,51,102,0.05)] border border-slate-100 p-6 md:p-12 overflow-hidden relative"
            >
              {/* Image Placeholder or Featured Image */}
              <div className="w-full aspect-[16/9] bg-slate-100 rounded-2xl mb-10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-stefto-indigo/10 to-transparent"></div>
                <div className="w-full h-full flex items-center justify-center">
                   <FileText size={80} className="text-stefto-indigo opacity-20" />
                </div>
              </div>

              {/* Main Content Body (dangerouslySetInnerHTML is used as content comes from CMS) */}
              <div 
                className="prose prose-slate max-w-none prose-h2:text-3xl prose-h2:font-black prose-h2:text-slate-900 prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:text-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share and Tags Section */}
              <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 line-before">
                    Share
                  </span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-stefto-indigo transition-all"><FaFacebookF size={18} /></button>
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-stefto-indigo transition-all"><FaTwitter size={18} /></button>
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-stefto-indigo transition-all"><FaLinkedinIn size={18} /></button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-slate-400" />
                  <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold uppercase tracking-wider">Insights</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold uppercase tracking-wider">Corporation</span>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Right Side: Sidebar */}
          <div className="lg:col-span-4">
             <div className="sticky top-28 space-y-8">
               
               {/* Related Post Widget */}
               <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                 <div className="bg-[#2b3366] p-6">
                   <h3 className="text-white font-black text-xl">Latest Insights</h3>
                 </div>
                 <div className="p-4 space-y-4">
                   {relatedPosts.map((rPost, idx) => (
                     <Link key={rPost.id} to={`/blog/${rPost.id}`} className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all group no-underline">
                       <div className="w-20 h-20 bg-slate-100 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                         <FileText className="text-stefto-indigo/30 w-8 h-8" />
                       </div>
                       <div className="flex flex-col justify-center">
                         <h4 className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-stefto-indigo transition-colors">{rPost.title}</h4>
                         <span className="text-[10px] text-slate-400 font-bold uppercase mt-2 flex items-center gap-1">
                           <Calendar className="w-3 h-3" /> {new Date(rPost.published_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                         </span>
                       </div>
                     </Link>
                   ))}
                   {relatedPosts.length === 0 && <p className="text-center py-6 text-slate-400 text-sm font-medium">No other posts yet.</p>}
                 </div>
                 <div className="p-4 border-t border-slate-50 bg-slate-50/50">
                    <Link to="/blogs" className="block text-center text-xs font-black text-stefto-indigo uppercase tracking-widest no-underline hover:tracking-wider transition-all">View All Blog →</Link>
                 </div>
               </div>

               {/* Banner Widget */}
               <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-stefto-navy group">
                  <div className="absolute inset-0 bg-gradient-to-t from-stefto-navy via-transparent to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-black mb-4">Transforming BPO across India.</h3>
                    <p className="text-sm opacity-80 mb-6">Partner with Stefto to redefine your operational efficiency and customer experience.</p>
                    <Link to="/contact-us" className="inline-flex items-center gap-2 bg-white text-stefto-navy px-6 py-3 rounded-full font-bold no-underline hover:bg-stefto-sky transition-colors">
                      Get Started <ArrowRight size={16} />
                    </Link>
                  </div>
               </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPost;
