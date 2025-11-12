import React, { useState } from 'react';
import './contactSection.css';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock successful submission
      setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch {
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📞 Contact & Support
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our expert team for all your China trading and shipping needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-green bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:support@chinavibes.com" className="text-primary-green hover:text-secondary-green transition-colors">
                    support@chinavibes.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-red bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone & WhatsApp</h4>
                  <a href="tel:+254-xxx-xxx-xxx" className="text-primary-red hover:text-secondary-red transition-colors block">
                    +254-xxx-xxx-xxx
                  </a>
                  <a href="https://wa.me/254xxxxxxxxx" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors block mt-1">
                    WhatsApp: +254-xxx-xxx-xxx
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Available 24/7 for urgent inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-green bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                  <p className="text-sm text-gray-600">Serving East & West Africa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-red bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🕒</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EAT</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM EAT</p>
                  <p className="text-gray-600">Sunday: Emergency support only</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-blue bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Social Media</h4>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com/redcranetrading" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">📘 Facebook</a>
                    <a href="https://instagram.com/redcranetrading" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition-colors">📷 Instagram</a>
                    <a href="https://linkedin.com/company/redcranetrading" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors">💼 LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="/track" className="btn btn-outline text-center text-sm">
                  Track Shipment
                </a>
                <a href="/services" className="btn btn-primary text-center text-sm">
                  View Services
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors"
                    placeholder="+254 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="sourcing">Product Sourcing</option>
                    <option value="shipping">Shipping Inquiry</option>
                    <option value="quality">Quality Control</option>
                    <option value="market-tour">Market Tour</option>
                    <option value="china-trip">China Trip Planning</option>
                    <option value="support">General Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`mt-4 p-4 rounded-lg ${
                  submitMessage.includes('Thank you')
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;