
import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { ContactSection } from './ContactSection';

export const Footer: React.FC<{ onOpenContact?: (pkg?: string) => void }> = ({ onOpenContact }) => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-600 p-2 rounded-lg">
                <ShieldAlert className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-blue-900">WP Shield <span className="text-orange-600">Pro</span></span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Expertos en optimización de rendimiento WordPress y protección contra sobreconsumo de recursos en servidores compartidos.
            </p>
            <div className="flex items-center gap-6 opacity-30 grayscale filter">
              <span className="font-bold text-xl text-gray-400">CDmon</span>
              <span className="font-bold text-xl text-gray-400">SiteGround</span>
              <span className="font-bold text-xl text-gray-400">GoDaddy</span>
              <span className="font-bold text-xl text-gray-400">Bluehost</span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <ContactSection onOpenContact={onOpenContact} />
          </div>
        </div>

        <div className="h-px bg-gray-200 mb-8"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} WP Shield Pro. Todos los derechos reservados.</p>
          
        </div>
      </div>
    </footer>
  );
};
