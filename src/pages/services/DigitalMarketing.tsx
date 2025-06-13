import React from 'react';
import { BarChart3, CheckCircle, ArrowRight, Target, Megaphone, LineChart } from 'lucide-react';

const DigitalMarketing = () => {
  const services = [
    {
      icon: Target,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility and ranking on search engines",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Content Strategy",
        "Link Building",
        "Performance Tracking"
      ]
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Build and engage your audience across social platforms",
      features: [
        "Platform Strategy",
        "Content Creation",
        "Community Management",
        "Paid Advertising",
        "Influencer Partnerships",
        "Analytics & Reporting"
      ]
    },
    {
      icon: LineChart,
      title: "Performance Marketing",
      description: "Drive measurable results through targeted campaigns",
      features: [
        "PPC Advertising",
        "Email Marketing",
        "Conversion Optimization",
        "Marketing Automation",
        "Lead Generation",
        "ROI Tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="mb-6">
                <BarChart3 className="text-[#FF6B35]" size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Digital Marketing Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Drive growth and reach your target audience with data-driven digital marketing strategies tailored to your business goals.
              </p>
              <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                Start Your Marketing Campaign
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Digital Marketing Strategy" 
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

      {/* Marketing Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Platforms We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Google Ads', 'Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok', 'YouTube', 'Email'].map((platform, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B35] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Grow Your Online Presence?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that drives real results for your business.
          </p>
          <button className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Get Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;