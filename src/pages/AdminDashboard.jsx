import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, FileText, Send, CheckCircle2, AlertCircle, Plus, Search, Archive, Clock, Edit2, Trash2, ArrowLeft, X, Link2, Megaphone, Settings, Bold, Italic, Underline, Strikethrough, Quote, List, ListOrdered, AlignLeft, Image as LucideImage, Video, Type, Upload } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // View State Management
  const [currentView, setCurrentView] = useState('list'); // 'list' | 'create'
  
  // Posts Data State
  const [posts, setPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  // Blog Posting States
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Other');
  const [slug, setSlug] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [tags, setTags] = useState('');
  const [subDescription, setSubDescription] = useState('');
  const [excerpt, setExcerpt] = useState('');
  
  // SEO States
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [focusKeyword, setFocusKeyword] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [noIndex, setNoIndex] = useState(false);

  // External Links States
  const [externalLinks, setExternalLinks] = useState([{ url: '', anchor: '' }]);
  
  const addExternalLink = () => setExternalLinks([...externalLinks, { url: '', anchor: '' }]);
  const removeExternalLink = (index) => setExternalLinks(externalLinks.filter((_, i) => i !== index));
  const updateExternalLink = (index, field, value) => {
    const arr = [...externalLinks];
    arr[index][field] = value;
    setExternalLinks(arr);
  };

  // CTA Banner States
  const [ctaLogo, setCtaLogo] = useState('');
  const [ctaTitle1, setCtaTitle1] = useState('');
  const [ctaSubtitle2, setCtaSubtitle2] = useState('');
  const [ctaHighlightText, setCtaHighlightText] = useState('');
  const [ctaOfferText, setCtaOfferText] = useState('');
  const [ctaFormTitle, setCtaFormTitle] = useState('');
  const [ctaButtonText, setCtaButtonText] = useState('');
  const [ctaRedirectUrl, setCtaRedirectUrl] = useState('');
  const [ctaConsentText, setCtaConsentText] = useState('');

  // General States
  const [status, setStatus] = useState('Published');
  const [featuredImage, setFeaturedImage] = useState('');

  // Form UI States
  const [activeSettingsTab, setActiveSettingsTab] = useState('content');
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState('');
  const [error, setError] = useState('');

  // Authentication Guard
  useEffect(() => {
    const token = localStorage.getItem('stefto_admin_token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // Fetch Posts hook
  useEffect(() => {
    if (currentView === 'list') {
      fetchPosts();
    }
  }, [currentView]);

  const fetchPosts = async () => {
    setIsLoadingPosts(true);
    try {
      const response = await fetch('http://localhost:3000/api/v1/blog');
      const json = await response.json();
      if (json.success) {
        setPosts(json.data.data || []);
      }
    } catch (e) {
      console.error('Failed to fetch posts:', e);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('stefto_admin_token');
    navigate('/login');
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError('Please fill in both title and content.');
      return;
    }
    
    setIsPublishing(true);
    setError('');
    setPublishSuccess('');
    
    try {
      const response = await fetch('http://localhost:3000/api/v1/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setPublishSuccess('Blog post published successfully!');
        setTitle('');
        setContent('');
        setTimeout(() => {
          setPublishSuccess('');
          setCurrentView('list');
        }, 2000);
      } else {
        setError(data.message || 'Failed to publish the post.');
      }
    } catch (err) {
      setError('Network error while publishing.');
    } finally {
      setIsPublishing(false);
    }
  };

  // ==========================
  // LIST VIEW (Dark Theme Grid)
  // ==========================
  const renderListView = () => {
    return (
      <div className="min-h-screen bg-[#0B0C10] pb-20 font-sans">
        
        {/* Nav Header Area (Matches Dark Theme) */}
        <div className="border-b border-[#1b1e28] px-6 py-4 flex justify-between items-center mb-8 bg-[#111319]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#5c4fff] text-white flex items-center justify-center font-bold text-lg">S</div>
              <div>
                <h1 className="text-lg font-black text-white tracking-tight leading-none">CMS System</h1>
                <p className="text-[11px] text-slate-500 font-medium">Logged in securely</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
              style={{ border: 'none', cursor: 'pointer', background: 'none' }}
            >
              Logout
            </button>
        </div>

        <div className="max-w-[1380px] mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">Blog Posts</h1>
              <p className="text-slate-400 text-sm mt-1">{posts.length} posts total</p>
            </div>
            <button 
              onClick={() => setCurrentView('create')} 
              className="bg-[#5c4fff] hover:bg-[#4b3fdf] text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-[0_4px_15px_rgba(92,79,255,0.4)] transition-all active:scale-95"
            >
              <Plus size={18} /> Create Post
            </button>
          </div>
          
          {/* Search Box */}
          <div className="mb-6 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search posts..." 
              className="w-full bg-[#111319] border border-[#1b1e28] rounded-xl pl-12 pr-4 py-3.5 text-sm text-slate-300 placeholder:text-slate-600 outline-none focus:border-[#5c4fff] focus:ring-1 focus:ring-[#5c4fff] transition-all" 
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2 custom-scrollbar">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1b1e28] text-white rounded-lg text-sm border border-[#262a38] font-semibold whitespace-nowrap shadow-sm">
              <FileText size={16} className="text-[#a0a5b5]" /> All Posts
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#111319] text-slate-400 hover:text-white rounded-lg text-sm border border-transparent font-medium whitespace-nowrap transition-colors">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" /> Published
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#111319] text-slate-400 hover:text-white rounded-lg text-sm border border-transparent font-medium whitespace-nowrap transition-colors">
              <FileText size={16} /> Draft
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#111319] text-slate-400 hover:text-white rounded-lg text-sm border border-transparent font-medium whitespace-nowrap transition-colors">
              <Archive size={16} className="text-[#8c6b41]" /> Archived
            </button>
          </div>
          
          {/* Post Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {isLoadingPosts ? (
              <div className="col-span-full py-20 flex flex-col items-center justify-center gap-3">
                <Loader2 className="animate-spin text-[#5c4fff] w-8 h-8" />
                <p className="text-slate-500 font-medium text-sm">Loading posts from database...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="col-span-full py-24 text-center border-2 border-dashed border-[#1b1e28] rounded-2xl">
                <FileText size={48} className="mx-auto text-slate-700 mb-4" />
                <h3 className="text-white font-bold text-lg">No Posts Found</h3>
                <p className="text-slate-500 text-sm mt-1 mb-6">You haven't published any blogs yet.</p>
                <button 
                  onClick={() => setCurrentView('create')} 
                  className="bg-[#1b1e28] hover:bg-[#262a38] text-white text-sm font-semibold px-5 py-2.5 rounded-lg border border-[#383d52] transition-colors"
                >
                  Write Your First Post
                </button>
              </div>
            ) : (
              posts.map(post => {
                const dateObj = new Date(post.published_at || post.createdAt);
                const formattedDate = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                
                return (
                  <div key={post._id} className="bg-[#111319] border border-[#1b1e28] rounded-2xl overflow-hidden hover:border-[#262a38] transition-all group flex flex-col shadow-lg shadow-black/20">
                    <div className="relative h-44 bg-[#161821] overflow-hidden flex-shrink-0">
                      {post.image_url ? (
                        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-[#2a2e3f] bg-gradient-to-tr from-[#14161f] to-[#1c1f2b] group-hover:scale-105 transition-transform duration-700">
                          <FileText size={40} className="mb-2 opacity-50" />
                          <span className="text-xs font-bold uppercase tracking-widest opacity-50">No Cover</span>
                        </div>
                      )}
                      {/* Published Status Pill */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#111319]/80 backdrop-blur-sm border border-[#262a38] text-emerald-400 text-[10px] font-bold tracking-wider uppercase rounded-md flex items-center gap-1.5 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399]" /> Published
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-white font-bold text-[15px] leading-[1.4] line-clamp-2 mb-3 group-hover:text-[#8880ff] transition-colors">{post.title}</h3>
                      <div className="text-[#5c4fff] text-xs font-bold uppercase tracking-wide mt-auto">
                        {post.category || 'Cibil'}
                      </div>
                    </div>
                    
                    <div className="px-5 py-4 border-t border-[#1b1e28] flex justify-between items-center text-slate-400 bg-[#0d0f14]">
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        <Clock size={14} className="opacity-70" /> {formattedDate}
                      </div>
                      <div className="flex items-center gap-3.5">
                        <button className="hover:text-white transition-colors"><Edit2 size={15} /></button>
                        <button className="hover:text-red-400 transition-colors"><Trash2 size={15} /></button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  };

  // ==========================
  // CREATE VIEW (Light Theme Form)
  // ==========================
  const renderCreateView = () => {
    return (
      <div className="fixed inset-0 z-[100] flex bg-[#0B0C10] font-sans">
        
        {/* Header (Absolute Top) */}
        <div className="absolute top-0 left-0 w-full h-16 border-b border-[#1b1e28] flex justify-between items-center px-6 bg-[#0B0C10] z-20">
            <h2 className="text-white font-bold text-base">Create Post</h2>
            <button onClick={() => setCurrentView('list')} className="text-slate-400 hover:text-white transition-colors">
               <X size={20} />
            </button>
        </div>

        {/* Sidebar */}
        <div className="w-64 border-r border-[#1b1e28] pt-24 px-4 bg-[#0B0C10] hidden md:block">
           <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-2 mb-4">Settings</div>
           <div className="space-y-1">
              <button 
                onClick={() => setActiveSettingsTab('content')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${activeSettingsTab === 'content' ? 'bg-[#17162b] text-[#8880ff] font-semibold border border-[#211f3d]' : 'text-slate-400 hover:text-slate-200 hover:bg-[#111319] font-medium border border-transparent'}`}
              >
                 <FileText size={16} /> Content
              </button>
              <button 
                onClick={() => setActiveSettingsTab('seo')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${activeSettingsTab === 'seo' ? 'bg-[#17162b] text-[#8880ff] font-semibold border border-[#211f3d]' : 'text-slate-400 hover:text-slate-200 hover:bg-[#111319] font-medium border border-transparent'}`}
              >
                 <Search size={16} /> SEO & Meta
              </button>
              <button 
                onClick={() => setActiveSettingsTab('links')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${activeSettingsTab === 'links' ? 'bg-[#17162b] text-[#8880ff] font-semibold border border-[#211f3d]' : 'text-slate-400 hover:text-slate-200 hover:bg-[#111319] font-medium border border-transparent'}`}
              >
                 <Link2 size={16} /> External Links
              </button>
              <button 
                onClick={() => setActiveSettingsTab('cta')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${activeSettingsTab === 'cta' ? 'bg-[#17162b] text-[#8880ff] font-semibold border border-[#211f3d]' : 'text-slate-400 hover:text-slate-200 hover:bg-[#111319] font-medium border border-transparent'}`}
              >
                 <Megaphone size={16} /> CTA Banner
              </button>
              <button 
                onClick={() => setActiveSettingsTab('general')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${activeSettingsTab === 'general' ? 'bg-[#17162b] text-[#8880ff] font-semibold border border-[#211f3d]' : 'text-slate-400 hover:text-slate-200 hover:bg-[#111319] font-medium border border-transparent'}`}
              >
                 <Settings size={16} /> General Settings
              </button>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto pt-24 pb-28 px-6 lg:px-12 bg-[#0B0C10]">
           <form id="createPostForm" onSubmit={handlePublish} className="max-w-[800px]">
              
              {/* Form Alert States */}
              {error && (
                <div className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20 mb-6">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" /> <p>{error}</p>
                </div>
              )}
              {publishSuccess && (
                <div className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 p-4 rounded-xl border border-emerald-400/20 mb-6">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> <p className="font-bold">{publishSuccess}</p>
                </div>
              )}

              {activeSettingsTab === 'content' && (
                <div className="space-y-6">
                   <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">Title</label>
                      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. 10 Best Credit Cards in India (2024)" className="w-full bg-[#111319] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] shadow-sm transition-all" />
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-xs font-bold text-slate-300 mb-2">Slug (URL)</label>
                         <input type="text" value={slug} onChange={e => setSlug(e.target.value)} placeholder="custom-url-slug" className="w-full bg-[#111319] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff]" />
                      </div>
                      <div>
                         <label className="block text-xs font-bold text-slate-300 mb-2">Category</label>
                         <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-[#111319] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#5c4fff] appearance-none cursor-pointer">
                            <option value="Other">Other</option>
                            <option value="Cibil">Cibil</option>
                            <option value="Finance">Finance</option>
                         </select>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-xs font-bold text-slate-300 mb-2">Author Name</label>
                         <input type="text" value={authorName} onChange={e => setAuthorName(e.target.value)} placeholder="e.g. CreditKlick Team" className="w-full bg-[#111319] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff]" />
                      </div>
                      <div>
                         <label className="block text-xs font-bold text-slate-300 mb-2">Tags</label>
                         <input type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="finance, loans (comma separated)" className="w-full bg-[#111319] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff]" />
                      </div>
                   </div>

                   <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">Sub-description</label>
                      <textarea value={subDescription} onChange={e => setSubDescription(e.target.value)} rows={2} placeholder="Short summary displayed below title" className="w-full bg-[#111319] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] resize-none" />
                   </div>

                   <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">Excerpt</label>
                      <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} rows={3} placeholder="Brief summary..." className="w-full bg-[#111319] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] resize-y" />
                   </div>
                   
                   <div>
                      <label className="block text-xs font-bold text-slate-300 mb-3">Content <span className="text-red-400">*</span></label>
                      <div className="border border-[#1b1e28] rounded-xl overflow-hidden shadow-sm focus-within:border-[#5c4fff] transition-colors">
                         {/* Editor Toolbar */}
                         <div className="bg-[#13151c] border-b border-[#1b1e28] px-3 py-2 flex items-center gap-1 overflow-x-auto custom-scrollbar">
                            <select className="bg-transparent text-slate-300 text-sm outline-none px-2 py-1.5 cursor-pointer hover:bg-[#1b1e28] rounded-md transition-colors appearance-none font-medium">
                               <option>Normal</option>
                               <option>Heading 1</option>
                               <option>Heading 2</option>
                               <option>Heading 3</option>
                            </select>
                            <div className="w-px h-5 bg-[#262a38] mx-2" />
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><Bold size={16} /></button>
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><Italic size={16} /></button>
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><Underline size={16} /></button>
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><Strikethrough size={16} /></button>
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><Quote size={16} /></button>
                            <div className="w-px h-5 bg-[#262a38] mx-2" />
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><List size={16} /></button>
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><ListOrdered size={16} /></button>
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><AlignLeft size={16} /></button>
                            <div className="w-px h-5 bg-[#262a38] mx-2" />
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><Link2 size={16} /></button>
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><LucideImage size={16} /></button>
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><Video size={16} /></button>
                            <button type="button" className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1b1e28] rounded-md transition-colors"><Type size={16} /></button>
                         </div>
                         {/* Editor Content Area */}
                         <textarea 
                           value={content} 
                           onChange={e => setContent(e.target.value)} 
                           rows={14} 
                           placeholder="Write your article here..." 
                           className="w-full bg-[#111319] px-5 py-4 text-sm text-white placeholder:text-[#2a2e3f] outline-none resize-y font-mono tracking-wide" 
                           style={{ border: 'none' }}
                         />
                      </div>
                   </div>
                </div>
              )}

              {activeSettingsTab === 'seo' && (
                 <div className="p-6 sm:p-8 bg-transparent border border-[#1b1e28] rounded-2xl shadow-sm">
                    <h3 className="text-white font-bold text-lg mb-6">Search Engine Optimization</h3>
                    <div className="space-y-6">
                       <div>
                          <label className="block text-xs font-bold text-slate-400 mb-2">Meta Title</label>
                          <input type="text" value={metaTitle} onChange={e => setMetaTitle(e.target.value)} className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                       </div>
                       <div>
                          <label className="block text-xs font-bold text-slate-400 mb-2">Meta Description</label>
                          <textarea value={metaDescription} onChange={e => setMetaDescription(e.target.value)} rows={4} className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] resize-y" />
                       </div>
                       <div>
                          <label className="block text-xs font-bold text-slate-400 mb-2">Focus Keyword</label>
                          <input type="text" value={focusKeyword} onChange={e => setFocusKeyword(e.target.value)} className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                       </div>
                       <div>
                          <label className="block text-xs font-bold text-slate-400 mb-2">Canonical URL</label>
                          <input type="text" value={canonicalUrl} onChange={e => setCanonicalUrl(e.target.value)} className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                       </div>
                       <div className="flex items-center gap-3 pt-2">
                          <input type="checkbox" id="noIndex" checked={noIndex} onChange={e => setNoIndex(e.target.checked)} className="w-4 h-4 rounded border-[#1b1e28] bg-[#0B0C10] text-[#5c4fff] focus:ring-0 focus:ring-offset-0 cursor-pointer" />
                          <label htmlFor="noIndex" className="text-sm font-medium text-slate-300 cursor-pointer select-none">Discourage search engines from indexing this post</label>
                       </div>
                    </div>
                 </div>
              )}

              {activeSettingsTab === 'links' && (
                 <div className="p-6 sm:p-8 bg-transparent border border-[#1b1e28] rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                       <h3 className="text-white font-bold text-lg">External Backlinks</h3>
                       <button type="button" onClick={addExternalLink} className="flex items-center gap-1 text-sm font-semibold text-[#8880ff] hover:text-[#7b72f1] transition-colors">
                          <Plus size={16} /> Add Link
                       </button>
                    </div>
                    <div className="space-y-4">
                       {externalLinks.map((link, idx) => (
                          <div key={idx} className="bg-[#111319] border border-[#1b1e28] rounded-xl p-4 md:p-5 relative group shadow-sm transition-all hover:border-[#262a38]">
                             <div className="flex flex-col md:flex-row gap-4 items-start">
                                <div className="flex-1 space-y-4 w-full">
                                   <input type="text" value={link.url} onChange={e => updateExternalLink(idx, 'url', e.target.value)} placeholder="URL" className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#5c4fff] transition-all" />
                                   <input type="text" value={link.anchor} onChange={e => updateExternalLink(idx, 'anchor', e.target.value)} placeholder="Anchor Text" className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-[#5c4fff] transition-all" />
                                </div>
                                <button type="button" onClick={() => removeExternalLink(idx)} className="p-3 text-red-500/50 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors mt-1 md:mt-2 ml-auto flex-shrink-0">
                                   <Trash2 size={18} />
                                </button>
                             </div>
                          </div>
                       ))}
                       {externalLinks.length === 0 && (
                          <div className="text-center py-8 text-slate-500 border border-dashed border-[#1b1e28] rounded-xl text-sm">
                             No external links added yet. Click "Add Link" to get started.
                          </div>
                       )}
                    </div>
                 </div>
              )}

              {activeSettingsTab === 'cta' && (
                 <div className="space-y-6">
                    {/* Banner Logo / Image */}
                    <div className="p-6 sm:p-8 bg-transparent border border-[#1b1e28] rounded-2xl shadow-sm">
                       <h3 className="text-white font-bold text-lg mb-6">Banner Logo / Image</h3>
                       <div className="flex items-center gap-6 p-6 border border-dashed border-[#262a38] bg-[#0d0f14] rounded-xl">
                          <div className="w-20 h-20 bg-[#0B0C10] border border-[#1b1e28] flex items-center justify-center rounded-xl flex-shrink-0 shadow-sm">
                              <LucideImage className="text-slate-500 w-8 h-8 opacity-70" />
                          </div>
                          <div>
                             <button type="button" className="bg-[#5c4fff] hover:bg-[#4b3fdf] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors mb-2 shadow-[0_4px_15px_rgba(92,79,255,0.2)]">
                                <Upload size={16} /> Upload Logo
                             </button>
                             <p className="text-xs text-slate-500 font-medium">Recommended: PNG with transparent background, 200x200px</p>
                          </div>
                       </div>
                    </div>

                    {/* Banner Content */}
                    <div className="p-6 sm:p-8 bg-transparent border border-[#1b1e28] rounded-2xl shadow-sm">
                       <h3 className="text-white font-bold text-lg mb-6">Banner Content</h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                             <label className="block text-xs font-bold text-slate-400 mb-2">Title Line 1</label>
                             <input type="text" value={ctaTitle1} onChange={e => setCtaTitle1(e.target.value)} placeholder="Check CIBIL Score &" className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                          </div>
                          <div>
                             <label className="block text-xs font-bold text-slate-400 mb-2">Subtitle Line 2</label>
                             <input type="text" value={ctaSubtitle2} onChange={e => setCtaSubtitle2(e.target.value)} placeholder="Report worth ₹1,200" className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                          </div>
                          <div>
                             <label className="block text-xs font-bold text-slate-400 mb-2">Highlight Text (Green)</label>
                             <input type="text" value={ctaHighlightText} onChange={e => setCtaHighlightText(e.target.value)} placeholder="Absolutely FREE" className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                          </div>
                          <div>
                             <label className="block text-xs font-bold text-slate-400 mb-2">Offer Text (Below banner)</label>
                             <input type="text" value={ctaOfferText} onChange={e => setCtaOfferText(e.target.value)} placeholder="Chance to get Accidental Cover up to ₹1Lakh & m..." className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                          </div>
                       </div>
                    </div>

                    {/* Form & Button Settings */}
                    <div className="p-6 sm:p-8 bg-transparent border border-[#1b1e28] rounded-2xl shadow-sm">
                       <h3 className="text-white font-bold text-lg mb-6">Form & Button Settings</h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                          <div>
                             <label className="block text-xs font-bold text-slate-400 mb-2">Form Title</label>
                             <input type="text" value={ctaFormTitle} onChange={e => setCtaFormTitle(e.target.value)} placeholder="Let's Get Started" className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                          </div>
                          <div>
                             <label className="block text-xs font-bold text-slate-400 mb-2">Button Text</label>
                             <input type="text" value={ctaButtonText} onChange={e => setCtaButtonText(e.target.value)} placeholder="Check Free Credit Score" className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                          </div>
                          <div>
                             <label className="block text-xs font-bold text-slate-400 mb-2">Redirect URL</label>
                             <input type="text" value={ctaRedirectUrl} onChange={e => setCtaRedirectUrl(e.target.value)} placeholder="/credit-score" className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] transition-all" />
                          </div>
                       </div>
                       <div>
                          <label className="block text-xs font-bold text-slate-400 mb-2">Consent Text</label>
                          <textarea value={ctaConsentText} onChange={e => setCtaConsentText(e.target.value)} rows={3} placeholder="I hereby appoint CreditKlick as my authorized representative..." className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5c4fff] resize-y transition-all" />
                       </div>
                    </div>
                 </div>
              )}

              {activeSettingsTab === 'general' && (
                 <div className="p-6 sm:p-8 bg-transparent border border-[#1b1e28] rounded-2xl shadow-sm">
                    <h3 className="text-white font-bold text-lg mb-6">General Settings</h3>
                    
                    <div className="space-y-6">
                       <div>
                          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">STATUS</label>
                          <select value={status} onChange={e => setStatus(e.target.value)} className="w-full bg-[#0B0C10] border border-[#1b1e28] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#5c4fff] appearance-none cursor-pointer">
                             <option value="Published">Published</option>
                             <option value="Draft">Draft</option>
                             <option value="Archived">Archived</option>
                          </select>
                       </div>
                       
                       <div>
                          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">FEATURED IMAGE</label>
                          <div className="border border-dashed border-[#262a38] rounded-xl bg-[#0B0C10] hover:bg-[#111319] transition-colors cursor-pointer py-16 flex flex-col items-center justify-center text-slate-400 hover:text-[#8880ff]">
                              <LucideImage size={24} className="mb-3 opacity-70" />
                              <span className="text-xs font-semibold">Upload Image</span>
                          </div>
                          {/* Featured Image URL State holder placeholder */}
                          {featuredImage && (
                             <p className="mt-2 text-xs text-emerald-400">Image successfully loaded.</p>
                          )}
                       </div>
                    </div>
                 </div>
              )}
           </form>
        </div>

        {/* Footer actions */}
        <div className="fixed bottom-0 right-0 left-0 md:left-64 h-20 border-t border-[#1b1e28] bg-[#0B0C10] flex items-center justify-end px-6 sm:px-12 z-20">
           <div className="flex gap-4">
              <button onClick={() => setCurrentView('list')} className="px-6 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-[#1b1e28] transition-colors">
                 Cancel
              </button>
              <button form="createPostForm" type="submit" disabled={isPublishing} className="bg-[#5c4fff] hover:bg-[#4b3fdf] px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-[0_4px_15px_rgba(92,79,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center gap-2">
                 {isPublishing ? <Loader2 size={16} className="animate-spin" /> : null}
                 Save Information
              </button>
           </div>
        </div>

      </div>
    );
  };

  // Determine what UI state to show
  return currentView === 'list' ? renderListView() : renderCreateView();
};

export default AdminDashboard;
