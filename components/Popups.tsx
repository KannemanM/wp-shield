
import React from 'react';
import { X, AlertCircle, TrendingDown, Clock, ShieldCheck, Zap } from 'lucide-react';

interface PopupProps {
  onClose: () => void;
}

export const ExitIntentPopup: React.FC<PopupProps> = ({ onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-900/60 backdrop-blur-sm p-4">
    <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 relative animate-scaleIn">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
        <X className="w-6 h-6" />
      </button>
      <div className="text-center">
        <div className="bg-red-50 p-4 rounded-full inline-block mb-6">
          <AlertCircle className="w-12 h-12 text-red-600" />
        </div>
        <h3 className="text-3xl font-black text-blue-900 mb-4 tracking-tight">¡Espera! Tu hosting podría suspenderte hoy mismo</h3>
        <p className="text-gray-600 mb-8 text-lg">
          No te vayas sin descargar nuestro reporte exclusivo: <strong>'5 Señales de que los bots están devorando tu servidor PHP'</strong>.
        </p>
        <div className="space-y-4">
          <input type="email" placeholder="Tu mejor email..." className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium" />
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-[1.02]">
            DESCARGAR GRATIS
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const ScrollTriggeredPopup: React.FC<PopupProps> = ({ onClose }) => (
  <div className="fixed bottom-8 right-8 z-[90] max-w-sm w-full animate-slideUp p-2">
    <div className="bg-blue-900 text-white rounded-3xl shadow-2xl p-8 relative overflow-hidden border-4 border-white">
      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
      <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
        <X className="w-5 h-5" />
      </button>
      <div className="flex items-center gap-3 mb-4">
        <Zap className="text-orange-500 w-8 h-8" />
        <h4 className="font-black text-xl leading-none">Optimización Garantizada</h4>
      </div>
      <p className="text-blue-100 text-sm mb-6 leading-relaxed">
        Podemos reducir tu <strong>consumo PHP hasta un 60%</strong> bloqueando bots maliciosos. Estabiliza tu sitio en menos de 24 horas.
      </p>
      <button className="w-full bg-white text-blue-900 py-3 rounded-xl font-black text-sm hover:bg-blue-50 transition-colors uppercase">
        Ver planes de protección
      </button>
    </div>
  </div>
);

export const TimedPopup: React.FC<PopupProps> = ({ onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn border-t-8 border-blue-600">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
        <X className="w-6 h-6" />
      </button>
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Clock className="w-16 h-16 text-blue-600" />
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-5 h-5 border-2 border-white"></div>
          </div>
        </div>
        <h3 className="text-2xl font-black text-blue-900 mb-4">Habla con un experto ahora</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          El 80% de las suspensiones en hostings compartidos son causadas por una mala indexación de bots. <strong>Agenda 10 minutos gratis</strong> con nuestro especialista.
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 mb-3">
          <ShieldCheck className="w-5 h-5" />
          AGENDAR SESIÓN GRATIS
        </button>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Sin compromiso • Solo 3 slots hoy</p>
      </div>
    </div>
  </div>
);
