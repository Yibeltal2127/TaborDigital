import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle, AlertCircle, Mail } from 'lucide-react';

interface NewsletterFormProps {
  compact?: boolean;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

      // Call Edge Function to send welcome email
      await fetch('https://wdvhnchretvgqyrwpasr.functions.supabase.co/send-newsletter-welcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ record: { email, name } }),
      });

      setSuccess(true);
      setEmail('');
      setName('');
    } catch (err: any) {
      setError('Failed to subscribe. Please try again later.');
      console.error('Newsletter subscription error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={compact ? "w-full py-4 px-2 bg-gradient-to-r from-[#FF6B35] via-[#FFD166] to-[#4ECDC4] rounded-xl shadow max-w-md mx-auto" : "w-full py-12 px-4 bg-gradient-to-r from-[#FF6B35] via-[#FFD166] to-[#4ECDC4] rounded-2xl shadow-lg max-w-xl mx-auto my-12"}>
      <form onSubmit={handleSubmit} className={compact ? "flex flex-col gap-2 bg-white bg-opacity-90 p-4 rounded-lg shadow" : "flex flex-col gap-4 bg-white bg-opacity-90 p-8 rounded-xl shadow-md"}>
        <h2 className={compact ? "text-lg font-bold text-[#2C3E50] mb-1 flex items-center gap-2" : "text-2xl md:text-3xl font-bold text-[#2C3E50] mb-2 flex items-center gap-2"}>
          <Mail className="text-[#FF6B35]" size={compact ? 20 : 28} />
          Subscribe to Our Newsletter
        </h2>
        <p className={compact ? "text-gray-600 mb-1 text-sm" : "text-gray-600 mb-2"}>Get the latest updates, tips, and exclusive offers from Tabor Digital Solutions.</p>
        {success && (
          <div className="bg-green-50 text-green-700 p-2 rounded flex items-center text-sm">
            <CheckCircle className="mr-2" size={16} />
            <span>Thank you for subscribing! Please check your inbox for a welcome email.</span>
          </div>
        )}
        {error && (
          <div className="bg-red-50 text-red-700 p-2 rounded flex items-center text-sm">
            <AlertCircle className="mr-2" size={16} />
            <span>{error}</span>
          </div>
        )}
        <div className={compact ? "flex flex-col md:flex-row gap-2" : "flex flex-col md:flex-row gap-3"}>
          <input
            type="text"
            placeholder="Your Name (optional)"
            className={compact ? "flex-1 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] text-sm" : "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-colors"}
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={isSubmitting}
          />
          <input
            type="email"
            placeholder="Your Email Address *"
            className={compact ? "flex-1 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] text-sm" : "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-colors"}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          className={compact ? "w-full mt-1 bg-[#FF6B35] text-white font-semibold py-2 px-4 rounded transition-all flex items-center justify-center text-sm" : "w-full mt-2 bg-[#FF6B35] text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center"}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </section>
  );
};

export default NewsletterForm; 