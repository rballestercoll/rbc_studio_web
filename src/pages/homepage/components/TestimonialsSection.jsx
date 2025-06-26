import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TestimonialsSection = ({ language }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = {
    en: [
      {
        id: 1,
        name: "Maria Rodriguez",
        position: "CTO, FinanceFlow",
        company: "FinanceFlow",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        videoThumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600&h=400&fit=crop",
        quote: `RBC Studio delivered our fintech platform 3 weeks ahead of schedule. Their expertise in React and Node.js, combined with their understanding of financial regulations, made them the perfect partner for our project.`,
        projectType: "Fintech Platform",
        results: ["40% faster transactions", "99.9% uptime", "SOC 2 compliant"],
        industry: "Financial Services"
      },
      {
        id: 2,
        name: "James Chen",
        position: "Founder & CEO, EduTech Solutions",
        company: "EduTech Solutions",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        videoThumbnail: "https://images.pixabay.com/photo/2016/02/19/11/19/computer-1209641_1280.jpg?w=600&h=400&fit=crop",
        quote: `The mobile app RBC Studio built for us has over 50,000 active users. Their attention to UX design and performance optimization was exceptional. They truly understand what it takes to build scalable applications.`,
        projectType: "Educational Mobile App",
        results: ["50K+ active users", "4.8 app store rating", "60% user retention"],
        industry: "Education Technology"
      },
      {
        id: 3,
        name: "Sophie Williams",
        position: "VP of Digital, RetailMax",
        company: "RetailMax",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        videoThumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?w=600&h=400&fit=crop",
        quote: `Our e-commerce platform built by RBC Studio increased our online sales by 200%. Their cloud architecture handles our peak traffic seamlessly, and their ongoing support has been invaluable.`,
        projectType: "E-commerce Platform",
        results: ["200% sales increase", "Zero downtime", "50% faster loading"],
        industry: "Retail & E-commerce"
      }
    ],
    es: [
      {
        id: 1,
        name: "Maria Rodriguez",
        position: "CTO, FinanceFlow",
        company: "FinanceFlow",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        videoThumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600&h=400&fit=crop",
        quote: `RBC Studio entregó nuestra plataforma fintech 3 semanas antes de lo programado. Su experiencia en React y Node.js, combinada con su comprensión de las regulaciones financieras, los convirtió en el socio perfecto para nuestro proyecto.`,
        projectType: "Plataforma Fintech",
        results: ["40% transacciones más rápidas", "99.9% tiempo activo", "Cumple SOC 2"],
        industry: "Servicios Financieros"
      },
      {
        id: 2,
        name: "James Chen",
        position: "Fundador y CEO, EduTech Solutions",
        company: "EduTech Solutions",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        videoThumbnail: "https://images.pixabay.com/photo/2016/02/19/11/19/computer-1209641_1280.jpg?w=600&h=400&fit=crop",
        quote: `La aplicación móvil que RBC Studio construyó para nosotros tiene más de 50,000 usuarios activos. Su atención al diseño UX y optimización de rendimiento fue excepcional. Realmente entienden lo que se necesita para construir aplicaciones escalables.`,
        projectType: "App Móvil Educativa",
        results: ["50K+ usuarios activos", "4.8 calificación app store", "60% retención usuarios"],
        industry: "Tecnología Educativa"
      },
      {
        id: 3,
        name: "Sophie Williams",
        position: "VP Digital, RetailMax",
        company: "RetailMax",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        videoThumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?w=600&h=400&fit=crop",
        quote: `Nuestra plataforma de e-commerce construida por RBC Studio aumentó nuestras ventas online en 200%. Su arquitectura en la nube maneja nuestro tráfico pico sin problemas, y su soporte continuo ha sido invaluable.`,
        projectType: "Plataforma E-commerce",
        results: ["200% aumento ventas", "Cero tiempo inactivo", "50% carga más rápida"],
        industry: "Retail y E-commerce"
      }
    ]
  };

  const currentTestimonials = testimonials[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % currentTestimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % currentTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger video playback
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <div className="relative">
      {/* Main Testimonial */}
      <div className="relative bg-white rounded-3xl shadow-elevation overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Video/Image Section */}
          <div className="relative aspect-video lg:aspect-auto">
            <Image
              src={currentTestimonials[currentTestimonial].videoThumbnail}
              alt="Video testimonial"
              className="w-full h-full object-cover"
            />
            
            {/* Video Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                onClick={handleVideoPlay}
                className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-elevation"
              >
                {isPlaying ? (
                  <Icon name="Pause" size={32} className="text-primary" />
                ) : (
                  <Icon name="Play" size={32} className="text-primary ml-1" />
                )}
              </button>
            </div>

            {/* Industry Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-sm font-medium text-primary">
                {currentTestimonials[currentTestimonial].industry}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className={i < currentTestimonials[currentTestimonial].rating ? "text-warning fill-current" : "text-primary-200"}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed">
                  "{currentTestimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Results */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                    {language === 'en' ? 'Key Results' : 'Resultados Clave'}
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {currentTestimonials[currentTestimonial].results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-success" />
                        <span className="text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-primary-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={currentTestimonials[currentTestimonial].avatar}
                      alt={currentTestimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">
                      {currentTestimonials[currentTestimonial].name}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {currentTestimonials[currentTestimonial].position}
                    </div>
                    <div className="text-secondary text-sm font-medium">
                      {currentTestimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>

                {/* Project Type */}
                <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  <Icon name="Briefcase" size={16} className="mr-2" />
                  {currentTestimonials[currentTestimonial].projectType}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-white shadow-subtle hover:shadow-elevation transition-all duration-300 hover-lift"
        >
          <Icon name="ChevronLeft" size={20} className="text-text-primary" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {currentTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-secondary w-8' : 'bg-primary-200'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-white shadow-subtle hover:shadow-elevation transition-all duration-300 hover-lift"
        >
          <Icon name="ChevronRight" size={20} className="text-text-primary" />
        </button>
      </div>

      {/* Additional Testimonials Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentTestimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white rounded-xl p-6 shadow-subtle hover:shadow-elevation transition-all duration-300 cursor-pointer ${
              index === currentTestimonial ? 'ring-2 ring-secondary' : ''
            }`}
            onClick={() => setCurrentTestimonial(index)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-primary text-sm">{testimonial.name}</div>
                <div className="text-text-secondary text-xs">{testimonial.company}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={14}
                  className={i < testimonial.rating ? "text-warning fill-current" : "text-primary-200"}
                />
              ))}
            </div>
            
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
              {testimonial.quote}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;