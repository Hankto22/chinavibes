import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, role } = useAuth();

  const customerNavItems = [
    { name: 'Dashboard', path: '/dashboard/customer', icon: '🏠' },
    { name: 'Track Shipment', path: '/track', icon: '📦' },
    { name: 'Shipment History', path: '/dashboard/customer/history', icon: '📋' },
    { name: 'Notifications', path: '/dashboard/customer/notifications', icon: '🔔' },
    { name: 'Support', path: '/dashboard/customer/support', icon: '📞' },
  ];

  const adminNavItems = [
    { name: 'Dashboard', path: '/dashboard/admin', icon: '🏠' },
    { name: 'Shipments', path: '/dashboard/admin/shipments', icon: '🚢' },
    { name: 'Analytics', path: '/dashboard/admin/analytics', icon: '📈' },
    { name: 'Users', path: '/dashboard/admin/users', icon: '👥' },
    { name: 'Reports', path: '/dashboard/admin/reports', icon: '📋' },
    { name: 'Notifications', path: '/dashboard/admin/notifications', icon: '🔔' },
  ];

  const navItems = role === 'admin' ? adminNavItems : customerNavItems;

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        data-sidebar
        className={`fixed top-0 left-0 h-full w-40 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">Dashboard</span>
              <span className="text-xs text-gray-500">Navigation</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center space-x-4 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary-blue text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary-blue hover:translate-x-1'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="flex-1">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 hover:translate-x-1"
            >
              <span className="text-base">🚪</span>
              <span className="flex-1">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;