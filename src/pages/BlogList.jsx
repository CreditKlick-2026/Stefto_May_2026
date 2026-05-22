import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, FileText, Loader2 } from 'lucide-react';

const API_BASE = 'http://localhost:3000/api/v1/blog';

const categoryLabels = {
  'credit-cards': 'Credit Cards',
  'loans': 'Loans',
  'cibil': 'Credit Score',
  'tips': 'Financial Tips',
  'news': 'News',
  'guides': 'Guides',
  'calculators': 'Calculators',
  'other': 'Other',
};

const getCategoryLabel = (cat) =>
  categoryLabels[cat] || cat.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

const getImageUrl = (post) => {
  if (post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url) return post.featuredImage.url;
  if (typeof post.featuredImage === 'string' && post.featuredImage) return post.featuredImage;
  if (post.ctaBanner?.customIconUrl) return post.ctaBanner.customIconUrl;
  return 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=max&q=80&w=1000';
};

const getAuthorName = (author) => {
  if (!author) return 'Stefto Team';
  if (author.fullName) return author.fullName;
  if (author.name && typeof author.name === 'object' && author.name.first) return `${author.name.first} ${author.name.last || ''}`;
  if (typeof author.name === 'string') return author.name;
  return 'Stefto Team';
};

export default function BlogList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const searchParam = searchParams.get('search') || '';
  const pageParam = parseInt(searchParams.get('page') || '1', 10);

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [page, setPage] = useState(pageParam);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch posts — adapt query params to your API shape
      const params = new URLSearchParams({ page, limit: 20 });
      if (selectedCategory && selectedCategory !== 'All') params.append('category', selectedCategory);
      if (searchParam) params.append('search', searchParam);

      const res = await fetch(`${API_BASE}?${params}`);
      const json = await res.json();

      if (json.success) {
        // Handle both shapes: data.posts or flat data array
        const rawData = json.data;
        const postsArr = Array.isArray(rawData) ? rawData : (rawData?.posts || rawData?.data || []);
        setPosts(postsArr);
        setTotalPages(rawData?.pagination?.pages || 1);
      }
    } catch (e) {
      console.error('Failed to load posts', e);
    } finally {
      setLoading(false);
    }
  }, [page, selectedCategory, searchParam]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setPage(1);
    const params = {};
    if (cat && cat !== 'All') params.category = cat;
    setSearchParams(params);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="relative text-white py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md animate-fade-in">
            Stefto Insights
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
            Expert articles, industry news, and guides to help you make smarter business decisions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">

        {/* Search Results Header */}
        {searchParam && (
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Search Results for <span className="text-blue-600">"{searchParam}"</span>
            </h2>
            <Link to="/blog" className="text-sm text-gray-500 hover:text-blue-600 underline no-underline">
              Clear Search
            </Link>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 z-20 bg-gray-50/80 backdrop-blur-md py-4">
          <button
            onClick={() => handleCategorySelect('All')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'All' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
          >
            All Posts
          </button>
          {categories.map((cat) => (
            <button
              key={cat.category || cat}
              onClick={() => handleCategorySelect(cat.category || cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === (cat.category || cat) ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
            >
              {getCategoryLabel(cat.category || cat)}
              {cat.count != null && <span className="text-xs opacity-70 ml-1">({cat.count})</span>}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            <p className="text-gray-500 text-sm font-medium">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">No posts found</h3>
            <p className="text-gray-500 mt-2">Try selecting a different category or check back later.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={post._id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  style={{ animation: `fadeInUp 0.5s ease forwards ${index * 0.08}s`, opacity: 0 }}
                >
                  <Link to={`/blog/${post.slug || post.id || post._id}`} className="no-underline block">
                    <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <img
                        src={getImageUrl(post)}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=max&q=80&w=1000'; }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                          {getCategoryLabel(post.category || 'Other')}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.seo?.metaDescription || post.excerpt || post.subDescription || 'Read more about this topic...'}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{new Date(post.createdAt || post.published_at).toLocaleDateString('en-IN')}</span>
                        <span className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 text-sm font-medium"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-gray-600 text-sm">Page {page} of {totalPages}</span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 text-sm font-medium"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
