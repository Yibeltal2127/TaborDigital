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
    'Learn about Tabor Digital Solutions - our story, mission, values, and the passionate team behind Ethiopia\'s leading digital agency. Discover how we\'ve helped 200+ businesses grow since 2020.'
  );
  const pageKeywords = generateKeywords(['about us', 'our story', 'team', 'mission', 'values', 'company history']);

  const achievements = [
    {
      icon: Users,
      number: "200+",
      label: "Happy Clients",
      description: "Businesses we've helped grow"
    },
    {
      icon: Award,
      number: "500+",
      label: "Projects Completed",
      description: "Successful deliveries across all services"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Cities Served",
      description: "Across Ethiopia and beyond"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Client Satisfaction",
      description: "Based on project feedback"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to empower Ethiopian businesses through digital innovation"
    },
    {
      year: "2021",
      title: "First 50 Clients",
      description: "Reached our first major milestone with diverse client portfolio"
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to a team of 15+ specialists across all service areas"
    },
    {
      year: "2023",
      title: "Regional Recognition",
      description: "Became a leading digital agency in the Horn of Africa region"
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched our innovation lab for emerging technologies"
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
              About Tabor Digital Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're more than just a digital agency. We're your partners in growth, innovation, and success. 
              Since 2020, we've been helping Ethiopian businesses transform their operations and reach new heights through technology and design.
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
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Mission" 
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#FF6B35] mb-3">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower Ethiopian businesses with innovative digital solutions that drive growth, 
                  enhance efficiency, and create lasting value for our clients and their communities.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#FF6B35] mb-3">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading digital transformation partner in Ethiopia, recognized for our 
                  excellence, innovation, and commitment to client success.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  "Client-first approach in everything we do",
                  "Continuous innovation and learning",
                  "Sustainable business practices",
                  "Community impact and social responsibility"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 mb-8">
              At Tabor Digital Solutions, our values guide every decision and action. We believe in:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">Integrity</h3>
                <p className="text-gray-700 mb-4">We are honest, transparent, and committed to doing what's best for our clients and our company.</p>
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">Innovation</h3>
                <p className="text-gray-700 mb-4">We constantly seek new and better ways to serve our clients and grow our business.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">Collaboration</h3>
                <p className="text-gray-700 mb-4">We work together, across boundaries, to meet the needs of our customers and to help our company win.</p>
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">Excellence</h3>
                <p className="text-gray-700 mb-4">We strive for excellence in everything we do, delivering outstanding results for our clients.</p>
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
              From a small startup to a leading digital agency, here's how we've grown and evolved over the years.
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
            Let's work together to transform your business and achieve your goals.
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