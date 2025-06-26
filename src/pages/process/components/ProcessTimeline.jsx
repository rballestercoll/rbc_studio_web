import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ProcessTimeline = ({ phases, selectedPhase, onPhaseSelect, projectType }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-primary hidden md:block"></div>
      
      <div className="space-y-8">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-white border-4 border-secondary rounded-full shadow-elevation hidden md:block"></div>
            
            {/* Phase Card */}
            <div className="md:ml-20">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`bg-white rounded-xl shadow-elevation p-6 cursor-pointer transition-all duration-300 ${
                  selectedPhase === phase.id ? 'ring-2 ring-secondary shadow-2xl' : 'hover:shadow-2xl'
                }`}
                onClick={() => onPhaseSelect(phase.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} rounded-lg flex items-center justify-center shadow-subtle`}>
                      <Icon name={phase.icon} size={24} color="white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        Phase {phase.id}: {phase.title}
                      </h3>
                      <p className="text-sm text-text-secondary font-medium">
                        Duration: {phase.duration}
                      </p>
                    </div>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={`text-text-secondary transition-transform duration-300 ${
                      selectedPhase === phase.id ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {phase.description}
                </p>
                
                {/* Key Activities Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Icon name="CheckCircle" size={16} className="mr-2 text-green-500" />
                      Key Activities
                    </h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {phase.activities.slice(0, 3).map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                      {phase.activities.length > 3 && (
                        <li className="text-secondary font-medium">
                          +{phase.activities.length - 3} more activities
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Icon name="Package" size={16} className="mr-2 text-accent" />
                      Deliverables
                    </h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {phase.deliverables.slice(0, 2).map((deliverable, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {deliverable}
                        </li>
                      ))}
                      {phase.deliverables.length > 2 && (
                        <li className="text-accent font-medium">
                          +{phase.deliverables.length - 2} more deliverables
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                
                {/* Tools Used */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Wrench" size={16} className="text-text-secondary" />
                      <span className="text-sm font-medium text-text-secondary">Tools:</span>
                      <div className="flex space-x-2">
                        {phase.tools.slice(0, 3).map((tool, idx) => (
                          <span key={idx} className="text-xs bg-surface px-2 py-1 rounded text-text-secondary">
                            {tool}
                          </span>
                        ))}
                        {phase.tools.length > 3 && (
                          <span className="text-xs text-secondary">+{phase.tools.length - 3}</span>
                        )}
                      </div>
                    </div>
                    <button className="text-secondary hover:text-secondary-600 transition-colors duration-300">
                      <span className="text-sm font-medium">View Details</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;