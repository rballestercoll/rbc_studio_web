import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const BeforeAfterComparison = ({ comparison, language }) => {
  const [isAfter, setIsAfter] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const labels = {
    en: {
      beforeAfter: 'Before & After',
      before: 'Before',
      after: 'After',
      viewBefore: 'View Before',
      viewAfter: 'View After',
      improvements: 'Key Improvements',
      metrics: 'Performance Metrics',
      liveDemo: 'View Live Demo'
    },
    es: {
      beforeAfter: 'Antes y Después',
      before: 'Antes',
      after: 'Después',
      viewBefore: 'Ver Antes',
      viewAfter: 'Ver Después',
      improvements: 'Mejoras Clave',
      metrics: 'Métricas de Rendimiento',
      liveDemo: 'Ver Demo en Vivo'
    }
  };

  const defaultComparison = {
    beforeImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    improvements: [
      {
        metric: language === 'en' ? 'Page Load Time' : 'Tiempo de Carga',
        before: '4.2s',
        after: '1.8s',
        improvement: '57% faster',
        icon: 'Zap'
      },
      {
        metric: language === 'en' ? 'Conversion Rate' : 'Tasa de Conversión',
        before: '2.1%',
        after: '4.8%',
        improvement: '128% increase',
        icon: 'TrendingUp'
      },
      {
        metric: language === 'en' ? 'Mobile Score' : 'Puntuación Móvil',
        before: '65/100',
        after: '96/100',
        improvement: '48% improvement',
        icon: 'Smartphone'
      }
    ],
    liveDemo: '#'
  };

  const data = comparison || defaultComparison;

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-subtle overflow-hidden">
      <div className="p-6 border-b border-primary-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="RefreshCw" size={20} className="text-secondary" />
            <h3 className="text-xl font-semibold text-primary">{labels[language].beforeAfter}</h3>
          </div>
          
          {data.liveDemo && (
            <a
              href={data.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-accent text-white font-medium rounded-lg hover:bg-accent-600 transition-all duration-300 hover-lift"
            >
              <Icon name="ExternalLink" size={16} />
              <span className="hidden sm:inline">{labels[language].liveDemo}</span>
            </a>
          )}
        </div>
      </div>

      {/* Image Comparison */}
      <div className="relative aspect-video overflow-hidden">
        {/* Before/After Images */}
        <div className="relative w-full h-full">
          <Image
            src={data.beforeImage}
            alt={labels[language].before}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={data.afterImage}
              alt={labels[language].after}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
              <Icon name="Move" size={16} className="text-secondary" />
            </div>
          </div>
        </div>

        {/* Slider Control */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />

        {/* Before/After Labels */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full">
            {labels[language].before}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full">
            {labels[language].after}
          </span>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="p-4 bg-surface">
        <div className="flex space-x-2">
          <button
            onClick={() => {setIsAfter(false); setSliderPosition(10);}}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              !isAfter
                ? 'bg-secondary text-white' :'bg-white text-text-secondary hover:bg-secondary/10'
            }`}
          >
            {labels[language].viewBefore}
          </button>
          <button
            onClick={() => {setIsAfter(true); setSliderPosition(90);}}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              isAfter
                ? 'bg-secondary text-white' :'bg-white text-text-secondary hover:bg-secondary/10'
            }`}
          >
            {labels[language].viewAfter}
          </button>
        </div>
      </div>

      {/* Improvements */}
      <div className="p-6">
        <h4 className="font-semibold text-primary mb-4">{labels[language].improvements}</h4>
        <div className="space-y-4">
          {data.improvements.map((improvement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between p-4 bg-surface rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <Icon name={improvement.icon} size={20} className="text-secondary" />
                <span className="font-medium text-text-primary">{improvement.metric}</span>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-2 text-sm text-text-secondary mb-1">
                  <span>{improvement.before}</span>
                  <Icon name="ArrowRight" size={14} />
                  <span>{improvement.after}</span>
                </div>
                <div className="text-success font-semibold text-sm">{improvement.improvement}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;