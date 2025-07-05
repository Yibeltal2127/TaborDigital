import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/SEO/MetaTags';
import StructuredData from '../../components/SEO/StructuredData';
import { 
  Palette, CheckCircle, ArrowRight, Layers, Package, FileText, 
  Star, Clock, Users, TrendingUp, Award, Globe, 
  Monitor, Tablet, Database, Cloud, Settings, TestTube,
  Eye, Filter, ChevronDown, Quote, Calendar, User, Zap
} from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl, generateServiceStructuredData } from '../../utils/seo';

const GraphicDesign = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [portfolioFilter, setPortfolioFilter] = useState('All');
  const [designBrief, setDesignBrief] = useState({
    designType: '',
    industry: '',
    style: '',
    timeline: '',
    budget: '',
    deliverables: []
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { containerRef: servicesRef, visibleItems: servicesVisible } = useStaggeredAnimation(6, 150);
  const { containerRef: processRef, visibleItems: processVisible } = useStaggeredAnimation(6, 200);
  const { containerRef: portfolioRef, visibleItems: portfolioVisible } = useStaggeredAnimation(12, 100);

  const pageTitle = generatePageTitle('Creative Graphic Design That Elevates Your Brand');
  const pageDescription = generateMetaDescription(
    'Professional graphic design services including logo design, brand identity, print materials, digital graphics, packaging, and marketing collateral that makes your business stand out.'
  );
  const pageKeywords = generateKeywords(['graphic design', 'logo design', 'brand identity', 'print design', 'digital graphics', 'packaging design']);

  const designServices = [
    {
      icon: Award,
      title: 'Logo and Brand Identity',
      description: 'Complete brand identity systems that capture your business essence and create lasting impressions.',
      features: ['Logo Design & Variations', 'Brand Guidelines & Style Guide', 'Color Palette & Typography', 'Business Card Design', 'Letterhead & Stationery', 'Brand Application Examples'],
      deliverables: ['Logo Files (AI, EPS, PNG, JPG)', 'Brand Book & Guidelines', 'Color Specifications', 'Typography System'],
      applications: ['Business Cards', 'Letterheads', 'Brand Applications', 'Digital Assets'],
      timeline: '2-4 weeks',
      investment: 'From $800'
    },
    {
      icon: FileText,
      title: 'Print Design',
      description: 'Professional print materials that communicate your message effectively and leave lasting impressions.',
      features: ['Brochure & Flyer Design', 'Business Card & Stationery', 'Poster & Banner Design', 'Packaging & Labels', 'Annual Reports', 'Print Production Support'],
      deliverables: ['Print-Ready Files', 'Mock-ups & Previews', 'Production Specifications', 'Color Proofs'],
      applications: ['Marketing Materials', 'Corporate Communications', 'Event Materials', 'Product Packaging'],
      timeline: '1-3 weeks',
      investment: 'From $300'
    },
    {
      icon: Monitor,
      title: 'Digital Graphics',
      description: 'Engaging digital designs optimized for web, social media, and digital advertising platforms.',
      features: ['Social Media Graphics', 'Web Banners & Ads', 'Email Templates', 'Digital Presentations', 'Animated Graphics', 'Icon Design'],
      deliverables: ['Optimized Digital Files', 'Multiple Format Exports', 'Animation Files', 'Template Sets'],
      applications: ['Social Media', 'Websites', 'Digital Advertising', 'Email Marketing'],
      timeline: '1-2 weeks',
      investment: 'From $400'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Materials',
      description: 'Strategic marketing collateral designed to drive engagement and support your sales efforts.',
      features: ['Sales Presentations', 'Infographic Design', 'Trade Show Materials', 'Product Catalogs', 'Case Study Design', 'White Paper Layout'],
      deliverables: ['Presentation Templates', 'Infographic Designs', 'Booth Graphics', 'Catalog Layouts'],
      applications: ['Sales Presentations', 'Marketing Campaigns', 'Trade Shows', 'Content Marketing'],
      timeline: '2-3 weeks',
      investment: 'From $600'
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Eye-catching packaging that protects your product and attracts customers at point of sale.',
      features: ['Product Packaging', 'Label & Sticker Design', 'Retail Display Graphics', 'Promotional Packaging', 'Die-cut Templates', 'Production Coordination'],
      deliverables: ['Packaging Mock-ups', 'Die-cut Templates', 'Production Files', 'Color Specifications'],
      applications: ['Consumer Products', 'Retail Packaging', 'Promotional Items', 'E-commerce'],
      timeline: '3-5 weeks',
      investment: 'From $1,200'
    },
    {
      icon: FileText,
      title: 'Publication Design',
      description: 'Professional layout and design for magazines, books, catalogs, and corporate publications.',
      features: ['Magazine Layout', 'Book Design', 'Catalog Design', 'Annual Reports', 'Newsletter Design', 'Typography Systems'],
      deliverables: ['Layout Designs', 'Typography Systems', 'Print Specifications', 'Digital Versions'],
      applications: ['Corporate Reports', 'Marketing Publications', 'Educational Materials', 'Periodicals'],
      timeline: '4-8 weeks',
      investment: 'From $1,500'
    }
  ];

  const designProcess = [
    {
      step: 1,
      title: 'Creative Brief & Discovery',
      description: 'Comprehensive project discovery to understand your brand, goals, target audience, and design preferences.',
      icon: Users,
      duration: '1-2 Days'
    },
    {
      step: 2,
      title: 'Research & Inspiration',
      description: 'Market research, competitor analysis, and inspiration gathering to inform the creative direction.',
      icon: Eye,
      duration: '2-3 Days'
    },
    {
      step: 3,
      title: 'Concept Development',
      description: 'Initial design concepts and creative exploration based on the brief and research insights.',
      icon: Palette,
      duration: '3-5 Days'
    },
    {
      step: 4,
      title: 'Design Refinement',
      description: 'Client feedback integration and design refinement to perfect the chosen concept direction.',
      icon: Settings,
      duration: '2-4 Days'
    },
    {
      step: 5,
      title: 'Final Design & Files',
      description: 'Complete final designs with all necessary file formats and specifications for production.',
      icon: CheckCircle,
      duration: '1-2 Days'
    },
    {
      step: 6,
      title: 'Brand Guidelines & Delivery',
      description: 'Comprehensive brand guidelines and asset delivery with implementation support.',
      icon: Award,
      duration: '1-2 Days'
    }
  ];

  const portfolioItems = [
    {
      title: 'TechFlow Solutions - Complete Brand Identity',
      category: 'Brand Identity',
      industry: 'Technology',
      style: 'Modern',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      brief: 'Create a modern, professional brand identity for a growing tech startup',
      challenge: 'Stand out in competitive tech market while maintaining professional credibility',
      solution: 'Clean, geometric logo with tech-inspired color palette and comprehensive brand system',
      testimonial: 'The new brand identity perfectly captures our innovative spirit and has significantly improved our market presence.',
      client: 'Sarah Johnson, CEO'
    },
    {
      title: 'Green Valley Farms - Packaging Design',
      category: 'Packaging',
      industry: 'Food & Beverage',
      style: 'Organic',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      brief: 'Design eco-friendly packaging for organic food products',
      challenge: 'Communicate organic values while ensuring shelf appeal and functionality',
      solution: 'Natural color palette with hand-drawn illustrations and sustainable materials',
      testimonial: 'Our sales increased 40% after the packaging redesign. Customers love the new look!',
      client: 'Michael Chen, Marketing Director'
    },
    {
      title: 'Urban Fitness - Marketing Campaign',
      category: 'Marketing',
      industry: 'Fitness',
      style: 'Bold',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      brief: 'Create energetic marketing materials for fitness center launch',
      challenge: 'Appeal to diverse age groups while maintaining high-energy brand feel',
      solution: 'Dynamic typography with motivational messaging and vibrant color scheme',
      testimonial: 'The marketing materials helped us achieve 200% of our membership goals in the first month.',
      client: 'Alex Rodriguez, Owner'
    },
    {
      title: 'Addis Coffee Co. - Product Branding',
      category: 'Brand Identity',
      industry: 'Food & Beverage',
      style: 'Traditional',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      brief: 'Brand identity celebrating Ethiopian coffee heritage',
      challenge: 'Honor traditional coffee culture while appealing to modern consumers',
      solution: 'Traditional patterns with contemporary typography and premium packaging',
      testimonial: 'The branding beautifully represents our heritage and has opened doors to international markets.',
      client: 'Almaz Tadesse, Founder'
    },
    {
      title: 'Digital Agency - Web Graphics',
      category: 'Digital',
      industry: 'Technology',
      style: 'Minimalist',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      brief: 'Modern digital graphics for agency website and social media',
      challenge: 'Create cohesive visual system across multiple digital platforms',
      solution: 'Minimalist design system with consistent iconography and color usage',
      testimonial: 'The digital graphics elevated our online presence and improved client perception significantly.',
      client: 'David Kim, Creative Director'
    },
    {
      title: 'Healthcare Clinic - Print Materials',
      category: 'Print',
      industry: 'Healthcare',
      style: 'Professional',
      image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      brief: 'Professional print materials for medical practice',
      challenge: 'Convey trust and professionalism while remaining approachable',
      solution: 'Clean, medical-inspired design with calming colors and clear typography',
      testimonial: 'Patients frequently comment on our professional materials. It builds immediate trust.',
      client: 'Dr. Meron Haile, Medical Director'
    },
    {
      title: 'Fashion Boutique - Retail Graphics',
      category: 'Retail',
      industry: 'Fashion',
      style: 'Elegant',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      brief: 'Elegant retail graphics and window displays',
      challenge: 'Create luxury feel within boutique budget constraints',
      solution: 'Sophisticated typography with gold accents and premium material selection',
      testimonial: 'The store graphics transformed our space into a luxury destination. Sales doubled!',
      client: 'Hanan Ahmed, Store Owner'
    },
    {
      title: 'Construction Company - Corporate Identity',
      category: 'Brand Identity',
      industry: 'Construction',
      style: 'Bold',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      brief: 'Strong corporate identity for established construction firm',
      challenge: 'Modernize brand while maintaining recognition and industry credibility',
      solution: 'Bold typography with industrial color palette and versatile logo system',
      testimonial: 'The rebrand positioned us as industry leaders and helped secure major contracts.',
      client: 'Yohannes Girma, Managing Director'
    }
  ];

  const designPackages = [
    {
      name: 'Starter Package',
      price: '$799',
      description: 'Basic design solutions for small businesses',
      features: [
        'Basic logo design (3 concepts)',
        'Business card and letterhead',
        'Basic brand color palette',
        'Standard file formats',
        '2 rounds of revisions'
      ],
      ideal: 'Small businesses & startups',
      popular: false
    },
    {
      name: 'Professional Package',
      price: '$1,499',
      description: 'Complete brand identity system',
      features: [
        'Complete brand identity system',
        'Logo variations and applications',
        'Comprehensive brand guidelines',
        'Marketing material templates',
        'Social media design templates',
        '4 rounds of revisions',
        'All file formats & source files'
      ],
      ideal: 'Growing businesses',
      popular: true
    },
    {
      name: 'Premium Package',
      price: '$2,999',
      description: 'Full brand identity and strategy',
      features: [
        'Full brand identity and strategy',
        'Complete marketing collateral suite',
        'Website design elements',
        'Packaging or publication design',
        'Brand implementation support',
        'Unlimited revisions within timeline',
        'All file formats & source files',
        'Brand strategy consultation'
      ],
      ideal: 'Established businesses',
      popular: false
    }
  ];

  const brandTransformations = [
    {
      company: 'Sunrise Technologies',
      industry: 'Technology',
      beforeImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      afterImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      results: 'Brand recognition increased by 150%, website traffic up 200%'
    },
    {
      company: 'Green Valley Farms',
      industry: 'Agriculture',
      beforeImage: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      afterImage: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      results: 'Product sales increased 75%, new retail partnerships established'
    },
    {
      company: 'Addis Medical Center',
      industry: 'Healthcare',
      beforeImage: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      afterImage: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      results: 'Patient trust improved, referrals increased by 120%'
    }
  ];

  const designTools = [
    { name: 'Adobe Photoshop', category: 'Image Editing', icon: '🖌️' },
    { name: 'Adobe Illustrator', category: 'Vector Graphics', icon: '✏️' },
    { name: 'Adobe InDesign', category: 'Layout & Publishing', icon: '📄' },
    { name: 'Figma', category: 'UI/UX Design', icon: '🎨' },
    { name: 'Sketch', category: 'Digital Design', icon: '💎' },
    { name: 'After Effects', category: 'Motion Graphics', icon: '🎬' },
    { name: 'Procreate', category: 'Digital Illustration', icon: '🖼️' },
    { name: 'Cinema 4D', category: '3D Rendering', icon: '🧊' }
  ];

  const industryExpertise = [
    'Technology & Software',
    'Healthcare & Medical',
    'Food & Beverage',
    'Retail & E-commerce',
    'Professional Services',
    'Education & Non-profit',
    'Real Estate & Construction',
    'Fashion & Beauty'
  ];

  const handleDesignBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the design brief
    alert('Design brief submitted! We\'ll contact you within 24 hours to discuss your project in detail.');
  };

  const serviceStructuredData = generateServiceStructuredData(
    'Graphic Design Services',
    'Professional graphic design services including logo design, brand identity, print materials, digital graphics, packaging, and marketing collateral.',
    designServices.flatMap(service => service.features)
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/services/graphic-design')}
        type="service"
      />
      
      <StructuredData
        type="service"
        data={serviceStructuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-6">
              <Palette size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Creative Graphic Design That Elevates Your Brand
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From logos to marketing materials - we create visual designs that make an impact, communicate your message effectively, and help your business stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
                View Our Design Portfolio
                <ArrowRight className="ml-2 inline" size={20} />
              </button>
              <button className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300">
                Start Your Design Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Graphic Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions to elevate your brand and communicate your message effectively.
            </p>
          </div>
          
          <div 
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {designServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-[#FF6B35] transition-all duration-500 hover:scale-105 transform ${
                  servicesVisible.has(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <service.icon className="text-[#FF6B35] mb-4" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1 text-[#4ECDC4]" />
                      {service.timeline}
                    </div>
                    <div className="font-semibold text-[#FF6B35]">
                      {service.investment}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.features.length > 4 && (
                    <p className="text-xs text-gray-500 mt-2">+{service.features.length - 4} more features</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedPackage(service.title)}
                  className="w-full bg-[#FF6B35] hover:bg-[#4ECDC4] text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Learn More
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Creative Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-step creative workflow ensures exceptional results that meet your business objectives.
            </p>
          </div>
          
          <div 
            ref={processRef}
            className="max-w-6xl mx-auto"
          >
            {designProcess.map((step, index) => (
              <div
                key={index}
                className={`flex items-start mb-12 last:mb-0 ${
                  processVisible.has(index) ? 'animate-fade-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 mr-8">
                  <div className="w-20 h-20 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <step.icon className="text-[#4ECDC4] mr-3" size={28} />
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <span className="ml-auto text-sm text-[#FF6B35] font-medium bg-orange-50 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Design Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful design projects across various industries and styles.
            </p>
          </div>
          
          {/* Portfolio Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Brand Identity', 'Print', 'Digital', 'Packaging', 'Marketing', 'Retail'].map((filter) => (
              <button
                key={filter}
                onClick={() => setPortfolioFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  portfolioFilter === filter
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div 
            ref={portfolioRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {portfolioItems
              .filter(item => portfolioFilter === 'All' || item.category === portfolioFilter)
              .map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
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
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {item.industry}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {item.style}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.brief}</p>
                    
                    <div className="flex justify-between items-center">
                      <button className="text-[#FF6B35] hover:text-[#4ECDC4] font-medium transition-colors flex items-center text-sm">
                        <Eye size={14} className="mr-1" />
                        View Project
                      </button>
                      
                      <div className="flex items-center text-yellow-400">
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          {portfolioItems.filter(item => portfolioFilter === 'All' || item.category === portfolioFilter).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Design Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Design Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect package for your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {designPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-8 relative transition-all duration-300 hover:scale-105 transform ${
                  pkg.popular ? 'border-2 border-[#FF6B35] shadow-xl' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF6B35] text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-[#FF6B35] mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mb-6">
                  <span className="text-sm text-gray-600">Ideal for: </span>
                  <span className="font-medium text-gray-900">{pkg.ideal}</span>
                </div>
                
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#FF6B35] text-white hover:bg-[#4ECDC4]'
                      : 'border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'
                  }`}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Transformations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Brand Transformations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the impact of our design work through these before and after brand transformations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {brandTransformations.map((transformation, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative">
                      <img 
                        src={transformation.beforeImage} 
                        alt={`${transformation.company} - Before`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src={transformation.afterImage} 
                        alt={`${transformation.company} - After`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{transformation.company}</h3>
                  <p className="text-gray-600 text-sm mb-4">{transformation.industry}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Results:</h4>
                    <p className="text-green-700 text-sm">{transformation.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Design Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading design software and tools to create exceptional visual solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {designTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:scale-105 transform"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{tool.name}</h4>
                <p className="text-sm text-gray-600">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Collaboration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work With You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our collaborative approach ensures your vision is brought to life with clear communication throughout the process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Collaboration Process</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Online Proofing & Approval</h4>
                    <p className="text-gray-600 text-sm">Secure online platform for reviewing designs and providing feedback</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-time Design Feedback</h4>
                    <p className="text-gray-600 text-sm">Collaborative feedback tools for clear communication</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Project Tracking</h4>
                    <p className="text-gray-600 text-sm">Transparent timeline and milestone tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">File Sharing & Version Control</h4>
                    <p className="text-gray-600 text-sm">Secure file sharing with version history</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Direct Designer Communication</h4>
                    <p className="text-gray-600 text-sm">Direct access to your design team throughout the project</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Industries We Design For</h3>
              <div className="grid grid-cols-2 gap-4">
                {industryExpertise.map((industry, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-[#FF6B35] mr-3 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Why Industry Expertise Matters</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Each industry has unique design requirements, audience expectations, and competitive landscapes. Our specialized experience ensures your design solutions are tailored to your specific industry needs.
                </p>
                <p className="text-gray-600 text-sm">
                  We stay current with industry trends and best practices to ensure your brand stands out while meeting sector-specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Brief Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Design Project</h2>
              <p className="text-xl text-gray-600">
                Tell us about your design needs and we'll create a custom solution that meets your goals.
              </p>
            </div>
            
            <form onSubmit={handleDesignBriefSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Design Type</label>
                  <select 
                    value={designBrief.designType}
                    onChange={(e) => setDesignBrief(prev => ({ ...prev, designType: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Design Type</option>
                    <option value="logo">Logo & Brand Identity</option>
                    <option value="print">Print Design</option>
                    <option value="digital">Digital Graphics</option>
                    <option value="marketing">Marketing Materials</option>
                    <option value="packaging">Packaging Design</option>
                    <option value="publication">Publication Design</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select 
                    value={designBrief.industry}
                    onChange={(e) => setDesignBrief(prev => ({ ...prev, industry: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="technology">Technology & Software</option>
                    <option value="healthcare">Healthcare & Medical</option>
                    <option value="food">Food & Beverage</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="professional">Professional Services</option>
                    <option value="education">Education & Non-profit</option>
                    <option value="real-estate">Real Estate & Construction</option>
                    <option value="fashion">Fashion & Beauty</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Design Style Preference</label>
                  <select 
                    value={designBrief.style}
                    onChange={(e) => setDesignBrief(prev => ({ ...prev, style: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  >
                    <option value="">Select Style (Optional)</option>
                    <option value="modern">Modern & Minimalist</option>
                    <option value="traditional">Traditional & Classic</option>
                    <option value="bold">Bold & Vibrant</option>
                    <option value="luxury">Luxury & Premium</option>
                    <option value="playful">Playful & Energetic</option>
                    <option value="organic">Organic & Natural</option>
                    <option value="tech">Tech & Digital</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select 
                    value={designBrief.timeline}
                    onChange={(e) => setDesignBrief(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="rush">Rush (1 week or less)</option>
                    <option value="standard">Standard (2-3 weeks)</option>
                    <option value="relaxed">Relaxed (3-4 weeks)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select 
                  value={designBrief.budget}
                  onChange={(e) => setDesignBrief(prev => ({ ...prev, budget: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  required
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="over-5000">Over $5,000</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Required Deliverables</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Logo Design',
                    'Brand Guidelines',
                    'Business Cards',
                    'Stationery',
                    'Social Media Graphics',
                    'Website Graphics',
                    'Brochure/Flyer',
                    'Packaging Design',
                    'Signage',
                    'Presentation Template',
                    'Email Template',
                    'Print Advertisements'
                  ].map((deliverable) => (
                    <label key={deliverable} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2 text-[#FF6B35] focus:ring-[#FF6B35]"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setDesignBrief(prev => ({ ...prev, deliverables: [...prev.deliverables, deliverable] }));
                          } else {
                            setDesignBrief(prev => ({ ...prev, deliverables: prev.deliverables.filter(d => d !== deliverable) }));
                          }
                        }}
                      />
                      <span className="text-sm text-gray-700">{deliverable}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#4ECDC4] text-white py-3 rounded-lg font-medium transition-colors"
              >
                Submit Design Brief
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Process FAQs</h2>
              <p className="text-xl text-gray-600">
                Common questions about our design services and process.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How long does the design process take?',
                  answer: 'Project timelines vary based on scope and complexity. Logo design typically takes 1-2 weeks, while complete brand identity systems may take 3-4 weeks. Print projects usually require 1-2 weeks, and packaging design can take 3-5 weeks. We\'ll provide a specific timeline during our initial consultation.'
                },
                {
                  question: 'What file formats will I receive?',
                  answer: 'We provide all necessary file formats for your specific needs. For logos and brand assets, you\'ll receive vector files (AI, EPS, SVG), high-resolution raster files (PNG, JPG), and web-optimized versions. For print projects, you\'ll get print-ready PDFs with proper bleed and crop marks. Digital projects include web-optimized files in appropriate formats.'
                },
                {
                  question: 'How many revision rounds are included?',
                  answer: 'The number of revision rounds depends on your package. Our Starter Package includes 2 rounds, Professional Package includes 4 rounds, and Premium Package includes unlimited revisions within the project timeline. Additional revision rounds can be purchased if needed.'
                },
                {
                  question: 'Do you handle printing and production?',
                  answer: 'Yes, we can coordinate printing and production for your design projects. We work with trusted printing partners to ensure high-quality results. We can either manage the entire production process or provide print-ready files for your preferred vendor.'
                },
                {
                  question: 'Who owns the copyright to the designs?',
                  answer: 'Upon full payment, you receive full ownership rights to the final designs created specifically for your project. We retain the right to display the work in our portfolio unless otherwise specified in a confidentiality agreement.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className="px-6 py-4 flex justify-between items-center cursor-pointer">
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown
                        className="transform transition-transform group-open:rotate-180"
                        size={20}
                      />
                    </summary>
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's create designs that capture attention, communicate your message, and drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Your Design Project
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule Design Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;