
import React from 'react';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export const Hero: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="relative pt-20 pb-24 overflow-hidden bg-grid">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-orange-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-pulse">
          <Clock className="w-4 h-4" />
          <span>Atención: Riesgo de Suspensión Inmediata</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-blue-900 leading-tight mb-6 max-w-5xl mx-auto">
          ¿Tu hosting te amenaza con suspender tu WordPress por <span className="text-red-600">sobreconsumo</span>?
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
          Nosotros lo solucionamos en <span className="font-bold text-gray-900 underline decoration-orange-500 underline-offset-4">24 horas</span>. Detenemos los bots maliciosos que consumen tus recursos PHP y estabilizamos tu sitio para siempre.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-extrabold text-xl shadow-xl shadow-orange-600/30 transition-all transform hover:scale-105 flex items-center justify-center gap-3">
            Protege tu sitio ahora!
            <ArrowRight className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 text-gray-500 font-medium italic">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            Sin compromisos. Solo datos reales.
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
           <div className="bg-gray-900 rounded-2xl p-4 overflow-hidden">
              {/* Simple Mockup of a Dashboard */}
              <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="text-gray-500 text-xs font-mono">wpshieldpro-monitor.io</div>
              </div>
              <div className="h-48 flex items-end gap-1 px-4">
                 {[40, 65, 30, 85, 98, 45, 12, 10, 8, 12, 14, 15, 18, 15].map((h, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 rounded-t ${h > 80 ? 'bg-red-500 animate-bounce' : 'bg-blue-500 opacity-60'}`}
                      style={{ height: `${h}%` }}
                    ></div>
                 ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold shadow-2xl rotate-3 border-4 border-white">
                ALERTA: CONSUMO PHP 98%
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
