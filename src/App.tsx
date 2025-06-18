import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEOProvider from './components/SEO/SEOProvider';
import MetaTags from './components/SEO/MetaTags';
import StructuredData from './components/SEO/StructuredData';
import GoogleAnalytics from './components/SEO/GoogleAnalytics';
import PreloadCriticalResources from './components/Performance/PreloadCriticalResources';
import LoadingSpinner from './components/LoadingSpinner';
import FeedbackButton from './components/FeedbackButton';
import ErrorBoundary from './pages/ErrorBoundary';
import { usePageTracking } from './hooks/usePageTracking';
import { useScrollToTop } from './hooks/useScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import TestimonialSection from './components/TestimonialSection';
import BlogSection from './components/BlogSection';
import ContactForm from './components/ContactForm';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ChatBot from './components/Chatbot/ChatBot';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { default as PortfolioPage } from './pages/Portfolio';
import PortfolioProject from './pages/PortfolioProject';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ThankYou from './pages/ThankYou';
import ServerError from './pages/ServerError';
import MaintenanceMode from './pages/MaintenanceMode';
import ComingSoon from './pages/ComingSoon';
import GraphicDesign from './pages/services/GraphicDesign';
import WebDevelopment from './pages/services/WebDevelopment';
import DigitalMarketing from './pages/services/DigitalMarketing';
import BusinessConsulting from './pages/services/BusinessConsulting';
import InteriorDesign from './pages/services/InteriorDesign';
import EngineeringDesign from './pages/services/EngineeringDesign';
import SEOServices from './pages/services/SEOServices';
import WebsiteDesignPackages from './pages/services/WebsiteDesignPackages';
import AppDevelopmentProcess from './pages/services/AppDevelopmentProcess';
import InteriorDesignPortfolio from './pages/services/InteriorDesignPortfolio';
import BusinessStrategyServices from './pages/services/BusinessStrategyServices';

const AppContent: React.FC = () => {
  const { trackEvent } = usePageTracking();
  useScrollToTop();

  useEffect(() => {
    // Track app initialization
    trackEvent('app_initialized');
  }, [trackEvent]);

  return (
    <div className="min-h-screen font-sans bg-[#F7F9F9]">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <MetaTags />
            <StructuredData 
              type="organization" 
              data={{}} 
            />
            <main>
              <Hero />
              <Services />
              <Clients />
              <Portfolio />
              <WhyChooseUs />
              <Process />
              <TestimonialSection />
              <BlogSection />
              <ContactForm />
              <CTABanner />
            </main>
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/about/our-values" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/featured-projects" element={<PortfolioPage />} />
        <Route path="/portfolio/client-success-stories" element={<PortfolioPage />} />
        <Route path="/resources" element={<Blog />} />
        <Route path="/resources/business-strategy" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/industry-insights" element={<Blog />} />
        <Route path="/blog/company-updates" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/portfolio/:slug" element={<PortfolioProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/request-quote" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="/maintenance" element={<MaintenanceMode />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/business-consulting" element={<BusinessConsulting />} />
        <Route path="/services/interior-design" element={<InteriorDesign />} />
        <Route path="/services/engineering-design" element={<EngineeringDesign />} />
        <Route path="/services/seo" element={<SEOServices />} />
        <Route path="/services/website-design-packages" element={<WebsiteDesignPackages />} />
        <Route path="/services/app-development-process" element={<AppDevelopmentProcess />} />
        <Route path="/services/interior-design-portfolio" element={<InteriorDesignPortfolio />} />
        <Route path="/services/business-strategy" element={<BusinessStrategyServices />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ChatBot />
      <FeedbackButton />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <LoadingSpinner size="lg" showText={false} />
      </div>
    );
  }

  return (
    <SEOProvider>
      <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      <PreloadCriticalResources />
      <ErrorBoundary>
        <Router>
          <AppContent />
        </Router>
      </ErrorBoundary>
    </SEOProvider>
  );
}

export default App;