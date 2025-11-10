import { useEffect, useState } from 'react';
import Charts from '../charts/chart';
import { useAuth } from '../context/authContext';
import Sidebar from './sidebar';

interface Stats {
  monthlyShipments: { labels: string[]; data: number[] };
  deliverySuccess: { labels: string[]; data: number[] };
  regionalDistribution: { labels: string[]; data: number[] };
  total: number;
  successRate: number;
}

export default function AdminPanel() {
  const { role } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Mock data for demonstration
    const mockStats = {
      monthlyShipments: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        data: [65, 59, 80, 81, 56, 55]
      },
      deliverySuccess: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [85, 92, 78, 88]
      },
      regionalDistribution: {
        labels: ['Kenya', 'Ghana', 'Nigeria', 'Namibia'],
        data: [40, 25, 20, 15]
      },
      total: 296,
      successRate: 86
    };

    // Simulate API call
    setTimeout(() => {
      setStats(mockStats);
    }, 1000);
  }, []);

  if (role !== 'admin') {
    return <div className="min-h-screen flex items-center justify-center"><p>Access Denied</p></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-0">
        {/* Mobile menu button */}
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="inline-flex items-center justify-center p-1 rounded-md text-gray-700 hover:text-primary-blue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue"
          >
            <span className="sr-only">Open sidebar</span>
            <svg className="block h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="ml-3 text-lg font-semibold text-gray-900">Admin Dashboard</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor shipment analytics and manage operations</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-blue mb-2">{stats?.total || 0}</div>
            <div className="text-sm text-gray-600">Total Shipments</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-red mb-2">{stats?.successRate || 0}%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-blue mb-2">4</div>
            <div className="text-sm text-gray-600">Active Regions</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-red mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>

        {/* Charts */}
        {stats ? (
          <Charts stats={stats} />
        ) : (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading analytics...</p>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card card-hover cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 View Reports</h3>
              <p className="text-gray-600">Generate detailed shipment and performance reports</p>
            </div>
            <div className="card card-hover cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔔 Send Notifications</h3>
              <p className="text-gray-600">Push updates to customers about delivery status</p>
            </div>
            <div className="card card-hover cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">👥 Manage Users</h3>
              <p className="text-gray-600">View and update customer or staff roles</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}