import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services', icon: 'Settings' },
    { name: 'Process', path: '/process', icon: 'GitBranch' },
    { name: 'Work', path: '/work', icon: 'Briefcase' },
    { name: 'Briefing Wizard', path: '/briefing-wizard', icon: 'Wand2' },
    { name: 'Contact', path: '/contact', icon: 'MessageCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elevation border-b border-primary-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 hover-lift group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center shadow-subtle">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">RBC Studio</h1>
              <p className="text-xs text-text-secondary -mt-1">Digital Craftsmanship</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift ${
                  isActivePath(item.path)
                    ? 'bg-secondary text-white shadow-subtle'
                    : 'text-text-primary hover:bg-surface hover:text-secondary'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-secondary hover:bg-surface transition-all duration-300"
            >
              <Icon name="Globe" size={16} />
              <span className="uppercase font-semibold">{currentLanguage}</span>
            </button>

            {/* CTA Button */}
            <Link
              to="/briefing-wizard"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-cta transition-all duration-300 hover-lift"
            >
              <Icon name="Rocket" size={16} className="mr-2" />
              Start Project
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-surface transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 bg-background/98 backdrop-blur-md border-b border-primary-200' :'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'bg-secondary text-white shadow-subtle'
                    : 'text-text-primary hover:bg-surface hover:text-secondary'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="pt-4 border-t border-primary-200 space-y-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-3 px-4 py-3 w-full text-left rounded-lg text-base font-medium text-text-secondary hover:text-secondary hover:bg-surface transition-all duration-300"
            >
              <Icon name="Globe" size={20} />
              <span>Language: {currentLanguage.toUpperCase()}</span>
            </button>

            <Link
              to="/briefing-wizard"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300"
            >
              <Icon name="Rocket" size={20} />
              <span>Start Your Project</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;