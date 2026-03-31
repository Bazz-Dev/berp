import React from 'react';
import { SOLUTIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-berp-dark tracking-tight">Soluciones integrales.</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-[16px] mt-4 leading-relaxed">
            Servicios que conectan estrategia, diseño y ejecución para construir marcas coherentes, funcionales y con foco en resultados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {SOLUTIONS.map((service, idx) => (
            <a
              key={idx}
              href={service.link || '#contact'}
              target={service.link?.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl shadow-lg h-[450px] cursor-pointer block w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="text-2xl font-bold text-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="-2xl font-textsemibold text-white">{service.title}</h3>
                    <div className="bg-berp-teal p-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={20} color="white" />
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {service.description}
                  </p>

                  <ul className="text-gray-400 text-xs space-y-1.5 border-t border-gray-700 pt-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-berp-teal rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 text-berp-teal text-[11px] font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    Pincha para ver catálogo
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};