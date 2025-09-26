'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../globals.css';

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="landing-page">
      {/* Home Navigation */}
      <div className="home-nav">
        <Link href="/" className="home-link">
          <Image
            src="/logo.png"
            alt="Ratnatray Home"
            width={40}
            height={40}
            className="home-logo"
          />
          <span className="home-text">Home</span>
        </Link>
      </div>

      {/* Floating Orb Navigation */}
      <div className={`nav-orb ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="orb-icon">
          <Image
            src="/logo.png"
            alt="Ratnatray"
            width={40}
            height={40}
            className="orb-logo"
          />
        </div>
        <div className="orb-pulse"></div>
        <div className="orb-pulse delay"></div>
      </div>

      {/* Radial Navigation Menu */}
      <div className={`radial-menu ${menuOpen ? 'show' : ''}`}>
        <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>
        <div className="menu-items">
          <Link href="/" className="menu-item" data-text="Home" onClick={() => setMenuOpen(false)}>
            <span className="item-icon">🏠</span>
            <span className="item-label">Home</span>
          </Link>
          <Link href="/about" className="menu-item" data-text="About" onClick={() => setMenuOpen(false)}>
            <span className="item-icon">🙏</span>
            <span className="item-label">About</span>
          </Link>
          <Link href="/experience" className="menu-item" data-text="Experience" onClick={() => setMenuOpen(false)}>
            <span className="item-icon">🎭</span>
            <span className="item-label">Experience</span>
          </Link>
          <Link href="/shows" className="menu-item" data-text="Shows" onClick={() => setMenuOpen(false)}>
            <span className="item-icon">📅</span>
            <span className="item-label">Shows</span>
          </Link>
          <Link href="/contact" className="menu-item active" data-text="Contact" onClick={() => setMenuOpen(false)}>
            <span className="item-icon">📞</span>
            <span className="item-label">Contact</span>
          </Link>
          <Link href="#book" className="menu-item special" data-text="Book Now" onClick={() => setMenuOpen(false)}>
            <span className="item-icon">🎟️</span>
            <span className="item-label">Book Now</span>
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="page-bg">
          <Image
            src="/bg.png"
            alt="Contact Us"
            fill
            className="page-bg-image"
            priority
          />
          <div className="page-overlay"></div>

          {/* Animated Gradient Orbs */}
          <div className="gradient-orbs">
            <div className="orb orb-1" style={{
              transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`
            }}></div>
            <div className="orb orb-2" style={{
              transform: `translate(${mousePos.x * -0.01}px, ${mousePos.y * -0.005}px)`
            }}></div>
          </div>
        </div>

        <div className="page-content">
          <h1 className="page-title">
            <span className="title-icon">📞</span>
            Connect With Us
          </h1>
          <p className="page-subtitle">We're here to help with all your inquiries</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h3 className="section-title">Get in Touch</h3>
              <p className="contact-intro">
                Have questions about our shows, need assistance with bookings, or want to know more about Ratnatray?
                We're here to help you every step of the way.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-info">
                    <h4>Email</h4>
                    <a href="mailto:info@ratnatrayshow.com" className="method-link">
                      info@ratnatrayshow.com
                    </a>
                    <p className="method-desc">For general inquiries and support</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-info">
                    <h4>Phone</h4>
                    <a href="tel:+91XXXXXXXXXX" className="method-link">
                      +91-XXXXXXXXXX
                    </a>
                    <p className="method-desc">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">⏰</div>
                  <div className="method-info">
                    <h4>Business Hours</h4>
                    <span className="method-text">Mon - Fri: 9:00 AM - 6:00 PM</span>
                    <p className="method-desc">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h4>Follow Our Journey</h4>
                <div className="social-links">
                  <a href="https://facebook.com" className="social-link facebook">
                    <span className="social-icon">📘</span>
                    <span className="social-name">Facebook</span>
                  </a>
                  <a href="https://instagram.com" className="social-link instagram">
                    <span className="social-icon">📷</span>
                    <span className="social-name">Instagram</span>
                  </a>
                  <a href="https://youtube.com" className="social-link youtube">
                    <span className="social-icon">📺</span>
                    <span className="social-name">YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-container">
                <h3 className="form-title">Send Us a Message</h3>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Ticket Booking</option>
                        <option value="group">Group Booking</option>
                        <option value="media">Media Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="general">General Question</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows={6}
                      required
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    <span className="btn-text">Send Message</span>
                    <span className="btn-icon">📤</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="additional-info">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🎟️</div>
                <h4>Ticket Booking</h4>
                <p>Need help with ticket booking or have questions about seating? Our team is ready to assist you.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">👥</div>
                <h4>Group Bookings</h4>
                <p>Planning to attend with a large group? Contact us for special group rates and arrangements.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📰</div>
                <h4>Media Inquiries</h4>
                <p>Press and media representatives can reach out for interviews, press releases, and media kits.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🤝</div>
                <h4>Partnerships</h4>
                <p>Interested in partnering with Ratnatray? Let's discuss collaboration opportunities.</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <h3 className="section-title">Quick Actions</h3>
            <div className="action-buttons">
              <Link href="/shows" className="action-btn primary">
                <span className="btn-icon">🎟️</span>
                <span className="btn-text">Book Tickets</span>
              </Link>
              <Link href="mailto:info@ratnatrayshow.com" className="action-btn secondary">
                <span className="btn-icon">📧</span>
                <span className="btn-text">Send Email</span>
              </Link>
              <Link href="tel:+91XXXXXXXXXX" className="action-btn secondary">
                <span className="btn-icon">📞</span>
                <span className="btn-text">Call Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Image
                src="/bg.png"
                alt="Ratnatray"
                width={80}
                height={80}
                className="footer-logo"
              />
              <div className="footer-brand-text">
                <h3>रत्नत्रय</h3>
                <p>The Cultural Reflection of Jinshasan</p>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <Link href="/" className="footer-link">Home</Link>
                <Link href="/about" className="footer-link">About</Link>
                <Link href="/experience" className="footer-link">Experience</Link>
                <Link href="/shows" className="footer-link">Shows</Link>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <Link href="/contact" className="footer-link">Contact</Link>
                <Link href="https://facebook.com" className="footer-link">Facebook</Link>
                <Link href="https://instagram.com" className="footer-link">Instagram</Link>
                <Link href="https://youtube.com" className="footer-link">YouTube</Link>
              </div>

              <div className="footer-column">
                <h4>Shows</h4>
                <span className="footer-text">AARON M.P. - Oct 7, 2025</span>
                <span className="footer-text">Mumbai - Nov 15, 2025</span>
                <span className="footer-text">Bengaluru - Nov 22, 2025</span>
                <span className="footer-text">Delhi - Nov 29, 2025</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Ratnatray. All Rights Reserved.</p>
            <p className="footer-tagline">🌟 A Grand Confluence of Culture & Spirituality</p>
          </div>
        </div>
      </footer>
    </div>
  );
}