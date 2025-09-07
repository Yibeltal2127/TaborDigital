import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'service' | 'breadcrumb';
  data: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Tabor Engineering & Digital Solutions',
          url: 'https://tabordigital.com',
          logo: 'https://tabordigital.com/tabor-engineering-logo.png',
          description: 'Transform your business with our comprehensive engineering and digital solutions. We offer architectural design, structural analysis, MEP design, interior design, web development, graphic design, digital marketing, and business consulting services in Ethiopia.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Addis Ababa',
            addressCountry: 'ET',
            addressRegion: 'Addis Ababa'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+251-910-083-733',
            contactType: 'customer service',
            email: 'contact@tabordigital.com'
          },
          sameAs: [
            'https://www.facebook.com/tabordigital',
            'https://www.linkedin.com/company/tabor-digital',
            'https://twitter.com/TaborDigital'
          ]
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Tabor Engineering & Digital Solutions',
          url: 'https://tabordigital.com',
          description: 'Professional digital solutions in Ethiopia',
          publisher: {
            '@type': 'Organization',
            name: 'Tabor Engineering & Digital Solutions'
          }
        };

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline as string,
          description: data.description as string,
          image: data.image as string,
          author: {
            '@type': 'Person',
            name: data.author as string
          },
          publisher: {
            '@type': 'Organization',
            name: 'Tabor Engineering & Digital Solutions',
            logo: {
              '@type': 'ImageObject',
              url: 'https://tabordigital.com/tabor-engineering-logo.png'
            }
          },
          datePublished: data.datePublished as string,
          dateModified: data.dateModified as string
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.name as string,
          description: data.description as string,
          provider: {
            '@type': 'Organization',
            name: 'Tabor Engineering & Digital Solutions'
          },
          areaServed: {
            '@type': 'Country',
            name: 'Ethiopia'
          },
          serviceType: data.serviceType as string
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: (data.items as Array<{ name: string; url: string }>).map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) {
    return null;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;