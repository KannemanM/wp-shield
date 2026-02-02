
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
        
        <div className="flex items-center gap-4">
          <a href="#precios" className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 rounded-full h-10 leading-none font-bold text-sm transition-all transform hover:scale-105">
            Contratar ahora
          </a>
        </div>
      </div>
    </header>
  );
};
