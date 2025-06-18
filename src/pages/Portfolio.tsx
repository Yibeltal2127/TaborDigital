import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/SEO/MetaTags';
import StructuredData from '../components/SEO/StructuredData';
import { ExternalLink, Filter, ChevronDown, Star, Quote, Loader, Eye, Calendar, User, Search } from 'lucide-react';
import { 
  fetchPortfolioProjects, 
  fetchPortfolioCategories, 
  type PortfolioProject, 
  type PortfolioCategory 
} from '../lib/portfolio';
import { generatePageTitle, generateMetaDescription, generateKeywords, generateCanonicalUrl } from '../utils/seo';
import { scrollToTop } from '../utils/smoothScroll';

const ProjectCard = ({ project }: { project: PortfolioProject }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [project.featured_image, ...project.gallery_images];
  const hasTestimonials = project.testimonials && project.testimonials.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md group bg-white">
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={allImages[currentImageIndex]} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Star size={14} className="mr-1 fill-current" />
              Featured
            </span>
          </div>
        )}

        {/* Image Navigation */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              →
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-[#FF6B35] mb-2 capitalize">{project.category.replace('-', ' ')}</p>
            <p className="text-gray-200 text-sm mb-3 line-clamp-2">{project.description}</p>
            
            {/* Project Meta */}
            <div className="flex items-center text-xs text-gray-300 mb-3 space-x-4">
              <div className="flex items-center">
                <User size={12} className="mr-1" />
                {project.client_name}
              </div>
              {project.project_year && (
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {project.project_year}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-gray-500">+{project.technologies.length - 3} more</span>
              )}
            </div>
          )}
          
          {hasTestimonials && (
            <div className="flex items-center text-yellow-400 mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < (project.testimonials?.[0]?.rating || 0) ? 'fill-current' : 'text-gray-300'}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">Client Review</span>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Link 
            to={`/portfolio/${project.slug}`}
            className="text-[#FF6B35] hover:text-[#4ECDC4] font-medium transition-colors flex items-center"
          >
            <Eye size={16} className="mr-1" />
            View Details
          </Link>
          
          {project.project_url && (
            <a 
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#FF6B35] hover:text-[#4ECDC4] transition-colors font-medium"
            >
              Live Project
              <ExternalLink size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [categories, setCategories] = useState<PortfolioCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const pageTitle = generatePageTitle('Our Portfolio - Featured Projects & Success Stories');
  const pageDescription = generateMetaDescription(
    'Explore our diverse portfolio showcasing design excellence and technical innovation across multiple disciplines. See our successful projects and client testimonials.'
  );
  const pageKeywords = generateKeywords(['portfolio', 'projects', 'case studies', 'client work', 'design showcase', 'development projects']);

  useEffect(() => {
    loadPortfolioData();
  }, [selectedCategory, showFeaturedOnly]);

  useEffect(() => {
    scrollToTop();
  }, []);

  const loadPortfolioData = async () => {
    setLoading(true);
    try {
      const [projectsData, categoriesData] = await Promise.all([
        fetchPortfolioProjects(selectedCategory, showFeaturedOnly),
        fetchPortfolioCategories()
      ]);
      
      setProjects(projectsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading portfolio data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  const allCategories = ['All', ...categories.map(cat => cat.name)];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={generateCanonicalUrl('/portfolio')}
        type="website"
      />

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our diverse portfolio showcasing design excellence and technical innovation across multiple disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none"
              />
            </div>

            <div className="flex gap-4">
              {/* Featured Filter */}
              <button
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  showFeaturedOnly
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Star size={16} className={showFeaturedOnly ? 'fill-current' : ''} />
                <span>Featured Only</span>
              </button>

              {/* Category Filter */}
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200"
                >
                  <Filter size={20} className="text-[#FF6B35]" />
                  <span>{selectedCategory}</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {isFilterOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                    {allCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          selectedCategory === category ? 'text-[#FF6B35]' : 'text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <Loader className="animate-spin text-[#FF6B35]" size={32} />
              <span className="ml-2 text-gray-600">Loading projects...</span>
            </div>
          )}
          
          {/* Projects Grid */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
          
          {!loading && filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchTerm 
                  ? 'No projects found matching your search.' 
                  : showFeaturedOnly 
                    ? 'No featured projects found in this category.' 
                    : 'No projects found in this category.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Stats */}
      {!loading && filteredProjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] rounded-2xl shadow-lg p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-6">Portfolio Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">{projects.length}+</div>
                  <p>Successful Projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{categories.length}</div>
                  <p>Service Categories</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Portfolio;