import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    quote: "Tabor Engineering & Digital Solutions transformed our business with comprehensive engineering and digital solutions. Their team understood our vision perfectly.",
    author: "Abebe Kebede",
    position: "Founder, Green Ethiopia Ventures",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    quote: "The architectural designs they created for our new office complex exceeded our expectations in both aesthetics and functionality.",
    author: "Sara Mohammed",
    position: "Director, Sunrise Properties",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    quote: "Their marketing strategy helped us increase online sales by 180% in just six months. They truly understand the digital landscape.",
    author: "Daniel Mekonnen",
    position: "CEO, TechVision Ethiopia",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-700 transform ${
      isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0 absolute'
    }`}>
      <div className="flex justify-center mb-6">
        <div className="bg-[#E5E8E8] p-3 rounded-full animate-pulse-glow">
          <Quote className="text-[#4ECDC4]" size={24} />
        </div>
      </div>
      
      <p className="text-gray-700 mb-6 text-center italic text-lg leading-relaxed">"{testimonial.quote}"</p>
      
      <div className="flex items-center justify-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.author} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-[#FF6B35] shadow-lg"
        />
        <div>
          <h4 className="font-bold text-[#2C3E50] text-lg">{testimonial.author}</h4>
          <p className="text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { elementRef, isVisible } = useScrollAnimation();

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-[#F7F9F9]">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={elementRef}
          className={`text-center mb-12 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped succeed.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          {/* Testimonial Carousel */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === currentIndex}
              />
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#FF6B35] text-[#FF6B35] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#FF6B35] text-[#FF6B35] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#FF6B35] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-[#FF6B35] transition-colors duration-300"
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;