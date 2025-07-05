import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/SEO/MetaTags';
import StructuredData from '../../components/SEO/StructuredData';
import { 
  Wrench, CheckCircle, ArrowRight, Building2, Ruler, Cog, 
  Star, Clock, Users, TrendingUp, Award, Globe, 
  Monitor, Tablet, Database, Cloud, Settings, TestTube,
  Calculator, FileText, Shield, Zap, Target, Eye
} from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl, generateServiceStructuredData } from '../../utils/seo';

const EngineeringDesign = () => {
  const [selectedService, setSelectedService] = useState('');
  const [projectEstimate, setProjectEstimate] = useState({
    projectType: '',
    scope: '',
    squareFootage: '',
    timeline: '',
    budget: '',
    location: '',
    requirements: []
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { containerRef: servicesRef, visibleItems: servicesVisible } = useStaggeredAnimation(4, 150);
  const { containerRef: processRef, visibleItems: processVisible } = useStaggeredAnimation(7, 200);
  const { containerRef: portfolioRef, visibleItems: portfolioVisible } = useStaggeredAnimation(8, 100);

  const pageTitle = generatePageTitle('Professional Engineering Design Solutions - Structural, MEP & Architectural');
  const pageDescription = generateMetaDescription(
    'Expert engineering design services including structural, MEP, architectural design, and project management. From concept to completion with professional certifications and compliance.'
  );
  const pageKeywords = generateKeywords(['engineering design', 'structural engineering', 'MEP design', 'architectural design', 'project management', 'construction']);

  const engineeringServices = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Conceptual design, space planning, and building layouts for residential, commercial, and institutional projects.',
      features: ['Floor Plans & Elevations', '3D Renderings & Visualizations', 'Permit Drawings & Documentation', 'Space Planning & Optimization', 'Building Code Compliance', 'Sustainable Design Solutions'],
      deliverables: ['Architectural Drawings', 'Design Development Plans', '3D Models & Renderings', 'Permit Application Sets'],
      projectTypes: ['Residential Buildings', 'Commercial Complexes', 'Institutional Facilities', 'Mixed-Use Developments'],
      timeline: '4-12 weeks',
      investment: 'From $2,500'
    },
    {
      icon: Calculator,
      title: 'Structural Engineering',
      description: 'Load analysis, foundation design, and structural systems for safe and efficient building construction.',
      features: ['Structural Analysis & Calculations', 'Foundation Design & Specifications', 'Load Path Analysis', 'Seismic Design & Analysis', 'Steel & Concrete Design', 'Structural Inspections'],
      deliverables: ['Structural Drawings', 'Engineering Calculations', 'Load Analysis Reports', 'Foundation Plans'],
      projectTypes: ['Building Structures', 'Bridges & Infrastructure', 'Industrial Facilities', 'Renovation Projects'],
      timeline: '3-8 weeks',
      investment: 'From $3,000'
    },
    {
      icon: Cog,
      title: 'MEP Design',
      description: 'Mechanical, electrical, and plumbing systems design for optimal building performance and efficiency.',
      features: ['HVAC System Design', 'Electrical Distribution Systems', 'Plumbing & Fire Protection', 'Energy Efficiency Analysis', 'Load Calculations', 'System Integration'],
      deliverables: ['MEP Drawings', 'Equipment Specifications', 'Load Calculations', 'System Layouts'],
      projectTypes: ['Commercial Buildings', 'Industrial Facilities', 'Residential Complexes', 'Healthcare Facilities'],
      timeline: '4-10 weeks',
      investment: 'From $4,000'
    },
    {
      icon: Settings,
      title: 'Project Management',
      description: 'Comprehensive project coordination from planning through completion with quality control and budget management.',
      features: ['Project Planning & Scheduling', 'Quality Control & Assurance', 'Budget Management', 'Contractor Coordination', 'Progress Monitoring', 'Risk Management'],
      deliverables: ['Project Schedules', 'Progress Reports', 'Quality Assessments', 'Final Documentation'],
      projectTypes: ['New Construction', 'Renovations', 'Infrastructure Projects', 'Multi-phase Developments'],
      timeline: 'Project Duration',
      investment: 'From $5,000'
    }
  ];

  const engineeringProcess = [
    {
      step: 1,
      title: 'Initial Consultation & Site Assessment',
      description: 'Comprehensive project evaluation including site conditions, client requirements, and feasibility analysis.',
      icon: Users,
      duration: '1-2 Days',
      activities: ['Site Visit & Survey', 'Client Requirements Review', 'Feasibility Assessment', 'Preliminary Cost Estimate']
    },
    {
      step: 2,
      title: 'Conceptual Design & Studies',
      description: 'Develop initial design concepts and conduct necessary feasibility studies and analysis.',
      icon: Target,
      duration: '1-2 Weeks',
      activities: ['Conceptual Design', 'Feasibility Studies', 'Code Research', 'Preliminary Calculations']
    },
    {
      step: 3,
      title: 'Detailed Design Development',
      description: 'Create comprehensive design documentation with detailed calculations and specifications.',
      icon: Ruler,
      duration: '3-6 Weeks',
      activities: ['Detailed Drawings', 'Engineering Calculations', 'Specifications', 'Design Coordination']
    },
    {
      step: 4,
      title: 'Technical Documentation',
      description: 'Prepare complete technical drawings and documentation for permits and construction.',
      icon: FileText,
      duration: '1-2 Weeks',
      activities: ['Construction Documents', 'Permit Drawings', 'Technical Specifications', 'Detail Drawings']
    },
    {
      step: 5,
      title: 'Regulatory Approval',
      description: 'Assist with permit applications and regulatory approvals from relevant authorities.',
      icon: Shield,
      duration: '2-4 Weeks',
      activities: ['Permit Applications', 'Authority Coordination', 'Plan Reviews', 'Approval Follow-up']
    },
    {
      step: 6,
      title: 'Construction Administration',
      description: 'Provide oversight and support during construction phase to ensure design compliance.',
      icon: Eye,
      duration: 'Construction Period',
      activities: ['Site Inspections', 'RFI Responses', 'Change Order Review', 'Quality Control']
    },
    {
      step: 7,
      title: 'Project Closeout',
      description: 'Final documentation, as-built drawings, and project completion certification.',
      icon: Award,
      duration: '1-2 Weeks',
      activities: ['As-Built Drawings', 'Final Inspections', 'Documentation Handover', 'Project Certification']
    }
  ];

  const softwareTools = {
    cad: [
      { name: 'AutoCAD', description: 'Industry-standard 2D drafting and design', icon: '📐' },
      { name: 'Revit', description: 'Building Information Modeling (BIM)', icon: '🏗️' },
      { name: 'SolidWorks', description: '3D mechanical design and simulation', icon: '⚙️' },
      { name: 'MicroStation', description: 'Infrastructure design and modeling', icon: '🌉' }
    ],
    analysis: [
      { name: 'SAP2000', description: 'Structural analysis and design', icon: '🔬' },
      { name: 'ETABS', description: 'Building analysis and design', icon: '🏢' },
      { name: 'STAAD Pro', description: 'Structural analysis and design', icon: '📊' },
      { name: 'RISA', description: 'Structural engineering software', icon: '📈' }
    ],
    modeling: [
      { name: 'SketchUp', description: '3D modeling and visualization', icon: '🎨' },
      { name: 'Rhino', description: 'Advanced 3D modeling', icon: '🦏' },
      { name: '3ds Max', description: 'Professional 3D rendering', icon: '🎬' },
      { name: 'Lumion', description: 'Architectural visualization', icon: '✨' }
    ],
    management: [
      { name: 'Primavera P6', description: 'Enterprise project management', icon: '📅' },
      { name: 'Microsoft Project', description: 'Project planning and tracking', icon: '📋' },
      { name: 'Procore', description: 'Construction management platform', icon: '🏗️' },
      { name: 'Bluebeam', description: 'PDF markup and collaboration', icon: '📝' }
    ]
  };

  const portfolioProjects = [
    {
      title: 'Addis Business Center - Structural Design',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      scope: '12-story office building with underground parking',
      challenge: 'Seismic design in high-activity zone',
      solution: 'Advanced base isolation system and reinforced concrete frame',
      metrics: { size: '50,000 sq ft', timeline: '8 months', budget: '$2.5M' }
    },
    {
      title: 'Residential Complex - MEP Systems',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      scope: '200-unit residential complex with amenities',
      challenge: 'Energy-efficient systems within budget',
      solution: 'Integrated HVAC and renewable energy systems',
      metrics: { size: '300,000 sq ft', timeline: '6 months', budget: '$1.8M' }
    },
    {
      title: 'Industrial Warehouse - Complete Design',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      scope: 'Manufacturing facility with heavy equipment',
      challenge: 'Large span structures and heavy loads',
      solution: 'Pre-engineered steel structure with crane systems',
      metrics: { size: '100,000 sq ft', timeline: '5 months', budget: '$3.2M' }
    },
    {
      title: 'Bridge Infrastructure Project',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      scope: 'Highway overpass with pedestrian walkways',
      challenge: 'Traffic flow during construction',
      solution: 'Phased construction with temporary structures',
      metrics: { size: '500 ft span', timeline: '12 months', budget: '$5.5M' }
    },
    {
      title: 'Hospital Facility - MEP Design',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      scope: 'Critical care facility with specialized systems',
      challenge: 'Redundant systems and infection control',
      solution: 'Dual MEP systems with advanced filtration',
      metrics: { size: '75,000 sq ft', timeline: '10 months', budget: '$4.2M' }
    },
    {
      title: 'Educational Campus - Master Planning',
      category: 'Educational',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      scope: 'University campus with multiple buildings',
      challenge: 'Phased development and utility coordination',
      solution: 'Integrated master plan with flexible infrastructure',
      metrics: { size: '500,000 sq ft', timeline: '18 months', budget: '$8.5M' }
    },
    {
      title: 'Retail Complex - Architectural Design',
      category: 'Retail',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      scope: 'Shopping center with entertainment facilities',
      challenge: 'Large open spaces and varied occupancy',
      solution: 'Long-span steel structure with flexible layouts',
      metrics: { size: '200,000 sq ft', timeline: '7 months', budget: '$3.8M' }
    },
    {
      title: 'Water Treatment Plant - Process Design',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      scope: 'Municipal water treatment facility',
      challenge: 'Environmental compliance and efficiency',
      solution: 'Advanced treatment processes with automation',
      metrics: { size: '25 MGD capacity', timeline: '14 months', budget: '$12M' }
    }
  ];

  const complianceStandards = [
    {
      category: 'Building Codes',
      standards: ['International Building Code (IBC)', 'International Residential Code (IRC)', 'NFPA Life Safety Code', 'Local Building Codes'],
      icon: Building2
    },
    {
      category: 'Structural Standards',
      standards: ['AISC Steel Construction Manual', 'ACI Concrete Code', 'ASCE Load Standards', 'Seismic Design Standards'],
      icon: Calculator
    },
    {
      category: 'MEP Standards',
      standards: ['ASHRAE HVAC Standards', 'IEEE Electrical Standards', 'NECA Installation Standards', 'NFPA Fire Protection'],
      icon: Cog
    },
    {
      category: 'Environmental',
      standards: ['LEED Green Building', 'Energy Star Certification', 'Environmental Impact Assessment', 'Sustainability Guidelines'],
      icon: Globe
    }
  ];

  const engineeringTeam = [
    {
      name: 'Tekle Hailu',
      role: 'Senior Structural Engineer',
      specialization: 'High-rise buildings and seismic design',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      credentials: ['PE License', 'SE Certification', 'LEED AP'],
      experience: '15+ years',
      education: 'MS Structural Engineering, Addis Ababa University'
    },
    {
      name: 'Meron Tadesse',
      role: 'MEP Design Engineer',
      specialization: 'Building systems and energy efficiency',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      credentials: ['PE License', 'LEED AP', 'CEM Certification'],
      experience: '12+ years',
      education: 'MS Mechanical Engineering, AAiT'
    },
    {
      name: 'Dawit Bekele',
      role: 'Project Manager',
      specialization: 'Construction administration and coordination',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      credentials: ['PMP Certification', 'PE License', 'OSHA 30'],
      experience: '18+ years',
      education: 'MS Construction Management, EiABC'
    }
  ];

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the estimate request
    alert('Engineering project estimate request submitted! We\'ll contact you within 24 hours with a detailed proposal.');
  };

  const serviceStructuredData = generateServiceStructuredData(
    'Engineering Design Services',
    'Professional engineering design solutions including structural, MEP, architectural design, and project management from concept to completion.',
    engineeringServices.flatMap(service => service.features)
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/services/engineering-design')}
        type="service"
      />
      
      <StructuredData
        type="service"
        data={serviceStructuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-6">
              <Wrench size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Engineering Design Solutions for Your Project Success
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From concept to completion - architectural, structural, MEP, and project management expertise that ensures your projects are delivered safely, efficiently, and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
                Get Engineering Consultation
                <ArrowRight className="ml-2 inline" size={20} />
              </button>
              <button className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300">
                View Project Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Engineering Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions covering all aspects of building design and construction management.
            </p>
          </div>
          
          <div 
            ref={servicesRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {engineeringServices.map((service, index) => (
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
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Project Types:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.projectTypes.map((type, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {type}
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

      {/* Engineering Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Engineering Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic 7-step process ensures quality, compliance, and successful project delivery from initial consultation to final completion.
            </p>
          </div>
          
          <div 
            ref={processRef}
            className="max-w-6xl mx-auto"
          >
            {engineeringProcess.map((step, index) => (
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
                  <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {step.activities.map((activity, idx) => (
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

      {/* Software and Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Engineering Tools We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading software and tools for precise design, analysis, and project management.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {Object.entries(softwareTools).map(([category, tools], categoryIndex) => (
              <div key={category} className="mb-12 last:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize text-center">
                  {category === 'cad' ? 'CAD Software' : 
                   category === 'analysis' ? 'Analysis Software' : 
                   category === 'modeling' ? '3D Modeling' : 'Project Management'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:scale-105 transform"
                    >
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {tool.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{tool.name}</h4>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Engineering Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of successful engineering projects across various sectors and building types.
            </p>
          </div>
          
          <div 
            ref={portfolioRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  portfolioVisible.has(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.scope}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-xs mb-2">{project.challenge}</p>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Solution:</h4>
                    <p className="text-gray-600 text-xs">{project.solution}</p>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="grid grid-cols-1 gap-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-medium">{project.metrics.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-medium">{project.metrics.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium text-[#FF6B35]">{project.metrics.budget}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance and Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Standards and Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our designs comply with all relevant building codes, industry standards, and environmental regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="mb-4">
                  <standard.icon className="text-[#FF6B35] mx-auto mb-2" size={32} />
                  <h3 className="font-bold text-gray-900">{standard.category}</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {standard.standards.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={12} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Engineering Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed professional engineers with extensive experience in design, analysis, and project management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engineeringTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#FF6B35] font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Credentials:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.credentials.map((credential, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p><strong>Education:</strong> {member.education}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Estimation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Engineering Project Quote</h2>
              <p className="text-xl text-gray-600">
                Tell us about your project and we'll provide a detailed estimate with timeline and pricing.
              </p>
            </div>
            
            <form onSubmit={handleEstimateSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select 
                    value={projectEstimate.projectType}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, projectType: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="architectural">Architectural Design</option>
                    <option value="structural">Structural Engineering</option>
                    <option value="mep">MEP Design</option>
                    <option value="management">Project Management</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Scope</label>
                  <select 
                    value={projectEstimate.scope}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, scope: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Project Scope</option>
                    <option value="new-construction">New Construction</option>
                    <option value="renovation">Renovation/Addition</option>
                    <option value="feasibility">Feasibility Study</option>
                    <option value="consultation">Engineering Consultation</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Square Footage</label>
                  <select 
                    value={projectEstimate.squareFootage}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, squareFootage: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Square Footage</option>
                    <option value="under-5k">Under 5,000 sq ft</option>
                    <option value="5k-25k">5,000 - 25,000 sq ft</option>
                    <option value="25k-100k">25,000 - 100,000 sq ft</option>
                    <option value="over-100k">Over 100,000 sq ft</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select 
                    value={projectEstimate.timeline}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="rush">Rush (2-4 weeks)</option>
                    <option value="standard">Standard (1-3 months)</option>
                    <option value="extended">Extended (3-6 months)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select 
                    value={projectEstimate.budget}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-200k">$50,000 - $200,000</option>
                    <option value="over-200k">Over $200,000</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={projectEstimate.location}
                    onChange={(e) => setProjectEstimate(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Project location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Seismic Design',
                    'LEED Certification',
                    'Fast Track Schedule',
                    'Historic Renovation',
                    'Heavy Industrial Loads',
                    'Special Occupancy',
                    'Energy Efficiency',
                    'Accessibility Compliance',
                    'Fire Protection Systems'
                  ].map((requirement) => (
                    <label key={requirement} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2 text-[#FF6B35] focus:ring-[#FF6B35]"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setProjectEstimate(prev => ({ ...prev, requirements: [...prev.requirements, requirement] }));
                          } else {
                            setProjectEstimate(prev => ({ ...prev, requirements: prev.requirements.filter(r => r !== requirement) }));
                          }
                        }}
                      />
                      <span className="text-sm text-gray-700">{requirement}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#4ECDC4] text-white py-3 rounded-lg font-medium transition-colors"
              >
                Get Engineering Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Engineering Project?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced engineering team bring your vision to life with professional design solutions that meet all codes and standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Expert Consultation
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringDesign;