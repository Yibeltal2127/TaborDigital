import { supabase } from './supabase';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_name: string;
  author_role: string;
  author_image: string;
  featured_image: string;
  category: string;
  tags: string[];
  read_time: string;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  active: boolean;
}

// Fetch all published blog posts
export const fetchBlogPosts = async (category?: string): Promise<BlogPost[]> => {
  try {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (category && category !== 'All') {
      query = query.eq('category', category.toLowerCase());
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Fetch a single blog post by slug
export const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Fetch all blog categories
export const fetchBlogCategories = async (): Promise<BlogCategory[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching blog categories:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return [];
  }
};

// Subscribe to newsletter
export const subscribeToNewsletter = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return {
          success: false,
          message: 'This email is already subscribed to our newsletter.'
        };
      }
      throw error;
    }

    return {
      success: true,
      message: 'Successfully subscribed to our newsletter!'
    };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return {
      success: false,
      message: 'Failed to subscribe. Please try again later.'
    };
  }
};

// Get featured blog posts (latest 3)
export const fetchFeaturedBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
      .limit(3);

    if (error) {
      console.error('Error fetching featured blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
};

// Search blog posts
export const searchBlogPosts = async (searchTerm: string): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .or(`title.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error searching blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error searching blog posts:', error);
    return [];
  }
};