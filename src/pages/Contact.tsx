import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/SEO/MetaTags';
import StructuredData from '../components/SEO/StructuredData';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl } from '../utils/seo';
import { scrollToTop, scrollToSection } from '../utils/smoothScroll';

const Contact = () => {
  const pageTitle = generatePageTitle('Contact Us - Get in Touch');
  const pageDescription = generateMetaDescription(
    'Get in touch with Tabor Digital Solutions. Book a free consultation, request a quote, or discuss your project needs. We\'re here to help transform your business.'
  );
  const pageKeywords = generateKeywords(['contact', 'consultation', 'quote', 'get in touch', 'support']);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'contact@tabordigital.com',
      action: 'mailto:contact@tabordigital.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours',
      contact: '+251910083733',
      action: 'tel:+251910083733'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick questions? Message us on WhatsApp',
      contact: '+251910083733',
      action: 'https://wa.me/251910083733'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Meet us at our office in Addis Ababa',
      contact: 'Bole Road, Addis Ababa, Ethiopia',
      action: 'https://maps.google.com/?q=Addis+Ababa+Ethiopia'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We\'ll provide a detailed timeline during our consultation.'
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive support and maintenance packages to keep your digital solutions running smoothly. This includes updates, security monitoring, and technical support.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on your specific requirements. We offer transparent, competitive pricing with no hidden fees. Contact us for a detailed quote tailored to your needs.'
    },
    {
      question: 'Can you work with international clients?',
      answer: 'Absolutely! While we\'re based in Ethiopia, we work with clients globally. We use modern communication tools and project management systems to ensure seamless collaboration regardless of location.'
    }
  ];

  useEffect(() => {
    scrollToTop();
    
    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash.substring(1));
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/contact')}
        type="website"
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-4">
                    <method.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  <a 
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[#FF6B35] hover:text-[#4ECDC4] font-medium transition-colors"
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Request Quote Section */}
      <section id="quote" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Request a Custom Quote
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a detailed quote tailored to your specific project requirements and budget.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Need</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></span>
                      Project description and goals
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></span>
                      Timeline requirements
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></span>
                      Budget range
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></span>
                      Reference examples
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Get</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#4ECDC4] rounded-full mr-3"></span>
                      Detailed project breakdown
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#4ECDC4] rounded-full mr-3"></span>
                      Timeline and milestones
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#4ECDC4] rounded-full mr-3"></span>
                      Transparent pricing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#4ECDC4] rounded-full mr-3"></span>
                      Next steps plan
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link 
                  to="/contact"
                  className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
                >
                  <Send className="mr-2" size={18} />
                  Request Quote Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section id="book-consultation" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Book Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to discuss your project? Schedule a free 30-minute consultation with our experts to explore how we can help transform your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">1</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Call</h3>
                <p className="text-gray-600">Choose a convenient time for your free consultation call.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">2</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discuss Project</h3>
                <p className="text-gray-600">Share your goals and requirements with our team.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">3</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Proposal</h3>
                <p className="text-gray-600">Receive a detailed proposal tailored to your needs.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] p-8 rounded-lg text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">What's Included in Your Free Consultation?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Project requirements analysis
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Technology recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Timeline estimation
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Budget discussion
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Portfolio showcase
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Next steps planning
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <Send className="mr-2" size={18} />
                Schedule Free Consultation
              </Link>
              <a 
                href="tel:+251911234567"
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={18} />
                Call to Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="mr-3 text-[#FF6B35]" size={24} />
                Business Hours
              </h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Emergency Support:</strong> For urgent issues with existing projects, we offer 24/7 emergency support. Additional charges may apply.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B35] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Don't wait! Book your free consultation today and let's discuss how we can help transform your business.
          </p>
          <Link 
            to="/contact#book-consultation"
            className="bg-white text-[#FF6B35] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
          >
            <Send className="mr-2" size={18} />
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;