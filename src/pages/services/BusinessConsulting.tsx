import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle, ArrowRight, LineChart, Users, Target } from 'lucide-react';

const BusinessConsulting = () => {
  const services = [
    {
      icon: LineChart,
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies for sustainable growth",
      features: [
        "Market Analysis",
        "Business Model Design",
        "Growth Strategy",
        "Risk Assessment",
        "Financial Planning",
        "Performance Metrics"
      ]
    },
    {
      icon: Users,
      title: "Operational Excellence",
      description: "Optimize your business processes and organizational structure",
      features: [
        "Process Optimization",
        "Team Structure",
        "Resource Management",
        "Quality Control",
        "Cost Reduction",
        "Efficiency Metrics"
      ]
    },
    {
      icon: Target,
      title: "Business Transformation",
      description: "Guide your business through successful digital transformation",
      features: [
        "Digital Strategy",
        "Change Management",
        "Technology Integration",
        "Staff Training",
        "Implementation Support",
        "Progress Monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="mb-6">
                <Briefcase className="text-[#FF6B35]" size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Business Consulting Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with expert guidance and strategic solutions tailored to your unique challenges and opportunities.
              </p>
              <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                Schedule a Strategy Session
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Business Consulting" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-[#FF6B35] transition-all">
                <div className="mb-4">
                  <service.icon className="text-[#FF6B35]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="text-[#FF6B35] mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Technology',
              'Manufacturing',
              'Retail',
              'Healthcare',
              'Finance',
              'Education',
              'Real Estate',
              'Agriculture'
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B35] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to unlock your business's full potential.
          </p>
          <button className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;