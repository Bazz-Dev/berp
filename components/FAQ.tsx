import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-berp-dark mt-2 tracking-tight">Despeja tus dudas.</h2>
          <p className="text-gray-600 text-lg">Aquí respondemos las preguntas más comunes antes de comenzar.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-berp-dark text-lg">{item.question}</span>
                <ChevronDown className={`text-berp-teal transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} size={20} />
              </button>
              <div
                className={`px-8 transition-all duration-300 ease-in-out ${openIndex === index ? 'py-6 opacity-100 max-h-96' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-berp-light p-10 rounded-3xl border border-berp-teal/10">
          <h3 className="text-2xl md:text-3xl font-bold text-berp-dark mb-4">
            ¿Listo(a) para trabajar con Berp®?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            👉 Escríbenos y cuéntanos qué necesitas
          </p>
          <a
            href="https://wa.me/56948909095"
            target="_blank"
            rel="noreferrer"
              className="inline-flex items-center gap-2 bg-berp-teal text-berp-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-berp-dark hover:text-white transition-all duration-300 shadow-xl shadow-berp-teal/20"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};