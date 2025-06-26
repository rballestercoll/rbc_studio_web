import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

const ProcessPhaseDetail = ({ phase, projectType, onClose }) => {
  if (!phase) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`bg-gradient-to-br ${phase.color} p-6 rounded-t-2xl text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Icon name={phase.icon} size={32} color="white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      Phase {phase.id}: {phase.title}
                    </h2>
                    <p className="text-white/90">Duration: {phase.duration}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                >
                  <Icon name="X" size={20} color="white" />
                </button>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                {phase.description}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Project Type Adaptation */}
            {projectType && (
              <div className="bg-surface rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Icon name="Zap" size={20} className="mr-2 text-secondary" />
                  {projectType.name} Adaptations
                </h3>
                <p className="text-text-secondary mb-4">{projectType.description}</p>
                <ul className="space-y-2">
                  {projectType.adaptations.map((adaptation, index) => (
                    <li key={index} className="flex items-start">
                      <Icon name="ArrowRight" size={16} className="mr-2 mt-1 text-secondary flex-shrink-0" />
                      <span className="text-text-secondary">{adaptation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Activities */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="CheckCircle" size={20} className="mr-2 text-green-500" />
                Detailed Activities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.activities.map((activity, index) => (
                  <div key={index} className="bg-surface rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-semibold text-green-600">{index + 1}</span>
                      </div>
                      <span className="text-text-secondary">{activity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="Package" size={20} className="mr-2 text-accent" />
                Deliverables
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.deliverables.map((deliverable, index) => (
                  <div key={index} className="bg-surface rounded-lg p-4">
                    <div className="flex items-start">
                      <Icon name="FileText" size={16} className="mr-3 mt-1 text-accent flex-shrink-0" />
                      <span className="text-text-secondary">{deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="Users" size={20} className="mr-2 text-secondary" />
                Your Role & Responsibilities
              </h3>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-text-secondary mb-4">
                  Your active participation ensures project success. Here's what we need from you during this phase:
                </p>
                <ul className="space-y-3">
                  {phase.clientResponsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <Icon name="User" size={16} className="mr-3 mt-1 text-secondary flex-shrink-0" />
                      <span className="text-text-secondary">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="Wrench" size={20} className="mr-2 text-orange-500" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {phase.tools.map((tool, index) => (
                  <div key={index} className="bg-surface rounded-lg px-4 py-2 flex items-center space-x-2">
                    <Icon name="Tool" size={16} className="text-orange-500" />
                    <span className="font-medium text-text-primary">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Touchpoints */}
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="MessageSquare" size={20} className="mr-2 text-secondary" />
                Collaboration & Communication
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Calendar" size={20} className="text-secondary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Regular Check-ins</h4>
                  <p className="text-sm text-text-secondary">Weekly progress meetings and milestone reviews</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="MessageCircle" size={20} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Real-time Updates</h4>
                  <p className="text-sm text-text-secondary">Slack integration for instant communication</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Eye" size={20} className="text-green-600" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Full Transparency</h4>
                  <p className="text-sm text-text-secondary">Access to project dashboard and progress tracking</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProcessPhaseDetail;