import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ProjectTimeline = ({ project, language }) => {
  const labels = {
    en: {
      projectTimeline: 'Project Timeline',
      phase: 'Phase',
      duration: 'Duration',
      deliverables: 'Deliverables',
      keyMilestones: 'Key Milestones'
    },
    es: {
      projectTimeline: 'Cronología del Proyecto',
      phase: 'Fase',
      duration: 'Duración',
      deliverables: 'Entregables',
      keyMilestones: 'Hitos Clave'
    }
  };

  const timelinePhases = project.timeline || [
    {
      phase: language === 'en' ? 'Discovery & Planning' : 'Descubrimiento y Planificación',
      duration: '2 weeks',
      icon: 'Search',
      deliverables: language === 'en' 
        ? ['Requirements Analysis', 'Technical Architecture', 'Project Roadmap']
        : ['Análisis de Requisitos', 'Arquitectura Técnica', 'Hoja de Ruta del Proyecto'],
      milestones: language === 'en'
        ? ['Stakeholder interviews completed', 'Technical specifications approved']
        : ['Entrevistas con stakeholders completadas', 'Especificaciones técnicas aprobadas']
    },
    {
      phase: language === 'en' ? 'Design & Prototyping' : 'Diseño y Prototipado',
      duration: '3 weeks',
      icon: 'Palette',
      deliverables: language === 'en'
        ? ['UI/UX Designs', 'Interactive Prototype', 'Design System']
        : ['Diseños UI/UX', 'Prototipo Interactivo', 'Sistema de Diseño'],
      milestones: language === 'en'
        ? ['User testing completed', 'Design approval received']
        : ['Pruebas de usuario completadas', 'Aprobación de diseño recibida']
    },
    {
      phase: language === 'en' ? 'Development' : 'Desarrollo',
      duration: '8 weeks',
      icon: 'Code',
      deliverables: language === 'en'
        ? ['Frontend Application', 'Backend APIs', 'Database Schema']
        : ['Aplicación Frontend', 'APIs Backend', 'Esquema de Base de Datos'],
      milestones: language === 'en'
        ? ['MVP completion', 'Integration testing', 'Performance optimization']
        : ['Finalización MVP', 'Pruebas de integración', 'Optimización de rendimiento']
    },
    {
      phase: language === 'en' ? 'Testing & Launch' : 'Pruebas y Lanzamiento',
      duration: '2 weeks',
      icon: 'CheckCircle',
      deliverables: language === 'en'
        ? ['Quality Assurance', 'Production Deployment', 'User Training']
        : ['Aseguramiento de Calidad', 'Despliegue en Producción', 'Capacitación de Usuarios'],
      milestones: language === 'en'
        ? ['Final testing completed', 'Go-live successful']
        : ['Pruebas finales completadas', 'Lanzamiento exitoso']
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-subtle p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="GitBranch" size={20} className="text-secondary" />
        <h3 className="text-xl font-semibold text-primary">{labels[language].projectTimeline}</h3>
      </div>

      <div className="space-y-6">
        {timelinePhases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            {index < timelinePhases.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-primary-200"></div>
            )}

            <div className="flex space-x-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                <Icon name={phase.icon} size={20} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-primary">{phase.phase}</h4>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                    {phase.duration}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Deliverables */}
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">{labels[language].deliverables}:</h5>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-success" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Milestones */}
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">{labels[language].keyMilestones}:</h5>
                    <ul className="space-y-1">
                      {phase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name="Target" size={14} className="text-accent" />
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;