import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  // Inline newsletter form state for custom layout
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!validateEmail(email)) {
      setError('Enter a valid email.');
      return;
    }
    setIsSubmitting(true);
    try {
      // Insert into Supabase
      const { error: supabaseError } = await import('../lib/supabase').then(m => m.supabase)
        .then(supabase => supabase.from('newsletter_subscribers').insert([{ email }]));
      if (supabaseError) {
        // Handle duplicate email error
        if (
          supabaseError.code === '23505' || // Postgres unique violation
          supabaseError.message?.toLowerCase().includes('duplicate') ||
          supabaseError.status === 409
        ) {
          setError('This email is already subscribed to our newsletter.');
        } else {
          setError('Failed. Try again later.');
        }
        setIsSubmitting(false);
        return;
      }
      // Call Edge Function
      await fetch('https://wdvhnchretvgqyrwpasr.functions.supabase.co/send-newsletter-welcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ record: { email } }),
      });
      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Failed. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#2C3E50] text-white pt-8 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter Bar - right-aligned, minimal, no background */}
        <div className="flex justify-end mb-8">
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 bg-white bg-opacity-5 rounded-lg p-4 shadow">
              {/* Left: Text Block */}
              <div className="flex-1 flex flex-col items-start justify-center min-w-[180px]">
                <span className="flex items-center gap-1 text-[#FFD166] tracking-wide italic text-base font-semibold mb-1">
                  <Mail size={20} className="inline-block mb-0.5" />
                  Stay in the Loop
                </span>
                <span className="text-gray-300 text-xs md:text-sm" style={{ letterSpacing: '0.01em' }}>
                  Subscribe for updates, tips, and exclusive offers.
                </span>
              </div>
              {/* Right: Subscription Form */}
              <form
                onSubmit={handleNewsletter}
                className="flex flex-col items-center w-full md:w-auto"
                style={{ minWidth: 260 }}
              >
                <div className="flex w-full">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="px-3 py-2 rounded-l border-none focus:ring-2 focus:ring-[#FF6B35] text-sm text-gray-800 min-w-[140px] md:min-w-[180px] bg-white w-full"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                  />
                  <button
                    type="submit"
                    className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white font-semibold px-4 py-2 rounded-r transition-all text-sm"
                    disabled={isSubmitting}
                    style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {/* Centered feedback messages */}
                {(success || error) && (
                  <div className="w-full flex justify-center mt-2">
                    {success && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded shadow text-xs font-medium text-center animate-fade-in">
                        Thank you for subscribing!
                      </span>
                    )}
                    {error && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded shadow text-xs font-medium text-center animate-fade-in">
                        {error}
                      </span>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/tabor-engineering-logo.png" 
                alt="Tabor Engineering & Digital Solutions Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/tabor-engineering-logo.png';
                }}
              />
              <h3 className="text-xl font-bold">
                <span className="text-[#FF6B35]">Tabor</span>{' '}
                <span className="gradient-text">Engineering & Digital Solutions</span>
              </h3>
            </div>
            <p className="mb-4 text-gray-400">
              Empowering businesses through engineering design, development, and digital innovation.
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
                <a href="tel:+251910083733" className="text-gray-400 hover:text-white transition-colors duration-300">
                +251910083733
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
          <p>© {new Date().getFullYear()} Tabor Engineering & Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;