import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const OfficeLocationCard = ({ location, index }) => {
  const [showMap, setShowMap] = useState(false);

  const formatTimeForTimezone = (timezone) => {
    return new Date().toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-elevation hover-lift"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">{location.city}</h3>
          <div className="text-right">
            <div className="text-sm opacity-80">Current Time</div>
            <div className="text-lg font-semibold">
              {formatTimeForTimezone(location.timezone)}
            </div>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Icon name="MapPin" size={20} className="mt-1 opacity-80" />
          <div>
            <p className="opacity-90">{location.address}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="Phone" size={20} className="text-secondary" />
            </div>
            <div>
              <div className="text-sm text-text-secondary">Phone</div>
              <div className="font-semibold text-primary">{location.phone}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-trust/10 rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={20} className="text-trust" />
            </div>
            <div>
              <div className="text-sm text-text-secondary">Business Hours</div>
              <div className="font-semibold text-primary">{location.businessHours}</div>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-3 flex items-center">
            <Icon name="Navigation" size={16} className="mr-2" />
            Getting Here
          </h4>
          <div className="space-y-2">
            {location.transportation.map((transport, transportIndex) => (
              <div key={transportIndex} className="flex items-center text-sm text-text-secondary">
                <Icon name="ArrowRight" size={14} className="mr-2 text-secondary" />
                {transport}
              </div>
            ))}
          </div>
          
          <div className="mt-3 flex items-center text-sm text-text-secondary">
            <Icon name="Car" size={14} className="mr-2 text-accent" />
            <span className="font-medium">Parking:</span>
            <span className="ml-1">{location.parking}</span>
          </div>
        </div>

        {/* Map Toggle */}
        <div className="mb-6">
          <button
            onClick={() => setShowMap(!showMap)}
            className="w-full px-4 py-3 bg-surface text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <Icon name={showMap ? "EyeOff" : "Eye"} size={16} className="mr-2" />
            {showMap ? "Hide Map" : "Show Map"}
          </button>
        </div>

        {/* Map */}
        {showMap && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <div className="w-full h-64 rounded-lg overflow-hidden border border-primary-200">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={`${location.city} Office Location`}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=15&output=embed`}
              />
            </div>
          </motion.div>
        )}

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-3">
          <a
            href={`tel:${location.phone}`}
            className="flex items-center justify-center px-4 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-all duration-300 hover-lift"
          >
            <Icon name="Phone" size={16} className="mr-2" />
            Call Office
          </a>
          
          <a
            href={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 bg-white text-secondary font-semibold rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover-lift"
          >
            <Icon name="Navigation" size={16} className="mr-2" />
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default OfficeLocationCard;