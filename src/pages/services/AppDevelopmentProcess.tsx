import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/SEO/MetaTags';
import StructuredData from '../../components/SEO/StructuredData';
import { 
  Smartphone, CheckCircle, ArrowRight, Code, Layers, Shield, 
  Zap, Star, Clock, Users, TrendingUp, Award, Globe, 
  Monitor, Tablet, Database, Cloud, Settings, TestTube 
} from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl, generateServiceStructuredData } from '../../utils/seo';

const AppDevelopmentProcess = () => {
  const [selectedAppType, setSelectedAppType] = useState('');
  const [projectEstimate, setProjectEstimate] = useState({
    appType: '',
    platforms: [],
    complexity: '',
    timeline: '',
    budget: ''
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { containerRef: processRef, visibleItems: processVisible } = useStaggeredAnimation(8, 150);
  const { containerRef: techRef, visibleItems: techVisible } = useStaggeredAnimation(12, 100);
  const { containerRef: appTypesRef, visibleItems: appTypesVisible } = useStaggeredAnimation(4, 200);

  const pageTitle = generatePageTitle('Custom Mobile & Web App Development Process');
  const pageDescription = generateMetaDescription(
    'Transform your ideas into powerful mobile and web applications with our proven development process. From concept to launch, we build apps that users love and businesses rely on.'
  );
  const pageKeywords = generateKeywords(['app development', 'mobile app development', 'web app development', 'custom applications', 'software development']);

  const developmentProcess = [
    {
      phase: 1,
      title: 'Discovery & Requirements',
      description: 'Deep dive into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
      icon: Users,
      duration: '1-2 Weeks',
      deliverables: ['Project Brief', 'Technical Specifications', 'User Stories', 'Project Timeline']
    },
    {
      phase: 2,
      title: 'UX Design & Wireframing',
      description: 'Create intuitive user experiences with detailed wireframes and user journey mapping for optimal usability.',
      icon: Layers,
      duration: '2-3 Weeks',
      deliverables: ['User Journey Maps', 'Wireframes', 'Information Architecture', 'UX Strategy']
    },
    {
      phase: 3,
      title: 'UI Design & Prototyping',
      description: 'Design beautiful, modern interfaces that align with your brand and provide exceptional user experiences.',
      icon: Monitor,
      duration: '2-4 Weeks',
      deliverables: ['UI Designs', 'Interactive Prototypes', 'Design System', 'Brand Guidelines']
    },
    {
      phase: 4,
      title: 'Frontend Development',
      description: 'Build responsive, performant user interfaces using the latest technologies and best practices.',
      icon: Code,
      duration: '4-8 Weeks',
      deliverables: ['Frontend Application', 'Responsive Design', 'Component Library', 'Performance Optimization']
    },
    {
      phase: 5,
      title: 'Backend Development',
      description: 'Develop robust, scalable backend systems with secure APIs and efficient data management.',
      icon: Database,
      duration: '4-8 Weeks',
      deliverables: ['API Development', 'Database Design', 'Authentication System', 'Security Implementation']
    },
    {
      phase: 6,
      title: 'Quality Assurance',
      description: 'Comprehensive testing across devices, platforms, and scenarios to ensure flawless performance.',
      icon: TestTube,
      duration: '2-4 Weeks',
      deliverables: ['Test Plans', 'Bug Reports', 'Performance Testing', 'Security Audits']
    },
    {
      phase: 7,
      title: 'Deployment & Launch',
      description: 'Deploy your application to production environments with proper monitoring and launch support.',
      icon: Cloud,
      duration: '1-2 Weeks',
      deliverables: ['Production Deployment', 'App Store Submission', 'Launch Strategy', 'Monitoring Setup']
    },
    {
      phase: 8,
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and feature enhancements to keep your app running smoothly.',
      icon: Settings,
      duration: 'Ongoing',
      deliverables: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', 'Technical Support']
    }
  ];

  const technologyStack = {
    frontend: [
      { name: 'React Native', description: 'Cross-platform mobile development', icon: '⚛️' },
      { name: 'Flutter', description: 'Google\'s UI toolkit for mobile', icon: '🦋' },
      { name: 'React', description: 'Modern web application framework', icon: '⚛️' },
      { name: 'Vue.js', description: 'Progressive web framework', icon: '💚' }
    ],
    backend: [
      { name: 'Node.js', description: 'JavaScript runtime for servers', icon: '🟢' },
      { name: 'Python', description: 'Versatile backend language', icon: '🐍' },
      { name: 'Java', description: 'Enterprise-grade development', icon: '☕' },
      { name: '.NET', description: 'Microsoft development platform', icon: '🔷' }
    ],
    databases: [
      { name: 'MongoDB', description: 'NoSQL document database', icon: '🍃' },
      { name: 'PostgreSQL', description: 'Advanced relational database', icon: '🐘' },
      { name: 'Firebase', description: 'Google\'s app development platform', icon: '🔥' },
      { name: 'Redis', description: 'In-memory data structure store', icon: '🔴' }
    ],
    cloud: [
      { name: 'AWS', description: 'Amazon Web Services', icon: '☁️' },
      { name: 'Google Cloud', description: 'Google Cloud Platform', icon: '🌤️' },
      { name: 'Azure', description: 'Microsoft Azure', icon: '🔵' },
      { name: 'Docker', description: 'Containerization platform', icon: '🐳' }
    ]
  };

  const appTypes = [
    {
      icon: Smartphone,
      title: 'Business & Productivity Apps',
      description: 'Streamline operations and boost productivity with custom business applications.',
      examples: ['CRM Systems', 'Project Management', 'Inventory Management', 'Employee Portals'],
      features: ['Real-time Collaboration', 'Data Analytics', 'Cloud Synchronization', 'Role-based Access']
    },
    {
      icon: Globe,
      title: 'E-commerce & Marketplace Apps',
      description: 'Create powerful shopping experiences that drive sales and customer engagement.',
      examples: ['Online Stores', 'Multi-vendor Marketplaces', 'Auction Platforms', 'Subscription Services'],
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Customer Reviews']
    },
    {
      icon: Users,
      title: 'Social & Communication Apps',
      description: 'Connect people and communities with engaging social and messaging platforms.',
      examples: ['Social Networks', 'Messaging Apps', 'Community Platforms', 'Dating Apps'],
      features: ['Real-time Messaging', 'Media Sharing', 'Push Notifications', 'Social Features']
    },
    {
      icon: Star,
      title: 'Entertainment & Gaming Apps',
      description: 'Engage users with immersive entertainment and gaming experiences.',
      examples: ['Mobile Games', 'Streaming Apps', 'Content Platforms', 'Interactive Media'],
      features: ['Rich Media Support', 'Offline Capabilities', 'Social Integration', 'Monetization']
    }
  ];

  const timelineFactors = [
    {
      factor: 'App Complexity',
      simple: '8-12 weeks',
      moderate: '12-20 weeks',
      complex: '20-32 weeks'
    },
    {
      factor: 'Platform Coverage',
      simple: 'Single platform',
      moderate: 'Cross-platform',
      complex: 'Multiple platforms + Web'
    },
    {
      factor: 'Custom Features',
      simple: 'Standard features',
      moderate: 'Some custom features',
      complex: 'Highly customized'
    },
    {
      factor: 'Integrations',
      simple: 'Basic integrations',
      moderate: 'Multiple APIs',
      complex: 'Complex enterprise systems'
    }
  ];

  const qualityAssurance = [
    {
      type: 'Automated Testing',
      description: 'Continuous integration with automated test suites',
      coverage: ['Unit Tests', 'Integration Tests', 'API Tests', 'Regression Tests']
    },
    {
      type: 'Manual Testing',
      description: 'Human-driven testing for user experience validation',
      coverage: ['Usability Testing', 'Exploratory Testing', 'Accessibility Testing', 'User Acceptance Testing']
    },
    {
      type: 'Performance Testing',
      description: 'Ensure optimal performance under various conditions',
      coverage: ['Load Testing', 'Stress Testing', 'Memory Usage', 'Battery Optimization']
    },
    {
      type: 'Security Testing',
      description: 'Comprehensive security auditing and vulnerability assessment',
      coverage: ['Data Encryption', 'Authentication', 'Authorization', 'Penetration Testing']
    },
    {
      type: 'Cross-platform Testing',
      description: 'Compatibility testing across devices and platforms',
      coverage: ['Device Testing', 'OS Versions', 'Screen Sizes', 'Browser Compatibility']
    },
    {
      type: 'User Acceptance Testing',
      description: 'Real user testing to validate functionality and usability',
      coverage: ['Beta Testing', 'Focus Groups', 'Feedback Collection', 'Iteration Planning']
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      price: '$200/month',
      description: 'Essential maintenance and bug fixes',
      features: ['Bug Fixes', 'Security Updates', 'Basic Monitoring', 'Email Support']
    },
    {
      name: 'Standard Support',
      price: '$500/month',
      description: 'Comprehensive support with feature updates',
      features: ['Everything in Basic', 'Feature Updates', 'Performance Optimization', 'Priority Support', 'Monthly Reports']
    },
    {
      name: 'Premium Support',
      price: '$1000/month',
      description: 'Full-service support with dedicated resources',
      features: ['Everything in Standard', 'Dedicated Support Team', 'Custom Development', '24/7 Monitoring', 'SLA Guarantee']
    }
  ];

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would calculate and send the estimate
    alert('Project estimate request submitted! We\'ll contact you within 24 hours with a detailed proposal.');
  };

  const serviceStructuredData = generateServiceStructuredData(
    'App Development Process',
    'Custom mobile and web application development with proven methodology from concept to launch.',
    developmentProcess.flatMap(phase => phase.deliverables)
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/services/app-development-process')}
        type="service"
      />
      
      <StructuredData
        type="service"
        data={serviceStructuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-6">
              <Smartphone size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom Mobile & Web Apps Built for Success
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your ideas into powerful applications with our proven development methodology. From concept to launch, we build apps that users love and businesses rely on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
                Start Your App Project
                <ArrowRight className="ml-2 inline" size={20} />
              </button>
              <button className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300">
                View App Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven App Development Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 8-phase development process ensures your app is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div 
            ref={processRef}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {developmentProcess.map((phase, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-[#FF6B35] transition-all duration-500 hover:scale-105 transform ${
                    processVisible.has(index) ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {phase.phase}
                    </div>
                    <phase.icon className="text-[#4ECDC4]" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{phase.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-[#FF6B35] font-medium mb-2">
                      <Clock size={16} className="mr-1" />
                      Duration: {phase.duration}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build robust, scalable applications.
            </p>
          </div>
          
          <div 
            ref={techRef}
            className="max-w-6xl mx-auto"
          >
            {Object.entries(technologyStack).map(([category, technologies], categoryIndex) => (
              <div key={category} className="mb-12 last:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize text-center">
                  {category === 'frontend' ? 'Frontend' : 
                   category === 'backend' ? 'Backend' : 
                   category === 'databases' ? 'Databases' : 'Cloud Services'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {technologies.map((tech, index) => {
                    const techIndex = categoryIndex * 4 + index;
                    return (
                      <div
                        key={index}
                        className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:scale-105 transform ${
                          techVisible.has(techIndex) ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{tech.name}</h4>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Type Specializations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Apps We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From business productivity tools to entertainment platforms, we specialize in various app categories.
            </p>
          </div>
          
          <div 
            ref={appTypesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {appTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-[#FF6B35] transition-all duration-500 hover:scale-105 transform ${
                  appTypesVisible.has(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <type.icon className="text-[#FF6B35] mb-4" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {type.examples.map((example, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typical Project Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Project timelines vary based on complexity, features, and platform requirements.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Factor</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Simple</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Moderate</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Complex</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {timelineFactors.map((factor, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{factor.factor}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{factor.simple}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{factor.moderate}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{factor.complex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Timeline estimates include all phases from discovery to launch. Actual timelines may vary based on project scope and client feedback cycles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-1">Planning Phase</h4>
                  <p className="text-green-700">2-4 weeks</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">Development Phase</h4>
                  <p className="text-blue-700">8-16 weeks</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-1">Testing & Launch</h4>
                  <p className="text-purple-700">2-4 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Ensure App Quality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive testing methodology ensures your app performs flawlessly across all scenarios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {qualityAssurance.map((qa, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-[#FF6B35] transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{qa.type}</h3>
                <p className="text-gray-600 mb-4">{qa.description}</p>
                <ul className="space-y-2">
                  {qa.coverage.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Launch Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Don't Just Build, We Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our flexible support plans to keep your app running smoothly and evolving with your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:scale-105 transform ${
                  index === 1 ? 'border-2 border-[#FF6B35] shadow-xl' : 'border border-gray-200'
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    index === 1
                      ? 'bg-[#FF6B35] text-white hover:bg-[#4ECDC4]'
                      : 'border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Estimation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your App Development Quote</h2>
              <p className="text-xl text-gray-600">
                Tell us about your app idea and we'll provide a detailed estimate with timeline and pricing.
              </p>
            </div>
            
            <form onSubmit={handleEstimateSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">App Type</label>
                  <select 
                    value={projectEstimate.appType}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, appType: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select App Type</option>
                    <option value="business">Business & Productivity</option>
                    <option value="ecommerce">E-commerce & Marketplace</option>
                    <option value="social">Social & Communication</option>
                    <option value="entertainment">Entertainment & Gaming</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Complexity Level</label>
                  <select 
                    value={projectEstimate.complexity}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, complexity: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Complexity</option>
                    <option value="simple">Simple (Basic features)</option>
                    <option value="moderate">Moderate (Custom features)</option>
                    <option value="complex">Complex (Advanced features)</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform Preferences</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['iOS', 'Android', 'Web App', 'Cross-platform'].map((platform) => (
                    <label key={platform} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2 text-[#FF6B35] focus:ring-[#FF6B35]"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setProjectEstimate(prev => ({ ...prev, platforms: [...prev.platforms, platform] }));
                          } else {
                            setProjectEstimate(prev => ({ ...prev, platforms: prev.platforms.filter(p => p !== platform) }));
                          }
                        }}
                      />
                      <span className="text-sm text-gray-700">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline Requirements</label>
                  <select 
                    value={projectEstimate.timeline}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP (Rush project)</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select 
                    value={projectEstimate.budget}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Budget Range</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#4ECDC4] text-white py-3 rounded-lg font-medium transition-colors"
              >
                Get Detailed Estimate
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Dream App?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's transform your app idea into a powerful, user-friendly application that drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Your App Project
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentProcess;