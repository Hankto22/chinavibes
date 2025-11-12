import React, { useState } from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import toast from 'react-hot-toast';

const Sourcing: React.FC = () => {
  const [formData, setFormData] = useState({
    productPhoto: null as File | null,
    quantity: '',
    specifications: '',
    branding: '',
    targetPrice: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        productPhoto: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success('Sourcing request submitted! We will contact you soon.');
    setFormData({
      productPhoto: null,
      quantity: '',
      specifications: '',
      branding: '',
      targetPrice: '',
      timeline: ''
    });
  };

  return (
    <div className="page-container">
      <NavBar />
      <main className="main-content">
        <section className="section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Sourcing Guide</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your comprehensive guide to sourcing products from China with Red Crane Trading Co.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">📋 How It Works</h2>
                <ol className="space-y-3 text-gray-700">
                  <li>1. Share your product requirements</li>
                  <li>2. We research and identify suppliers</li>
                  <li>3. Supplier verification and factory visits</li>
                  <li>4. Price negotiation and samples</li>
                  <li>5. Order placement and quality control</li>
                  <li>6. Shipping and delivery tracking</li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">📩 What We Need</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>• Product photo or detailed description</li>
                  <li>• Required quantity</li>
                  <li>• Specifications and quality requirements</li>
                  <li>• Branding and packaging preferences</li>
                  <li>• Target price range</li>
                  <li>• Delivery timeline</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center text-2xl mb-6">📝 Request Sourcing</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Product Photo or Link *</span>
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="file-input file-input-bordered file-input-primary"
                      />
                      <label className="label">
                        <span className="label-text-alt">Upload product image or provide link in specifications</span>
                      </label>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quantity *</span>
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        placeholder="e.g., 1000 units"
                        className="input input-bordered input-primary"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Specifications *</span>
                    </label>
                    <textarea
                      name="specifications"
                      value={formData.specifications}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe product specifications, quality requirements, materials, etc."
                      className="textarea textarea-bordered textarea-primary"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Branding/Packaging Details</span>
                    </label>
                    <textarea
                      name="branding"
                      value={formData.branding}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Logo requirements, packaging preferences, labeling, etc."
                      className="textarea textarea-bordered textarea-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Target Price Range</span>
                      </label>
                      <input
                        type="text"
                        name="targetPrice"
                        value={formData.targetPrice}
                        onChange={handleChange}
                        placeholder="e.g., $5-10 per unit"
                        className="input input-bordered input-primary"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Delivery Timeline</span>
                      </label>
                      <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g., Within 30 days"
                        className="input input-bordered input-primary"
                      />
                    </div>
                  </div>

                  <div className="card-actions justify-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit Sourcing Request
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

export default Sourcing;