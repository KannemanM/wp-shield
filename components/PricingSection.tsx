
import React from 'react';
import { Check, ShieldCheck, Star, Trophy } from 'lucide-react';

const packages = [
  {
    name: "PAQUETE BÁSICO",
    price: "$197",
    features: [
      "Análisis completo de vulnerabilidades",
      "Implementación de reglas anti-bots",
      "Optimización de caché para Googlebot",
      "Soporte por 7 días"
    ],
    limit: "Para sitios con <10k visitas/mes",
    color: "gray"
  },
  {
    name: "PAQUETE PROFESIONAL",
    price: "$397",
    featured: true,
    features: [
      "TODO lo del Básico +",
      "Monitoreo 24/7 durante 30 días",
      "Optimización avanzada de base de datos",
      "Configuración de WP-Cron en servidor",
      "Informe de mejoras implementadas",
      "Soporte prioritario 30 días"
    ],
    limit: "RECOMENDADO PARA LA MAYORÍA",
    color: "blue"
  },
  {
    name: "PAQUETE AGENCY",
    price: "$997",
    features: [
      "TODO lo del Profesional +",
      "Optimización para 3 sitios WordPress",
      "Entrenamiento para tu equipo",
      "Configuración white-label",
      "Certificado de optimización",
      "Soporte VIP 6 meses"
    ],
    limit: "Para agencias multicliente",
    color: "orange"
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section id="precios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Elige tu nivel de protección:
          </h2>
          <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-3 rounded-2xl border border-green-100 font-bold">
            <ShieldCheck className="w-6 h-6" />
            30 días de garantía total: Si tu hosting te vuelve a alertar, te devolvemos el 100%
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-3xl p-8 border ${pkg.featured ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-gray-200 shadow-xl'}`}
            >
              {pkg.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-black flex items-center gap-2">
                  <Star className="w-4 h-4 fill-white" />
                  RECOMENDADO
                </div>
              )}
              {idx === 2 && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-black flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  AGENCY
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-400 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-blue-900">{pkg.price}</span>
                  <span className="text-gray-400 font-medium">/único</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {pkg.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 ${pkg.featured ? 'text-blue-600' : 'text-green-500'}`} />
                    <span className="text-gray-600 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8 p-4 rounded-xl bg-gray-50 border border-gray-100 text-center text-sm font-bold text-gray-500 uppercase tracking-wide">
                {pkg.limit}
              </div>

              <button className={`w-full py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-[1.02] ${pkg.featured ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-black'}`}>
                CONTRATAR AHORA
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
