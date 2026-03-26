import React from 'react';
import { CheckCircle, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const items = [
    "Definir y construir una identidad de marca clara y coherente (Branding)",
    "Gestionar redes sociales con estrategia y objetivos definidos",
    "Implementar acciones de marketing digital orientadas a resultados",
    "Desarrollar un sitio web funcional que respalde tu posicionamiento",
    "Unificar tu imagen en piezas gráficas y audiovisuales",
    "Tomar decisiones estratégicas con asesoría profesional"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-berp-light px-4 py-2 rounded-full text-berp-teal font-bold text-sm uppercase tracking-widest mb-6">
              <Zap size={16} /> ¿QUÉ HACEMOS?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-berp-dark mt-2 tracking-tight">Potenciamos tu marca con dirección.</h2>
            <p className="text-lg text-berp-teal font-medium leading-relaxed mb-6">
              Las marcas no crecen por casualidad. Se construyen con dirección.
            </p>
            <div className="space-y-6 text-lg text-gray-600 mb-8">
              <p>
                En <strong>Berp®️</strong> desarrollamos estrategias, identidad y presencia digital para que tu marca se vea profesional, conecte con su audiencia y tenga una base sólida para crecer.
              </p>
              <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-berp-teal italic">
                <p className="text-berp-dark font-medium">
                  "No trabajamos acciones aisladas. Desarrollamos soluciones integrales adaptadas a la etapa de tu negocio."
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/56948909095"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-berp-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-berp-teal hover:text-berp-dark transition-all duration-300 group shadow-lg shadow-berp-teal/20"
            >
              Veamos qué necesita tu marca
            </a>
          </div>

          <div className="bg-berp-light p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-berp-teal opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>

            <h3 className="text-2xl font-bold text-berp-dark mb-6">
              Te ayudamos a:
            </h3>

            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-berp-teal flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};