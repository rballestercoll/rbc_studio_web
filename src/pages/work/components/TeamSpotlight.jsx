import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TeamSpotlight = ({ teamMembers, language }) => {
  const labels = {
    en: {
      teamSpotlight: 'Team Spotlight',
      expertise: 'Expertise',
      contribution: 'Key Contribution',
      experience: 'Experience'
    },
    es: {
      teamSpotlight: 'Equipo Destacado',
      expertise: 'Experiencia',
      contribution: 'Contribución Clave',
      experience: 'Experiencia'
    }
  };

  const defaultTeamMembers = [
    {
      name: 'Sarah Johnson',
      role: language === 'en' ? 'Lead Developer' : 'Desarrolladora Principal',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b100?w=150&h=150&fit=crop&crop=face',
      expertise: ['React', 'Node.js', 'AWS'],
      experience: '8 years',
      contribution: language === 'en' ?'Architected the scalable microservices infrastructure' :'Diseñó la infraestructura escalable de microservicios',
      linkedIn: '#'
    },
    {
      name: 'Miguel Rodriguez',
      role: language === 'en' ? 'UI/UX Designer' : 'Diseñador UI/UX',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      expertise: ['Figma', 'User Research', 'Design Systems'],
      experience: '6 years',
      contribution: language === 'en' ?'Created intuitive user interface improving engagement by 40%' :'Creó interfaz de usuario intuitiva mejorando el engagement en 40%',
      linkedIn: '#'
    },
    {
      name: 'David Chen',
      role: language === 'en' ? 'DevOps Engineer' : 'Ingeniero DevOps',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      expertise: ['Docker', 'Kubernetes', 'CI/CD'],
      experience: '7 years',
      contribution: language === 'en' ?'Implemented automated deployment pipeline reducing release time by 60%' :'Implementó pipeline de despliegue automatizado reduciendo tiempo de release en 60%',
      linkedIn: '#'
    }
  ];

  const members = teamMembers || defaultTeamMembers;

  return (
    <div className="bg-gradient-to-br from-surface to-white rounded-2xl shadow-subtle p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Users" size={20} className="text-secondary" />
        <h3 className="text-xl font-semibold text-primary">{labels[language].teamSpotlight}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-subtle hover:shadow-elevation transition-all duration-300 hover-lift text-center"
          >
            {/* Avatar */}
            <div className="relative mb-4">
              <Image
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Icon name="Star" size={14} className="text-white" />
              </div>
            </div>

            {/* Info */}
            <h4 className="font-semibold text-primary text-lg mb-1">{member.name}</h4>
            <p className="text-secondary text-sm font-medium mb-3">{member.role}</p>

            {/* Experience */}
            <div className="flex items-center justify-center space-x-1 mb-3">
              <Icon name="Award" size={14} className="text-accent" />
              <span className="text-text-secondary text-sm">{member.experience} {labels[language].experience}</span>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              {member.expertise.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Key Contribution */}
            <div className="mb-4">
              <h5 className="font-medium text-text-primary text-sm mb-2">{labels[language].contribution}:</h5>
              <p className="text-text-secondary text-xs leading-relaxed">{member.contribution}</p>
            </div>

            {/* LinkedIn Link */}
            <a
              href={member.linkedIn}
              className="inline-flex items-center space-x-1 text-secondary hover:text-secondary-600 transition-colors duration-300"
            >
              <Icon name="Linkedin" size={16} />
              <span className="text-sm">Connect</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSpotlight;