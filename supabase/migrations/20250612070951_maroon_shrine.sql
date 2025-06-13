/*
  # Create portfolio management system

  1. New Tables
    - `portfolio_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `slug` (text, unique)
      - `description` (text)
      - `created_at` (timestamp)
    
    - `portfolio_projects`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `slug` (text, unique)
      - `description` (text, required)
      - `client_name` (text, required)
      - `project_url` (text)
      - `featured_image` (text, required)
      - `gallery_images` (text array)
      - `category` (text, references portfolio_categories.slug)
      - `technologies` (text array)
      - `deliverables` (text array)
      - `tools` (text array)
      - `platforms` (text array)
      - `project_duration` (text)
      - `project_year` (integer)
      - `featured` (boolean, default false)
      - `published` (boolean, default false)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `portfolio_testimonials`
      - `id` (uuid, primary key)
      - `project_id` (uuid, references portfolio_projects.id)
      - `client_name` (text, required)
      - `client_role` (text, required)
      - `client_company` (text, required)
      - `client_image` (text)
      - `testimonial` (text, required)
      - `rating` (integer, 1-5)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to published content
    - Add policies for anon users to submit testimonials
*/

-- Create portfolio categories table
CREATE TABLE IF NOT EXISTS portfolio_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create portfolio projects table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  client_name text NOT NULL,
  project_url text,
  featured_image text NOT NULL,
  gallery_images text[] DEFAULT '{}',
  category text NOT NULL REFERENCES portfolio_categories(slug),
  technologies text[] DEFAULT '{}',
  deliverables text[] DEFAULT '{}',
  tools text[] DEFAULT '{}',
  platforms text[] DEFAULT '{}',
  project_duration text,
  project_year integer,
  featured boolean DEFAULT false,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create portfolio testimonials table
CREATE TABLE IF NOT EXISTS portfolio_testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES portfolio_projects(id) ON DELETE CASCADE,
  client_name text NOT NULL,
  client_role text NOT NULL,
  client_company text NOT NULL,
  client_image text,
  testimonial text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE portfolio_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_testimonials ENABLE ROW LEVEL SECURITY;

-- Policies for portfolio categories (public read)
CREATE POLICY "Anyone can view portfolio categories"
  ON portfolio_categories
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policies for portfolio projects (public read for published projects)
CREATE POLICY "Anyone can view published portfolio projects"
  ON portfolio_projects
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Policies for portfolio testimonials (public read and insert)
CREATE POLICY "Anyone can view portfolio testimonials"
  ON portfolio_testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can submit portfolio testimonials"
  ON portfolio_testimonials
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create trigger for portfolio projects updated_at
CREATE TRIGGER update_portfolio_projects_updated_at
  BEFORE UPDATE ON portfolio_projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert default categories
INSERT INTO portfolio_categories (name, slug, description) VALUES
  ('Web Development', 'web-development', 'Custom websites and web applications'),
  ('Graphic Design', 'graphic-design', 'Brand identity and visual design projects'),
  ('Interior Design', 'interior-design', 'Space planning and interior design projects'),
  ('Business Consulting', 'business-consulting', 'Strategic consulting and business optimization'),
  ('Digital Marketing', 'digital-marketing', 'Marketing campaigns and digital strategies'),
  ('Engineering Design', 'engineering-design', 'Technical drawings and engineering solutions')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample portfolio projects
INSERT INTO portfolio_projects (
  title, slug, description, client_name, project_url, featured_image, gallery_images,
  category, technologies, deliverables, tools, platforms, project_duration, project_year,
  featured, published
) VALUES
  (
    'Modern E-Commerce Platform for Ethiopian Artisans',
    'modern-ecommerce-platform-ethiopian-artisans',
    'A comprehensive e-commerce solution designed specifically for Ethiopian artisans to showcase and sell their traditional crafts globally. The platform features multi-language support, local payment integration, and inventory management tailored for handmade products.',
    'Ethiopian Artisans Collective',
    'https://example.com/ecommerce-platform',
    'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ARRAY[
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    'web-development',
    ARRAY['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    ARRAY['Custom Website', 'Admin Dashboard', 'Payment Integration', 'Inventory System', 'Mobile App'],
    ARRAY['VS Code', 'Figma', 'Postman', 'MongoDB Compass'],
    ARRAY['Web', 'Mobile', 'Admin Panel'],
    '4 months',
    2024,
    true,
    true
  ),
  (
    'Complete Brand Identity for Sunrise Technologies',
    'complete-brand-identity-sunrise-technologies',
    'A comprehensive brand identity project that transformed Sunrise Technologies from a startup into a recognizable tech company. The project included logo design, brand guidelines, marketing materials, and digital assets.',
    'Sunrise Technologies',
    'https://example.com/sunrise-branding',
    'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ARRAY[
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    'graphic-design',
    ARRAY[],
    ARRAY['Logo Design', 'Brand Guidelines', 'Business Cards', 'Letterhead', 'Social Media Templates', 'Website Design'],
    ARRAY['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma'],
    ARRAY['Print', 'Digital', 'Social Media'],
    '6 weeks',
    2024,
    true,
    true
  ),
  (
    'Modern Office Space Design for Tech Hub Ethiopia',
    'modern-office-space-design-tech-hub-ethiopia',
    'A contemporary office interior design project that created an inspiring workspace for Tech Hub Ethiopia. The design focused on collaboration, productivity, and employee well-being while incorporating Ethiopian cultural elements.',
    'Tech Hub Ethiopia',
    'https://example.com/office-interior',
    'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ARRAY[
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    'interior-design',
    ARRAY[],
    ARRAY['Space Planning', '3D Renderings', 'Furniture Selection', 'Lighting Design', 'Material Specifications', 'Project Management'],
    ARRAY['SketchUp', 'V-Ray', 'AutoCAD', 'Photoshop', '3ds Max'],
    ARRAY['3D Visualization', 'Technical Drawings'],
    '3 months',
    2024,
    true,
    true
  ),
  (
    'Digital Marketing Campaign for Fashion Ethiopia',
    'digital-marketing-campaign-fashion-ethiopia',
    'A comprehensive digital marketing strategy that increased Fashion Ethiopia''s online presence by 300% and drove significant sales growth through targeted social media campaigns and influencer partnerships.',
    'Fashion Ethiopia',
    'https://example.com/fashion-campaign',
    'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ARRAY[
      'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    'digital-marketing',
    ARRAY[],
    ARRAY['Social Media Strategy', 'Content Creation', 'Influencer Campaigns', 'Paid Advertising', 'Analytics Reports', 'Brand Partnerships'],
    ARRAY['Facebook Ads Manager', 'Instagram Creator Studio', 'Google Analytics', 'Canva', 'Hootsuite'],
    ARRAY['Instagram', 'Facebook', 'TikTok', 'Google Ads'],
    '6 months',
    2024,
    false,
    true
  ),
  (
    'Business Growth Strategy for Green Valley Farms',
    'business-growth-strategy-green-valley-farms',
    'A strategic consulting project that helped Green Valley Farms expand their operations, optimize their supply chain, and increase profitability by 150% through data-driven insights and operational improvements.',
    'Green Valley Farms',
    'https://example.com/green-valley-strategy',
    'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ARRAY[
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    'business-consulting',
    ARRAY[],
    ARRAY['Market Analysis', 'Business Plan', 'Financial Projections', 'Operational Strategy', 'Growth Roadmap', 'Implementation Support'],
    ARRAY['Excel', 'PowerBI', 'Tableau', 'SWOT Analysis', 'Financial Modeling'],
    ARRAY['Business Strategy', 'Financial Planning'],
    '4 months',
    2024,
    false,
    true
  ),
  (
    'Structural Engineering for Addis Business Center',
    'structural-engineering-addis-business-center',
    'Complete structural engineering design for a modern 12-story business center in Addis Ababa. The project included seismic analysis, foundation design, and MEP coordination for a sustainable commercial building.',
    'Addis Business Center Development',
    'https://example.com/addis-business-center',
    'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ARRAY[
      'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    'engineering-design',
    ARRAY[],
    ARRAY['Structural Drawings', 'Foundation Design', 'Seismic Analysis', 'MEP Coordination', 'Construction Documents', 'Site Supervision'],
    ARRAY['AutoCAD', 'ETABS', 'SAP2000', 'Revit', 'Civil 3D'],
    ARRAY['Technical Drawings', 'Engineering Analysis'],
    '8 months',
    2024,
    false,
    true
  )
ON CONFLICT (slug) DO NOTHING;

-- Insert sample testimonials
INSERT INTO portfolio_testimonials (
  project_id, client_name, client_role, client_company, client_image, testimonial, rating
) VALUES
  (
    (SELECT id FROM portfolio_projects WHERE slug = 'modern-ecommerce-platform-ethiopian-artisans'),
    'Almaz Tadesse',
    'Director',
    'Ethiopian Artisans Collective',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Tabor Digital Solutions transformed our vision into reality. The e-commerce platform they built has revolutionized how we connect Ethiopian artisans with global customers. Their understanding of our local needs combined with international standards was exceptional.',
    5
  ),
  (
    (SELECT id FROM portfolio_projects WHERE slug = 'complete-brand-identity-sunrise-technologies'),
    'Dawit Bekele',
    'CEO',
    'Sunrise Technologies',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'The brand identity they created for us perfectly captures our company''s innovative spirit. Since the rebrand, we''ve seen a 40% increase in client inquiries and significantly improved brand recognition in the market.',
    5
  ),
  (
    (SELECT id FROM portfolio_projects WHERE slug = 'modern-office-space-design-tech-hub-ethiopia'),
    'Hanan Ahmed',
    'Operations Manager',
    'Tech Hub Ethiopia',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Our new office space has completely transformed our work culture. Employee satisfaction has increased dramatically, and we''ve noticed improved collaboration and productivity. The design perfectly balances modern aesthetics with Ethiopian cultural elements.',
    5
  )
ON CONFLICT DO NOTHING;