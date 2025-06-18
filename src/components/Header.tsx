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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Logo Image */}
              <img 
                src="/tabordigitallogo.jpg" 
                alt="Tabor Digital Solutions Logo" 
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  console.log('Logo failed to load, trying fallback');
                  e.currentTarget.src = '/tabordigitallogo.jpg';
                }}
              />
              
              {/* Company Name */}
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-[#FF6B35] transition-colors duration-300 group-hover:text-[#4ECDC4]">
                  Tabor
                </span>
                <span className="text-2xl font-bold gradient-text">
                  Digital Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {Object.entries(navigationItems).map(([category, items]) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown('')}
              >
                <button
                  className={`font-medium transition-colors flex items-center hover:scale-105 transform duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-[#FF6B35]' : 'text-gray-800 hover:text-[#FF6B35]'
                  }`}
                >
                  {category}
                  <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-300 ${
                    activeDropdown === category ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.url}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#4ECDC4] hover:text-white transition-all duration-300 transform hover:translate-x-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link 
              to="/contact"
              className="bg-[#FF6B35] text-white px-4 py-2 rounded-md font-medium hover:bg-[#4ECDC4] transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-gray-800'} focus:outline-none transition-transform duration-300 hover:scale-110 transform`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Modern Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl animate-slide-in-bottom border-t border-gray-100">
          <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              {Object.entries(navigationItems).map(([category, items]) => (
                <div key={category} className="bg-gray-50 rounded-xl overflow-hidden">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleMobileDropdown(category)}
                    className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                      {category}
                    </span>
                    <ChevronRight 
                      size={20} 
                      className={`transform transition-transform duration-300 ${
                        activeMobileDropdown === category ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Dropdown Items */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    activeMobileDropdown === category 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="p-2 space-y-1">
                      {items.map((item, index) => (
                        item.url.startsWith('/services/') || 
                        item.url === '/about' || 
                        item.url === '/blog' || 
                        item.url === '/portfolio' || 
                        item.url === '/contact' ? (
                          <Link
                            key={item.name}
                            to={item.url}
                            className="flex items-center p-3 text-gray-700 hover:text-[#FF6B35] hover:bg-white rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:shadow-md group"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveMobileDropdown('');
                            }}
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <span className="w-1.5 h-1.5 bg-[#4ECDC4] rounded-full mr-3 group-hover:bg-[#FF6B35] transition-colors duration-300"></span>
                            <span className="font-medium">{item.name}</span>
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
                            className="flex items-center p-3 text-gray-700 hover:text-[#FF6B35] hover:bg-white rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:shadow-md group"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <span className="w-1.5 h-1.5 bg-[#4ECDC4] rounded-full mr-3 group-hover:bg-[#FF6B35] transition-colors duration-300"></span>
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveMobileDropdown('');
                  }}
                  className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 w-full text-center flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2 text-xl">🚀</span>
                  Get Started Today
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