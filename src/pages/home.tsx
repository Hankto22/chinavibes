import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navBar';
import Hero from '../components/heroSection';
import ContactSection from '../components/contactSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <section id="services-section" className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-primary-blue mb-8 text-center">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card card-hover text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Sourcing</h3>
              <p className="text-gray-600">Find the best suppliers and negotiate optimal prices</p>
            </div>
            <div className="card card-hover text-center">
              <div className="text-4xl mb-4">🚢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Shipping</h3>
              <p className="text-gray-600">Air & sea freight solutions worldwide</p>
            </div>
            <div className="card card-hover text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Control</h3>
              <p className="text-gray-600">Rigorous inspection and compliance checks</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RC</span>
                </div>
                <span className="text-xl font-bold">Red Crane Trading</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted partner for China-based shipping and trading services.
                Inspired by the elegant Chinese crane — a symbol of long life and reliability.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">WhatsApp</span>
                  📱
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="/track" className="text-gray-300 hover:text-white transition-colors">Track Shipment</a></li>
                <li><a href="/login" className="text-gray-300 hover:text-white transition-colors">Login</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>📧 support@chinavibes.com</li>
                <li>📱 +254-xxx-xxx-xxx</li>
                <li>📍 Nairobi, Kenya</li>
                <li>🕒 Mon-Fri: 9AM-6PM EAT</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Red Crane Trading. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Serving Kenya, Ghana, Nigeria, Namibia and beyond with excellence in China-Africa trade.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;