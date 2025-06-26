import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CaseStudyPreviews = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCase, setHoveredCase] = useState(null);

  const caseStudies = {
    en: [
      {
        id: 'fintech-platform',
        title: 'FinanceFlow - Digital Banking Platform',
        category: 'fintech',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        client: 'FinanceFlow Inc.',
        duration: '8 months',
        team: '6 developers',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        challenge: 'Build a secure, scalable digital banking platform with real-time transactions and compliance features.',
        solution: 'Developed a microservices architecture with React frontend, Node.js APIs, and comprehensive security measures.',
        results: [
          { metric: 'Transaction Speed', value: '40% faster', icon: 'Zap' },
          { metric: 'User Adoption', value: '25,000+ users', icon: 'Users' },
          { metric: 'Uptime', value: '99.9%', icon: 'Shield' },
          { metric: 'Cost Reduction', value: '35%', icon: 'TrendingDown' }
        ],
        testimonial: {
          quote: "RBC Studio transformed our vision into reality with exceptional technical expertise.",
          author: "Maria Rodriguez, CTO"
        },
        featured: true
      },
      {
        id: 'ecommerce-marketplace',
        title: 'RetailMax - E-commerce Marketplace',
        category: 'ecommerce',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?w=600&h=400&fit=crop',
        client: 'RetailMax Corp.',
        duration: '6 months',
        team: '5 developers',
        technologies: ['Vue.js', 'Python', 'MongoDB', 'Stripe'],
        challenge: 'Create a multi-vendor marketplace with advanced search, payment processing, and inventory management.',
        solution: 'Built a scalable marketplace with Vue.js frontend, Python backend, and integrated payment systems.',
        results: [
          { metric: 'Sales Increase', value: '200%', icon: 'TrendingUp' },
          { metric: 'Vendors', value: '500+', icon: 'Store' },
          { metric: 'Page Load Time', value: '2.1s', icon: 'Clock' },
          { metric: 'Mobile Traffic', value: '65%', icon: 'Smartphone' }
        ],
        testimonial: {
          quote: "Our marketplace exceeded all performance expectations thanks to RBC Studio.",
          author: "Sophie Williams, VP Digital"
        },
        featured: false
      },
      {
        id: 'healthcare-dashboard',
        title: 'MedTech - Patient Management System',
        category: 'healthcare',
        image: 'https://images.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg?w=600&h=400&fit=crop',
        client: 'MedTech Solutions',
        duration: '10 months',
        team: '8 developers',
        technologies: ['React', 'Django', 'PostgreSQL', 'Docker'],
        challenge: 'Develop HIPAA-compliant patient management system with real-time analytics and telemedicine features.',
        solution: 'Created secure healthcare platform with advanced analytics, appointment scheduling, and video consultations.',
        results: [
          { metric: 'Patient Records', value: '100,000+', icon: 'FileText' },
          { metric: 'Appointment Efficiency', value: '60% improvement', icon: 'Calendar' },
          { metric: 'Doctor Satisfaction', value: '95%', icon: 'Heart' },
          { metric: 'Compliance Score', value: '100%', icon: 'CheckCircle' }
        ],
        testimonial: {
          quote: "The system revolutionized how we manage patient care and operations.",
          author: "Dr. James Chen, Chief Medical Officer"
        },
        featured: true
      },
      {
        id: 'education-platform',
        title: 'EduTech - Learning Management System',
        category: 'education',
        image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?w=600&h=400&fit=crop',
        client: 'EduTech Solutions',
        duration: '7 months',
        team: '6 developers',
        technologies: ['React Native', 'Firebase', 'Node.js', 'WebRTC'],
        challenge: 'Build comprehensive learning platform with video streaming, assessments, and progress tracking.',
        solution: 'Developed cross-platform mobile app with real-time video streaming and interactive learning features.',
        results: [
          { metric: 'Active Students', value: '50,000+', icon: 'GraduationCap' },
          { metric: 'Course Completion', value: '85%', icon: 'BookOpen' },
          { metric: 'App Rating', value: '4.8/5', icon: 'Star' },
          { metric: 'Engagement Time', value: '45 min/day', icon: 'Clock' }
        ],
        testimonial: {
          quote: "Our students love the intuitive interface and seamless learning experience.",
          author: "Sarah Johnson, Head of Product"
        },
        featured: false
      }
    ],
    es: [
      {
        id: 'fintech-platform',
        title: 'FinanceFlow - Plataforma de Banca Digital',
        category: 'fintech',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        client: 'FinanceFlow Inc.',
        duration: '8 meses',
        team: '6 desarrolladores',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        challenge: 'Construir una plataforma bancaria digital segura y escalable con transacciones en tiempo real y características de cumplimiento.',
        solution: 'Desarrollamos una arquitectura de microservicios con frontend React, APIs Node.js y medidas de seguridad integrales.',
        results: [
          { metric: 'Velocidad de Transacción', value: '40% más rápido', icon: 'Zap' },
          { metric: 'Adopción de Usuarios', value: '25,000+ usuarios', icon: 'Users' },
          { metric: 'Tiempo Activo', value: '99.9%', icon: 'Shield' },
          { metric: 'Reducción de Costos', value: '35%', icon: 'TrendingDown' }
        ],
        testimonial: {
          quote: "RBC Studio transformó nuestra visión en realidad con experiencia técnica excepcional.",
          author: "Maria Rodriguez, CTO"
        },
        featured: true
      },
      {
        id: 'ecommerce-marketplace',
        title: 'RetailMax - Marketplace E-commerce',
        category: 'ecommerce',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?w=600&h=400&fit=crop',
        client: 'RetailMax Corp.',
        duration: '6 meses',
        team: '5 desarrolladores',
        technologies: ['Vue.js', 'Python', 'MongoDB', 'Stripe'],
        challenge: 'Crear un marketplace multi-vendedor con búsqueda avanzada, procesamiento de pagos y gestión de inventario.',
        solution: 'Construimos un marketplace escalable con frontend Vue.js, backend Python y sistemas de pago integrados.',
        results: [
          { metric: 'Aumento de Ventas', value: '200%', icon: 'TrendingUp' },
          { metric: 'Vendedores', value: '500+', icon: 'Store' },
          { metric: 'Tiempo de Carga', value: '2.1s', icon: 'Clock' },
          { metric: 'Tráfico Móvil', value: '65%', icon: 'Smartphone' }
        ],
        testimonial: {
          quote: "Nuestro marketplace superó todas las expectativas de rendimiento gracias a RBC Studio.",
          author: "Sophie Williams, VP Digital"
        },
        featured: false
      },
      {
        id: 'healthcare-dashboard',
        title: 'MedTech - Sistema de Gestión de Pacientes',
        category: 'healthcare',
        image: 'https://images.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg?w=600&h=400&fit=crop',
        client: 'MedTech Solutions',
        duration: '10 meses',
        team: '8 desarrolladores',
        technologies: ['React', 'Django', 'PostgreSQL', 'Docker'],
        challenge: 'Desarrollar sistema de gestión de pacientes compatible con HIPAA con análisis en tiempo real y características de telemedicina.',
        solution: 'Creamos plataforma de salud segura con análisis avanzados, programación de citas y consultas por video.',
        results: [
          { metric: 'Registros de Pacientes', value: '100,000+', icon: 'FileText' },
          { metric: 'Eficiencia de Citas', value: '60% mejora', icon: 'Calendar' },
          { metric: 'Satisfacción Médicos', value: '95%', icon: 'Heart' },
          { metric: 'Puntuación Cumplimiento', value: '100%', icon: 'CheckCircle' }
        ],
        testimonial: {
          quote: "El sistema revolucionó cómo gestionamos la atención al paciente y las operaciones.",
          author: "Dr. James Chen, Director Médico"
        },
        featured: true
      },
      {
        id: 'education-platform',
        title: 'EduTech - Sistema de Gestión de Aprendizaje',
        category: 'education',
        image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?w=600&h=400&fit=crop',
        client: 'EduTech Solutions',
        duration: '7 meses',
        team: '6 desarrolladores',
        technologies: ['React Native', 'Firebase', 'Node.js', 'WebRTC'],
        challenge: 'Construir plataforma de aprendizaje integral con streaming de video, evaluaciones y seguimiento de progreso.',
        solution: 'Desarrollamos app móvil multiplataforma con streaming de video en tiempo real y características de aprendizaje interactivo.',
        results: [
          { metric: 'Estudiantes Activos', value: '50,000+', icon: 'GraduationCap' },
          { metric: 'Finalización de Cursos', value: '85%', icon: 'BookOpen' },
          { metric: 'Calificación App', value: '4.8/5', icon: 'Star' },
          { metric: 'Tiempo de Participación', value: '45 min/día', icon: 'Clock' }
        ],
        testimonial: {
          quote: "Nuestros estudiantes aman la interfaz intuitiva y la experiencia de aprendizaje fluida.",
          author: "Sarah Johnson, Jefa de Producto"
        },
        featured: false
      }
    ]
  };

  const filters = {
    en: [
      { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
      { id: 'fintech', label: 'FinTech', icon: 'CreditCard' },
      { id: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart' },
      { id: 'healthcare', label: 'Healthcare', icon: 'Heart' },
      { id: 'education', label: 'Education', icon: 'GraduationCap' }
    ],
    es: [
      { id: 'all', label: 'Todos los Proyectos', icon: 'Grid3X3' },
      { id: 'fintech', label: 'FinTech', icon: 'CreditCard' },
      { id: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart' },
      { id: 'healthcare', label: 'Salud', icon: 'Heart' },
      { id: 'education', label: 'Educación', icon: 'GraduationCap' }
    ]
  };

  const currentCaseStudies = caseStudies[language];
  const currentFilters = filters[language];

  const filteredCaseStudies = activeFilter === 'all' 
    ? currentCaseStudies 
    : currentCaseStudies.filter(study => study.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {currentFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-secondary text-white shadow-subtle'
                : 'bg-white text-text-secondary hover:bg-surface hover:text-secondary'
            }`}
          >
            <Icon name={filter.icon} size={16} />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredCaseStudies.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredCase(caseStudy.id)}
            onMouseLeave={() => setHoveredCase(null)}
            className={`group relative bg-white rounded-2xl shadow-subtle hover:shadow-elevation transition-all duration-500 overflow-hidden ${
              caseStudy.featured ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Featured Badge */}
            {caseStudy.featured && (
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                  {language === 'en' ? 'Featured' : 'Destacado'}
                </span>
              </div>
            )}

            <div className={`grid ${caseStudy.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
              {/* Image Section */}
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Case Study Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to="/work"
                    className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
                  >
                    {language === 'en' ? 'View Case Study' : 'Ver Caso de Estudio'}
                  </Link>
                </div>

                {/* Technologies */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/90 backdrop-blur-md text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {caseStudy.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-md text-primary text-xs font-medium rounded-full">
                      +{caseStudy.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {caseStudy.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Building" size={14} />
                        <span>{caseStudy.client}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{caseStudy.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Users" size={14} />
                        <span>{caseStudy.team}</span>
                      </span>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide mb-1">
                        {language === 'en' ? 'Challenge' : 'Desafío'}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    
                    {hoveredCase === caseStudy.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="font-semibold text-primary text-sm uppercase tracking-wide mb-1">
                          {language === 'en' ? 'Solution' : 'Solución'}
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-3">
                    {caseStudy.results.slice(0, 4).map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-surface rounded-lg">
                        <Icon name={result.icon} size={20} className="text-secondary mx-auto mb-1" />
                        <div className="font-bold text-primary text-sm">{result.value}</div>
                        <div className="text-text-secondary text-xs">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-6 pt-4 border-t border-primary-100">
                  <blockquote className="text-text-secondary text-sm italic mb-2">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <cite className="text-primary text-xs font-medium">
                    — {caseStudy.testimonial.author}
                  </cite>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects CTA */}
      <div className="text-center pt-8">
        <Link
          to="/work"
          className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 hover-lift"
        >
          <Icon name="Eye" size={20} className="mr-2" />
          {language === 'en' ? 'View All Projects' : 'Ver Todos los Proyectos'}
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyPreviews;