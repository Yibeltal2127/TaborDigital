import React from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
// import NewsletterForm from './NewsletterForm';

const CTABanner = () => {
  return (
    <section className="py-8 bg-[#FF6B35] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B35]/50 rounded-full -mr-16 -mt-16 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#4ECDC4]/50 rounded-full -ml-16 -mb-16 opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col gap-6 items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="flex items-center">
            <Lightbulb className="text-yellow-300 mr-4 hidden sm:block" size={32} />
            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
              Not sure where to start? We'll guide you.
            </h2>
          </div>
          
          <Link
            to="/contact"
            className="bg-white text-[#FF6B35] hover:bg-orange-50 px-6 py-2 rounded-lg font-medium transition-all flex items-center whitespace-nowrap group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
        {/* Newsletter Form removed from here */}
      </div>
    </section>
  );
};

export default CTABanner;