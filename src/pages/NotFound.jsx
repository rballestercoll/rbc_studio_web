import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-elevation">
            <Icon name="AlertTriangle" size={48} color="white" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/homepage"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-all duration-300 hover-lift"
          >
            <Icon name="Home" size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="flex justify-center space-x-4 text-sm">
            <Link
              to="/services"
              className="text-text-secondary hover:text-secondary transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/work"
              className="text-text-secondary hover:text-secondary transition-colors duration-300"
            >
              Our Work
            </Link>
            <Link
              to="/contact"
              className="text-text-secondary hover:text-secondary transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;