import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function AdminNotifications() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const sendNotification = async () => {
    await fetch('/api/admin/notify', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Notification sent!');
  };

  return (
    <div>
      <h2>Send Notification</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Message" />
      <button onClick={sendNotification}>Send</button>
    </div>
  );
}
toast.success('Notification sent to all subscribers');
toast.error('Failed to send notification');