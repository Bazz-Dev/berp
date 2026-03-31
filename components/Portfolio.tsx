import React from 'react';
import { PORTFOLIO, WHATSAPP } from '../constants';
import { Quote, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const Portfolio: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-berp-dark tracking-tight">Casos que inspiran.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[16px] mt-4">
            Resultados tangibles. Desliza para ver el cambio.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-32">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Interactive Slider Side */}
              <div className="w-full max-w-xl mx-auto lg:mx-0">
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  alt={item.client}
                />
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center h-full pt-4">
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-900 uppercase mb-1">Marca:
                    <span className="text-berp-dark text-xl md:text-2xl font-semibold block mt-1 tracking-tight">{item.client}</span></h3>
                  <div className="mt-4 flex items-center gap-2 text-gray-600">
                    <span className="font-bold text-sm text-gray-900 uppercase">Cliente:</span>
                    {item.contactName ? (
                      <span className="text-gray-600">{item.contactName}</span>
                    ) : item.testimonial ? (
                      <span className="text-gray-600">{item.testimonial.author}</span>
                    ) : (
                      <span className="text-gray-600">Equipo {item.client}</span>
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-gray-600">
                    <Calendar size={16} className="text-berp-teal" />
                    <span className="font-medium text-sm">{item.year}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-berp-teal font-semibold text-[16px] md:text-lg mb-4">Servicios realizados:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-gray-600 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                      {item.description}
                    </li>
                    <li className="flex flex-wrap gap-2 mt-4">
                      {item.services.map((service, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wide">
                          <CheckCircle2 size={12} className="text-berp-teal" /> {service}
                        </span>
                      ))}
                    </li>
                  </ul>
                </div>

                {item.result && (
                  <div className="mb-8 p-6 bg-berp-light rounded-2xl border border-berp-teal/10">
                    <h4 className="text-berp-teal font-bold text-sm uppercase tracking-wider mb-2">Resultado de éxito:</h4>
                    <p className="text-berp-dark font-medium text-[16px] md:text-lg leading-relaxed">
                      {item.result}
                    </p>
                  </div>
                )}

                {item.testimonial && (
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative">
                    <h4 className="text-berp-teal font-bold text-lg mb-4">Testimonio de éxito:</h4>
                    <div className="flex gap-4 items-start">
                      <div className="bg-berp-light p-3 rounded-full hidden sm:block">
                        <Quote className="text-berp-teal" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-600 italic mb-4 text-[16px] md:text-lg leading-relaxed">"{item.testimonial.text}"</p>
                        <div>
                          <p className="font-semibold text-berp-dark text-[16px] md:text-lg">{item.testimonial.author}</p>
                          <p className="text-[14px] text-gray-500 font-medium">{item.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

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