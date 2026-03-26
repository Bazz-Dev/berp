import React, { useState } from 'react';
import { Mail, Phone, Send, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;

    // Construct WhatsApp Message
    const text = `Hola Berp, me interesa cotizar.%0A%0A*Nombre:* ${name}%0A*Teléfono:* ${phone}%0A*Email:* ${email}%0A*Mensaje:* ${message}`;

    // Open WhatsApp
    window.open(`https://wa.me/56948909095?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-berp-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          <div className="space-y-8">
            <div>
              <span className="text-berp-teal font-bold uppercase tracking-widest text-sm">Contacto</span>
              <h2 className="text-4xl md:text-5xl font-bold text-berp-dark mt-2 tracking-tight">Hablemos de tu marca.</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Cuéntanos en qué estás y qué necesitas. Prometemos hacerlo fácil, claro y sin promesas vacías.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:contacto@berp.cl" className="flex items-center gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                <div className="bg-berp-teal p-3 rounded-full text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Escríbenos</p>
                  <p className="text-lg font-bold">contacto@berp.cl</p>
                </div>
              </a>
              <a href="https://wa.me/56948909095" className="flex items-center gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                <div className="bg-berp-teal p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Llámanos o WhatsApp</p>
                  <p className="text-lg font-bold">+56 9 4890 9095</p>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                <div className="bg-berp-teal/20 p-3 rounded-full text-berp-teal">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Horario de atención</p>
                  <p className="text-lg font-bold">Lunes a Viernes: 09:00 – 18:00 hrs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-berp-dark mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-berp-teal focus:ring-1 focus:ring-berp-teal transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-berp-teal focus:ring-1 focus:ring-berp-teal transition-all"
                    placeholder="+56 9..."
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-berp-teal focus:ring-1 focus:ring-berp-teal transition-all"
                  placeholder="hola@tuempresa.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">¿Qué necesitas?</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-berp-teal focus:ring-1 focus:ring-berp-teal transition-all"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button type="submit" className="w-full flex justify-center items-center gap-2 bg-berp-dark text-white font-bold py-4 rounded-full hover:bg-berp-teal transition-colors duration-300">
                Enviar a WhatsApp <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};