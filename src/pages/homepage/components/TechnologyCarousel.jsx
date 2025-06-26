import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const TechnologyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    {
      name: "React 18",
      category: "Frontend",
      icon: "Atom",
      description: "Modern UI development with hooks and concurrent features",
      status: "active",
      projects: 45,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "Server",
      description: "Scalable server-side JavaScript runtime",
      status: "active",
      projects: 38,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Python",
      category: "Backend",
      icon: "Code2",
      description: "Versatile language for APIs and data processing",
      status: "active",
      projects: 32,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: "Database",
      description: "Robust relational database for complex applications",
      status: "active",
      projects: 28,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "AWS",
      category: "Cloud",
      icon: "Cloud",
      description: "Comprehensive cloud infrastructure and services",
      status: "active",
      projects: 41,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Docker",
      category: "DevOps",
      icon: "Package",
      description: "Containerization for consistent deployments",
      status: "active",
      projects: 35,
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: "FileCode",
      description: "Type-safe JavaScript for large-scale applications",
      status: "active",
      projects: 29,
      color: "from-blue-700 to-blue-500"
    },
    {
      name: "GraphQL",
      category: "API",
      icon: "GitBranch",
      description: "Efficient data fetching and API development",
      status: "active",
      projects: 22,
      color: "from-pink-500 to-rose-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(technologies.length / 4));
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(technologies.length / 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(technologies.length / 4)) % Math.ceil(technologies.length / 4));
  };

  const getCurrentTechnologies = () => {
    const startIndex = currentIndex * 4;
    return technologies.slice(startIndex, startIndex + 4);
  };

  return (
    <div className="relative">
      {/* GitHub Activity Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-subtle">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-text-primary">Live GitHub Activity</span>
          </div>
          <div className="text-sm text-text-secondary">
            Last commit: 2 hours ago
          </div>
        </div>
      </div>

      {/* Technology Cards */}
      <div className="relative overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {getCurrentTechnologies().map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl p-6 shadow-subtle hover:shadow-elevation transition-all duration-300 hover-lift cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
              
              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={tech.icon} size={24} color="white" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-surface text-text-secondary rounded-full">
                    {tech.category}
                  </span>
                </div>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {tech.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-1 text-xs text-text-secondary">
                    <Icon name="Briefcase" size={12} />
                    <span>{tech.projects} projects</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-success">
                    <Icon name="TrendingUp" size={12} />
                    <span>Active</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-subtle hover:shadow-elevation transition-all duration-300 hover-lift"
        >
          <Icon name="ChevronLeft" size={20} className="text-text-primary" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(technologies.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-secondary w-8' : 'bg-primary-200'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-subtle hover:shadow-elevation transition-all duration-300 hover-lift"
        >
          <Icon name="ChevronRight" size={20} className="text-text-primary" />
        </button>
      </div>

      {/* Technology Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">8+</div>
          <div className="text-sm text-text-secondary">Core Technologies</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">270+</div>
          <div className="text-sm text-text-secondary">Total Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
          <div className="text-sm text-text-secondary">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">24/7</div>
          <div className="text-sm text-text-secondary">Monitoring</div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCarousel;