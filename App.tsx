import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServiceCard } from './components/ServiceCard';
import { Solutions } from './components/Solutions';
import { FeaturedProject } from './components/FeaturedProject';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BerpFriends } from './components/BerpFriends';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Clients } from './components/Clients';
import { SERVICES, WHATSAPP } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <About />

      <section id="services" className="py-24 bg-berp-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tier 1: Redes Sociales */}
          <div className="text-center mb-16">
            <span className="text-berp-teal font-bold uppercase tracking-widest text-sm">Servicios Creativos</span>
            <h2 className="text-4xl font-bold text-berp-dark mt-2 tracking-tight">Social Media & Contenido</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Impulsa tu presencia digital con contenido visualmente impactante y estratégico.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Tier 2: Planes Estratégicos */}
          <div className="text-center mb-16">
            <span className="text-berp-teal font-bold uppercase tracking-widest text-sm">Gestión Mensual</span>
            <h2 className="text-4xl font-bold text-berp-dark mt-2 tracking-tight">Planes Estratégicos</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Soluciones integrales para marcas que buscan crecimiento constante y dirección clara.</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-8 gap-y-12 max-w-6xl mx-auto mb-32">
            {SERVICES.slice(4, 6).map((service) => (
              <div key={service.id} className="w-full lg:w-1/2">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Tier 3: Complementos */}
          <div className="text-center mb-16">
            <span className="text-berp-teal font-bold uppercase tracking-widest text-sm">Extras & Soporte</span>
            <h2 className="text-4xl font-bold text-berp-dark mt-2 tracking-tight">Servicios Complementarios</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Todo lo que necesitas para fortalecer cada punto de contacto de tu marca.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(6, 10).map((service) => (
              <div key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-20">
            <a
              href={WHATSAPP.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-berp-teal text-berp-dark px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-berp-dark hover:text-white transition-all duration-300 shadow-xl shadow-berp-teal/20 group"
            >
              Cotiza tu servicio <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      <Solutions />
      <FeaturedProject />
      <Portfolio />
      <Team />
      <BerpFriends />
      <Process />
      <Clients />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;