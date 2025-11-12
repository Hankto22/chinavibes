import React, { useState } from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import toast from 'react-hot-toast';

const Trips: React.FC = () => {
  const [formData, setFormData] = useState({
    travelDates: '',
    productInterests: '',
    groupSize: '',
    specialRequirements: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success('Trip planning request submitted! We will contact you soon.');
    setFormData({
      travelDates: '',
      productInterests: '',
      groupSize: '',
      specialRequirements: '',
      budget: ''
    });
  };

  return (
    <div className="page-container">
      <NavBar />
      <main className="main-content">
        <section className="section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">China Trips</h1>
            <p className="text-lg text-gray-600 mb-8">
              Plan your business trip to China with our expert guidance and support.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">✈ Trip Planning</h2>
                <p className="text-gray-700 mb-4">
                  Share your travel dates and product interests, and we'll help plan your itinerary.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Factory visits and supplier meetings</li>
                  <li>• Market tours and wholesale districts</li>
                  <li>• Cultural experiences and networking</li>
                  <li>• Transportation and accommodation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">📅 What We Need</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>• Travel dates (preferred and flexible)</li>
                  <li>• Product categories of interest</li>
                  <li>• Specific suppliers or regions to visit</li>
                  <li>• Group size and special requirements</li>
                  <li>• Budget considerations</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center text-2xl mb-6">📝 Plan Your China Trip</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Travel Dates *</span>
                      </label>
                      <input
                        type="text"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleChange}
                        required
                        placeholder="e.g., March 15-25, 2024"
                        className="input input-bordered input-secondary"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Group Size</span>
                      </label>
                      <select
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="select select-bordered select-secondary"
                      >
                        <option value="">Select group size</option>
                        <option value="1">1 person</option>
                        <option value="2-5">2-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="10+">10+ people</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Interests *</span>
                    </label>
                    <textarea
                      name="productInterests"
                      value={formData.productInterests}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="What products are you interested in sourcing? Any specific categories or suppliers?"
                      className="textarea textarea-bordered textarea-secondary"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Special Requirements</span>
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Dietary restrictions, accessibility needs, specific destinations, etc."
                      className="textarea textarea-bordered textarea-secondary"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Budget Considerations</span>
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., $5000-10000 per person"
                      className="input input-bordered input-secondary"
                    />
                  </div>

                  <div className="card-actions justify-center">
                    <button type="submit" className="btn btn-secondary btn-lg">
                      Submit Trip Planning Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trips;