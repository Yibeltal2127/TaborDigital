import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Facebook, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Footer = () => {
  // Newsletter form state (copied from NewsletterForm.tsx)
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      // Insert into Supabase
      const { error: supabaseError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, name }]);
      if (supabaseError) throw supabaseError;
      // Call Edge Function
      await fetch('https://wdvhnchretvgqyrwpasr.functions.supabase.co/send-newsletter-welcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ record: { email, name } }),
      });
      setSuccess(true);
      setEmail('');
      setName('');
    } catch (err) {
      setError('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#2C3E50] text-white pt-8 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter Bar - right-aligned, minimal, responsive */}
        <div className="flex justify-end mb-8">
          <form
            onSubmit={handleNewsletter}
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full max-w-xl bg-transparent"
            style={{ maxWidth: '480px' }}
          >
            <div className="flex flex-col justify-center min-w-[180px] mr-0 sm:mr-2">
              <span className="flex items-center gap-1 text-[#FFD166] tracking-wide italic text-base" style={{ fontWeight: 400 }}>
                <Mail size={18} className="inline-block mb-0.5" />
                Stay in the Loop
              </span>
              <span className="text-gray-400 text-xs mt-0.5" style={{ letterSpacing: '0.01em' }}>
                Subscribe for updates, tips, and exclusive offers.
              </span>
            </div>
            <input
              type="text"
              placeholder="Your Name (optional)"
              className="px-3 py-2 rounded border-none focus:ring-2 focus:ring-[#FF6B35] text-sm text-gray-800 min-w-[100px] bg-white"
              value={name}
              onChange={e => setName(e.target.value)}
              disabled={isSubmitting}
              style={{ borderRadius: '6px' }}
            />
            <input
              type="email"
              placeholder="Your Email Address *"
              className="px-3 py-2 rounded border-none focus:ring-2 focus:ring-[#FF6B35] text-sm text-gray-800 min-w-[120px] bg-white"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              style={{ borderRadius: '6px' }}
            />
            <button
              type="submit"
              className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white font-semibold px-4 py-2 rounded transition-all text-sm whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
            {success && (
              <span className="ml-2 flex items-center text-green-200 text-xs font-medium">
                <CheckCircle size={16} className="mr-1" /> Thank you!
              </span>
            )}
            {error && (
              <span className="ml-2 flex items-center text-red-200 text-xs font-medium">
                <AlertCircle size={16} className="mr-1" /> {error}
              </span>
            )}
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/tabordigitallogo.jpg" 
                alt="Tabor Digital Solutions Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/tabordigitallogo.jpg';
                }}
              />
              <h3 className="text-xl font-bold">
                <span className="text-[#FF6B35]">Tabor</span>{' '}
                <span className="gradient-text">Digital Solutions</span>
              </h3>
            </div>
            <p className="mb-4 text-gray-400">
              Empowering businesses through design, development, and digital innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 shrink-0 mt-1 text-[#4ECDC4]" size={18} />
                <span className="text-gray-400">Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 shrink-0 mt-1 text-[#4ECDC4]" size={18} />
                <a href="mailto:contact@tabordigital.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  contact@tabordigital.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 shrink-0 mt-1 text-[#4ECDC4]" size={18} />
                <a href="tel:+251911234567" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +251 91 123 4567
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Graphic Design', url: '/services/graphic-design' },
                { name: 'Web Development', url: '/services/web-development' },
                { name: 'Digital Marketing', url: '/services/digital-marketing' },
                { name: 'Business Consulting', url: '/services/business-consulting' },
                { name: 'Interior Design', url: '/services/interior-design' },
                { name: 'Engineering Design', url: '/services/engineering-design' }
              ].map((service, index) => (
                <li key={index}>
                  <Link to={service.url} className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2 inline-block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2 inline-block">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2 inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-2 inline-block">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Tabor Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;