import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email',
    timezone: 'America/New_York'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    'Web Application Development',
    'Mobile App Development',
    'E-commerce Platform',
    'Digital Transformation',
    'UI/UX Design',
    'Technical Consulting',
    'Other'
  ];

  const budgetRanges = [
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+'
  ];

  const timelines = [
    'ASAP (Rush)',
    '1-2 months',
    '3-6 months',
    '6-12 months',
    'Flexible'
  ];

  const timezones = [
    { value: 'America/New_York', label: 'Eastern Time (EST/EDT)' },
    { value: 'America/Chicago', label: 'Central Time (CST/CDT)' },
    { value: 'America/Denver', label: 'Mountain Time (MST/MDT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PST/PDT)' },
    { value: 'Europe/London', label: 'London (GMT/BST)' },
    { value: 'Europe/Madrid', label: 'Madrid (CET/CEST)' },
    { value: 'Asia/Tokyo', label: 'Tokyo (JST)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        preferredContact: 'email',
        timezone: 'America/New_York'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-elevation text-center"
      >
        <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} color="white" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">Message Sent Successfully!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out. We'll review your message and get back to you within the same business day.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-all duration-300"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-elevation"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Project Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-semibold text-primary mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-primary mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-primary mb-2">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
            >
              <option value="">Select timeline</option>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline}>{timeline}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timezone" className="block text-sm font-semibold text-primary mb-2">
              Your Timezone
            </label>
            <select
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>{tz.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-vertical"
            placeholder="Tell us about your project goals, challenges, and any specific requirements..."
          />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-3">
            Preferred Contact Method
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={handleInputChange}
                className="mr-2 text-secondary focus:ring-secondary"
              />
              <Icon name="Mail" size={16} className="mr-1" />
              Email
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === 'phone'}
                onChange={handleInputChange}
                className="mr-2 text-secondary focus:ring-secondary"
              />
              <Icon name="Phone" size={16} className="mr-1" />
              Phone
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="preferredContact"
                value="video"
                checked={formData.preferredContact === 'video'}
                onChange={handleInputChange}
                className="mr-2 text-secondary focus:ring-secondary"
              />
              <Icon name="Video" size={16} className="mr-1" />
              Video Call
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover-lift flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Icon name="Send" size={20} className="mr-2" />
                Send Message
              </>
            )}
          </button>
        </div>

        {/* Response Time Notice */}
        <div className="bg-surface rounded-lg p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Icon name="Clock" size={16} className="text-trust mr-2" />
            <span className="text-sm font-semibold text-trust">Response Guarantee</span>
          </div>
          <p className="text-sm text-text-secondary">
            We respond to all inquiries within the same business day (Monday-Friday, 9 AM - 6 PM EST/CET)
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;