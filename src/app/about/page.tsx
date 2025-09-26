'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../globals.css';

export default function About() {
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
          <Link href="/about" className="menu-item active" data-text="About" onClick={() => setMenuOpen(false)}>
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
          <Link href="/contact" className="menu-item" data-text="Contact" onClick={() => setMenuOpen(false)}>
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
            alt="About Ratnatray"
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
            <span className="title-icon">🙏</span>
            About रत्नत्रय
          </h1>
          <p className="page-subtitle">The Cultural Reflection of Jinshasan</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-intro">
            <h2 className="intro-title">A Grand Confluence of Culture & Spirituality</h2>
            <p className="intro-text">
              Ratnatray is not just a stage show – it is a <strong>grand confluence of culture, spirituality, and performing arts</strong>.
              Inspired by the eternal principles of <em>Samyak Darshan</em>, <em>Samyak Gyan</em>, and <em>Samyak Charitra</em>,
              the show presents a powerful blend of speech, music, and dance-drama, offering audiences an immersive spiritual and cultural experience.
            </p>
            <p className="intro-text">
              At its heart, Ratnatray is a unique platform of Jinshasan promotion, where speech, music, and dance come together to celebrate
              and reflect the golden purpose of Jain dharma in a modern, captivating format.
            </p>
          </div>

          {/* Principles Section */}
          <div className="principles-section">
            <h3 className="section-title">The Three Pillars</h3>
            <div className="principles-grid">
              <div className="principle-card">
                <div className="principle-icon">✨</div>
                <h4>Samyak Darshan</h4>
                <p>Right Faith & Vision - The foundation of spiritual awakening and correct perception of reality.</p>
              </div>
              <div className="principle-card">
                <div className="principle-icon">📚</div>
                <h4>Samyak Gyan</h4>
                <p>Right Knowledge - The pursuit of true understanding and wisdom through proper learning.</p>
              </div>
              <div className="principle-card">
                <div className="principle-icon">🌱</div>
                <h4>Samyak Charitra</h4>
                <p>Right Conduct - Living according to ethical principles and practicing compassion in daily life.</p>
              </div>
            </div>
          </div>

          {/* Visionary Section */}
          <div className="visionary-section">
            <h3 className="section-title">The Visionary</h3>
            <div className="visionary-content">
              <div className="visionary-image">
                <Image
                  src="/images/akash-jain.jpg"
                  alt="Sky King Akash Jain"
                  width={300}
                  height={300}
                  className="team-image"
                />
              </div>
              <div className="visionary-text">
                <h4>Sky King Akash Jain</h4>
                <p className="visionary-role">Founder, Conceptualizer & Chief Speaker</p>
                <p className="visionary-description">
                  The visionary behind this production, Sky King Akash Jain brings profound understanding of spirituality combined
                  with practical wisdom to the stage. His depth and authenticity shine through every performance. Dedicated to the
                  timeless values of Shraman culture and compassionate living, Akash Jain embodies a rare and inspiring personality
                  that touches hearts and transforms minds.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <h3 className="section-title">The Creative Force</h3>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image-wrapper">
                  <Image
                    src="/images/anuraag-jain.jpg"
                    alt="Anuraag Jain"
                    width={250}
                    height={250}
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h4>Anuraag Jain</h4>
                  <p className="team-role">Host & Anchor (AIR)</p>
                  <p className="team-desc">
                    A renowned AIR (Akashvani) broadcaster, whose powerful voice and engaging stage presence bring life, energy,
                    and emotional resonance to every moment. His graceful hosting ensures the audience stays connected throughout
                    the spiritual journey.
                  </p>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image-wrapper">
                  <Image
                    src="/images/palash-jain.jpg"
                    alt="CS Palash Jain"
                    width={250}
                    height={250}
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h4>CS Palash Jain</h4>
                  <p className="team-role">Show Manager</p>
                  <p className="team-desc">
                    Known for his dynamic personality and unwavering dedication to Jain dharma, his organizational excellence
                    ensures that Ratnatray unfolds with perfection and grandeur. Behind the scenes, he orchestrates every detail
                    with precision and passion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Team */}
          <div className="professional-team-section">
            <h3 className="section-title">The Ensemble</h3>
            <div className="team-stats">
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <span className="stat-label">Dedicated Professionals</span>
              </div>
            </div>
            <div className="team-roles">
              <div className="role-item">
                <span className="role-icon">🎭</span>
                <span>Directors & Choreographers</span>
              </div>
              <div className="role-item">
                <span className="role-icon">🎵</span>
                <span>Musicians & Vocalists</span>
              </div>
              <div className="role-item">
                <span className="role-icon">🎨</span>
                <span>Stage & Technical Designers</span>
              </div>
              <div className="role-item">
                <span className="role-icon">💃</span>
                <span>Dancers & Theatre Performers</span>
              </div>
            </div>
            <p className="team-description">
              Together, they bring to life a performance that is both visually stunning and spiritually uplifting,
              creating an unforgettable experience that resonates long after the curtain falls.
            </p>
          </div>

          {/* Call to Action */}
          <div className="about-cta">
            <h3>Experience the Magic</h3>
            <p>Join us on this spiritual and cultural journey that celebrates the essence of Jain dharma.</p>
            <div className="cta-buttons">
              <Link href="/shows" className="cta-button primary">
                <span className="button-text">View Upcoming Shows</span>
                <span className="button-icon">→</span>
              </Link>
              <Link href="/contact" className="cta-button secondary">
                <span className="button-text">Get in Touch</span>
                <span className="button-icon">📞</span>
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