import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface TrackingEvent {
  event: string;
  properties?: Record<string, string | number | boolean>;
  timestamp?: number;
}

export const usePageTracking = () => {
  const location = useLocation();

  const trackEvent = (event: string, properties?: Record<string, string | number | boolean>) => {
    const trackingEvent: TrackingEvent = {
      event,
      properties,
      timestamp: Date.now()
    };

    // Send to analytics service (Google Analytics, Mixpanel, etc.)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Tracking Event:', trackingEvent);
    }
  };

  const trackPageView = (pathname: string) => {
    trackEvent('page_view', {
      page_path: pathname,
      page_title: document.title
    });
  };

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return { trackEvent, trackPageView };
};