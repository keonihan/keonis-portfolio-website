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
        return <Github size={22} />;
      case 'linkedin':
        return <Linkedin size={22} />;
      case 'instagram':
        return <Instagram size={22} />;
      case 'spotify':
        return <Music size={22} />;
      case 'email':
      default:
        return <Mail size={22} />;
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
    <div className="page-view">
      <div className="container">
        <div className="page-header">
          <span className="section-tag">Let's Connect</span>
          <h1 className="page-title">Socials & Contact</h1>
          <p className="page-subtitle">
            Feel free to connect or reach out regarding projects, engineering roles, or creative work.
          </p>
        </div>

        {/* Social Link Cards */}
        <div className="socials-cards-grid">
          {profileData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-hub-card"
            >
              <div className="social-hub-icon-wrap">
                {getSocialIcon(social.name)}
              </div>
              <div className="social-hub-details">
                <span className="social-hub-name">{social.name}</span>
                <span className="social-hub-handle">{social.handle}</span>
                <span className="social-hub-desc">{social.description}</span>
              </div>
              <span className="social-hub-action">
                Open <ExternalLink size={13} />
              </span>
            </a>
          ))}
        </div>

        {/* Direct Contact Form */}
        <div className="social-form-wrapper">
          <div className="social-form-panel">
            <h3 className="social-form-title">Send a Message</h3>
            <p className="social-form-subtitle">
              Drop a note below and I'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="contact-form-inner">
              <div className="form-fields-row">
                <div className="form-field">
                  <label htmlFor="user-name">Your Name</label>
                  <input
                    id="user-name"
                    type="text"
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="user-email">Your Email</label>
                  <input
                    id="user-email"
                    type="email"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="user-msg">Message</label>
                <textarea
                  id="user-msg"
                  rows={4}
                  placeholder="Hi Keoni..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>

              {submitted && (
                <div className="alert-message alert-success">
                  <CheckCircle2 size={18} />
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
