import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ProcessBriefing = () => {
  const [selectedPreferences, setSelectedPreferences] = useState({
    collaborationStyle: '',
    communicationFrequency: '',
    decisionMaking: '',
    timelinePreference: '',
    involvementLevel: ''
  });

  const collaborationStyles = [
    {
      id: 'hands-on',
      title: 'Hands-On Partnership',
      description: 'Active daily involvement in design reviews, development decisions, and feature prioritization',
      icon: 'Users',
      benefits: ['Direct influence on all decisions', 'Real-time feedback integration', 'Deep project understanding']
    },
    {
      id: 'milestone-based',
      title: 'Milestone-Based Reviews',
      description: 'Structured reviews at key project milestones with detailed presentations and approval gates',
      icon: 'Flag',
      benefits: ['Organized decision points', 'Comprehensive progress reviews', 'Clear approval process']
    },
    {
      id: 'consultative',
      title: 'Consultative Approach',
      description: 'Regular consultation on strategic decisions while trusting our expertise for implementation details',
      icon: 'MessageSquare',
      benefits: ['Strategic input focus', 'Expert implementation', 'Efficient decision making']
    }
  ];

  const communicationOptions = [
    { id: 'daily', label: 'Daily Updates', description: 'Brief daily progress reports and immediate issue alerts' },
    { id: 'weekly', label: 'Weekly Reports', description: 'Comprehensive weekly progress reports with metrics and next steps' },
    { id: 'milestone', label: 'Milestone Updates', description: 'Detailed updates at major project milestones and deliverables' }
  ];

  const decisionMakingStyles = [
    { id: 'consensus', label: 'Consensus Building', description: 'Collaborative decision making with all stakeholders' },
    { id: 'executive', label: 'Executive Decision', description: 'Single decision maker for quick project progression' },
    { id: 'committee', label: 'Committee Review', description: 'Structured committee reviews for major decisions' }
  ];

  const timelinePreferences = [
    { id: 'aggressive', label: 'Aggressive Timeline', description: 'Fast-paced development with minimal scope changes' },
    { id: 'balanced', label: 'Balanced Approach', description: 'Steady progress with flexibility for refinements' },
    { id: 'thorough', label: 'Thorough Process', description: 'Comprehensive approach prioritizing quality over speed' }
  ];

  const involvementLevels = [
    { id: 'high', label: 'High Involvement', description: 'Active participation in design sessions and development reviews' },
    { id: 'medium', label: 'Medium Involvement', description: 'Regular check-ins and milestone approvals' },
    { id: 'low', label: 'Low Involvement', description: 'Trust-based approach with periodic updates and final approvals' }
  ];

  const handlePreferenceChange = (category, value) => {
    setSelectedPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const isFormComplete = Object.values(selectedPreferences).every(value => value !== '');

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Customize Your Process Experience
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Help us tailor our methodology to your preferred collaboration style and project requirements.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-elevation overflow-hidden">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Process Preference Assessment</h3>
            <p className="text-white/90">
              Your responses will help us customize our approach to match your working style and project needs.
            </p>
          </div>

          <div className="p-8 space-y-12">
            {/* Collaboration Style */}
            <div>
              <h4 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Users" size={20} className="mr-2 text-secondary" />
                Preferred Collaboration Style
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {collaborationStyles.map((style) => (
                  <motion.button
                    key={style.id}
                    onClick={() => handlePreferenceChange('collaborationStyle', style.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedPreferences.collaborationStyle === style.id
                        ? 'border-secondary bg-secondary/5 shadow-elevation'
                        : 'border-gray-200 hover:border-secondary/50 hover:bg-surface'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        selectedPreferences.collaborationStyle === style.id
                          ? 'bg-secondary text-white' :'bg-surface text-text-secondary'
                      }`}>
                        <Icon name={style.icon} size={20} />
                      </div>
                      <h5 className="font-semibold text-primary">{style.title}</h5>
                    </div>
                    <p className="text-text-secondary text-sm mb-4">{style.description}</p>
                    <ul className="space-y-1">
                      {style.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-xs text-text-secondary">
                          <Icon name="Check" size={12} className="mr-2 text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Communication Frequency */}
            <div>
              <h4 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="MessageCircle" size={20} className="mr-2 text-accent" />
                Communication Frequency
              </h4>
              <div className="space-y-3">
                {communicationOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedPreferences.communicationFrequency === option.id
                        ? 'border-accent bg-accent/5' :'border-gray-200 hover:border-accent/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="communicationFrequency"
                      value={option.id}
                      checked={selectedPreferences.communicationFrequency === option.id}
                      onChange={(e) => handlePreferenceChange('communicationFrequency', e.target.value)}
                      className="mt-1 mr-4"
                    />
                    <div>
                      <h5 className="font-semibold text-primary mb-1">{option.label}</h5>
                      <p className="text-text-secondary text-sm">{option.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Decision Making Style */}
            <div>
              <h4 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Target" size={20} className="mr-2 text-green-500" />
                Decision Making Style
              </h4>
              <div className="space-y-3">
                {decisionMakingStyles.map((style) => (
                  <label
                    key={style.id}
                    className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedPreferences.decisionMaking === style.id
                        ? 'border-green-500 bg-green-50' :'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="decisionMaking"
                      value={style.id}
                      checked={selectedPreferences.decisionMaking === style.id}
                      onChange={(e) => handlePreferenceChange('decisionMaking', e.target.value)}
                      className="mt-1 mr-4"
                    />
                    <div>
                      <h5 className="font-semibold text-primary mb-1">{style.label}</h5>
                      <p className="text-text-secondary text-sm">{style.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline Preference */}
            <div>
              <h4 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Clock" size={20} className="mr-2 text-orange-500" />
                Timeline Preference
              </h4>
              <div className="space-y-3">
                {timelinePreferences.map((preference) => (
                  <label
                    key={preference.id}
                    className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedPreferences.timelinePreference === preference.id
                        ? 'border-orange-500 bg-orange-50' :'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="timelinePreference"
                      value={preference.id}
                      checked={selectedPreferences.timelinePreference === preference.id}
                      onChange={(e) => handlePreferenceChange('timelinePreference', e.target.value)}
                      className="mt-1 mr-4"
                    />
                    <div>
                      <h5 className="font-semibold text-primary mb-1">{preference.label}</h5>
                      <p className="text-text-secondary text-sm">{preference.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Involvement Level */}
            <div>
              <h4 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Activity" size={20} className="mr-2 text-purple-500" />
                Your Involvement Level
              </h4>
              <div className="space-y-3">
                {involvementLevels.map((level) => (
                  <label
                    key={level.id}
                    className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedPreferences.involvementLevel === level.id
                        ? 'border-purple-500 bg-purple-50' :'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="involvementLevel"
                      value={level.id}
                      checked={selectedPreferences.involvementLevel === level.id}
                      onChange={(e) => handlePreferenceChange('involvementLevel', e.target.value)}
                      className="mt-1 mr-4"
                    />
                    <div>
                      <h5 className="font-semibold text-primary mb-1">{level.label}</h5>
                      <p className="text-text-secondary text-sm">{level.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/briefing-wizard"
                  className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isFormComplete
                      ? 'bg-accent text-white hover:bg-accent-600 hover:shadow-cta hover-lift'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  onClick={(e) => {
                    if (!isFormComplete) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Icon name="Wand2" size={20} className="mr-2" />
                  Continue to Full Briefing
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Schedule Consultation
                </Link>
              </div>
              
              {!isFormComplete && (
                <p className="text-center text-text-secondary text-sm mt-4">
                  Please complete all sections to continue to the full briefing wizard.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl shadow-elevation p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} color="white" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">Tailored Approach</h4>
            <p className="text-text-secondary text-sm">
              Your preferences shape how we collaborate, ensuring the process feels natural and efficient for your team.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-elevation p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} color="white" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">Reduced Friction</h4>
            <p className="text-text-secondary text-sm">
              By understanding your working style upfront, we eliminate common collaboration challenges and delays.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-elevation p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} color="white" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">Better Outcomes</h4>
            <p className="text-text-secondary text-sm">
              Projects that align with client preferences consistently deliver higher satisfaction and better results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessBriefing;