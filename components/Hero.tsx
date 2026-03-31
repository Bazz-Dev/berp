import React from 'react';
import { ArrowDown } from 'lucide-react';
import { ASSETS, WHATSAPP } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-berp-dark flex flex-col justify-center items-center text-center px-4 pt-24 pb-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-berp-teal opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto animate-fade-in-up">

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src={ASSETS.logoHero}
            alt="BERP Logo"
            className="h-40 md:h-64 w-auto"
            loading="eager"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Somos Berp
          <span className="text-white opacity-80 text-[0.6em] align-top">®</span>, <br />
          agencia integral de diseño y marketing
        </h1>

        {/* Divider */}
        <div className="h-1 w-20 bg-berp-teal mx-auto mb-6 rounded-full" />

        {/* Description */}
        <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
          Desde el branding hasta la web, desarrollamos estrategias y soluciones creativas para que tu marca venda más, se posicione mejor y proyecte una imagen profesional.
        </p>

        {/* Services */}
        <p className="text-berp-teal tracking-wider uppercase text-xs md:text-sm mb-10 font-semibold">
          Branding · Redes sociales · Marketing digital · Desarrollo web · Producción gráfica · Fotografía · Asesorías
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-berp-teal text-berp-dark px-8 py-4 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-berp-teal/20 focus:outline-none focus:ring-2 focus:ring-berp-teal"
          >
            Hablemos por WhatsApp
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-berp-dark hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Ver cómo podemos ayudarte
            <ArrowDown size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator (opcional pero pro) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce hidden md:block">
        <ArrowDown size={20} />
      </div>
    </section>
  );
};