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
    <div className="wisdom-hub-page">
      <div className="wisdom-hub-top-spacer" />

      {/* Hero Header */}
      <header className="wisdom-hub-hero">
        <div className="wisdom-hub-orb wisdom-hub-orb-right" />
        <div className="wisdom-hub-orb wisdom-hub-orb-left" />

        <div className="container wisdom-hub-hero-inner">
          <div className="wisdom-hub-back-row">
            <Link
              href="/"
              className="wisdom-hub-back-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                color: '#d4af37',
                textDecoration: 'none',
                fontWeight: 800,
                textTransform: 'uppercase',
                lineHeight: 1,
                padding: '0.56rem 0.92rem',
                fontSize: '0.64rem',
                letterSpacing: '0.12em',
                background: 'rgba(0, 0, 0, 0.24)',
                border: '1px solid rgba(212, 175, 55, 0.45)',
                borderRadius: '999px',
                boxShadow: '0 8px 22px rgba(0, 0, 0, 0.2)',
              }}
            >
              ← Back Home
            </Link>
          </div>
          <div className="wisdom-hub-badge">
            <span className="wisdom-hub-badge-text">✦ Jain Philosophical Archive ✦</span>
          </div>
          <h1 className="wisdom-hub-title">
            Jain Wisdom Hub
          </h1>
          <p className="wisdom-hub-subtitle">
            Deep wisdom for a modern world. Explore the eternal teachings of Jinshasan to elevate your soul.
          </p>
        </div>
      </header>

      {/* Articles Grid */}
      <main className="wisdom-hub-main">
        <div className="wisdom-hub-grid">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="wisdom-hub-card"
            >
              <div className="wisdom-hub-card-head">
                <div>
                  <span className="wisdom-hub-readtime">
                    {article.readTime} Read
                  </span>
                  <h2 className="wisdom-hub-card-title">
                    {article.title}
                  </h2>
                  <span className="wisdom-hub-card-subtitle">{article.subtitle}</span>
                </div>
                <div className="wisdom-hub-card-icon">{article.icon}</div>
              </div>
              <div className="wisdom-hub-card-divider" />
              <p className="wisdom-hub-card-snippet">
                {article.snippet}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="wisdom-hub-cta">
          <div className="wisdom-hub-cta-orb" />
          <div className="wisdom-hub-cta-inner">
            <h2 className="wisdom-hub-cta-title">
              Experience These Teachings Live
            </h2>
            <p className="wisdom-hub-cta-text">
              Bring the wisdom of the Three Jewels to your city through an immersive Ratnatraya performance. Already touched 5+ cities across India.
            </p>
            <Link href="/#invite-form" className="wisdom-hub-cta-btn">
              Invite The Show to Your City
            </Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        .wisdom-hub-page { min-height: 100vh; background: #fffff0; color: #1a1a1a; }
        .wisdom-hub-top-spacer { height: 80px; }
        .wisdom-hub-hero { background: linear-gradient(135deg, #722f37 0%, #8b1538 100%); padding: 5rem 0 6rem; text-align: center; position: relative; overflow: hidden; }
        .wisdom-hub-orb { position: absolute; border-radius: 50%; pointer-events: none; }
        .wisdom-hub-orb-right { top: -80px; right: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%); }
        .wisdom-hub-orb-left { bottom: -80px; left: -80px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%); }
        .wisdom-hub-hero-inner { padding: 0 clamp(1rem, 5vw, 4rem); position: relative; z-index: 10; }
        .wisdom-hub-back-row { width: 100%; text-align: left; margin-bottom: 1.4rem; }
        .wisdom-hub-back-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          color: #d4af37;
          text-decoration: none;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1;
          padding: 0.56rem 0.92rem;
          font-size: 0.64rem;
          letter-spacing: 0.12em;
          background: rgba(0, 0, 0, 0.24);
          border: 1px solid rgba(212, 175, 55, 0.45);
          border-radius: 999px;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.2);
          transition: all 0.25s ease;
        }
        .wisdom-hub-back-link:hover {
          color: #1a1a1a;
          background: #d4af37;
          border-color: #f4d03f;
          transform: translateY(-1px);
          box-shadow: 0 10px 26px rgba(212, 175, 55, 0.35);
        }
        .wisdom-hub-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 9999px; padding: 0.4rem 1.2rem; margin-bottom: 1.5rem; }
        .wisdom-hub-badge-text { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.25em; text-transform: uppercase; color: #d4af37; }
        .wisdom-hub-title { font-family: var(--font-serif); font-size: clamp(2.4rem, 7vw, 5.5rem); color: #fff; line-height: 1.1; margin-bottom: 1.2rem; }
        .wisdom-hub-subtitle { color: rgba(255,255,255,0.72); font-size: clamp(0.95rem, 2.5vw, 1.1rem); line-height: 1.75; max-width: 620px; margin: 0 auto; }
        .wisdom-hub-main { max-width: 1200px; margin: 0 auto; padding: 5rem clamp(1rem, 5vw, 4rem); }
        .wisdom-hub-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; }
        .wisdom-hub-card { background: #fff; border-radius: 2.25rem; padding: 2rem; box-shadow: 0 20px 60px rgba(114,47,55,0.08), 0 0 0 1px rgba(212,175,55,0.15); display: flex; flex-direction: column; gap: 1.2rem; transition: all 0.3s ease; }
        .wisdom-hub-card-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; }
        .wisdom-hub-readtime { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: #d4af37; display: block; margin-bottom: 0.5rem; }
        .wisdom-hub-card-title { font-family: var(--font-serif); font-size: clamp(1.2rem, 3vw, 1.7rem); color: #722f37; line-height: 1.25; margin-bottom: 0.25rem; }
        .wisdom-hub-card-subtitle { font-size: 0.85rem; color: rgba(74,74,74,0.6); font-style: italic; }
        .wisdom-hub-card-icon { font-size: 2.4rem; flex-shrink: 0; line-height: 1; }
        .wisdom-hub-card-divider { width: 60px; height: 2px; background: linear-gradient(90deg, #d4af37, transparent); }
        .wisdom-hub-card-snippet { color: rgba(74,74,74,0.85); font-size: 0.98rem; line-height: 1.8; }
        .wisdom-hub-cta { margin-top: 4rem; background: linear-gradient(135deg, #722f37 0%, #8b1538 100%); color: #fff; padding: clamp(2rem, 6vw, 5rem); border-radius: 2.5rem; text-align: center; box-shadow: 0 40px 100px rgba(114,47,55,0.3); position: relative; overflow: hidden; }
        .wisdom-hub-cta-orb { position: absolute; top: -60px; right: -60px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%); border-radius: 50%; }
        .wisdom-hub-cta-inner { position: relative; z-index: 10; }
        .wisdom-hub-cta-title { font-family: var(--font-serif); font-size: clamp(1.7rem, 4vw, 3.5rem); margin-bottom: 1rem; }
        .wisdom-hub-cta-text { opacity: 0.78; font-size: clamp(0.95rem, 2.3vw, 1.05rem); line-height: 1.75; max-width: 600px; margin: 0 auto 2rem; }
        .wisdom-hub-cta-btn { background: #d4af37; color: #1a1a1a; padding: 1rem 2rem; border-radius: 9999px; font-weight: 900; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.12em; text-decoration: none; box-shadow: 0 10px 30px rgba(212,175,55,0.4); display: inline-block; transition: all 0.3s ease; }
        .wisdom-hub-cta-btn:hover { background: #f4d03f; transform: translateY(-2px); }
        @media (max-width: 1024px) {
          .wisdom-hub-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .wisdom-hub-top-spacer { height: 68px; }
          .wisdom-hub-hero { padding: 3.2rem 0 3.8rem; }
          .wisdom-hub-back-row { margin-bottom: 1rem; }
          .wisdom-hub-back-link {
            font-size: 0.6rem;
            letter-spacing: 0.1em;
            padding: 0.5rem 0.78rem;
          }
          .wisdom-hub-badge { margin-bottom: 1rem; padding: 0.35rem 0.8rem; }
          .wisdom-hub-badge-text { font-size: 0.56rem; letter-spacing: 0.15em; }
          .wisdom-hub-title { font-size: clamp(1.9rem, 9vw, 2.6rem); margin-bottom: 0.9rem; }
          .wisdom-hub-main { padding: 2.2rem 1rem 3rem; }
          .wisdom-hub-grid { gap: 1rem; }
          .wisdom-hub-card { border-radius: 1.25rem; padding: 1.1rem; gap: 0.9rem; }
          .wisdom-hub-card-icon { font-size: 1.9rem; }
          .wisdom-hub-card-snippet { font-size: 0.9rem; line-height: 1.65; }
          .wisdom-hub-cta { margin-top: 2.4rem; border-radius: 1.4rem; padding: 1.6rem 1rem; }
          .wisdom-hub-cta-btn { width: 100%; text-align: center; }
        }
      `}</style>
    </div>
  );
}
