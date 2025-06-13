import React from 'react';
import { Code, CheckCircle, ArrowRight, Globe, Shield, Smartphone } from 'lucide-react';

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Development",
      description: "Tailored websites that perfectly match your business needs",
      features: [
        "Responsive Design",
        "Custom Functionality",
        "Content Management System",
        "SEO Optimization",
        "Performance Optimization",
        "Analytics Integration"
      ]
    },
    {
      icon: Shield,
      title: "Web Applications",
      description: "Powerful web applications that streamline your business processes",
      features: [
        "User Authentication",
        "Database Integration",
        "API Development",
        "Real-time Features",
        "Payment Integration",
        "Admin Dashboard"
      ]
    },
    {
      icon: Smartphone,
      title: "E-commerce Solutions",
      description: "Complete online shopping platforms for your business",
      features: [
        "Product Management",
        "Shopping Cart",
        "Secure Checkout",
        "Inventory System",
        "Order Management",
        "Customer Accounts"
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
                <Code className="text-[#FF6B35]" size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web Development Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your online presence with custom web solutions. We build modern, fast, and scalable websites and applications.
              </p>
              <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                Start Your Web Project
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Web Development" 
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

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js', 'PostgreSQL', 'AWS', 'Docker'].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B35] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's create a website that drives results for your business.
          </p>
          <button className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;