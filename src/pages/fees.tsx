import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

const Fees = React.memo(() => {
  return (
    <div className="page-container">
      <NavBar />
      <main className="main-content">
        <section className="section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Fees</h1>
            <p className="text-lg text-gray-600 mb-8">
              Transparent pricing for all our services at Red Crane Trading Co.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">💼 Sourcing Fees</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Standard Sourcing</span>
                    <span className="font-semibold text-primary">$60–$100/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Peak Season Sourcing</span>
                    <span className="font-semibold text-primary">$80–$120/day</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Includes supplier research, verification, negotiation, and order follow-up.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">🛍 Market Tours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Standard Market Tour</span>
                    <span className="font-semibold text-primary">$60/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Peak Season Market Tour</span>
                    <span className="font-semibold text-primary">$100/day</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Includes transportation, guide, and access to wholesale markets.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">📅 Peak Season Calendar</h3>
              <p className="text-gray-700 text-center mb-4">
                Higher rates apply during Chinese New Year (Jan-Feb), Canton Fair periods, and major trade shows.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold">Jan-Feb</div>
                  <div className="text-sm text-gray-600">Chinese New Year</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold">Apr-May</div>
                  <div className="text-sm text-gray-600">Canton Fair</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold">Oct-Nov</div>
                  <div className="text-sm text-gray-600">Canton Fair</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="font-semibold">Various</div>
                  <div className="text-sm text-gray-600">Trade Shows</div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold mb-4">Need a Custom Quote?</h3>
              <p className="text-gray-600 mb-6">Contact us for personalized pricing based on your specific requirements</p>
              <button className="btn btn-primary">Get a Quote</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
});

export default Fees;