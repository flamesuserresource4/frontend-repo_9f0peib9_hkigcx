import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello Pren — from ${name || 'a visitor'}`);
    const body = encodeURIComponent(message + `\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:hello@pren.dev?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_40%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-3 text-zinc-400">Have a project in mind or just want to say hi? I’d love to hear from you.</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-2">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-2">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-zinc-300 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
              className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              placeholder="Tell me about your idea..."
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="mailto:hello@pren.dev" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white">
              <Mail size={18} /> hello@pren.dev
            </a>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
            >
              Send Message <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
