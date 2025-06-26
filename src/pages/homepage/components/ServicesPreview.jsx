import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ServicesPreview = ({ language }) => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = {
    en: [
      {
        id: 'web-development',
        title: 'Web Development',
        icon: 'Globe',
        description: 'Custom web applications built with modern technologies and best practices.',
        features: ['React/Vue.js', 'Node.js APIs', 'Database Design', 'Cloud Deployment'],
        roiMetrics: {
          timeToMarket: '40% faster',
          performance: '60% improvement',
          maintenance: '50% reduction'
        },
        processSteps: ['Discovery', 'Design', 'Development', 'Testing', 'Launch'],
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50'
      },
      {
        id: 'mobile-development',
        title: 'Mobile Development',
        icon: 'Smartphone',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
        roiMetrics: {
          userEngagement: '75% increase',
          downloads: '200% growth',
          retention: '45% improvement'
        },
        processSteps: ['Strategy', 'UX/UI', 'Development', 'Testing', 'Publishing'],
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-50'
      },
      {
        id: 'cloud-solutions',
        title: 'Cloud Solutions',
        icon: 'Cloud',
        description: 'Scalable cloud infrastructure and DevOps solutions for modern businesses.',
        features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring'],
        roiMetrics: {
          scalability: '300% increase',
          costs: '35% reduction',
          uptime: '99.9% guaranteed'
        },
        processSteps: ['Assessment', 'Architecture', 'Migration', 'Optimization', 'Monitoring'],
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50'
      },
      {
        id: 'ai-integration',
        title: 'AI Integration',
        icon: 'Brain',
        description: 'Intelligent solutions powered by machine learning and artificial intelligence.',
        features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Automation'],
        roiMetrics: {
          efficiency: '80% improvement',
          accuracy: '95% precision',
          automation: '70% of tasks'
        },
        processSteps: ['Analysis', 'Model Selection', 'Training', 'Integration', 'Optimization'],
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50'
      }
    ],
    es: [
      {
        id: 'web-development',
        title: 'Desarrollo Web',
        icon: 'Globe',
        description: 'Aplicaciones web personalizadas construidas con tecnologías modernas y mejores prácticas.',
        features: ['React/Vue.js', 'APIs Node.js', 'Diseño de BD', 'Despliegue en Nube'],
        roiMetrics: {
          timeToMarket: '40% más rápido',
          performance: '60% mejora',
          maintenance: '50% reducción'
        },
        processSteps: ['Descubrimiento', 'Diseño', 'Desarrollo', 'Pruebas', 'Lanzamiento'],
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50'
      },
      {
        id: 'mobile-development',
        title: 'Desarrollo Móvil',
        icon: 'Smartphone',
        description: 'Aplicaciones móviles nativas y multiplataforma para iOS y Android.',
        features: ['React Native', 'Flutter', 'iOS/Android Nativo', 'Optimización App Store'],
        roiMetrics: {
          userEngagement: '75% aumento',
          downloads: '200% crecimiento',
          retention: '45% mejora'
        },
        processSteps: ['Estrategia', 'UX/UI', 'Desarrollo', 'Pruebas', 'Publicación'],
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-50'
      },
      {
        id: 'cloud-solutions',
        title: 'Soluciones en la Nube',
        icon: 'Cloud',
        description: 'Infraestructura escalable en la nube y soluciones DevOps para empresas modernas.',
        features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'Pipelines CI/CD', 'Monitoreo'],
        roiMetrics: {
          scalability: '300% aumento',
          costs: '35% reducción',
          uptime: '99.9% garantizado'
        },
        processSteps: ['Evaluación', 'Arquitectura', 'Migración', 'Optimización', 'Monitoreo'],
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50'
      },
      {
        id: 'ai-integration',
        title: 'Integración de IA',
        icon: 'Brain',
        description: 'Soluciones inteligentes impulsadas por aprendizaje automático e inteligencia artificial.',
        features: ['Machine Learning', 'Procesamiento de Lenguaje Natural', 'Visión por Computadora', 'Automatización'],
        roiMetrics: {
          efficiency: '80% mejora',
          accuracy: '95% precisión',
          automation: '70% de tareas'
        },
        processSteps: ['Análisis', 'Selección de Modelo', 'Entrenamiento', 'Integración', 'Optimización'],
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50'
      }
    ]
  };

  const currentServices = services[language];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {currentServices.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          onMouseEnter={() => setHoveredService(service.id)}
          onMouseLeave={() => setHoveredService(null)}
          className="group relative bg-white rounded-2xl p-8 shadow-subtle hover:shadow-elevation transition-all duration-500 hover-lift cursor-pointer overflow-hidden"
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={service.icon} size={28} color="white" />
            </div>
            <Link
              to="/services"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-secondary hover:text-secondary-600"
            >
              <Icon name="ArrowUpRight" size={20} />
            </Link>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-text-secondary leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                {language === 'en' ? 'Key Features' : 'Características Clave'}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm">
                    <Icon name="Check" size={14} className="text-success" />
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Metrics - Show on Hover */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: hoveredService === service.id ? 1 : 0,
                height: hoveredService === service.id ? 'auto' : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`${service.bgColor} rounded-lg p-4 space-y-3`}>
                <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                  {language === 'en' ? 'ROI Metrics' : 'Métricas ROI'}
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(service.roiMetrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-sm">
                      <span className="text-text-secondary capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </span>
                      <span className="font-semibold text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Process Visualization */}
            <div className="pt-4 border-t border-primary-100">
              <h4 className="font-semibold text-primary text-sm uppercase tracking-wide mb-3">
                {language === 'en' ? 'Process' : 'Proceso'}
              </h4>
              <div className="flex items-center space-x-2 overflow-x-auto">
                {service.processSteps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                      <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                        {idx + 1}
                      </div>
                      <span className="text-xs text-text-secondary mt-1 text-center">{step}</span>
                    </div>
                    {idx < service.processSteps.length - 1 && (
                      <Icon name="ArrowRight" size={12} className="text-primary-300 flex-shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: hoveredService === service.id ? 1 : 0,
              y: hoveredService === service.id ? 0 : 10
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-6"
          >
            <Link
              to="/briefing-wizard"
              className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-cta transition-all duration-300 hover-lift`}
            >
              <Icon name="Rocket" size={16} className="mr-2" />
              {language === 'en' ? 'Start Project' : 'Iniciar Proyecto'}
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white to-surface rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-surface to-white rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesPreview;