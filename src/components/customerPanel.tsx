import { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import toast from 'react-hot-toast';

interface Shipment {
  id: string;
  status: string;
  origin: string;
  destination: string;
  eta: string;
  trackingId: string;
}

export default function CustomerPanel() {
  const { role } = useAuth();
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Mock WebSocket connection for real-time updates
    const socket = new WebSocket('ws://localhost:3000/ws');
    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'shipmentStatus') {
        toast(`📦 Shipment ${msg.data.id} is now ${msg.data.status}`);
        // Optionally refresh shipment view
      }
    };
    return () => socket.close();
  }, []);

  const handleTrack = async () => {
    if (!trackingId.trim()) {
      toast.error('Please enter a tracking ID');
      return;
    }

    setIsLoading(true);
    try {
      // Mock API call - replace with actual service
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock shipment data
      const mockShipment: Shipment = {
        id: trackingId,
        status: 'In Transit',
        origin: 'China',
        destination: 'Kenya',
        eta: '2025-11-15',
        trackingId: trackingId
      };

      setShipment(mockShipment);
      toast.success('Shipment found!');
    } catch {
      toast.error('Shipment not found. Please check your ID.');
      setShipment(null);
    } finally {
      setIsLoading(false);
    }
  };

  if (role !== 'customer') {
    return <div className="min-h-screen flex items-center justify-center"><p>Access Denied</p></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="flex-1 max-w-7xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Customer Dashboard</h1>
          <p className="text-gray-600">Track your shipments and view delivery history</p>
        </div>

        {/* Track Shipment Section */}
        <div className="card mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Track Your Shipment</h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Tracking ID (e.g., RCT001234)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
            />
            <button
              onClick={handleTrack}
              disabled={isLoading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Searching...' : 'Track Shipment'}
            </button>
          </div>

          {shipment && (
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Shipment Details</h3>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Tracking ID</p>
                  <p className="font-semibold text-gray-900">{shipment.trackingId}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="font-semibold text-primary-green">{shipment.status}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Origin</p>
                  <p className="font-semibold text-gray-900">{shipment.origin}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Destination</p>
                  <p className="font-semibold text-gray-900">{shipment.destination}</p>
                </div>
                <div className="col-span-3 text-center">
                  <p className="text-sm text-gray-600">Estimated Delivery</p>
                  <p className="font-semibold text-primary-red">{shipment.eta}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-8">
          <div className="card card-hover cursor-pointer text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📦 Shipment History</h3>
            <p className="text-gray-600">View your past deliveries and performance metrics</p>
          </div>
          <div className="card card-hover cursor-pointer text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🔔 Notifications</h3>
            <p className="text-gray-600">Manage delivery alerts and update preferences</p>
          </div>
          <div className="card card-hover cursor-pointer text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📞 Support</h3>
            <p className="text-gray-600">Contact our support team for assistance</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
