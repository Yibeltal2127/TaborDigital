import React from 'react';
import { Search, Layout, Smartphone, Home, TrendingUp, Settings, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredServices = [
  {
    title: "SEO Services",
    summary: "Boost your online visibility with our comprehensive SEO strategies. From keyword research to performance tracking, we help you rank higher in search results.",
    path: "/services/seo",
    icon: Search,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Website Design Packages",
    summary: "Choose from our range of website design packages tailored to your business needs. Get a professional, responsive website that converts visitors into customers.",
    path: "/services/website-design-packages",
    icon: Layout,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "App Development Process",
    summary: "Experience our streamlined app development process. From concept to deployment, we create mobile applications that deliver exceptional user experiences.",
    path: "/services/app-development-process",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Interior Design Portfolio",
    summary: "Explore our stunning interior design projects. Transform your spaces with our creative and functional design solutions.",
    path: "/services/interior-design-portfolio",
    icon: Home,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Business Strategy Services",
    summary: "Grow your business with our strategic consulting services. We provide data-driven insights and actionable strategies for sustainable growth.",
    path: "/services/business-strategy",
    icon: TrendingUp,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Engineering Design",
    summary: "Access professional engineering design services for your projects. From CAD modeling to technical documentation, we've got you covered.",
    path: "/services/engineering-design",
    icon: Settings,
    color: "from-gray-600 to-gray-800"
  },
  {
    title: "Graphic Design",
    summary: "Elevate your brand with our creative graphic design services. From logos to marketing materials, we create visually compelling designs.",
    path: "/services/graphic-design",
    icon: Palette,
    color: "from-yellow-500 to-orange-500"
  }
];

const FeaturedServices: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our comprehensive services can help your business thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group block bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                    <service.icon size={24} />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900 group-hover:text-[#FF6B35] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.summary}
                </p>
                <div className="flex items-center text-[#FF6B35] group-hover:text-[#4ECDC4] transition-colors">
                  <span className="font-medium">Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices; 