import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';


const ProcessInAction = () => {
  const [selectedProject, setSelectedProject] = useState('ecommerce');

  const realProjects = [
    {
      id: 'ecommerce',
      name: 'E-commerce Platform',
      client: 'TechMart Solutions',
      type: 'Enterprise Transformation',
      duration: '16 weeks',
      team: '6 developers',
      description: 'Complete digital transformation of legacy retail system into modern e-commerce platform',
      timeline: [
        {
          phase: 'Discovery & Strategy',
          duration: '2 weeks',
          status: 'completed',
          highlights: [
            'Analyzed 50,000+ existing product records',
            'Interviewed 15 stakeholders across departments',
            'Identified 23 critical integration points',
            'Mapped customer journey across 8 touchpoints'
          ],
          challenges: [
            'Legacy database migration complexity',
            'Multiple payment gateway requirements',
            'International shipping calculations'
          ]
        },
        {
          phase: 'Design & Prototyping',
          duration: '3 weeks',
          status: 'completed',
          highlights: [
            'Created comprehensive design system',
            'Prototyped mobile-first shopping experience',
            'A/B tested checkout flow with 15% improvement',
            'Designed admin dashboard for inventory management'
          ],
          challenges: [
            'Balancing feature richness with simplicity',
            'Accessibility compliance requirements',
            'Multi-language interface design'
          ]
        },
        {
          phase: 'Development Setup',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'Configured AWS infrastructure',
            'Set up CI/CD pipeline with automated testing',
            'Established code review process',
            'Created development and staging environments'
          ]
        },
        {
          phase: 'Core Development',
          duration: '8 weeks',
          status: 'completed',
          highlights: [
            'Built scalable product catalog system',
            'Implemented secure payment processing',
            'Created real-time inventory management',
            'Developed customer account system'
          ],
          challenges: [
            'Performance optimization for large catalogs',
            'Complex pricing rules implementation',
            'Third-party API rate limiting'
          ]
        },
        {
          phase: 'Integration & Testing',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'Integrated with existing ERP system',
            'Connected payment gateways and shipping APIs',
            'Comprehensive security testing',
            'Load testing for Black Friday traffic'
          ]
        },
        {
          phase: 'Deployment & Launch',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'Zero-downtime deployment strategy',
            'Real-time monitoring setup',
            'Staff training and documentation',
            'Soft launch with beta customers'
          ]
        }
      ],
      results: [
        '300% increase in online sales',
        '45% reduction in cart abandonment',
        '60% faster page load times',
        '99.9% uptime since launch'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'Redis']
    },
    {
      id: 'fintech',
      name: 'FinTech Mobile App',
      client: 'SecureBank Digital',
      type: 'Startup MVP',
      duration: '12 weeks',
      team: '4 developers',
      description: 'Mobile-first banking application with advanced security and user experience',
      timeline: [
        {
          phase: 'Discovery & Strategy',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'Rapid market analysis and competitor research',
            'User persona development through surveys',
            'MVP feature prioritization workshop',
            'Compliance and security requirements mapping'
          ]
        },
        {
          phase: 'Design & Prototyping',
          duration: '2 weeks',
          status: 'completed',
          highlights: [
            'Mobile-first design system creation',
            'Interactive prototype with micro-animations',
            'Usability testing with 25 potential users',
            'Accessibility-first approach implementation'
          ]
        },
        {
          phase: 'Development Setup',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'React Native development environment',
            'Secure API architecture design',
            'Automated testing pipeline setup',
            'Security-first development practices'
          ]
        },
        {
          phase: 'Core Development',
          duration: '6 weeks',
          status: 'completed',
          highlights: [
            'Biometric authentication implementation',
            'Real-time transaction processing',
            'Secure data encryption throughout',
            'Intuitive account management interface'
          ]
        },
        {
          phase: 'Integration & Testing',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'Banking API integrations',
            'Penetration testing and security audit',
            'Performance testing on various devices',
            'Compliance verification'
          ]
        },
        {
          phase: 'Deployment & Launch',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'App store submission and approval',
            'Monitoring and analytics setup',
            'Customer support system integration',
            'Phased rollout strategy'
          ]
        }
      ],
      results: [
        '50,000+ downloads in first month',
        '4.8/5 app store rating',
        '85% user retention rate',
        'Zero security incidents'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Plaid', 'Auth0']
    },
    {
      id: 'healthcare',
      name: 'Healthcare Platform',
      client: 'MedConnect International',
      type: 'International Expansion',
      duration: '20 weeks',
      team: '8 developers',
      description: 'Telemedicine platform expansion to serve multiple countries with localization',
      timeline: [
        {
          phase: 'Discovery & Strategy',
          duration: '3 weeks',
          status: 'completed',
          highlights: [
            'Multi-country regulatory compliance research',
            'Cultural adaptation requirements analysis',
            'Healthcare provider workflow mapping',
            'Patient journey optimization across regions'
          ]
        },
        {
          phase: 'Design & Prototyping',
          duration: '4 weeks',
          status: 'completed',
          highlights: [
            'Multi-language design system',
            'Cultural sensitivity in UI/UX design',
            'Accessibility compliance for healthcare',
            'Provider and patient portal prototypes'
          ]
        },
        {
          phase: 'Development Setup',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'Multi-region cloud infrastructure',
            'HIPAA-compliant development environment',
            'Internationalization framework setup',
            'Security-first architecture implementation'
          ]
        },
        {
          phase: 'Core Development',
          duration: '10 weeks',
          status: 'completed',
          highlights: [
            'Video consultation platform',
            'Electronic health records system',
            'Multi-language content management',
            'Provider scheduling and availability'
          ]
        },
        {
          phase: 'Integration & Testing',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'Healthcare system integrations',
            'Multi-region compliance testing',
            'Load testing for concurrent consultations',
            'Security and privacy audit'
          ]
        },
        {
          phase: 'Deployment & Launch',
          duration: '1 week',
          status: 'completed',
          highlights: [
            'Phased regional rollout',
            'Healthcare provider training program',
            'Patient onboarding optimization',
            'Real-time monitoring across regions'
          ]
        }
      ],
      results: [
        '10,000+ consultations monthly',
        '95% patient satisfaction score',
        '40% reduction in wait times',
        '3 countries successfully launched'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS', 'Twilio']
    }
  ];

  const selectedProjectData = realProjects.find(p => p.id === selectedProject);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Process in Action
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how our methodology adapts to real projects with actual timelines, challenges, and measurable results.
          </p>
        </motion.div>

        {/* Project Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {realProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedProject === project.id
                  ? 'bg-secondary text-white shadow-elevation'
                  : 'bg-white text-text-primary hover:bg-secondary/10 shadow-subtle'
              }`}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Project Details */}
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-elevation overflow-hidden"
        >
          {/* Project Header */}
          <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedProjectData.name}</h3>
                <p className="text-white/90 mb-4">{selectedProjectData.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center">
                    <Icon name="Building" size={16} className="mr-2" />
                    {selectedProjectData.client}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {selectedProjectData.duration}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" size={16} className="mr-2" />
                    {selectedProjectData.team}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Key Results</h4>
                <ul className="space-y-2">
                  {selectedProjectData.results.map((result, index) => (
                    <li key={index} className="flex items-center">
                      <Icon name="TrendingUp" size={16} className="mr-2 text-accent" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="p-8">
            <h4 className="text-xl font-semibold text-primary mb-6">Project Timeline</h4>
            <div className="space-y-6">
              {selectedProjectData.timeline.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index < selectedProjectData.timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Phase Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle" size={20} color="white" />
                    </div>
                    
                    {/* Phase Content */}
                    <div className="flex-1 bg-surface rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg font-semibold text-primary">{phase.phase}</h5>
                        <span className="text-sm text-text-secondary font-medium">{phase.duration}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h6 className="font-medium text-primary mb-2 flex items-center">
                            <Icon name="Star" size={16} className="mr-2 text-yellow-500" />
                            Key Highlights
                          </h6>
                          <ul className="space-y-1 text-sm text-text-secondary">
                            {phase.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {phase.challenges && (
                          <div>
                            <h6 className="font-medium text-primary mb-2 flex items-center">
                              <Icon name="AlertTriangle" size={16} className="mr-2 text-orange-500" />
                              Challenges Overcome
                            </h6>
                            <ul className="space-y-1 text-sm text-text-secondary">
                              {phase.challenges.map((challenge, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="px-8 pb-8">
            <h4 className="text-lg font-semibold text-primary mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">
              {selectedProjectData.technologies.map((tech, index) => (
                <span key={index} className="bg-surface px-4 py-2 rounded-lg text-sm font-medium text-text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessInAction;