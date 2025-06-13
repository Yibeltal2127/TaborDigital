import React from 'react';
import MetaTags from '../components/SEO/MetaTags';
import { FileText, Scale, Shield, AlertTriangle, Mail, Calendar } from 'lucide-react';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl } from '../utils/seo';

const TermsOfService = () => {
  const pageTitle = generatePageTitle('Terms of Service - Legal Terms & Conditions');
  const pageDescription = generateMetaDescription(
    'Read our terms of service to understand the legal terms and conditions for using Tabor Digital Solutions services and website.'
  );
  const pageKeywords = generateKeywords(['terms of service', 'legal terms', 'conditions', 'user agreement', 'service agreement']);

  const lastUpdated = 'December 15, 2024';

  const sections = [
    {
      icon: Scale,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using our website and services, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you may not use our services',
        'We reserve the right to modify these terms at any time with notice',
        'Your continued use of our services constitutes acceptance of any changes'
      ]
    },
    {
      icon: Shield,
      title: 'Use of Services',
      content: [
        'You must be at least 18 years old to use our services',
        'You agree to provide accurate and complete information when requested',
        'You are responsible for maintaining the confidentiality of your account information',
        'You agree not to use our services for any unlawful or prohibited purposes',
        'We reserve the right to terminate or suspend access for violations of these terms'
      ]
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: [
        'All content on our website is owned by Tabor Digital Solutions or our licensors',
        'You may not reproduce, distribute, or create derivative works without permission',
        'Client work and deliverables remain the property of the respective clients upon full payment',
        'We retain the right to showcase completed work in our portfolio unless otherwise agreed',
        'Any feedback or suggestions you provide may be used by us without compensation'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: [
        'Our services are provided "as is" without warranties of any kind',
        'We are not liable for any indirect, incidental, or consequential damages',
        'Our total liability shall not exceed the amount paid for the specific service',
        'We are not responsible for third-party content or services',
        'Some jurisdictions do not allow limitation of liability, so these may not apply to you'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/terms-of-service')}
        type="website"
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-6">
              <FileText size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              These terms govern your use of our website and services. Please read them carefully.
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
                Welcome to Tabor Digital Solutions. These Terms of Service ("Terms") govern your use of our website, 
                services, and any related applications or platforms (collectively, the "Services") operated by Tabor Digital Solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read these Terms carefully before using our Services. By accessing or using our Services, 
                you agree to be bound by these Terms and our Privacy Policy.
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

            {/* Additional Sections */}
            <div className="mt-12 space-y-8">
              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Payment terms are specified in individual project agreements. Generally, we require:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>50% deposit before project commencement</li>
                    <li>Remaining balance upon project completion</li>
                    <li>Payment within 30 days of invoice date</li>
                    <li>Late payment fees may apply for overdue accounts</li>
                  </ul>
                </div>
              </div>

              {/* Project Delivery */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Delivery and Revisions</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Project timelines and revision policies are outlined in individual project agreements:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Delivery dates are estimates and may vary based on project complexity</li>
                    <li>Client feedback and approvals may affect project timelines</li>
                    <li>Revision rounds are typically limited as specified in project agreements</li>
                    <li>Additional revisions beyond the agreed scope may incur extra charges</li>
                  </ul>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation and Refunds</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Cancellation policies vary by service type and project stage:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Consultation fees are non-refundable</li>
                    <li>Project cancellations must be requested in writing</li>
                    <li>Refunds are calculated based on work completed at time of cancellation</li>
                    <li>Deposits may be non-refundable depending on project stage</li>
                  </ul>
                </div>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed">
                  We respect the confidentiality of your business information and will not disclose confidential information 
                  to third parties without your consent, except as required by law. We may require separate non-disclosure 
                  agreements for sensitive projects.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of Ethiopia. 
                  Any disputes arising from these Terms or our services shall be resolved through binding arbitration 
                  or in the courts of Addis Ababa, Ethiopia.
                </p>
              </div>

              {/* Severability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited 
                  or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-[#FF6B35] rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Mail className="mr-3" size={24} />
                Questions About These Terms?
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@tabordigital.com</p>
                <p><strong>Phone:</strong> +251 91 123 4567</p>
                <p><strong>Address:</strong> Bole Road, Addis Ababa, Ethiopia</p>
              </div>
              <p className="mt-4 text-sm opacity-90">
                We will respond to your legal inquiries within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;