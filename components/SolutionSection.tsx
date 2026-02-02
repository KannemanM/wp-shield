
import React from 'react';
import { Search, Shield, Zap, Activity, Settings, BarChart2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const steps = [
  { icon: Search, title: "ANÁLISIS PROFUNDO", desc: "Escaneamos 28 puntos de vulnerabilidad crítica." },
  { icon: Shield, title: "BLOQUEO INTELIGENTE", desc: "Reglas .htaccess que detienen bots sin afectar el SEO." },
  { icon: Zap, title: "CACHÉ ESPECIALIZADO", desc: "Respuestas ultra-rápidas específicas para Googlebot." },
  { icon: Activity, title: "MONITOREO 24/7", desc: "Alertas proactivas ANTES de que ocurra cualquier problema." },
  { icon: Settings, title: "OPTIMIZACIÓN WORDPRESS", desc: "Ajustes de núcleo que reducen el consumo PHP en un 60%." },
  { icon: BarChart2, title: "INFORME MENSUAL", desc: "Sabrás exactamente qué bots intentaron atacarte." },
];

const data = [
  { name: 'Antes', value: 98, color: '#ef4444' },
  { name: 'Después', value: 42, color: '#16a34a' },
];

export const SolutionSection: React.FC = () => {
  return (
    <section id="solucion" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Así blindamos tu WordPress contra bots maliciosos:
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid sm:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="text-blue-600 w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{idx + 1}️⃣ {step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h4 className="text-xl font-bold text-center mb-8">Reducción de Consumo PHP (Media Diaria)</h4>
            <div className="h-[300px] w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis unit="%" />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-around items-center text-center">
              <div>
                <p className="text-red-500 font-bold text-3xl">98%</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Inestabilidad</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Zap className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-green-600 font-bold text-3xl">-57%</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Optimización</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
