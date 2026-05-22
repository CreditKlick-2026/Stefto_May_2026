import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Calendar, Clock, User, Tag, Share2,
  ChevronRight, Loader2, CheckCircle, Phone
} from 'lucide-react';

const API_BASE = 'http://localhost:3000/api/v1/blog';

// ─── Helpers ────────────────────────────────────────────────────────────────

const getImageUrl = (post) => {
  if (post?.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url) return post.featuredImage.url;
  if (typeof post?.featuredImage === 'string' && post.featuredImage) return post.featuredImage;
  if (post?.ctaBanner?.customIconUrl) return post.ctaBanner.customIconUrl;
  return 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=max&q=80&w=1000';
};

const getAuthorName = (post) => {
  if (post?.authorName?.trim()) return post.authorName;
  const author = post?.author;
  if (!author) return 'Stefto Team';
  if (author.fullName) return author.fullName;
  if (author.name && typeof author.name === 'object' && author.name.first) return `${author.name.first} ${author.name.last || ''}`;
  if (typeof author.name === 'string') return author.name;
  return 'Stefto Team';
};

const processContent = (content) => {
  if (!content) return '';
  let p = content;
  p = p.replace(/&nbsp;/gi, ' ');
  p = p.replace(/\s{2,}/g, ' ');
  p = p.replace(/<h([1-6])[^>]*>\s*<\/h\1>/gi, '');
  p = p.replace(/<p[^>]*>\s*<\/p>/gi, '');
  p = p.replace(/<(h[1-6])([^>]*)><strong>([^<]*)<\/strong><\/\1>/gi, '<$1$2>$3</$1>');
  p = p.replace(/<table/gi, '<table class="w-full border-collapse my-6 text-sm"');
  p = p.replace(/<th/gi, '<th class="bg-blue-600 text-white px-4 py-3 text-left font-semibold border border-blue-500"');
  p = p.replace(/<td/gi, '<td class="px-4 py-3 border border-gray-200"');
  p = p.replace(/<tr>/gi, '<tr class="hover:bg-gray-50 transition-colors">');
  p = p.replace(/<ul>/gi, '<ul class="list-disc pl-6 my-4 space-y-2">');
  p = p.replace(/<ol>/gi, '<ol class="list-decimal pl-6 my-4 space-y-2">');
  p = p.replace(/<li>/gi, '<li class="text-gray-700 leading-relaxed">');
  p = p.replace(/<blockquote>/gi, '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700">');
  return p;
};

// ─── CTA Banner Component ────────────────────────────────────────────────────

const CTABannerSection = ({ ctaBanner }) => {
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  if (!ctaBanner?.enabled) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) { setError('Please enter your mobile number'); return; }
    if (!/^[6-9]\d{9}$/.test(phone)) { setError('Please enter a valid 10-digit mobile number'); return; }
    if (!agreed) { setError('Please agree to the terms'); return; }
    window.location.href = `${ctaBanner.redirectUrl || '/credit-score'}?phone=${phone}`;
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-cyan-50 rounded-2xl overflow-hidden shadow-lg border border-blue-200 mb-8">
      <div className="flex flex-col lg:flex-row">
        {/* Left */}
        <div className="lg:w-3/5 p-6 lg:p-8 flex items-center justify-center gap-6">
          <div className="max-w-md">
            <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-1 leading-tight">
              {ctaBanner.title || 'Check CIBIL Score &'}
              {ctaBanner.subtitle && <span className="text-gray-700"> {ctaBanner.subtitle}</span>}
              {ctaBanner.highlight && <span className="text-green-600"> {ctaBanner.highlight}</span>}
            </h3>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-amber-400 rounded-full" />
              {ctaBanner.offerText}
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center w-28 h-28 flex-shrink-0">
            <CheckCircle className="w-16 h-16 text-blue-400 opacity-50" />
          </div>
        </div>
        {/* Right Form */}
        <div className="lg:w-2/5 bg-white p-6 lg:p-8">
          <h4 className="text-lg font-bold text-gray-900 mb-4">{ctaBanner.formTitle || "Let's Get Started"}</h4>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '').slice(0, 10)); setError(''); }}
                placeholder="Mobile Number"
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <label className="flex items-start gap-2 mb-4 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => { setAgreed(e.target.checked); setError(''); }} className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded" />
              <span className="text-xs text-gray-500 leading-relaxed">{ctaBanner.consentText}<span className="text-blue-600 ml-1 cursor-pointer hover:underline">+More</span></span>
            </label>
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/30">
              {ctaBanner.buttonText || 'Check Free Credit Score'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ─── Sidebar Component ───────────────────────────────────────────────────────

const SidebarLinks = ({ currentSlug, relatedPosts, currentCategory }) => {
  const categoryNames = { 'credit-cards': 'Credit Cards', loans: 'Loans', cibil: 'Credit Score', tips: 'Financial Tips', news: 'News', guides: 'Guides', calculators: 'Calculators', other: 'Related Articles' };
  const catDisplay = categoryNames[currentCategory] || 'Related Articles';
  if (!relatedPosts?.length) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-4">
        <h3 className="font-bold text-base">{catDisplay} Articles</h3>
        <p className="text-blue-100 text-xs mt-1">{relatedPosts.length} related articles</p>
      </div>
      <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
        {relatedPosts.map((post, index) => {
          const isActive = post.slug === currentSlug;
          return (
            <Link
              key={post._id}
              to={`/blog/${post.slug || post._id}`}
              className={`flex items-start gap-3 px-5 py-3 hover:bg-gray-50 transition-colors group relative no-underline ${isActive ? 'bg-blue-50/50' : ''}`}
            >
              {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />}
              <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors'}`}>
                {index + 1}
              </div>
              <p className={`text-sm font-medium leading-snug ${isActive ? 'text-blue-700' : 'text-gray-700 group-hover:text-blue-600 transition-colors'}`}>
                {post.title}
              </p>
            </Link>
          );
        })}
        <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
          <Link to={`/blog?category=${currentCategory}`} className="text-xs font-semibold text-blue-600 hover:text-blue-700 uppercase tracking-wide flex items-center justify-center gap-1 no-underline">
            View All {catDisplay} <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setNotFound(false);
      try {
        const res = await fetch(`${API_BASE}/${slug}`);
        const json = await res.json();
        if (!res.ok || !json.success) { setNotFound(true); return; }
        const postData = json.data;
        setPost(postData);

        // Fetch related posts
        if (postData.category) {
          const relRes = await fetch(`${API_BASE}?limit=20&category=${encodeURIComponent(postData.category)}`);
          const relJson = await relRes.json();
          if (relJson.success) {
            const allPosts = Array.isArray(relJson.data) ? relJson.data : (relJson.data?.posts || relJson.data?.data || []);
            setRelatedPosts(allPosts.filter(p => (p.slug || p._id) !== slug));
          }
        }
      } catch (e) {
        console.error('Failed to load post', e);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="text-gray-500 font-medium">Loading article...</p>
      </div>
    </div>
  );

  if (notFound || !post) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-500 mb-8">The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold no-underline hover:bg-blue-700 transition-colors">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );

  const ctaBanner = { ...post.ctaBanner };
  const shareUrl = window.location.href;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Title Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link to={`/blog?category=${post.category}`} className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold hover:bg-blue-100 transition-colors no-underline">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                {post.category}
              </Link>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight text-center mb-4">
              {post.title}
            </h1>
            {post.subDescription && (
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light text-center max-w-3xl mx-auto">
                {post.subDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      {ctaBanner?.enabled && (
        <div className="container max-w-6xl mx-auto px-4 pt-4">
          <CTABannerSection ctaBanner={ctaBanner} />
        </div>
      )}

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-xs md:text-sm">
          <div className="flex items-center gap-1.5">
            <Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors no-underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <Link to="/blog" className="text-gray-500 hover:text-blue-600 transition-colors no-underline">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-gray-700 font-medium truncate max-w-[180px] md:max-w-sm">{post.title}</span>
          </div>
          <span className="text-xs text-gray-400 hidden md:block">
            Updated: {new Date(post.updatedAt || post.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
          </span>
        </div>
      </div>

      {/* Main & Sidebar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Article */}
          <div className="lg:w-3/4">
            <article className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
              {/* Featured Image */}
              <div className="relative w-full mb-6 rounded-xl overflow-hidden bg-gray-50 flex justify-center items-center">
                <img
                  src={getImageUrl(post)}
                  alt={post.title}
                  className="w-full h-auto max-h-[500px] object-contain"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=max&q=80&w=1000'; }}
                />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 pb-4 mb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-medium text-gray-800">{getAuthorName(post)}</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{new Date(post.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{post.readTime || 5} min read</span>
                </div>
                <Link to={`/blog?category=${post.category}`} className="bg-blue-600 text-white px-2.5 py-0.5 rounded-full text-xs font-medium ml-auto hover:bg-blue-700 transition-colors no-underline">
                  {post.category}
                </Link>
              </div>

              {/* Content */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: processContent(post.content) }}
              />

              {/* Tags */}
              {post.tags?.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-500" />
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <button
                  onClick={() => { navigator.clipboard.writeText(shareUrl); alert('Link copied!'); }}
                  className="text-gray-600 mb-4 flex items-center gap-2 font-medium hover:text-blue-600 transition-colors group bg-transparent border-none cursor-pointer p-0"
                >
                  <div className="bg-gray-100 p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="underline decoration-dotted underline-offset-4">Share this article</span>
                </button>
                <div className="flex gap-4">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors no-underline">f</a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors no-underline">𝕏</a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors no-underline">in</a>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <SidebarLinks currentSlug={slug} relatedPosts={relatedPosts} currentCategory={post.category} />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {relatedPosts.slice(0, 6).map((relPost) => (
                <Link key={relPost._id} to={`/blog/${relPost.slug || relPost._id}`} className="group no-underline block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="h-32 md:h-40 overflow-hidden flex-shrink-0">
                      <img src={getImageUrl(relPost)} alt={relPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=max&q=80&w=1000'; }} />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <span className="text-xs text-blue-600 font-medium">{relPost.category}</span>
                      <h3 className="text-sm md:text-base font-semibold text-gray-900 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <style>{`
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 { font-weight: 700; margin-top: 1.5em; margin-bottom: 0.5em; color: #111827; }
        .prose h1 { font-size: 2em; }
        .prose h2 { font-size: 1.5em; }
        .prose h3 { font-size: 1.25em; }
        .prose p { margin-bottom: 1em; color: #374151; line-height: 1.75; }
        .prose a { color: #2563eb; text-decoration: underline; }
        .prose strong { font-weight: 700; }
        .prose em { font-style: italic; }
        .prose iframe { width: 100%; min-height: 350px; aspect-ratio: 16/9; border-radius: 0.75rem; margin: 1.5rem 0; }
        @media (max-width: 640px) { .prose iframe { min-height: 200px; } }
      `}</style>
    </div>
  );
}
