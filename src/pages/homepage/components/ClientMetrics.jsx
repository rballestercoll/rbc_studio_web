import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ClientMetrics = ({ language }) => {
  const [counters, setCounters] = useState({
    projectCompletion: 0,
    clientRetention: 0,
    performanceImprovement: 0,
    timeToMarket: 0
  });

  const finalValues = {
    projectCompletion: 98,
    clientRetention: 95,
    performanceImprovement: 75,
    timeToMarket: 40
  };

  const metrics = {
    en: [
      {
        id: 'projectCompletion',
        title: 'Project Completion Rate',
        value: finalValues.projectCompletion,
        suffix: '%',
        icon: 'CheckCircle',
        description: 'Projects delivered on time and within budget',
        color: 'text-success'
      },
      {
        id: 'clientRetention',
        title: 'Client Retention Rate',
        value: finalValues.clientRetention,
        suffix: '%',
        icon: 'Users',
        description: 'Clients who continue working with us',
        color: 'text-secondary'
      },
      {
        id: 'performanceImprovement',
        title: 'Average Performance Boost',
        value: finalValues.performanceImprovement,
        suffix: '%',
        icon: 'TrendingUp',
        description: 'Performance improvement across all projects',
        color: 'text-accent'
      },
      {
        id: 'timeToMarket',
        title: 'Faster Time to Market',
        value: finalValues.timeToMarket,
        suffix: '%',
        icon: 'Zap',
        description: 'Reduction in development time',
        color: 'text-warning'
      }
    ],
    es: [
      {
        id: 'projectCompletion',
        title: 'Tasa de Finalización de Proyectos',
        value: finalValues.projectCompletion,
        suffix: '%',
        icon: 'CheckCircle',
        description: 'Proyectos entregados a tiempo y dentro del presupuesto',
        color: 'text-success'
      },
      {
        id: 'clientRetention',
        title: 'Tasa de Retención de Clientes',
        value: finalValues.clientRetention,
        suffix: '%',
        icon: 'Users',
        description: 'Clientes que continúan trabajando con nosotros',
        color: 'text-secondary'
      },
      {
        id: 'performanceImprovement',
        title: 'Mejora Promedio de Rendimiento',
        value: finalValues.performanceImprovement,
        suffix: '%',
        icon: 'TrendingUp',
        description: 'Mejora de rendimiento en todos los proyectos',
        color: 'text-accent'
      },
      {
        id: 'timeToMarket',
        title: 'Tiempo al Mercado Más Rápido',
        value: finalValues.timeToMarket,
        suffix: '%',
        icon: 'Zap',
        description: 'Reducción en tiempo de desarrollo',
        color: 'text-warning'
      }
    ]
  };

  const currentMetrics = metrics[language];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounters({
          projectCompletion: Math.floor(finalValues.projectCompletion * easeOutQuart),
          clientRetention: Math.floor(finalValues.clientRetention * easeOutQuart),
          performanceImprovement: Math.floor(finalValues.performanceImprovement * easeOutQuart),
          timeToMarket: Math.floor(finalValues.timeToMarket * easeOutQuart)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(finalValues);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const additionalStats = {
    en: [
      { label: 'Years in Business', value: '5+', icon: 'Calendar' },
      { label: 'Team Members', value: '15+', icon: 'Users' },
      { label: 'Countries Served', value: '12+', icon: 'Globe' },
      { label: 'Technologies Mastered', value: '25+', icon: 'Code' }
    ],
    es: [
      { label: 'Años en el Negocio', value: '5+', icon: 'Calendar' },
      { label: 'Miembros del Equipo', value: '15+', icon: 'Users' },
      { label: 'Países Atendidos', value: '12+', icon: 'Globe' },
      { label: 'Tecnologías Dominadas', value: '25+', icon: 'Code' }
    ]
  };

  return (
    <div className="space-y-12">
      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentMetrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="relative">
              {/* Icon Background */}
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Icon name={metric.icon} size={32} className={metric.color} />
              </div>

              {/* Animated Counter */}
              <div className="mb-4">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {counters[metric.id]}
                  <span className="text-3xl lg:text-4xl">{metric.suffix}</span>
                </div>
                <h3 className="text-xl font-semibold text-white/90 mb-2">
                  {metric.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${counters[metric.id]}%` }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                  className={`h-2 rounded-full bg-gradient-to-r ${
                    metric.color === 'text-success' ? 'from-green-400 to-green-600' :
                    metric.color === 'text-secondary' ? 'from-blue-400 to-blue-600' :
                    metric.color === 'text-accent'? 'from-red-400 to-red-600' : 'from-yellow-400 to-yellow-600'
                  }`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="border-t border-white/20 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {additionalStats[language].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center">
                <Icon name={stat.icon} size={20} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Client Testimonial Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="relative">
          <Icon name="Quote" size={48} className="text-white/20 mx-auto mb-6" />
          <blockquote className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed mb-6">
            {language === 'en' 
              ? "RBC Studio transformed our digital presence completely. Their attention to detail and technical expertise exceeded our expectations."
              : "RBC Studio transformó completamente nuestra presencia digital. Su atención al detalle y experiencia técnica superó nuestras expectativas."
            }
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="User" size={20} className="text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-white/70 text-sm">CEO, TechStart Inc.</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClientMetrics;