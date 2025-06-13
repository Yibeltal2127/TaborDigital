import React from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-16 bg-[#FF6B35] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/50 rounded-full -mr-32 -mt-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4ECDC4]/50 rounded-full -ml-32 -mb-32 opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <Lightbulb className="text-yellow-300 mr-4 hidden sm:block" size={36} />
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Not sure where to start? We'll guide you.
            </h2>
          </div>
          
          <a
            href="#contact"
            className="bg-white text-[#FF6B35] hover:bg-orange-50 px-8 py-3 rounded-lg font-medium transition-all flex items-center whitespace-nowrap group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;