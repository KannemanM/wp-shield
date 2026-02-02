
import React from 'react';
import { ShieldAlert, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-orange-600 p-2 rounded-lg">
            <ShieldAlert className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-blue-900">
            WP Shield <span className="text-orange-600">Pro</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#problema" className="hover:text-blue-900 transition-colors">El Problema</a>
          <a href="#solucion" className="hover:text-blue-900 transition-colors">Solución</a>
          <a href="#precios" className="hover:text-blue-900 transition-colors">Precios</a>
          <a href="#faq" className="hover:text-blue-900 transition-colors">Preguntas</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 hidden sm:block">
            Análisis Gratuito
          </button>
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};
