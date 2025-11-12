import { useState } from 'react';

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
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-primary-green mb-4">Send Notification</h2>
      <div className="space-y-4">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent resize-none"
        />
        <button
          onClick={sendNotification}
          className="w-full bg-primary-green text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-200 font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}