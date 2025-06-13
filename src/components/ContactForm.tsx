import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  general?: string;
}

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formState.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    if (!formState.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service validation
    if (!formState.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear specific field error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    
    // Clear general error
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([formState]);

      if (supabaseError) throw supabaseError;

      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (err) {
      setErrors({ 
        general: 'Failed to submit form. Please try again later or contact us directly.' 
      });
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Graphic Design',
    'Web & App Development',
    'Digital Marketing',
    'Business Consulting',
    'Interior Design',
    'Engineering Design'
  ];

  const getFieldErrorClass = (fieldName: keyof FormErrors) => {
    return errors[fieldName] 
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
      : 'border-gray-300 focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]';
  };

  return (
    <section id="contact" className="py-20 bg-[#F7F9F9]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-[#2C3E50]">Book a Free Consultation</h2>
                <p className="text-gray-600">
                  Let's bring your vision to life — book a free 20-minute consultation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-lg flex items-center">
                  <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium">Thank you for reaching out!</p>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {errors.general && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-start">
                      <AlertCircle className="mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="font-medium">Submission Failed</p>
                        <p className="text-sm">{errors.general}</p>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border rounded-lg transition-colors ${getFieldErrorClass('name')}`}
                      placeholder="Your full name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border rounded-lg transition-colors ${getFieldErrorClass('email')}`}
                      placeholder="your.email@example.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service You're Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 border rounded-lg bg-white transition-colors ${getFieldErrorClass('service')}`}
                      aria-describedby={errors.service ? "service-error" : undefined}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.service}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-colors"
                      placeholder="Tell us a bit about your project or needs"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#FF6B35] text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center ${
                      isSubmitting 
                        ? 'opacity-75 cursor-not-allowed' 
                        : 'hover:bg-[#4ECDC4] hover:shadow-md transform hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book Now
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
            
            {/* Image/Info Section */}
            <div className="bg-[#4ECDC4] p-8 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ECDC4]/50 rounded-full -mr-32 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1B4D3E]/50 rounded-full -ml-16 -mb-16 opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Why Get in Touch?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 shrink-0 mt-1" size={20} />
                    <p>Free consultation with no obligation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 shrink-0 mt-1" size={20} />
                    <p>Custom solutions tailored to your specific needs</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 shrink-0 mt-1" size={20} />
                    <p>Transparent pricing with no hidden fees</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 shrink-0 mt-1" size={20} />
                    <p>Ongoing support and maintenance options</p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <p className="font-medium mb-2">Prefer to email directly?</p>
                  <a 
                    href="mailto:contact@tabordigital.com" 
                    className="text-[#E5E8E8] hover:text-white underline transition-colors"
                  >
                    contact@tabordigital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;