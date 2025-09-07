import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [activeMobileDropdown, setActiveMobileDropdown] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = {
    About: [
      { name: 'Our Story', url: '/about#story' },
      { name: 'Our Team', url: '/about#team' },
      { name: 'Our Values', url: '/about#values' }
    ],
    Services: [
      { name: 'Graphic Design', url: '/services/graphic-design' },
      { name: 'Web Development', url: '/services/web-development' },
      { name: 'Digital Marketing', url: '/services/digital-marketing' },
      { name: 'Business Consulting', url: '/services/business-consulting' },
      { name: 'Interior Design', url: '/services/interior-design' },
      { name: 'Engineering Design', url: '/services/engineering-design' }
    ],
    Portfolio: [
      { name: 'View All Projects', url: '/portfolio' },
      { name: 'Featured Projects', url: '/portfolio#featured' },
      { name: 'Client Success Stories', url: '/portfolio#success-stories' }
    ],
    Blog: [
      { name: 'Latest Articles', url: '/blog' },
      { name: 'Industry Insights', url: '/blog#insights' },
      { name: 'Company Updates', url: '/blog#updates' }
    ],
    Resources: [
      { name: 'SEO Services', url: '/services/seo' },
      { name: 'Website Packages', url: '/services/website-design-packages' },
      { name: 'App Development', url: '/services/app-development-process' },
      { name: 'Business Strategy', url: '/services/business-strategy-services' }
    ],
    Contact: [
      { name: 'Get in Touch', url: '/contact' },
      { name: 'Book Consultation', url: '/contact#book-consultation' },
      { name: 'Request Quote', url: '/contact#quote' }
    ]
  };

  const handleSectionNavigation = (url: string) => {
    if (url.startsWith('/#')) {
      const sectionId = url.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (url.includes('#')) {
      const [path, sectionId] = url.split('#');
      if (window.location.pathname !== path) {
        window.location.href = url;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const toggleMobileDropdown = (category: string) => {
    setActiveMobileDropdown(activeMobileDropdown === category ? '' : category);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100 py-3' 
          : 'bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo and Company Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              {/* Enhanced Logo Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img 
                  src="/tabor-engineering-logo.png" 
                  alt="Tabor Engineering & Digital Solutions Logo" 
                  className="relative w-16 h-16 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  onError={(e) => {
                    console.log('Logo failed to load, trying fallback');
                    e.currentTarget.src = '/tabor-engineering-logo.png';
                  }}
                />
              </div>
              
              {/* Enhanced Company Name */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl md:text-3xl font-bold text-[#FF6B35] transition-all duration-300 group-hover:text-[#4ECDC4] group-hover:scale-105">
                    Tabor
                  </span>
                  <div className="hidden sm:block w-1 h-8 bg-gradient-to-b from-[#FF6B35] to-[#4ECDC4] rounded-full"></div>
                </div>
                <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent group-hover:from-[#FF6B35] group-hover:to-[#4ECDC4] transition-all duration-300">
                  Engineering & Digital Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {Object.entries(navigationItems).map(([category, items]) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown('')}
              >
                <button
                  className={`px-4 py-2 font-semibold transition-all duration-300 flex items-center rounded-lg hover:scale-105 transform ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#FF6B35] hover:bg-gray-50' 
                      : 'text-gray-800 hover:text-[#FF6B35] hover:bg-white/50'
                  }`}
                >
                  {category}
                  <ChevronDown size={16} className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                {/* Enhanced Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-3 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 py-3 transition-all duration-500 ${
                    activeDropdown === category 
                      ? 'opacity-100 visible translate-y-0 scale-100' 
                      : 'opacity-0 invisible -translate-y-4 scale-95'
                  }`}
                >
                  <div className="px-2">
                    {items.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#4ECDC4] hover:text-white rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg group"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></div>
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Enhanced CTA Button */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden group shadow-lg"
              >
                <span className="relative z-10 flex items-center font-extrabold text-shadow-sm">
                  <span className="mr-2 text-lg">🚀</span>
                  <span className="text-base tracking-wide text-[#FF6B35] group-hover:text-[#4ECDC4] transition-colors duration-300">Get Started</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </nav>

          {/* Medium Screen Navigation (md to lg) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-4">
            <Link 
              to="/about"
              className="px-3 py-2 font-semibold text-gray-700 hover:text-[#FF6B35] transition-colors duration-300"
            >
              About
            </Link>
            <Link 
              to="/services/graphic-design"
              className="px-3 py-2 font-semibold text-gray-700 hover:text-[#FF6B35] transition-colors duration-300"
            >
              Services
            </Link>
            <Link 
              to="/portfolio"
              className="px-3 py-2 font-semibold text-gray-700 hover:text-[#FF6B35] transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link 
              to="/contact"
              className="group bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white px-4 py-2 rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 transform shadow-md"
            >
              <span className="text-[#FF6B35] group-hover:text-[#4ECDC4] font-extrabold tracking-wide transition-colors duration-300">Contact</span>
            </Link>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 rounded-lg transition-all duration-300 hover:scale-110 transform ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-gray-800 hover:bg-white/50'
              }`}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Modern Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-100 animate-slide-in-bottom">
          <div className="container mx-auto px-6 py-8 max-h-[85vh] overflow-y-auto">
            <div className="space-y-6">
              {/* Quick Access Links */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="p-4 bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] text-white rounded-2xl text-center font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
                >
                  <div className="text-2xl mb-1">👥</div>
                  <div className="text-sm">About Us</div>
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="p-4 bg-gradient-to-br from-[#4ECDC4] to-[#FF6B35] text-white rounded-2xl text-center font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
                >
                  <div className="text-2xl mb-1">💼</div>
                  <div className="text-sm">Portfolio</div>
                </Link>
              </div>

              {/* Navigation Categories */}
              {Object.entries(navigationItems).map(([category, items]) => (
                <div key={category} className="bg-gray-50/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100">
                  {/* Enhanced Category Header */}
                  <button
                    onClick={() => toggleMobileDropdown(category)}
                    className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white font-bold transition-all duration-300 hover:shadow-lg group"
                  >
                    <span className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse group-hover:animate-bounce"></div>
                      {category}
                    </span>
                    <ChevronRight 
                      size={20} 
                      className={`transform transition-transform duration-300 ${
                        activeMobileDropdown === category ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Enhanced Dropdown Items */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    activeMobileDropdown === category 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="p-3 space-y-2">
                      {items.map((item, index) => (
                        item.url.startsWith('/services/') || 
                        item.url === '/about' || 
                        item.url === '/blog' || 
                        item.url === '/portfolio' || 
                        item.url === '/contact' ? (
                          <Link
                            key={item.name}
                            to={item.url}
                            className="flex items-center p-4 text-gray-700 hover:text-[#FF6B35] hover:bg-white rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:shadow-md group"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveMobileDropdown('');
                            }}
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mr-4 group-hover:bg-[#FF6B35] transition-colors duration-300"></div>
                            <span className="font-semibold">{item.name}</span>
                          </Link>
                        ) : (
                          <Link
                            key={item.name}
                            to="/"
                            onClick={() => {
                              handleSectionNavigation(item.url);
                              setIsOpen(false);
                              setActiveMobileDropdown('');
                            }}
                            className="flex items-center p-4 text-gray-700 hover:text-[#FF6B35] hover:bg-white rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:shadow-md group"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mr-4 group-hover:bg-[#FF6B35] transition-colors duration-300"></div>
                            <span className="font-semibold">{item.name}</span>
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Enhanced CTA Button */}
              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveMobileDropdown('');
                  }}
                  className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white px-8 py-5 rounded-2xl font-bold transition-all duration-300 w-full text-center flex items-center justify-center transform hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-3 text-2xl">🚀</span>
                    Get Started Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;