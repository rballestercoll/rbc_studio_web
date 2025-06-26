import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const FilterSystem = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  language,
  caseStudiesCount,
  onClearFilters 
}) => {
  const labels = {
    en: {
      filterBy: 'Filter by',
      clearAll: 'Clear All',
      showingResults: 'Showing',
      projects: 'projects',
      allCategories: 'All Categories'
    },
    es: {
      filterBy: 'Filtrar por',
      clearAll: 'Limpiar Todo',
      showingResults: 'Mostrando',
      projects: 'proyectos',
      allCategories: 'Todas las Categorías'
    }
  };

  const filterCategories = [
    {
      id: 'industry',
      title: language === 'en' ? 'Industry' : 'Industria',
      icon: 'Building',
      options: filters.industry
    },
    {
      id: 'technology',
      title: language === 'en' ? 'Technology' : 'Tecnología',
      icon: 'Code',
      options: filters.technology
    },
    {
      id: 'projectType',
      title: language === 'en' ? 'Project Type' : 'Tipo de Proyecto',
      icon: 'Layers',
      options: filters.projectType
    },
    {
      id: 'market',
      title: language === 'en' ? 'Market' : 'Mercado',
      icon: 'Globe',
      options: filters.market
    }
  ];

  const hasActiveFilters = Object.values(activeFilters).some(filterArray => filterArray.length > 0);

  return (
    <div className="bg-white rounded-2xl shadow-subtle p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={20} className="text-secondary" />
          <h3 className="text-lg font-semibold text-primary">{labels[language].filterBy}</h3>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-text-secondary">
            {labels[language].showingResults} <span className="font-semibold text-secondary">{caseStudiesCount}</span> {labels[language].projects}
          </span>
          
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="px-3 py-1 text-sm text-text-secondary hover:text-accent transition-colors duration-300"
            >
              {labels[language].clearAll}
            </button>
          )}
        </div>
      </div>

      {/* Filter Categories */}
      <div className="space-y-6">
        {filterCategories.map((category) => (
          <div key={category.id}>
            <h4 className="flex items-center space-x-2 font-medium text-primary mb-3">
              <Icon name={category.icon} size={16} />
              <span>{category.title}</span>
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {category.options.map((option) => {
                const isActive = activeFilters[category.id]?.includes(option.id);
                
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => onFilterChange(category.id, option.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-secondary text-white shadow-subtle'
                        : 'bg-surface text-text-secondary hover:bg-secondary/10 hover:text-secondary'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option.icon && <Icon name={option.icon} size={14} />}
                    <span>{option.label}</span>
                    {option.count && (
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20' : 'bg-secondary/10 text-secondary'
                      }`}>
                        {option.count}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 pt-4 border-t border-primary-200"
        >
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([categoryId, selectedOptions]) =>
              selectedOptions.map((optionId) => {
                const category = filterCategories.find(cat => cat.id === categoryId);
                const option = category?.options.find(opt => opt.id === optionId);
                
                if (!option) return null;
                
                return (
                  <div
                    key={`${categoryId}-${optionId}`}
                    className="flex items-center space-x-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                  >
                    <span>{option.label}</span>
                    <button
                      onClick={() => onFilterChange(categoryId, optionId)}
                      className="hover:text-accent transition-colors duration-200"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FilterSystem;