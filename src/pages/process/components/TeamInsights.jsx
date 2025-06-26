import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TeamInsights = () => {
  const [selectedMember, setSelectedMember] = useState('sarah');

  const teamMembers = [
    {
      id: 'sarah',
      name: 'Sarah Chen',
      role: 'Lead UX Designer',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      expertise: ['User Experience Design', 'Design Systems', 'Prototyping', 'User Research'],
      processRole: 'Design & Prototyping Phase Lead',
      philosophy: `Great design isn't just about making things look beautiful—it's about creating experiences that feel intuitive and solve real problems. I believe in involving users throughout the design process, not just at the end.`,
      approach: [
        'Start with user research and empathy mapping',
        'Create low-fidelity wireframes for rapid iteration',
        'Build interactive prototypes for user testing',
        'Develop comprehensive design systems',
        'Collaborate closely with developers for implementation'
      ],
      tools: ['Figma', 'Adobe Creative Suite', 'Principle', 'Maze', 'Hotjar'],
      decisionFramework: `I use a data-driven approach combined with design principles. Every design decision is backed by user research, usability testing, or established UX patterns. When in doubt, I always advocate for the user's needs over business convenience.`,
      qualityPractices: [
        'Conduct usability testing at every major milestone','Maintain design system consistency across all components','Regular accessibility audits and compliance checks','Cross-browser and device testing for all designs','Collaborative design reviews with stakeholders'
      ]
    },
    {
      id: 'marcus',name: 'Marcus Rodriguez',role: 'Senior Full-Stack Developer',avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      expertise: ['React/Node.js', 'System Architecture', 'Database Design', 'API Development'],
      processRole: 'Core Development Phase Lead',philosophy: `Clean code is not just about following conventions—it's about creating systems that are maintainable, scalable, and understandable by future developers. I write code as if the person maintaining it is a violent psychopath who knows where I live.`,
      approach: [
        'Plan architecture before writing any code',
        'Write comprehensive tests for all functionality',
        'Use consistent coding standards and documentation',
        'Implement continuous integration and deployment',
        'Regular code reviews and pair programming sessions'
      ],
      tools: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Jest'],
      decisionFramework: `I evaluate technical decisions based on three criteria: scalability, maintainability, and performance. I always choose proven technologies over trendy ones, and I'm not afraid to refactor when the code tells me it needs improvement.`,
      qualityPractices: [
        'Maintain 90%+ test coverage on all critical paths','Automated code quality checks in CI/CD pipeline','Regular security audits and dependency updates','Performance monitoring and optimization','Comprehensive documentation for all APIs and components'
      ]
    },
    {
      id: 'elena',name: 'Elena Vasquez',role: 'Project Manager',avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      expertise: ['Agile Methodology', 'Stakeholder Management', 'Risk Assessment', 'Team Coordination'],
      processRole: 'Overall Process Orchestration',philosophy: `Successful projects aren't just about delivering on time and budget—they're about creating an environment where creativity thrives, problems are solved collaboratively, and everyone feels heard and valued.`,
      approach: [
        'Establish clear communication channels from day one','Break down complex projects into manageable milestones','Proactively identify and mitigate risks','Facilitate regular stakeholder alignment meetings','Maintain transparency through real-time project dashboards'
      ],
      tools: ['Jira', 'Slack', 'Notion', 'Google Workspace', 'Figma', 'GitHub'],
      decisionFramework: `I make decisions based on project impact, stakeholder value, and team capacity. I believe in data-driven decision making but also trust the expertise of my team members. When conflicts arise, I focus on finding solutions that serve the project's ultimate goals.`,
      qualityPractices: [
        'Weekly stakeholder check-ins and progress reports',
        'Risk assessment and mitigation planning',
        'Quality gate reviews at each phase completion',
        'Team retrospectives for continuous improvement',
        'Client satisfaction surveys and feedback integration'
      ]
    },
    {
      id: 'david',
      name: 'David Kim',
      role: 'DevOps Engineer',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      expertise: ['Cloud Infrastructure', 'CI/CD Pipelines', 'Security', 'Performance Optimization'],
      processRole: 'Deployment & Infrastructure Lead',
      philosophy: `Infrastructure should be invisible when it works and obvious when it doesn't. My job is to create systems so reliable and automated that developers can focus on building great features instead of worrying about deployment and scaling.`,
      approach: [
        'Design infrastructure as code for consistency','Implement automated testing and deployment pipelines','Monitor everything and alert on anomalies','Plan for scalability from day one','Prioritize security at every layer of the stack'
      ],
      tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'DataDog'],
      decisionFramework: `I evaluate infrastructure decisions based on reliability, scalability, security, and cost-effectiveness. I prefer battle-tested solutions over cutting-edge technologies for production systems, and I always have a rollback plan.`,
      qualityPractices: [
        'Automated security scanning and vulnerability assessment','99.9% uptime SLA with comprehensive monitoring','Disaster recovery testing and documentation','Performance optimization and load testing','Regular infrastructure audits and cost optimization'
      ]
    }
  ];

  const selectedMemberData = teamMembers.find(member => member.id === selectedMember);

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
            Meet the Process Experts
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get insights from our team members about their roles, decision-making frameworks, and quality assurance practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Team Member Cards */}
          <div className="lg:col-span-1 space-y-4">
            {teamMembers.map((member) => (
              <motion.button
                key={member.id}
                onClick={() => setSelectedMember(member.id)}
                whileHover={{ scale: 1.02 }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  selectedMember === member.id
                    ? 'bg-white shadow-elevation ring-2 ring-secondary'
                    : 'bg-white shadow-subtle hover:shadow-elevation'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {selectedMember === member.id && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-primary truncate">{member.name}</h4>
                    <p className="text-sm text-text-secondary truncate">{member.role}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Member Details */}
          <div className="lg:col-span-3">
            <motion.div
              key={selectedMember}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-elevation overflow-hidden"
            >
              {/* Member Header */}
              <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-6 mb-6">
                    <Image
                      src={selectedMemberData.avatar}
                      alt={selectedMemberData.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{selectedMemberData.name}</h3>
                      <p className="text-white/90 text-lg mb-2">{selectedMemberData.role}</p>
                      <p className="text-white/80 text-sm">{selectedMemberData.processRole}</p>
                    </div>
                  </div>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedMemberData.expertise.map((skill, index) => (
                      <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Member Content */}
              <div className="p-8 space-y-8">
                {/* Philosophy */}
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Icon name="Lightbulb" size={20} className="mr-2 text-yellow-500" />
                    Philosophy & Approach
                  </h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {selectedMemberData.philosophy}
                  </p>
                  <div className="bg-surface rounded-lg p-6">
                    <h5 className="font-semibold text-primary mb-3">My Process Approach:</h5>
                    <ul className="space-y-2">
                      {selectedMemberData.approach.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-xs font-semibold text-secondary">{index + 1}</span>
                          </span>
                          <span className="text-text-secondary">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decision Framework */}
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Icon name="Target" size={20} className="mr-2 text-accent" />
                    Decision-Making Framework
                  </h4>
                  <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-lg p-6">
                    <p className="text-text-secondary leading-relaxed">
                      {selectedMemberData.decisionFramework}
                    </p>
                  </div>
                </div>

                {/* Quality Practices */}
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Icon name="Shield" size={20} className="mr-2 text-green-500" />
                    Quality Assurance Practices
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedMemberData.qualityPractices.map((practice, index) => (
                      <div key={index} className="bg-surface rounded-lg p-4">
                        <div className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="mr-3 mt-1 text-green-500 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{practice}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Icon name="Wrench" size={20} className="mr-2 text-orange-500" />
                    Preferred Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedMemberData.tools.map((tool, index) => (
                      <span key={index} className="bg-surface px-4 py-2 rounded-lg text-sm font-medium text-text-primary border border-gray-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-elevation p-8"
        >
          <h3 className="text-xl font-semibold text-primary mb-6 text-center">Our Team's Track Record</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">200+</div>
              <p className="text-text-secondary">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <p className="text-text-secondary">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">15+</div>
              <p className="text-text-secondary">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-text-secondary">Support & Monitoring</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamInsights;