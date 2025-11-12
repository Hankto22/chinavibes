import React from 'react';
import './servicesSection.css';

const ServicesSection: React.FC = () => {
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
    <section className="top-meals">
      <div className="container">
        <h2 className="section-title">💱 Additional Services</h2>
        <p className="section-subtitle">
          Supporting services to make your China business journey seamless
        </p>

        <div className="meals-grid">
          {additionalServices.map((service, index) => (
            <div key={index} className="meal-card">
              <div className="meal-image">
                <div className="text-3xl">{service.icon}</div>
              </div>

              <div className="meal-content">
                <h3 className="meal-name">{service.title}</h3>
                <p className="meal-description">{service.description}</p>

                <div className="meal-footer">
                  <a href="/contact" className="order-btn">Contact Us</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sourcing Information */}
        <div className="meal-card">
          <div className="meal-content">
            <h3 className="meal-name">📩 For Sourcing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Send us:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-3">🖼</span>
                    Product photo or link
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🔢</span>
                    Quantity
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">📐</span>
                    Specifications
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">🎁</span>
                    Branding/packaging details
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">✈ Visiting China?</h4>
                <p className="mb-4">
                  Share your travel dates & product interests to plan your trip smoothly!
                </p>
                <div className="bg-opacity-10 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">💼 Fees:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Sourcing: $60–$100/day</li>
                    <li>• Market tours: $60/day (or $100/day during peak seasons)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;