
import React from 'react';
import { Calendar, Phone, AlertCircle, TrendingUp } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Tu próxima alerta de sobreconsumo podría llegar en <span className="text-orange-500">72 horas</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              ¿Prefieres pagar <span className="text-white font-bold">$197 ahora</span> o <span className="text-red-400 font-bold">$2,500 en pérdidas</span> por una caída evitable?
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/5 flex items-center gap-4 justify-center">
                <TrendingUp className="text-orange-500 w-6 h-6" />
                <span className="text-white font-bold">47/50 slots ocupados</span>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/5 flex items-center gap-4 justify-center">
                <AlertCircle className="text-red-400 w-6 h-6" />
                <span className="text-white font-bold">Precio garantizado hoy</span>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/5 flex items-center gap-4 justify-center">
                <Phone className="text-blue-300 w-6 h-6" />
                <span className="text-white font-bold">Respuesta en &lt; 2h</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
          <button type="button" onClick={() => onOpenContact?.()} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-black">Protege tu sitio ahora</button>
        </div>

            <div className="flex flex-col items-center gap-6">
              <button type="button" onClick={() => onOpenContact?.()} className="bg-orange-600 hover:bg-orange-700 text-white py-6 rounded-2xl font-black text-2xl shadow-2xl shadow-orange-600/40 transition-all transform hover:scale-105 uppercase tracking-wide">Protege tu sitio ahora</button>

              
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-colors border border-white/10">
                  <Calendar className="w-5 h-5" />
                  AGENDAR LLAMADA 15 MIN
                </button>
                <a href="#precios" className="bg-blue-600/20 hover:bg-blue-600/40 text-blue-100 px-8 py-4 rounded-2xl font-bold transition-colors inline-flex items-center justify-center">
                  📋 PROTEGE TU SITIO AHORA!
                </a>
              </div>
              
              <p className="text-blue-300 text-sm italic mt-4">
                *Cada día sin protección = 1,300 intentos de bots en tu sitio. No esperes a la suspensión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
