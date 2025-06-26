import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

import ContactForm from './components/ContactForm';
import TeamMemberCard from './components/TeamMemberCard';
import OfficeLocationCard from './components/OfficeLocationCard';
import SocialProofSection from './components/SocialProofSection';

const Contact = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState('America/New_York');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const contactMethods = [
    {
      id: 1,
      title: "Project Briefing Wizard",
      description: "Comprehensive project scoping and consultation",
      icon: "Wand2",
      color: "bg-secondary",
      responseTime: "24 hours",
      link: "/briefing-wizard",
      recommended: true
    },
    {
      id: 2,
      title: "Technical Consultation",
      description: "Direct access to our technical specialists",
      icon: "Code",
      color: "bg-trust",
      responseTime: "48 hours",
      link: "#technical-team"
    },
    {
      id: 3,
      title: "General Inquiry",
      description: "Questions about services or partnerships",
      icon: "MessageCircle",
      color: "bg-accent",
      responseTime: "Same day",
      link: "#contact-form"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Roberto Chen",
      role: "Technical Director",
      specialization: "Full-Stack Architecture & DevOps",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      email: "roberto@rbcstudio.com",
      calendly: "https://calendly.com/roberto-rbcstudio",
      expertise: ["React/Node.js", "Cloud Architecture", "Performance Optimization"]
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "UX/UI Design Lead",
      specialization: "User Experience & Interface Design",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      email: "maria@rbcstudio.com",
      calendly: "https://calendly.com/maria-rbcstudio",
      expertise: ["Design Systems", "User Research", "Prototyping"]
    },
    {
      id: 3,
      name: "Carlos Mendoza",
      role: "Project Strategy Director",
      specialization: "Digital Transformation & Business Strategy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      email: "carlos@rbcstudio.com",
      calendly: "https://calendly.com/carlos-rbcstudio",
      expertise: ["Project Management", "Business Analysis", "Client Relations"]
    }
  ];

  const officeLocations = [
    {
      id: 1,
      city: "New York",
      address: "125 Park Avenue, Suite 2500, New York, NY 10017",
      timezone: "America/New_York",
      phone: "+1 (555) 123-4567",
      businessHours: "9:00 AM - 6:00 PM EST",
      coordinates: { lat: 40.7589, lng: -73.9851 },
      transportation: ["Grand Central Terminal (2 min walk)", "Subway: 4,5,6,7,S at Grand Central", "Multiple bus routes"],
      parking: "Paid parking available at 110 E 42nd St"
    },
    {
      id: 2,
      city: "Madrid",
      address: "Calle de Alcalá, 42, 28014 Madrid, Spain",
      timezone: "Europe/Madrid",
      phone: "+34 91 123 4567",
      businessHours: "9:00 AM - 6:00 PM CET",
      coordinates: { lat: 40.4168, lng: -3.7038 },
      transportation: ["Metro: Sevilla (L2)", "Bus: 5, 9, 15, 20, 51, 52, 53, 150"],
      parking: "Public parking at Plaza de las Cortes"
    }
  ];

  const timezones = [
    { value: 'America/New_York', label: 'New York (EST/EDT)' },
    { value: 'Europe/Madrid', label: 'Madrid (CET/CEST)' },
    { value: 'America/Los_Angeles', label: 'Los Angeles (PST/PDT)' },
    { value: 'Europe/London', label: 'London (GMT/BST)' }
  ];

  const emergencyContact = {
    title: "Existing Client Support",
    description: "Dedicated support for current project clients",
    phone: "+1 (555) 999-HELP",
    email: "support@rbcstudio.com",
    hours: "24/7 for critical issues"
  };

  const formatTimeForTimezone = (timezone) => {
    return new Date().toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Let's Build Something
              <span className="block text-secondary">Extraordinary Together</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Ready to transform your digital presence? Choose your preferred way to connect with our team of digital craftsmen.
            </p>
            
            {/* Live Time Display */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {officeLocations.map((location) => (
                <div key={location.id} className="bg-surface rounded-lg px-4 py-2 shadow-subtle">
                  <div className="text-sm text-text-secondary">{location.city}</div>
                  <div className="font-semibold text-primary">
                    {formatTimeForTimezone(location.timezone)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Choose Your Path to Success
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We've designed multiple ways to connect based on your needs and timeline. Each path is optimized for the best possible experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {method.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="bg-white rounded-2xl p-8 shadow-elevation hover-lift h-full border border-primary-100">
                  <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                    <Icon name={method.icon} size={32} color="white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 text-center">
                    {method.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 text-center">
                    {method.description}
                  </p>
                  
                  <div className="flex items-center justify-center mb-6">
                    <Icon name="Clock" size={16} className="text-trust mr-2" />
                    <span className="text-sm font-medium text-trust">
                      Response within {method.responseTime}
                    </span>
                  </div>
                  
                  {method.link.startsWith('/') ? (
                    <Link
                      to={method.link}
                      className="block w-full text-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-all duration-300 hover-lift"
                    >
                      Get Started
                    </Link>
                  ) : (
                    <a
                      href={method.link}
                      className="block w-full text-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-all duration-300 hover-lift"
                    >
                      Get Started
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section id="technical-team" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Connect Directly with Our Experts
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Skip the middleman and speak directly with the specialists who will work on your project. Schedule a consultation that fits your timezone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Visit Our Studios
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Experience our creative spaces in person. Both locations are designed for collaboration and equipped with the latest technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {officeLocations.map((location, index) => (
              <OfficeLocationCard key={location.id} location={location} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Send Us a Message
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Have a quick question or want to start a conversation? Drop us a line and we'll get back to you within the same business day.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center text-white"
          >
            <Icon name="Shield" size={48} className="mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {emergencyContact.title}
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {emergencyContact.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Phone" size={24} className="mx-auto mb-2 opacity-80" />
                <div className="font-semibold">{emergencyContact.phone}</div>
              </div>
              <div>
                <Icon name="Mail" size={24} className="mx-auto mb-2 opacity-80" />
                <div className="font-semibold">{emergencyContact.email}</div>
              </div>
              <div>
                <Icon name="Clock" size={24} className="mx-auto mb-2 opacity-80" />
                <div className="font-semibold">{emergencyContact.hours}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProofSection />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Join the growing list of companies who've transformed their digital presence with RBC Studio. Let's discuss your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Start Your Project Brief
              </Link>
              
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Call Now: (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;