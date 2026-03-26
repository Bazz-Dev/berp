import React from 'react';
import { CLIENT_LOGOS } from '../constants';

export const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-berp-teal font-bold uppercase tracking-widest text-sm">Clientes</span>
          <h2 className="text-4xl font-bold text-berp-dark mt-2 tracking-tight">Confían en nosotros.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
          {CLIENT_LOGOS.map((client, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-default p-2 w-full h-20"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />

              {/* Fallback Text - Hidden by default, shown if image fails */}
              <span className="hidden items-center justify-center text-2xl md:text-3xl font-black text-gray-300 group-hover:text-berp-dark uppercase tracking-tighter select-none whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};