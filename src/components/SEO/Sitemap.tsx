import React, { useEffect } from 'react';

const Sitemap: React.FC = () => {
  useEffect(() => {
    // Generate sitemap.xml dynamically
    const generateSitemap = () => {
      const baseUrl = 'https://tabordigital.com';
      const currentDate = new Date().toISOString().split('T')[0];
      
      const urls = [
        { loc: baseUrl, priority: '1.0', changefreq: 'weekly' },
        { loc: `${baseUrl}/about`, priority: '0.8', changefreq: 'monthly' },
        { loc: `${baseUrl}/services/graphic-design`, priority: '0.9', changefreq: 'monthly' },
        { loc: `${baseUrl}/services/web-development`, priority: '0.9', changefreq: 'monthly' },
        { loc: `${baseUrl}/services/digital-marketing`, priority: '0.9', changefreq: 'monthly' },
        { loc: `${baseUrl}/services/business-consulting`, priority: '0.9', changefreq: 'monthly' },
        { loc: `${baseUrl}/services/interior-design`, priority: '0.9', changefreq: 'monthly' },
        { loc: `${baseUrl}/services/engineering-design`, priority: '0.9', changefreq: 'monthly' },
      ];
      
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
      
      // In a real application, you would send this to your server
      console.log('Generated sitemap:', sitemap);
    };
    
    generateSitemap();
  }, []);
  
  return null;
};

export default Sitemap;