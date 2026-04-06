'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
  {
    id: 'samyak-darshan',
    title: "What is Samyak Darshan?",
    subtitle: "The First Step to Liberation",
    snippet: "Samyak Darshan — Right Faith — is the bedrock of Jain philosophy. It is the moment the soul sheds its blindness and sees the truth of the universe: that every living being possesses an eternal, perfect soul. Without this vision, no spiritual progress is possible. The Ratnatraya teachings help devotees not just understand this intellectually, but experience it within themselves.",
    readTime: '5 min',
    icon: '🌅'
  },
  {
    id: 'three-jewels',
    title: "The Three Jewels of Jainism",
    subtitle: "Samyak Darshan, Gyan & Charitra",
    snippet: "The Ratnatraya — Samyak Darshan (Right Faith), Samyak Gyan (Right Knowledge), and Samyak Charitra (Right Conduct) — are the three pillars that together form the path to liberation (Moksha). They are not separate steps but three facets of a single unified journey. When all three align in a soul, liberation becomes inevitable.",
    readTime: '7 min',
    icon: '💎'
  },
  {
    id: 'paryushan',
    title: "Paryushan: The Festival of the Soul",
    subtitle: "Jainism's Most Sacred Days",
    snippet: "Paryushan is the most significant festival in the Jain calendar — a period of intense introspection, fasting, forgiveness, and spiritual purification. The word 'Paryushan' means 'abiding' or 'coming together'. During these auspicious days, the soul is invited to come home to itself — to rest in its own nature rather than running after the world.",
    readTime: '8 min',
    icon: '🕯️'
  },
  {
    id: 'jinshasan',
    title: "Jinshasan: The Eternal Order",
    subtitle: "Why It Matters More Than Ever",
    snippet: "Jinshasan refers to the eternal order and teachings of the Tirthankaras — the enlightened beings who have traversed the ocean of existence and shown others the way. In today's world of noise and distraction, Jinshasan offers a timeless compass: non-violence, truthfulness, and the pursuit of inner freedom. The Ratnatraya Show is dedicated to bringing this living wisdom to every city.",
    readTime: '6 min',
    icon: '☸️'
  }
];

export default function WisdomHub() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFF0', color: '#1A1A1A' }}>
      <div style={{ height: 80 }} />

      {/* Hero Header */}
      <header style={{ background: 'linear-gradient(135deg, #722F37 0%, #8B1538 100%)', padding: '5rem 0 6rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, background: 'radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)', borderRadius: '50%' }} />

        <div className="container" style={{ padding: '0 clamp(1.5rem, 5vw, 4rem)', position: 'relative', zIndex: 10 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#D4AF37', textDecoration: 'none', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            ← Back Home
          </Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '9999px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#D4AF37' }}>✦ Jain Philosophical Archive ✦</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Jain Wisdom Hub
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 600, margin: '0 auto' }}>
            Deep wisdom for a modern world. Explore the eternal teachings of Jinshasan to elevate your soul.
          </p>
        </div>
      </header>

      {/* Articles Grid */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '2.5rem' }}>
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: '#ffffff',
                borderRadius: '3rem',
                padding: '3rem',
                boxShadow: '0 20px 60px rgba(114,47,55,0.08), 0 0 0 1px rgba(212,175,55,0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'all 0.4s ease',
                cursor: 'default'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', display: 'block', marginBottom: '0.5rem' }}>
                    {article.readTime} Read
                  </span>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#722F37', lineHeight: 1.2, marginBottom: '0.25rem' }}>
                    {article.title}
                  </h2>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(74,74,74,0.6)', fontStyle: 'italic' }}>{article.subtitle}</span>
                </div>
                <div style={{ fontSize: '3rem', flexShrink: 0, lineHeight: 1 }}>{article.icon}</div>
              </div>
              <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
              <p style={{ color: 'rgba(74,74,74,0.85)', fontSize: '1rem', lineHeight: 1.9 }}>
                {article.snippet}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <section style={{
          marginTop: '5rem',
          background: 'linear-gradient(135deg, #722F37 0%, #8B1538 100%)',
          color: '#fff',
          padding: 'clamp(3rem, 6vw, 5rem)',
          borderRadius: '4rem',
          textAlign: 'center',
          boxShadow: '0 40px 100px rgba(114,47,55,0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 250, height: 250, background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
              Experience These Teachings Live
            </h2>
            <p style={{ opacity: 0.7, fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 2.5rem' }}>
              Bring the wisdom of the Three Jewels to your city through an immersive Ratnatraya performance. Already touched 5+ cities across India.
            </p>
            <Link href="/#invite-form" style={{
              background: '#D4AF37', color: '#1A1A1A', padding: '1.1rem 3rem',
              borderRadius: '9999px', fontWeight: 900, fontSize: '0.9rem',
              textTransform: 'uppercase', letterSpacing: '0.15em', textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(212,175,55,0.4)', display: 'inline-block',
              transition: 'all 0.3s ease'
            }}>
              Invite The Show to Your City
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
