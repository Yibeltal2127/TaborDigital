import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/SEO/MetaTags';
import StructuredData from '../components/SEO/StructuredData';
import { Calendar, User, ArrowRight, Clock, Tag, Search, Loader, Filter, ChevronDown } from 'lucide-react';
import { fetchBlogPosts, fetchBlogCategories, type BlogPost, type BlogCategory } from '../lib/blog';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl } from '../utils/seo';
import { scrollToTop, scrollToSection } from '../utils/smoothScroll';

const BlogCard = ({ post }: { post: BlogPost }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={post.featured_image} 
          alt={post.title}
          className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
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
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mb-4">
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
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs text-gray-500">+{post.tags.length - 3} more</span>
          )}
        </div>
        
        <Link 
          to={`/blog/${post.slug}`}
          className="flex items-center text-[#FF6B35] hover:text-[#4ECDC4] font-medium transition-colors"
        >
          Read Full Article
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </article>
  );
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const pageTitle = generatePageTitle('Blog - Latest Insights & Updates');
  const pageDescription = generateMetaDescription(
    'Stay informed with the latest trends, insights, and updates from the world of design, development, and digital innovation. Read our expert articles and industry analysis.'
  );
  const pageKeywords = generateKeywords(['blog', 'articles', 'insights', 'digital trends', 'design tips', 'development tutorials']);

  useEffect(() => {
    scrollToTop();
    
    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash.substring(1));
      }, 100);
    }
  }, []);

  useEffect(() => {
    loadBlogData();
  }, [selectedCategory]);

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

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  const allCategories = ['All', ...categories.map(cat => cat.name)];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/blog')}
        type="website"
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay informed with the latest trends, insights, and updates from the world of design, development, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200"
              >
                <Filter size={20} className="text-[#FF6B35]" />
                <span>{selectedCategory}</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isFilterOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                        selectedCategory === category ? 'text-[#FF6B35]' : 'text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section id="insights" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Industry Insights</h2>
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
                <BlogCard key={post.id} post={post} />
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
        </div>
      </section>

      {/* Company Updates */}
      <section id="updates" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Company Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company update cards would go here */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="text-[#FF6B35] mr-2" size={24} />
                <h3 className="text-lg font-semibold">Latest News</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest company news, team updates, and industry developments.
              </p>
              <Link 
                to="/blog"
                className="text-[#FF6B35] hover:text-[#4ECDC4] font-medium transition-colors"
              >
                Read More
                <ArrowRight size={16} className="ml-1 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;