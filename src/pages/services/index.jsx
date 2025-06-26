import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const Services = () => {
  const [selectedService, setSelectedService] = useState('web-development');
  const [roiInputs, setRoiInputs] = useState({
    currentRevenue: '',
    conversionRate: '',
    averageOrderValue: '',
    monthlyTraffic: ''
  });
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: 'Code',
      shortDescription: 'Custom web applications that scale with your business',
      fullDescription: `Transform your digital presence with cutting-edge web applications built for performance, scalability, and user engagement. Our development approach combines modern frameworks with proven methodologies to deliver solutions that drive measurable business results.

We specialize in React, Next.js, and Node.js ecosystems, creating responsive applications that perform flawlessly across all devices. From e-commerce platforms to complex business management systems, we architect solutions that grow with your ambitions.`,
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      priceRange: '$15,000 - $75,000',
      timeline: '8-16 weeks',
      caseStudies: [
        {
          title: 'E-commerce Platform Redesign',
          client: 'TechMart Solutions',
          result: '340% increase in conversion rate',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
        },
        {
          title: 'SaaS Dashboard Development',
          client: 'DataFlow Analytics',
          result: '50% reduction in user onboarding time',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
        }
      ],
      roiFactors: {
        conversionImprovement: 25,
        loadTimeReduction: 40,
        maintenanceSavings: 30
      }
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      icon: 'Smartphone',
      shortDescription: 'Native and cross-platform mobile solutions',
      fullDescription: `Reach your customers wherever they are with powerful mobile applications that deliver exceptional user experiences. We develop both native iOS/Android apps and cross-platform solutions using React Native and Flutter.

Our mobile development process focuses on performance optimization, intuitive user interfaces, and seamless integration with your existing systems. From concept to App Store deployment, we handle every aspect of mobile app development.`,
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
      priceRange: '$25,000 - $100,000',
      timeline: '12-20 weeks',
      caseStudies: [
        {
          title: 'Fitness Tracking App',
          client: 'HealthFirst Wellness',
          result: '1M+ downloads in first year',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop'
        },
        {
          title: 'Food Delivery Platform',
          client: 'QuickBite Express',
          result: '200% increase in order volume',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop'
        }
      ],
      roiFactors: {
        userEngagement: 60,
        revenueGrowth: 45,
        operationalEfficiency: 35
      }
    },
    {
      id: 'digital-strategy',
      title: 'Digital Strategy',
      icon: 'TrendingUp',
      shortDescription: 'Strategic digital transformation consulting',
      fullDescription: `Navigate the digital landscape with confidence through our comprehensive strategy consulting services. We analyze your current digital presence, identify growth opportunities, and create actionable roadmaps for digital transformation.

Our strategic approach combines market research, competitive analysis, and technology assessment to develop customized digital strategies that align with your business objectives and drive sustainable growth.`,
      technologies: ['Analytics', 'SEO/SEM', 'CRO', 'Marketing Automation', 'Data Visualization'],
      priceRange: '$10,000 - $50,000',
      timeline: '6-12 weeks',
      caseStudies: [
        {
          title: 'Digital Transformation Roadmap',
          client: 'Legacy Manufacturing Co.',
          result: '150% increase in online leads',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
        },
        {
          title: 'Market Entry Strategy',
          client: 'European Retail Chain',
          result: 'Successful US market launch',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
        }
      ],
      roiFactors: {
        marketShare: 30,
        customerAcquisition: 40,
        operationalOptimization: 25
      }
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: 'Palette',
      shortDescription: 'User-centered design that converts',
      fullDescription: `Create memorable digital experiences that delight users and drive conversions through our comprehensive UI/UX design services. We combine user research, interaction design, and visual aesthetics to craft interfaces that are both beautiful and functional.

Our design process is rooted in user psychology and data-driven insights, ensuring every design decision contributes to your business goals while providing exceptional user experiences across all touchpoints.`,
      technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'InVision', 'Miro', 'Hotjar'],
      priceRange: '$8,000 - $40,000',
      timeline: '4-10 weeks',
      caseStudies: [
        {
          title: 'Banking App Redesign',
          client: 'Community First Bank',
          result: '85% improvement in user satisfaction',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop'
        },
        {
          title: 'E-learning Platform UX',
          client: 'EduTech Solutions',
          result: '70% increase in course completion',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop'
        }
      ],
      roiFactors: {
        conversionRate: 45,
        userRetention: 35,
        supportTicketReduction: 50
      }
    }
  ];

  const currentService = services.find(service => service.id === selectedService);

  const calculateROI = () => {
    const revenue = parseFloat(roiInputs.currentRevenue) || 0;
    const conversion = parseFloat(roiInputs.conversionRate) || 0;
    const orderValue = parseFloat(roiInputs.averageOrderValue) || 0;
    const traffic = parseFloat(roiInputs.monthlyTraffic) || 0;

    if (!revenue || !conversion || !orderValue || !traffic) return null;

    const currentMonthlyRevenue = (traffic * (conversion / 100) * orderValue);
    const improvedConversion = conversion * (1 + currentService.roiFactors.conversionImprovement / 100);
    const projectedMonthlyRevenue = (traffic * (improvedConversion / 100) * orderValue);
    const monthlyIncrease = projectedMonthlyRevenue - currentMonthlyRevenue;
    const annualIncrease = monthlyIncrease * 12;

    return {
      currentMonthly: currentMonthlyRevenue,
      projectedMonthly: projectedMonthlyRevenue,
      monthlyIncrease,
      annualIncrease,
      roi: ((annualIncrease / 50000) * 100).toFixed(0) // Assuming average project cost of $50k
    };
  };

  const roiResults = calculateROI();

  const faqs = [
    {
      question: 'What is your development process?',
      answer: `Our development process follows an agile methodology with weekly sprints and regular client check-ins. We start with discovery and planning, move through design and development phases, conduct thorough testing, and provide ongoing support post-launch.

Each project includes dedicated project management, regular progress updates, and collaborative review sessions to ensure we're building exactly what you need.`
    },
    {
      question: 'How do you handle project timelines?',
      answer: `We provide realistic timelines based on project scope and complexity. Our estimates include buffer time for revisions and unexpected challenges. We use project management tools to track progress and keep you informed every step of the way.

Timeline factors include project complexity, number of integrations, custom features, and client feedback cycles. We always aim to deliver on time while maintaining our quality standards.`
    },
    {
      question: 'What ongoing support do you provide?',
      answer: `All projects include a 90-day warranty period with bug fixes and minor adjustments at no cost. We offer ongoing maintenance packages that include security updates, performance monitoring, content updates, and feature enhancements.

Our support team is available via email, phone, and project management platform. We also provide training sessions to help your team manage and update your new digital solution.`
    },
    {
      question: 'How do you ensure project success?',
      answer: `Project success starts with thorough discovery and clear requirements documentation. We use proven methodologies, maintain regular communication, and conduct user testing throughout development.

We measure success through defined KPIs, user feedback, and business impact metrics. Our goal is not just to deliver a product, but to achieve your business objectives.`
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business goals, user needs, and technical requirements',
      duration: '1-2 weeks',
      deliverables: ['Requirements Document', 'Technical Architecture', 'Project Timeline']
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes for validation',
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'Visual Designs', 'Interactive Prototype']
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'Build your solution using modern technologies with continuous testing',
      duration: '4-8 weeks',
      deliverables: ['Working Application', 'Test Reports', 'Documentation']
    },
    {
      step: 4,
      title: 'Launch & Optimization',
      description: 'Deploy your solution and optimize based on real-world performance',
      duration: '1-2 weeks',
      deliverables: ['Live Application', 'Performance Report', 'Training Materials']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              Comprehensive digital solutions designed to transform your business and drive measurable results
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Start Your Project
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover-lift"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 hover-lift ${
                  selectedService === service.id
                    ? 'bg-secondary text-white shadow-elevation'
                    : 'bg-white text-text-primary hover:bg-white hover:shadow-subtle'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon 
                  name={service.icon} 
                  size={32} 
                  className={`mb-4 ${selectedService === service.id ? 'text-white' : 'text-secondary'}`} 
                />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className={`text-sm ${selectedService === service.id ? 'text-white/90' : 'text-text-secondary'}`}>
                  {service.shortDescription}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-primary-200">
            {[
              { id: 'overview', label: 'Overview', icon: 'Info' },
              { id: 'process', label: 'Process', icon: 'GitBranch' },
              { id: 'roi-calculator', label: 'ROI Calculator', icon: 'Calculator' },
              { id: 'case-studies', label: 'Case Studies', icon: 'FileText' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-secondary border-secondary' :'text-text-secondary border-transparent hover:text-secondary hover:border-secondary/30'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">{currentService.title}</h2>
                  <div className="prose prose-lg max-w-none text-text-secondary mb-8">
                    <p>{currentService.fullDescription}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-surface p-6 rounded-lg">
                      <Icon name="DollarSign" size={24} className="text-success mb-2" />
                      <h4 className="font-semibold text-text-primary mb-1">Investment Range</h4>
                      <p className="text-text-secondary">{currentService.priceRange}</p>
                    </div>
                    <div className="bg-surface p-6 rounded-lg">
                      <Icon name="Clock" size={24} className="text-warning mb-2" />
                      <h4 className="font-semibold text-text-primary mb-1">Timeline</h4>
                      <p className="text-text-secondary">{currentService.timeline}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-text-primary mb-4">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentService.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold text-primary mb-4">Why Choose RBC Studio?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
                        <span className="text-text-secondary">Proven track record with 100+ successful projects</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
                        <span className="text-text-secondary">Dedicated project manager and development team</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
                        <span className="text-text-secondary">90-day warranty and ongoing support options</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
                        <span className="text-text-secondary">Transparent pricing and regular progress updates</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <Link
                      to="/briefing-wizard"
                      className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
                    >
                      <Icon name="MessageSquare" size={20} className="mr-2" />
                      Get Custom Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'process' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">Our Development Process</h2>
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    A proven methodology that ensures project success through collaboration, transparency, and continuous improvement
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="bg-white p-6 rounded-xl shadow-subtle hover:shadow-elevation transition-all duration-300 hover-lift">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                          {step.step}
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                        <p className="text-text-secondary mb-4">{step.description}</p>
                        <div className="text-sm text-secondary font-medium mb-3">Duration: {step.duration}</div>
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary mb-2">Deliverables:</h4>
                          <ul className="text-sm text-text-secondary space-y-1">
                            {step.deliverables.map((deliverable) => (
                              <li key={deliverable} className="flex items-center space-x-2">
                                <Icon name="Check" size={14} className="text-success" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                          <Icon name="ArrowRight" size={24} className="text-secondary" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'roi-calculator' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">ROI Calculator</h2>
                  <p className="text-xl text-text-secondary">
                    Calculate the potential return on investment for your {currentService.title.toLowerCase()} project
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-white p-8 rounded-xl shadow-subtle">
                    <h3 className="text-xl font-semibold text-primary mb-6">Your Business Metrics</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Current Annual Revenue ($)
                        </label>
                        <input
                          type="number"
                          value={roiInputs.currentRevenue}
                          onChange={(e) => setRoiInputs({...roiInputs, currentRevenue: e.target.value})}
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                          placeholder="500000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Current Conversion Rate (%)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={roiInputs.conversionRate}
                          onChange={(e) => setRoiInputs({...roiInputs, conversionRate: e.target.value})}
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                          placeholder="2.5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Average Order Value ($)
                        </label>
                        <input
                          type="number"
                          value={roiInputs.averageOrderValue}
                          onChange={(e) => setRoiInputs({...roiInputs, averageOrderValue: e.target.value})}
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                          placeholder="150"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Monthly Website Traffic
                        </label>
                        <input
                          type="number"
                          value={roiInputs.monthlyTraffic}
                          onChange={(e) => setRoiInputs({...roiInputs, monthlyTraffic: e.target.value})}
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                          placeholder="10000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold text-primary mb-6">Projected Results</h3>
                    {roiResults ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-text-primary">
                              ${roiResults.currentMonthly.toLocaleString()}
                            </div>
                            <div className="text-sm text-text-secondary">Current Monthly Revenue</div>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-success">
                              ${roiResults.projectedMonthly.toLocaleString()}
                            </div>
                            <div className="text-sm text-text-secondary">Projected Monthly Revenue</div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg">
                          <div className="text-3xl font-bold text-success mb-2">
                            ${roiResults.annualIncrease.toLocaleString()}
                          </div>
                          <div className="text-text-secondary mb-4">Additional Annual Revenue</div>
                          <div className="text-lg font-semibold text-primary">
                            {roiResults.roi}% ROI in Year 1
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-text-primary">Key Improvements:</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-text-secondary">Conversion Rate</span>
                            <span className="text-success font-medium">+{currentService.roiFactors.conversionImprovement}%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-text-secondary">Load Time</span>
                            <span className="text-success font-medium">-{currentService.roiFactors.loadTimeReduction}%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-text-secondary">Maintenance Costs</span>
                            <span className="text-success font-medium">-{currentService.roiFactors.maintenanceSavings}%</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Icon name="Calculator" size={48} className="text-text-secondary mx-auto mb-4" />
                        <p className="text-text-secondary">
                          Fill in your business metrics to see projected ROI
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center mt-12">
                  <p className="text-text-secondary mb-6">
                    Ready to discuss your specific requirements and get an accurate quote?
                  </p>
                  <Link
                    to="/briefing-wizard"
                    className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
                  >
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Start Project Brief
                  </Link>
                </div>
              </motion.div>
            )}

            {activeTab === 'case-studies' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">Success Stories</h2>
                  <p className="text-xl text-text-secondary">
                    Real results from our {currentService.title.toLowerCase()} projects
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {currentService.caseStudies.map((caseStudy, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-elevation transition-all duration-300 hover-lift"
                    >
                      <div className="h-48 overflow-hidden">
                        <Image
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-2">{caseStudy.title}</h3>
                        <p className="text-text-secondary mb-4">Client: {caseStudy.client}</p>
                        <div className="bg-gradient-to-r from-success/10 to-success/5 p-4 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Icon name="TrendingUp" size={20} className="text-success" />
                            <span className="font-semibold text-success">{caseStudy.result}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    to="/work"
                    className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-all duration-300 hover-lift"
                  >
                    <Icon name="Eye" size={20} className="mr-2" />
                    View All Case Studies
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-text-secondary">
              Get answers to common questions about our {currentService.title.toLowerCase()} services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-subtle overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface transition-colors duration-300"
                >
                  <span className="font-semibold text-text-primary">{faq.question}</span>
                  <Icon 
                    name={expandedFaq === index ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-text-secondary" 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <div className="prose prose-sm max-w-none text-text-secondary">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Start Your Project
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

export default Services;