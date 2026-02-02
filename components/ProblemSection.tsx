
import React from 'react';
import { CheckCircle2, AlertTriangle, Search, Zap, Ban, TrendingDown } from 'lucide-react';

const painPoints = [
  { icon: Search, text: "Los bots de Google están indexando URLs con parámetros como ?o=1234", check: true },
  { icon: Zap, text: "Cada visita de bot consume 10x más recursos que un usuario real", check: true },
  { icon: AlertTriangle, text: "Tu hosting mide el consumo PHP TOTAL, no diferencia entre bots y humanos", check: true },
  { icon: Ban, text: "Cuando superas el límite: SUSPENSIÓN INMEDIATA sin previo aviso", check: true },
  { icon: TrendingDown, text: "Tu sitio cae en horas pico de ventas = PÉRDIDAS DIRECTAS", check: true },
  { icon: AlertTriangle, text: "Google penaliza sitios lentos = MENOS TRÁFICO ORGÁNICO", check: true },
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Esto te está pasando ahora mismo y probablemente no lo sabes
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Mientras lees esto, miles de procesos "zombie" están asfixiando tu servidor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {painPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-blue-800/50 p-6 rounded-2xl border border-blue-700/50 hover:bg-blue-800 transition-colors">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <CheckCircle2 className="text-green-400 w-6 h-6" />
                </div>
                <p className="text-lg font-medium">{item.text}</p>
              </div>
            ))}
            
            <a href="#precios" className="mt-8 text-orange-400 font-bold text-xl flex items-center gap-2 hover:translate-x-2 transition-transform">
              Protege tu sitio ahora!
            </a>
          </div>

          <div className="relative">
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                URGENTE
              </div>
              <h4 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Email de Suspensión Real
              </h4>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-sm space-y-2 opacity-80 select-none">
                <p>De: Soporte Hosting &lt;no-reply@hosting-example.com&gt;</p>
                <p>Asunto: [IMPORTANTE] Suspensión de servicio por abuso de recursos</p>
                <div className="h-px bg-gray-200 my-2"></div>
                <p>Estimado cliente,</p>
                <p className="text-red-600 font-bold">Hemos detectado que su cuenta 'user_wp' ha excedido los límites de CPU/PHP (99.8%) de forma persistente.</p>
                <p>Como medida de seguridad para el resto del servidor, su sitio web ha sido suspendido.</p>
                <p className="blur-[2px]">Por favor, contacte con soporte técnico para...</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl max-w-xs rotate-3 border-4 border-white hidden md:block">
              <p className="font-bold text-lg mb-1">¿Te suena familiar?</p>
              <p className="text-sm opacity-90">No es mala suerte, es una configuración deficiente de tu WordPress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
