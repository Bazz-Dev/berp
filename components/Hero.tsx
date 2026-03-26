import React from 'react';
import { ArrowDown } from 'lucide-react';
import { ASSETS, WHATSAPP } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen bg-berp-dark flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-berp-teal opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl"></div>

      <div className="z-10 animate-fade-in-up max-w-5xl mx-auto">
        {/* Logo Placeholder - Should be replaced by actual logo image if available, using text for now as per instructions "Poner el logotipo original" */}
        <div className="mb-8 flex flex-col items-center">
          <img src={ASSETS.logoHero} alt="BERP Logo" className="h-48 md:h-72 w-auto mb-4" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Somos Berp<span className="text-white font-sans opacity-80 text-[0.7em] align-top">®</span>, agencia integral de <br />
          diseño y marketing
        </h2>

        <div className="h-1 w-20 bg-berp-teal mx-auto mb-6 rounded-full"></div>

        <p className="text-base md:text-lg text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          Desde el branding hasta la web, desarrollamos estrategias y soluciones creativas para que tu marca venda más, se posicione mejor y proyecte una imagen profesional.
        </p>

        <p className="text-berp-teal tracking-widest uppercase text-xs md:text-sm mb-10 font-bold">
          Branding · Redes sociales · Marketing digital · Desarrollo web · Producción gráfica · Fotografía · Asesorías
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-berp-teal text-berp-dark px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-berp-dark hover:text-white transition-all duration-300 shadow-xl shadow-berp-teal/20 group animate-float-slow"
          >
            Hablemos por WhatsApp
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-berp-dark hover:scale-105 transition-all duration-300"
          >
            Ver cómo podemos ayudarte <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};