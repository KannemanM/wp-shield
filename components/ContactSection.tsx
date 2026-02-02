import React from 'react';

export const ContactSection: React.FC<{ onOpenContact?: (pkg?: string) => void }> = ({ onOpenContact }) => {
  return (
    <section id="contratar" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Protege tu sitio ahora</h2>
        <p className="text-gray-600 mb-8">Ingresa tus datos y uno de nuestros especialistas te contactará en menos de 2 horas para coordinar la protección.</p>

        <div className="flex items-center justify-center gap-4">
          <button type="button" onClick={() => onOpenContact?.()} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-black">Protege tu sitio ahora</button>
        </div>
      </div>
    </section>
  );
};
