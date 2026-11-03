import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Music, Mail, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import profileData from '../data/profile.json';

export const Socials: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github size={20} className="text-blue-400" />;
      case 'linkedin':
        return <Linkedin size={20} className="text-blue-400" />;
      case 'instagram':
        return <Instagram size={20} className="text-pink-400" />;
      case 'spotify':
        return <Music size={20} className="text-emerald-400" />;
      case 'email':
      default:
        return <Mail size={20} className="text-amber-400" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 700);
  };

  return (
    <div className="min-h-[82vh] py-12 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
            Let's Connect
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Socials & Contact
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Feel free to connect or reach out regarding projects, engineering roles, or creative work.
          </p>
        </div>

        {/* Social Link Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {profileData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#0a1324]/85 hover:bg-[#101c36]/90 border border-blue-500/15 hover:border-blue-500/40 rounded-md backdrop-blur-md transition-all duration-200 flex flex-col group cursor-pointer"
            >
              <div className="w-10 h-10 rounded bg-[#101c36] border border-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                {getSocialIcon(social.name)}
              </div>
              <div className="font-bold text-white text-base mb-0.5">{social.name}</div>
              <div className="text-xs font-mono text-slate-400 mb-2 truncate">{social.handle}</div>
              <div className="text-xs text-slate-400 mb-4 flex-grow">{social.description}</div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                Open <ExternalLink size={12} />
              </span>
            </a>
          ))}
        </div>

        {/* Direct Contact Form */}
        <div className="max-w-2xl">
          <div className="p-8 bg-[#0a1324]/90 border border-blue-500/20 rounded-md backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
            <p className="text-slate-300 text-sm mb-6">
              Drop a note below and I'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="user-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-3.5 py-2.5 rounded bg-navy-950 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white text-sm transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="user-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-3.5 py-2.5 rounded bg-navy-950 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="user-msg" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="user-msg"
                  rows={4}
                  placeholder="Hi Keoni..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-3.5 py-2.5 rounded bg-navy-950 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white text-sm transition-colors"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'} <Send size={15} />
              </button>

              {submitted && (
                <div className="inline-flex items-center gap-2 p-3 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-sm font-medium w-full">
                  <CheckCircle2 size={16} />
                  <span>Message sent! Thank you for getting in touch.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
