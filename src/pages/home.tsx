import React from 'react';
import NavBar from '../components/navBar';
import Hero from '../components/heroSection';
import WhyUs from '../components/WhyUs';
import ServicesSection from '../components/servicesSection';
import Footer from '../components/footer';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <NavBar />
      <main className="main-content">
        <Hero />
        <WhyUs />
        <ServicesSection />

        {/* Testimonials Section */}
        <section className="section section-alt">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Africa for reliable China trading solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-green bg-opacity-10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary-green">K</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Kenyan Electronics Ltd</h4>
                    <p className="text-sm text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Red Crane Trading Co. helped us source high-quality electronics at competitive prices. Their supplier verification process gave us complete peace of mind."
                </p>
                <div className="mt-4 flex text-yellow-400">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary-red">G</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Ghana Textiles Inc</h4>
                    <p className="text-sm text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The market tours were invaluable. We found suppliers we never would have discovered on our own. Excellent service throughout."
                </p>
                <div className="mt-4 flex text-yellow-400">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary-blue">N</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Namibia Furniture Co</h4>
                    <p className="text-sm text-gray-600">Windhoek, Namibia</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "From initial contact to final delivery, everything was handled professionally. Their quality control ensured we received exactly what we ordered."
                </p>
                <div className="mt-4 flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does the sourcing process take?</h3>
                <p className="text-gray-700">Typically 2-4 weeks from initial request to supplier identification and price negotiation. Complex products may take longer.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer refunds if I'm not satisfied?</h3>
                <p className="text-gray-700">We stand behind our service. If we cannot meet your requirements, we offer full refunds for our sourcing fees. Product quality issues are handled through our supplier guarantee.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-700">We accept bank transfers, mobile money (M-Pesa, Airtel Money), and international wire transfers. Payment terms can be arranged for established clients.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you handle customs clearance?</h3>
                <p className="text-gray-700">Yes, we provide complete customs clearance services for shipments to Kenya, Ghana, Nigeria, Namibia, and other African countries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
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

            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
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
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href="/track" className="btn-outline text-center text-sm">
                    Track Shipment
                  </a>
                  <a href="/services" className="btn-primary text-center text-sm">
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;