import { useEffect } from 'react';
import { useNotifications } from '../components/notifaction';

export function useRealtimeUpdates(onUpdate: (data: unknown) => void) {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000/ws');

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'analyticsUpdate') {
        onUpdate(message.data);
      }
    };

    return () => socket.close();
  }, [onUpdate]);
}

export function useShipmentUpdates(token: string) {
  const { addNotification } = useNotifications();

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:3000/ws?token=${token}`);
    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'shipmentStatus') {
        addNotification({
          title: 'Shipment Update',
          message: `Shipment ${msg.data.id} is now ${msg.data.status}`,
          timestamp: new Date(),
        });
      }
    };
    return () => socket.close();
  }, [token, addNotification]);
}
