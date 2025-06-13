import React, { useState, useEffect } from 'react';
import MetaTags from '../components/SEO/MetaTags';
import { Rocket, Mail, ArrowRight, Star, Clock, Users, CheckCircle } from 'lucide-react';
import { generatePageTitle, generateMetaDescription, generateCanonicalUrl } from '../utils/seo';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  const pageTitle = generatePageTitle('Coming Soon - Something Amazing is on the Way');
  const pageDescription = generateMetaDescription(
    'We\'re working on something amazing! Get notified when we launch our new features and services. Join our early access list today.'
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // In a real implementation, this would subscribe the user
      setSubscribed(true);
      setEmail('');
    }
  };

  const upcomingFeatures = [
    {
      title: 'AI-Powered Design Tools',
      description: 'Revolutionary design assistance powered by artificial intelligence',
      icon: '🤖',
      status: 'In Development'
    },
    {
      title: 'Advanced Portfolio Builder',
      description: 'Create stunning portfolios with our new drag-and-drop builder',
      icon: '🎨',
      status: 'Beta Testing'
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time on projects',
      icon: '👥',
      status: 'Coming Soon'
    },
    {
      title: 'Mobile App',
      description: 'Manage your projects on the go with our mobile application',
      icon: '📱',
      status: 'In Development'
    }
  ];

  const earlyAccessBenefits = [
    'First access to new features',
    'Exclusive beta testing opportunities',
    'Special launch pricing',
    'Direct feedback channel to our team',
    'Priority customer support',
    'Exclusive webinars and tutorials'
  ];

  const testimonials = [
    {
      quote: "Can't wait to see what Tabor Digital has in store. Their current services are already amazing!",
      author: "Sarah Johnson",
      company: "Tech Innovations",
      avatar: "👩‍💼"
    },
    {
      quote: "The preview looks incredible. This will revolutionize how we handle our digital projects.",
      author: "Michael Chen",
      company: "Growth Dynamics",
      avatar: "👨‍💻"
    },
    {
      quote: "Finally, a platform that understands what businesses really need. Excited for the launch!",
      author: "Aisha Mohammed",
      company: "Creative Solutions",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        canonical={generateCanonicalUrl('/coming-soon')}
        noIndex={true}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] text-white rounded-full mb-8 animate-bounce-gentle">
              <Rocket size={48} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Something Amazing is Coming
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              We're working on revolutionary new features that will transform how you experience digital solutions. 
              Get ready for the future of design and development!
            </p>

            {/* Countdown Timer */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-6">
                <Clock size={24} className="text-[#FF6B35] mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Launch Countdown</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] text-white p-4 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm opacity-90">Days</div>
                </div>
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] text-white p-4 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm opacity-90">Hours</div>
                </div>
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] text-white p-4 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm opacity-90">Minutes</div>
                </div>
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] text-white p-4 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm opacity-90">Seconds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Be the First to Know</h3>
              <p className="text-gray-600 text-lg">
                Join our exclusive early access list and be among the first to experience our revolutionary new features.
              </p>
            </div>
            
            {!subscribed ? (
              <form onSubmit={handleNotifySubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-4 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center justify-center text-lg"
                  >
                    Get Early Access
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-50 text-green-700 p-6 rounded-lg flex items-center justify-center max-w-md mx-auto">
                <CheckCircle size={24} className="mr-3" />
                <div>
                  <p className="font-medium">Welcome to early access!</p>
                  <p className="text-sm">We'll notify you as soon as we launch.</p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
              <Users size={16} className="mr-2" />
              <span>Join 2,500+ others waiting for launch</span>
            </div>
          </div>

          {/* Upcoming Features */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What's Coming</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4 flex-shrink-0">{feature.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Beta Testing' ? 'bg-blue-100 text-blue-800' :
                          feature.status === 'In Development' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Early Access Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Early Access Benefits</h3>
              <div className="space-y-4">
                {earlyAccessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What People Are Saying</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{testimonial.avatar}</span>
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] p-8 rounded-2xl text-white text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-2xl font-bold mb-4">Development Progress</h3>
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 mb-6">
                <div className="bg-white h-3 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
              </div>
              <p className="text-lg opacity-90">
                We're in the final stages of development and testing. The launch is just around the corner!
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-gray-600 mb-4">Follow us for updates:</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors text-lg">
                📘 Facebook
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors text-lg">
                🐦 Twitter
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors text-lg">
                💼 LinkedIn
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors text-lg">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;