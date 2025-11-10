import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface Notification {
  title: string;
  message: string;
  timestamp: Date;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (note: Notification) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (note: Notification) => {
    setNotifications((prev) => [note, ...prev.slice(0, 9)]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useNotifications };

export function NotificationCenter() {
  const { notifications } = useNotifications();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-16 right-4 w-80 bg-white shadow-lg rounded-lg p-4 space-y-2 z-50 max-h-96 overflow-y-auto">
      <h3 className="font-semibold text-lg text-gray-900">Notifications</h3>
      {notifications.map((n, i) => (
        <div key={i} className="border-b border-gray-200 pb-2 last:border-b-0">
          <p className="font-medium text-gray-900">{n.title}</p>
          <p className="text-sm text-gray-600">{n.message}</p>
          <p className="text-xs text-gray-400">{n.timestamp.toLocaleTimeString()}</p>
        </div>
      ))}
    </div>
  );
}
