import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/SEO/MetaTags';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

const NotFound = () => {
  const popularPages = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: null },
    { name: 'Our Services', path: '/#services', icon: null },
    { name: 'Portfolio', path: '/portfolio', icon: null },
    { name: 'Blog', path: '/blog', icon: null },
    { name: 'Contact', path: '/contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title="Page Not Found - Tabor Digital Solutions"
        description="The page you're looking for doesn't exist. Explore our services, portfolio, and blog instead."
        noIndex={true}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-12">
            <div className="text-8xl md:text-9xl font-bold text-[#FF6B35] mb-4">404</div>
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry though – we'll help you find your way back!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/"
              className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <Home className="mr-2" size={20} />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </button>
          </div>

          {/* Popular Pages */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Popular Pages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center group"
                >
                  {page.icon && (
                    <page.icon className="mx-auto mb-2 text-[#FF6B35] group-hover:text-[#4ECDC4] transition-colors" size={24} />
                  )}
                  <span className="text-gray-700 group-hover:text-[#FF6B35] transition-colors font-medium">
                    {page.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="bg-blue-50 rounded-lg p-6 mb-12">
            <Search className="mx-auto mb-4 text-blue-600" size={32} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Looking for something specific?
            </h3>
            <p className="text-gray-600 mb-4">
              Try searching our blog or portfolio for the content you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/blog"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Search Blog
              </Link>
              <Link 
                to="/portfolio"
                className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Browse Portfolio
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-4">
              Our team is here to assist you. Get in touch and we'll help you find what you're looking for.
            </p>
            <Link 
              to="/contact"
              className="text-[#FF6B35] hover:text-[#4ECDC4] font-medium transition-colors inline-flex items-center"
            >
              <Mail className="mr-2" size={18} />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;