import React from 'react';
import MetaTags from '../components/SEO/MetaTags';
import { Cookie, Shield, Eye, Settings, Mail, Calendar } from 'lucide-react';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl } from '../utils/seo';

const CookiePolicy = () => {
  const pageTitle = generatePageTitle('Cookie Policy - How We Use Cookies');
  const pageDescription = generateMetaDescription(
    'Learn about how Tabor Engineering & Digital Solutions uses cookies to improve your browsing experience and provide better services. Understand your cookie preferences and privacy choices.'
  );
  const pageKeywords = generateKeywords(['cookie policy', 'cookies', 'privacy', 'tracking', 'website preferences']);

  const lastUpdated = 'December 15, 2024';

  const sections = [
    {
      icon: Cookie,
      title: 'What Are Cookies?',
      content: [
        'Cookies are small text files stored on your device when you visit our website',
        'They help us remember your preferences and improve your browsing experience',
        'Cookies contain information about your interactions with our website',
        'They do not contain personal information that can identify you directly',
        'Most web browsers automatically accept cookies, but you can modify your settings'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Cookies',
      content: [
        'Essential cookies: Required for basic website functionality and security',
        'Performance cookies: Help us understand how visitors interact with our website',
        'Functional cookies: Remember your preferences and settings',
        'Analytics cookies: Provide insights into website usage and performance',
        'Marketing cookies: Used to deliver relevant advertisements and content'
      ]
    },
    {
      icon: Shield,
      title: 'Types of Cookies We Use',
      content: [
        'Session cookies: Temporary cookies that expire when you close your browser',
        'Persistent cookies: Remain on your device for a set period or until deleted',
        'First-party cookies: Set directly by our website',
        'Third-party cookies: Set by external services we use (Google Analytics, etc.)',
        'Secure cookies: Transmitted only over encrypted connections'
      ]
    },
    {
      icon: Settings,
      title: 'Managing Your Cookie Preferences',
      content: [
        'You can control cookies through your browser settings',
        'Most browsers allow you to block or delete cookies',
        'You can set preferences for different types of cookies',
        'Disabling cookies may affect website functionality',
        'You can opt-out of third-party tracking cookies'
      ]
    }
  ];

  const cookieCategories = [
    {
      name: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: ['Session management', 'Security features', 'Form submissions'],
      canDisable: false
    },
    {
      name: 'Performance Cookies',
      description: 'Help us improve website performance',
      examples: ['Page load times', 'Error tracking', 'Usage statistics'],
      canDisable: true
    },
    {
      name: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      examples: ['Language preferences', 'Theme settings', 'Form data'],
      canDisable: true
    },
    {
      name: 'Analytics Cookies',
      description: 'Provide insights into website usage',
      examples: ['Google Analytics', 'Visitor behavior', 'Traffic sources'],
      canDisable: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/cookie-policy')}
        type="website"
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-6">
              <Cookie size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Learn how we use cookies to enhance your browsing experience and provide better services.
            </p>
            <div className="flex items-center justify-center text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Tabor Engineering & Digital Solutions, we use cookies and similar technologies to improve your browsing experience, 
                analyze website traffic, and provide personalized content. This Cookie Policy explains what cookies are, 
                how we use them, and how you can manage your preferences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By continuing to use our website, you consent to our use of cookies as described in this policy. 
                You can change your cookie preferences at any time through your browser settings.
              </p>
            </div>

            {/* Main Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF6B35] text-white rounded-full mr-4">
                      <section.icon size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Cookie Categories */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Cookie Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieCategories.map((category, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        category.canDisable 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {category.canDisable ? 'Optional' : 'Required'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {category.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browser Instructions */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Manage Cookies in Your Browser</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Popular Browsers:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                      <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                      <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                      <li>• <strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">What You Can Do:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Block all cookies</li>
                      <li>• Allow only first-party cookies</li>
                      <li>• Delete existing cookies</li>
                      <li>• Set cookie expiration preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the following third-party services that may set cookies:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Google Analytics</span>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:text-[#4ECDC4] text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Google Fonts</span>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:text-[#4ECDC4] text-sm">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-[#FF6B35] rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Mail className="mr-3" size={24} />
                Questions About Cookies?
              </h2>
              <p className="mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@tabordigital.com</p>
                <p><strong>Phone:</strong> +251910083733</p>
                <p><strong>Address:</strong> Bole Road, Addis Ababa, Ethiopia</p>
              </div>
              <p className="mt-4 text-sm opacity-90">
                We will respond to your cookie-related inquiries within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;