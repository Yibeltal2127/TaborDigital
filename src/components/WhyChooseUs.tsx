import React, { RefObject } from 'react';
import { CheckCircle, Users, Globe, Sparkles, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, index }) => {
  const Icon = icon;
  
  return (
    <div 
      className={`flex items-start group animate-fade-in-up`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-[#4ECDC4] group-hover:text-[#FF6B35] transition-colors duration-300" size={24} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#2C3E50] group-hover:text-[#FF6B35] transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3 }) as { elementRef: RefObject<HTMLDivElement>, isVisible: boolean };
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 }) as { elementRef: RefObject<HTMLDivElement>, isVisible: boolean };

  const features = [
    {
      icon: Globe,
      title: "Local Expertise with Global Quality",
      description: "We combine deep knowledge of the Ethiopian market with international design and development standards."
    },
    {
      icon: Users,
      title: "Multi-disciplinary Team",
      description: "Our diverse team brings together expertise in tech, design, and business for holistic solutions."
    },
    {
      icon: CheckCircle,
      title: "Affordable and Scalable Packages",
      description: "Flexible service packages that grow with your business needs and budget constraints."
    },
    {
      icon: Sparkles,
      title: "Support for Startups & SMEs",
      description: "Specialized services and guidance for emerging businesses and young entrepreneurs."
    },
    {
      icon: MessageCircle,
      title: "Flexible Communication",
      description: "Reach us via Telegram, email, or phone - we adapt to your preferred communication channels."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div 
            ref={imageRef as RefObject<HTMLDivElement>}
            className={`lg:w-1/2 ${imageVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dbn8jx8bh/image/upload/v1751367782/ta_hero_qgx3l5.jpg" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] hover:scale-105 transition-transform duration-700"
              />
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-[#4ECDC4] rounded-full opacity-30 animate-bounce-gentle"></div>
            </div>
          </div>
          
          <div 
            ref={contentRef as RefObject<HTMLDivElement>}
            className={`lg:w-1/2 ${contentVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]">Why Choose Tabor?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're more than just a digital agency - we're your partner in growth, innovation, and success.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;