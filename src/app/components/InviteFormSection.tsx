'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JoinTeamSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    whatsapp: '',
    skill: '',
    otherSkill: '',
    details: ''
  });

  const skills = [
    'Graphic Design',
    'Video Editing',
    'Social Media Management',
    'Coding & Programming',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const skillText = formData.skill === 'Other' ? formData.otherSkill : formData.skill;
    
    // Build the WhatsApp message
    const message = encodeURIComponent(
      `💎 *Team Application: The Ratnatraya Show (Digital Team)*\n\n` +
      `Pranam! I would like to offer my skills to help the movement.\n\n` +
      `👤 *Details:*\n` +
      `• Name: ${formData.name}\n` +
      `• City: ${formData.city}\n` +
      `• WhatsApp: ${formData.whatsapp}\n` +
      `• Expertise: *${skillText}*\n\n` +
      `📝 *About me:* ${formData.details}\n\n` +
      `_I understand this is an unpaid opportunity to contribute to Jinshasan._ 🙏`
    );

    // Open WhatsApp
    window.open(`https://wa.me/918839481571?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="join-team" style={{ background: '#111', padding: '120px 20px', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div className="invite-badge-v3" style={{ marginBottom: '24px' }}>
            <span className="invite-badge-text-v3" style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37', border: '1px solid #D4AF37' }}>✦ JOIN THE TEAM ✦</span>
          </div>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontFamily: 'Cinzel, serif', 
            color: '#D4AF37', 
            lineHeight: 1.1,
            marginBottom: '16px' 
          }}>
            Scale Jinshasan Digitally
          </h2>
          <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '640px', margin: '0 auto' }}>
            We're recruiting designers, editors, and coders to amplify the Voice of Jainism. 
            Help us reach new heights and get recognized.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="invite-card-v3"
              style={{ 
                background: '#1A1A1A', 
                border: '1px solid rgba(212, 175, 55, 0.15)', 
                padding: 'clamp(2rem, 5vw, 5rem)',
                borderRadius: '40px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.6)'
              }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
                  <div className="invite-field-v3">
                    <label className="invite-label-v3" style={{ color: '#D4AF37' }}>Your Name</label>
                    <input
                      required
                      type="text"
                      className="invite-input-v3"
                      style={{ background: 'rgba(255,255,255,0.02)', color: 'white' }}
                      placeholder="Enter Full Name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="invite-field-v3">
                    <label className="invite-label-v3" style={{ color: '#D4AF37' }}>WhatsApp Number</label>
                    <input
                      required
                      type="tel"
                      className="invite-input-v3"
                      style={{ background: 'rgba(255,255,255,0.02)', color: 'white' }}
                      placeholder="+91 00000 00000"
                      value={formData.whatsapp}
                      onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
                  <div className="invite-field-v3">
                    <label className="invite-label-v3" style={{ color: '#D4AF37' }}>Your City</label>
                    <input
                      required
                      type="text"
                      className="invite-input-v3"
                      style={{ background: 'rgba(255,255,255,0.02)', color: 'white' }}
                      placeholder="e.g. Surat"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>

                  <div className="invite-field-v3">
                    <label className="invite-label-v3" style={{ color: '#D4AF37' }}>Primary Expertise</label>
                    <select
                      required
                      className="invite-input-v3"
                      style={{ background: 'rgba(255,255,255,0.02)', color: 'white', display: 'block', width: '100%' }}
                      value={formData.skill}
                      onChange={e => setFormData({ ...formData, skill: e.target.value })}
                    >
                      <option value="" disabled style={{ background: '#1A1A1A' }}>Choose skill</option>
                      {skills.map(s => <option key={s} value={s} style={{ background: '#1A1A1A' }}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {formData.skill === 'Other' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="invite-field-v3">
                    <label className="invite-label-v3" style={{ color: '#D4AF37' }}>Define Skill</label>
                    <input
                      type="text"
                      className="invite-input-v3"
                      style={{ background: 'rgba(255,255,255,0.02)', color: 'white' }}
                      placeholder="e.g. Copywriter"
                      value={formData.otherSkill}
                      onChange={e => setFormData({ ...formData, otherSkill: e.target.value })}
                    />
                  </motion.div>
                )}

                <div className="invite-field-v3">
                  <label className="invite-label-v3" style={{ color: '#D4AF37' }}>Portfolio / Expertise Details</label>
                  <textarea
                    className="invite-input-v3"
                    style={{ background: 'rgba(255,255,255,0.02)', color: 'white', minHeight: '120px', resize: 'none' }}
                    placeholder="Tell us about your experience or share link to your work..."
                    value={formData.details}
                    onChange={e => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <div style={{ padding: '24px', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '15px', border: '1px solid rgba(212, 175, 55, 0.1)', textAlign: 'center' }}>
                  <p style={{ margin: 0, color: '#D4AF37', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    <strong>Terms:</strong> This is a volunteer (unpaid) opportunity to help spread Jinshasan. 
                    Top contributors receive an <strong>Official Certificate</strong> and exclusive <strong>Merchandise</strong>.
                  </p>
                </div>

                <button type="submit" className="invite-submit-v3" style={{ 
                  background: 'linear-gradient(135deg, #D4AF37, #B8860B)', 
                  color: '#1A1A1A', 
                  fontWeight: 900,
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  padding: '20px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  <span className="diamond-icon">◆</span> APPLY TO JOIN THE TEAM <span className="diamond-icon">◆</span>
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', background: '#1A1A1A', padding: '80px', borderRadius: '40px', border: '1px solid #D4AF37' }}
            >
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '24px' }}>✨</span>
              <h3 style={{ fontSize: '2rem', color: '#D4AF37', fontFamily: 'Cinzel, serif', marginBottom: '16px' }}>Form Prepared!</h3>
              <p style={{ color: '#888', marginBottom: '32px' }}>Your application has been formatted for WhatsApp. Finalise the process by sending the message.</p>
              <button 
                onClick={() => { setIsSubmitted(false); setFormData({ name:'', city:'', whatsapp:'', skill:'', otherSkill:'', details:'' }); }} 
                style={{ 
                  background: 'transparent', 
                  border: '1px solid #D4AF37', 
                  color: '#D4AF37', 
                  padding: '12px 32px', 
                  borderRadius: '12px', 
                  fontWeight: 700, 
                  cursor: 'pointer' 
                }}
              >
                Apply for another role
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
