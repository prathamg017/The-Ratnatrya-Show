'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../globals.css';

export default function Media() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
          <Link href="/media" className="menu-item active" data-text="Media" onClick={() => setMenuOpen(false)}>
            <span className="item-icon">📰</span>
            <span className="item-label">Media</span>
          </Link>
          <Link href="/contact" className="menu-item" data-text="Contact" onClick={() => setMenuOpen(false)}>
            <span className="item-icon">📞</span>
            <span className="item-label">Contact</span>
          </Link>
        </div>
      </div>

      {/* Coming Soon Media */}
      <section className="coming-soon-page">
        <div className="page-bg">
          <Image
            src="/bg.png"
            alt="Media Coverage Coming Soon"
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

        <div className="coming-soon-content">
          <div className="container">
            <div className="coming-soon-main">
              <div className="coming-soon-icon-large">📰</div>
              <h1 className="coming-soon-title">Media Coverage Coming Soon</h1>
              <p className="coming-soon-subtitle">Spreading the Message of Spiritual Culture</p>

              <div className="coming-soon-description">
                <p>
                  As Ratnatray makes its debut at <strong>AARON M.P. on October 7, 2025</strong>, we anticipate widespread media coverage
                  that will showcase our unique blend of spirituality, culture, and performing arts to a broader audience.
                </p>
              </div>

              <div className="preview-features">
                <h3>Expected Media Coverage</h3>
                <div className="preview-grid">
                  <div className="preview-item">
                    <span className="preview-icon">📺</span>
                    <h4>TV Interviews</h4>
                    <p>Exclusive interviews with our visionary leaders and featured artists</p>
                  </div>
                  <div className="preview-item">
                    <span className="preview-icon">📰</span>
                    <h4>Newspaper Articles</h4>
                    <p>In-depth features about the cultural significance of Ratnatray</p>
                  </div>
                  <div className="preview-item">
                    <span className="preview-icon">💬</span>
                    <h4>Audience Testimonials</h4>
                    <p>Heartfelt reviews and experiences shared by our audience members</p>
                  </div>
                  <div className="preview-item">
                    <span className="preview-icon">🎤</span>
                    <h4>Press Conferences</h4>
                    <p>Official announcements and press interactions with media houses</p>
                  </div>
                </div>
              </div>

              <div className="media-info">
                <h3>For Media Representatives</h3>
                <p>
                  Are you a member of the press interested in covering Ratnatray? We welcome media partnerships
                  and are happy to provide press kits, exclusive access, and interview opportunities.
                </p>
                <div className="media-contact">
                  <div className="media-detail">
                    <span className="media-label">Press Contact:</span>
                    <a href="mailto:press@ratnatrayshow.com" className="media-link">press@ratnatrayshow.com</a>
                  </div>
                  <div className="media-detail">
                    <span className="media-label">Media Phone:</span>
                    <a href="tel:+91XXXXXXXXXX" className="media-link">+91-XXXXXXXXXX</a>
                  </div>
                </div>
              </div>

              <div className="timeline-info">
                <div className="timeline-item">
                  <span className="timeline-date">Pre-Launch</span>
                  <span className="timeline-event">Press Kit & Media Invitations</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-date">October 7, 2025</span>
                  <span className="timeline-event">Live Coverage of Inaugural Show</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-date">Post-Launch</span>
                  <span className="timeline-event">Reviews & Feature Articles</span>
                </div>
              </div>

              <div className="coming-soon-actions">
                <Link href="/contact" className="cta-button primary">
                  <span className="button-text">Media Inquiries</span>
                  <span className="button-icon">📧</span>
                </Link>
                <Link href="/shows" className="cta-button secondary">
                  <span className="button-text">View Shows</span>
                  <span className="button-icon">📅</span>
                </Link>
              </div>
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