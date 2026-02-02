
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "¿Interfiere con mi SEO?", a: "Al contrario. Al mejorar los tiempos de respuesta para los bots oficiales de Google y limpiar las URLs basura, facilitamos el rastreo inteligente de tu sitio, lo que suele resultar en mejores rankings." },
  { q: "¿Mi sitio estará offline durante la implementación?", a: "Cero tiempo offline. Trabajamos en paralelo y realizamos los ajustes críticos de forma que no afecten la visibilidad de tu sitio para los usuarios." },
  { q: "¿Funciona con cualquier hosting?", a: "Sí, somos especialistas en entornos de hosting compartido como CDmon, SiteGround, GoDaddy y Bluehost, que es donde más suelen ocurrir estos problemas de límites." },
  { q: "¿Puedo cancelar?", a: "Este es un servicio de pago único por intervención. No hay suscripciones mensuales obligatorias ni cargos ocultos tras la implementación." },
  { q: "¿Qué necesitas de mí?", a: "Para poder actuar rápido, necesitaremos acceso temporal como administrador a tu WordPress y acceso a tu panel de hosting (cPanel/Plesk) para ajustes de servidor." },
  { q: "¿Hay mantenimiento?", a: "Es opcional. Aunque nuestros ajustes son permanentes, ofrecemos un servicio de monitoreo proactivo 24/7 por solo $47/mes para aquellos que quieren despreocuparse totalmente." },
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 text-center mb-16">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIdx === idx && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
