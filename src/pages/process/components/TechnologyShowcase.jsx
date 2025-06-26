import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TechnologyShowcase = () => {
  const [selectedTool, setSelectedTool] = useState('figma');

  const tools = [
    {
      id: 'figma',
      name: 'Figma',
      category: 'Design Collaboration',
      description: 'Real-time design collaboration with clients and stakeholders',
      features: [
        'Live design reviews with stakeholders',
        'Component library sharing',
        'Design system documentation',
        'Interactive prototype testing',
        'Version control and history'
      ],
      benefits: [
        'Transparent design process',
        'Faster feedback cycles',
        'Consistent design language',
        'Reduced revision rounds'
      ],
      screenshot: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      icon: 'Figma',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'Development Transparency',
      description: 'Complete code transparency with real-time development tracking',
      features: [
        'Real-time code commits and progress',
        'Pull request reviews and discussions',
        'Issue tracking and resolution',
        'Automated testing and deployment',
        'Code quality metrics and reports'
      ],
      benefits: [
        'Full development visibility',
        'Quality assurance transparency',
        'Collaborative code reviews',
        'Automated quality checks'
      ],
      screenshot: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop',
      icon: 'Github',
      color: 'from-gray-700 to-gray-900'
    },
    {
      id: 'slack',
      name: 'Slack',
      category: 'Communication Hub',
      description: 'Centralized communication with dedicated project channels',
      features: [
        'Dedicated project channels',
        'Real-time notifications and updates',
        'File sharing and collaboration',
        'Integration with development tools',
        'Meeting scheduling and reminders'
      ],
      benefits: [
        'Instant communication',
        'Organized project discussions',
        'Reduced email overhead',
        'Better team coordination'
      ],
      screenshot: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      icon: 'MessageSquare',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'dashboard',
      name: 'Project Dashboard',
      category: 'Progress Tracking',
      description: 'Custom client dashboard for real-time project visibility',
      features: [
        'Real-time progress tracking',
        'Milestone and deadline monitoring',
        'Budget and time tracking',
        'Deliverable status updates',
        'Team activity and contributions'
      ],
      benefits: [
        'Complete project visibility',
        'Proactive issue identification',
        'Better resource planning',
        'Improved accountability'
      ],
      screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      icon: 'BarChart3',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'testing',
      name: 'Testing Suite',
      category: 'Quality Assurance',
      description: 'Comprehensive testing tools ensuring code quality and reliability',
      features: [
        'Automated unit and integration tests',
        'End-to-end testing scenarios',
        'Performance and load testing',
        'Security vulnerability scanning',
        'Cross-browser compatibility testing'
      ],
      benefits: [
        'Higher code quality',
        'Reduced bugs in production',
        'Faster deployment cycles',
        'Better user experience'
      ],
      screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      icon: 'TestTube',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'monitoring',
      name: 'Monitoring & Analytics',
      category: 'Performance Tracking',
      description: 'Real-time application monitoring and performance analytics',
      features: [
        'Real-time performance monitoring',
        'Error tracking and alerting',
        'User behavior analytics',
        'Infrastructure health monitoring',
        'Custom reporting and insights'
      ],
      benefits: [
        'Proactive issue resolution',
        'Data-driven optimizations',
        'Better user experience',
        'Improved system reliability'
      ],
      screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      icon: 'Activity',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const selectedToolData = tools.find(tool => tool.id === selectedTool);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Technology Integration
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See the actual tools we use to ensure transparency, collaboration, and exceptional results throughout your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tool Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-elevation p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-primary mb-6">Our Tech Stack</h3>
              <div className="space-y-2">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedTool === tool.id
                        ? 'bg-secondary text-white shadow-subtle'
                        : 'hover:bg-surface text-text-primary'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon name={tool.icon} size={20} color="white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate">{tool.name}</h4>
                        <p className={`text-sm truncate ${
                          selectedTool === tool.id ? 'text-white/80' : 'text-text-secondary'
                        }`}>
                          {tool.category}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tool Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedTool}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-elevation overflow-hidden"
            >
              {/* Tool Header */}
              <div className={`bg-gradient-to-br ${selectedToolData.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Icon name={selectedToolData.icon} size={32} color="white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedToolData.name}</h3>
                      <p className="text-white/90">{selectedToolData.category}</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {selectedToolData.description}
                  </p>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={selectedToolData.screenshot}
                  alt={`${selectedToolData.name} interface`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Features and Benefits */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                      <Icon name="Settings" size={20} className="mr-2 text-secondary" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedToolData.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="Check" size={16} className="mr-3 mt-1 text-green-500 flex-shrink-0" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                      <Icon name="TrendingUp" size={20} className="mr-2 text-accent" />
                      Client Benefits
                    </h4>
                    <ul className="space-y-3">
                      {selectedToolData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="Star" size={16} className="mr-3 mt-1 text-yellow-500 flex-shrink-0" />
                          <span className="text-text-secondary">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Integration Note */}
                <div className="mt-8 p-6 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <Icon name="Zap" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-primary mb-2">Seamless Integration</h5>
                      <p className="text-text-secondary">
                        All our tools are integrated to provide you with a unified view of your project progress. 
                        You'll receive automated updates, notifications, and have access to real-time dashboards 
                        that keep you informed every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technology Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl shadow-elevation p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} color="white" />
            </div>
            <h4 className="text-2xl font-bold text-primary mb-2">50%</h4>
            <p className="text-text-secondary">Faster Communication</p>
          </div>

          <div className="bg-white rounded-xl shadow-elevation p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Eye" size={24} color="white" />
            </div>
            <h4 className="text-2xl font-bold text-primary mb-2">100%</h4>
            <p className="text-text-secondary">Project Transparency</p>
          </div>

          <div className="bg-white rounded-xl shadow-elevation p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} color="white" />
            </div>
            <h4 className="text-2xl font-bold text-primary mb-2">30%</h4>
            <p className="text-text-secondary">Reduced Revisions</p>
          </div>

          <div className="bg-white rounded-xl shadow-elevation p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} color="white" />
            </div>
            <h4 className="text-2xl font-bold text-primary mb-2">98%</h4>
            <p className="text-text-secondary">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;