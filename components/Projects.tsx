import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Palette, 
  X, 
  Play, 
  Image as ImageIcon,
  Maximize2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  category: string;
  type: 'dev' | 'design';
  shortDescription: string;
  fullDescription: string;
  solution: string;
  impact: string;
  tags: string[];
  mainImage: string;
  gallery: string[]; // Mockups or screenshots
  videoThumbnail?: string; // For dev projects simulate video
  behanceLink?: string; // Only for design
  githubLink?: string; // GitHub repository link
  demoLink?: string; // Live demo or video demo if available (optional)
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Street Soul",
    category: "Food Tech / E-commerce",
    type: 'dev',
    shortDescription: "Plataforma web completa para hamburguesería con sistema de pedidos en tiempo real.",
    fullDescription: "Street Soul es una aplicación web fullstack para hamburguesería artesanal que incluye catálogo interactivo, carrito de compras, sistema de pedidos y panel de administración completo. El sistema implementa autenticación JWT, comunicación en tiempo real vía WebSocket para actualizaciones instantáneas de pedidos, y un dashboard administrativo con estadísticas, reportes y gestión completa de productos y pedidos. Incluye integración opcional con Google OAuth2 para mejorar la experiencia de usuario.",
    solution: "Arquitectura fullstack moderna con React 19 + TypeScript en el frontend, Spring Boot 3 + PostgreSQL en el backend, autenticación JWT con roles diferenciados (cliente/admin), y WebSockets con STOMP para notificaciones en tiempo real.",
    impact: "Sistema completo de gestión que digitaliza el proceso de pedidos, permite seguimiento en tiempo real para clientes y administradores, y proporciona análisis de ventas con visualizaciones interactivas mediante Recharts.",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "WebSockets", "JWT", "TailwindCSS"],
    mainImage: "/images/street-soul/portada_ss.png",
    githubLink: "https://github.com/MilagrosVairo",
    demoLink: "https://youtu.be/YfBG9fp5g5Q",
    gallery: [
       "/images/street-soul/gallery-01.png",
       "/images/street-soul/gallery-02.png",
       "/images/street-soul/gallery-03.png",
       "/images/street-soul/gallery-04.png",
       "/images/street-soul/gallery-05.png",
       "/images/street-soul/gallery-06.png",
       "/images/street-soul/gallery-07.png",
       "/images/street-soul/gallery-08.png",
       "/images/street-soul/gallery-09.png"
    ]
  },
  {
    title: "Rosano Labs",
    category: "Branding & Web Design",
    type: 'design',
    shortDescription: "Identidad de marca y sitio web para laboratorio de soluciones digitales.",
    fullDescription: "Proyecto completo de branding y diseño web para Rosano Labs, un laboratorio de soluciones digitales. El trabajo incluyó la creación del logotipo, definición de paleta de colores corporativos (naranja y morado), selección de tipografía y diseño completo de la landing page. El resultado es una marca moderna y dinámica que transmite innovación, profesionalismo y confianza.",
    solution: "Identidad visual coherente con logo memorable, sistema de colores vibrante y diseño web con CTAs estratégicos que conectan con el público objetivo.",
    impact: "Marca sólida y diferenciada en el mercado digital con presencia web profesional que genera confianza y conversión.",
    tags: ["Figma", "Branding", "UI Design", "Web Design", "Logo Design"],
    mainImage: "/images/rosano-labs/portada_rl.png",
    behanceLink: "https://www.behance.net/milagrosvairo_",
    gallery: [
      "/images/rosano-labs/diseñoRosanoLabs.png",
      "/images/rosano-labs/mockup-01.png",
      "/images/rosano-labs/logo-01.png",
      "/images/rosano-labs/logo-02.png"
    ]
  },
  {
    title: "INIA - Instituto Nacional de Investigación Agropecuaria",
    category: "Agricultural Tech",
    type: 'dev',
    shortDescription: "Proyecto Final de Carrera: Sistema integral de gestión para laboratorios del Instituto Nacional de Investigación Agropecuaria (INIA), automatizando análisis de calidad de semillas.",
    fullDescription: "Proyecto Final de Carrera desarrollado para el Instituto Nacional de Investigación Agropecuaria (INIA). Plataforma completa que digitaliza y automatiza el proceso de análisis de semillas a nivel institucional. El sistema incluye módulos especializados para análisis de pureza, germinación, peso de mil semillas (PMS), tetrazolio y DOSN. Permite gestionar lotes de semillas, realizar análisis según estándares INIA e INASE, generar reportes automáticos en Excel con fórmulas parametrizadas y exportar certificados de calidad oficiales. La solución reemplaza procesos manuales que tomaban horas en minutos, con validaciones automáticas y trazabilidad completa de cada análisis.",
    solution: "Arquitectura fullstack con autenticación robusta, WebSockets para notificaciones en tiempo real y generación dinámica de reportes.",
    impact: "Digitalización completa del flujo de trabajo de laboratorio con trazabilidad total, eliminación de errores de transcripción y exportación automática de certificados.",
    tags: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "WebSockets", "JWT"],
    mainImage: "/images/inia/portada_inia.png",
    demoLink: "https://youtu.be/fBx8Br3TMbk",
    gallery: [
       "/images/inia/gallery-01.png",
       "/images/inia/gallery-02.png",
       "/images/inia/gallery-03.png",
       "/images/inia/gallery-04.png",
       "/images/inia/gallery-05.png",
       "/images/inia/gallery-06.png",
       "/images/inia/gallery-07.png",
       "/images/inia/gallery-08.png",
       "/images/inia/gallery-09.png",
       "/images/inia/gallery-10.png",
       "/images/inia/gallery-11.png",
       "/images/inia/gallery-12.png",
       "/images/inia/gallery-13.png",
       "/images/inia/gallery-14.png"
    ]
  },
  {
    title: "Pet Store - Tienda Online",
    category: "E-commerce / UI Design",
    type: 'design',
    shortDescription: "Diseño de tienda online para productos de mascotas.",
    fullDescription: "Concepto de diseño para una tienda e-commerce especializada en productos para mascotas. La interfaz presenta un diseño alegre y amigable con una paleta de colores vibrantes, priorizando la facilidad de navegación y la experiencia de compra. Incluye secciones para perros, gatos y accesorios, con promociones destacadas y garantías de calidad.",
    solution: "Sistema de diseño coherente con componentes reutilizables, categorización clara de productos y CTAs de compra optimizados.",
    impact: "Diseño moderno que genera confianza y facilita la conversión en compras online.",
    tags: ["Figma", "E-commerce", "UI/UX", "Responsive Design"],
    mainImage: "/images/pet-store/portada_pet.png",
    behanceLink: "https://www.behance.net/milagrosvairo_",
    gallery: [  
      "/images/pet-store/main.png"
    ]
  },
  {
    title: "Skybound - Agencia de Viajes",
    category: "Landing Page / Tourism",
    type: 'design',
    shortDescription: "Landing page para agencia de viajes y reservas de vuelos.",
    fullDescription: "Diseño de landing page para Skybound, una agencia de viajes que ofrece experiencias únicas de vuelo y destinos turísticos. El diseño utiliza imágenes atractivas de destinos paradisíacos, integraciones con plataformas de reservas reconocidas (TripAdvisor, Booking.com, Expedia, Trivago) y una UX optimizada para facilitar la búsqueda y reserva de viajes.",
    solution: "Diseño inspirador con hero section impactante, filtros de búsqueda intuitivos y secciones de destinos populares con carruseles interactivos.",
    impact: "Interfaz que transmite confianza y deseo de explorar nuevos destinos, optimizada para conversión en reservas.",
    tags: ["Figma", "Web Design", "UI/UX", "Tourism"],
    mainImage: "/images/skybound/portada_s.png",
    behanceLink: "https://www.behance.net/milagrosvairo_",
    gallery: [
      "/images/skybound/main.png"
    ]
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dev' | 'design'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.type === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxImage === null || !selectedProject) return;

    const fullGallery = getFullGallery(selectedProject);

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft' && lightboxImage > 0) {
        setLightboxImage(lightboxImage - 1);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight' && lightboxImage < fullGallery.length - 1) {
        setLightboxImage(lightboxImage + 1);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxImage, selectedProject]);

  const handleCloseModal = () => {
    setSelectedProject(null);
    setLightboxImage(null);
    setIsZoomed(false);
  };

  // Create full gallery including main image for design projects
  const getFullGallery = (project: Project): string[] => {
    if (project.type === 'design' && project.gallery.length > 0) {
      return [project.mainImage, ...project.gallery];
    }
    return project.gallery;
  };

  return (
    <section className="py-24 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Proyectos destacados
          </h2>
          <p className="text-gray-600 text-lg font-light">
             Explora una selección de mis trabajos en desarrollo y diseño.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'dev', label: 'Desarrollo' },
              { id: 'design', label: 'Diseño UX/UI' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`
                  px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                  ${filter === tab.id 
                    ? 'bg-brand-pink text-white shadow-md transform scale-105' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(255,0,128,0.15)] transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-6 py-2 bg-white/90 backdrop-blur text-gray-900 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Ver Detalles
                  </span>
                </div>
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`
                    inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md
                    ${project.type === 'design' ? 'bg-purple-100/90 text-purple-700' : 'bg-blue-100/90 text-blue-700'}
                  `}>
                    {project.type === 'design' ? <Palette size={12} /> : <Layers size={12} />}
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-pink transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-6 font-light text-sm line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Mini Solution/Impact - Compact for grid */}
                <div className="mt-auto space-y-3 pt-6 border-t border-gray-50">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-gray-400 px-2 py-1">+ {project.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:p-6">
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          />
          
          <div className="relative bg-white w-full max-w-6xl max-h-[95vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
            
            {/* Modal Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-gray-800 hover:text-brand-pink transition-all"
            >
              <X size={24} />
            </button>

            {/* Modal Content Scrollable Area */}
            <div className="overflow-y-auto flex-1 custom-scrollbar">
              
              {/* Hero Media Section */}
              <div className="w-full bg-black relative group/video" style={{ minHeight: '70vh', height: '70vh' }}>
                {selectedProject.type === 'dev' && selectedProject.demoLink ? (
                   <iframe 
                     src={selectedProject.demoLink.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/')}
                     className="w-full h-full"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                   />
                ) : selectedProject.type === 'dev' && selectedProject.videoThumbnail ? (
                   <>
                      <img 
                        src={selectedProject.videoThumbnail} 
                        alt="Video Preview" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/video:bg-black/40 transition-colors cursor-pointer">
                         <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl transform group-hover/video:scale-110 transition-transform">
                            <Play size={40} className="text-white ml-2" fill="currentColor" />
                         </div>
                         <p className="absolute bottom-8 text-white font-medium tracking-wide bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                           Ver Demo de Funcionalidad (Video Recorte)
                         </p>
                      </div>
                   </>
                ) : (
                  <div 
                    onClick={() => {
                      const fullGallery = getFullGallery(selectedProject);
                      if (fullGallery.length > 0) setLightboxImage(0);
                    }}
                    className={getFullGallery(selectedProject).length > 0 ? "cursor-pointer" : ""}
                  >
                    <img 
                      src={selectedProject.mainImage} 
                      alt="Main Header" 
                      className="w-full h-full object-contain"
                      style={{ maxHeight: '70vh' }}
                    />
                    {getFullGallery(selectedProject).length > 0 && selectedProject.type === 'design' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors group">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full font-bold text-gray-900 flex items-center gap-2">
                            <Maximize2 size={20} /> Ver en grande
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-gray-100">
                
                {/* Left: Main Details */}
                <div className="col-span-2 p-8 md:p-12 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        selectedProject.type === 'design' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {selectedProject.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Solution & Impact Boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                      <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                        <Layers size={18} /> Solución
                      </h4>
                      <p className="text-purple-800/80 text-sm leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                      <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                        <Maximize2 size={18} /> Impacto
                      </h4>
                      <p className="text-orange-800/80 text-sm leading-relaxed">
                        {selectedProject.impact}
                      </p>
                    </div>
                  </div>
                  
                  {/* Gallery Section */}
                  {selectedProject.gallery.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 flex items-center gap-2">
                        <ImageIcon size={20} /> {selectedProject.type === 'design' ? 'Mockups & Diseños' : 'Galería & Screenshots'}
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedProject.gallery.map((img, i) => (
                          <div 
                            key={i} 
                            onClick={() => {
                              // For design projects, add 1 because mainImage is at index 0 in fullGallery
                              const index = selectedProject.type === 'design' ? i + 1 : i;
                              setLightboxImage(index);
                            }}
                            className="rounded-xl overflow-hidden shadow-sm border border-gray-100 h-48 group cursor-pointer hover:border-brand-pink transition-all"
                          >
                            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Meta & Links */}
                <div className="p-8 md:p-12 bg-gray-50 space-y-8 h-full">
                  
                  {/* Action Buttons */}
                  <div className="space-y-4">
                    {selectedProject.type === 'dev' && selectedProject.githubLink && (
                      <a 
                        href={selectedProject.githubLink}
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors gap-2"
                      >
                         <Github size={18} /> Ver en GitHub
                      </a>
                    )}
                    
                    {selectedProject.type === 'dev' && !selectedProject.githubLink && (
                      <div className="flex items-center justify-center w-full py-3 bg-gray-200 text-gray-600 rounded-xl font-semibold gap-2">
                         <Github size={18} /> Código Privado
                      </div>
                    )}
                    
                    {selectedProject.type === 'design' && selectedProject.behanceLink && (
                      <a 
                        href={selectedProject.behanceLink}
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center w-full py-3 bg-white border-2 border-[#1769ff] text-[#1769ff] rounded-xl font-semibold hover:bg-[#1769ff] hover:text-white transition-colors gap-2"
                      >
                         <Palette size={18} /> Ver en Behance
                      </a>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                      Tecnologías
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="pt-8 border-t border-gray-200">
                    <p className="text-gray-500 text-sm mb-4">¿Te interesa saber más sobre cómo construí esto?</p>
                    <a href="#contact" className="text-brand-pink font-bold hover:underline flex items-center gap-1">
                      Hablemos <ChevronRight size={16} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {selectedProject && lightboxImage !== null && (() => {
        const fullGallery = getFullGallery(selectedProject);
        return (
        <div className={`fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm ${
          isZoomed ? 'overflow-auto' : 'flex items-center justify-center'
        } px-4 py-6`}>
          <button 
            onClick={() => {
              setLightboxImage(null);
              setIsZoomed(false);
            }}
            className="fixed top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
          >
            <X size={28} />
          </button>

          {/* Zoom Toggle Button */}
          <button 
            onClick={() => setIsZoomed(!isZoomed)}
            className="fixed top-6 right-24 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
            title={isZoomed ? 'Ajustar a pantalla' : 'Ver tamaño completo'}
          >
            <Maximize2 size={24} />
          </button>

          {/* Previous Button */}
          {lightboxImage > 0 && (
            <button
              onClick={() => {
                setLightboxImage(lightboxImage - 1);
                setIsZoomed(false);
              }}
              className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all z-20"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Next Button */}
          {lightboxImage < fullGallery.length - 1 && (
            <button
              onClick={() => {
                setLightboxImage(lightboxImage + 1);
                setIsZoomed(false);
              }}
              className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all z-20"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Image */}
          <div className={`${
            isZoomed 
              ? 'w-full max-w-5xl mx-auto my-6' 
              : 'max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center'
          }`}>
            <img 
              src={fullGallery[lightboxImage]} 
              alt={`Gallery ${lightboxImage + 1}`}
              className={`rounded-lg shadow-2xl ${
                isZoomed 
                  ? 'w-full h-auto' 
                  : 'max-w-full max-h-full object-contain'
              }`}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium">
            {lightboxImage + 1} / {fullGallery.length}
          </div>
        </div>
        );
      })()}
    </section>
  );
};

export default Projects;