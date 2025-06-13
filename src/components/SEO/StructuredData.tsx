import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'article' | 'breadcrumb' | 'faq' | 'review';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    const baseUrl = 'https://tabordigital.com';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Tabor Digital Solutions",
          "alternateName": "Tabor Digital",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": "Leading digital agency in Ethiopia providing web development, graphic design, digital marketing, business consulting, interior design, and engineering services.",
          "foundingDate": "2020",
          "founders": [
            {
              "@type": "Person",
              "name": "Daniel Mekonnen"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bole Road",
            "addressLocality": "Addis Ababa",
            "addressCountry": "ET"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+251-91-123-4567",
            "contactType": "customer service",
            "email": "contact@tabordigital.com",
            "availableLanguage": ["English", "Amharic"]
          },
          "sameAs": [
            "https://www.facebook.com/tabordigital",
            "https://www.linkedin.com/company/tabordigital",
            "https://twitter.com/tabordigital"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom website and web application development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Graphic Design",
                  "description": "Brand identity and visual design services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Digital Marketing",
                  "description": "SEO, social media, and digital advertising services"
                }
              }
            ]
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Tabor Digital Solutions",
            "url": baseUrl
          },
          "areaServed": {
            "@type": "Country",
            "name": "Ethiopia"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data.name,
            "itemListElement": data.features?.map((feature: string, index: number) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            })) || []
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.excerpt,
          "image": data.featured_image,
          "author": {
            "@type": "Person",
            "name": data.author_name,
            "jobTitle": data.author_role
          },
          "publisher": {
            "@type": "Organization",
            "name": "Tabor Digital Solutions",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          },
          "datePublished": data.published_at,
          "dateModified": data.updated_at,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${data.slug}`
          },
          "keywords": data.tags?.join(', '),
          "articleSection": data.category
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${baseUrl}${item.url}`
          }))
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data.rating,
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "reviewBody": data.text,
          "itemReviewed": {
            "@type": "Organization",
            "name": "Tabor Digital Solutions"
          }
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;