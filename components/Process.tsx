import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { MessageSquare } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-berp-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-20 top-40 w-80 h-80 bg-berp-teal opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-berp-dark mb-8 tracking-tight leading-[1.1] uppercase">
            ¿Cómo disfrutar de los <span className="text-berp-teal">servicios de Berp®?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Trabajar con nosotros es un proceso simple, claro y acompañado, pensado para que sepas qué sigue en cada etapa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative group">
              <div className="absolute -top-6 left-8 bg-berp-dark text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold group-hover:bg-berp-teal transition-colors">
                {step.number}
              </div>
              <h2 className="text-xl font-bold text-berp-dark mt-6 mb-4">
                {step.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/56948909095"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-berp-teal text-berp-dark px-8 py-4 rounded-full font-bold hover:bg-berp-dark hover:text-white transition-all duration-300 shadow-lg shadow-berp-teal/20"
          >
            Escríbenos aquí <MessageSquare size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};