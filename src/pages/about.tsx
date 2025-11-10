import React from 'react';
import NavBar from '../components/navBar';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary-red">Red Crane Trading</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for China-based shipping and trading services,
            inspired by the elegant Chinese crane — a symbol of long life and reliability.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To bridge the gap between African businesses and Chinese manufacturers,
              providing seamless sourcing, quality control, and shipping solutions that
              empower entrepreneurs across Kenya, Ghana, Nigeria, and beyond.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔭 Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the leading Africa-China trade facilitator, known for reliability,
              transparency, and exceptional service that drives business growth and
              strengthens international partnerships.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Red Crane Trading?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Over a decade of experience in China-Africa trade with deep market knowledge.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                Consistent delivery, transparent processes, and strong supplier relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Presence</h3>
              <p className="text-gray-600">
                Strong presence in Kenya with expanding operations across East Africa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Effective</h3>
              <p className="text-gray-600">
                Competitive pricing and bulk discounts to maximize your profit margins.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control and inspection processes for every shipment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support and real-time shipment tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="card mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">📖 Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Founded with a vision to simplify China-Africa trade, Red Crane Trading began as a small
              sourcing agency in Nairobi, Kenya. What started as helping local entrepreneurs find reliable
              suppliers has grown into a comprehensive trade and logistics company serving businesses
              across East and West Africa.
            </p>
            <p className="mb-4">
              Our name, inspired by the Chinese crane, reflects our commitment to longevity, reliability,
              and graceful navigation through complex international trade waters. Just as the crane
              symbolizes prosperity and good fortune in Chinese culture, we strive to bring prosperity
              to our clients' businesses.
            </p>
            <p>
              Today, we handle everything from product sourcing and supplier verification to customs
              clearance and final delivery, ensuring a seamless experience for our clients from order
              to doorstep.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-primary-blue text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your China Trade Journey?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact us today to discuss your sourcing needs and discover how we can help grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@chinavibes.com" className="btn-secondary">
              Email Us
            </a>
            <a href="tel:+254-xxx-xxx-xxx" className="bg-white text-primary-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;