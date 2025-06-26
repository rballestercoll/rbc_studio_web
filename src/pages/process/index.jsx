import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

import ProcessTimeline from './components/ProcessTimeline';
import ProcessPhaseDetail from './components/ProcessPhaseDetail';
import ProcessInAction from './components/ProcessInAction';
import TechnologyShowcase from './components/TechnologyShowcase';
import TeamInsights from './components/TeamInsights';
import ProcessBriefing from './components/ProcessBriefing';

const Process = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [selectedProjectType, setSelectedProjectType] = useState('startup');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const processPhases = [
    {
      id: 1,
      title: "Discovery & Strategy",
      duration: "1-2 weeks",
      description: "Deep dive into your business goals, user needs, and technical requirements",
      activities: [
        "Stakeholder interviews and workshops",
        "Market research and competitive analysis", 
        "Technical architecture planning",
        "User journey mapping",
        "Project roadmap creation"
      ],
      deliverables: [
        "Project brief and requirements document",
        "Technical specification",
        "User personas and journey maps",
        "Project timeline and milestones"
      ],
      clientResponsibilities: [
        "Provide access to key stakeholders",
        "Share existing documentation and assets",
        "Participate in discovery workshops",
        "Review and approve project scope"
      ],
      tools: ["Figma", "Miro", "Notion", "Google Meet"],
      icon: "Search",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Design & Prototyping",
      duration: "2-3 weeks",
      description: "Creating intuitive user experiences and visual designs that align with your brand",
      activities: [
        "Wireframing and information architecture",
        "UI/UX design system creation",
        "Interactive prototype development",
        "Usability testing and iteration",
        "Design system documentation"
      ],
      deliverables: [
        "Complete design system",
        "High-fidelity mockups",
        "Interactive prototypes",
        "Design specifications for development"
      ],
      clientResponsibilities: [
        "Provide brand guidelines and assets",
        "Review and feedback on designs",
        "Participate in usability testing",
        "Approve final design direction"
      ],
      tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
      icon: "Palette",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Development Setup",
      duration: "1 week",
      description: "Establishing robust development infrastructure and project architecture",
      activities: [
        "Development environment setup",
        "CI/CD pipeline configuration",
        "Code repository initialization",
        "Development standards documentation",
        "Team onboarding and access setup"
      ],
      deliverables: [
        "Configured development environment",
        "CI/CD pipeline setup",
        "Code standards documentation",
        "Project management dashboard"
      ],
      clientResponsibilities: [
        "Provide necessary access credentials",
        "Review development standards",
        "Set up communication channels",
        "Approve development approach"
      ],
      tools: ["GitHub", "Docker", "AWS", "Slack"],
      icon: "Settings",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Core Development",
      duration: "4-8 weeks",
      description: "Building the core functionality with regular client collaboration and feedback",
      activities: [
        "Frontend and backend development",
        "Database design and implementation",
        "API development and integration",
        "Regular code reviews and testing",
        "Weekly progress demonstrations"
      ],
      deliverables: [
        "Core application functionality",
        "API documentation",
        "Test coverage reports",
        "Weekly demo recordings"
      ],
      clientResponsibilities: [
        "Attend weekly demo sessions",
        "Provide timely feedback",
        "Test development builds",
        "Approve feature implementations"
      ],
      tools: ["React", "Node.js", "PostgreSQL", "Jest"],
      icon: "Code",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Integration & Testing",
      duration: "1-2 weeks",
      description: "Comprehensive testing and third-party service integration",
      activities: [
        "Third-party API integrations",
        "Comprehensive testing suite",
        "Performance optimization",
        "Security audit and fixes",
        "Cross-browser compatibility testing"
      ],
      deliverables: [
        "Fully integrated application",
        "Test reports and coverage",
        "Performance audit results",
        "Security assessment report"
      ],
      clientResponsibilities: [
        "Provide third-party credentials",
        "Participate in user acceptance testing",
        "Review security requirements",
        "Approve integration approach"
      ],
      tools: ["Cypress", "Lighthouse", "SonarQube", "Postman"],
      icon: "Link",
      color: "from-red-500 to-red-600"
    },
    {
      id: 6,
      title: "Deployment & Launch",
      duration: "1 week",
      description: "Seamless deployment to production with monitoring and optimization",
      activities: [
        "Production environment setup",
        "Deployment automation",
        "Monitoring and logging setup",
        "Performance optimization",
        "Launch coordination and support"
      ],
      deliverables: [
        "Live production application",
        "Deployment documentation",
        "Monitoring dashboard setup",
        "Launch support plan"
      ],
      clientResponsibilities: [
        "Provide production credentials",
        "Coordinate launch communications",
        "Review deployment checklist",
        "Approve go-live timeline"
      ],
      tools: ["AWS", "Netlify", "DataDog", "CloudFlare"],
      icon: "Rocket",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 7,
      title: "Support & Optimization",
      duration: "Ongoing",
      description: "Continuous monitoring, maintenance, and feature enhancement",
      activities: [
        "Performance monitoring and optimization",
        "Bug fixes and maintenance",
        "Feature enhancements",
        "Analytics and reporting",
        "Ongoing technical support"
      ],
      deliverables: [
        "Monthly performance reports",
        "Maintenance and update logs",
        "Feature enhancement roadmap",
        "Support documentation"
      ],
      clientResponsibilities: [
        "Monitor application usage",
        "Report issues and feedback",
        "Prioritize enhancement requests",
        "Participate in optimization reviews"
      ],
      tools: ["Google Analytics", "Sentry", "Hotjar", "Zendesk"],
      icon: "TrendingUp",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const projectTypes = [
    {
      id: 'startup',
      name: 'Startup MVP',
      description: 'Rapid development with focus on core features and market validation',
      adaptations: [
        'Accelerated discovery phase with lean methodology',
        'MVP-focused feature prioritization',
        'Agile development with 1-week sprints',
        'Early user feedback integration',
        'Scalable architecture for future growth'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Transformation',
      description: 'Comprehensive digital transformation with legacy system integration',
      adaptations: [
        'Extended discovery with stakeholder alignment',
        'Legacy system integration planning',
        'Enterprise security and compliance focus',
        'Phased rollout and change management',
        'Comprehensive documentation and training'
      ]
    },
    {
      id: 'international',
      name: 'International Expansion',
      description: 'Multi-market platform with localization and cultural adaptation',
      adaptations: [
        'Multi-market research and analysis',
        'Localization and internationalization planning',
        'Cultural adaptation in design and UX',
        'Multi-language content management',
        'Regional compliance and legal considerations'
      ]
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Proven
              <span className="block bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                Development Process
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transparency builds trust. Explore our seven-phase methodology that transforms ideas into exceptional digital experiences through collaborative partnership and technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Wand2" size={20} className="mr-2" />
                Start Your Project
              </Link>
              <button
                onClick={() => document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover-lift"
              >
                <Icon name="ArrowDown" size={20} className="mr-2" />
                Explore Process
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Methodology That Delivers Results
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our process isn't just about building software—it's about building partnerships. Every phase is designed for transparency, collaboration, and exceptional outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-elevation">
                <Icon name="Users" size={32} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Collaborative Partnership</h3>
              <p className="text-text-secondary">
                You're not just a client—you're our partner. Every decision is made together, ensuring the final product truly reflects your vision and needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-elevation">
                <Icon name="Eye" size={32} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Complete Transparency</h3>
              <p className="text-text-secondary">
                No black boxes. You have full visibility into our process, progress, and decision-making through real-time dashboards and regular communications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-elevation">
                <Icon name="Target" size={32} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Proven Results</h3>
              <p className="text-text-secondary">
                Our methodology has delivered 200+ successful projects across industries, with 98% client satisfaction and measurable business impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section id="timeline" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Seven Phases to Success
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Click on any phase to explore detailed activities, deliverables, and collaboration touchpoints.
            </p>
            
            {/* Project Type Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedProjectType(type.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedProjectType === type.id
                      ? 'bg-secondary text-white shadow-elevation'
                      : 'bg-surface text-text-primary hover:bg-secondary/10'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </motion.div>

          <ProcessTimeline 
            phases={processPhases}
            selectedPhase={selectedPhase}
            onPhaseSelect={setSelectedPhase}
            projectType={selectedProjectType}
          />
        </div>
      </section>

      {/* Phase Detail Modal */}
      {selectedPhase && (
        <ProcessPhaseDetail
          phase={processPhases.find(p => p.id === selectedPhase)}
          projectType={projectTypes.find(t => t.id === selectedProjectType)}
          onClose={() => setSelectedPhase(null)}
        />
      )}

      {/* Process in Action */}
      <ProcessInAction />

      {/* Technology Showcase */}
      <TechnologyShowcase />

      {/* Team Insights */}
      <TeamInsights />

      {/* Process Briefing */}
      <ProcessBriefing />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project and show you exactly how our methodology will bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Wand2" size={20} className="mr-2" />
                Start Project Briefing
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover-lift"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;