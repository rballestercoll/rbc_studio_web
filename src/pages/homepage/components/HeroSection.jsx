import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const HeroSection = ({ headlines, subtitle, ctaText }) => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const projectPreviews = [
    {
      id: 1,
      title: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Modern e-commerce solution with real-time inventory"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      description: "Patient management system with analytics"
    },
    {
      id: 3,
      title: "FinTech Mobile App",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Stripe"],
      description: "Secure financial transactions platform"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Dynamic Headlines */}
            <div className="mb-6 h-32 lg:h-24 flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadlineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl lg:text-6xl font-bold text-primary leading-tight"
                >
                  {headlines[currentHeadlineIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                {ctaText}
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 hover-lift"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                View Our Work
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-text-secondary"
            >
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-success" />
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-success" />
                <span>5+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Project Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Project Card */}
              <div className="bg-white rounded-2xl shadow-elevation p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={projectPreviews[0].image}
                    alt={projectPreviews[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {projectPreviews[0].title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {projectPreviews[0].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projectPreviews[0].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Background Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-subtle p-6 transform -rotate-3 opacity-60 -z-10">
                <div className="aspect-video rounded-lg bg-surface mb-4" />
                <div className="h-4 bg-surface rounded mb-2" />
                <div className="h-3 bg-surface rounded w-3/4" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-subtle p-6 transform rotate-1 opacity-40 -z-20">
                <div className="aspect-video rounded-lg bg-surface mb-4" />
                <div className="h-4 bg-surface rounded mb-2" />
                <div className="h-3 bg-surface rounded w-2/3" />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-elevation"
            >
              <Icon name="Code" size={24} color="white" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-elevation"
            >
              <Icon name="Zap" size={16} color="white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-text-secondary"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;