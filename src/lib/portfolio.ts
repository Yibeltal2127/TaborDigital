import { supabase } from './supabase';

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  client_name: string;
  project_url?: string;
  featured_image: string;
  gallery_images: string[];
  category: string;
  technologies: string[];
  deliverables: string[];
  tools: string[];
  platforms: string[];
  project_duration?: string;
  project_year?: number;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
  testimonials?: PortfolioTestimonial[];
}

export interface PortfolioCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}

export interface PortfolioTestimonial {
  id: string;
  project_id: string;
  client_name: string;
  client_role: string;
  client_company: string;
  client_image?: string;
  testimonial: string;
  rating: number;
  created_at: string;
}

// Fetch all published portfolio projects
export const fetchPortfolioProjects = async (category?: string, featured?: boolean): Promise<PortfolioProject[]> => {
  try {
    let query = supabase
      .from('portfolio_projects')
      .select(`
        *,
        testimonials:portfolio_testimonials(*)
      `)
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (category && category !== 'All') {
      query = query.eq('category', category.toLowerCase().replace(/\s+/g, '-'));
    }

    if (featured) {
      query = query.eq('featured', true);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching portfolio projects:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching portfolio projects:', error);
    return [];
  }
};

// Fetch a single portfolio project by slug
export const fetchPortfolioProject = async (slug: string): Promise<PortfolioProject | null> => {
  try {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select(`
        *,
        testimonials:portfolio_testimonials(*)
      `)
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      console.error('Error fetching portfolio project:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching portfolio project:', error);
    return null;
  }
};

// Fetch all portfolio categories
export const fetchPortfolioCategories = async (): Promise<PortfolioCategory[]> => {
  try {
    const { data, error } = await supabase
      .from('portfolio_categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching portfolio categories:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching portfolio categories:', error);
    return [];
  }
};

// Fetch featured portfolio projects
export const fetchFeaturedProjects = async (limit: number = 6): Promise<PortfolioProject[]> => {
  try {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select(`
        *,
        testimonials:portfolio_testimonials(*)
      `)
      .eq('published', true)
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching featured projects:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
};

// Submit a testimonial for a project
export const submitTestimonial = async (testimonial: Omit<PortfolioTestimonial, 'id' | 'created_at'>): Promise<{ success: boolean; message: string }> => {
  try {
    const { error } = await supabase
      .from('portfolio_testimonials')
      .insert([testimonial]);

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: 'Thank you for your testimonial! It will be reviewed and published soon.'
    };
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    return {
      success: false,
      message: 'Failed to submit testimonial. Please try again later.'
    };
  }
};

// Get portfolio statistics
export const getPortfolioStats = async (): Promise<{
  totalProjects: number;
  categoryCounts: { [key: string]: number };
  featuredCount: number;
}> => {
  try {
    const { data: projects, error } = await supabase
      .from('portfolio_projects')
      .select('category, featured')
      .eq('published', true);

    if (error) {
      console.error('Error fetching portfolio stats:', error);
      return { totalProjects: 0, categoryCounts: {}, featuredCount: 0 };
    }

    const totalProjects = projects.length;
    const featuredCount = projects.filter(p => p.featured).length;
    const categoryCounts = projects.reduce((acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    return { totalProjects, categoryCounts, featuredCount };
  } catch (error) {
    console.error('Error fetching portfolio stats:', error);
    return { totalProjects: 0, categoryCounts: {}, featuredCount: 0 };
  }
};