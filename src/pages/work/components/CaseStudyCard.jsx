import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CaseStudyCard = ({ caseStudy, index, language }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('challenge');

  const tabLabels = {
    en: {
      challenge: 'Challenge',
      approach: 'Approach',
      solution: 'Solution',
      impact: 'Impact'
    },
    es: {
      challenge: 'Desafío',
      approach: 'Enfoque',
      solution: 'Solución',
      impact: 'Impacto'
    }
  };

  const labels = {
    en: {
      viewDetails: 'View Case Study',
      hideDetails: 'Hide Details',
      liveDemo: 'Live Demo',
      techStack: 'Tech Stack',
      timeline: 'Timeline',
      teamSize: 'Team Size',
      clientTestimonial: 'Client Testimonial',
      relatedProjects: 'Related Projects',
      startSimilarProject: 'Start Similar Project'
    },
    es: {
      viewDetails: 'Ver Caso de Estudio',
      hideDetails: 'Ocultar Detalles',
      liveDemo: 'Demo en Vivo',
      techStack: 'Stack Tecnológico',
      timeline: 'Cronología',
      teamSize: 'Tamaño del Equipo',
      clientTestimonial: 'Testimonio del Cliente',
      relatedProjects: 'Proyectos Relacionados',
      startSimilarProject: 'Iniciar Proyecto Similar'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-subtle hover:shadow-elevation transition-all duration-500 overflow-hidden group"
    >
      {/* Hero Image with Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={caseStudy.heroImage}
          alt={caseStudy.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Market Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/20 backdrop-blur-md text-white text-sm font-medium rounded-full">
            {caseStudy.market}
          </span>
        </div>

        {/* Industry Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-secondary/90 backdrop-blur-md text-white text-sm font-medium rounded-full">
            {caseStudy.industry}
          </span>
        </div>

        {/* Project Type */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-accent/90 backdrop-blur-md text-white text-sm font-medium rounded-full">
            {caseStudy.projectType}
          </span>
        </div>

        {/* Performance Metrics Overlay */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {caseStudy.keyMetrics?.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="px-2 py-1 bg-success/90 backdrop-blur-md text-white text-xs font-medium rounded">
              {metric.value}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
            {caseStudy.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {caseStudy.shortDescription}
          </p>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div className="bg-surface p-3 rounded-lg">
            <Icon name="Clock" size={16} className="text-secondary mx-auto mb-1" />
            <div className="text-xs text-text-secondary">{labels[language].timeline}</div>
            <div className="font-semibold text-primary text-sm">{caseStudy.timeline}</div>
          </div>
          <div className="bg-surface p-3 rounded-lg">
            <Icon name="Users" size={16} className="text-secondary mx-auto mb-1" />
            <div className="text-xs text-text-secondary">{labels[language].teamSize}</div>
            <div className="font-semibold text-primary text-sm">{caseStudy.teamSize}</div>
          </div>
          <div className="bg-surface p-3 rounded-lg">
            <Icon name="Code" size={16} className="text-secondary mx-auto mb-1" />
            <div className="text-xs text-text-secondary">{labels[language].techStack}</div>
            <div className="font-semibold text-primary text-sm">{caseStudy.primaryTech}</div>
          </div>
        </div>

        {/* Key Results */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {caseStudy.keyMetrics?.slice(0, 4).map((metric, idx) => (
            <div key={idx} className="text-center p-3 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg">
              <Icon name={metric.icon} size={18} className="text-secondary mx-auto mb-1" />
              <div className="font-bold text-primary text-sm">{metric.value}</div>
              <div className="text-text-secondary text-xs">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 px-4 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-600 transition-all duration-300 hover-lift text-sm"
          >
            {showDetails ? labels[language].hideDetails : labels[language].viewDetails}
          </button>
          {caseStudy.liveDemo && (
            <a
              href={caseStudy.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-white font-medium rounded-lg hover:bg-accent-600 transition-all duration-300 hover-lift text-sm"
            >
              <Icon name="ExternalLink" size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Detailed Case Study */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="border-t border-primary-100 bg-surface"
        >
          <div className="p-6">
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-6 border-b border-primary-200">
              {Object.keys(tabLabels[language]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 px-1 font-medium text-sm transition-all duration-300 border-b-2 ${
                    activeTab === tab
                      ? 'text-secondary border-secondary' :'text-text-secondary border-transparent hover:text-secondary'
                  }`}
                >
                  {tabLabels[language][tab]}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === 'challenge' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {caseStudy.challenge}
                  </p>
                  {caseStudy.challengePoints && (
                    <ul className="space-y-2">
                      {caseStudy.challengePoints.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Icon name="AlertCircle" size={16} className="text-warning mt-0.5" />
                          <span className="text-text-secondary text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}

              {activeTab === 'approach' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {caseStudy.approach}
                  </p>
                  {caseStudy.methodologySteps && (
                    <div className="space-y-3">
                      {caseStudy.methodologySteps.map((step, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-medium">
                            {idx + 1}
                          </div>
                          <span className="text-text-secondary text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'solution' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {caseStudy.solution}
                  </p>
                  
                  {/* Technology Stack */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">{labels[language].techStack}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram Preview */}
                  {caseStudy.architectureImage && (
                    <div className="bg-white rounded-lg p-4 border border-primary-200">
                      <h4 className="font-semibold text-primary mb-2">System Architecture</h4>
                      <Image
                        src={caseStudy.architectureImage}
                        alt="System Architecture"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'impact' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {caseStudy.impact}
                  </p>

                  {/* Detailed Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {caseStudy.detailedMetrics?.map((metric, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg border border-primary-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name={metric.icon} size={20} className="text-success" />
                          <span className="font-semibold text-primary">{metric.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-success">{metric.value}</div>
                        <div className="text-text-secondary text-sm">{metric.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Client Testimonial */}
                  {caseStudy.testimonial && (
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-lg">
                      <blockquote className="text-text-secondary italic mb-2">
                        "{caseStudy.testimonial.quote}"
                      </blockquote>
                      <cite className="text-primary text-sm font-medium">
                        — {caseStudy.testimonial.author}, {caseStudy.testimonial.position}
                      </cite>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Start Similar Project CTA */}
            <div className="mt-6 pt-4 border-t border-primary-200 text-center">
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Rocket" size={18} className="mr-2" />
                {labels[language].startSimilarProject}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CaseStudyCard;