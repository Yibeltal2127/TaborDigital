import React, { useEffect } from 'react';
import MetaTags from '../components/SEO/MetaTags';
import StructuredData from '../components/SEO/StructuredData';
import TeamSection from '../components/TeamSection';
import { Award, Users, Globe, TrendingUp, CheckCircle } from 'lucide-react';
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
      number: "Africa+",
      label: "Regional Focus",
      description: "Expanding across Africa and beyond"
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
      description: "Expanding across Africa with comprehensive engineering and digital solutions"
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

      {/* Hero Section */}
      <section id="story" className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Tabor Engineering & Digital Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              With over five years of experience as Eagle Consulting Architects and Engineers, we built our foundation on precision, creativity, and client trust. Today, as Tabor Engineering & Digital Solutions, we have expanded our expertise beyond engineering into the digital space, creating a company that seamlessly integrates engineering design, technology, and business strategy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF6B35] text-white rounded-full mb-3">
                    <achievement.icon size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                  <div className="text-sm font-medium text-gray-700">{achievement.label}</div>
                  <div className="text-xs text-gray-500">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://res.cloudinary.com/dbn8jx8bh/image/upload/v1751367782/ta_hero_qgx3l5.jpg" 
                alt="Our Mission" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#FF6B35] mb-3">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses and individuals with innovative engineering and digital solutions that blend creativity, precision, and technology—driving growth, efficiency, and long-term success.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#FF6B35] mb-3">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become a leading engineering and digital solutions provider in Africa and beyond, recognized for transforming challenges into opportunities and enabling clients to thrive in an ever-evolving world.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  "From architectural design to web development",
                  "Structural analysis and digital marketing",
                  "MEP design and business consulting",
                  "Interior design and app development"
                ].map((principle, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-[#FF6B35] mr-3" size={20} />
                    <span className="text-gray-700">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 mb-8">
              We are a multidisciplinary team of engineers, designers, developers, and strategists, united by a shared passion for building and innovating. Every project we take on is approached with a balance of technical expertise, creativity, and business insight. More than service providers, we are partners in your growth journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">Innovation with Purpose</h3>
                <p className="text-gray-700 mb-4">Delivering solutions that are practical, scalable, and future-ready.</p>
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">Excellence in Execution</h3>
                <p className="text-gray-700 mb-4">Upholding the highest standards in both engineering and digital services.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">Client-Centered Partnership</h3>
                <p className="text-gray-700 mb-4">Building trust through transparency, collaboration, and measurable results.</p>
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">Sustainable Growth</h3>
                <p className="text-gray-700 mb-4">Creating solutions that not only solve today's problems but prepare businesses for tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Eagle Consulting Architects and Engineers to Tabor Engineering & Digital Solutions, here's how we've evolved and expanded our expertise over the years.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FF6B35]"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full font-bold text-lg">
                      {milestone.year}
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team">
      <TeamSection />
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B35] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey with Us?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Tabor Engineering & Digital Solutions is more than a service provider—we are your trusted partner in engineering, technology, and business transformation.
          </p>
          <button className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;