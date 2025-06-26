import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-elevation hover-lift"
    >
      <div className="text-center mb-6">
        <div className="relative inline-block mb-4">
          <Image
            src={member.avatar}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-trust rounded-full flex items-center justify-center">
            <Icon name="CheckCircle" size={16} color="white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
        <p className="text-secondary font-semibold mb-2">{member.role}</p>
        <p className="text-sm text-text-secondary mb-4">{member.specialization}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-primary mb-3">Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-3 py-1 bg-surface text-text-secondary text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <a
          href={`mailto:${member.email}`}
          className="flex items-center justify-center w-full px-4 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-all duration-300 hover-lift"
        >
          <Icon name="Mail" size={16} className="mr-2" />
          Send Email
        </a>
        
        <a
          href={member.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-4 py-3 bg-white text-secondary font-semibold rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover-lift"
        >
          <Icon name="Calendar" size={16} className="mr-2" />
          Schedule Meeting
        </a>
      </div>

      <div className="mt-4 pt-4 border-t border-primary-100 text-center">
        <div className="flex items-center justify-center text-sm text-text-secondary">
          <Icon name="Clock" size={14} className="mr-1" />
          <span>Usually responds within 2 hours</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;