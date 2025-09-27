'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './globals.css';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState({
    about: false,
    experience: false,
    shows: false,
    contact: false
  });
  const [, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [useVideoBackground, setUseVideoBackground] = useState(false);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section id="home" className={`hero-section ${useVideoBackground ? 'video-mode' : 'image-mode'}`}>
        {/* Background Elements */}
        <div className="hero-bg">
          {useVideoBackground ? (
            <>
              <video
                className="hero-bg-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/intro.mp4" type="video/mp4" />
              </video>
              <div className="hero-video-overlay"></div>
              {/* Golden Sparkle Effects */}
              <div className="sparkles-container">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={`sparkle sparkle-${i}`}>✨</div>
                ))}
              </div>
            </>
          ) : (
            <>
              <Image
                src="/bg.png"
                alt="Ratnatray Background"
                fill
                className="hero-bg-image"
                priority
              />
              <div className="hero-overlay"></div>
            </>
          )}

          {/* Floating Particles */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i}`}></div>
            ))}
          </div>

          {/* Animated Gradient Orbs */}
          <div className="gradient-orbs">
            <div className="orb orb-1" style={{
              transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
            }}></div>
            <div className="orb orb-2" style={{
              transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.01}px)`
            }}></div>
            <div className="orb orb-3" style={{
              transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * -0.02}px)`
            }}></div>
          </div>
        </div>

        <div className="hero-content">
          {useVideoBackground ? (
            /* Video Mode - Golden Luxury Design */
            <div className="hero-main video-hero">
              <div className="luxury-badge">
                <span className="badge-glow">🌟 Premium Spiritual Experience</span>
              </div>

              <h1 className="hero-title-luxury">
                <Image
                  src="/logo.png"
                  alt="Ratnatray Logo"
                  width={220}
                  height={220}
                  className="hero-luxury-logo"
                />
              </h1>

              <div className="luxury-subtitle">
                <div className="golden-line"></div>
                <p className="subtitle-gold">The Cultural Reflection of Jinshasan</p>
                <div className="golden-line"></div>
              </div>

              <p className="hero-description-gold">
                Witness the magnificence of ancient wisdom through
                <span className="highlight-gold">spectacular performances</span> that illuminate the soul
              </p>

              <div className="luxury-features">
                <div className="feature-item-gold">
                  <span className="feature-icon">🎭</span>
                  <span className="feature-text">Live Performances</span>
                </div>
                <div className="feature-item-gold">
                  <span className="feature-icon">🎵</span>
                  <span className="feature-text">Sacred Music</span>
                </div>
                <div className="feature-item-gold">
                  <span className="feature-icon">💃</span>
                  <span className="feature-text">Cultural Dance</span>
                </div>
                <div className="feature-item-gold">
                  <span className="feature-icon">🙏</span>
                  <span className="feature-text">Spiritual Discourse</span>
                </div>
              </div>

              <div className="luxury-cta-group">
                <Link href="#book" className="luxury-cta primary">
                  <span className="luxury-icon">👑</span>
                  <span className="luxury-text">Reserve Premium Seats</span>
                  <span className="luxury-arrow">→</span>
                </Link>
                <Link href="/about" className="luxury-cta secondary">
                  <span className="luxury-icon">✨</span>
                  <span className="luxury-text">Discover the Experience</span>
                </Link>
              </div>
            </div>
          ) : (
            /* Image Mode - Original Design */
            <div className="hero-main image-hero">
              <div className="hero-badge">
                <span>✨ Live Cultural Experience</span>
              </div>

              <h1 className="hero-title">
                <Image
                  src="/logo.png"
                  alt="Ratnatray Logo"
                  width={250}
                  height={250}
                  className="hero-main-logo"
                />
              </h1>

              <div className="hero-subtitle">
                <span className="subtitle-line"></span>
                <p>The Cultural Reflection of Jinshasan</p>
                <span className="subtitle-line"></span>
              </div>

              <p className="hero-description">
                Where ancient wisdom illuminates modern souls through the power of
                music, movement, and spiritual discourse
              </p>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">Oct 7</span>
                  <span className="stat-label">Inaugural Show</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">First</span>
                  <span className="stat-label">Grand Launch</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">AARON M.P.</span>
                  <span className="stat-label">Premiere Venue</span>
                </div>
              </div>

              <div className="hero-cta-group">
                <Link href="#book" className="cta-button primary">
                  <span className="button-text">Book Your Tickets</span>
                  <span className="button-icon">🎟️</span>
                </Link>
                <Link href="/" className="cta-button secondary">
                  <span className="button-text">Learn More About Us</span>
                  <span className="button-icon">→</span>
                </Link>
              </div>

              
            </div>
          )}

        </div>

        {/* View Toggle Button - Repositioned */}
        <div className="view-toggle-bottom">
          <button
            className={`view-toggle-btn ${useVideoBackground ? 'video-active' : 'image-active'}`}
            onClick={() => setUseVideoBackground(!useVideoBackground)}
          >
            <span className="toggle-icon">
              {useVideoBackground ? '🖼️' : '🎥'}
            </span>
            <span className="toggle-text">
              {useVideoBackground ? 'Classic View' : 'Luxury View'}
            </span>
          </button>
        </div>

      </section>

      {/* About Section - Redesigned */}
      <section id="about" className={`about-section ${isVisible.about ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon diamond-cluster">
                <span className="diamond diamond-red">∴</span>
              </span>
              About Ratnatray
            </h2>
            <div className="title-underline"></div>
          </div>

          {/* Main Introduction */}
          <div className="about-intro">
            <div className="intro-content">
              <h3 className="intro-headline">More Than Just a Stage Show</h3>
              <p className="intro-text">
                <strong>Ratnatray</strong> is a grand confluence where <span className="highlight">culture</span>,
                <span className="highlight"> spirituality</span>, and <span className="highlight">performing arts</span> unite
                to create an extraordinary experience.
              </p>
              <p className="intro-subtext">
                A powerful blend of inspiring speeches, sacred music, and mesmerizing dance-drama that offers audiences
                an immersive journey into spiritual and cultural enlightenment.
              </p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="three-pillars">
            <div className="pillars-header">
              <h3>Built on Three Eternal Principles</h3>
              <p>The foundation of Ratnatray rests on timeless wisdom</p>
            </div>
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-number">1</div>
                <div className="pillar-content">
                  <h4>Samyak Darshan</h4>
                  <span className="pillar-meaning">सम्यक दर्शन</span>
                  <p>Right Faith & Vision</p>
                  <div className="pillar-line"></div>
                </div>
              </div>
              <div className="pillar-card">
                <div className="pillar-number">2</div>
                <div className="pillar-content">
                  <h4>Samyak Gyan</h4>
                  <span className="pillar-meaning">सम्यक ज्ञान</span>
                  <p>Right Knowledge</p>
                  <div className="pillar-line"></div>
                </div>
              </div>
              <div className="pillar-card">
                <div className="pillar-number">3</div>
                <div className="pillar-content">
                  <h4>Samyak Charitra</h4>
                  <span className="pillar-meaning">सम्यक चारित्र</span>
                  <p>Right Conduct</p>
                  <div className="pillar-line"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Visionaries Section */}
          <div className="visionaries-section">
            <div className="visionaries-header">
              <h3>The Visionaries Behind Ratnatray</h3>
              <p>Meet the extraordinary individuals bringing this spiritual spectacle to life</p>
            </div>

            <div className="visionaries-grid">
              {/* Sky King Akash Jain - Featured */}
              <div className="visionary-card featured">
                <div className="visionary-image">
                  <Image
                    src="/ak.JPG"
                    alt="Sky King Akash Jain"
                    width={300}
                    height={300}
                    className="visionary-photo"
                  />
                  <div className="visionary-badge">Founder</div>
                </div>
                <div className="visionary-details">
                  <h4>Sky King Akash Jain</h4>
                  <p className="visionary-title">Founder, Conceptualizer & Chief Speaker</p>
                  <div className="visionary-divider"></div>
                  <p className="visionary-bio">
                    The visionary force behind Ratnatray. His profound understanding of spirituality
                    combined with practical wisdom brings unparalleled depth and authenticity to the stage.
                  </p>
                  <div className="visionary-highlights">
                    <span className="highlight-tag">Spiritual Leader</span>
                    <span className="highlight-tag">Shraman Culture</span>
                    <span className="highlight-tag">Compassionate Living</span>
                  </div>
                  <p className="visionary-quote">
                    &ldquo;Dedicated to timeless values, embodying a rare and inspiring personality&rdquo;
                  </p>
                </div>
              </div>

              {/* Anuraag Jain */}
              <div className="visionary-card">
                <div className="visionary-image">
                  <Image
                    src="/anurag.png"
                    alt="Anuraag Jain"
                    width={250}
                    height={250}
                    className="visionary-photo"
                  />
                  <div className="visionary-badge">Host</div>
                </div>
                <div className="visionary-details">
                  <h4>Anuraag Jain</h4>
                  <p className="visionary-title">Host & Anchor</p>
                  <div className="visionary-divider"></div>
                  <p className="visionary-bio">
                    Renowned <strong>AIR (Akashvani)</strong> broadcaster whose powerful voice and
                    engaging stage presence bring life, energy, and emotional resonance to every moment.
                  </p>
                  <div className="visionary-highlights">
                    <span className="highlight-tag">AIR Broadcaster</span>
                    <span className="highlight-tag">Master of Ceremonies</span>
                  </div>
                </div>
              </div>

              {/* CS Palash Jain */}
              <div className="visionary-card">
                <div className="visionary-image">
                  <Image
                    src="/palash.png"
                    alt="CS Palash Jain"
                    width={250}
                    height={250}
                    className="visionary-photo"
                  />
                  <div className="visionary-badge">Manager</div>
                </div>
                <div className="visionary-details">
                  <h4>CS Palash Jain</h4>
                  <p className="visionary-title">Show Manager</p>
                  <div className="visionary-divider"></div>
                  <p className="visionary-bio">
                    The operational excellence behind the scenes. His dynamic personality and
                    unwavering dedication to Jain dharma ensures perfection and grandeur.
                  </p>
                  <div className="visionary-highlights">
                    <span className="highlight-tag">Company Secretary</span>
                    <span className="highlight-tag">Jain Dharma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mission-statement">
            <div className="mission-content">
              
              <h3>A Platform for Jinshasan Promotion</h3>
              <p>
                At its heart, <strong>Ratnatray</strong> is a unique platform where speech, music, and dance
                converge to celebrate and reflect the golden purpose of <em>Jain dharma</em> in a modern,
                captivating format that resonates with contemporary audiences while preserving ancient wisdom.
              </p>
              <div className="mission-elements">
                <div className="element">
                  <span className="element-icon">🎙️</span>
                  <span>Inspiring Speeches</span>
                </div>
                <div className="element-separator">+</div>
                <div className="element">
                  <span className="element-icon">🎵</span>
                  <span>Sacred Music</span>
                </div>
                <div className="element-separator">+</div>
                <div className="element">
                  <span className="element-icon">💃</span>
                  <span>Dance Drama</span>
                </div>
                <div className="element-separator">=</div>
                <div className="element special">
                  <span className="element-icon">✨</span>
                  <span>Spiritual Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`experience-section ${isVisible.experience ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🎭</span>
              The Ratnatray Experience
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="experience-grid">
            <div className="experience-card music">
              <div className="card-header">
                <div className="card-icon">🎵</div>
                <h3>Sacred Music</h3>
              </div>
              <div className="card-content">
                <p>Soulful live compositions featuring traditional ragas, devotional bhajans, and contemporary spiritual music that touches the heart.</p>
                <ul>
                  <li>Live orchestral arrangements</li>
                  <li>Classical Jain bhajans</li>
                  <li>Modern spiritual fusion</li>
                </ul>
              </div>
            </div>

            <div className="experience-card speeches">
              <div className="card-header">
                <div className="card-icon">🎙️</div>
                <h3>Inspiring Discourses</h3>
              </div>
              <div className="card-content">
                <p>Profound speeches that seamlessly blend ancient spiritual wisdom with practical life guidance for modern audiences.</p>
                <ul>
                  <li>Philosophical insights</li>
                  <li>Practical spirituality</li>
                  <li>Interactive dialogues</li>
                </ul>
              </div>
            </div>

            <div className="experience-card dance">
              <div className="card-header">
                <div className="card-icon">💃</div>
                <h3>Cultural Dance-Drama</h3>
              </div>
              <div className="card-content">
                <p>Mesmerizing fusion of classical Indian dance forms with contemporary choreography, bringing stories to life.</p>
                <ul>
                  <li>Classical Bharatanatyam</li>
                  <li>Contemporary expressions</li>
                  <li>Theatrical storytelling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="experience-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🎨</span>
              <span>Vibrant Stage Visuals</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💡</span>
              <span>Dynamic Lighting Design</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">📱</span>
              <span>Multimedia Integration</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🎆</span>
              <span>Immersive Atmosphere</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className={`shows-section ${isVisible.shows ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">📅</span>
              Upcoming Shows
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="countdown-container">
            <h3 className="countdown-title">Next Show: AARON M.P.</h3>
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

          <div className="shows-grid">
            <div className="show-card featured">
              <div className="show-header">
                <h4>AARON M.P. Show</h4>
                <span className="show-status">Next</span>
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
              </div>
              <Link href="#book" className="show-book-btn">
                Book Now
              </Link>
            </div>

            <div className="show-card">
              <div className="show-header">
                <h4>Mumbai Show</h4>
                <span className="show-status">Coming</span>
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
              </div>
              <Link href="#book" className="show-book-btn">
                Pre-Book
              </Link>
            </div>

            <div className="show-card">
              <div className="show-header">
                <h4>Bengaluru Show</h4>
                <span className="show-status">Coming</span>
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
              </div>
              <Link href="#book" className="show-book-btn">
                Pre-Book
              </Link>
            </div>

            
          </div>
        </div>
      </section>

      {/* Gallery Section - Compact */}
      <section className="gallery-section compact">
        <div className="container">
          <div className="gallery-compact-content">
            <div className="gallery-info">
              <h3>📸 Capturing Moments of Magic</h3>
              <p>Gallery launches after October 7, 2025</p>
            </div>
            <div className="gallery-features">
              <div className="feature-item"><span className="feature-icon">📷</span><span>Behind Scenes</span></div>
              <div className="feature-item"><span className="feature-icon">🎬</span><span>Performance</span></div>
              <div className="feature-item"><span className="feature-icon">🌟</span><span>Artist Portraits</span></div>
              <div className="feature-item"><span className="feature-icon">👥</span><span>Audience</span></div>
            </div>
            <Link href="#shows" className="btn-secondary compact">View Shows →</Link>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className={`footer-section ${isVisible.contact ? 'animate-in' : ''}`}>
        <div className="container">
          {/* Contact & Booking Section */}
          <div className="contact-booking-section">
            <div className="booking-cta">
              <h3>Ready for a Spiritual Journey?</h3>
              <p>Experience the magic of Ratnatray – where culture meets spirituality</p>
              <div className="booking-buttons">
                <Link href="#book" className="btn-primary">🎟️ Book Your Tickets</Link>
              </div>
            </div>
            <div className="contact-info">
              <h3>📞 Connect With Us</h3>
              <div className="contact-details-grid">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div><strong>Email:</strong> <a href="mailto:info@ratnatrayshow.com">info@ratnatrayshow.com</a></div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div><strong>Phone:</strong> +91-XXXXXXXXXX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Brand & Heritage */}
            <div className="footer-brand-section">
              <div className="footer-brand">
                <Image
                  src="/logo.png"
                  alt="Ratnatray Logo"
                  width={80}
                  height={80}
                  className="footer-logo"
                />
                <div className="footer-brand-text">
                  <h3 className="footer-title">
                    <span className="footer-hindi">रत्नत्रय</span>
                    <span className="footer-english">RATNATRAY</span>
                  </h3>
                  <p className="footer-subtitle">The Cultural Reflection of Jinshasan</p>
                </div>
              </div>
              <div className="cultural-heritage">
                <div className="heritage-item">📿 Rooted in Jain Philosophy</div>
                <div className="heritage-item">🎭 Celebrating Indian Culture</div>
                <div className="heritage-item">✨ Promoting Spiritual Values</div>
              </div>
            </div>

            {/* Information Grid */}
            <div className="footer-grid">
              <div className="footer-column">
                <h4>Social Media</h4>
                <div className="social-links-footer">
                  <a href="https://facebook.com" className="social-link">📘 Facebook</a>
                  <a href="https://instagram.com" className="social-link">📸 Instagram</a>
                  <a href="https://youtube.com" className="social-link">📺 YouTube</a>
                  <a href="https://twitter.com" className="social-link">🐦 Twitter</a>
                </div>
              </div>

              <div className="footer-column">
                <h4>Media Partners</h4>
                <div className="media-partners">
                  <div className="partner-item-logo">
                    <span className="partner-icon">📻</span>
                    <div>
                      <strong>AIR (Akashvani)</strong>
                      <p>Radio Broadcasting Partner</p>
                    </div>
                  </div>
                  <div className="partner-item-logo">
                    <Image
                      src="/apnajainism.JPEG"
                      alt="Apna Jainism Logo"
                      width={40}
                      height={40}
                      className="partner-logo"
                    />
                    <div>
                      <strong>Apna Jainism</strong>
                      <p>Cultural Media Partner</p>
                    </div>
                  </div>
                  <div className="partner-item">🎬 Cultural Media Network</div>
                </div>
              </div>
            </div>
          </div>

          {/* Production Credits */}
          <div className="footer-credits">
            <div className="production-house">
              <Image
                src="/nirgranth1.png"
                alt="Nirgranth Creations Logo"
                width={80}
                height={80}
                className="production-logo"
              />
              <div className="production-text">
                <h4>Introduced & Presented by</h4>
                <strong>Nirgranth Creations</strong>
                <p>Dedicated to preserving and promoting Jain culture through innovative artistic expressions</p>
              </div>
            </div>
          </div>

          {/* Legal & Copyright */}
          <div className="footer-legal">
            <div className="legal-content">
              <div className="legal-left">
                <div className="copyright">
                  <span>© 2025 Ratnatray - The Cultural Reflection of Jinshasan | All Rights Reserved</span>
                  <span className="powered-by">Introduced & Powered by Nirgranth Creations</span>
                </div>
                <div className="cultural-statement">
                  <span className="statement-icon">🕉️</span>
                  <span>Dedicated to the promotion of Jinshasan through cultural excellence and spiritual enlightenment</span>
                </div>
                <div className="media-credits">
                  <span>Media Partner: Apna Jainism | Broadcasting Partner: AIR (Akashvani)</span>
                </div>
              </div>
              <div className="legal-links">
                <Link href="/terms" className="legal-link">Terms & Conditions</Link>
                <span className="separator">|</span>
                <Link href="/privacy" className="legal-link">Privacy Policy</Link>
                <span className="separator">|</span>
                <Link href="/cookies" className="legal-link">Cookie Policy</Link>
                <span className="separator">|</span>
                <Link href="/disclaimer" className="legal-link">Disclaimer</Link>
              </div>
            </div>
          </div>

          {/* Final Tagline */}
          <div className="footer-tagline">
            <span>🌟 A Grand Confluence of Culture, Spirituality & Artistic Excellence 🌟</span>
          </div>
        </div>
      </footer>

    </div>
  );
}