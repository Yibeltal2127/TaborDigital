import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Layout, Smartphone, Home, TrendingUp, Settings, Palette, ChevronDown, ArrowRight, LucideIcon, BarChart3 } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  features: string[];
  index: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, features, index, isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = icon;
  
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#FF6B35] group hover:scale-105 transform ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-start">
        <div className="mb-4 p-3 bg-orange-50 rounded-full inline-block group-hover:bg-orange-100 transition-colors duration-300 group-hover:scale-110 transform">
          <Icon className="text-[#FF6B35] transition-transform duration-300 group-hover:rotate-12" size={24} />
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300 hover:scale-110 transform"
        >
          <ChevronDown 
            size={20} 
            className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#FF6B35] transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      {/* Dropdown Content */}
      <div className={`space-y-2 transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="border-t border-gray-100 pt-4 mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">Our Offerings:</h4>
          <ul className="space-y-2">
            {features.map((service: string, idx: number) => (
              <li key={idx} className="flex items-center text-gray-600 hover:text-[#FF6B35] transition-colors duration-300 transform hover:translate-x-2">
                <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mr-2 animate-pulse"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Link
          to={link}
          className="inline-flex items-center text-[#FF6B35] hover:text-[#4ECDC4] font-medium transition-all duration-300 group"
        >
          Learn More
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  features: string[];
}

const Services = () => {
  const services: Service[] = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
      link: "/services/seo",
      features: [
        "On-Page SEO",
        "Technical SEO",
        "Keyword Research",
        "Link Building",
        "Local SEO",
        "SEO Audits"
      ]
    },
    {
      icon: Layout,
      title: "Website Design Packages",
      description: "Professional website design packages that convert visitors into customers with modern design.",
      link: "/services/website-design-packages",
      features: [
        "Essential Website Package",
        "Professional Website Package",
        "Premium Website Package",
        "E-commerce Integration",
        "Mobile Optimization",
        "Performance Optimization"
      ]
    },
    {
      icon: Smartphone,
      title: "App Development Process",
      description: "Experience our streamlined app development process from concept to deployment.",
      link: "/services/app-development-process",
      features: [
        "Native App Development",
        "Cross-Platform Development",
        "UI/UX Design",
        "API Integration",
        "Testing & QA",
        "App Store Optimization"
      ]
    },
    {
      icon: Home,
      title: "Interior Design Portfolio",
      description: "Explore our stunning interior design projects and transform your spaces.",
      link: "/services/interior-design-portfolio",
      features: [
        "Residential Design",
        "Commercial Design",
        "3D Visualization",
        "Space Planning",
        "Material Selection",
        "Project Management"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Strategy Services",
      description: "Strategic guidance to help your business grow and succeed in the digital age.",
      link: "/services/business-strategy",
      features: [
        "Business Planning",
        "Market Analysis",
        "Growth Strategy",
        "Digital Transformation",
        "Process Optimization",
        "Performance Metrics"
      ]
    },
    {
      icon: Settings,
      title: "Engineering Design",
      description: "Professional engineering design services for various industries and projects.",
      link: "/services/engineering-design",
      features: [
        "CAD Modeling",
        "Technical Documentation",
        "Product Development",
        "Prototype Design",
        "Quality Control",
        "Project Management"
      ]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative graphic design solutions for your brand identity and marketing materials.",
      link: "/services/graphic-design",
      features: [
        "Brand Identity Design",
        "Logo Design",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Digital Illustrations"
      ]
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence, drive traffic, and generate leads.",
      link: "/services/digital-marketing",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing (SMM)",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting"
      ]
    }
  ];

  const { containerRef, visibleItems } = useStaggeredAnimation(services.length, 150);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 animate-fade-in-down">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Discover our comprehensive range of digital and design services
          </p>
        </div>
        
        <div 
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              features={service.features}
              index={index}
              isVisible={visibleItems.has(index)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive digital solutions can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;