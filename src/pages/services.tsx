import React from 'react';
import NavBar from '../components/navBar';
import servicesBackground from '../assets/china-vibees-services-background.jpg.jpg';

const Services: React.FC = () => {
  const services = [
    {
      icon: '📦',
      title: 'Product Sourcing',
      description: 'We help you find the best suppliers and negotiate the best prices for your products.',
      features: ['Supplier verification', 'Price negotiation', 'Sample procurement']
    },
    {
      icon: '✅',
      title: 'Supplier Checks',
      description: 'Comprehensive background checks and verification of all potential suppliers.',
      features: ['Factory audits', 'License verification', 'Reputation checks']
    },
    {
      icon: '💬',
      title: 'Price Negotiation',
      description: 'Expert negotiation to ensure you get the best possible prices and terms.',
      features: ['Bulk discounts', 'Payment terms', 'Quality guarantees']
    },
    {
      icon: '📋',
      title: 'Order Follow-up',
      description: 'Complete order management from placement to delivery.',
      features: ['Production tracking', 'Quality updates', 'Timeline management']
    },
    {
      icon: '🔍',
      title: 'Quality Control',
      description: 'Rigorous inspection processes to ensure product quality standards.',
      features: ['Pre-shipment inspection', 'Testing protocols', 'Compliance checks']
    },
    {
      icon: '🚢',
      title: 'Shipping (Air & Sea)',
      description: 'Reliable shipping solutions via air and sea freight worldwide.',
      features: ['Customs clearance', 'Insurance coverage', 'Tracking services']
    },
    {
      icon: '🛍',
      title: 'Market Tours',
      description: 'Guided tours of major wholesale markets and manufacturing districts.',
      features: ['Expert guides', 'Transportation', 'Meeting arrangements']
    },
    {
      icon: '🗣',
      title: 'Translation',
      description: 'Professional translation services for all your business communications.',
      features: ['Business documents', 'Contract translation', 'Cultural guidance']
    },
    {
      icon: '🧳',
      title: 'China Trip Support',
      description: 'Complete support for your business trips to China.',
      features: ['Visa assistance', 'Hotel bookings', 'Itinerary planning']
    }
  ];

  const additionalServices = [
    {
      icon: '💰',
      title: 'Money Exchange',
      description: 'Currency exchange services for Kenya, Ghana & Nigeria.'
    },
    {
      icon: '🏨',
      title: 'Hotel Bookings',
      description: 'Accommodation arrangements for your China visits.'
    },
    {
      icon: '🪪',
      title: 'Visa Assistance',
      description: 'Help with visa applications for Kenya, Namibia, Ghana & Nigeria.'
    },
    {
      icon: '🎫',
      title: 'Flight Tickets',
      description: 'Flight booking services for your travel needs.'
    },
    {
      icon: '🚖',
      title: 'Airport Pick-ups',
      description: 'Ground transportation from airports to your destination.'
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/src/assets/china-vibes-background.jpg.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-primary-red">Services</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed">
            Comprehensive trading and shipping solutions tailored for African businesses
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🛠 Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive trading and shipping solutions tailored for African businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="card card-hover">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-primary-blue mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              💱 Additional Services
            </h3>
            <p className="text-lg text-gray-600">
              Supporting services to make your China business journey seamless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Sourcing Information */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📩 For Sourcing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Send us:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-primary-blue mr-3">🖼</span>
                    Product photo or link
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-blue mr-3">🔢</span>
                    Quantity
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-blue mr-3">📐</span>
                    Specifications
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-blue mr-3">🎁</span>
                    Branding/packaging details
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">✈ Visiting China?</h4>
                <p className="text-gray-700 mb-4">
                  Share your travel dates & product interests to plan your trip smoothly!
                </p>
                <div className="bg-primary-blue bg-opacity-10 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">💼 Fees:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sourcing: $60–$100/day</li>
                    <li>• Market tours: $60/day (or $100/day during peak seasons)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;