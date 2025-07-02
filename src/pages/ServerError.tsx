import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/SEO/MetaTags';
import { Server, RefreshCw, Home, Mail, AlertTriangle, Clock, ArrowLeft } from 'lucide-react';
import { generatePageTitle, generateMetaDescription, generateCanonicalUrl } from '../utils/seo';

const ServerError = () => {
  const [isRetrying, setIsRetrying] = useState(false);

  const pageTitle = generatePageTitle('Server Error - We\'re Working to Fix This');
  const pageDescription = generateMetaDescription(
    'We\'re experiencing technical difficulties. Our team is working to resolve the issue. Please try again in a few minutes.'
  );

  const handleRetry = async () => {
    setIsRetrying(true);
    // Simulate retry delay
    setTimeout(() => {
      setIsRetrying(false);
      window.location.reload();
    }, 2000);
  };

  const troubleshootingSteps = [
    {
      step: 1,
      title: 'Check Your Connection',
      description: 'Ensure you have a stable internet connection'
    },
    {
      step: 2,
      title: 'Clear Browser Cache',
      description: 'Clear your browser cache and cookies, then try again'
    },
    {
      step: 3,
      title: 'Try Again Later',
      description: 'Wait a few minutes and refresh the page'
    },
    {
      step: 4,
      title: 'Contact Support',
      description: 'If the problem persists, reach out to our support team'
    }
  ];

  const supportChannels = [
    {
      name: 'Email Support',
      value: 'support@tabordigital.com',
      icon: Mail,
      href: 'mailto:support@tabordigital.com',
      description: 'Get help via email (Response within 24 hours)'
    },
    {
      name: 'Phone Support',
      value: '+251910083733',
      icon: '📞',
      href: 'tel:+251910083733',
      description: 'Call us directly (Mon-Fri, 9AM-6PM EAT)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        canonical={generateCanonicalUrl('/server-error')}
        noIndex={true}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Error Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full mb-8 animate-pulse">
              <Server size={40} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Server Error (500)
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're experiencing technical difficulties on our end. Our team has been notified and is working to resolve the issue.
            </p>

            {/* Status Indicator */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="text-yellow-600 mr-2" size={24} />
                <h3 className="text-lg font-semibold text-yellow-800">System Status</h3>
              </div>
              <p className="text-yellow-700">
                We're currently experiencing high server load. Our engineers are working to restore normal service.
              </p>
              <div className="flex items-center justify-center mt-4 text-sm text-yellow-600">
                <Clock size={16} className="mr-1" />
                <span>Estimated resolution time: 15-30 minutes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRetry}
                disabled={isRetrying}
                className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw size={18} className={`mr-2 ${isRetrying ? 'animate-spin' : ''}`} />
                {isRetrying ? 'Retrying...' : 'Try Again'}
              </button>
              
              <Link
                to="/"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <Home size={18} className="mr-2" />
                Go to Homepage
              </Link>
            </div>
          </div>

          {/* Troubleshooting Steps */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Troubleshooting Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {troubleshootingSteps.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Error Details for Developers */}
          <div className="bg-gray-100 p-6 rounded-lg mb-16">
            <h3 className="font-bold text-gray-900 mb-4">Technical Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Error Code:</span>
                <span className="ml-2 text-gray-600">HTTP 500</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Timestamp:</span>
                <span className="ml-2 text-gray-600">{new Date().toISOString()}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Request ID:</span>
                <span className="ml-2 text-gray-600 font-mono">req_${Math.random().toString(36).substr(2, 9)}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Server:</span>
                <span className="ml-2 text-gray-600">Primary (Load Balancer)</span>
              </div>
            </div>
          </div>

          {/* Support Options */}
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Immediate Help?</h3>
            <p className="text-gray-700 text-center mb-8">
              If you need urgent assistance or this error is blocking critical business operations, please contact our support team directly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportChannels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.href}
                  className="bg-white hover:bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#FF6B35] transition-all duration-300 text-center group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {typeof channel.icon === 'string' ? channel.icon : <channel.icon size={32} className="mx-auto text-[#FF6B35]" />}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{channel.name}</h4>
                  <p className="text-[#FF6B35] font-medium mb-2">{channel.value}</p>
                  <p className="text-gray-600 text-sm">{channel.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Back Navigation */}
          <div className="text-center mt-12">
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-[#FF6B35] font-medium transition-colors flex items-center justify-center mx-auto"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back to Previous Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerError;