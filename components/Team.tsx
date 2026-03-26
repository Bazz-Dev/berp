import React from 'react';
import { TEAM, WHATSAPP } from '../constants';
import { Linkedin, Heart, Layers, Sparkles, MessageCircle } from 'lucide-react';

export const Team: React.FC = () => {
   const leader = TEAM[0];

   return (
      <section id="team" className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-berp-dark">Quién está detrás de Berp®</h2>
               <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                  Diseño, criterio y acompañamiento real para hacer crecer tu marca con claridad y dirección.
               </p>
               <p className="text-gray-600 mt-4 text-base max-w-3xl mx-auto">
                  Berp® es una agencia de diseño y marketing especializada en construir marcas sólidas y una presencia digital coherente y profesional.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
               <div className="relative">
                  <div className="absolute inset-0 bg-berp-teal transform rotate-6 rounded-3xl opacity-20"></div>
                  <img src={leader.image} alt="Rommy Poza" className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto z-10" />
               </div>

               <div className="space-y-6">
                  <div className="inline-block bg-berp-dark text-white px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-widest">Dirección creativa con visión estratégica</div>
                  <h3 className="text-4xl font-bold text-berp-dark hover:text-berp-teal transition-colors">
                     <a href={leader.linkedin} target="_blank" rel="noreferrer">Rommy Poza</a>
                  </h3>
                  
                  <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                     <p>Berp® es una agencia liderada por Rommy Poza, Directora de Arte y especialista en marketing digital, quien supervisa y dirige cada proyecto para asegurar coherencia, calidad y enfoque en resultados.</p>
                     <p>Trabajamos junto a un equipo multidisciplinario de diseñadores, desarrolladores, fotógrafos y especialistas en contenido que se integran estratégicamente según las necesidades de cada marca.</p>
                     <p>Cada proyecto se aborda con análisis previo, planificación clara y ejecución profesional.<br/>Nada se deja al azar.</p>
                     <p className="font-bold text-berp-dark">Más que prestar servicios, acompañamos procesos y construimos marcas con dirección.</p>
                  </div>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                     <a href={WHATSAPP.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-berp-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-berp-teal hover:text-berp-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Hablemos de tu proyecto <MessageCircle size={18} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Commitment Section integrated into Team */}
            <div className="border-t border-gray-100 pt-24">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-berp-dark mt-2 tracking-tight">Conoce al equipo.</h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                     Diseñamos con propósito y acompañamos tu marca en cada etapa del camino.
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                     <Heart className="text-berp-teal mb-4" size={32} />
                     <h4 className="font-bold text-xl mb-2 text-berp-dark">Compromiso con tu marca</h4>
                     <p className="text-gray-600">En Berp® te acompañamos de principio a fin, adaptándonos a ti para que cada entrega represente fielmente la esencia de tu marca.</p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                     <Layers className="text-berp-teal mb-4" size={32} />
                     <h4 className="font-bold text-xl mb-2 text-berp-dark">Flexibilidad con orden</h4>
                     <p className="text-gray-600">Nos adaptamos a los ritmos de cada proyecto, manteniendo una estructura clara que asegura foco, cumplimiento y resultados.</p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                     <Sparkles className="text-berp-teal mb-4" size={32} />
                     <h4 className="font-bold text-xl mb-2 text-berp-dark">Nuestra filosofía</h4>
                     <p className="text-gray-600">Diseñamos con empatía, intención y propósito. Cada pieza busca comunicar con claridad, generar conexión y aportar valor.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};