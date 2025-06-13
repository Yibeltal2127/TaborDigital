import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views with Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }

    // Track page views with custom analytics
    trackPageView(location.pathname + location.search);
  }, [location]);

  const trackPageView = (path: string) => {
    // Custom analytics tracking
    console.log('Page view tracked:', path);
    
    // You can integrate with other analytics services here
    // Example: Mixpanel, Hotjar, etc.
  };

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Track custom events
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, properties);
    }
    
    console.log('Event tracked:', eventName, properties);
  };

  return { trackEvent };
};