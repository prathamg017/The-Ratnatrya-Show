'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function JoinTeamPage() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    skill: '',
    otherSkill: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
    { name: 'Graphic Design', icon: '🎨' },
    { name: 'Video Editing', icon: '🎬' },
    { name: 'Social Media Management', icon: '📱' },
    { name: 'Coding & Tech', icon: '💻' },
    { name: 'Content Writing', icon: '✍️' },
    { name: 'Other Expertise', icon: '✨' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillSelect = (skill: string) => {
    setFormData(prev => ({ ...prev, skill }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `💎 *Team Application: The Ratnatraya Show*\n\n` +
      `Pranam! I am interested in contributing to the movement.\n\n` +
      `👤 *Personal info:*\n` +
      `• Name: ${formData.name}\n` +
      `• WhatsApp: +91 ${formData.whatsapp}\n` +
      `• City: ${formData.city}\n\n` +
      `🚀 *Expertise:* *${formData.skill === 'Other Expertise' ? formData.otherSkill : formData.skill}*\n\n` +
      `📝 *About:* ${formData.details}\n\n` +
      `_Serving Jinshasan digitally._ 🙏`
    );
    window.open(`https://wa.me/918109224176?text=${message}`, '_blank');
    setSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20 } }
  };

  return (
    <div className="join-team-royal" style={{ 
      background: '#FAFAF8', // Balanced neutral ivory
      minHeight: '100vh', 
      color: '#1a1a1a',
      fontFamily: 'var(--font-sans)',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* 🚀 COMPACT DYNAMIC BACK BUTTON */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ 
          position: isMobile ? 'absolute' : 'fixed', 
          top: isMobile ? '24px' : '40px', 
          left: isMobile ? '20px' : '40px', 
          zIndex: 100
        }}
      >
        <Link href="/" style={{ 
          textDecoration: 'none',
          background: 'white',
          color: 'var(--maroon-deep)',
          padding: isMobile ? '10px 18px' : '14px 28px',
          borderRadius: '99px',
          boxShadow: '0 10px 25px rgba(114, 47, 55, 0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 800,
          fontSize: isMobile ? '0.7rem' : '0.85rem',
          letterSpacing: '0.08em',
          border: '1.5px solid rgba(212, 175, 55, 0.15)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.borderColor = 'var(--gold-pure)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'; }}
        >
          <span>←</span>
          {!isMobile && "BACK TO HOME"}
        </Link>
      </motion.div>

      {/* Ambiance */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '-10%', left: '-5%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, var(--gold-pure) 0%, transparent 70%)' }} 
        />
      </div>

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 10, 
        maxWidth: '960px', 
        margin: '0 auto', 
        padding: isMobile ? '80px 20px 60px' : '140px 40px 100px'
      }}>
        
        {/* HEADER SECTION */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '80px' }}
        >
          <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
            <span style={{ 
              border: '1.5px solid var(--gold-pure)', 
              color: 'var(--maroon-deep)', 
              padding: '6px 20px', 
              borderRadius: '99px', 
              fontSize: '0.7rem', 
              fontWeight: 900, 
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)'
            }}>JOIN THE REVOLUTION</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            style={{ 
              fontSize: 'clamp(2rem, 11vw, 4.8rem)', 
              fontFamily: 'var(--font-cultural)', 
              color: 'var(--maroon-deep)',
              lineHeight: 1,
              marginBottom: '20px',
              fontWeight: 400
            }}
          >
            Digital Team <span style={{ color: 'var(--gold-pure)' }}>Recruitment</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            style={{ 
              fontSize: 'clamp(0.95rem, 4vw, 1.25rem)', 
              color: '#666', 
              maxWidth: '700px', 
              margin: '0 auto', 
              lineHeight: 1.7,
              fontWeight: 500,
              opacity: 0.9
            }}
          >
            Contribute your creative force to the global Jinshasan movement. Join the team of 
            <span style={{ color: 'var(--maroon-rich)', fontWeight: 800 }}> The Ratnatraya Show</span>.
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              layout
              key="form-card"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)', 
                backdropFilter: 'blur(30px)',
                borderRadius: isMobile ? '32px' : '48px',
                padding: isMobile ? '30px 24px' : '60px 80px',
                boxShadow: '0 50px 100px -20px rgba(114, 47, 55, 0.12), 0 0 0 1px rgba(212, 175, 55, 0.08)',
                position: 'relative'
              }}
            >
              {/* Top Linear Progress Bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: '#F5F5F3', borderRadius: '48px 48px 0 0', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: formData.name && formData.whatsapp ? '100%' : '20%' }}
                  style={{ height: '100%', background: 'var(--gradient-gold)' }}
                />
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '30px' : '48px' }}>
                
                {/* 1. Base Info */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '32px' }}>
                  <div className="input-field">
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888', marginBottom: '10px', display: 'block' }}>Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Akash Jain"
                      value={formData.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      style={{ 
                        width: '100%', 
                        padding: '16px 20px', 
                        borderRadius: '16px', 
                        border: focusedField === 'name' ? '2.5px solid var(--gold-pure)' : '2.5px solid #F2F2F2', 
                        background: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        boxShadow: focusedField === 'name' ? '0 10px 20px rgba(212, 175, 55, 0.1)' : 'none'
                      }}
                    />
                  </div>
                  <div className="input-field">
                    <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888', marginBottom: '10px', display: 'block' }}>WhatsApp Number</label>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      borderRadius: '16px', 
                      overflow: 'hidden',
                      border: focusedField === 'whatsapp' ? '2.5px solid var(--gold-pure)' : '2.5px solid #F2F2F2', 
                      transition: 'all 0.3s ease',
                      boxShadow: focusedField === 'whatsapp' ? '0 10px 20px rgba(212, 175, 55, 0.1)' : 'none',
                      background: 'white'
                    }}>
                      <span style={{ 
                        padding: '16px 0 16px 20px', 
                        color: 'var(--maroon-deep)', 
                        fontWeight: 900, 
                        fontSize: '1rem',
                        opacity: 0.8
                      }}>+91</span>
                      <input
                        required
                        type="tel"
                        name="whatsapp"
                        placeholder="7000XXX..."
                        maxLength={10}
                        pattern="[0-9]{10}"
                        value={formData.whatsapp}
                        onFocus={() => setFocusedField('whatsapp')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                          setFormData(prev => ({ ...prev, whatsapp: val }));
                        }}
                        style={{ 
                          width: '100%', 
                          padding: '16px 20px 16px 8px', 
                          border: 'none',
                          background: 'transparent',
                          fontSize: '1rem',
                          outline: 'none',
                          letterSpacing: '0.05em'
                        }}
                      />
                    </div>
                    {formData.whatsapp.length > 0 && formData.whatsapp.length < 10 && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '0.65rem', color: 'var(--maroon-deep)', marginTop: '6px', fontWeight: 700 }}>Enter exactly 10 digits ({10 - formData.whatsapp.length} more)</motion.p>
                    )}
                  </div>
                </div>

                <div className="input-field">
                  <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888', marginBottom: '10px', display: 'block' }}>City Name</label>
                  <input
                    required
                    type="text"
                    name="city"
                    placeholder="Where are you from?"
                    value={formData.city}
                    onFocus={() => setFocusedField('city')}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleInputChange}
                    style={{ 
                      width: '100%', 
                      padding: '16px 20px', 
                      borderRadius: '16px', 
                      border: focusedField === 'city' ? '2.5px solid var(--gold-pure)' : '2.5px solid #F2F2F2', 
                      background: 'white',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* 2. Skill Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888' }}>Primary Area of Expertise</label>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', 
                    gap: isMobile ? '10px' : '16px' 
                  }}>
                    {skills.map((s) => (
                      <motion.button
                        key={s.name}
                        type="button"
                        whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSkillSelect(s.name)}
                        style={{ 
                          padding: isMobile ? '20px 10px' : '28px 16px',
                          borderRadius: '24px',
                          border: formData.skill === s.name ? '3px solid var(--maroon-deep)' : '1.5px solid #F5F5F5',
                          background: formData.skill === s.name ? 'white' : '#FCFCFC',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      >
                        <span style={{ fontSize: '2.2rem' }}>{s.icon}</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: formData.skill === s.name ? 'var(--maroon-deep)' : '#999', textAlign: 'center' }}>{s.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* 3. "Other" Details (Professional Animation) */}
                <AnimatePresence>
                  {formData.skill === 'Other Expertise' && (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: isMobile ? 12 : 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '24px', borderRadius: '24px', background: 'rgba(212, 175, 55, 0.05)', border: '1px dashed var(--gold-pure)', marginBottom: '16px' }}>
                         <p style={{ fontSize: '0.9rem', color: 'var(--maroon-deep)', fontWeight: 700, marginBottom: '8px' }}>✦ Special Roles & Management</p>
                         <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.5 }}>If you specialize in **Large Event Pages**, **PR & Outreach**, **Hosting**, or **Strategic Operations**, please specify above and summarize below.</p>
                      </div>
                      <input
                        required
                        type="text"
                        name="otherSkill"
                        placeholder="e.g. Web Development (Events), PR Manager..."
                        value={formData.otherSkill}
                        onChange={handleInputChange}
                        style={{ 
                          width: '100%', 
                          padding: '16px 20px', 
                          borderRadius: '16px', 
                          border: '2.5px solid var(--gold-pure)', 
                          background: 'white',
                          outline: 'none',
                          fontSize: '1rem'
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 4. Details / Portfolio */}
                <div className="input-field">
                  <label style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888', marginBottom: '10px', display: 'block' }}>Brief Summary / Portfolio Link</label>
                  <textarea
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Tell us why you are a fit for the team..."
                    style={{ 
                      width: '100%', 
                      padding: '20px', 
                      borderRadius: '24px', 
                      border: '2.5px solid #F2F2F2', 
                      background: 'white',
                      resize: 'none',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      lineHeight: 1.6
                    }}
                  />
                </div>

                {/* 5. Submit Section */}
                <div style={{ textAlign: 'center', paddingTop: isMobile ? '10px' : '20px' }}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ 
                      background: 'var(--gradient-gold)', 
                      color: 'var(--black-deep)',
                      padding: isMobile ? '20px 40px' : '26px 80px', 
                      border: 'none', 
                      borderRadius: '99px',
                      fontSize: isMobile ? '1rem' : '1.25rem',
                      fontWeight: 950,
                      cursor: 'pointer',
                      letterSpacing: '0.2rem',
                      textTransform: 'uppercase',
                      width: '100%',
                      boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)'
                    }}
                  >
                    SEND APPLICATION ✦
                  </motion.button>
                  <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#AAA', fontWeight: 600 }}>
                    Final step involves message verification on WhatsApp.
                  </p>
                </div>

              </form>
            </motion.div>
          ) : (
            <motion.div
              layout
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ 
                textAlign: 'center', 
                background: 'white', 
                padding: isMobile ? '60px 24px' : '100px 48px', 
                borderRadius: '48px', 
                boxShadow: '0 60px 120px rgba(0,0,0,0.1)',
                border: '2.5px solid var(--gold-pure)'
              }}
            >
              <h2 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-cultural)', color: 'var(--maroon-deep)', marginBottom: '20px' }}>Applied Successfully</h2>
              <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '48px', maxWidth: '440px', margin: '0 auto 48px', lineHeight: 1.7 }}>
                Excellent, {formData.name.split(' ')[0]}! To complete your submission, please send the prepared message on WhatsApp.
              </p>
              <Link
                href="/"
                style={{ 
                  textDecoration: 'none', 
                  color: 'var(--maroon-deep)', 
                  fontWeight: 900, 
                  border: '2.5px solid var(--maroon-deep)', 
                  padding: '18px 56px', 
                  borderRadius: '99px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  transition: 'all 0.4s ease'
                }}
              >
                Return to Palace
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <footer style={{ 
        textAlign: 'center', 
        padding: '80px 24px', 
        color: '#BBB', 
        fontSize: '0.75rem', 
        letterSpacing: '0.4em', 
        fontWeight: 900,
        textTransform: 'uppercase'
      }}>
        © 2026 THE RATNATRAYA SHOW • SCALING JINSHASAN
      </footer>

      <style jsx>{`
        input::placeholder, textarea::placeholder { color: #CCC; }
      `}</style>
    </div>
  );
}
