import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const SocialProofSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      content: `Working with RBC Studio was transformative for our business. Their team didn't just build our platform – they became strategic partners who understood our vision and helped us scale beyond our expectations.`,
      rating: 5,
      project: "E-commerce Platform Redesign"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: `The level of technical expertise and attention to detail is unmatched. RBC Studio delivered a complex web application that exceeded our performance requirements and user experience goals.`,
      rating: 5,
      project: "SaaS Application Development"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Marketing Director",
      company: "GlobalReach Inc",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: `Their bilingual capabilities and cultural understanding made our international expansion seamless. The team's communication and project management were exceptional throughout the entire process.`,
      rating: 5,
      project: "Multi-language Website Platform"
    }
  ];

  const achievements = [
    {
      id: 1,
      icon: "Award",
      title: "Industry Recognition",
      description: "Winner of 2023 Digital Excellence Award for Outstanding Web Development"
    },
    {
      id: 2,
      icon: "Users",
      title: "Client Success",
      description: "98% client satisfaction rate with 85% of projects leading to long-term partnerships"
    },
    {
      id: 3,
      icon: "Zap",
      title: "Performance Leader",
      description: "Average 40% improvement in site performance and 60% increase in conversion rates"
    }
  ];

  const recentAnnouncements = [
    {
      id: 1,
      type: "project",
      title: "New E-commerce Platform Launch",
      description: "Successfully launched a multi-vendor marketplace for RetailTech Corp",
      date: "2 days ago",
      icon: "ShoppingCart"
    },
    {
      id: 2,
      type: "team",
      title: "Team Expansion",
      description: "Welcomed two senior developers to our Madrid office",
      date: "1 week ago",
      icon: "UserPlus"
    },
    {
      id: 3,
      type: "achievement",
      title: "AWS Partnership Certification",
      description: "Achieved AWS Advanced Consulting Partner status",
      date: "2 weeks ago",
      icon: "Award"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients and the industry are saying about our work and achievements.
          </p>
        </motion.div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-elevation hover-lift"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-text-secondary mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="mt-4 pt-4 border-t border-primary-100">
                  <span className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                    <Icon name="Briefcase" size={12} className="mr-1" />
                    {testimonial.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Our Achievements
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Recognition and results that demonstrate our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={achievement.icon} size={32} color="white" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{achievement.title}</h4>
                <p className="text-text-secondary">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Latest Updates
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Stay informed about our recent projects, team growth, and company milestones.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-elevation">
            <div className="space-y-6">
              {recentAnnouncements.map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={announcement.icon} size={20} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-primary">{announcement.title}</h4>
                      <span className="text-sm text-text-secondary">{announcement.date}</span>
                    </div>
                    <p className="text-text-secondary">{announcement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;