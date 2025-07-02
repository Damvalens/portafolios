import React from 'react';
import { Database, TrendingUp, BarChart3, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-600">Celso Daniel</span><br />
              <span className="text-teal-600">Abente Valenzuela</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium">
              Analista de Datos & Business Intelligence
            </p>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Especialista en transformar datos en insights estratégicos. Experto en Power Platform, SQL, ETL y análisis BI 
            para impulsar la toma de decisiones basada en datos y generar valor empresarial.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Database className="h-4 w-4 text-blue-600" />
              <span>SQL & ETL</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <TrendingUp className="h-4 w-4 text-teal-600" />
              <span>Power Platform</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <BarChart3 className="h-4 w-4 text-orange-600" />
              <span>Business Intelligence</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Ver Proyectos
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Descargar CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;