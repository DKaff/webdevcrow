'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Network error.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 border rounded h-32"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Send Message
        </button>
      </form>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
