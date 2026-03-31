import React from 'react';
import { ServiceItem } from '../types';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = (service.iconName && (Icons as any)[service.iconName]) || Icons.Star;
  const isHighlight = service.highlight;

  return (
    <div className={`relative rounded-3xl flex flex-col h-full transition-all duration-300 group overflow-hidden
      ${isHighlight ? 'bg-berp-dark text-white shadow-2xl xl:scale-[1.02] border-2 border-berp-teal/30 hover:border-berp-teal' : 'bg-white text-gray-900 shadow-xl hover:shadow-2xl border border-gray-100'}`}>

      {isHighlight && (
        <div className="absolute top-4 right-4 z-10 bg-berp-teal text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
          Recomendado
        </div>
      )}

      <div className={`flex flex-col flex-grow ${isHighlight ? 'p-10 lg:p-12' : 'p-8'}`}>
        <div className={`mb-8 p-4 w-fit rounded-2xl transition-all duration-300 ${isHighlight ? 'bg-gray-800 text-berp-teal border border-gray-700' : 'bg-berp-light text-gray-900 group-hover:bg-berp-teal group-hover:text-white'}`}>
          <IconComponent size={32} strokeWidth={1.5} />
        </div>

        <h3 className={`text-2xl font-black mb-4 uppercase tracking-tighter ${isHighlight ? 'text-white' : 'text-gray-900'}`}>
          {service.title}
        </h3>

        <p className={`text-base mb-10 flex-grow  ${isHighlight ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-100'}`}>
          {service.description}
        </p>


        {/* Verificación si prices existe */}
        {service.prices && service.prices.length > 0 && (
          <div className={`grid grid-cols-1 md:grid-cols-1 gap-4 mb-10 text-left`}>
            {service.prices?.map((price, idx) => (
              <div key={idx} className={`flex justify-between items-center p-3 rounded-xl transition-colors ${isHighlight ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50' : 'bg-gray-50'}`}>
                <span className={`text-sm font-medium ${isHighlight ? 'text-gray-300' : 'text-gray-700'}`}>{price.qty}</span>
                <div className="text-right ml-4">
                  <span className="block font-bold text-sm text-berp-teal">{price.price}</span>
                  {price.note && <span className="text-[10px] text-gray-500 block">{price.note}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
        <p className={`text-base mb-10 flex-grow ${isHighlight ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-100'}`}>
          <div className="flex flex-wrap gap-2">
            {service.features?.map((feature, idx) => (
              <span
                key={idx}
                className={`inline-block px-2 py-1 text-xs font-medium rounded-full 
          ${isHighlight ? 'bg-berp-teal text-white' : 'bg-gray-200 text-gray-700'} 
          border border-gray-300`}>
                {feature}
              </span>
            ))}
          </div>
        </p>

        <div className="mt-auto pt-4">
          {service.totalPrice && (
            <div className={`mb-8 text-center p-6 rounded-2xl ${isHighlight ? 'bg-berp-teal/10 border border-berp-teal/20' : 'bg-berp-light/50'}`}>
              <span className={`block text-3xl font-black tracking-tight ${isHighlight ? 'text-white' : 'text-berp-dark'}`}>{service.totalPrice}</span>
              {service.note && <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">{service.note}</span>}
            </div>
          )}

          {(service.disclaimer || service.requirements) && (
            <div className={`text-[10px] p-4 rounded-xl leading-loose ${isHighlight ? 'bg-gray-800/50 text-gray-500 border border-gray-700/30' : 'bg-gray-50 text-gray-400'}`}>
              {service.disclaimer && <p className="italic mb-2 flex items-center gap-2"><span className="w-1 h-1 bg-berp-teal rounded-full"></span> {service.disclaimer}</p>}
              {service.requirements && (
                <p className="flex items-start gap-2">
                  <span className="font-black text-berp-teal uppercase">Requisitos:</span> {service.requirements}
                </p>
              )}
            </div>
          )}


        </div>
      </div>
    </div>
  );
};