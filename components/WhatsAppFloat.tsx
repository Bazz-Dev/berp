import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP } from '../constants';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={WHATSAPP.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 md:w-16 md:h-16
        rounded-full
        bg-[#25D366] text-white
        shadow-xl hover:shadow-2xl
        hover:scale-110
        transition-all duration-300
      "
    >
      <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 shrink-0" />
    </a>
  );
};