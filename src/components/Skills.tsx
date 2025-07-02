import React from 'react';
import { Database, BarChart3, Zap, TrendingUp, Settings, FileSpreadsheet } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Power Platform',
      icon: <Zap className="h-8 w-8" />,
      color: 'bg-yellow-500',
      skills: ['Power BI', 'Power Query', 'Power Apps', 'Power Automate', 'DAX', 'M Language'],
      description: 'Desarrollo de dashboards interactivos, automatización de procesos y aplicaciones de negocio.'
    },
    {
      category: 'Base de Datos & SQL',
      icon: <Database className="h-8 w-8" />,
      color: 'bg-blue-500',
      skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'T-SQL', 'Stored Procedures', 'Optimización'],
      description: 'Diseño, consulta y optimización de bases de datos para análisis eficiente de datos.'
    },
    {
      category: 'ETL & Integración',
      icon: <Settings className="h-8 w-8" />,
      color: 'bg-green-500',
      skills: ['SSIS', 'Azure Data Factory', 'Talend', 'Pentaho', 'Data Modeling', 'Data Warehousing'],
      description: 'Extracción, transformación y carga de datos desde múltiples fuentes.'
    },
    {
      category: 'Business Intelligence',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'bg-purple-500',
      skills: ['Tableau', 'QlikView', 'SSRS', 'KPIs', 'Reporting', 'Data Visualization'],
      description: 'Creación de reportes ejecutivos y visualizaciones para la toma de decisiones.'
    },
    {
      category: 'Análisis de Datos',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'bg-orange-500',
      skills: ['Python', 'R', 'Pandas', 'Statistical Analysis', 'Forecasting', 'Machine Learning'],
      description: 'Análisis estadístico, modelado predictivo y generación de insights.'
    },
    {
      category: 'Herramientas Office',
      icon: <FileSpreadsheet className="h-8 w-8" />,
      color: 'bg-teal-500',
      skills: ['Excel Avanzado', 'VBA', 'Power Query Excel', 'Pivot Tables', 'Macros', 'Solver'],
      description: 'Automatización y análisis avanzado en Excel para soluciones empresariales.'
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dominio completo del stack de tecnologías para análisis de datos y business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className={`${skill.color} text-white p-3 rounded-lg mr-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;