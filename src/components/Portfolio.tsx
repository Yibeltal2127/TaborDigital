import React, { useState, useEffect } from 'react';
import { ExternalLink, Filter, ChevronDown, Star, Quote, Loader, Eye, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  fetchPortfolioProjects, 
  fetchPortfolioCategories, 
  type PortfolioProject, 
  type PortfolioCategory 
} from '../lib/portfolio';

const ProjectCard = ({ project }: { project: PortfolioProject }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTestimonials, setShowTestimonials] = useState(false);

  const allImages = [project.featured_image, ...project.gallery_images];
  const hasTestimonials = project.testimonials && project.testimonials.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md group bg-white">
      {/* Image Gallery */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={allImages[currentImageIndex]} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
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
              {project.project_duration && (
                <div className="flex items-center">
                  <span>{project.project_duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Expandable Content */}
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
          <div className="space-y-4 text-sm text-gray-700 mb-4">
            <div>
              <p><strong>Client:</strong> {project.client_name}</p>
              <p><strong>Description:</strong> {project.description}</p>
            </div>
            
            {project.technologies.length > 0 && (
              <div>
                <p><strong>Technologies:</strong></p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {project.deliverables.length > 0 && (
              <div>
                <p><strong>Deliverables:</strong></p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {project.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="text-xs">{deliverable}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.tools.length > 0 && (
              <div>
                <p><strong>Tools Used:</strong></p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {hasTestimonials && (
              <div>
                <button
                  onClick={() => setShowTestimonials(!showTestimonials)}
                  className="flex items-center text-[#FF6B35] hover:text-[#4ECDC4] font-medium text-sm"
                >
                  <Quote size={14} className="mr-1" />
                  {showTestimonials ? 'Hide' : 'Show'} Client Testimonial
                </button>
                
                {showTestimonials && project.testimonials && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    {project.testimonials.map((testimonial) => (
                      <div key={testimonial.id} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          {testimonial.client_image && (
                            <img 
                              src={testimonial.client_image} 
                              alt={testimonial.client_name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          )}
                          <div>
                            <p className="font-medium text-sm">{testimonial.client_name}</p>
                            <p className="text-xs text-gray-600">{testimonial.client_role}, {testimonial.client_company}</p>
                          </div>
                          <div className="flex ml-auto">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        <p className="text-sm italic text-gray-700">"{testimonial.testimonial}"</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#FF6B35] hover:text-[#4ECDC4] font-medium transition-colors flex items-center"
          >
            <Eye size={16} className="mr-1" />
            {isExpanded ? 'Less Info' : 'More Info'}
            <ChevronDown 
              size={16} 
              className={`ml-1 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
          
          {project.project_url && (
            <a 
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#FF6B35] hover:text-[#4ECDC4] transition-colors font-medium"
            >
              View Project
              <ExternalLink size={16} className="ml-2" />
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

  useEffect(() => {
    loadPortfolioData();
  }, [selectedCategory, showFeaturedOnly]);

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

  const allCategories = ['All', ...categories.map(cat => cat.name)];

  const handleViewAllProjects = () => {
    setSelectedCategory('All');
    setShowFeaturedOnly(false);
    setIsFilterOpen(false);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio showcasing design excellence and technical innovation across multiple disciplines.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
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
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
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
        </div>
        
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
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
        
        {!loading && projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {showFeaturedOnly 
                ? 'No featured projects found in this category.' 
                : 'No projects found in this category.'}
            </p>
          </div>
        )}
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/portfolio"
            className="bg-white border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View All Projects
          </Link>
        </div>

        {/* Portfolio Stats */}
        {!loading && projects.length > 0 && (
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">{projects.length}+</div>
                <p className="text-gray-600">Successful Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">{categories.length}</div>
                <p className="text-gray-600">Service Categories</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">100%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;