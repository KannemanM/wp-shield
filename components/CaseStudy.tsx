
import React from 'react';
import { Calendar, Zap, TrendingUp, Quote } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800 opacity-20 -skew-x-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Así salvamos a <span className="text-blue-300 underline underline-offset-8">eroticdissyen.com</span> de la suspensión definitiva
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h4 className="flex items-center gap-2 text-xl font-bold mb-6 text-red-400">
                <Calendar className="w-6 h-6" />
                Situación Inicial (15 Nov)
              </h4>
              <ul className="space-y-4 text-blue-100 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  3 alertas de CDmon en solo 7 días
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  Consumo PHP: 98% (límite crítico)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  Velocidad: 8.4 segundos (Lento)
                </li>
                <li className="flex items-center gap-3 font-bold text-white uppercase">
                  Riesgo: Suspensión en 48 horas
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h4 className="flex items-center gap-2 text-xl font-bold mb-6 text-blue-300">
                <Zap className="w-6 h-6" />
                Nuestra Intervención (16 Nov)
              </h4>
              <ul className="space-y-4 text-blue-100 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                  14 reglas .htaccess implementadas
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                  Caché avanzado para bots
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                  Eliminación de 27 consultas ineficientes
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                  WP-Cron optimizado a nivel servidor
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-green-500/10 p-10 rounded-3xl border border-green-500/20 flex-1">
              <h4 className="flex items-center gap-2 text-2xl font-black mb-10 text-green-400 uppercase tracking-wider">
                <TrendingUp className="w-8 h-8" />
                Resultados Finales
              </h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-black text-white">42%</p>
                  <p className="text-sm text-blue-200">Consumo PHP (-57%)</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">2.1s</p>
                  <p className="text-sm text-blue-200">Velocidad de carga</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">CERO</p>
                  <p className="text-sm text-blue-200">Alertas de Hosting</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">+18%</p>
                  <p className="text-sm text-blue-200">Tráfico Orgánico</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-5 -right-5 bg-orange-500 p-3 rounded-full">
                <Quote className="text-white w-6 h-6" />
              </div>
              <p className="text-gray-800 text-lg italic leading-relaxed mb-6">
                "Pensé que tendría que migrar todo mi hosting y perder semanas de trabajo. WP Shield Pro solucionó en horas lo que llevaba meses intentando. En 48 horas pasé de riesgo de suspensión a un sitio estable y rápido. Invaluable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-900">AG</div>
                <div>
                  <p className="font-bold text-gray-900 leading-none">Alex G.</p>
                  <p className="text-sm text-gray-500">Fundador, eroticdissyen.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
