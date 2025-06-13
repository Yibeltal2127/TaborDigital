import React from 'react';
import { Home, CheckCircle, ArrowRight, Sofa, Building, Palette } from 'lucide-react';

const InteriorDesign = () => {
  const services = [
    {
      icon: Sofa,
      title: "Residential Design",
      description: "Create beautiful and functional living spaces for homes",
      features: [
        "Space Planning",
        "Furniture Selection",
        "Color Schemes",
        "Lighting Design",
        "Material Selection",
        "Custom Solutions"
      ]
    },
    {
      icon: Building,
      title: "Commercial Design",
      description: "Transform business spaces to enhance productivity and brand image",
      features: [
        "Office Layout",
        "Retail Design",
        "Restaurant Interiors",
        "Hotel Design",
        "Corporate Branding",
        "Workspace Solutions"
      ]
    },
    {
      icon: Palette,
      title: "3D Visualization",
      description: "Bring your space to life with photorealistic 3D renderings",
      features: [
        "3D Modeling",
        "Virtual Tours",
        "Material Visualization",
        "Lighting Simulation",
        "Space Planning",
        "Design Presentation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="mb-6">
                <Home className="text-[#FF6B35]" size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Interior Design Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your space with our professional interior design services. We create stunning, functional environments that inspire and delight.
              </p>
              <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                Start Your Design Journey
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Interior Design" 
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

      {/* Design Style Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Design Styles We Excel In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Modern',
              'Contemporary',
              'Traditional',
              'Minimalist',
              'Industrial',
              'Scandinavian',
              'Bohemian',
              'Eclectic'
            ].map((style, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">{style}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B35] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's create an environment that reflects your style and meets your needs.
          </p>
          <button className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Schedule a Design Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesign;