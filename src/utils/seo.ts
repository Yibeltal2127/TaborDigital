// SEO utility functions

export const generatePageTitle = (title: string, includeCompany: boolean = true): string => {
  const companyName = 'Tabor Digital Solutions';
  if (!includeCompany || title.includes(companyName)) {
    return title;
  }
  return `${title} | ${companyName}`;
};

export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  if (content.length <= maxLength) {
    return content;
  }
  
  const truncated = content.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
};

export const generateKeywords = (baseKeywords: string[], additionalKeywords: string[] = []): string[] => {
  const defaultKeywords = [
    'digital agency',
    'web development',
    'graphic design',
    'digital marketing',
    'business consulting',
    'interior design',
    'engineering design',
    'Ethiopia',
    'Addis Ababa',
    'Tabor Digital Solutions',
    'cookie policy'
  ];
  
  return [...new Set([...defaultKeywords, ...baseKeywords, ...additionalKeywords])];
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://tabordigital.com';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export const generateOpenGraphImage = (title: string, description?: string): string => {
  // In a real implementation, you might generate dynamic OG images
  // For now, return a default image
  return 'https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1';
};

export const extractTextFromHTML = (html: string): string => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

export const generateBreadcrumbs = (pathname: string): Array<{ name: string; url: string }> => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  
  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      name,
      url: currentPath
    });
  });
  
  return breadcrumbs;
};

export const generateServiceStructuredData = (serviceName: string, description: string, features: string[]) => {
  return {
    name: serviceName,
    description,
    features
  };
};

export const generateArticleStructuredData = (article: any) => {
  return {
    title: article.title,
    excerpt: article.excerpt,
    featured_image: article.featured_image,
    author_name: article.author_name,
    author_role: article.author_role,
    published_at: article.published_at,
    updated_at: article.updated_at,
    slug: article.slug,
    tags: article.tags,
    category: article.category
  };
};

// Performance optimization utilities
export const preloadRoute = (routePath: string): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = routePath;
  document.head.appendChild(link);
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const optimizeImageUrl = (url: string, width?: number, height?: number, quality: number = 85): string => {
  // For Pexels images, add optimization parameters
  if (url.includes('pexels.com')) {
    const params = new URLSearchParams();
    params.append('auto', 'compress');
    params.append('cs', 'tinysrgb');
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('dpr', '1');
    
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}${params.toString()}`;
  }
  
  return url;
};