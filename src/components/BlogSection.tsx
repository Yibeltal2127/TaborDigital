import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, Search, Loader, ChevronDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts, fetchBlogCategories, type BlogPost, type BlogCategory } from '../lib/blog';

const BlogCard = ({ post, isExpanded, onToggleExpand }: { 
  post: BlogPost; 
  isExpanded: boolean; 
  onToggleExpand: (postId: string) => void; 
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatContent = (content: string) => {
    // Convert markdown-style headers to HTML
    return content
      .replace(/### (.*)/g, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
      .replace(/## (.*)/g, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/# (.*)/g, '<h1 class="text-2xl font-bold mt-6 mb-4">$1</h1>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^\s*/, '<p class="mb-4">')
      .replace(/\s*$/, '</p>');
  };

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={post.featured_image} 
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={16} className="mr-2" />
          <span>{formatDate(post.published_at)}</span>
          <Clock size={16} className="ml-4 mr-2" />
          <span>{post.read_time}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        
        {isExpanded && (
          <div className="mb-4">
            <div 
              className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={post.author_image} 
              alt={post.author_name}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <p className="font-medium text-gray-900">{post.author_name}</p>
              <p className="text-sm text-gray-500">{post.author_role}</p>
            </div>
          </div>
          
          <button 
            onClick={() => onToggleExpand(post.id)}
            className="flex items-center text-[#FF6B35] hover:text-[#4ECDC4] font-medium transition-colors"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedPosts, setExpandedPosts] = useState(new Set<string>());
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadBlogData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadBlogData = async () => {
    setLoading(true);
    try {
      const [postsData, categoriesData] = await Promise.all([
        fetchBlogPosts(selectedCategory),
        fetchBlogCategories()
      ]);
      
      setBlogPosts(postsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading blog data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleExpand = (postId: string) => {
    const newExpandedPosts = new Set(expandedPosts);
    if (newExpandedPosts.has(postId)) {
      newExpandedPosts.delete(postId);
    } else {
      newExpandedPosts.add(postId);
    }
    setExpandedPosts(newExpandedPosts);
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  const allCategories = ['All', ...categories.map(cat => cat.name)];

  const handleViewAll = () => {
    // This function is no longer needed since we're using Link
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35] mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Insights & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, insights, and updates from the world of design, development, and digital innovation.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none"
            />
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#FF6B35] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader className="animate-spin text-[#FF6B35]" size={32} />
            <span className="ml-2 text-gray-600">Loading articles...</span>
          </div>
        )}
        
        {/* Blog Posts Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                isExpanded={expandedPosts.has(post.id)}
                onToggleExpand={handleToggleExpand}
              />
            ))}
          </div>
        )}
        
        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {searchTerm ? 'No articles found matching your search.' : 'No posts found in this category.'}
            </p>
          </div>
        )}
        
        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="bg-white border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
          >
            View All Posts
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;