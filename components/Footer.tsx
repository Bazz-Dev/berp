import React from 'react';
import { Phone, Mail, Globe, MapPin, Instagram, Facebook, Linkedin, Link as LinkIcon, AtSign } from 'lucide-react';
import { SOCIAL_LINKS, ASSETS, WHATSAPP } from '../constants';

// Custom Icons for better styling where Lucide might be generic
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Brand */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 w-full">
              <img src={ASSETS.logoHero} alt="Berp Logo" className="h-14 md:h-20 w-auto invert brightness-0" />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Diseño, contenido y estrategia para marcas que quieren crecer, vender y construir a largo plazo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-berp-teal text-white transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-berp-teal text-white transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-berp-teal text-white transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-berp-teal text-white transition-colors" aria-label="TikTok"><TikTokIcon size={18} /></a>
              <a href={SOCIAL_LINKS.threads} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-berp-teal text-white transition-colors" aria-label="Threads"><AtSign size={18} /></a>
              <a href={SOCIAL_LINKS.linktree} target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-berp-teal text-white transition-colors" aria-label="Linktree"><LinkIcon size={18} /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Mapa del sitio</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-berp-teal transition-colors">¿Qué hacemos?</a></li>
              <li><a href="#services" className="hover:text-berp-teal transition-colors">Servicios</a></li>
              <li><a href="#solutions" className="hover:text-berp-teal transition-colors">Soluciones</a></li>
              <li><a href="#portfolio" className="hover:text-berp-teal transition-colors">Casos de éxito</a></li>
              <li><a href="#team" className="hover:text-berp-teal transition-colors">Equipo</a></li>
              <li><a href="#faq" className="hover:text-berp-teal transition-colors">Preguntas frecuentes</a></li>
              <li>
                <a href={SOCIAL_LINKS.berfriends} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-berp-teal transition-colors text-berp-teal font-bold mt-2">
                  Canal BerpFriends <Instagram size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6 text-sm">
            <h4 className="text-lg font-bold border-b border-gray-800 pb-2 inline-block">Estamos aquí</h4>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-berp-teal mt-1" />
                <div>
                  <p className="font-bold text-white">WhatsApp</p>
                  <a href={WHATSAPP.url} target="_blank" rel="noreferrer" className="hover:text-berp-teal transition-colors">
                    {WHATSAPP.displayNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-berp-teal mt-1" />
                <div>
                  <p className="font-bold text-white">Correo</p>
                  <a href="mailto:contacto@berp.cl" className="hover:text-berp-teal">contacto@berp.cl</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-berp-teal mt-1" />
                <div>
                  <p className="font-bold text-white">Dirección</p>
                  <p>Zenteno 130-138, Santiago, Chile</p>
                  <p className="text-xs mt-1">Retiros: Santiago Centro, Lo Barnechea, Pudahuel</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={18} className="text-berp-teal mt-1" />
                <div>
                  <p className="font-bold text-white">Taller de impresión</p>
                  <p>Pudahuel (Solo retiros)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>© 2026 Berp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};