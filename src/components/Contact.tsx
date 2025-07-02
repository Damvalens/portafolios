import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'celso.abente16@gmail.com',
      href: 'mailto:celso.abente16@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Teléfono',
      value: '+595 (972) 163-360',
      href: 'tel:+595972163360'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Ubicación',
      value: 'Asunción, Paraguay',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/celso-abente-32625b16a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/Damvalens',
      color: 'hover:text-gray-900'
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'WhatsApp',
      href: 'https://wa.me/595972163360',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Conectemos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto interesante? Me encantaría escuchar sobre él y explorar cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                  >
                    <div className="text-blue-600 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-gray-900 font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Sígueme en Redes</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 ${social.color} border border-gray-100`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Por qué trabajar conmigo?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Experiencia comprobada en proyectos de BI</li>
                <li>• Enfoque en resultados y valor empresarial</li>
                <li>• Comunicación clara y constante</li>
                <li>• Adaptabilidad a diferentes metodologías</li>
                <li>• Pasión por la innovación y mejora continua</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Cuéntame más sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send className="h-4 w-4" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;