import React from 'react';
import { Briefcase, Calendar, Award, Target } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Business Intelligence Analyst',
      company: 'Petroleos del Sur S.A',
      period: 'Junio 2024 - Presente',
      description: 'Liderazgo en la implementación de soluciones BI empresariales, desarrollo de dashboards ejecutivos y optimización de procesos de análisis de datos.',
      achievements: [
        'Implementación de dashboard ejecutivo que redujo el tiempo de reporting en 60%',
        'Desarrollo de 15+ reportes automatizados con Power BI',
        'Optimización de consultas SQL mejorando performance en 40%'
      ]
    },
    {
      title: 'Analista de Datos',
      company: 'Marketplace S.A.',
      period: 'Marzo 2023 - Junio 2024',
      description: 'Análisis de datos financieros, desarrollo de modelos predictivos y creación de reportes regulatorios.',
      achievements: [
        'Implementación de dashboard ejecutivo',
        'Automatización de reportes con excel VBA',
        'Creación de data warehouse para análisis histórico',
        'Reducción de 50% en tiempo de preparación de datos'
      ]
    },
    {
      title: 'Junior Data Analyst',
      company: 'Consultora de Negocios',
      period: '2018 - 2020',
      description: 'Soporte en análisis de datos, creación de reportes y asistencia en proyectos de Business Intelligence.',
      achievements: [
        'Participación en 8+ proyectos de implementación de BI',
        'Desarrollo de skills en Power Platform y SQL',
        'Creación de documentación técnica y manuales de usuario',
        'Soporte a usuarios finales y resolución de incidencias'
      ]
    }
  ];

  const certifications = [
    'Microsoft Certified: Power BI Data Analyst Associate',
    'Microsoft Certified: Azure Data Fundamentals',
    'Tableau Desktop Specialist',
    'SQL Server Database Administration'
  ];

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trayectoria sólida en análisis de datos y business intelligence con resultados comprobados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-l-0">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm font-medium text-gray-900 mb-2">
                        <Target className="h-4 w-4 mr-2 text-green-600" />
                        Logros Destacados:
                      </div>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 text-sm pl-4 border-l-2 border-green-200">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl sticky top-24">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Certificaciones</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-900 leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <Briefcase className="h-5 w-5 text-teal-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Disponibilidad</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">Abierto a nuevas oportunidades</p>
                <p className="text-sm text-gray-600">Modalidad: Presencial, Remoto o Híbrido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;