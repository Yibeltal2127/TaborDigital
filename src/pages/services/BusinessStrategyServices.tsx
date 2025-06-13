import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/SEO/MetaTags';
import StructuredData from '../../components/SEO/StructuredData';
import { 
  TrendingUp, CheckCircle, ArrowRight, Target, BarChart3, Users, 
  Lightbulb, Star, Clock, Globe, Award, Shield, 
  PieChart, LineChart, DollarSign, Briefcase, Settings, Zap
} from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl, generateServiceStructuredData } from '../../utils/seo';

const BusinessStrategyServices = () => {
  const [selectedService, setSelectedService] = useState('');
  const [strategyAssessment, setStrategyAssessment] = useState({
    businessStage: '',
    industry: '',
    challenges: [],
    goals: '',
    timeline: '',
    budget: ''
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { containerRef: servicesRef, visibleItems: servicesVisible } = useStaggeredAnimation(6, 150);
  const { containerRef: processRef, visibleItems: processVisible } = useStaggeredAnimation(5, 200);
  const { containerRef: resultsRef, visibleItems: resultsVisible } = useStaggeredAnimation(8, 100);

  const pageTitle = generatePageTitle('Business Strategy & Consulting Services - Drive Growth');
  const pageDescription = generateMetaDescription(
    'Transform your business with expert strategy consulting. From market analysis to growth planning, we help Ethiopian businesses achieve sustainable success and competitive advantage.'
  );
  const pageKeywords = generateKeywords(['business strategy', 'business consulting', 'strategic planning', 'business growth', 'market analysis', 'business development']);

  const strategyServices = [
    {
      icon: Target,
      title: 'Strategic Planning & Vision',
      description: 'Develop comprehensive business strategies aligned with your long-term vision and market opportunities.',
      features: ['Vision & Mission Development', 'Strategic Goal Setting', 'Market Positioning', 'Competitive Analysis', 'SWOT Analysis', 'Strategic Roadmapping'],
      deliverables: ['Strategic Plan Document', 'Vision Statement', 'Market Analysis Report', 'Competitive Landscape Study'],
      timeline: '4-6 weeks',
      investment: 'From $2,500'
    },
    {
      icon: BarChart3,
      title: 'Market Research & Analysis',
      description: 'Deep market insights to understand your customers, competitors, and industry dynamics.',
      features: ['Customer Segmentation', 'Market Size Analysis', 'Trend Identification', 'Competitor Intelligence', 'Industry Benchmarking', 'Opportunity Assessment'],
      deliverables: ['Market Research Report', 'Customer Personas', 'Competitive Analysis', 'Market Entry Strategy'],
      timeline: '3-4 weeks',
      investment: 'From $1,800'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy & Scaling',
      description: 'Accelerate business growth with proven strategies for market expansion and revenue optimization.',
      features: ['Growth Planning', 'Revenue Optimization', 'Market Expansion', 'Product Development', 'Partnership Strategy', 'Investment Planning'],
      deliverables: ['Growth Strategy Plan', 'Revenue Model', 'Expansion Roadmap', 'Investment Proposal'],
      timeline: '5-7 weeks',
      investment: 'From $3,200'
    },
    {
      icon: Settings,
      title: 'Operations & Process Optimization',
      description: 'Streamline operations and improve efficiency through process optimization and automation.',
      features: ['Process Mapping', 'Workflow Optimization', 'Automation Strategy', 'Quality Management', 'Cost Reduction', 'Performance Metrics'],
      deliverables: ['Process Documentation', 'Optimization Plan', 'Implementation Guide', 'KPI Dashboard'],
      timeline: '4-5 weeks',
      investment: 'From $2,200'
    },
    {
      icon: DollarSign,
      title: 'Financial Planning & Analysis',
      description: 'Optimize financial performance with strategic financial planning and analysis.',
      features: ['Financial Modeling', 'Budget Planning', 'Cash Flow Analysis', 'Investment Analysis', 'Risk Assessment', 'Performance Tracking'],
      deliverables: ['Financial Model', 'Budget Plan', 'Cash Flow Projections', 'Investment Analysis'],
      timeline: '3-5 weeks',
      investment: 'From $2,000'
    },
    {
      icon: Users,
      title: 'Organizational Development',
      description: 'Build high-performing teams and organizational structures that support growth.',
      features: ['Organizational Design', 'Team Development', 'Leadership Training', 'Culture Building', 'Change Management', 'Talent Strategy'],
      deliverables: ['Org Chart', 'Team Development Plan', 'Training Program', 'Culture Framework'],
      timeline: '6-8 weeks',
      investment: 'From $2,800'
    }
  ];

  const consultingProcess = [
    {
      phase: 1,
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current business situation, challenges, and opportunities.',
      icon: Target,
      duration: '1-2 Weeks',
      activities: ['Business Assessment', 'Stakeholder Interviews', 'Data Collection', 'Initial Analysis']
    },
    {
      phase: 2,
      title: 'Strategic Analysis',
      description: 'Deep dive into market dynamics, competitive landscape, and internal capabilities.',
      icon: BarChart3,
      duration: '2-3 Weeks',
      activities: ['Market Research', 'Competitive Analysis', 'SWOT Analysis', 'Gap Analysis']
    },
    {
      phase: 3,
      title: 'Strategy Development',
      description: 'Create comprehensive strategies and actionable plans tailored to your business.',
      icon: Lightbulb,
      duration: '2-4 Weeks',
      activities: ['Strategy Formulation', 'Action Planning', 'Resource Allocation', 'Timeline Development']
    },
    {
      phase: 4,
      title: 'Implementation Planning',
      description: 'Detailed implementation roadmap with clear milestones and success metrics.',
      icon: Settings,
      duration: '1-2 Weeks',
      activities: ['Implementation Plan', 'Change Management', 'Risk Mitigation', 'Success Metrics']
    },
    {
      phase: 5,
      title: 'Execution Support',
      description: 'Ongoing support and guidance to ensure successful strategy implementation.',
      icon: Zap,
      duration: 'Ongoing',
      activities: ['Progress Monitoring', 'Course Correction', 'Performance Review', 'Continuous Improvement']
    }
  ];

  const successMetrics = [
    {
      metric: 'Revenue Growth',
      average: '+180%',
      description: 'Average revenue increase within 12 months',
      icon: TrendingUp
    },
    {
      metric: 'Market Share',
      average: '+45%',
      description: 'Market share improvement',
      icon: PieChart
    },
    {
      metric: 'Operational Efficiency',
      average: '+65%',
      description: 'Process efficiency improvement',
      icon: Settings
    },
    {
      metric: 'Cost Reduction',
      average: '25%',
      description: 'Average cost savings achieved',
      icon: DollarSign
    },
    {
      metric: 'Time to Market',
      average: '40%',
      description: 'Faster product/service launches',
      icon: Clock
    },
    {
      metric: 'Customer Satisfaction',
      average: '+35%',
      description: 'Improvement in customer satisfaction',
      icon: Star
    },
    {
      metric: 'Employee Engagement',
      average: '+50%',
      description: 'Increase in team productivity',
      icon: Users
    },
    {
      metric: 'ROI Achievement',
      average: '320%',
      description: 'Average return on consulting investment',
      icon: Award
    }
  ];

  const caseStudies = [
    {
      industry: 'Technology Startup',
      challenge: 'Struggling to scale operations and secure funding',
      solution: 'Developed comprehensive growth strategy and investor pitch',
      results: {
        revenue: '+250% revenue growth',
        funding: '$500K funding secured',
        timeline: '8 months'
      },
      testimonial: 'The strategic guidance transformed our startup from struggling to thriving. We secured funding and tripled our revenue.',
      client: 'TechFlow Solutions'
    },
    {
      industry: 'Manufacturing Company',
      challenge: 'Inefficient operations and declining profitability',
      solution: 'Process optimization and cost reduction strategy',
      results: {
        efficiency: '+70% operational efficiency',
        costs: '30% cost reduction',
        timeline: '6 months'
      },
      testimonial: 'Operations are now streamlined and profitable. The ROI exceeded our expectations significantly.',
      client: 'Ethiopian Manufacturing Co.'
    },
    {
      industry: 'Retail Chain',
      challenge: 'Market expansion and digital transformation',
      solution: 'Multi-channel growth strategy and digital roadmap',
      results: {
        expansion: '5 new locations',
        digital: '+400% online sales',
        timeline: '12 months'
      },
      testimonial: 'We successfully expanded while building a strong digital presence. Sales have never been better.',
      client: 'Addis Retail Group'
    }
  ];

  const industryExpertise = [
    { name: 'Technology & Software', projects: '25+', growth: '+200%' },
    { name: 'Manufacturing & Production', projects: '18+', growth: '+150%' },
    { name: 'Retail & E-commerce', projects: '22+', growth: '+180%' },
    { name: 'Healthcare & Wellness', projects: '15+', growth: '+160%' },
    { name: 'Financial Services', projects: '12+', growth: '+140%' },
    { name: 'Education & Training', projects: '20+', growth: '+170%' },
    { name: 'Agriculture & Food', projects: '16+', growth: '+190%' },
    { name: 'Construction & Real Estate', projects: '14+', growth: '+165%' }
  ];

  const consultingPackages = [
    {
      name: 'Strategy Starter',
      price: '$1,500',
      duration: '2-3 weeks',
      description: 'Essential strategic guidance for small businesses',
      features: [
        'Business Assessment',
        'Basic Market Analysis',
        'Strategic Recommendations',
        'Action Plan',
        '2 Follow-up Sessions'
      ],
      ideal: 'Small businesses & startups'
    },
    {
      name: 'Growth Accelerator',
      price: '$3,500',
      duration: '4-6 weeks',
      description: 'Comprehensive strategy for growing businesses',
      features: [
        'Complete Strategic Planning',
        'Market Research & Analysis',
        'Growth Strategy Development',
        'Implementation Roadmap',
        'Monthly Check-ins (3 months)',
        'Performance Dashboard'
      ],
      ideal: 'Growing SMEs',
      popular: true
    },
    {
      name: 'Enterprise Transformation',
      price: '$7,500',
      duration: '8-12 weeks',
      description: 'Full-scale strategic transformation',
      features: [
        'Comprehensive Business Analysis',
        'Multi-faceted Strategy Development',
        'Change Management Plan',
        'Implementation Support',
        'Quarterly Reviews (12 months)',
        'Dedicated Strategy Consultant',
        'Custom Training Programs'
      ],
      ideal: 'Large organizations'
    }
  ];

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the assessment
    alert('Strategy assessment submitted! We\'ll contact you within 24 hours with a customized consultation proposal.');
  };

  const serviceStructuredData = generateServiceStructuredData(
    'Business Strategy Services',
    'Expert business strategy consulting to drive growth, optimize operations, and achieve sustainable success.',
    strategyServices.flatMap(service => service.features)
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/services/business-strategy')}
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
              <TrendingUp size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic Business Consulting That Drives Real Growth
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with expert strategy consulting. From market analysis to growth planning, we help Ethiopian businesses achieve sustainable success and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
                Get Strategic Assessment
                <ArrowRight className="ml-2 inline" size={20} />
              </button>
              <button className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Business Strategy Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic planning to operational excellence, we provide end-to-end consulting services to accelerate your business growth.
            </p>
          </div>
          
          <div 
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {strategyServices.map((service, index) => (
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
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
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
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedService(service.title)}
                  className="w-full bg-[#FF6B35] hover:bg-[#4ECDC4] text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Consulting Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured 5-phase approach ensures comprehensive analysis, strategic development, and successful implementation.
            </p>
          </div>
          
          <div 
            ref={processRef}
            className="max-w-6xl mx-auto"
          >
            {consultingProcess.map((phase, index) => (
              <div
                key={index}
                className={`flex items-start mb-12 last:mb-0 ${
                  processVisible.has(index) ? 'animate-fade-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 mr-8">
                  <div className="w-20 h-20 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {phase.phase}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <phase.icon className="text-[#4ECDC4] mr-3" size={28} />
                    <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                    <span className="ml-auto text-sm text-[#FF6B35] font-medium bg-orange-50 px-3 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{phase.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {phase.activities.map((activity, idx) => (
                      <span key={idx} className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm border">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results That Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic consulting delivers measurable results across key business metrics.
            </p>
          </div>
          
          <div 
            ref={resultsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 ${
                  resultsVisible.has(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <metric.icon className="text-[#FF6B35] mx-auto mb-2" size={32} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{metric.average}</div>
                  <h3 className="font-semibold text-gray-900">{metric.metric}</h3>
                </div>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real businesses, real challenges, real results. See how our strategic consulting transforms companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{study.industry}</h3>
                    <div className="text-sm text-gray-600 mb-3">
                      <strong>Challenge:</strong> {study.challenge}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      <strong>Solution:</strong> {study.solution}
                    </div>
                  </div>
                  
                  <div className="mb-4 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Results Achieved:</h4>
                    <div className="space-y-1 text-sm text-green-700">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-start mb-2">
                      <Quote className="text-[#FF6B35] mr-2 flex-shrink-0" size={16} />
                      <p className="text-sm text-gray-700 italic">"{study.testimonial}"</p>
                    </div>
                    <p className="text-sm text-gray-600 text-right">- {study.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep industry knowledge across diverse sectors in the Ethiopian market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industryExpertise.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-[#FF6B35] transition-all duration-300 text-center"
              >
                <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Projects:</span>
                    <span className="font-medium text-[#FF6B35]">{industry.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Growth:</span>
                    <span className="font-medium text-green-600">{industry.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Consulting Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the consulting package that best fits your business needs and growth stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {consultingPackages.map((pkg, index) => (
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
                  <div className="text-sm text-gray-600 mb-2">{pkg.duration}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
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
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Assessment Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Strategic Assessment</h2>
              <p className="text-xl text-gray-600">
                Tell us about your business and we'll provide a customized strategic consultation proposal.
              </p>
            </div>
            
            <form onSubmit={handleAssessmentSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Stage</label>
                  <select 
                    value={strategyAssessment.businessStage}
                    onChange={(e) => setStrategyAssessment(prev => ({ ...prev, businessStage: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Business Stage</option>
                    <option value="startup">Startup (0-2 years)</option>
                    <option value="growth">Growth Stage (2-5 years)</option>
                    <option value="established">Established (5+ years)</option>
                    <option value="enterprise">Enterprise (Large organization)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select 
                    value={strategyAssessment.industry}
                    onChange={(e) => setStrategyAssessment(prev => ({ ...prev, industry: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="technology">Technology & Software</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="financial">Financial Services</option>
                    <option value="education">Education</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="construction">Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Business Challenges</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Revenue Growth',
                    'Market Expansion',
                    'Operational Efficiency',
                    'Cost Management',
                    'Team Development',
                    'Digital Transformation',
                    'Competitive Positioning',
                    'Financial Planning',
                    'Process Optimization'
                  ].map((challenge) => (
                    <label key={challenge} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2 text-[#FF6B35] focus:ring-[#FF6B35]"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setStrategyAssessment(prev => ({ ...prev, challenges: [...prev.challenges, challenge] }));
                          } else {
                            setStrategyAssessment(prev => ({ ...prev, challenges: prev.challenges.filter(c => c !== challenge) }));
                          }
                        }}
                      />
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Goal</label>
                  <select 
                    value={strategyAssessment.goals}
                    onChange={(e) => setStrategyAssessment(prev => ({ ...prev, goals: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Primary Goal</option>
                    <option value="growth">Accelerate Growth</option>
                    <option value="efficiency">Improve Efficiency</option>
                    <option value="expansion">Market Expansion</option>
                    <option value="transformation">Digital Transformation</option>
                    <option value="optimization">Cost Optimization</option>
                    <option value="strategy">Strategic Planning</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select 
                    value={strategyAssessment.timeline}
                    onChange={(e) => setStrategyAssessment(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Immediate (1-3 months)</option>
                    <option value="short-term">Short-term (3-6 months)</option>
                    <option value="medium-term">Medium-term (6-12 months)</option>
                    <option value="long-term">Long-term (12+ months)</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Budget</label>
                <select 
                  value={strategyAssessment.budget}
                  onChange={(e) => setStrategyAssessment(prev => ({ ...prev, budget: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  required
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-2k">Under $2,000</option>
                  <option value="2k-5k">$2,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="over-25k">Over $25,000</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#4ECDC4] text-white py-3 rounded-lg font-medium transition-colors"
              >
                Get My Strategic Assessment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business Strategy?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to unlock your business potential and achieve sustainable growth through strategic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Schedule Strategy Session
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-3 rounded-lg font-medium transition-colors">
              Download Strategy Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessStrategyServices;