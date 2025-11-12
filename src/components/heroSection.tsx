import React from 'react';
import './heroSection.css';

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <h1>Welcome to Red Crane Trading Co.</h1>
        <p>Your trusted partner for China trading and shipping solutions.</p>
        <button className='hero-btn'>View Services</button>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1000"
        alt="Shipping containers"
        />
      </div>
    </div>
  );
};

export default Hero;