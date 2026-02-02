
import React from 'react';
import { MapPin, Users, DollarSign, TrendingDown } from 'lucide-react';

const timeline = [
  { day: 'HOY', event: 'Recibes alerta de sobreconsumo', color: 'bg-orange-500' },
  { day: '48 HORAS', event: 'Sitio lento, abandonan carritos', color: 'bg-orange-600' },
  { day: '72 HORAS', event: 'Hosting aplica "throttling" -80%', color: 'bg-red-500' },
  { day: '5 DÍAS', event: 'Suspensión temporal, Error 500', color: 'bg-red-600' },
  { day: '15 DÍAS', event: 'Google baja tu ranking permanentemente', color: 'bg-red-700' },
  { day: '30 DÍAS', event: 'Pérdidas del 40% en ingresos online', color: 'bg-black' },
];

export const ConsequencesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Lo que perderás si ignoras esta alerta:
          </h2>
        </div>

        <div className="relative mb-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid lg:grid-cols-6 gap-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="group">
                <div className={`w-full aspect-square lg:aspect-auto lg:h-32 mb-6 rounded-2xl ${item.color} flex flex-col items-center justify-center text-white p-4 shadow-lg group-hover:scale-105 transition-transform`}>
                  <MapPin className="w-5 h-5 mb-2" />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">{item.day}</span>
                  <p className="text-sm font-bold text-center mt-1 leading-tight">{item.event}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Overlay dots aligned to the center line (visible on lg and above) */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden lg:block pointer-events-none">
            <div className="grid lg:grid-cols-6 gap-8">
              {timeline.map((_, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="w-4 h-4 bg-white border-4 border-gray-200 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: TrendingDown, stat: "73%", label: "De sitios suspendidos no se recuperan totalmente", color: "text-red-600" },
            { icon: DollarSign, stat: "$2,500", label: "Pérdida promedio por hora en e-commerce caído", color: "text-orange-600" },
            { icon: Users, stat: "62%", label: "De clientes no vuelven tras una mala experiencia", color: "text-blue-900" },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
              <div className="inline-flex p-3 rounded-2xl bg-white shadow-sm mb-4">
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <div className={`text-4xl font-black mb-2 ${item.color}`}>{item.stat}</div>
              <p className="text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
