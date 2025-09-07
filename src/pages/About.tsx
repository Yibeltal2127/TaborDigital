import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/SEO/MetaTags';
import StructuredData from '../components/SEO/StructuredData';
import TeamSection from '../components/TeamSection';
import { Award, Users, Globe, TrendingUp, CheckCircle, ArrowRight, Star, Target, Zap, Shield, Heart, Lightbulb, Rocket, Palette } from 'lucide-react';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl } from '../utils/seo';
import { scrollToTop } from '../utils/smoothScroll';

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const pageTitle = generatePageTitle('About Us - Our Story, Team & Values');
  const pageDescription = generateMetaDescription(
    'Learn about Tabor Engineering & Digital Solutions - our story, mission, values, and the passionate team behind Ethiopia\'s leading engineering and digital agency. Discover how we\'ve helped businesses grow with over 5 years of experience.'
  );
  const pageKeywords = generateKeywords(['about us', 'our story', 'team', 'mission', 'values', 'company history']);

  const achievements = [
    {
      icon: Users,
      number: "5+",
      label: "Years Experience",
      description: "As Eagle Consulting Architects and Engineers"
    },
    {
      icon: Award,
      number: "100+",
      label: "Projects Completed",
      description: "Engineering and digital solutions delivered"
    },
    {
      icon: Globe,
      number: "Ethiopia+",
      label: "Regional Focus",
      description: "Expanding across Ethiopia and beyond"
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Client Satisfaction",
      description: "Trusted partner in growth journey"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Eagle Consulting Founded",
      description: "Started as Eagle Consulting Architects and Engineers with focus on precision and client trust"
    },
    {
      year: "2020",
      title: "Engineering Excellence",
      description: "Established expertise in architectural design, structural analysis, and MEP design"
    },
    {
      year: "2022",
      title: "Digital Expansion",
      description: "Expanded into web development, graphic design, and digital marketing services"
    },
    {
      year: "2023",
      title: "Integrated Solutions",
      description: "Became Tabor Engineering & Digital Solutions, combining engineering and technology"
    },
    {
      year: "2024",
      title: "Regional Growth",
      description: "Expanding across Ethiopia with comprehensive engineering and digital solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/about')}
        type="website"
      />
      
      <StructuredData
        type="organization"
        data={{}}
      />

      {/* Modern Hero Section */}
      <section id="story" className="pt-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/5 to-[#4ECDC4]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#4ECDC4]/5 to-[#FF6B35]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FF6B35]/3 to-[#4ECDC4]/3 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Engineering Excellence
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent">
                Meets Digital Innovation
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              From <span className="text-[#FF6B35] font-bold">Eagle Consulting</span> to <span className="text-[#4ECDC4] font-bold">Tabor Engineering & Digital Solutions</span> - 
              We've evolved from precision engineering to comprehensive digital transformation, 
              delivering solutions that bridge the gap between traditional engineering and cutting-edge technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Rocket className="mr-2" size={20} />
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/portfolio" 
                className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform"
              >
                <span className="flex items-center justify-center">
                  <Award className="mr-2" size={20} />
                  View Our Work
                </span>
              </Link>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white rounded-2xl mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <achievement.icon size={28} />
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-sm font-bold text-gray-700 mb-1">{achievement.label}</div>
                  <div className="text-xs text-gray-500">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF6B35]/10 rounded-full mb-6">
              <Target className="w-5 h-5 text-[#FF6B35] mr-2" />
              <span className="text-[#FF6B35] font-semibold">Our Purpose</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Mission & Vision
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation through the perfect fusion of engineering excellence and digital transformation
                </p>
              </div>
              
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:scale-105 transform">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To empower businesses and individuals with innovative engineering and digital solutions that blend creativity, precision, and technology—driving growth, efficiency, and long-term success.
                </p>
                <div className="flex items-center text-[#FF6B35] font-bold">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B35] rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:scale-105 transform">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B35] rounded-2xl flex items-center justify-center mr-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To become a leading engineering and digital solutions provider in Ethiopia and beyond, recognized for transforming challenges into opportunities and enabling clients to thrive in an ever-evolving world.
                </p>
                <div className="flex items-center text-[#4ECDC4] font-bold">
                  <span>Explore Our Impact</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </div>
              </div>
            </div>
              </div>
              
          {/* Services Grid */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Deliver</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: Target, text: "Engineering Design", color: "from-[#FF6B35] to-[#FF8C42]" },
                { icon: Zap, text: "Web and App Development", color: "from-[#4ECDC4] to-[#44A08D]" },
                { icon: Palette, text: "Graphic Design", color: "from-[#FF6B35] to-[#FF6B9D]" },
                { icon: Shield, text: "Digital Marketing", color: "from-[#4ECDC4] to-[#44A08D]" },
                { icon: Lightbulb, text: "Business Consulting", color: "from-[#4ECDC4] to-[#667eea]" }
              ].map((service, index) => (
                <div key={index} className="group text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-semibold text-gray-800 group-hover:text-[#FF6B35] transition-colors duration-300">{service.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Values Section */}
      <section id="values" className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#FF6B35] to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-[#4ECDC4] to-transparent rounded-full blur-3xl opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Heart className="w-5 h-5 text-[#FF6B35] mr-2" />
              <span className="text-white font-semibold">Our Core Values</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What Drives Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a multidisciplinary team of engineers, designers, developers, and strategists, united by a shared passion for building and innovating. Every project we take on is approached with a balance of technical expertise, creativity, and business insight.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation with Purpose",
                description: "Delivering solutions that are practical, scalable, and future-ready.",
                color: "from-[#FF6B35] to-[#FF8C42]",
                bgColor: "bg-[#FF6B35]/10"
              },
              {
                icon: Award,
                title: "Excellence in Execution",
                description: "Upholding the highest standards in both engineering and digital services.",
                color: "from-[#4ECDC4] to-[#44A08D]",
                bgColor: "bg-[#4ECDC4]/10"
              },
              {
                icon: Heart,
                title: "Client-Centered Partnership",
                description: "Building trust through transparency, collaboration, and measurable results.",
                color: "from-[#FF6B35] to-[#FF6B9D]",
                bgColor: "bg-[#FF6B35]/10"
              },
              {
                icon: TrendingUp,
                title: "Sustainable Growth",
                description: "Creating solutions that not only solve today's problems but prepare businesses for tomorrow.",
                color: "from-[#4ECDC4] to-[#667eea]",
                bgColor: "bg-[#4ECDC4]/10"
              }
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
              </div>
                  <h3 className="text-xl font-black text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 mb-8">
              More than service providers, we are <span className="text-[#FF6B35] font-bold">partners in your growth journey</span>.
            </p>
            <Link 
              to="/contact" 
              className="group inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
            >
              <span className="flex items-center">
                <Rocket className="mr-2" size={20} />
                Partner With Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Company Timeline */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF6B35]/10 rounded-full mb-6">
              <TrendingUp className="w-5 h-5 text-[#FF6B35] mr-2" />
              <span className="text-[#FF6B35] font-semibold">Our Evolution</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From Eagle Consulting Architects and Engineers to Tabor Engineering & Digital Solutions, here's how we've evolved and expanded our expertise over the years.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Enhanced Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B35] via-[#4ECDC4] to-[#FF6B35] rounded-full"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
                        <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white rounded-full font-bold text-sm mb-4 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      {milestone.year}
                    </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Future Vision */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white rounded-2xl font-bold text-lg mb-6">
              <Rocket className="mr-2" size={20} />
              The Future is Bright
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">What's Next?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're continuously expanding our capabilities and exploring new frontiers in engineering and digital innovation. 
              The journey from Eagle Consulting to Tabor Engineering & Digital Solutions is just the beginning.
            </p>
            <Link 
              to="/contact" 
              className="group inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
            >
              <span className="flex items-center">
                <ArrowRight className="mr-2" size={20} />
                Be Part of Our Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B35] via-[#FF8C42] to-[#4ECDC4] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to Transform Your Vision Into Reality?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join the 100+ businesses that trust Tabor Engineering & Digital Solutions to deliver 
              innovative engineering and digital solutions that drive growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-white text-[#FF6B35] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Rocket className="mr-2" size={20} />
                  Start Your Project Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/portfolio" 
                className="group bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 transform"
              >
                <span className="flex items-center">
                  <Award className="mr-2" size={20} />
                  View Our Success Stories
                </span>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">5+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">100+ Projects Delivered</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">95% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team">
      <TeamSection />
      </section>

    </div>
  );
};

export default About;