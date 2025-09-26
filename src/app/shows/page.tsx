'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../globals.css';

export default function Shows() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const countdown = () => {
      const nextShow = new Date('2025-10-07T19:00:00').getTime();
      const now = new Date().getTime();
      const distance = nextShow - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    countdown();
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

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
          <Link href="/shows" className="menu-item active" data-text="Shows" onClick={() => setMenuOpen(false)}>
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
            alt="Upcoming Shows"
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
            <span className="title-icon">📅</span>
            Upcoming Shows
          </h1>
          <p className="page-subtitle">Reserve Your Seat for the Spiritual Journey</p>
        </div>
      </section>

      {/* Shows Content */}
      <section className="shows-content-section">
        <div className="container">
          {/* Countdown Section */}
          <div className="countdown-container">
            <h3 className="countdown-title">Next Show: AARON M.P.</h3>
            <p className="countdown-subtitle">October 7, 2025 • 7:00 PM IST</p>
            <div className="countdown-timer">
              <div className="time-unit">
                <span className="time-value">{timeLeft.days}</span>
                <span className="time-label">Days</span>
              </div>
              <div className="time-unit">
                <span className="time-value">{timeLeft.hours}</span>
                <span className="time-label">Hours</span>
              </div>
              <div className="time-unit">
                <span className="time-value">{timeLeft.minutes}</span>
                <span className="time-label">Minutes</span>
              </div>
              <div className="time-unit">
                <span className="time-value">{timeLeft.seconds}</span>
                <span className="time-label">Seconds</span>
              </div>
            </div>
          </div>

          {/* Shows Grid */}
          <div className="shows-grid">
            <div className="show-card featured">
              <div className="show-badge">Next Show</div>
              <div className="show-header">
                <h4>AARON M.P. Show</h4>
                <span className="show-status">Upcoming</span>
              </div>
              <div className="show-details">
                <div className="show-date">
                  <span className="date-icon">📅</span>
                  <span>October 7, 2025</span>
                </div>
                <div className="show-venue">
                  <span className="venue-icon">🏛️</span>
                  <span>AARON M.P. Auditorium</span>
                </div>
                <div className="show-time">
                  <span className="time-icon">🕰️</span>
                  <span>7:00 PM IST</span>
                </div>
                <div className="show-price">
                  <span className="price-icon">🎟️</span>
                  <span>Tickets Available</span>
                </div>
              </div>
              <div className="show-description">
                <p>Join us for our inaugural performance, marking the beginning of an incredible spiritual journey.</p>
              </div>
              <Link href="#book" className="show-book-btn primary">
                Book Now - Early Bird
              </Link>
            </div>

            <div className="show-card">
              <div className="show-header">
                <h4>Mumbai Show</h4>
                <span className="show-status">Coming Soon</span>
              </div>
              <div className="show-details">
                <div className="show-date">
                  <span className="date-icon">📅</span>
                  <span>November 15, 2025</span>
                </div>
                <div className="show-venue">
                  <span className="venue-icon">🌆</span>
                  <span>Mumbai Cultural Center</span>
                </div>
                <div className="show-time">
                  <span className="time-icon">🕰️</span>
                  <span>7:00 PM IST</span>
                </div>
                <div className="show-price">
                  <span className="price-icon">🎟️</span>
                  <span>Pre-booking Soon</span>
                </div>
              </div>
              <div className="show-description">
                <p>Experience Ratnatray in the vibrant cultural hub of Mumbai.</p>
              </div>
              <Link href="#notify" className="show-book-btn secondary">
                Notify Me
              </Link>
            </div>

            <div className="show-card">
              <div className="show-header">
                <h4>Bengaluru Show</h4>
                <span className="show-status">Coming Soon</span>
              </div>
              <div className="show-details">
                <div className="show-date">
                  <span className="date-icon">📅</span>
                  <span>November 22, 2025</span>
                </div>
                <div className="show-venue">
                  <span className="venue-icon">🌿</span>
                  <span>Bengaluru Arts Theatre</span>
                </div>
                <div className="show-time">
                  <span className="time-icon">🕰️</span>
                  <span>7:00 PM IST</span>
                </div>
                <div className="show-price">
                  <span className="price-icon">🎟️</span>
                  <span>Pre-booking Soon</span>
                </div>
              </div>
              <div className="show-description">
                <p>Bring the spiritual experience to the Garden City of India.</p>
              </div>
              <Link href="#notify" className="show-book-btn secondary">
                Notify Me
              </Link>
            </div>

            <div className="show-card">
              <div className="show-header">
                <h4>Delhi Show</h4>
                <span className="show-status">Coming Soon</span>
              </div>
              <div className="show-details">
                <div className="show-date">
                  <span className="date-icon">📅</span>
                  <span>November 29, 2025</span>
                </div>
                <div className="show-venue">
                  <span className="venue-icon">🏛️</span>
                  <span>Delhi Cultural Hub</span>
                </div>
                <div className="show-time">
                  <span className="time-icon">🕰️</span>
                  <span>7:00 PM IST</span>
                </div>
                <div className="show-price">
                  <span className="price-icon">🎟️</span>
                  <span>Pre-booking Soon</span>
                </div>
              </div>
              <div className="show-description">
                <p>Conclude our tour in the historic and cultural capital of India.</p>
              </div>
              <Link href="#notify" className="show-book-btn secondary">
                Notify Me
              </Link>
            </div>
          </div>

          {/* What to Expect */}
          <div className="what-to-expect">
            <h3 className="section-title">What to Expect at Our Shows</h3>
            <div className="expect-grid">
              <div className="expect-item">
                <div className="expect-icon">⏱️</div>
                <h4>Duration</h4>
                <p>2.5-3 hours of immersive experience with intermission</p>
              </div>
              <div className="expect-item">
                <div className="expect-icon">🎭</div>
                <h4>Performance</h4>
                <p>Live music, inspiring speeches, and captivating dance-drama</p>
              </div>
              <div className="expect-item">
                <div className="expect-icon">👥</div>
                <h4>Audience</h4>
                <p>Family-friendly event suitable for all ages</p>
              </div>
              <div className="expect-item">
                <div className="expect-icon">🌟</div>
                <h4>Experience</h4>
                <p>Spiritual awakening through cultural celebration</p>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="booking-info">
            <h3 className="section-title">Booking Information</h3>
            <div className="booking-grid">
              <div className="booking-item">
                <div className="booking-icon">💳</div>
                <h4>Easy Payment</h4>
                <p>Multiple payment options including UPI, cards, and net banking</p>
              </div>
              <div className="booking-item">
                <div className="booking-icon">📱</div>
                <h4>Mobile Tickets</h4>
                <p>Digital tickets delivered instantly to your phone</p>
              </div>
              <div className="booking-item">
                <div className="booking-icon">🎫</div>
                <h4>Group Bookings</h4>
                <p>Special discounts available for group bookings of 10+</p>
              </div>
              <div className="booking-item">
                <div className="booking-icon">🔄</div>
                <h4>Flexible Cancellation</h4>
                <p>Hassle-free cancellation up to 24 hours before the show</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="shows-cta">
            <h3>Don't Miss This Spiritual Journey</h3>
            <p>Secure your seats for an unforgettable experience that will touch your heart and elevate your spirit</p>
            <div className="cta-buttons">
              <Link href="#book" className="cta-button primary">
                <span className="button-text">Book Your Tickets</span>
                <span className="button-icon">🎟️</span>
              </Link>
              <Link href="/contact" className="cta-button secondary">
                <span className="button-text">Need Help?</span>
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