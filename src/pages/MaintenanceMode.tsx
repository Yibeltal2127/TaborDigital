import React, { useState, useEffect } from 'react';
import MetaTags from '../components/SEO/MetaTags';
import { Settings, Clock, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { generatePageTitle, generateMetaDescription, generateCanonicalUrl } from '../utils/seo';

const MaintenanceMode = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0
  });

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const pageTitle = generatePageTitle('Site Under Maintenance - We\'ll Be Back Soon');
  const pageDescription = generateMetaDescription(
    'Tabor Engineering & Digital Solutions is currently undergoing scheduled maintenance. We\'ll be back online shortly with improved features and performance.'
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

  const maintenanceFeatures = [
    {
      title: 'Performance Improvements',
      description: 'Faster loading times and better user experience',
      icon: '⚡'
    },
    {
      title: 'New Features',
      description: 'Enhanced portfolio showcase and service pages',
      icon: '✨'
    },
    {
      title: 'Security Updates',
      description: 'Latest security patches and improvements',
      icon: '🔒'
    },
    {
      title: 'Mobile Optimization',
      description: 'Better mobile experience and responsiveness',
      icon: '📱'
    }
  ];

  const emergencyContacts = [
    {
      type: 'Email',
      value: 'urgent@tabordigital.com',
      icon: Mail,
      href: 'mailto:urgent@tabordigital.com'
    },
    {
      type: 'Phone',
      value: '+251910083733',
      icon: Phone,
      href: 'tel:+251911234567'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        canonical={generateCanonicalUrl('/maintenance')}
        noIndex={true}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Maintenance Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[#FF6B35] text-white rounded-full mb-8 animate-pulse">
            <Settings size={48} className="animate-spin" style={{ animationDuration: '3s' }} />
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            We're Making Things Better
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Tabor Engineering & Digital Solutions is currently undergoing scheduled maintenance to bring you an even better experience. 
            We'll be back online shortly!
          </p>

          {/* Countdown Timer */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center mb-6">
              <Clock size={24} className="text-[#FF6B35] mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Estimated Time Remaining</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] text-white p-4 rounded-lg">
                <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-90">Hours</div>
              </div>
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] text-white p-4 rounded-lg">
                <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-90">Minutes</div>
              </div>
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] text-white p-4 rounded-lg">
                <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-90">Seconds</div>
              </div>
            </div>
          </div>

          {/* What We're Working On */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What We're Working On</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenanceFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Notification Signup */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Notified When We're Back</h3>
            <p className="text-gray-600 mb-6">
              Be the first to know when our site is back online and explore our new features.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleNotifySubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center justify-center"
                  >
                    Notify Me
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center justify-center">
                <CheckCircle size={20} className="mr-2" />
                <span>Thanks! We'll notify you when we're back online.</span>
              </div>
            )}
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Urgent Assistance?</h3>
            <p className="text-gray-700 mb-6">
              If you have an urgent matter that can't wait, please contact us directly:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {emergencyContacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center border border-gray-200 hover:border-[#FF6B35]"
                >
                  <contact.icon size={18} className="mr-2 text-[#FF6B35]" />
                  {contact.value}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-600 mb-4">Stay connected with us:</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                🐦 Twitter
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                💼 LinkedIn
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceMode;