import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';


const BriefingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectVision: {
      projectName: '',
      projectType: '',
      businessGoals: '',
      targetAudience: '',
      uniqueValue: '',
      inspiration: ''
    },
    technicalRequirements: {
      platforms: [],
      integrations: [],
      scalability: '',
      security: '',
      performance: '',
      accessibility: ''
    },
    timelineBudget: {
      timeline: '',
      budget: '',
      priority: '',
      flexibility: '',
      milestones: []
    },
    teamResources: {
      teamSize: '',
      roles: [],
      experience: '',
      availability: '',
      communication: '',
      decisionMaker: ''
    },
    successMetrics: {
      kpis: [],
      analytics: '',
      reporting: '',
      roi: '',
      userMetrics: []
    },
    marketConsiderations: {
      targetMarkets: [],
      languages: [],
      regulations: '',
      competitors: '',
      marketEntry: ''
    },
    partnershipPreferences: {
      communicationStyle: '',
      meetingFrequency: '',
      reportingStyle: '',
      projectManagement: '',
      postLaunch: ''
    }
  });
  const [language, setLanguage] = useState('en');
  const [savedProgress, setSavedProgress] = useState(false);

  const steps = [
    {
      id: 1,
      title: 'Project Vision',
      subtitle: 'Define your project goals and vision',
      icon: 'Target',
      description: 'Help us understand what you want to build and why it matters to your business.'
    },
    {
      id: 2,
      title: 'Technical Requirements',
      subtitle: 'Specify technical needs and constraints',
      icon: 'Settings',
      description: 'Define the technical foundation that will support your project goals.'
    },
    {
      id: 3,
      title: 'Timeline & Budget',
      subtitle: 'Set realistic expectations and constraints',
      icon: 'Calendar',
      description: 'Establish project parameters that align with your business objectives.'
    },
    {
      id: 4,
      title: 'Team & Resources',
      subtitle: 'Define collaboration and resource needs',
      icon: 'Users',
      description: 'Understand how we\'ll work together and what resources are available.'
    },
    {
      id: 5,
      title: 'Success Metrics',
      subtitle: 'Define how we measure project success',
      icon: 'TrendingUp',
      description: 'Establish clear metrics to track project impact and ROI.'
    },
    {
      id: 6,
      title: 'Market Considerations',
      subtitle: 'Address market and regulatory requirements',
      icon: 'Globe',
      description: 'Consider market-specific needs and compliance requirements.'
    },
    {
      id: 7,
      title: 'Partnership Preferences',
      subtitle: 'Define our working relationship',
      icon: 'Handshake',
      description: 'Establish communication and collaboration preferences.'
    }
  ];

  const projectTypes = [
    { value: 'web-app', label: 'Web Application', description: 'Custom web-based software solution' },
    { value: 'mobile-app', label: 'Mobile Application', description: 'iOS and Android native or hybrid apps' },
    { value: 'ecommerce', label: 'E-commerce Platform', description: 'Online store and marketplace solutions' },
    { value: 'saas', label: 'SaaS Platform', description: 'Software as a Service solution' },
    { value: 'enterprise', label: 'Enterprise System', description: 'Large-scale business management system' },
    { value: 'api', label: 'API Development', description: 'Backend services and API integration' }
  ];

  const platforms = [
    { value: 'web', label: 'Web Browser', icon: 'Globe' },
    { value: 'ios', label: 'iOS', icon: 'Smartphone' },
    { value: 'android', label: 'Android', icon: 'Smartphone' },
    { value: 'desktop', label: 'Desktop', icon: 'Monitor' },
    { value: 'tablet', label: 'Tablet', icon: 'Tablet' }
  ];

  const budgetRanges = [
    { value: '10k-25k', label: '$10,000 - $25,000', description: 'Small to medium projects' },
    { value: '25k-50k', label: '$25,000 - $50,000', description: 'Medium complexity projects' },
    { value: '50k-100k', label: '$50,000 - $100,000', description: 'Large scale projects' },
    { value: '100k-250k', label: '$100,000 - $250,000', description: 'Enterprise solutions' },
    { value: '250k+', label: '$250,000+', description: 'Complex enterprise systems' }
  ];

  const timelineOptions = [
    { value: '1-3', label: '1-3 months', description: 'Quick turnaround projects' },
    { value: '3-6', label: '3-6 months', description: 'Standard development timeline' },
    { value: '6-12', label: '6-12 months', description: 'Complex feature-rich projects' },
    { value: '12+', label: '12+ months', description: 'Large-scale enterprise solutions' }
  ];

  useEffect(() => {
    // Load saved progress from localStorage
    const saved = localStorage.getItem('briefing-wizard-progress');
    if (saved) {
      const { step, data } = JSON.parse(saved);
      setCurrentStep(step);
      setFormData(data);
      setSavedProgress(true);
    }
  }, []);

  const saveProgress = () => {
    localStorage.setItem('briefing-wizard-progress', JSON.stringify({
      step: currentStep,
      data: formData
    }));
    setSavedProgress(true);
    setTimeout(() => setSavedProgress(false), 2000);
  };

  const updateFormData = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
      saveProgress();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateProgress = () => {
    return Math.round((currentStep / 7) * 100);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="bg-surface p-6 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Icon name="Lightbulb" size={20} className="mr-2 text-secondary" />
                Why This Matters
              </h3>
              <p className="text-text-secondary">
                A clear project vision helps us understand your business goals and ensures we build something that truly serves your needs. This foundation guides every technical decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    value={formData.projectVision.projectName}
                    onChange={(e) => updateFormData('projectVision', 'projectName', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Enter your project name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Project Type *
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {projectTypes.map((type) => (
                      <label key={type.value} className="flex items-start space-x-3 p-4 border border-primary-200 rounded-lg hover:bg-surface cursor-pointer transition-colors duration-300">
                        <input
                          type="radio"
                          name="projectType"
                          value={type.value}
                          checked={formData.projectVision.projectType === type.value}
                          onChange={(e) => updateFormData('projectVision', 'projectType', e.target.value)}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-medium text-text-primary">{type.label}</div>
                          <div className="text-sm text-text-secondary">{type.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Target Audience
                  </label>
                  <textarea
                    value={formData.projectVision.targetAudience}
                    onChange={(e) => updateFormData('projectVision', 'targetAudience', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Describe your target users and their needs"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Business Goals *
                  </label>
                  <textarea
                    value={formData.projectVision.businessGoals}
                    onChange={(e) => updateFormData('projectVision', 'businessGoals', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="What business problems does this project solve?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Unique Value Proposition
                  </label>
                  <textarea
                    value={formData.projectVision.uniqueValue}
                    onChange={(e) => updateFormData('projectVision', 'uniqueValue', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="What makes your solution unique?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Inspiration & References
                  </label>
                  <textarea
                    value={formData.projectVision.inspiration}
                    onChange={(e) => updateFormData('projectVision', 'inspiration', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Share any websites, apps, or features you admire"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="bg-surface p-6 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Icon name="Code" size={20} className="mr-2 text-secondary" />
                Technical Foundation
              </h3>
              <p className="text-text-secondary">
                Technical requirements shape the architecture and technology stack. Getting this right from the start prevents costly changes later and ensures your solution can scale with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-4">
                    Target Platforms *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {platforms.map((platform) => (
                      <label key={platform.value} className="flex items-center space-x-3 p-4 border border-primary-200 rounded-lg hover:bg-surface cursor-pointer transition-colors duration-300">
                        <input
                          type="checkbox"
                          checked={formData.technicalRequirements.platforms.includes(platform.value)}
                          onChange={(e) => {
                            const platforms = formData.technicalRequirements.platforms;
                            if (e.target.checked) {
                              updateFormData('technicalRequirements', 'platforms', [...platforms, platform.value]);
                            } else {
                              updateFormData('technicalRequirements', 'platforms', platforms.filter(p => p !== platform.value));
                            }
                          }}
                        />
                        <Icon name={platform.icon} size={20} className="text-secondary" />
                        <span className="font-medium text-text-primary">{platform.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Required Integrations
                  </label>
                  <textarea
                    value={formData.technicalRequirements.integrations.join(', ')}
                    onChange={(e) => updateFormData('technicalRequirements', 'integrations', e.target.value.split(', ').filter(i => i.trim()))}
                    rows={3}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Payment systems, CRM, analytics, social media, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Scalability Requirements
                  </label>
                  <select
                    value={formData.technicalRequirements.scalability}
                    onChange={(e) => updateFormData('technicalRequirements', 'scalability', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select scalability needs</option>
                    <option value="small">Small scale (hundreds of users)</option>
                    <option value="medium">Medium scale (thousands of users)</option>
                    <option value="large">Large scale (tens of thousands)</option>
                    <option value="enterprise">Enterprise scale (millions)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Security Requirements
                  </label>
                  <select
                    value={formData.technicalRequirements.security}
                    onChange={(e) => updateFormData('technicalRequirements', 'security', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select security level</option>
                    <option value="standard">Standard security practices</option>
                    <option value="enhanced">Enhanced security (PCI, HIPAA)</option>
                    <option value="enterprise">Enterprise-grade security</option>
                    <option value="government">Government/Military grade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Performance Requirements
                  </label>
                  <select
                    value={formData.technicalRequirements.performance}
                    onChange={(e) => updateFormData('technicalRequirements', 'performance', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select performance needs</option>
                    <option value="standard">Standard performance</option>
                    <option value="fast">Fast loading (&lt;3 seconds)</option>
                    <option value="realtime">Real-time updates required</option>
                    <option value="high-volume">High-volume data processing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Accessibility Requirements
                  </label>
                  <select
                    value={formData.technicalRequirements.accessibility}
                    onChange={(e) => updateFormData('technicalRequirements', 'accessibility', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select accessibility level</option>
                    <option value="basic">Basic accessibility</option>
                    <option value="wcag-aa">WCAG 2.1 AA compliance</option>
                    <option value="wcag-aaa">WCAG 2.1 AAA compliance</option>
                    <option value="section-508">Section 508 compliance</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2 flex items-center">
                    <Icon name="Info" size={16} className="mr-2" />
                    Technical Recommendation
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Based on your selections, we recommend a modern React-based architecture with cloud hosting for optimal performance and scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="bg-surface p-6 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Icon name="DollarSign" size={20} className="mr-2 text-secondary" />
                Investment & Timeline Planning
              </h3>
              <p className="text-text-secondary">
                Realistic budgets and timelines are crucial for project success. We help you understand the relationship between scope, quality, and investment to make informed decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-4">
                    Project Budget Range *
                  </label>
                  <div className="space-y-3">
                    {budgetRanges.map((range) => (
                      <label key={range.value} className="flex items-start space-x-3 p-4 border border-primary-200 rounded-lg hover:bg-surface cursor-pointer transition-colors duration-300">
                        <input
                          type="radio"
                          name="budget"
                          value={range.value}
                          checked={formData.timelineBudget.budget === range.value}
                          onChange={(e) => updateFormData('timelineBudget', 'budget', e.target.value)}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-medium text-text-primary">{range.label}</div>
                          <div className="text-sm text-text-secondary">{range.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Budget Flexibility
                  </label>
                  <select
                    value={formData.timelineBudget.flexibility}
                    onChange={(e) => updateFormData('timelineBudget', 'flexibility', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select flexibility level</option>
                    <option value="fixed">Fixed budget - cannot exceed</option>
                    <option value="flexible">Flexible - can adjust for value</option>
                    <option value="open">Open to recommendations</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-4">
                    Preferred Timeline *
                  </label>
                  <div className="space-y-3">
                    {timelineOptions.map((timeline) => (
                      <label key={timeline.value} className="flex items-start space-x-3 p-4 border border-primary-200 rounded-lg hover:bg-surface cursor-pointer transition-colors duration-300">
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline.value}
                          checked={formData.timelineBudget.timeline === timeline.value}
                          onChange={(e) => updateFormData('timelineBudget', 'timeline', e.target.value)}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-medium text-text-primary">{timeline.label}</div>
                          <div className="text-sm text-text-secondary">{timeline.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Project Priority
                  </label>
                  <select
                    value={formData.timelineBudget.priority}
                    onChange={(e) => updateFormData('timelineBudget', 'priority', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select priority level</option>
                    <option value="low">Low - flexible timeline</option>
                    <option value="medium">Medium - standard priority</option>
                    <option value="high">High - urgent delivery needed</option>
                    <option value="critical">Critical - business depends on it</option>
                  </select>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2 flex items-center">
                    <Icon name="Calculator" size={16} className="mr-2" />
                    Budget Calculator
                  </h4>
                  <p className="text-sm text-text-secondary mb-3">
                    Based on your requirements, here's a rough estimate:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Development:</span>
                      <span className="font-medium">70-80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Design & UX:</span>
                      <span className="font-medium">15-20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Testing & QA:</span>
                      <span className="font-medium">10-15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="bg-surface p-6 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Icon name="Users" size={20} className="mr-2 text-secondary" />
                Team Collaboration
              </h3>
              <p className="text-text-secondary">
                Understanding your team structure and availability helps us plan the most effective collaboration approach and ensures smooth project execution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Your Team Size
                  </label>
                  <select
                    value={formData.teamResources.teamSize}
                    onChange={(e) => updateFormData('teamResources', 'teamSize', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select team size</option>
                    <option value="solo">Just me</option>
                    <option value="small">2-5 people</option>
                    <option value="medium">6-15 people</option>
                    <option value="large">16+ people</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Key Roles Involved
                  </label>
                  <div className="space-y-2">
                    {['Product Manager', 'Technical Lead', 'Designer', 'Marketing', 'Legal/Compliance', 'Executive Sponsor'].map((role) => (
                      <label key={role} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.teamResources.roles.includes(role)}
                          onChange={(e) => {
                            const roles = formData.teamResources.roles;
                            if (e.target.checked) {
                              updateFormData('teamResources', 'roles', [...roles, role]);
                            } else {
                              updateFormData('teamResources', 'roles', roles.filter(r => r !== role));
                            }
                          }}
                        />
                        <span className="text-text-primary">{role}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Technical Experience Level
                  </label>
                  <select
                    value={formData.teamResources.experience}
                    onChange={(e) => updateFormData('teamResources', 'experience', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner - new to software projects</option>
                    <option value="intermediate">Intermediate - some project experience</option>
                    <option value="advanced">Advanced - extensive project experience</option>
                    <option value="expert">Expert - technical leadership experience</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Team Availability
                  </label>
                  <select
                    value={formData.teamResources.availability}
                    onChange={(e) => updateFormData('teamResources', 'availability', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select availability</option>
                    <option value="limited">Limited - occasional check-ins</option>
                    <option value="moderate">Moderate - weekly involvement</option>
                    <option value="high">High - daily involvement</option>
                    <option value="dedicated">Dedicated - full-time focus</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Preferred Communication Style
                  </label>
                  <select
                    value={formData.teamResources.communication}
                    onChange={(e) => updateFormData('teamResources', 'communication', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select communication style</option>
                    <option value="formal">Formal - structured meetings and reports</option>
                    <option value="casual">Casual - informal updates and chats</option>
                    <option value="mixed">Mixed - formal milestones, casual updates</option>
                    <option value="minimal">Minimal - milestone-based communication</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Primary Decision Maker
                  </label>
                  <input
                    type="text"
                    value={formData.teamResources.decisionMaker}
                    onChange={(e) => updateFormData('teamResources', 'decisionMaker', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Name and role of primary decision maker"
                  />
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2 flex items-center">
                    <Icon name="Lightbulb" size={16} className="mr-2" />
                    Collaboration Tip
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Clear communication channels and defined roles lead to 40% faster project delivery and higher satisfaction rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="bg-surface p-6 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Icon name="Target" size={20} className="mr-2 text-secondary" />
                Measuring Success
              </h3>
              <p className="text-text-secondary">
                Defining success metrics upfront ensures we build features that drive real business value and can measure the impact of our work together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Key Performance Indicators (KPIs)
                  </label>
                  <div className="space-y-2">
                    {['User Acquisition', 'User Engagement', 'Conversion Rate', 'Revenue Growth', 'Cost Reduction', 'Time Savings', 'Customer Satisfaction', 'Market Share'].map((kpi) => (
                      <label key={kpi} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.successMetrics.kpis.includes(kpi)}
                          onChange={(e) => {
                            const kpis = formData.successMetrics.kpis;
                            if (e.target.checked) {
                              updateFormData('successMetrics', 'kpis', [...kpis, kpi]);
                            } else {
                              updateFormData('successMetrics', 'kpis', kpis.filter(k => k !== kpi));
                            }
                          }}
                        />
                        <span className="text-text-primary">{kpi}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Analytics Requirements
                  </label>
                  <select
                    value={formData.successMetrics.analytics}
                    onChange={(e) => updateFormData('successMetrics', 'analytics', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select analytics level</option>
                    <option value="basic">Basic - page views and user counts</option>
                    <option value="standard">Standard - user behavior tracking</option>
                    <option value="advanced">Advanced - conversion funnels and cohorts</option>
                    <option value="enterprise">Enterprise - custom dashboards and reports</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Expected ROI Timeline
                  </label>
                  <select
                    value={formData.successMetrics.roi}
                    onChange={(e) => updateFormData('successMetrics', 'roi', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select ROI timeline</option>
                    <option value="immediate">Immediate - within 3 months</option>
                    <option value="short">Short term - 3-6 months</option>
                    <option value="medium">Medium term - 6-12 months</option>
                    <option value="long">Long term - 12+ months</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    User Success Metrics
                  </label>
                  <div className="space-y-2">
                    {['Daily Active Users', 'Session Duration', 'Feature Adoption', 'User Retention', 'Net Promoter Score', 'Support Tickets', 'User Onboarding', 'Task Completion'].map((metric) => (
                      <label key={metric} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.successMetrics.userMetrics.includes(metric)}
                          onChange={(e) => {
                            const metrics = formData.successMetrics.userMetrics;
                            if (e.target.checked) {
                              updateFormData('successMetrics', 'userMetrics', [...metrics, metric]);
                            } else {
                              updateFormData('successMetrics', 'userMetrics', metrics.filter(m => m !== metric));
                            }
                          }}
                        />
                        <span className="text-text-primary">{metric}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Reporting Frequency
                  </label>
                  <select
                    value={formData.successMetrics.reporting}
                    onChange={(e) => updateFormData('successMetrics', 'reporting', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select reporting frequency</option>
                    <option value="weekly">Weekly reports</option>
                    <option value="biweekly">Bi-weekly reports</option>
                    <option value="monthly">Monthly reports</option>
                    <option value="quarterly">Quarterly reports</option>
                  </select>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2 flex items-center">
                    <Icon name="TrendingUp" size={16} className="mr-2" />
                    Success Framework
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">
                    We use the OKR (Objectives and Key Results) framework to track progress:
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Clear, measurable objectives</li>
                    <li>• Quantifiable key results</li>
                    <li>• Regular progress reviews</li>
                    <li>• Data-driven decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <div className="bg-surface p-6 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Icon name="Globe" size={20} className="mr-2 text-secondary" />
                Market & Compliance
              </h3>
              <p className="text-text-secondary">
                Understanding your target markets and regulatory requirements helps us build solutions that work globally while meeting local compliance standards.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Target Markets
                  </label>
                  <div className="space-y-2">
                    {['North America', 'Europe', 'Latin America', 'Asia Pacific', 'Middle East', 'Africa', 'Global'].map((market) => (
                      <label key={market} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.marketConsiderations.targetMarkets.includes(market)}
                          onChange={(e) => {
                            const markets = formData.marketConsiderations.targetMarkets;
                            if (e.target.checked) {
                              updateFormData('marketConsiderations', 'targetMarkets', [...markets, market]);
                            } else {
                              updateFormData('marketConsiderations', 'targetMarkets', markets.filter(m => m !== market));
                            }
                          }}
                        />
                        <span className="text-text-primary">{market}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Required Languages
                  </label>
                  <div className="space-y-2">
                    {['English', 'Spanish', 'French', 'German', 'Portuguese', 'Mandarin', 'Japanese', 'Arabic'].map((lang) => (
                      <label key={lang} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.marketConsiderations.languages.includes(lang)}
                          onChange={(e) => {
                            const languages = formData.marketConsiderations.languages;
                            if (e.target.checked) {
                              updateFormData('marketConsiderations', 'languages', [...languages, lang]);
                            } else {
                              updateFormData('marketConsiderations', 'languages', languages.filter(l => l !== lang));
                            }
                          }}
                        />
                        <span className="text-text-primary">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Market Entry Strategy
                  </label>
                  <select
                    value={formData.marketConsiderations.marketEntry}
                    onChange={(e) => updateFormData('marketConsiderations', 'marketEntry', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select strategy</option>
                    <option value="single">Single market focus</option>
                    <option value="regional">Regional expansion</option>
                    <option value="global">Global launch</option>
                    <option value="phased">Phased market entry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Regulatory Requirements
                  </label>
                  <textarea
                    value={formData.marketConsiderations.regulations}
                    onChange={(e) => updateFormData('marketConsiderations', 'regulations', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="GDPR, CCPA, HIPAA, SOX, PCI-DSS, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Competitive Landscape
                  </label>
                  <textarea
                    value={formData.marketConsiderations.competitors}
                    onChange={(e) => updateFormData('marketConsiderations', 'competitors', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Key competitors and their strengths/weaknesses"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2 flex items-center">
                    <Icon name="Shield" size={16} className="mr-2" />
                    Compliance Expertise
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">
                    We have experience with major compliance frameworks:
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• GDPR & data privacy regulations</li>
                    <li>• Healthcare compliance (HIPAA)</li>
                    <li>• Financial regulations (PCI-DSS, SOX)</li>
                    <li>• Accessibility standards (WCAG, ADA)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-8">
            <div className="bg-surface p-6 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Icon name="Handshake" size={20} className="mr-2 text-secondary" />
                Partnership Approach
              </h3>
              <p className="text-text-secondary">
                The final step helps us understand how you prefer to work with partners, ensuring we establish a collaboration style that fits your organization's culture and needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Communication Style Preference
                  </label>
                  <select
                    value={formData.partnershipPreferences.communicationStyle}
                    onChange={(e) => updateFormData('partnershipPreferences', 'communicationStyle', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select communication style</option>
                    <option value="proactive">Proactive - regular updates and check-ins</option>
                    <option value="responsive">Responsive - available when needed</option>
                    <option value="structured">Structured - formal meetings and reports</option>
                    <option value="flexible">Flexible - adapt to project needs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Meeting Frequency
                  </label>
                  <select
                    value={formData.partnershipPreferences.meetingFrequency}
                    onChange={(e) => updateFormData('partnershipPreferences', 'meetingFrequency', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select meeting frequency</option>
                    <option value="daily">Daily standups</option>
                    <option value="weekly">Weekly check-ins</option>
                    <option value="biweekly">Bi-weekly reviews</option>
                    <option value="monthly">Monthly milestones</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Project Management Style
                  </label>
                  <select
                    value={formData.partnershipPreferences.projectManagement}
                    onChange={(e) => updateFormData('partnershipPreferences', 'projectManagement', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select PM style</option>
                    <option value="agile">Agile/Scrum methodology</option>
                    <option value="waterfall">Waterfall approach</option>
                    <option value="hybrid">Hybrid methodology</option>
                    <option value="custom">Custom approach</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Reporting Style
                  </label>
                  <select
                    value={formData.partnershipPreferences.reportingStyle}
                    onChange={(e) => updateFormData('partnershipPreferences', 'reportingStyle', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select reporting style</option>
                    <option value="detailed">Detailed progress reports</option>
                    <option value="summary">Executive summaries</option>
                    <option value="dashboard">Real-time dashboards</option>
                    <option value="minimal">Milestone-based updates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Post-Launch Support Needs
                  </label>
                  <select
                    value={formData.partnershipPreferences.postLaunch}
                    onChange={(e) => updateFormData('partnershipPreferences', 'postLaunch', e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option value="">Select support level</option>
                    <option value="maintenance">Basic maintenance only</option>
                    <option value="support">Ongoing support and updates</option>
                    <option value="enhancement">Continuous enhancement</option>
                    <option value="partnership">Long-term strategic partnership</option>
                  </select>
                </div>

                <div className="bg-gradient-to-r from-secondary to-primary p-6 rounded-lg text-white">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="Star" size={20} className="mr-2" />
                    Our Partnership Promise
                  </h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Transparent communication at every step</li>
                    <li>• Proactive problem-solving approach</li>
                    <li>• Flexible adaptation to your needs</li>
                    <li>• Long-term success focus</li>
                    <li>• Bilingual support when needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Summary */}
            <div className="bg-surface p-6 rounded-lg border border-primary-200">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Icon name="FileText" size={20} className="mr-2 text-secondary" />
                Project Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Project Details</h4>
                  <p><strong>Name:</strong> {formData.projectVision.projectName || 'Not specified'}</p>
                  <p><strong>Type:</strong> {formData.projectVision.projectType || 'Not specified'}</p>
                  <p><strong>Budget:</strong> {formData.timelineBudget.budget || 'Not specified'}</p>
                  <p><strong>Timeline:</strong> {formData.timelineBudget.timeline || 'Not specified'}</p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Technical Scope</h4>
                  <p><strong>Platforms:</strong> {formData.technicalRequirements.platforms.length > 0 ? formData.technicalRequirements.platforms.join(', ') : 'Not specified'}</p>
                  <p><strong>Scalability:</strong> {formData.technicalRequirements.scalability || 'Not specified'}</p>
                  <p><strong>Security:</strong> {formData.technicalRequirements.security || 'Not specified'}</p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Market & Team</h4>
                  <p><strong>Markets:</strong> {formData.marketConsiderations.targetMarkets.length > 0 ? formData.marketConsiderations.targetMarkets.join(', ') : 'Not specified'}</p>
                  <p><strong>Team Size:</strong> {formData.teamResources.teamSize || 'Not specified'}</p>
                  <p><strong>Communication:</strong> {formData.partnershipPreferences.communicationStyle || 'Not specified'}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Clear saved progress
    localStorage.removeItem('briefing-wizard-progress');
    
    // Show success message or redirect
    alert('Thank you! Your project brief has been submitted. We\'ll be in touch within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Project Briefing Wizard
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let's understand your project vision and requirements to create the perfect solution together
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-primary-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-text-primary">
                Step {currentStep} of 7
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={saveProgress}
                  className="flex items-center space-x-2 px-3 py-1 text-sm bg-surface text-text-secondary rounded-lg hover:bg-primary-100 transition-colors duration-300"
                >
                  <Icon name="Save" size={16} />
                  <span>Save Progress</span>
                </button>
                {savedProgress && (
                  <span className="text-sm text-success flex items-center">
                    <Icon name="Check" size={16} className="mr-1" />
                    Saved
                  </span>
                )}
              </div>
            </div>
            <div className="text-sm font-medium text-text-primary">
              {calculateProgress()}% Complete
            </div>
          </div>
          
          <div className="w-full bg-primary-100 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="bg-white border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    currentStep === step.id 
                      ? 'bg-secondary text-white' 
                      : currentStep > step.id 
                        ? 'bg-success text-white' :'bg-surface text-text-secondary hover:bg-primary-100'
                  }`}
                  onClick={() => setCurrentStep(step.id)}
                >
                  <Icon 
                    name={currentStep > step.id ? 'Check' : step.icon} 
                    size={20} 
                  />
                  <div className="hidden lg:block">
                    <div className="font-medium text-sm">{step.title}</div>
                    <div className="text-xs opacity-75">{step.subtitle}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-primary-200 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            {steps[currentStep - 1].title}
          </h2>
          <p className="text-lg text-text-secondary">
            {steps[currentStep - 1].description}
          </p>
        </div>

        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-primary-200">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              currentStep === 1
                ? 'bg-surface text-text-secondary cursor-not-allowed' :'bg-surface text-text-primary hover:bg-primary-100 hover-lift'
            }`}
          >
            <Icon name="ChevronLeft" size={20} />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={saveProgress}
              className="flex items-center space-x-2 px-6 py-3 bg-surface text-text-primary rounded-lg hover:bg-primary-100 transition-all duration-300 hover-lift"
            >
              <Icon name="Save" size={20} />
              <span>Save & Continue Later</span>
            </button>

            {currentStep < 7 ? (
              <button
                onClick={nextStep}
                className="flex items-center space-x-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-600 transition-all duration-300 hover-lift"
              >
                <span>Next Step</span>
                <Icon name="ChevronRight" size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center space-x-2 px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Send" size={20} />
                <span>Submit Project Brief</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our team is here to guide you through the process and answer any questions you might have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Live Chat</h3>
              <p className="text-text-secondary mb-4">
                Get instant answers to your questions
              </p>
              <button className="text-secondary hover:text-secondary-600 font-medium">
                Start Chat →
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Schedule Call</h3>
              <p className="text-text-secondary mb-4">
                Book a consultation with our experts
              </p>
              <Link 
                to="/contact"
                className="text-accent hover:text-accent-600 font-medium"
              >
                Book Now →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email Support</h3>
              <p className="text-text-secondary mb-4">
                Send us your questions anytime
              </p>
              <a 
                href="mailto:hello@rbcstudio.com"
                className="text-success hover:text-success-600 font-medium"
              >
                Send Email →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefingWizard;