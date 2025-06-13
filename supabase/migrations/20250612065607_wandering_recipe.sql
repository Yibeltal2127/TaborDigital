/*
  # Create blog system tables

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `slug` (text, unique, required)
      - `excerpt` (text, required)
      - `content` (text, required)
      - `author_name` (text, required)
      - `author_role` (text, required)
      - `author_image` (text, required)
      - `featured_image` (text, required)
      - `category` (text, required)
      - `tags` (text array)
      - `read_time` (text, required)
      - `published` (boolean, default: false)
      - `published_at` (timestamp with timezone)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

    - `blog_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique, required)
      - `slug` (text, unique, required)
      - `description` (text)
      - `created_at` (timestamp with timezone)

    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `subscribed_at` (timestamp with timezone)
      - `active` (boolean, default: true)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to published posts
    - Add policies for newsletter subscription
*/

-- Create blog categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author_name text NOT NULL,
  author_role text NOT NULL,
  author_image text NOT NULL,
  featured_image text NOT NULL,
  category text NOT NULL REFERENCES blog_categories(slug),
  tags text[] DEFAULT '{}',
  read_time text NOT NULL,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  active boolean DEFAULT true
);

-- Enable RLS
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policies for blog categories (public read)
CREATE POLICY "Anyone can view blog categories"
  ON blog_categories
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policies for blog posts (public read for published posts)
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Policies for newsletter (public insert)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for blog posts
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert default categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Technology', 'technology', 'Latest trends and insights in technology'),
  ('Design', 'design', 'Design principles, trends, and best practices'),
  ('Marketing', 'marketing', 'Digital marketing strategies and tips'),
  ('Business', 'business', 'Business growth and strategy insights'),
  ('Engineering', 'engineering', 'Engineering solutions and innovations')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample blog posts
INSERT INTO blog_posts (
  title, slug, excerpt, content, author_name, author_role, author_image, 
  featured_image, category, tags, read_time, published, published_at
) VALUES
  (
    'The Future of Web Development in Ethiopia: Trends to Watch in 2025',
    'future-web-development-ethiopia-2025',
    'Explore the emerging technologies and trends that are shaping the web development landscape in Ethiopia and how businesses can leverage them for growth.',
    'As we move into 2025, the web development landscape in Ethiopia is experiencing unprecedented growth. The digital transformation accelerated by recent global events has created new opportunities for businesses to establish their online presence and reach customers in innovative ways.

## Key Trends Shaping the Future

### 1. Progressive Web Applications (PWAs)
Progressive Web Applications are becoming increasingly popular in Ethiopia due to their ability to work offline and provide app-like experiences without requiring app store downloads. This is particularly valuable in areas with inconsistent internet connectivity.

### 2. Mobile-First Development
With mobile internet usage continuing to dominate in Ethiopia, developers are prioritizing mobile-first design approaches. This ensures optimal user experiences across all devices, particularly smartphones which are the primary internet access point for many Ethiopians.

### 3. Local Payment Integration
The integration of local payment systems like telebirr and other mobile money solutions is becoming standard practice for Ethiopian web applications. This localization is crucial for user adoption and business success.

### 4. Voice User Interfaces
As smartphone adoption grows, voice interfaces in local languages are becoming more important. Developers are beginning to incorporate voice search and commands in Amharic and other Ethiopian languages.

## Opportunities for Businesses

Ethiopian businesses that embrace these trends early will have significant competitive advantages. The key is to work with development teams that understand both global best practices and local market needs.

### Getting Started

If you''re considering a web development project, now is the perfect time to start. The combination of improving internet infrastructure and growing digital literacy creates an ideal environment for online business growth.',
    'Daniel Mekonnen',
    'Lead Developer',
    'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'technology',
    ARRAY['Web Development', 'Technology', 'Ethiopia', 'Trends'],
    '5 min read',
    true,
    '2024-12-15 10:00:00+00'
  ),
  (
    'Building Strong Brand Identity: Lessons from Ethiopian Startups',
    'building-strong-brand-identity-ethiopian-startups',
    'Discover how successful Ethiopian startups have built memorable brand identities and what lessons other businesses can learn from their journey.',
    'Brand identity is more than just a logo or color scheme. It''s the complete visual and emotional experience that customers have with your business. Ethiopian startups are increasingly recognizing this and investing in strong brand identities from the beginning.

## What Makes a Strong Brand Identity?

### 1. Cultural Relevance
Successful Ethiopian brands understand their local market while maintaining global appeal. They incorporate cultural elements that resonate with local audiences without alienating international customers.

### 2. Consistency Across Touchpoints
From business cards to social media profiles, successful brands maintain consistent visual and messaging elements across all customer touchpoints.

### 3. Emotional Connection
The best Ethiopian brands tell stories that connect emotionally with their audience. They understand the aspirations and challenges of their customers.

## Case Studies

### Tech Startups
Many Ethiopian tech startups have successfully built strong brands by focusing on solving local problems with global-quality solutions. Their branding reflects both innovation and cultural understanding.

### Service Businesses
Service-based businesses in Ethiopia are learning that professional branding significantly impacts customer trust and willingness to pay premium prices.

## Key Takeaways

1. Invest in professional design from the start
2. Understand your local market deeply
3. Maintain consistency across all platforms
4. Tell authentic stories that resonate
5. Evolve your brand as your business grows

Building a strong brand identity is an investment that pays dividends in customer loyalty, premium pricing, and business growth.',
    'Sara Mohammed',
    'Creative Director',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'design',
    ARRAY['Branding', 'Design', 'Startups', 'Identity'],
    '7 min read',
    true,
    '2024-12-10 14:30:00+00'
  ),
  (
    'Digital Marketing Strategies That Work for African Businesses',
    'digital-marketing-strategies-african-businesses',
    'Learn about proven digital marketing strategies that are driving results for businesses across Africa, with real case studies and actionable insights.',
    'The digital marketing landscape in Africa presents unique opportunities and challenges. Businesses that understand these nuances and adapt their strategies accordingly are seeing remarkable results.

## Understanding the African Digital Landscape

### Mobile-First Reality
In Africa, mobile phones are often the primary and sometimes only way people access the internet. This reality shapes every aspect of digital marketing strategy.

### Social Media Dominance
Platforms like Facebook, WhatsApp, and Instagram have massive user bases across Africa. However, usage patterns and preferences vary significantly by country and demographic.

### Trust and Community
African consumers place high value on community recommendations and trust-building. Word-of-mouth marketing, both online and offline, remains incredibly powerful.

## Proven Strategies

### 1. WhatsApp Business Marketing
Many African businesses are finding success using WhatsApp Business for customer service, order taking, and relationship building. The platform''s widespread adoption makes it ideal for direct customer communication.

### 2. Local Influencer Partnerships
Partnering with local influencers and community leaders can provide authentic endorsements that resonate with target audiences.

### 3. Mobile-Optimized Content
All content must be optimized for mobile consumption, with fast loading times and minimal data usage considerations.

### 4. Community Building
Creating online communities around your brand helps build loyalty and provides valuable customer insights.

## Measuring Success

Success metrics in African markets often differ from global standards. Engagement rates, community growth, and customer lifetime value may be more important than traditional conversion metrics.

## Getting Started

The key to successful digital marketing in Africa is to start local, understand your specific market, and gradually expand your reach as you learn what works.',
    'Abebe Kebede',
    'Marketing Strategist',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'marketing',
    ARRAY['Digital Marketing', 'Africa', 'Strategy', 'Growth'],
    '6 min read',
    true,
    '2024-12-05 09:15:00+00'
  )
ON CONFLICT (slug) DO NOTHING;