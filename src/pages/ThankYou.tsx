import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import MetaTags from '../components/SEO/MetaTags';
import { CheckCircle, ArrowRight, Calendar, Mail, Phone, Download, Share2, Star, Clock, Users } from 'lucide-react';
import { generatePageTitle, generateMetaDescription, generateCanonicalUrl } from '../utils/seo';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(10);
  
  const type = searchParams.get('type') || 'contact';
  const service = searchParams.get('service') || '';
  const name = searchParams.get('name') || '';

  const pageTitle = generatePageTitle('Thank You - We\'ll Be In Touch Soon');
  const pageDescription = generateMetaDescription(
    'Thank you for contacting Tabor Engineering & Digital Solutions. We\'ve received your message and will respond within 24 hours.'
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getThankYouContent = () => {
    switch (type) {
      case 'consultation':
        return {
          title: 'Consultation Booked Successfully!',
          subtitle: 'Your free consultation has been scheduled',
          message: `Thank you${name ? `, ${name}` : ''}! We've received your consultation request${service ? ` for ${service}` : ''}. Our team will contact you within 24 hours to confirm your appointment time.`,
          nextSteps: [
            'Check your email for confirmation details',
            'Prepare any questions about your project',
            'Gather any existing materials or references',
            'Think about your goals and timeline'
          ],
          icon: Calendar,
          color: 'blue'
        };
      
      case 'quote':
        return {
          title: 'Quote Request Received!',
          subtitle: 'We\'re preparing your custom proposal',
          message: `Thank you${name ? `, ${name}` : ''}! We've received your quote request${service ? ` for ${service}` : ''}. Our team is reviewing your requirements and will send you a detailed proposal within 48 hours.`,
          nextSteps: [
            'Expect a detailed proposal via email',
            'Review our portfolio for inspiration',
            'Prepare any additional requirements',
            'Consider your preferred timeline'
          ],
          icon: Mail,
          color: 'green'
        };
      
      case 'newsletter':
        return {
          title: 'Welcome to Our Newsletter!',
          subtitle: 'You\'re now part of our community',
          message: `Thank you${name ? `, ${name}` : ''}! You've successfully subscribed to our newsletter. You'll receive the latest insights, tips, and updates about design, development, and digital innovation.`,
          nextSteps: [
            'Check your email for a welcome message',
            'Follow us on social media',
            'Explore our latest blog posts',
            'Share our content with your network'
          ],
          icon: Mail,
          color: 'purple'
        };
      
      case 'download':
        return {
          title: 'Download Started!',
          subtitle: 'Your resource is ready',
          message: `Thank you${name ? `, ${name}` : ''}! Your download should start automatically. If it doesn't, use the download button below.`,
          nextSteps: [
            'Check your downloads folder',
            'Share the resource with your team',
            'Implement the strategies provided',
            'Contact us if you have questions'
          ],
          icon: Download,
          color: 'indigo'
        };
      
      default:
        return {
          title: 'Message Received!',
          subtitle: 'We\'ll be in touch soon',
          message: `Thank you${name ? `, ${name}` : ''}! We've received your message${service ? ` regarding ${service}` : ''}. Our team will review your inquiry and respond within 24 hours.`,
          nextSteps: [
            'Check your email for our response',
            'Explore our services and portfolio',
            'Follow us on social media',
            'Refer us to friends and colleagues'
          ],
          icon: CheckCircle,
          color: 'orange'
        };
    }
  };

  const content = getThankYouContent();
  const Icon = content.icon;

  const relatedServices = [
    { name: 'Graphic Design', url: '/services/graphic-design', icon: '🎨' },
    { name: 'Web Development', url: '/services/web-development', icon: '💻' },
    { name: 'Digital Marketing', url: '/services/digital-marketing', icon: '📈' },
    { name: 'Business Consulting', url: '/services/business-consulting', icon: '💼' }
  ];

  const testimonials = [
    {
      quote: "Working with Tabor Engineering & Digital Solutions was a game-changer for our business. They delivered beyond our expectations.",
      author: "Sarah Johnson",
      company: "Tech Innovations Ltd",
      rating: 5
    },
    {
      quote: "Professional, creative, and results-driven. Our new website has increased conversions by 200%.",
      author: "Michael Chen",
      company: "Growth Dynamics",
      rating: 5
    },
    {
      quote: "The team's expertise in digital marketing helped us reach new markets we never thought possible.",
      author: "Aisha Mohammed",
      company: "Sustainable Solutions",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        canonical={generateCanonicalUrl('/thank-you')}
        noIndex={true}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Thank You Section */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-${content.color}-100 text-${content.color}-600 rounded-full mb-8 animate-scale-in`}>
              <Icon size={40} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              {content.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {content.subtitle}
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-gray-700 leading-relaxed">
                {content.message}
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Response Time Indicator */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] p-8 rounded-2xl text-white text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-4">
              <Clock size={24} className="mr-2" />
              <h3 className="text-xl font-bold">Expected Response Time</h3>
            </div>
            <p className="text-lg mb-4">
              {type === 'quote' ? 'Within 48 hours' : 'Within 24 hours'}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Phone size={16} className="mr-1" />
                <span>+251910083733</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-1" />
                <span>contact@tabordigital.com</span>
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                <Share2 size={18} className="mr-2" />
                Share on LinkedIn
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                <Share2 size={18} className="mr-2" />
                Share on WhatsApp
              </button>
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Our Other Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:scale-105 transform"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors">
                    {service.name}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-redirect Notice */}
          {countdown > 0 && (
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-gray-600 mb-4">
                You'll be redirected to our homepage in {countdown} seconds
              </p>
              <Link
                to="/"
                className="inline-flex items-center bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Go to Homepage Now
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          )}

          {/* Auto-redirect */}
          {countdown === 0 && (
            <script>
              {`window.location.href = '/';`}
            </script>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThankYou;