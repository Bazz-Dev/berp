import React from 'react';
import { SOLUTIONS } from '../constants';

export const OtherServices: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-berp-dark mb-4">Soluciones Integrales</h2>
          <p className="text-gray-500">Más allá de las redes sociales, construimos tu marca.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((service, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg h-96">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-berp-dark via-gray-900/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-berp-teal rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};