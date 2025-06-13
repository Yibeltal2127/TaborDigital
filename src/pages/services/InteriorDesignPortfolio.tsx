import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/SEO/MetaTags';
import StructuredData from '../../components/SEO/StructuredData';
import { 
  Home, CheckCircle, ArrowRight, Palette, Layers, Lightbulb, 
  Star, Clock, Users, TrendingUp, Award, Globe, 
  Monitor, Tablet, Database, Cloud, Settings, TestTube,
  Camera, Eye, Filter, ChevronDown, Quote, Calendar, User
} from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl, generateServiceStructuredData } from '../../utils/seo';

const InteriorDesignPortfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [consultationForm, setConsultationForm] = useState({
    projectType: '',
    spaceType: '',
    squareFootage: '',
    style: '',
    budget: '',
    timeline: ''
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { containerRef: portfolioRef, visibleItems: portfolioVisible } = useStaggeredAnimation(12, 100);
  const { containerRef: servicesRef, visibleItems: servicesVisible } = useStaggeredAnimation(6, 150);
  const { containerRef: processRef, visibleItems: processVisible } = useStaggeredAnimation(6, 200);

  const pageTitle = generatePageTitle('Interior Design Portfolio - Transform Your Space');
  const pageDescription = generateMetaDescription(
    'Explore our stunning interior design portfolio featuring residential and commercial projects. From modern to traditional styles, see how we transform spaces into extraordinary environments.'
  );
  const pageKeywords = generateKeywords(['interior design portfolio', 'interior design', 'space design', 'home design', 'commercial design', 'interior decoration']);

  const portfolioProjects = [
    {
      id: 1,
      title: 'Modern Executive Office',
      category: 'Commercial',
      style: 'Modern',
      roomType: 'Office',
      location: 'Addis Ababa',
      squareFootage: '2,500 sq ft',
      beforeImage: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      afterImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      challenge: 'Transform outdated office space into modern, productive work environment',
      solution: 'Open-plan design with collaborative zones and private meeting areas',
      satisfaction: 5,
      testimonial: 'The new office design has boosted our team productivity by 40%. The space feels inspiring and professional.',
      client: 'TechFlow Solutions',
      duration: '6 weeks'
    },
    {
      id: 2,
      title: 'Luxury Family Living Room',
      category: 'Residential',
      style: 'Traditional',
      roomType: 'Living Room',
      location: 'Bole, Addis Ababa',
      squareFootage: '800 sq ft',
      beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      afterImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      challenge: 'Create elegant family space that balances comfort with sophistication',
      solution: 'Rich textures, warm colors, and flexible seating arrangements',
      satisfaction: 5,
      testimonial: 'Our living room is now the heart of our home. Every guest compliments the beautiful design.',
      client: 'The Mekonnen Family',
      duration: '4 weeks'
    },
    {
      id: 3,
      title: 'Contemporary Restaurant Interior',
      category: 'Commercial',
      style: 'Industrial',
      roomType: 'Restaurant',
      location: 'Kazanchis, Addis Ababa',
      squareFootage: '3,200 sq ft',
      beforeImage: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      afterImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      challenge: 'Design atmospheric dining space that enhances customer experience',
      solution: 'Industrial chic design with warm lighting and acoustic solutions',
      satisfaction: 5,
      testimonial: 'Customer dwell time increased by 25% and our reviews consistently mention the amazing atmosphere.',
      client: 'Addis Bistro',
      duration: '8 weeks'
    },
    {
      id: 4,
      title: 'Minimalist Master Bedroom',
      category: 'Residential',
      style: 'Minimalist',
      roomType: 'Bedroom',
      location: 'CMC, Addis Ababa',
      squareFootage: '400 sq ft',
      beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      afterImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      challenge: 'Maximize small space while creating serene sleeping environment',
      solution: 'Clean lines, neutral palette, and smart storage solutions',
      satisfaction: 5,
      testimonial: 'The bedroom feels twice as large now and so peaceful. Best sleep we\'ve ever had!',
      client: 'Dr. & Mrs. Tadesse',
      duration: '3 weeks'
    },
    {
      id: 5,
      title: 'Modern Hotel Lobby',
      category: 'Commercial',
      style: 'Modern',
      roomType: 'Lobby',
      location: 'Piazza, Addis Ababa',
      squareFootage: '1,800 sq ft',
      beforeImage: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      afterImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      challenge: 'Create impressive first impression for international guests',
      solution: 'Blend Ethiopian cultural elements with contemporary luxury design',
      satisfaction: 5,
      testimonial: 'Guest satisfaction scores improved dramatically. The lobby is now a destination in itself.',
      client: 'Heritage Hotel Addis',
      duration: '10 weeks'
    },
    {
      id: 6,
      title: 'Scandinavian Kitchen Design',
      category: 'Residential',
      style: 'Scandinavian',
      roomType: 'Kitchen',
      location: 'Old Airport, Addis Ababa',
      squareFootage: '300 sq ft',
      beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      afterImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      challenge: 'Modernize outdated kitchen while maintaining functionality',
      solution: 'Light woods, white surfaces, and efficient workflow design',
      satisfaction: 5,
      testimonial: 'Cooking is now a joy! The kitchen is beautiful and so much more functional.',
      client: 'The Girma Family',
      duration: '5 weeks'
    }
  ];

  const designServices = [
    {
      icon: Layers,
      title: 'Space Planning & Layout',
      description: 'Optimize your space for maximum functionality and flow',
      features: ['Floor Plan Design', 'Traffic Flow Analysis', 'Furniture Placement', 'Zoning Strategies']
    },
    {
      icon: Palette,
      title: 'Color Consultation & Paint',
      description: 'Create the perfect color palette for your space',
      features: ['Color Psychology', 'Paint Selection', 'Accent Walls', 'Coordinated Schemes']
    },
    {
      icon: Home,
      title: 'Furniture Selection',
      description: 'Curate furniture pieces that match your style and needs',
      features: ['Custom Furniture', 'Vintage Sourcing', 'Modern Pieces', 'Budget Options']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Illuminate your space with strategic lighting solutions',
      features: ['Ambient Lighting', 'Task Lighting', 'Accent Lighting', 'Smart Controls']
    },
    {
      icon: Settings,
      title: 'Custom Millwork',
      description: 'Bespoke built-in solutions for unique spaces',
      features: ['Built-in Storage', 'Custom Shelving', 'Window Treatments', 'Architectural Details']
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Full project coordination from concept to completion',
      features: ['Contractor Coordination', 'Timeline Management', 'Quality Control', 'Budget Oversight']
    }
  ];

  const designProcess = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Comprehensive space assessment and understanding of your vision, lifestyle, and requirements.',
      icon: Users,
      duration: '1-2 Hours'
    },
    {
      step: 2,
      title: 'Concept Development',
      description: 'Create mood boards, color schemes, and initial design concepts based on your preferences.',
      icon: Lightbulb,
      duration: '1 Week'
    },
    {
      step: 3,
      title: 'Design Presentation',
      description: 'Present detailed design proposals with 3D visualizations and material samples.',
      icon: Monitor,
      duration: '3-5 Days'
    },
    {
      step: 4,
      title: 'Material Selection',
      description: 'Finalize furniture, fixtures, finishes, and all design elements for your space.',
      icon: Palette,
      duration: '1-2 Weeks'
    },
    {
      step: 5,
      title: 'Installation Management',
      description: 'Coordinate all trades and oversee the installation of your new interior design.',
      icon: Settings,
      duration: '2-6 Weeks'
    },
    {
      step: 6,
      title: 'Final Styling',
      description: 'Add finishing touches with accessories, artwork, and styling for the perfect reveal.',
      icon: Star,
      duration: '1-2 Days'
    }
  ];

  const filterCategories = ['All', 'Residential', 'Commercial'];
  const styleFilters = ['All', 'Modern', 'Traditional', 'Industrial', 'Minimalist', 'Scandinavian'];
  const roomFilters = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Restaurant', 'Lobby'];

  const filteredProjects = portfolioProjects.filter(project => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter || 
           project.style === selectedFilter || 
           project.roomType === selectedFilter;
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the consultation request
    alert('Consultation request submitted! We\'ll contact you within 24 hours to schedule your free consultation.');
  };

  const serviceStructuredData = generateServiceStructuredData(
    'Interior Design Portfolio',
    'Transform your space with our professional interior design services featuring residential and commercial projects.',
    designServices.flatMap(service => service.features)
  );

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/services/interior-design-portfolio')}
        type="service"
      />
      
      <StructuredData
        type="service"
        data={serviceStructuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div 
            ref={heroRef}
            className={`text-center max-w-4xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-6">
              <Home size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Space Into Something Extraordinary
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our portfolio of stunning interior design projects that blend functionality with beauty. From residential homes to commercial spaces, see how we create environments that inspire.
            </p>
            <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
              Browse Our Portfolio
              <ArrowRight className="ml-2 inline" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Filter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Interior Design Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Filter by project type, style, or room to find inspiration for your space transformation.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[...filterCategories, ...styleFilters.slice(1), ...roomFilters.slice(1)].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={portfolioRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group ${
                  portfolioVisible.has(index) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Before/After Image Slider */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative">
                      <img 
                        src={project.beforeImage} 
                        alt={`${project.title} - Before`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src={project.afterImage} 
                        alt={`${project.title} - After`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        After
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                      <div className="flex items-center text-sm space-x-4">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.style}</span>
                        <span>•</span>
                        <span>{project.squareFootage}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Location:</span>
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="text-sm font-medium">{project.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Satisfaction:</span>
                      <div className="flex">
                        {Array.from({ length: project.satisfaction }, (_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-600 mb-2">{project.challenge}</p>
                    <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-600">{project.solution}</p>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-[#FF6B35] hover:bg-[#4ECDC4] text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <Eye size={16} className="mr-2" />
                    View Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Project Showcase */}
      {selectedProject && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Images */}
                <div className="relative">
                  <img 
                    src={selectedProject.afterImage} 
                    alt={selectedProject.title}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                {/* Project Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <span className="bg-[#FF6B35] text-white px-2 py-1 rounded">{selectedProject.category}</span>
                      <span>{selectedProject.style}</span>
                      <span>{selectedProject.squareFootage}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Project Background:</h4>
                      <p className="text-gray-700">{selectedProject.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                      <p className="text-gray-700">{selectedProject.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Project Details:</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Location:</span>
                          <p className="font-medium">{selectedProject.location}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Duration:</span>
                          <p className="font-medium">{selectedProject.duration}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Client:</span>
                          <p className="font-medium">{selectedProject.client}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Satisfaction:</span>
                          <div className="flex">
                            {Array.from({ length: selectedProject.satisfaction }, (_, i) => (
                              <Star key={i} size={14} className="text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Client Testimonial */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Quote className="text-[#FF6B35] mr-2" size={20} />
                      <span className="font-semibold text-gray-900">Client Testimonial</span>
                    </div>
                    <p className="text-gray-700 italic">"{selectedProject.testimonial}"</p>
                    <p className="text-sm text-gray-600 mt-2">- {selectedProject.client}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Design Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Interior Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design services to transform every aspect of your space.
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
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Transform Your Space</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-step process ensures your design project is completed smoothly and exceeds expectations.
            </p>
          </div>
          
          <div 
            ref={processRef}
            className="max-w-4xl mx-auto"
          >
            {designProcess.map((step, index) => (
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
                    <span className="ml-auto text-sm text-[#FF6B35] font-medium">{step.duration}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say About Their Transformations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from clients who trusted us with their space transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioProjects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: project.satisfaction }, (_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="mb-4">
                  <img 
                    src={project.afterImage} 
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{project.testimonial}"</p>
                
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{project.client}</p>
                  <p className="text-gray-600 text-sm">{project.title}</p>
                  <p className="text-[#FF6B35] text-sm font-medium">{project.category} Project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Booking */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Space?</h2>
              <p className="text-xl text-gray-600">
                Book your free consultation and let's discuss how we can bring your vision to life.
              </p>
            </div>
            
            <form onSubmit={handleConsultationSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select 
                    value={consultationForm.projectType}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, projectType: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="both">Both Residential & Commercial</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Space Type</label>
                  <select 
                    value={consultationForm.spaceType}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, spaceType: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Space Type</option>
                    <option value="living-room">Living Room</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="office">Office</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hotel</option>
                    <option value="entire-home">Entire Home</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Square Footage</label>
                  <select 
                    value={consultationForm.squareFootage}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, squareFootage: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Square Footage</option>
                    <option value="under-500">Under 500 sq ft</option>
                    <option value="500-1000">500 - 1,000 sq ft</option>
                    <option value="1000-2000">1,000 - 2,000 sq ft</option>
                    <option value="2000-5000">2,000 - 5,000 sq ft</option>
                    <option value="over-5000">Over 5,000 sq ft</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Style Preference</label>
                  <select 
                    value={consultationForm.style}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, style: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                  >
                    <option value="">Select Style (Optional)</option>
                    <option value="modern">Modern</option>
                    <option value="traditional">Traditional</option>
                    <option value="industrial">Industrial</option>
                    <option value="minimalist">Minimalist</option>
                    <option value="scandinavian">Scandinavian</option>
                    <option value="eclectic">Eclectic</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select 
                    value={consultationForm.budget}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select 
                    value={consultationForm.timeline}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP (Rush Project)</option>
                    <option value="1-month">Within 1 Month</option>
                    <option value="3-months">Within 3 Months</option>
                    <option value="6-months">Within 6 Months</option>
                    <option value="flexible">Flexible Timeline</option>
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#4ECDC4] text-white py-3 rounded-lg font-medium transition-colors"
              >
                Schedule Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Dream Space?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's transform your space into something extraordinary that reflects your style and enhances your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Your Design Journey
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-3 rounded-lg font-medium transition-colors">
              View More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesignPortfolio;