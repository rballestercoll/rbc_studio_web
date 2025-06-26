import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

import CaseStudyCard from './components/CaseStudyCard';
import FilterSystem from './components/FilterSystem';
import ProjectTimeline from './components/ProjectTimeline';
import TeamSpotlight from './components/TeamSpotlight';
import BeforeAfterComparison from './components/BeforeAfterComparison';

const Work = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeFilters, setActiveFilters] = useState({
    industry: [],
    technology: [],
    projectType: [],
    market: []
  });
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [showTimeline, setShowTimeline] = useState(false);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };

  const content = {
    en: {
      heroTitle: 'Digital Craftsmanship Portfolio',
      heroSubtitle: 'Discover how we transform ambitious ideas into measurable business impact through strategic technology solutions.',
      filterTitle: 'Explore Our Work',
      filterSubtitle: 'Filter by industry, technology, project type, or market to find relevant case studies.',
      noResults: 'No projects found matching your criteria.',
      adjustFilters: 'Try adjusting your filters or',
      clearFilters: 'clear all filters',
      relatedProjects: 'Related Projects',
      viewAllWork: 'View All Work',
      startProject: 'Start Your Project',
      scheduleConsultation: 'Schedule Consultation'
    },
    es: {
      heroTitle: 'Portafolio de Artesanía Digital',
      heroSubtitle: 'Descubre cómo transformamos ideas ambiciosas en impacto empresarial medible a través de soluciones tecnológicas estratégicas.',
      filterTitle: 'Explora Nuestro Trabajo',
      filterSubtitle: 'Filtra por industria, tecnología, tipo de proyecto o mercado para encontrar casos de estudio relevantes.',
      noResults: 'No se encontraron proyectos que coincidan con tus criterios.',
      adjustFilters: 'Intenta ajustar tus filtros o',
      clearFilters: 'limpiar todos los filtros',
      relatedProjects: 'Proyectos Relacionados',
      viewAllWork: 'Ver Todo el Trabajo',
      startProject: 'Iniciar Tu Proyecto',
      scheduleConsultation: 'Programar Consulta'
    }
  };

  // Comprehensive case studies data
  const caseStudies = {
    en: [
      {
        id: 'fintech-neobank',
        title: 'NeoFlow - Digital Banking Platform',
        shortDescription: 'Revolutionary neobank platform serving 100K+ users across Latin America with advanced financial management tools.',
        industry: 'fintech',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Kubernetes'],
        projectType: 'scaling',
        market: 'latin-america',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        architectureImage: 'https://images.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=400&h=250&fit=crop',
        timeline: '12 months',
        teamSize: '8 developers',
        primaryTech: 'React/Node.js',
        liveDemo: 'https://demo.neoflow.com',
        challenge: 'Create a fully compliant digital banking platform that could compete with traditional banks while providing superior user experience and innovative financial tools for the underbanked population in Latin America.',
        challengePoints: [
          'Regulatory compliance across multiple countries',
          'Real-time transaction processing at scale',
          'Multi-currency support with live exchange rates',
          'Advanced fraud detection and prevention'
        ],
        approach: 'We designed a microservices architecture using event-driven patterns to ensure scalability and reliability. The platform was built with a mobile-first approach, considering the high mobile penetration in target markets.',
        methodologySteps: [
          'Conducted extensive market research and regulatory analysis',
          'Developed MVP with core banking features',
          'Implemented advanced security and compliance measures',
          'Scaled infrastructure to support rapid user growth'
        ],
        solution: 'Built a comprehensive neobank platform with features including digital account opening, peer-to-peer payments, savings goals, investment tools, and financial education modules. The platform supports multiple currencies and integrates with local payment networks.',
        impact: 'The platform achieved remarkable success, onboarding over 100,000 users in the first year with industry-leading engagement metrics. Customer acquisition cost was 40% lower than traditional banks.',
        keyMetrics: [
          { label: 'Active Users', value: '100K+', icon: 'Users' },
          { label: 'Transaction Volume', value: '$50M/month', icon: 'DollarSign' },
          { label: 'App Rating', value: '4.8/5', icon: 'Star' },
          { label: 'Uptime', value: '99.9%', icon: 'Shield' }
        ],
        detailedMetrics: [
          {
            label: 'User Acquisition',
            value: '40% lower CAC',
            description: 'Compared to traditional banks',
            icon: 'TrendingDown'
          },
          {
            label: 'Engagement Rate',
            value: '85% daily active',
            description: 'Users engage with app daily',
            icon: 'Activity'
          },
          {
            label: 'Transaction Speed',
            value: '<2 seconds',
            description: 'Average transaction processing time',
            icon: 'Zap'
          },
          {
            label: 'Customer Satisfaction',
            value: '95% NPS',
            description: 'Net Promoter Score',
            icon: 'Heart'
          }
        ],
        testimonial: {
          quote: 'RBC Studio didn\'t just build our platform – they understood our vision and created a solution that exceeded our expectations. Their expertise in fintech compliance and user experience was invaluable.',
          author: 'Carlos Mendoza',
          position: 'CEO, NeoFlow'
        }
      },
      {
        id: 'healthcare-telemedicine',
        title: 'MedConnect - Telemedicine Platform',
        shortDescription: 'HIPAA-compliant telemedicine platform connecting patients with healthcare providers across the US.',
        industry: 'healthcare',
        technologies: ['React Native', 'Django', 'PostgreSQL', 'Docker', 'WebRTC'],
        projectType: 'mvp',
        market: 'us',
        heroImage: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?w=800&h=500&fit=crop',
        timeline: '8 months',
        teamSize: '6 developers',
        primaryTech: 'React Native',
        liveDemo: 'https://demo.medconnect.health',
        challenge: 'Develop a comprehensive telemedicine platform that ensures HIPAA compliance while providing seamless video consultations, prescription management, and patient record integration.',
        challengePoints: [
          'HIPAA compliance and data security',
          'Real-time video consultation quality',
          'Integration with existing EMR systems',
          'Multi-state licensing and regulations'
        ],
        approach: 'We implemented a security-first architecture with end-to-end encryption and built custom WebRTC solutions for reliable video consultations. The platform was designed to integrate seamlessly with popular EMR systems.',
        methodologySteps: [
          'Conducted compliance audit and security assessment',
          'Developed core telemedicine features with focus on user experience',
          'Implemented EMR integrations and prescription workflows',
          'Performed extensive security testing and compliance verification'
        ],
        solution: 'Created a full-featured telemedicine platform with video consultations, appointment scheduling, prescription management, patient records, and billing integration. The platform supports both web and mobile interfaces.',
        impact: 'The platform revolutionized healthcare delivery for our client, enabling them to serve 10x more patients while reducing operational costs by 35%. Patient satisfaction scores increased dramatically.',
        keyMetrics: [
          { label: 'Consultations', value: '50K+ monthly', icon: 'Video' },
          { label: 'Patient Satisfaction', value: '4.9/5', icon: 'Heart' },
          { label: 'Response Time', value: '<5 minutes', icon: 'Clock' },
          { label: 'Cost Reduction', value: '35%', icon: 'TrendingDown' }
        ],
        detailedMetrics: [
          {
            label: 'Patient Reach',
            value: '10x increase',
            description: 'Patients served compared to in-person only',
            icon: 'Users'
          },
          {
            label: 'Wait Time',
            value: '80% reduction',
            description: 'Average wait time for consultations',
            icon: 'Clock'
          },
          {
            label: 'No-show Rate',
            value: '60% reduction',
            description: 'Missed appointments decreased significantly',
            icon: 'CheckCircle'
          },
          {
            label: 'Provider Efficiency',
            value: '40% increase',
            description: 'More patients seen per day',
            icon: 'TrendingUp'
          }
        ],
        testimonial: {
          quote: 'The MedConnect platform transformed how we deliver healthcare. RBC Studio\'s attention to compliance and user experience made all the difference in our success.',
          author: 'Dr. Sarah Williams',
          position: 'Chief Medical Officer, HealthFirst'
        }
      },
      {
        id: 'ecommerce-marketplace',
        title: 'GlobalMart - B2B Marketplace',
        shortDescription: 'International B2B marketplace facilitating trade between manufacturers and retailers worldwide.',
        industry: 'ecommerce',
        technologies: ['Vue.js', 'Python', 'MongoDB', 'Redis', 'Elasticsearch'],
        projectType: 'transformation',
        market: 'international',
        heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
        timeline: '10 months',
        teamSize: '10 developers',
        primaryTech: 'Vue.js/Python',
        liveDemo: 'https://demo.globalmart.trade',
        challenge: 'Build a sophisticated B2B marketplace that handles complex pricing structures, international payments, logistics coordination, and multi-language support for global trade.',
        challengePoints: [
          'Complex B2B pricing and quote management',
          'International payment processing and currency handling',
          'Supply chain and logistics integration',
          'Multi-language and localization requirements'
        ],
        approach: 'We designed a scalable marketplace architecture with advanced search capabilities, dynamic pricing engines, and integrated logistics management. The platform was built to handle complex B2B workflows and international trade requirements.',
        methodologySteps: [
          'Analyzed existing B2B trade processes and pain points',
          'Developed core marketplace functionality with advanced search',
          'Implemented complex pricing and quotation systems',
          'Integrated international payment and logistics providers'
        ],
        solution: 'Created a comprehensive B2B marketplace with features including advanced product catalog, quote management, bulk ordering, integrated logistics, payment processing, and supplier verification systems.',
        impact: 'The marketplace facilitated over $100M in trade volume within the first year, connecting thousands of suppliers with retailers globally and reducing transaction costs by 25%.',
        keyMetrics: [
          { label: 'Trade Volume', value: '$100M+', icon: 'DollarSign' },
          { label: 'Active Suppliers', value: '5,000+', icon: 'Store' },
          { label: 'Countries', value: '45', icon: 'Globe' },
          { label: 'Order Accuracy', value: '99.2%', icon: 'CheckCircle' }
        ],
        detailedMetrics: [
          {
            label: 'Transaction Cost',
            value: '25% reduction',
            description: 'Lower fees compared to traditional methods',
            icon: 'TrendingDown'
          },
          {
            label: 'Order Processing',
            value: '70% faster',
            description: 'Time from order to fulfillment',
            icon: 'Zap'
          },
          {
            label: 'Supplier Satisfaction',
            value: '92% rating',
            description: 'Platform satisfaction score',
            icon: 'Smile'
          },
          {
            label: 'Payment Success',
            value: '99.8% rate',
            description: 'Successful payment processing',
            icon: 'CreditCard'
          }
        ],
        testimonial: {
          quote: 'RBC Studio created a marketplace that truly understands global B2B commerce. Their technical expertise and attention to international trade complexities was exceptional.',
          author: 'Jennifer Liu',
          position: 'VP of Operations, GlobalMart'
        }
      },
      {
        id: 'edtech-learning-platform',
        title: 'LearnMax - Adaptive Learning Platform',
        shortDescription: 'AI-powered adaptive learning platform personalizing education for 200K+ students worldwide.',
        industry: 'education',
        technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
        projectType: 'mvp',
        market: 'international',
        heroImage: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?w=800&h=500&fit=crop',
        timeline: '14 months',
        teamSize: '12 developers',
        primaryTech: 'React/Python/AI',
        liveDemo: 'https://demo.learnmax.edu',
        challenge: 'Create an adaptive learning platform that uses AI to personalize educational content, track learning progress, and optimize outcomes for diverse learning styles and capabilities.',
        challengePoints: [
          'AI-powered content personalization',
          'Real-time learning analytics and adaptation',
          'Scalable video streaming and content delivery',
          'Multi-institutional integration and standards compliance'
        ],
        approach: 'We developed a machine learning-driven platform that analyzes student behavior and performance to adapt content delivery. The system uses advanced analytics to optimize learning paths and predict outcomes.',
        methodologySteps: [
          'Researched learning science and adaptive education principles',
          'Built core learning management system with analytics',
          'Developed AI algorithms for content personalization',
          'Integrated with institutional systems and content providers'
        ],
        solution: 'Built a comprehensive adaptive learning platform with AI-driven personalization, interactive content delivery, progress tracking, educator dashboards, and institutional analytics.',
        impact: 'The platform improved learning outcomes by 45% while reducing time-to-competency by 30%. It now serves over 200,000 students across 50 institutions worldwide.',
        keyMetrics: [
          { label: 'Active Students', value: '200K+', icon: 'Users' },
          { label: 'Completion Rate', value: '87%', icon: 'GraduationCap' },
          { label: 'Learning Improvement', value: '45%', icon: 'TrendingUp' },
          { label: 'Institutions', value: '50+', icon: 'Building' }
        ],
        detailedMetrics: [
          {
            label: 'Learning Outcomes',
            value: '45% improvement',
            description: 'Better test scores and comprehension',
            icon: 'Award'
          },
          {
            label: 'Time Efficiency',
            value: '30% reduction',
            description: 'Time to achieve learning objectives',
            icon: 'Clock'
          },
          {
            label: 'Student Engagement',
            value: '60% increase',
            description: 'Time spent actively learning',
            icon: 'Activity'
          },
          {
            label: 'Educator Satisfaction',
            value: '94% rating',
            description: 'Teacher satisfaction with platform',
            icon: 'Heart'
          }
        ],
        testimonial: {
          quote: 'LearnMax has revolutionized how our students learn. The AI-powered personalization has led to unprecedented engagement and learning outcomes.',
          author: 'Dr. Michael Chen',
          position: 'Director of Digital Learning, EduTech University'
        }
      }
    ],
    es: [
      {
        id: 'fintech-neobank',
        title: 'NeoFlow - Plataforma de Banca Digital',
        shortDescription: 'Plataforma revolucionaria de neobanco que sirve a más de 100K usuarios en América Latina con herramientas avanzadas de gestión financiera.',
        industry: 'fintech',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Kubernetes'],
        projectType: 'scaling',
        market: 'latin-america',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        timeline: '12 meses',
        teamSize: '8 desarrolladores',
        primaryTech: 'React/Node.js',
        liveDemo: 'https://demo.neoflow.com',
        challenge: 'Crear una plataforma bancaria digital completamente compatible que pudiera competir con bancos tradicionales mientras proporciona experiencia superior de usuario y herramientas financieras innovadoras.',
        challengePoints: [
          'Cumplimiento regulatorio en múltiples países',
          'Procesamiento de transacciones en tiempo real a escala',
          'Soporte multi-moneda con tasas de cambio en vivo',
          'Detección y prevención avanzada de fraude'
        ],
        approach: 'Diseñamos una arquitectura de microservicios usando patrones dirigidos por eventos para asegurar escalabilidad y confiabilidad. La plataforma fue construida con un enfoque móvil-primero.',
        methodologySteps: [
          'Realizamos investigación extensiva de mercado y análisis regulatorio',
          'Desarrollamos MVP con características bancarias principales',
          'Implementamos medidas avanzadas de seguridad y cumplimiento',
          'Escalamos infraestructura para soportar crecimiento rápido de usuarios'
        ],
        solution: 'Construimos una plataforma integral de neobanco con características incluyendo apertura digital de cuentas, pagos persona-a-persona, metas de ahorro, herramientas de inversión y módulos de educación financiera.',
        impact: 'La plataforma logró éxito notable, incorporando más de 100,000 usuarios en el primer año con métricas de engagement líderes en la industria.',
        keyMetrics: [
          { label: 'Usuarios Activos', value: '100K+', icon: 'Users' },
          { label: 'Volumen de Transacciones', value: '$50M/mes', icon: 'DollarSign' },
          { label: 'Calificación App', value: '4.8/5', icon: 'Star' },
          { label: 'Tiempo Activo', value: '99.9%', icon: 'Shield' }
        ],
        detailedMetrics: [
          {
            label: 'Adquisición de Usuarios',
            value: '40% menor CAC',
            description: 'Comparado con bancos tradicionales',
            icon: 'TrendingDown'
          },
          {
            label: 'Tasa de Engagement',
            value: '85% activos diarios',
            description: 'Usuarios que usan la app diariamente',
            icon: 'Activity'
          },
          {
            label: 'Velocidad de Transacción',
            value: '<2 segundos',
            description: 'Tiempo promedio de procesamiento',
            icon: 'Zap'
          },
          {
            label: 'Satisfacción del Cliente',
            value: '95% NPS',
            description: 'Net Promoter Score',
            icon: 'Heart'
          }
        ],
        testimonial: {
          quote: 'RBC Studio no solo construyó nuestra plataforma – entendieron nuestra visión y crearon una solución que superó nuestras expectativas.',
          author: 'Carlos Mendoza',
          position: 'CEO, NeoFlow'
        }
      },
      {
        id: 'healthcare-telemedicine',
        title: 'MedConnect - Plataforma de Telemedicina',
        shortDescription: 'Plataforma de telemedicina compatible con HIPAA que conecta pacientes con proveedores de salud en Estados Unidos.',
        industry: 'healthcare',
        technologies: ['React Native', 'Django', 'PostgreSQL', 'Docker', 'WebRTC'],
        projectType: 'mvp',
        market: 'us',
        heroImage: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?w=800&h=500&fit=crop',
        timeline: '8 meses',
        teamSize: '6 desarrolladores',
        primaryTech: 'React Native',
        liveDemo: 'https://demo.medconnect.health',
        challenge: 'Desarrollar una plataforma integral de telemedicina que asegure el cumplimiento HIPAA mientras proporciona consultas por video fluidas, gestión de prescripciones e integración de registros de pacientes.',
        challengePoints: [
          'Cumplimiento HIPAA y seguridad de datos',
          'Calidad de consulta por video en tiempo real',
          'Integración con sistemas EMR existentes',
          'Licencias y regulaciones multi-estatales'
        ],
        approach: 'Implementamos una arquitectura de seguridad-primero con encriptación de extremo a extremo y construimos soluciones WebRTC personalizadas para consultas por video confiables.',
        methodologySteps: [
          'Realizamos auditoría de cumplimiento y evaluación de seguridad',
          'Desarrollamos características principales de telemedicina con enfoque en experiencia de usuario',
          'Implementamos integraciones EMR y flujos de trabajo de prescripciones',
          'Realizamos pruebas extensivas de seguridad y verificación de cumplimiento'
        ],
        solution: 'Creamos una plataforma completa de telemedicina con consultas por video, programación de citas, gestión de prescripciones, registros de pacientes e integración de facturación.',
        impact: 'La plataforma revolucionó la entrega de atención médica para nuestro cliente, permitiéndoles servir 10 veces más pacientes mientras reducía costos operacionales en 35%.',
        keyMetrics: [
          { label: 'Consultas', value: '50K+ mensuales', icon: 'Video' },
          { label: 'Satisfacción Paciente', value: '4.9/5', icon: 'Heart' },
          { label: 'Tiempo de Respuesta', value: '<5 minutos', icon: 'Clock' },
          { label: 'Reducción de Costos', value: '35%', icon: 'TrendingDown' }
        ],
        detailedMetrics: [
          {
            label: 'Alcance de Pacientes',
            value: '10x aumento',
            description: 'Pacientes servidos vs solo presencial',
            icon: 'Users'
          },
          {
            label: 'Tiempo de Espera',
            value: '80% reducción',
            description: 'Tiempo promedio de espera para consultas',
            icon: 'Clock'
          },
          {
            label: 'Tasa de No-shows',
            value: '60% reducción',
            description: 'Citas perdidas disminuyeron significativamente',
            icon: 'CheckCircle'
          },
          {
            label: 'Eficiencia del Proveedor',
            value: '40% aumento',
            description: 'Más pacientes atendidos por día',
            icon: 'TrendingUp'
          }
        ],
        testimonial: {
          quote: 'La plataforma MedConnect transformó cómo entregamos atención médica. La atención de RBC Studio al cumplimiento y experiencia de usuario hizo toda la diferencia.',
          author: 'Dr. Sarah Williams',
          position: 'Directora Médica, HealthFirst'
        }
      },
      {
        id: 'ecommerce-marketplace',
        title: 'GlobalMart - Marketplace B2B',
        shortDescription: 'Marketplace B2B internacional que facilita el comercio entre fabricantes y minoristas mundialmente.',
        industry: 'ecommerce',
        technologies: ['Vue.js', 'Python', 'MongoDB', 'Redis', 'Elasticsearch'],
        projectType: 'transformation',
        market: 'international',
        heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
        timeline: '10 meses',
        teamSize: '10 desarrolladores',
        primaryTech: 'Vue.js/Python',
        liveDemo: 'https://demo.globalmart.trade',
        challenge: 'Construir un marketplace B2B sofisticado que maneje estructuras de precios complejas, pagos internacionales, coordinación logística y soporte multi-idioma para comercio global.',
        challengePoints: [
          'Gestión compleja de precios y cotizaciones B2B',
          'Procesamiento de pagos internacionales y manejo de monedas',
          'Integración de cadena de suministro y logística',
          'Requisitos multi-idioma y localización'
        ],
        approach: 'Diseñamos una arquitectura de marketplace escalable con capacidades de búsqueda avanzadas, motores de precios dinámicos y gestión logística integrada.',
        methodologySteps: [
          'Analizamos procesos comerciales B2B existentes y puntos de dolor',
          'Desarrollamos funcionalidad principal de marketplace con búsqueda avanzada',
          'Implementamos sistemas complejos de precios y cotizaciones',
          'Integramos proveedores internacionales de pagos y logística'
        ],
        solution: 'Creamos un marketplace B2B integral con características incluyendo catálogo avanzado de productos, gestión de cotizaciones, ordenamiento a granel, logística integrada y sistemas de verificación de proveedores.',
        impact: 'El marketplace facilitó más de $100M en volumen comercial en el primer año, conectando miles de proveedores con minoristas globalmente y reduciendo costos de transacción en 25%.',
        keyMetrics: [
          { label: 'Volumen Comercial', value: '$100M+', icon: 'DollarSign' },
          { label: 'Proveedores Activos', value: '5,000+', icon: 'Store' },
          { label: 'Países', value: '45', icon: 'Globe' },
          { label: 'Precisión de Pedidos', value: '99.2%', icon: 'CheckCircle' }
        ],
        detailedMetrics: [
          {
            label: 'Costo de Transacción',
            value: '25% reducción',
            description: 'Tarifas más bajas vs métodos tradicionales',
            icon: 'TrendingDown'
          },
          {
            label: 'Procesamiento de Pedidos',
            value: '70% más rápido',
            description: 'Tiempo de pedido a cumplimiento',
            icon: 'Zap'
          },
          {
            label: 'Satisfacción Proveedor',
            value: '92% calificación',
            description: 'Puntuación de satisfacción de plataforma',
            icon: 'Smile'
          },
          {
            label: 'Éxito de Pagos',
            value: '99.8% tasa',
            description: 'Procesamiento exitoso de pagos',
            icon: 'CreditCard'
          }
        ],
        testimonial: {
          quote: 'RBC Studio creó un marketplace que verdaderamente entiende el comercio B2B global. Su experiencia técnica y atención a las complejidades del comercio internacional fue excepcional.',
          author: 'Jennifer Liu',
          position: 'VP de Operaciones, GlobalMart'
        }
      },
      {
        id: 'edtech-learning-platform',
        title: 'LearnMax - Plataforma de Aprendizaje Adaptativo',
        shortDescription: 'Plataforma de aprendizaje adaptativo potenciada por IA que personaliza educación para más de 200K estudiantes mundialmente.',
        industry: 'education',
        technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
        projectType: 'mvp',
        market: 'international',
        heroImage: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?w=800&h=500&fit=crop',
        timeline: '14 meses',
        teamSize: '12 desarrolladores',
        primaryTech: 'React/Python/AI',
        liveDemo: 'https://demo.learnmax.edu',
        challenge: 'Crear una plataforma de aprendizaje adaptativo que use IA para personalizar contenido educativo, rastrear progreso de aprendizaje y optimizar resultados para diversos estilos y capacidades de aprendizaje.',
        challengePoints: [
          'Personalización de contenido potenciada por IA',
          'Análisis de aprendizaje en tiempo real y adaptación',
          'Transmisión de video escalable y entrega de contenido',
          'Integración multi-institucional y cumplimiento de estándares'
        ],
        approach: 'Desarrollamos una plataforma impulsada por aprendizaje automático que analiza comportamiento y rendimiento estudiantil para adaptar entrega de contenido.',
        methodologySteps: [
          'Investigamos ciencia del aprendizaje y principios de educación adaptativa',
          'Construimos sistema principal de gestión de aprendizaje con análisis',
          'Desarrollamos algoritmos de IA para personalización de contenido',
          'Integramos con sistemas institucionales y proveedores de contenido'
        ],
        solution: 'Construimos una plataforma integral de aprendizaje adaptativo con personalización impulsada por IA, entrega interactiva de contenido, seguimiento de progreso, tableros de educadores y análisis institucionales.',
        impact: 'La plataforma mejoró resultados de aprendizaje en 45% mientras reducía tiempo-a-competencia en 30%. Ahora sirve a más de 200,000 estudiantes en 50 instituciones mundialmente.',
        keyMetrics: [
          { label: 'Estudiantes Activos', value: '200K+', icon: 'Users' },
          { label: 'Tasa de Finalización', value: '87%', icon: 'GraduationCap' },
          { label: 'Mejora de Aprendizaje', value: '45%', icon: 'TrendingUp' },
          { label: 'Instituciones', value: '50+', icon: 'Building' }
        ],
        detailedMetrics: [
          {
            label: 'Resultados de Aprendizaje',
            value: '45% mejora',
            description: 'Mejores puntajes de prueba y comprensión',
            icon: 'Award'
          },
          {
            label: 'Eficiencia de Tiempo',
            value: '30% reducción',
            description: 'Tiempo para lograr objetivos de aprendizaje',
            icon: 'Clock'
          },
          {
            label: 'Engagement Estudiantil',
            value: '60% aumento',
            description: 'Tiempo pasado aprendiendo activamente',
            icon: 'Activity'
          },
          {
            label: 'Satisfacción Educador',
            value: '94% calificación',
            description: 'Satisfacción de maestros con plataforma',
            icon: 'Heart'
          }
        ],
        testimonial: {
          quote: 'LearnMax ha revolucionado cómo nuestros estudiantes aprenden. La personalización potenciada por IA ha llevado a engagement y resultados de aprendizaje sin precedentes.',
          author: 'Dr. Michael Chen',
          position: 'Director de Aprendizaje Digital, EduTech University'
        }
      }
    ]
  };

  // Filter options
  const filterOptions = {
    industry: [
      { id: 'fintech', label: currentLanguage === 'en' ? 'FinTech' : 'FinTech', icon: 'CreditCard', count: 1 },
      { id: 'healthcare', label: currentLanguage === 'en' ? 'Healthcare' : 'Salud', icon: 'Heart', count: 1 },
      { id: 'ecommerce', label: currentLanguage === 'en' ? 'E-commerce' : 'E-commerce', icon: 'ShoppingCart', count: 1 },
      { id: 'education', label: currentLanguage === 'en' ? 'Education' : 'Educación', icon: 'GraduationCap', count: 1 }
    ],
    technology: [
      { id: 'react', label: 'React', icon: 'Code', count: 3 },
      { id: 'nodejs', label: 'Node.js', icon: 'Server', count: 2 },
      { id: 'python', label: 'Python', icon: 'Code2', count: 3 },
      { id: 'react-native', label: 'React Native', icon: 'Smartphone', count: 2 },
      { id: 'ai-ml', label: 'AI/ML', icon: 'Brain', count: 1 }
    ],
    projectType: [
      { id: 'mvp', label: 'MVP', icon: 'Rocket', count: 2 },
      { id: 'scaling', label: currentLanguage === 'en' ? 'Scaling' : 'Escalamiento', icon: 'TrendingUp', count: 1 },
      { id: 'transformation', label: currentLanguage === 'en' ? 'Transformation' : 'Transformación', icon: 'RefreshCw', count: 1 }
    ],
    market: [
      { id: 'us', label: currentLanguage === 'en' ? 'United States' : 'Estados Unidos', icon: 'Flag', count: 1 },
      { id: 'latin-america', label: currentLanguage === 'en' ? 'Latin America' : 'América Latina', icon: 'Globe', count: 1 },
      { id: 'international', label: currentLanguage === 'en' ? 'International' : 'Internacional', icon: 'Globe2', count: 2 }
    ]
  };

  // Filter case studies based on active filters
  const filteredCaseStudies = caseStudies[currentLanguage].filter(caseStudy => {
    return Object.entries(activeFilters).every(([filterType, selectedOptions]) => {
      if (selectedOptions.length === 0) return true;
      
      if (filterType === 'technology') {
        return selectedOptions.some(tech => {
          if (tech === 'react') return caseStudy.technologies.some(t => t.toLowerCase().includes('react'));
          if (tech === 'nodejs') return caseStudy.technologies.some(t => t.toLowerCase().includes('node'));
          if (tech === 'python') return caseStudy.technologies.some(t => t.toLowerCase().includes('python'));
          if (tech === 'react-native') return caseStudy.technologies.some(t => t.toLowerCase().includes('react native'));
          if (tech === 'ai-ml') return caseStudy.technologies.some(t => t.toLowerCase().includes('tensorflow') || t.toLowerCase().includes('ai'));
          return false;
        });
      }
      
      return selectedOptions.includes(caseStudy[filterType]);
    });
  });

  const handleFilterChange = (filterType, optionId) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(optionId)
        ? prev[filterType].filter(id => id !== optionId)
        : [...prev[filterType], optionId]
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      industry: [],
      technology: [],
      projectType: [],
      market: []
    });
  };

  const getRelatedProjects = (currentProject) => {
    return caseStudies[currentLanguage]
      .filter(project => 
        project.id !== currentProject.id && 
        (project.industry === currentProject.industry || 
         project.projectType === currentProject.projectType ||
         project.technologies.some(tech => currentProject.technologies.includes(tech)))
      )
      .slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Language Toggle */}
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {content[currentLanguage].heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              {content[currentLanguage].heroSubtitle}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                {content[currentLanguage].startProject}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover-lift"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                {content[currentLanguage].scheduleConsultation}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter and Portfolio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {content[currentLanguage].filterTitle}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {content[currentLanguage].filterSubtitle}
            </p>
          </motion.div>

          {/* Filter System */}
          <FilterSystem
            filters={filterOptions}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            language={currentLanguage}
            caseStudiesCount={filteredCaseStudies.length}
            onClearFilters={clearAllFilters}
          />

          {/* Case Studies Grid */}
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((caseStudy, index) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  caseStudy={caseStudy}
                  index={index}
                  language={currentLanguage}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {content[currentLanguage].noResults}
              </h3>
              <p className="text-text-secondary mb-4">
                {content[currentLanguage].adjustFilters}{' '}
                <button
                  onClick={clearAllFilters}
                  className="text-secondary hover:text-secondary-600 underline"
                >
                  {content[currentLanguage].clearFilters}
                </button>
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Project Deep Dive */}
      {filteredCaseStudies.length > 0 && (
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
                {currentLanguage === 'en' ? 'Featured Project Deep Dive' : 'Análisis Profundo de Proyecto Destacado'}
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {currentLanguage === 'en' ?'Explore the complete journey of our most impactful project' :'Explora el viaje completo de nuestro proyecto más impactante'
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Project Timeline */}
              <ProjectTimeline
                project={filteredCaseStudies[0]}
                language={currentLanguage}
              />

              {/* Before/After Comparison */}
              <BeforeAfterComparison
                comparison={{
                  beforeImage: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?w=600&h=400&fit=crop',
                  afterImage: filteredCaseStudies[0].heroImage,
                  improvements: [
                    {
                      metric: currentLanguage === 'en' ? 'User Experience' : 'Experiencia de Usuario',
                      before: '3.2/5',
                      after: '4.8/5',
                      improvement: '50% improvement',
                      icon: 'Star'
                    },
                    {
                      metric: currentLanguage === 'en' ? 'Performance' : 'Rendimiento',
                      before: '45/100',
                      after: '95/100',
                      improvement: '111% faster',
                      icon: 'Zap'
                    },
                    {
                      metric: currentLanguage === 'en' ? 'Conversion' : 'Conversión',
                      before: '1.8%',
                      after: '4.2%',
                      improvement: '133% increase',
                      icon: 'TrendingUp'
                    }
                  ],
                  liveDemo: filteredCaseStudies[0].liveDemo
                }}
                language={currentLanguage}
              />
            </div>

            {/* Team Spotlight */}
            <TeamSpotlight
              teamMembers={null} // Will use default team members
              language={currentLanguage}
            />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {currentLanguage === 'en' ?'Ready to Create Your Success Story?' :'¿Listo para Crear tu Historia de Éxito?'
              }
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {currentLanguage === 'en' ?'Let\'s transform your vision into a measurable business impact with our proven methodology.'
                : 'Transformemos tu visión en un impacto empresarial medible con nuestra metodología probada.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/briefing-wizard"
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                {content[currentLanguage].startProject}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 hover-lift border border-white/20"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                {content[currentLanguage].scheduleConsultation}
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

export default Work;