import React from 'react';
import { Heart, Layers, Sparkles } from 'lucide-react';

export const Commitment: React.FC = () => {
    return (
        <section id="commitment" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-berp-dark mb-4">Nuestro Compromiso</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Diseñamos con propósito y acompañamos tu marca en cada etapa del camino.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <Heart className="text-berp-teal mb-4" size={32} />
                        <h4 className="font-bold text-xl mb-2 text-berp-dark">Compromiso con tu marca</h4>
                        <p className="text-gray-600">En Berp® te acompañamos de principio a fin, adaptándonos a ti para que cada entrega represente fielmente la esencia de tu marca.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <Layers className="text-berp-teal mb-4" size={32} />
                        <h4 className="font-bold text-xl mb-2 text-berp-dark">Flexibilidad con orden</h4>
                        <p className="text-gray-600">Nos adaptamos a los ritmos de cada proyecto, manteniendo una estructura clara que asegura foco, cumplimiento y resultados.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <Sparkles className="text-berp-teal mb-4" size={32} />
                        <h4 className="font-bold text-xl mb-2 text-berp-dark">Nuestra filosofía</h4>
                        <p className="text-gray-600">Diseñamos con empatía, intención y propósito. Cada pieza busca comunicar con claridad, generar conexión y aportar valor.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
