import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-[#F7F9F9] to-white pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={heroRef}
            className={`space-y-6 ${heroVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] leading-tight">
              Empowering Your Vision with{' '}
              <span className="text-[#FF6B35] bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent animate-pulse-glow">
                Design, Development & Digital Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              From graphic design to app development and engineering services — Tabor Digital Solutions delivers what your business needs to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/portfolio" 
                className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:scale-105 transform"
              >
                Start a Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
              >
                Request a Free Consultation
              </Link>
            </div>
          </div>
          <div 
            ref={imageRef}
            className={`hidden lg:block ${imageVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
          >
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dlv8bqq37/image/upload/v1751367081/hero_new_e1prah.png" 
                alt="Team collaboration on digital projects" 
                className="rounded-lg shadow-2xl object-cover w-full h-[500px] hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF6B35] rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#4ECDC4] rounded-full opacity-30 animate-bounce-gentle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;