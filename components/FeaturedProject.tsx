import React from 'react';
import { ArrowRight, Share2, Facebook, Twitter, Linkedin, Tag, Calendar, Layers, MessageCircle } from 'lucide-react';
import { FEATURED_PROJECTS, WHATSAPP } from '../constants';

export const FeaturedProject: React.FC = () => {
  const renderTitle = (title: string, highlight?: string) => {
    if (!highlight) return title;
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? <span key={i} className="text-berp-teal">{part}</span>
        : part
    );
  };
  return (
    <section id="portfolio" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <span className="inline-block bg-berp-teal text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Portafolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-berp-dark mb-6 tracking-tight">Casos de Éxito</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Marcas que confiaron en Berp® y hoy comunican con más claridad, estrategia y resultados.
          </p>
        </div>

        {FEATURED_PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index !== 0 ? 'mt-16 pt-16 lg:mt-32 lg:pt-32 border-t border-gray-100' : ''}`}>

              {/* Image Block - Order toggles based on index */}
              <div className={`grid grid-cols-2 gap-4 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                {/* Stack */}
                <div className="flex flex-col gap-4">
                  <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative group shadow-sm">
                    <img
                      src={project.images.topSmall}
                      alt="Detail 1"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden relative group shadow-sm">
                    <img
                      src={project.images.bottomSmall}
                      alt="Detail 2"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Tall Image */}
                <div className="h-full bg-gray-100 rounded-2xl overflow-hidden relative group shadow-sm">
                  <img
                    src={project.images.mainTall}
                    alt="Main View"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Text Block - Order toggles based on index */}
              <div className={`flex flex-col justify-center text-center lg:text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="inline-block mb-6">
                  <span className="inline-block bg-berp-teal text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    Caso de Éxito
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-berp-dark mb-8 tracking-tight leading-[1.1] uppercase">
                  {project.titleHighlight ? (
                    <>
                      {renderTitle(project.title, project.titleHighlight)}
                      <br />{project.subtitle}
                    </>
                  ) : (
                    <>
                      {project.title} <span className="text-berp-teal">&</span><br />{project.subtitle.replace('& ', '')}
                    </>
                  )}
                </h2>

                <div className="space-y-6 text-gray-500 text-[16px] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                  <p>{project.description}</p>
                </div>

                {project.link && (
                  <div className="mb-12">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 bg-berp-dark text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-berp-teal transition-all duration-300 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                      Visitar Instagram <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}

                {/* Info Section */}
                <div className="border-t border-gray-100 pt-10">
                  <h3 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-6">Detalles del Proyecto</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-2 text-left">
                    <div className="flex items-start gap-3">
                      <Layers size={18} className="text-berp-teal mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-berp-dark text-sm uppercase">Servicios</p>
                        <p className="text-gray-500 text-sm">{project.services}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Tag size={18} className="text-berp-teal mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-berp-dark text-sm uppercase">Cliente</p>
                        <p className="text-gray-500 text-sm">{project.client}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar size={18} className="text-berp-teal mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-berp-dark text-sm uppercase">Fecha</p>
                        <p className="text-gray-500 text-sm">{project.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}

        {/* General CTA at the end of all projects */}
        <div className="mt-20 text-center">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-berp-teal text-berp-dark px-8 py-4 rounded-full font-bold hover:bg-berp-dark hover:text-white transition-all duration-300 shadow-lg shadow-berp-teal/20"
          >
            ¿Quieres resultados así? Conversemos <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};