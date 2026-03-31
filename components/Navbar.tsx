import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, ASSETS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-berp-dark border-b border-white/10 shadow-lg py-2'
        : 'bg-berp-dark py-2'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="flex-shrink-0 flex items-center transition-transform hover:scale-105">
            <img
              src={ASSETS.logoNav}
              alt="BERP Logo"
              className="h-48 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative whitespace-nowrap
                  text-[12px] lg:text-[13px]
                  font-medium uppercase tracking-[0.08em]
                  text-white/80 transition-all duration-300
                  hover:text-white
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2
                  after:h-[1px] after:w-0 after:bg-berp-teal
                  after:transition-all after:duration-300 hover:after:w-full
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white bg-white/10 rounded-xl border border-white/10 hover:bg-white/15 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-berp-dark animate-in fade-in slide-in-from-top-4 duration-300 border-t border-white/10">
          <div className="flex flex-col p-4 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-white font-medium text-[14px] uppercase hover:bg-white/5 hover:text-berp-teal transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};