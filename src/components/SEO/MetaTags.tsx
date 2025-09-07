import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  canonical?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'Tabor Engineering & Digital Solutions - Engineering, Design, Development & Digital Innovation',
  description = 'Transform your business with our comprehensive engineering and digital solutions. We offer architectural design, structural analysis, MEP design, interior design, web development, graphic design, digital marketing, and business consulting services in Ethiopia.',
  keywords = ['engineering solutions', 'architectural design', 'structural analysis', 'MEP design', 'web development', 'graphic design', 'digital marketing', 'business consulting', 'interior design', 'Ethiopia', 'Addis Ababa'],
  image = 'https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1',
  url = 'https://tabordigital.com',
  type = 'website',
  author = 'Tabor Engineering & Digital Solutions',
  publishedTime,
  modifiedTime,
  section,
  tags,
  noIndex = false,
  canonical
}) => {
  const siteName = 'Tabor Engineering & Digital Solutions';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const currentUrl = canonical || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Favicon */}
      <link rel="icon" type="image/jpeg" href="/tabordigitallogo.jpg" />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@TaborDigital" />
      <meta name="twitter:creator" content="@TaborDigital" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="ET" />
      <meta name="geo.placename" content="Addis Ababa" />
      <meta name="geo.position" content="9.0192;38.7525" />
      <meta name="ICBM" content="9.0192, 38.7525" />
      
      {/* Business Information */}
      <meta name="contact" content="contact@tabordigital.com" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
    </Helmet>
  );
};

export default MetaTags;