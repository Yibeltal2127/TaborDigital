import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/SEO/MetaTags';
import StructuredData from '../../components/SEO/StructuredData';
import { 
  Monitor, CheckCircle, ArrowRight, Palette, Code, Smartphone, 
  Globe, Shield, Zap, Star, Clock, Users, TrendingUp, Award, 
  Eye, Settings, Package, Layers, Search, BarChart3 
} from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl, generateServiceStructuredData } from '../../utils/seo';

const WebsiteDesignPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [projectBrief, setProjectBrief] = useState({
    businessType: '',
    industry: '',
    preferredPackage: '',
    timeline: '',
    features: []
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { containerRef: packagesRef, visibleItems: packagesVisible } = useStaggeredAnimation(3, 150);
  const { containerRef: processRef, visibleItems: processVisible } = useStaggeredAnimation(6, 200);
  const { containerRef: portfolioRef, visibleItems: portfolioVisible } = useStaggeredAnimation(6, 100);

  const pageTitle = generatePageTitle('Professional Website Design Packages - Custom Web Solutions');
  const pageDescription = generateMetaDescription(
    'Professional website design packages that convert visitors into customers. Choose from Essential, Professional, or Premium packages with custom features and modern design.'
  );
  const pageKeywords = generateKeywords(['website design packages', 'web design', 'custom websites', 'responsive design', 'website development']);

  const packages = [
    {
      name: 'Essential Website',
      price: '$799',
      originalPrice: '$999',
      description: 'Perfect for small businesses and startups',
      pages: '5 Pages',
      timeline: '2-3 Weeks',
      features: [
        'Responsive Mobile Design',
        'Contact Form Integration',
        'Basic SEO Setup',
        'Social Media Links',
        'Google Analytics',
        '1 Round of Revisions',
        'Basic Content Management',
        'SSL Certificate Setup'
      ],
      addOns: ['E-commerce ($200)', 'Blog Setup ($150)', 'Advanced SEO ($300)'],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional Website',
      price: '$1,499',
      originalPrice: '$1,899',
      description: 'Comprehensive solution for growing businesses',
      pages: '10 Pages',
      timeline: '3-4 Weeks',
      features: [
        'Custom Design & Branding',
        'Advanced Responsive Design',
        'Content Management System',
        'SEO Optimization',
        'Contact Forms & Lead Capture',
        '3 Rounds of Revisions',
        'Social Media Integration',
        'Performance Optimization',
        'Basic E-commerce Ready',
        '30 Days Support'
      ],
      addOns: ['Advanced E-commerce ($400)', 'Custom Animations ($250)', 'Multi-language ($350)'],
      popular: true,
      color: 'orange'
    },
    {
      name: 'Premium Website',
      price: '$2,999',
      originalPrice: '$3,799',
      description: 'Full-featured solution for enterprises',
      pages: 'Unlimited',
      timeline: '4-6 Weeks',
      features: [
        'Custom Design & Development',
        'Advanced CMS with Training',
        'E-commerce Functionality',
        'Advanced SEO & Analytics',
        'Custom Integrations',
        'Unlimited Revisions',
        'Performance Optimization',
        'Security Features',
        'Multi-language Support',
        '90 Days Support',
        'Dedicated Project Manager',
        'Priority Support'
      ],
      addOns: ['Custom API Development ($600)', 'Advanced Analytics ($400)', 'Maintenance Plan ($200/mo)'],
      popular: false,
      color: 'purple'
    }
  ];

  const designProcess = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We start with a comprehensive consultation to understand your business goals, target audience, and design preferences.',
      icon: Search,
      duration: '1-2 Days'
    },
    {
      step: 2,
      title: 'Wireframing & Sitemap',
      description: 'Create detailed wireframes and site structure to map out user experience and content organization.',
      icon: Layers,
      duration: '2-3 Days'
    },
    {
      step: 3,
      title: 'Design Mockups',
      description: 'Develop stunning visual designs that reflect your brand identity and engage your target audience.',
      icon: Palette,
      duration: '5-7 Days'
    },
    {
      step: 4,
      title: 'Development & Testing',
      description: 'Transform designs into a fully functional, responsive website with thorough testing across devices.',
      icon: Code,
      duration: '7-14 Days'
    },
    {
      step: 5,
      title: 'Content Integration',
      description: 'Add your content, optimize for SEO, and ensure everything works perfectly before launch.',
      icon: Settings,
      duration: '2-3 Days'
    },
    {
      step: 6,
      title: 'Launch & Support',
      description: 'Deploy your website live and provide ongoing support to ensure optimal performance.',
      icon: Globe,
      duration: 'Ongoing'
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Fashion Store',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      package: 'Premium',
      results: '+250% Sales'
    },
    {
      title: 'Restaurant Chain Website',
      category: 'Food & Beverage',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      package: 'Professional',
      results: '+180% Orders'
    },
    {
      title: 'Tech Startup Landing',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      package: 'Professional',
      results: '+300% Leads'
    },
    {
      title: 'Healthcare Clinic',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      package: 'Essential',
      results: '+150% Appointments'
    },
    {
      title: 'Real Estate Agency',
      category: 'Real Estate',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      package: 'Premium',
      results: '+200% Inquiries'
    },
    {
      title: 'Educational Platform',
      category: 'Education',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      package: 'Professional',
      results: '+400% Enrollments'
    }
  ];

  const addOnServices = [
    {
      icon: Package,
      title: 'E-commerce Functionality',
      description: 'Complete online store with payment processing',
      price: 'From $200'
    },
    {
      icon: Search,
      title: 'Advanced SEO',
      description: 'Comprehensive SEO optimization and setup',
      price: 'From $300'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Integration',
      description: 'Connect your website with mobile apps',
      price: 'From $500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Tracking',
      description: 'Advanced analytics and conversion tracking',
      price: 'From $150'
    },
    {
      icon: Shield,
      title: 'Security Features',
      description: 'Enhanced security and backup systems',
      price: 'From $250'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed optimization and caching setup',
      price: 'From $200'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Bloom Boutique',
      quote: 'Our new website increased online sales by 300% in the first month. The design perfectly captures our brand essence.',
      rating: 5,
      package: 'Professional'
    },
    {
      name: 'Michael Chen',
      company: 'TechFlow Solutions',
      quote: 'The team delivered exactly what we envisioned. The website is fast, beautiful, and converts visitors into customers.',
      rating: 5,
      package: 'Premium'
    },
    {
      name: 'Emma Rodriguez',
      company: 'Green Garden Cafe',
      quote: 'Professional service from start to finish. Our customers love the new online ordering system.',
      rating: 5,
      package: 'Essential'
    }
  ];

  const handleProjectBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the project brief
    alert('Project brief submitted! We\'ll contact you within 24 hours.');
  };

  const serviceStructuredData = generateServiceStructuredData(
    'Website Design Packages',
    'Professional website design packages that convert visitors into customers with custom features and modern design.',
    packages.flatMap(pkg => pkg.features)
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/services/website-design-packages')}
        type="service"
      />
      
      <StructuredData
        type="service"
        data={serviceStructuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-6">
              <Monitor size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Website Design That Converts Visitors Into Customers
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose from our carefully crafted website packages designed to grow your business. Modern, responsive, and optimized for conversions.
            </p>
            <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
              View Our Packages
              <ArrowRight className="ml-2 inline" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Perfect Website Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple business websites to complex e-commerce platforms, we have the perfect solution for your needs.
            </p>
          </div>
          
          <div 
            ref={packagesRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 relative transition-all duration-500 hover:scale-105 transform border-2 ${
                  pkg.popular 
                    ? 'border-[#FF6B35] shadow-2xl' 
                    : 'border-gray-200 hover:border-[#FF6B35]'
                } ${packagesVisible.has(index) ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF6B35] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star size={16} className="mr-1 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#FF6B35]">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="flex justify-center space-x-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Eye size={16} className="mr-1 text-[#4ECDC4]" />
                      {pkg.pages}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1 text-[#4ECDC4]" />
                      {pkg.timeline}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Add-ons:</h4>
                  <ul className="space-y-1">
                    {pkg.addOns.map((addon, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {addon}</li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#FF6B35] text-white hover:bg-[#4ECDC4]'
                      : 'border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">From Concept to Launch in 6 Steps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven design process ensures your website is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>
          
          <div 
            ref={processRef}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {designProcess.map((step, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                  processVisible.has(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {step.step}
                  </div>
                  <step.icon className="text-[#4ECDC4]" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="text-sm text-[#FF6B35] font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Feature Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare what's included in each package to find the perfect fit for your business.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Features</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Essential</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Professional</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'Pages Included', essential: '5', professional: '10', premium: 'Unlimited' },
                  { feature: 'Custom Design', essential: '✓', professional: '✓', premium: '✓' },
                  { feature: 'Mobile Responsive', essential: '✓', professional: '✓', premium: '✓' },
                  { feature: 'SEO Optimization', essential: 'Basic', professional: 'Advanced', premium: 'Premium' },
                  { feature: 'Content Management', essential: 'Basic', professional: 'Advanced', premium: 'Full CMS' },
                  { feature: 'E-commerce Ready', essential: '×', professional: 'Basic', premium: 'Advanced' },
                  { feature: 'Revisions', essential: '1', professional: '3', premium: 'Unlimited' },
                  { feature: 'Support Period', essential: '7 Days', professional: '30 Days', premium: '90 Days' },
                  { feature: 'Training Included', essential: '×', professional: 'Basic', premium: 'Comprehensive' }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.essential}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.professional}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Websites We've Created</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful website projects across various industries.
            </p>
          </div>
          
          <div 
            ref={portfolioRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                  portfolioVisible.has(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.package}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.results}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enhance Your Website</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supercharge your website with our additional services and features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#FF6B35] group"
              >
                <div className="mb-4">
                  <service.icon className="text-[#FF6B35] group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-[#FF6B35] font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Website Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from businesses who chose our website design packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  <p className="text-[#FF6B35] text-sm font-medium">{testimonial.package} Package</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Your New Website?</h2>
              <p className="text-xl text-gray-600">
                Tell us about your project and we'll recommend the perfect package for your needs.
              </p>
            </div>
            
            <form onSubmit={handleProjectBriefSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <select 
                    value={projectBrief.businessType}
                    onChange={(e) => setProjectBrief(prev => ({ ...prev, businessType: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Business Type</option>
                    <option value="startup">Startup</option>
                    <option value="small-business">Small Business</option>
                    <option value="medium-business">Medium Business</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="non-profit">Non-Profit</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select 
                    value={projectBrief.industry}
                    onChange={(e) => setProjectBrief(prev => ({ ...prev, industry: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="technology">Technology</option>
                    <option value="food">Food & Beverage</option>
                    <option value="education">Education</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Package</label>
                  <select 
                    value={projectBrief.preferredPackage}
                    onChange={(e) => setProjectBrief(prev => ({ ...prev, preferredPackage: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  >
                    <option value="">Not Sure Yet</option>
                    <option value="essential">Essential Website</option>
                    <option value="professional">Professional Website</option>
                    <option value="premium">Premium Website</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select 
                    value={projectBrief.timeline}
                    onChange={(e) => setProjectBrief(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP (Rush Job)</option>
                    <option value="1-month">Within 1 Month</option>
                    <option value="2-months">Within 2 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Features Needed</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['E-commerce', 'Blog', 'Booking System', 'Multi-language', 'Custom Forms', 'Integrations'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2 text-[#FF6B35] focus:ring-[#FF6B35]"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setProjectBrief(prev => ({ ...prev, features: [...prev.features, feature] }));
                          } else {
                            setProjectBrief(prev => ({ ...prev, features: prev.features.filter(f => f !== feature) }));
                          }
                        }}
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#4ECDC4] text-white py-3 rounded-lg font-medium transition-colors"
              >
                Schedule Design Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's create a website that not only looks amazing but drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Your Project Today
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-3 rounded-lg font-medium transition-colors">
              View Live Examples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesignPackages;