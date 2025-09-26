'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../globals.css';

export default function Experience() {
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
          <Link href="/experience" className="menu-item active" data-text="Experience" onClick={() => setMenuOpen(false)}>
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
            alt="The Ratnatray Experience"
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
            <span className="title-icon">🎭</span>
            The Experience
          </h1>
          <p className="page-subtitle">A Multi-Sensory Spiritual Journey</p>
        </div>
      </section>

      {/* Experience Content */}
      <section className="experience-content-section">
        <div className="container">
          <div className="experience-intro">
            <h2 className="intro-title">Immerse Yourself in Divine Arts</h2>
            <p className="intro-text">
              Ratnatray offers a transformative experience that engages all your senses. Through the perfect harmony of music,
              speech, and dance-drama, we create moments that touch the soul and inspire the spirit.
            </p>
          </div>

          {/* Main Experience Elements */}
          <div className="experience-elements">
            <div className="element-card music-card">
              <div className="element-header">
                <div className="element-icon">🎵</div>
                <h3>Sacred Music</h3>
              </div>
              <div className="element-content">
                <p className="element-description">
                  <strong>Soulful live compositions, devotional tunes, and immersive soundscapes</strong> that transport you to a realm of pure spirituality.
                </p>
                <ul className="element-features">
                  <li>✨ Live orchestral arrangements</li>
                  <li>✨ Classical Jain bhajans and mantras</li>
                  <li>✨ Contemporary devotional fusion</li>
                  <li>✨ Immersive audio landscapes</li>
                </ul>
              </div>
            </div>

            <div className="element-card speech-card">
              <div className="element-header">
                <div className="element-icon">🎙️</div>
                <h3>Inspiring Discourses</h3>
              </div>
              <div className="element-content">
                <p className="element-description">
                  <strong>Inspiring discourses that blend spirituality with practical insights</strong>, making ancient wisdom relevant to modern life.
                </p>
                <ul className="element-features">
                  <li>✨ Philosophical insights and teachings</li>
                  <li>✨ Practical life guidance</li>
                  <li>✨ Interactive spiritual dialogues</li>
                  <li>✨ Wisdom for daily living</li>
                </ul>
              </div>
            </div>

            <div className="element-card dance-card">
              <div className="element-header">
                <div className="element-icon">💃</div>
                <h3>Dance-Drama</h3>
              </div>
              <div className="element-content">
                <p className="element-description">
                  <strong>A fusion of classical, contemporary, and theatrical storytelling</strong> that brings ancient tales to life through movement and expression.
                </p>
                <ul className="element-features">
                  <li>✨ Classical Indian dance forms</li>
                  <li>✨ Contemporary choreographic expressions</li>
                  <li>✨ Theatrical storytelling through movement</li>
                  <li>✨ Cultural narrative performances</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Production Excellence */}
          <div className="production-section">
            <h3 className="section-title">Production Excellence</h3>
            <p className="production-intro">
              Each segment is supported with vibrant visuals, stage lighting, and carefully designed multimedia elements
              to create a truly immersive experience.
            </p>

            <div className="production-grid">
              <div className="production-item">
                <div className="production-icon">🎨</div>
                <h4>Vibrant Stage Visuals</h4>
                <p>Stunning visual compositions that complement every performance element</p>
              </div>

              <div className="production-item">
                <div className="production-icon">💡</div>
                <h4>Dynamic Lighting Design</h4>
                <p>Professional lighting that creates atmosphere and enhances emotional connection</p>
              </div>

              <div className="production-item">
                <div className="production-icon">📱</div>
                <h4>Multimedia Integration</h4>
                <p>Seamless integration of technology and tradition for maximum impact</p>
              </div>

              <div className="production-item">
                <div className="production-icon">🎆</div>
                <h4>Immersive Atmosphere</h4>
                <p>Complete sensory experience that transports audiences to another realm</p>
              </div>

              <div className="production-item">
                <div className="production-icon">🎭</div>
                <h4>Professional Direction</h4>
                <p>Expert choreography and direction ensuring flawless execution</p>
              </div>

              <div className="production-item">
                <div className="production-icon">🎼</div>
                <h4>Live Musical Score</h4>
                <p>Original compositions performed live by talented musicians</p>
              </div>
            </div>
          </div>

          {/* Audience Journey */}
          <div className="journey-section">
            <h3 className="section-title">Your Spiritual Journey</h3>
            <div className="journey-timeline">
              <div className="timeline-item">
                <div className="timeline-icon">🚪</div>
                <div className="timeline-content">
                  <h4>Welcome & Arrival</h4>
                  <p>Step into a sacred space designed for spiritual awakening</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">🧘</div>
                <div className="timeline-content">
                  <h4>Opening Meditation</h4>
                  <p>Begin with moments of silence and devotional music</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">📿</div>
                <div className="timeline-content">
                  <h4>Spiritual Discourse</h4>
                  <p>Enlightening teachings that speak to the heart</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">🎭</div>
                <div className="timeline-content">
                  <h4>Cultural Performance</h4>
                  <p>Immerse in dance-drama that tells timeless stories</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">🌟</div>
                <div className="timeline-content">
                  <h4>Transformative Finale</h4>
                  <p>Leave inspired with renewed spiritual energy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="experience-cta">
            <h3>Ready for Your Spiritual Journey?</h3>
            <p>Experience the magic where ancient wisdom meets contemporary artistry</p>
            <div className="cta-buttons">
              <Link href="/shows" className="cta-button primary">
                <span className="button-text">Book Your Tickets</span>
                <span className="button-icon">🎟️</span>
              </Link>
              <Link href="/about" className="cta-button secondary">
                <span className="button-text">Learn More</span>
                <span className="button-icon">→</span>
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