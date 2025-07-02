import React from 'react';
import { BarChart3, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Celso Abente</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Analista de Datos y Business Intelligence especializado en transformar información en decisiones estratégicas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Inicio
              </button>
              <button 
                onClick={() => document.getElementById('habilidades')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Habilidades
              </button>
              <button 
                onClick={() => document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Experiencia
              </button>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Specialties */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Especialidades</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>• Power BI & Power Platform</p>
              <p>• SQL & Database Management</p>
              <p>• ETL & Data Integration</p>
              <p>• Business Intelligence</p>
              <p>• Data Analysis & Visualization</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} Celso Daniel Abente Valenzuela. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 sm:mt-0">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>y mucho</span>
              <BarChart3 className="h-4 w-4 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;