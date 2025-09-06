import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  measurementId = import.meta.env.VITE_GA_ID || 'G-XXXXXXXXXX'
}) => {
  return (
    <Helmet>
      {/* Google tag (gtag.js) */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics; 