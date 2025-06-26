import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

import HeroSection from './components/HeroSection';
import TechnologyCarousel from './components/TechnologyCarousel';
import ServicesPreview from './components/ServicesPreview';
import ClientMetrics from './components/ClientMetrics';
import TestimonialsSection from './components/TestimonialsSection';
import CaseStudyPreviews from './components/CaseStudyPreviews';

const Homepage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };

  const content = {
    en: {
      heroHeadlines: [
        'Digital Craftsmanship That Scales',
        'Your Technology Partner, Not Just a Vendor',
        'Global Reach, Local Expertise'
      ],
      heroSubtitle: 'We transform ambitious ideas into exceptional digital experiences that drive real business growth.',
      ctaText: 'Start Your Project',
      sectionTitles: {
        technology: 'Our Technology Stack',
        services: 'What We Do Best',
        metrics: 'Proven Results',
        testimonials: 'Client Success Stories',
        caseStudies: 'Featured Work'
      }
    },
    es: {
      heroHeadlines: [
        'Artesanía Digital Que Escala',
        'Tu Socio Tecnológico, No Solo Un Proveedor',
        'Alcance Global, Experiencia Local'
      ],
      heroSubtitle: 'Transformamos ideas ambiciosas en experiencias digitales excepcionales que impulsan el crecimiento real del negocio.',
      ctaText: 'Iniciar Tu Proyecto',
      sectionTitles: {
        technology: 'Nuestro Stack Tecnológico',
        services: 'Lo Que Hacemos Mejor',
        metrics: 'Resultados Comprobados',
        testimonials: 'Historias de Éxito de Clientes',
        caseStudies: 'Trabajo Destacado'
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Language Toggle - Fixed Position */}
      <div className="fixed top-20 right-4 z-40">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-elevation border border-primary-200 hover:shadow-cta transition-all duration-300 hover-lift"
        >
          <Icon name="Globe" size={16} />
          <span className="font-semibold text-sm uppercase">{currentLanguage}</span>
        </button>
      </div>

      {/* Hero Section */}
      <HeroSection 
        headlines={content[currentLanguage].heroHeadlines}
        subtitle={content[currentLanguage].heroSubtitle}
        ctaText={content[currentLanguage].ctaText}
      />

      {/* Technology Carousel */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {content[currentLanguage].sectionTitles.technology}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {currentLanguage === 'en' ?'Cutting-edge technologies powering your digital transformation' :'Tecnologías de vanguardia impulsando tu transformación digital'
              }
            </p>
          </motion.div>
          <TechnologyCarousel />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {content[currentLanguage].sectionTitles.services}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {currentLanguage === 'en' ?'Comprehensive digital solutions tailored to your business needs' :'Soluciones digitales integrales adaptadas a las necesidades de tu negocio'
              }
            </p>
          </motion.div>
          <ServicesPreview language={currentLanguage} />
        </div>
      </section>

      {/* Client Metrics */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {content[currentLanguage].sectionTitles.metrics}
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {currentLanguage === 'en' ?'Numbers that speak to our commitment to excellence' :'Números que hablan de nuestro compromiso con la excelencia'
              }
            </p>
          </motion.div>
          <ClientMetrics language={currentLanguage} />
        </div>
      </section>

      {/* Case Study Previews */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {content[currentLanguage].sectionTitles.caseStudies}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {currentLanguage === 'en' ?'Real projects, real results, real impact on businesses' :'Proyectos reales, resultados reales, impacto real en los negocios'
              }
            </p>
          </motion.div>
          <CaseStudyPreviews language={currentLanguage} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {content[currentLanguage].sectionTitles.testimonials}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {currentLanguage === 'en' ?'Hear from the businesses we\'ve helped transform'
                : 'Escucha de los negocios que hemos ayudado a transformar'
              }
            </p>
          </motion.div>
          <TestimonialsSection language={currentLanguage} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {currentLanguage === 'en' ?'Ready to Transform Your Digital Presence?' :'¿Listo para Transformar tu Presencia Digital?'
              }
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {currentLanguage === 'en' ?'Let\'s discuss your project and create something extraordinary together.' :'Hablemos de tu proyecto y creemos algo extraordinario juntos.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                {content[currentLanguage].ctaText}
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 hover-lift border border-white/20"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                {currentLanguage === 'en' ? 'View Our Work' : 'Ver Nuestro Trabajo'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <Link
        to="/briefing-wizard"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-full shadow-cta hover:bg-accent-600 transition-all duration-300 hover-lift lg:hidden"
      >
        <Icon name="Plus" size={20} className="mr-2" />
        {currentLanguage === 'en' ? 'Start Project' : 'Iniciar Proyecto'}
      </Link>
    </div>
  );
};

export default Homepage;