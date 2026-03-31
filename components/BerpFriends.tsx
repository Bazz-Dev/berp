import React from 'react';
import { Instagram, Heart, Zap, Layers, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS, WHATSAPP } from '../constants';

export const BerpFriends: React.FC = () => {
    return (
        <section id="berpfriends" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-berp-dark rounded-[3rem] p-8 md:p-12 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-berp-teal opacity-20 rounded-full blur-3xl -ml-16 -mb-16"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-berp-teal/20 text-berp-teal px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
                            Comunidad gratuita
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-2 mb-4">
                            Berp Friends
                        </h2>
                        <p className="text-xl text-gray-300 mt-2 mb-4">
                            <strong>También compartimos lo que sabemos.</strong>
                        </p>
                        <p className="text-xl text-gray-300 mt-2 mb-12">
                            BerpFriends es nuestra comunidad gratuita para marcas y emprendedores que quieren aprender, ordenar sus ideas y tomar mejores decisiones. Aquí compartimos contenido práctico, experiencias reales y herramientas aplicables para que puedas:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left ">
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                                <Zap className="text-berp-teal mb-4" size={24} />
                                <p className="text-sm font-medium">Aprender a crear contenido que conecte y ayude a vender.</p>
                            </div>

                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                                <Layers className="text-berp-teal mb-4" size={24} />
                                <p className="text-sm font-medium">Tomar decisiones con más claridad para hacer crecer tu marca.</p>
                            </div>
                            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                                <Heart className="text-berp-teal mb-4" size={24} />
                                <p className="text-sm font-medium">Sentirte acompañado en el proceso, sin improvisar.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={WHATSAPP.url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-berp-dark px-10 py-4 rounded-full font-bold hover:bg-berp-teal hover:text-white transition-all duration-300 shadow-xl"
                            >
                                Únete a BerpFriends <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
