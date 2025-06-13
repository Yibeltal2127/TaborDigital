import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MetaTags from '../components/SEO/MetaTags';
import StructuredData from '../components/SEO/StructuredData';
import { ArrowLeft, ExternalLink, Calendar, User, Star, Quote, ChevronLeft, ChevronRight, Tag, PenTool as Tool, Package } from 'lucide-react';
import { fetchPortfolioProject, fetchFeaturedProjects, type PortfolioProject } from '../lib/portfolio';
import { generatePageTitle, generateMetaDescription, generateCanonicalUrl } from '../utils/seo';

const PortfolioProject = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (slug) {
      loadProject(slug);
    }
  }, [slug]);

  const loadProject = async (projectSlug: string) => {
    setLoading(true);
    try {
      const [projectData, featuredProjects] = await Promise.all([
        fetchPortfolioProject(projectSlug),
        fetchFeaturedProjects(6)
      ]);
      
      setProject(projectData);
      // Filter out current project from related projects
      setRelatedProjects(featuredProjects.filter(p => p.slug !== projectSlug).slice(0, 3));
    } catch (error) {
      console.error('Error loading portfolio project:', error);
    } finally {
      setLoading(false);
    }
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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/portfolio"
            className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [project.featured_image, ...project.gallery_images];
  const hasTestimonials = project.testimonials && project.testimonials.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const pageTitle = generatePageTitle(`${project.title} - Portfolio Project`);
  const pageDescription = generateMetaDescription(project.description);

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        keywords={[...project.technologies, ...project.tools, project.category]}
        canonical={generateCanonicalUrl(`/portfolio/${project.slug}`)}
        type="article"
        image={project.featured_image}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/portfolio"
              className="inline-flex items-center text-[#FF6B35] hover:text-[#4ECDC4] font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Project Info */}
              <div>
                {/* Category and Featured Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {project.category.replace('-', ' ')}
                  </span>
                  {project.featured && (
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star size={14} className="mr-1 fill-current" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <User size={18} className="mr-2" />
                    <span>{project.client_name}</span>
                  </div>
                  {project.project_year && (
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2" />
                      <span>{project.project_year}</span>
                    </div>
                  )}
                  {project.project_duration && (
                    <div className="flex items-center">
                      <span>{project.project_duration}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.project_url && (
                    <a 
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                    >
                      View Live Project
                      <ExternalLink size={18} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>

              {/* Image Gallery */}
              <div className="relative">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={allImages[currentImageIndex]} 
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  {allImages.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {allImages.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto">
                    {allImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          index === currentImageIndex ? 'border-[#FF6B35]' : 'border-gray-200'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Technologies */}
              {project.technologies.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Tag className="mr-2 text-[#FF6B35]" size={20} />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools */}
              {project.tools.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Tool className="mr-2 text-[#FF6B35]" size={20} />
                    Tools Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables */}
              {project.deliverables.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Package className="mr-2 text-[#FF6B35]" size={20} />
                    Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {project.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {hasTestimonials && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Client Testimonials</h2>
              <div className="space-y-6">
                {project.testimonials?.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {testimonial.client_image && (
                          <img 
                            src={testimonial.client_image} 
                            alt={testimonial.client_name}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                        )}
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.client_name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.client_role}, {testimonial.client_company}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                      <Quote className="inline mr-2 text-[#FF6B35]" size={20} />
                      {testimonial.testimonial}
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link 
                    key={relatedProject.id}
                    to={`/portfolio/${relatedProject.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    <img 
                      src={relatedProject.featured_image} 
                      alt={relatedProject.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-[#FF6B35] text-white px-2 py-1 rounded text-xs font-medium capitalize">
                          {relatedProject.category.replace('-', ' ')}
                        </span>
                        {relatedProject.featured && (
                          <Star size={16} className="text-yellow-400 fill-current" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedProject.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PortfolioProject;