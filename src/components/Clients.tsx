import React from 'react';
import { Building, Rocket, Construction, ShoppingBag, HeartHandshake, LucideIcon } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface ClientSegmentProps {
  icon: LucideIcon;
  title: string;
  index: number;
  isVisible: boolean;
}

const ClientSegment = ({ icon, title, index, isVisible }: ClientSegmentProps) => {
  const Icon = icon;
  
  return (
    <div 
      className={`flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 group hover:scale-105 transform ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-3 bg-[#E5E8E8] rounded-full mb-4 group-hover:bg-[#4ECDC4] transition-all duration-300 group-hover:scale-110 transform">
        <Icon className="text-[#4ECDC4] group-hover:text-white transition-colors duration-300" size={32} />
      </div>
      <h3 className="text-lg font-semibold text-center text-[#2C3E50] group-hover:text-[#FF6B35] transition-colors duration-300">{title}</h3>
    </div>
  );
};

const Clients = () => {
  const clientSegments = [
    { icon: Building, title: "Small Businesses" },
    { icon: Rocket, title: "Startups" },
    { icon: Construction, title: "Construction Firms" },
    { icon: ShoppingBag, title: "eCommerce Entrepreneurs" },
    { icon: HeartHandshake, title: "NGOs & Education Sector" }
  ];

  const { containerRef, visibleItems } = useStaggeredAnimation(clientSegments.length, 120);

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50] animate-fade-in-down">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            We work with startups, business owners, real estate firms, contractors, and visionary entrepreneurs across Ethiopia and beyond.
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
        >
          {clientSegments.map((segment, index) => (
            <ClientSegment
              key={index}
              icon={segment.icon}
              title={segment.title}
              index={index}
              isVisible={visibleItems.has(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;