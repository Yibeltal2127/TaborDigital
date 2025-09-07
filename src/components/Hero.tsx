import React, { RefObject } from 'react';
import { ArrowRight, Star, CheckCircle, Rocket, Award, Users, TrendingUp, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation() as { elementRef: RefObject<HTMLDivElement>, isVisible: boolean };
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 }) as { elementRef: RefObject<HTMLDivElement>, isVisible: boolean };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-orange-50 pt-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/5 to-[#4ECDC4]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#4ECDC4]/5 to-[#FF6B35]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FF6B35]/3 to-[#4ECDC4]/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div 
            ref={heroRef as RefObject<HTMLDivElement>}
            className={`space-y-8 ${heroVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF6B35]/10 to-[#4ECDC4]/10 backdrop-blur-md rounded-full border border-[#FF6B35]/20">
              <Star className="w-5 h-5 text-[#FF6B35] mr-2" />
              <span className="text-gray-800 font-semibold">Trusted by 100+ Businesses in Ethiopia</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              <span className="block">Transform Your</span>
              <span className="block bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent">
                Business Vision
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mt-2">
                Into Reality
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              From <span className="text-[#FF6B35] font-bold">engineering design</span> to <span className="text-[#4ECDC4] font-bold">digital innovation</span> — 
              We deliver comprehensive solutions that drive growth and success for Ethiopian businesses.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: "5+ Years Experience" },
                { icon: CheckCircle, text: "100+ Projects Delivered" },
                { icon: CheckCircle, text: "95% Client Satisfaction" },
                { icon: CheckCircle, text: "24/7 Support Available" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] rounded-full flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Rocket className="mr-2" size={20} />
                  Start Your Project Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/portfolio" 
                className="group bg-white/80 backdrop-blur-md text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
              >
                <span className="flex items-center justify-center">
                  <Award className="mr-2" size={20} />
                  View Our Work
                </span>
              </Link>
            </div>

          </div>

          {/* Right Content - Enhanced Visual */}
          <div 
            ref={imageRef as RefObject<HTMLDivElement>}
            className={`${imageVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <img 
                  src="https://res.cloudinary.com/dlv8bqq37/image/upload/v1751367081/hero_new_e1prah.png" 
                  alt="Team collaboration on digital projects" 
                  className="rounded-2xl object-cover w-full h-[400px] md:h-[500px] lg:h-[600px] hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">100+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B35] rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">5+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B35] rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] rounded-full opacity-25 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;