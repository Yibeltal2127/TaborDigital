import React from 'react';
import { CalendarCheck, FileText, Laptop, FileCheck, Rocket } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const ProcessStep = ({ icon, title, description, step, isLast, index, isVisible }) => {
  const Icon = icon;
  
  return (
    <div 
      className={`relative flex items-start group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-10 left-6 bottom-0 w-0.5 bg-[#E5E8E8] group-hover:bg-[#4ECDC4] transition-colors duration-500" />
      )}
      
      {/* Icon & Content */}
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E5E8E8] group-hover:bg-[#4ECDC4] transition-all duration-500 group-hover:scale-110 transform">
          <Icon className="text-[#4ECDC4] group-hover:text-white transition-colors duration-500" size={24} />
        </div>
        <div className="mt-2 w-6 h-6 rounded-full bg-[#4ECDC4] text-white flex items-center justify-center text-sm font-bold group-hover:bg-[#FF6B35] transition-colors duration-300 group-hover:scale-110 transform">
          {step}
        </div>
      </div>
      
      <div className="pt-2 flex-1">
        <h3 className="text-xl font-bold mb-2 text-[#2C3E50] group-hover:text-[#4ECDC4] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      icon: CalendarCheck,
      title: "Book a Free Consultation",
      description: "Schedule a 20-minute call to discuss your needs, goals, and vision. No commitment required."
    },
    {
      icon: FileText,
      title: "Get a Custom Proposal",
      description: "We'll prepare a tailored proposal outlining scope, timeline, and investment required for your project."
    },
    {
      icon: Laptop,
      title: "We Design, Build, or Consult",
      description: "Our team gets to work, creating your solution with regular updates and transparency throughout."
    },
    {
      icon: FileCheck,
      title: "Review & Refine",
      description: "Provide feedback on deliverables, and we'll make necessary adjustments to ensure your complete satisfaction."
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We'll help you launch your project and provide ongoing support to ensure long-term success."
    }
  ];

  const { containerRef, visibleItems } = useStaggeredAnimation(steps.length, 200);

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-[#F7F9F9] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50] animate-fade-in-down">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Our streamlined process makes working with us simple, transparent, and effective.
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="max-w-4xl mx-auto space-y-12"
        >
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
              isLast={index === steps.length - 1}
              index={index}
              isVisible={visibleItems.has(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;