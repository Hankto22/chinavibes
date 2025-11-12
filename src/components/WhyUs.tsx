import React from 'react';
import './WhyUs.css';

const WhyUs: React.FC = () => {
  return (
    <section className="what-you-get">
      <div className="container">
        <h2 className="section-title">Why Choose Red Crane Trading Co.</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚢</div>
            <h3>Reliable Shipping</h3>
            <p>
              We ensure your shipments arrive on time with comprehensive tracking
              and insurance coverage for peace of mind.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Efficient Service</h3>
            <p>
              Our expert team handles all logistics seamlessly — from sourcing
              to delivery, with transparent communication every step.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💚</div>
            <h3>Trusted Partnerships</h3>
            <p>
              Whether importing or exporting, enjoy reliable partnerships
              and competitive rates that grow your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;