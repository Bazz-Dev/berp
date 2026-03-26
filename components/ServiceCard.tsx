import React from 'react';
import { ServiceItem } from '../types';
import * as Icons from 'lucide-react';
import { WHATSAPP } from '../constants';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const isPlan = service.id.startsWith('plan-');

  if (isPlan) {
    const IconComponent = (Icons as any)[service.iconName || 'Zap'] || Icons.Zap;
    
    return (
      <div className="flex flex-col h-full group">
        <div className={`flex flex-col rounded-3xl overflow-hidden transition-all duration-300 relative ${service.isPopular ? 'bg-berp-dark text-white ring-1 ring-berp-teal/20 shadow-2xl' : 'bg-berp-dark text-white border border-white/5 shadow-xl'}`}>
          <div className="p-8 lg:p-10 flex flex-col h-full relative z-10">
            <div className="mb-8 flex items-center justify-between">
              <div className={`p-4 rounded-xl ${service.isPopular ? 'bg-berp-teal/10 text-berp-teal' : 'bg-white/5 text-gray-400'}`}>
                <IconComponent size={28} strokeWidth={1.5} />
              </div>
              {service.isPopular && (
                <span className="bg-berp-teal text-berp-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Recomendado
                </span>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                PLAN {service.title}
              </h3>
              <p className="text-berp-teal text-sm font-bold uppercase tracking-widest mb-4">
                {service.subtitle}
              </p>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex-grow space-y-8">
              <div className="space-y-3">
                {service.deliverables && service.deliverables.map((item, idx) => (
                  <div key={`del-${idx}`} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{item.split(' ')[0]}</span>
                    <span className="text-sm font-medium text-gray-200">{item.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {service.features && service.features.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 px-2">
            {service.features.map((feature, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-berp-dark/50 text-gray-400 border border-white/5 group-hover:border-berp-teal/30 group-hover:text-berp-teal transition-all duration-300"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }

  const IconComponent = (Icons as any)[service.iconName || 'Star'] || Icons.Star;
  const isHighlight = service.highlight;

  return (
    <div className={`
      relative rounded-3xl flex flex-col h-full transition-all duration-300 group overflow-hidden
      ${isHighlight ? 'bg-[#0a0a0a] ring-1 ring-berp-teal/20 shadow-[0_0_50px_-12px_rgba(0,186,180,0.15)] xl:scale-[1.02] z-10 text-white' : 'bg-white text-berp-dark border border-gray-100 shadow-xl hover:shadow-2xl'}
    `}>
      {isHighlight && (
        <div className="absolute top-4 right-4 z-10 bg-berp-teal text-berp-dark px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg">
          Recomendado
        </div>
      )}

      {/* Image Header for Highlighted Plans */}
      {service.image && (
        <div className="relative w-full aspect-[21/9] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-berp-dark via-transparent to-transparent opacity-60"></div>
        </div>
      )}

      <div className={`flex flex-col flex-grow ${isHighlight ? 'p-10 lg:p-12' : 'p-8'}`}>
        <div className={`mb-8 p-4 w-fit rounded-2xl transition-all duration-300 ${isHighlight ? 'bg-gray-800 text-berp-teal border border-gray-700' : 'bg-berp-light text-gray-900 group-hover:bg-berp-teal group-hover:text-white'}`}>
          <IconComponent size={32} strokeWidth={1.5} />
        </div>

        <h3 className={`text-2xl font-black mb-4 uppercase tracking-tighter ${isHighlight ? 'text-white' : 'text-gray-900'}`}>
          {service.title}
        </h3>

        <p className={`text-base mb-10 flex-grow pb-6 border-b leading-relaxed ${isHighlight ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-100'}`}>
          {service.description}
        </p>

        <div className={`grid ${isHighlight ? 'grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-3'} mb-10 text-left`}>
          {service.prices && service.prices.map((price, idx) => (
            <div key={idx} className={`flex justify-between items-center p-3 rounded-xl transition-colors ${isHighlight ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50' : 'bg-gray-50'}`}>
              <span className={`text-sm font-medium ${isHighlight ? 'text-gray-300' : 'text-gray-700'}`}>{price.qty}</span>
              <div className="text-right ml-4">
                <span className="block font-bold text-sm text-berp-teal">{price.price}</span>
                {price.note && <span className="text-[10px] text-gray-500 block">{price.note}</span>}
              </div>
            </div>
          ))}
        </div>

        {(service.disclaimer || service.requirements) && (
          <div className={`text-[10px] p-4 rounded-xl leading-loose mt-4 ${isHighlight ? 'bg-gray-800/50 text-gray-500 border border-gray-700/30' : 'bg-gray-50 text-gray-400'}`}>
            {service.disclaimer && (
              <p className="italic mb-2 flex items-center gap-2">
                <span className="w-1 h-1 bg-berp-teal rounded-full"></span> {service.disclaimer}
              </p>
            )}
            {service.requirements && (
              <p className="flex items-start gap-2">
                <span className="font-black text-berp-teal uppercase">Requisitos:</span> {service.requirements}
              </p>
            )}
          </div>
        )}

        {service.totalPrice && (
          <div className={`mt-8 text-center p-6 rounded-2xl ${isHighlight ? 'bg-berp-teal/10 border border-berp-teal/20' : 'bg-berp-light/50'}`}>
            <span className={`block text-3xl font-black tracking-tight ${isHighlight ? 'text-white' : 'text-berp-dark'}`}>{service.totalPrice}</span>
            {service.note && <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">{service.note}</span>}
          </div>
        )}
      </div>
    </div>
  );
};