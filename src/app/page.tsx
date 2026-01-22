'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import './globals.css';


export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState({
    about: false,
    experience: false,
    shows: false,
    contact: false
  });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  // Throttle function for performance
  const throttle = (func: Function, delay: number) => {
    let lastCall = 0;
    return (...args: any[]) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  };

  useEffect(() => {
    const countdown = () => {
      const nextShow = new Date('2026-01-27T19:00:00').getTime();
      const now = new Date().getTime();
      const distance = nextShow - now;

      if (distance > 0) {
        const newTimeLeft = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
        setTimeLeft(newTimeLeft);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    countdown();
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Optimized slideshow effect - replaced with magical version below
  /* useEffect(() => {
    const slides = document.querySelectorAll('.slideshow-royal .slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;

    const nextSlide = () => {
      const next = (currentSlide + 1) % slides.length;
      slides[currentSlide]?.classList.remove('active');
      slides[next]?.classList.add('active');
      currentSlide = next;
    };

    const slideshowInterval = setInterval(nextSlide, 2500);
    return () => clearInterval(slideshowInterval);
  }, []); */

  // Optimized IntersectionObserver - only observe specific sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Only observe specific sections, not all elements with IDs
    const sections = ['about', 'experience', 'shows', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Optimized mouse move with RAF and throttling
  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        
        // Magical parallax effect for background decorations
        const bgDecorations = document.querySelector('.invites-bg-decoration') as HTMLElement;
        if (bgDecorations) {
          const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
          const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
          bgDecorations.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      });
    }, 16); // ~60fps

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Magical slideshow indicator interaction
  useEffect(() => {
    const handleIndicatorClick = (index: number) => {
      const slides = document.querySelectorAll('.slideshow-royal .slide');
      const indicators = document.querySelectorAll('.slideshow-indicators .indicator');
      
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    };

    const indicators = document.querySelectorAll('.slideshow-indicators .indicator');
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => handleIndicatorClick(index));
    });

    return () => {
      indicators.forEach((indicator, index) => {
        indicator.removeEventListener('click', () => handleIndicatorClick(index));
      });
    };
  }, []);

  // Pause slideshow on hover
  useEffect(() => {
    let slideshowInterval: NodeJS.Timeout;
    const inviteCard = document.querySelector('.premium-invite-card');
    
    const startSlideshow = () => {
      const slides = document.querySelectorAll('.slideshow-royal .slide');
      const indicators = document.querySelectorAll('.slideshow-indicators .indicator');
      if (slides.length === 0) return;
      
      let currentSlide = 0;
      
      slideshowInterval = setInterval(() => {
        const next = (currentSlide + 1) % slides.length;
        slides[currentSlide]?.classList.remove('active');
        slides[next]?.classList.add('active');
        indicators[currentSlide]?.classList.remove('active');
        indicators[next]?.classList.add('active');
        currentSlide = next;
      }, 3500);
    };

    const stopSlideshow = () => {
      if (slideshowInterval) clearInterval(slideshowInterval);
    };

    if (inviteCard) {
      inviteCard.addEventListener('mouseenter', stopSlideshow);
      inviteCard.addEventListener('mouseleave', startSlideshow);
      startSlideshow();
    }

    return () => {
      stopSlideshow();
      if (inviteCard) {
        inviteCard.removeEventListener('mouseenter', stopSlideshow);
        inviteCard.removeEventListener('mouseleave', startSlideshow);
      }
    };
  }, []);

  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section id="home" className="hero-section video-mode">
        {/* Background Elements */}
        <div className="hero-bg">
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

          {/* Floating Particles */}
          <div className="particles">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`particle particle-${i}`}></div>
            ))}
          </div>

          {/* Animated Gradient Orbs */}
          <div className="gradient-orbs">
            <div className="orb orb-1" style={{
              transform: `translate3d(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px, 0)`,
              willChange: 'transform'
            }}></div>
            <div className="orb orb-2" style={{
              transform: `translate3d(${mousePos.x * -0.01}px, ${mousePos.y * -0.005}px, 0)`,
              willChange: 'transform'
            }}></div>
            <div className="orb orb-3" style={{
              transform: `translate3d(${mousePos.x * 0.005}px, ${mousePos.y * -0.01}px, 0)`,
              willChange: 'transform'
            }}></div>
          </div>
        </div>

        <div className="hero-content">
          {/* Video Mode - Golden Luxury Design */}
          <div className="hero-main video-hero">
            <div className="luxury-badge">
              <span className="badge-glow">✦ Premium Spiritual Experience</span>
            </div>

            <h1 className="hero-title-luxury">
              <Image
                src="/logo.png"
                alt="Ratnatray Logo"
                width={300}
                height={260}
                className="hero-luxury-logo"
              />
            </h1>

            <div className="luxury-subtitle">
              <div className="golden-line"></div>
              <p className="subtitle-gold">The Cultural Reflection of Jinshasan</p>
              <div className="golden-line"></div>
            </div>

            <p className="hero-description-gold">
              Witness the magnificence of ancient wisdom through <span className="highlight-gold">spectacular performances</span> that illuminate the soul
            </p>

            {/* Event Countdown - Professional & Lavish */}
            <div className="countdown-container hero-countdown-lavish">
              <div className="countdown-header">
                <h2 className="countdown-main-title">SAGAR</h2>
                <p className="countdown-date-subtitle">January 27, 2026 • 7:00 PM</p>
              </div>
              <div className="countdown-divider-elegant"></div>
              <div className="countdown-timer-lavish">
                <div className="time-unit-lavish">
                  <div className="time-value-lavish">{timeLeft.days}</div>
                  <div className="time-label-lavish">Days</div>
                </div>
                <div className="time-separator-lavish">:</div>
                <div className="time-unit-lavish">
                  <div className="time-value-lavish">{timeLeft.hours}</div>
                  <div className="time-label-lavish">Hours</div>
                </div>
                <div className="time-separator-lavish">:</div>
                <div className="time-unit-lavish">
                  <div className="time-value-lavish">{timeLeft.minutes}</div>
                  <div className="time-label-lavish">Minutes</div>
                </div>
                <div className="time-separator-lavish">:</div>
                <div className="time-unit-lavish">
                  <div className="time-value-lavish">{timeLeft.seconds}</div>
                  <div className="time-label-lavish">Seconds</div>
                </div>
              </div>
            </div>


            {/* Recent Event Recap */}
{/* <div className="event-recap-container hero-recap">
  
  <h3 className="recap-title">Recent Event: AARON M.P.</h3>
  <div className="recap-stats">
    <div className="stat-item">
      <span className="stat-value">5000+</span>
      <span className="stat-label">Attendees</span>
    </div>
    <div className="stat-item">
      <span className="stat-value">30+</span>
      <span className="stat-label">Artists</span>
    </div>
    <div className="stat-item">
      <span className="stat-value">60+</span>
      <span className="stat-label">Passionate Event Makers</span>
    </div>
  </div>
</div> */}

       <div className="luxury-cta-group">
      <Link href="/gallery" className="luxury-cta primary">
        <span className="luxury-icon">◆</span>
        <span className="luxury-text">DIVE INTO HIGHLIGHTS</span>
        <span className="luxury-arrow">◆</span>
      </Link>
    </div>
          </div>
        </div>


      </section>

     

{/* Official Invitations Section */} 

<section className="invites-section">
  {/* Decorative background invite images - spread across entire space */}
  <div className="invites-bg-decoration">
    <div className="bg-invite bg-invite-1">
      <Image
        src="/invite.jpeg"
        alt="Background decoration"
        width={160}
        height={220}
        className="bg-invite-img"
      />
    </div>
    <div className="bg-invite bg-invite-2">
      <Image
        src="/invite1.jpeg"
        alt="Background decoration"
        width={180}
        height={240}
        className="bg-invite-img"
      />
    </div>
    <div className="bg-invite bg-invite-3">
      <Image
        src="/invite2.jpeg"
        alt="Background decoration"
        width={150}
        height={200}
        className="bg-invite-img"
      />
    </div>
    <div className="bg-invite bg-invite-4">
      <Image
        src="/invite3.jpeg"
        alt="Background decoration"
        width={170}
        height={230}
        className="bg-invite-img"
      />
    </div>
    <div className="bg-invite bg-invite-5">
      <Image
        src="/invite4.jpeg"
        alt="Background decoration"
        width={160}
        height={220}
        className="bg-invite-img"
      />
    </div>
    <div className="bg-invite bg-invite-6">
      <Image
        src="/invite.jpeg"
        alt="Background decoration"
        width={140}
        height={190}
        className="bg-invite-img"
      />
    </div>
  </div>

  <div className="container">
    <div className="section-header">
      <h2 className="section-title">
        <span className="title-icon">✨</span>
        Official Invitations
      </h2>
      <div className="title-underline"></div>
      <p className="section-subtitle">Beautifully crafted invitations for our prestigious event</p>
    </div>

    {/* Single centered invitation showcase */}
    <div className="invites-showcase-premium">
      <div className="premium-invite-card">
        <div className="premium-card-glow"></div>
        <div className="invitation-frame-premium">
          <div className="slideshow-royal">
            <div className="slide active">
              <Image
                src="/invite.jpeg"
                alt="Main Invitation"
                width={280}
                height={380}
                className="royal-image"
              />
            </div>
            <div className="slide">
              <Image
                src="/invite1.jpeg"
                alt="Creator Page"
                width={280}
                height={380}
                className="royal-image"
              />
            </div>
            <div className="slide">
              <Image
                src="/invite2.jpeg"
                alt="Creator Page"
                width={280}
                height={380}
                className="royal-image"
              />
            </div>
            <div className="slide">
              <Image
                src="/invite3.jpeg"
                alt="Event Details"
                width={280}
                height={380}
                className="royal-image"
              />
            </div>
            <div className="slide">
              <Image
                src="/invite4.jpeg"
                alt="Event Details"
                width={280}
                height={380}
                className="royal-image"
              />
            </div>
          </div>
          <div className="slideshow-indicators">
            <span className="indicator active"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
          </div>
        </div>
        <div className="premium-invite-caption">
          <p className="invite-tagline">Join us for an unforgettable spiritual journey</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Sponsors Section - Commented out for future use
<section className="sponsors-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">Our Sponsors</h2>
    </div>
    <div className="sponsor-card">
      <Image
        src="/invite.jpeg"
        alt="Santosh Jain Souabh Jain Jehru Chacha Family"
        width={220}
        height={300}
        className="royal-image"
      />
      <p className="sponsor-name">Santosh Jain, Souabh Jain & Jehru Chacha Family</p>
    </div>
  </div>
</section>
*/}


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
            <div className="intro-content-wrapper">
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
              <div className="intro-video">
                <video
                  className="about-intro-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="/introratnatray.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
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
                    src="/ak_new.JPG"
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
    <span>Speeches</span>
  </div>
  <div className="element-separator">+</div>
  <div className="element">
    <span>Sacred Music</span>
  </div>
  <div className="element-separator">+</div>
  <div className="element">
    <span>Dance</span>
  </div>
  <div className="element-separator">=</div>
  <div className="element special">
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
              <span className="title-icon">◈</span>
              The Ratnatray Experience
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="experience-container">
            <div className="experience-diagram">
              {/* Center Logo */}
              <div className="experience-center-hub">
                <div className="hub-circle">
                  {/* Solid color background instead of video */}
                  <div className="hub-solid-bg"></div>
                  <div className="hub-overlay">
                    <div className="hub-label">RATNATRAY</div>
                    <div className="hub-subtitle">Experience</div>
                  </div>
                </div>
              </div>

              {/* Three Experience Circles */}
              <div className="experience-orbit top">
                <div className="orbit-circle music">
                  <Image src="/music.png" alt="Music" width={110} height={110} className="orbit-icon-img" />
                  <svg className="curved-text-svg" viewBox="0 0 200 200">
                    <path id="curve-music" d="M 30,100 A 70,70 0 0,1 170,100" fill="transparent" />
                    <text className="curved-text">
                      <textPath href="#curve-music" startOffset="50%" textAnchor="middle">
                        संगीत
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="orbit-arrow">↓</div>
              </div>

              <div className="experience-orbit bottom-left">
                <div className="orbit-circle speeches">
                  <Image src="/mic.png" alt="Wisdom" width={110} height={110} className="orbit-icon-img" />
                  <svg className="curved-text-svg" viewBox="0 0 200 200">
                    <path id="curve-wisdom" d="M 30,100 A 70,70 0 0,1 170,100" fill="transparent" />
                    <text className="curved-text">
                      <textPath href="#curve-wisdom" startOffset="50%" textAnchor="middle">
                        ज्ञान
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="orbit-arrow">↗</div>
              </div>

              <div className="experience-orbit bottom-right">
                <div className="orbit-circle dance">
                  <Image src="/Dance.png" alt="Dance" width={110} height={110} className="orbit-icon-img" />
                  <svg className="curved-text-svg" viewBox="0 0 200 200">
                    <path id="curve-dance" d="M 30,100 A 70,70 0 0,1 170,100" fill="transparent" />
                    <text className="curved-text">
                      <textPath href="#curve-dance" startOffset="50%" textAnchor="middle">
                        नृत्य
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="orbit-arrow">↖</div>
              </div>

              {/* Connecting Lines */}
              <svg className="connection-svg" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="2" strokeDasharray="5,5"/>
                <line x1="200" y1="50" x2="200" y2="140" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="3"/>
                <line x1="80" y1="320" x2="145" y2="245" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="3"/>
                <line x1="320" y1="320" x2="255" y2="245" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="3"/>
              </svg>
            </div>

            {/* Bottom Label */}
            <div className="experience-bottom-label">
              <p>Where Music, Wisdom & Dance Unite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shows Section - Commented out for now
      <section id="shows" className={`shows-section ${isVisible.shows ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">◉</span>
              Upcoming Shows
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="shows-grid">
            <div className="show-card featured">
              <div className="show-header">
                <h4>Mumbai</h4>
                <span className="show-status">Next</span>
              </div>
              <div className="show-details">
                <div className="show-date">
                  <span className="detail-label">Date:</span>
                  <span>to be decided</span>
                </div>
                <div className="show-venue">
                  <span className="detail-label">Venue:</span>
                  <span>to be decided</span>
                </div>
                <div className="show-time">
                  <span className="detail-label">Time:</span>
                  <span>to be decided</span>
                </div>
              </div>
              <Link href="#book" className="show-book-btn">
                Book Now
              </Link>
            </div>

            <div className="show-card">
              <div className="show-header">
                <h4>Rajasthan</h4>
                <span className="show-status">Coming</span>
              </div>
              <div className="show-details">
                <div className="show-date">
                  <span className="detail-label">Date:</span>
                  <span>to be decided</span>
                </div>
                <div className="show-venue">
                  <span className="detail-label">Venue:</span>
                  <span>to be decided</span>
                </div>
                <div className="show-time">
                  <span className="detail-label">Time:</span>
                  <span>to be decided</span>
                </div>
              </div>
              <Link href="#book" className="show-book-btn">
                Pre-Book
              </Link>
            </div>

            <div className="show-card">
              <div className="show-header">
                <h4>Pune</h4>
                <span className="show-status">Coming</span>
              </div>
              <div className="show-details">
                <div className="show-date">
                  <span className="detail-label">Date:</span>
                  <span>to be decided</span>
                </div>
                <div className="show-venue">
                  <span className="detail-label">Venue:</span>
                  <span>to be decided</span>
                </div>
                <div className="show-time">
                  <span className="detail-label">Time:</span>
                  <span>to be decided</span>
                </div>
              </div>
              <Link href="#book" className="show-book-btn">
                Pre-Book
              </Link>
            </div>
          </div>
        </div>
      </section>
      */}

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
            <Link href="/gallery" className="btn-secondary compact">View Gallery →</Link>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className={`footer-section ${isVisible.contact ? 'animate-in' : ''}`}>
        <div className="container">
          
          {/* CTA Section */}
          <div className="footer-cta">
            <h2>Ready for a Spiritual Journey?</h2>
            <p>Experience the magic of Ratnatray – where culture meets spirituality</p>
            <a href="https://www.instagram.com/the_ratnatrya_show/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>📸</span>
              <span>Join Us on Instagram</span>
            </a>
          </div>

          {/* Main Footer Grid */}
          <div className="footer-grid">
            
            {/* Partners */}
            <div className="footer-column">
              <h4>Our Partners</h4>
              <div className="partners-compact">
                <div className="partner-item">
                  <Image
                    src="/apnajainism.JPEG"
                    alt="Apna Jainism"
                    width={32}
                    height={32}
                    className="partner-logo-small"
                  />
                  <span>Apna Jainism</span>
                </div>
                <div className="partner-item">
                  <span>🎙️ AIR (Akashvani)</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="footer-column">
              <h4>Contact Us</h4>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:info.therantnatrayshow@gmail.com">info.therantnatrayshow@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+91-8839481571</span>
                </div>
              </div>
            </div>

          </div>

          {/* Production Credits */}
          <div className="footer-production">
            <Image
              src="/nirgranth1.png"
              alt="Nirgranth Creations"
              width={60}
              height={60}
              className="production-logo"
            />
            <div className="production-info">
              <strong>Introduced & Presented by Nirgranth Creations</strong>
              <p>Dedicated to preserving and promoting Jain culture through innovative artistic expressions</p>
            </div>
          </div>

          {/* Legal Footer */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© 2025 Ratnatray - The Cultural Reflection of Jinshasan. All Rights Reserved.</p>
            </div>
            <div className="footer-legal-links">
              <Link href="/terms">Terms</Link>
              <span>•</span>
              <Link href="/privacy">Privacy</Link>
              <span>•</span>
              <Link href="/cookies">Cookies</Link>
              <span>•</span>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}