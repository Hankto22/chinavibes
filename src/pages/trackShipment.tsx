import React, { useState } from 'react';
import NavBar from '../components/navBar';
import toast from 'react-hot-toast';

interface Shipment {
  id: string;
  status: string;
  origin: string;
  destination: string;
  eta: string;
  trackingId: string;
  currentLocation?: string;
  lastUpdate?: string;
}

export default function TrackShipment() {
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingId.trim()) {
      toast.error('Please enter a tracking ID');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock shipment data
      const mockShipment: Shipment = {
        id: trackingId,
        status: 'In Transit',
        origin: 'China - Guangzhou',
        destination: 'Kenya - Nairobi',
        eta: '2025-11-15',
        trackingId: trackingId,
        currentLocation: 'Dubai, UAE',
        lastUpdate: new Date().toLocaleString()
      };

      setShipment(mockShipment);
      toast.success('Shipment found!');
    } catch {
      toast.error('Shipment not found. Please check your tracking ID.');
      setShipment(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTrack();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Track Your Shipment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your tracking ID below to get real-time updates on your shipment status
          </p>
        </div>

        {/* Tracking Form */}
        <div className="card mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter Tracking ID (e.g., RCT001234)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-lg"
            />
            <button
              onClick={handleTrack}
              disabled={isLoading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 text-lg"
            >
              {isLoading ? 'Searching...' : 'Track Shipment'}
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>💡 <strong>Demo Tracking IDs:</strong> RCT001234, RCT005678, RCT009012</p>
          </div>
        </div>

        {/* Shipment Details */}
        {shipment && (
          <div className="space-y-6">
            {/* Status Overview */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipment Status</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Tracking ID</h3>
                  <p className="text-primary-blue font-mono">{shipment.trackingId}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Status</h3>
                  <p className="text-primary-red font-semibold">{shipment.status}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Current Location</h3>
                  <p className="text-gray-700">{shipment.currentLocation}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">ETA</h3>
                  <p className="text-primary-blue font-semibold">{shipment.eta}</p>
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Route Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Origin:</span>
                    <span className="font-semibold">{shipment.origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Destination:</span>
                    <span className="font-semibold">{shipment.destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Location:</span>
                    <span className="font-semibold text-primary-blue">{shipment.currentLocation}</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Last Update</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated:</span>
                    <span className="font-semibold">{shipment.lastUpdate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Update:</span>
                    <span className="font-semibold">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Visualization */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipment Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Order Placed - Completed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Processing - Completed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-blue rounded-full mr-3 animate-pulse"></div>
                  <span className="text-primary-blue font-semibold">In Transit - Current</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-gray-500">Delivered - Pending</span>
                </div>
              </div>
            </div>

            {/* Support Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800 mb-4">
                If you have any questions about your shipment, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="mailto:support@chinavibes.com" className="btn-outline text-center">
                  Email Support
                </a>
                <a href="tel:+254-xxx-xxx-xxx" className="btn-primary text-center">
                  Call Support
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        {!shipment && (
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Track Your Shipment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="w-12 h-12 bg-primary-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <span className="text-xl">1️⃣</span>
                </div>
                <h4 className="font-semibold mb-2">Get Tracking ID</h4>
                <p className="text-sm text-gray-600">Your tracking ID was provided in your shipment confirmation email.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-red bg-opacity-10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <span className="text-xl">2️⃣</span>
                </div>
                <h4 className="font-semibold mb-2">Enter ID</h4>
                <p className="text-sm text-gray-600">Enter your tracking ID in the field above and click Track.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <span className="text-xl">3️⃣</span>
                </div>
                <h4 className="font-semibold mb-2">View Status</h4>
                <p className="text-sm text-gray-600">Get real-time updates on your shipment location and ETA.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
