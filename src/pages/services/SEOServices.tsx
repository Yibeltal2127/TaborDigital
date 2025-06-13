import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/SEO/MetaTags';
import StructuredData from '../../components/SEO/StructuredData';
import { Search, CheckCircle, ArrowRight, BarChart3, Target, Zap, Star, Clock, Users, TrendingUp, Award, Globe } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl, generateServiceStructuredData } from '../../utils/seo';

const SEOServices = () => {
  const [auditUrl, setAuditUrl] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { containerRef: servicesRef, visibleItems: servicesVisible } = useStaggeredAnimation(3, 150);
  const { containerRef: processRef, visibleItems: processVisible } = useStaggeredAnimation(5, 200);

  const pageTitle = generatePageTitle('Professional SEO Services - Boost Your Search Rankings');
  const pageDescription = generateMetaDescription(
    'Boost your search rankings and drive organic traffic with our professional SEO services. Get a free SEO audit and custom strategy to dominate search results.'
  );
  const pageKeywords = generateKeywords(['SEO services', 'search engine optimization', 'organic traffic', 'search rankings', 'SEO audit']);

  const services = [
    {
      icon: Target,
      title: 'On-Page SEO',
      description: 'Optimize your website content, meta tags, and site structure for better search visibility.',
      features: ['Content Optimization', 'Meta Tags & Descriptions', 'Header Structure', 'Internal Linking', 'Image Optimization', 'Schema Markup']
    },
    {
      icon: Globe,
      title: 'Off-Page SEO',
      description: 'Build authority and trust through strategic link building and local citations.',
      features: ['Link Building', 'Local Citations', 'Directory Submissions', 'Guest Posting', 'Social Signals', 'Brand Mentions']
    },
    {
      icon: Zap,
      title: 'Technical SEO',
      description: 'Improve site speed, mobile optimization, and technical performance for search engines.',
      features: ['Site Speed Optimization', 'Mobile Responsiveness', 'Core Web Vitals', 'XML Sitemaps', 'Robots.txt', 'SSL Implementation']
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Website Audit & Keyword Research',
      description: 'Comprehensive analysis of your current SEO performance and identification of target keywords.',
      icon: Search
    },
    {
      step: 2,
      title: 'Strategy Development & Planning',
      description: 'Create a customized SEO strategy based on your business goals and competitive landscape.',
      icon: Target
    },
    {
      step: 3,
      title: 'Implementation & Optimization',
      description: 'Execute on-page, off-page, and technical SEO improvements across your website.',
      icon: Zap
    },
    {
      step: 4,
      title: 'Monitoring & Reporting',
      description: 'Track rankings, traffic, and conversions with detailed monthly performance reports.',
      icon: BarChart3
    },
    {
      step: 5,
      title: 'Ongoing Improvements',
      description: 'Continuous optimization and strategy refinement based on performance data.',
      icon: TrendingUp
    }
  ];

  const caseStudies = [
    {
      industry: 'E-commerce Fashion',
      challenge: 'Low organic visibility for product pages',
      results: {
        ranking: '+150% keyword rankings',
        traffic: '+280% organic traffic',
        timeline: '6 months'
      }
    },
    {
      industry: 'Local Restaurant Chain',
      challenge: 'Poor local search presence',
      results: {
        ranking: '+200% local rankings',
        traffic: '+320% local traffic',
        timeline: '4 months'
      }
    },
    {
      industry: 'B2B Software Company',
      challenge: 'Competing with established players',
      results: {
        ranking: '+180% target keywords',
        traffic: '+250% qualified leads',
        timeline: '8 months'
      }
    }
  ];

  const pricingPackages = [
    {
      name: 'Starter SEO',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with SEO',
      features: [
        'Up to 10 target keywords',
        'On-page optimization',
        'Monthly reporting',
        'Basic link building',
        'Google My Business setup',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional SEO',
      price: '$599',
      period: '/month',
      description: 'Comprehensive SEO for growing companies',
      features: [
        'Up to 25 target keywords',
        'Complete on-page & technical SEO',
        'Advanced link building',
        'Content optimization',
        'Bi-weekly reporting',
        'Phone & email support'
      ],
      popular: true
    },
    {
      name: 'Enterprise SEO',
      price: '$1,299',
      period: '/month',
      description: 'Full-scale SEO for large organizations',
      features: [
        'Unlimited target keywords',
        'Complete SEO management',
        'Custom content creation',
        'Advanced technical SEO',
        'Weekly reporting',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How long does SEO take to show results?',
      answer: 'SEO is a long-term strategy. You can typically expect to see initial improvements in 3-6 months, with significant results in 6-12 months. The timeline depends on your industry competitiveness and current website status.'
    },
    {
      question: 'What\'s the difference between SEO and PPC?',
      answer: 'SEO focuses on organic search results and provides long-term benefits, while PPC (Pay-Per-Click) provides immediate visibility but requires ongoing ad spend. SEO builds sustainable traffic over time.'
    },
    {
      question: 'What\'s included in your SEO audits?',
      answer: 'Our comprehensive SEO audits include technical analysis, on-page optimization review, backlink profile assessment, keyword research, competitor analysis, and actionable recommendations for improvement.'
    },
    {
      question: 'How often do you provide SEO reports?',
      answer: 'Reporting frequency depends on your package. Starter plans receive monthly reports, Professional plans get bi-weekly updates, and Enterprise clients receive weekly reports with real-time dashboard access.'
    }
  ];

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auditUrl.trim()) {
      // In a real implementation, this would trigger the audit process
      alert(`SEO audit requested for: ${auditUrl}`);
      setAuditUrl('');
    }
  };

  const serviceStructuredData = generateServiceStructuredData(
    'SEO Services',
    'Professional search engine optimization services to boost your search rankings and drive organic traffic.',
    services.flatMap(service => service.features)
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/services/seo')}
        type="service"
      />
      
      <StructuredData
        type="service"
        data={serviceStructuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-6">
              <Search size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Boost Your Search Rankings & Drive Organic Traffic
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Dominate search results with our proven SEO strategies. Get more visibility, traffic, and customers from Google and other search engines.
            </p>
            <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
              Get Free SEO Audit
              <ArrowRight className="ml-2 inline" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* SEO Audit Tool Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Website SEO Analysis</h2>
            <p className="text-gray-600 mb-8">
              Get instant insights into your website's SEO performance with our comprehensive audit tool.
            </p>
            
            <form onSubmit={handleAuditSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="url"
                  value={auditUrl}
                  onChange={(e) => setAuditUrl(e.target.value)}
                  placeholder="Enter your website URL (e.g., https://yoursite.com)"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
                >
                  Analyze Now
                </button>
              </div>
            </form>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                Technical SEO Analysis
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                On-Page Optimization Review
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                Competitor Comparison
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO solutions to improve your search visibility and drive qualified traffic.
            </p>
          </div>
          
          <div 
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
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
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="text-[#FF6B35] mr-3 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Improve Your Rankings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step process to boost your search engine visibility and drive organic growth.
            </p>
          </div>
          
          <div 
            ref={processRef}
            className="max-w-4xl mx-auto"
          >
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start mb-12 last:mb-0 ${
                  processVisible.has(index) ? 'animate-fade-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <step.icon className="text-[#4ECDC4] mr-3" size={24} />
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SEO Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients who trusted us with their SEO strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{study.industry}</h3>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rankings:</span>
                    <span className="font-bold text-green-600">{study.results.ranking}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Traffic:</span>
                    <span className="font-bold text-green-600">{study.results.traffic}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-bold text-[#FF6B35]">{study.results.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SEO Investment Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect SEO package for your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-8 relative transition-all duration-300 hover:scale-105 transform ${
                  pkg.popular ? 'border-2 border-[#FF6B35] shadow-xl' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#FF6B35]">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our SEO services.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ArrowRight
                      className={`transform transition-transform ${
                        expandedFaq === index ? 'rotate-90' : ''
                      }`}
                      size={20}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's create an SEO strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Free SEO Consultation
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-3 rounded-lg font-medium transition-colors">
              View SEO Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;