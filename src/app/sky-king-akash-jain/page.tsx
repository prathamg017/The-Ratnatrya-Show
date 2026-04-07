'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// === DATA SCHEMAS — For Rich Results ===
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://theratnatrayashow.com/sky-king-akash-jain#person',
  name: 'Sky King Akash Jain',
  alternateName: ['Akash Jain', 'Sky King Akash', 'Akash Jain Nirgranth', 'Akash Jain Ratnatraya'],
  description: 'Sky King Akash Jain is a prominent Jain entrepreneur, digital innovator, founder of Nirgranth Creation and The Ratnatraya Show.',
  url: 'https://theratnatrayashow.com/sky-king-akash-jain',
  image: 'https://theratnatrayashow.com/akashpp.jpeg',
  jobTitle: 'Founder & CEO',
  worksFor: [
    { '@type': 'Organization', name: 'Nirgranth Creation', url: 'https://theratnatrayashow.com' },
    { '@type': 'Organization', name: 'The Ratnatraya Show', url: 'https://theratnatrayashow.com' },
  ],
  knowsAbout: ['Jainism', 'Digital Branding', 'Jinshasan Prabhavna'],
  nationality: { '@type': 'Country', name: 'India' },
  sameAs: [
    'https://www.instagram.com/the_ratnatrya_show/',
    'https://www.instagram.com/sky_king_akash_jain/',
    'https://linkedin.com/in/akashjain-skyking'
  ],
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://theratnatrayashow.com/sky-king-akash-jain' }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://theratnatrayashow.com/sky-king-akash-jain#breadcrumb',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://theratnatrayashow.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Sky King Akash Jain', 'item': 'https://theratnatrayashow.com/sky-king-akash-jain' }
  ]
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://theratnatrayashow.com/sky-king-akash-jain',
  url: 'https://theratnatrayashow.com/sky-king-akash-jain',
  name: 'Sky King Akash Jain – Official Biography',
  description: 'Official biography of Sky King Akash Jain, founder of Nirgranth Creation and Ratnatraya Show.',
  breadcrumb: { '@id': 'https://theratnatrayashow.com/sky-king-akash-jain#breadcrumb' },
  mainEntity: { '@id': 'https://theratnatrayashow.com/sky-king-akash-jain#person' }
};

export default function SkyKingBiography() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#1a0a10', color: '#fff', minHeight: '100vh', fontFamily: 'var(--font-sans)', overflowX: 'hidden' }}>

      {/* Structured Data Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Premium Minimal Navigation */}
      <nav style={{ 
        padding: isMobile ? '1.5rem 1.5rem' : '3rem 8vw', 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'absolute', 
        top: 0, 
        width: '100%', 
        zIndex: 100,
        gap: isMobile ? '1.5rem' : '0'
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ padding: '0.3rem', border: '1px solid #D4AF37', borderRadius: '50%' }}>
                  <div style={{ width: '6px', height: '6px', background: '#D4AF37', borderRadius: '50%' }}></div>
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37', fontWeight: 800, fontSize: 'clamp(1rem, 4vw, 1.3rem)', letterSpacing: '0.1em' }}>RATNATRAYA</span>
           </div>
        </Link>
        <Link href="/" style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.6rem 1.4rem', border: '1.5px solid #D4AF37', borderRadius: '99px', whiteSpace: 'nowrap' }}>
          Back to Hub
        </Link>
      </nav>

      {/* Hero Section — Majestic & High-Authority */}
      <section style={{ position: 'relative', height: isMobile ? 'auto' : '100vh', minHeight: isMobile ? '90vh' : 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: isMobile ? '10rem 1.5rem 6rem' : '0 8vw', overflow: 'hidden' }}>
         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.25 }}>
            <Image
              src="/akashpp.jpeg"
              alt="Sky King Akash Jain – Visionary Founder of The Ratnatraya Show"
              fill
              style={{ objectFit: 'cover', filter: 'brightness(40%) contrast(1.1)' }}
              priority
            />
         </div>
         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle, transparent 20%, #1a0a10 100%)' }}></div>
         <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30vh', background: 'linear-gradient(to top, #1a0a10, transparent)' }}></div>

         <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(212,175,55,0.1)', border: '1.5px solid rgba(212,175,55,0.4)', padding: '0.5rem 1.5rem', borderRadius: '99px', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}>
              <div style={{ width: '5px', height: '5px', background: '#D4AF37', borderRadius: '50%', boxShadow: '0 0 10px #D4AF37' }}></div>
              <span style={{ fontSize: '0.65rem', color: '#D4AF37', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Founding Visionary</span>
            </div>
            
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 10vw, 7.5rem)', color: '#D4AF37', margin: 0, lineHeight: 0.9, letterSpacing: '-0.02em', textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              Sky King <br /> <span style={{ color: '#fff' }}>Akash Jain</span>
            </h1>
            
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.95rem, 4vw, 1.6rem)', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', marginTop: '1.5rem', letterSpacing: '0.05em', maxWidth: '800px', margin: '1.5rem auto 0', lineHeight: 1.4 }}>
              The Architectural Mind Behind India’s Largest Jain Cultural Movement
            </p>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: isMobile ? '10px' : '3.5rem', 
              marginTop: isMobile ? '3rem' : '4rem', 
              maxWidth: '600px', 
              margin: isMobile ? '3rem auto 0' : '4rem auto 0' 
            }}>
               <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 5vw, 2.5rem)', fontWeight: 900, color: '#D4AF37', fontFamily: 'var(--font-serif)' }}>100+</div>
                  <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.3rem' }}>Sacred Shows</div>
               </div>
               
               {!isMobile && <div style={{ width: '1px', height: '40px', background: 'rgba(212,175,55,0.2)' }}></div>}
               
               <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 5vw, 2.5rem)', fontWeight: 900, color: '#D4AF37', fontFamily: 'var(--font-serif)' }}>500k+</div>
                  <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.3rem' }}>Touched</div>
               </div>

               {!isMobile && <div style={{ width: '1px', height: '40px', background: 'rgba(212,175,55,0.2)' }}></div>}

               <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 5vw, 2.5rem)', fontWeight: 900, color: '#D4AF37', fontFamily: 'var(--font-serif)' }}>Global</div>
                  <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.3rem' }}>Impact</div>
               </div>
            </div>
         </div>
      </section>

      {/* Philosophy Block — High-End Editorial Style */}
      <section style={{ padding: isMobile ? '7rem 1.5rem' : '15rem 8vw', backgroundColor: '#fff', color: '#1a0a10' }}>
         <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 450px), 1fr))', gap: isMobile ? '3rem' : '6rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
               <div style={{ position: 'relative', zIndex: 2, borderRadius: '4px', overflow: 'hidden', boxShadow: '20px 20px 40px rgba(0,0,0,0.1)', maxWidth: '100%' }}>
                  <Image
                    src="/akashpp.jpeg"
                    alt="Akash Jain - Portrait of Leadership"
                    width={600}
                    height={800}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  />
               </div>
               <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '80px', height: '80px', border: '8px solid #f9f9f9', zIndex: 1 }}></div>
            </div>
            
            <div>
               <span style={{ color: '#D4AF37', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>The Founder&apos;s Philosophy</span>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#1a0a10', lineHeight: 1.1, marginBottom: '2.5rem' }}>
                 Crafting a Bridge Between <span style={{ color: '#722F37' }}>Ancient Wisdom</span> and Digital Reality.
               </h2>
               <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    <strong>Sky King Akash Jain</strong> is not merely a name; he is the harbor of a cultural renaissance. His journey began with a high-octane vision: to rescue <strong>Jinshasan</strong> from the dust of neglect and present it as a world-class, premium experience.
                  </p>
                  <p>
                    As the architect of <strong>Nirgranth Creation</strong> and <strong>The Ratnatraya Show</strong>, he scaled traditional Jain gatherings into massive digital movements, matching the technical precision of the 21st century.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Milestones of Impact — New "Big Event" Grid */}
      <section style={{ padding: isMobile ? '7rem 1.5rem' : '12rem 8vw', backgroundColor: '#fdfcf8', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
         <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '4rem' : '6rem' }}>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.2rem' : '3rem', color: '#722F37' }}>Milestones of Leadership</h2>
               <div style={{ height: '3px', width: '50px', background: '#D4AF37', margin: '1.5rem auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(270px, 30vw, 350px), 1fr))', gap: '2rem' }}>
               {[
                  { id: '01', title: 'Strategic Cultural Branding', desc: 'Pioneered high-fidelity identities for over 50+ spiritual personalities and organizations.' },
                  { id: '02', title: 'Scaling The Ratnatraya Show', desc: 'A grand spectacle reaching 500,000+ globally, blending sacred music with production values.' },
                  { id: '03', title: 'Maryada & Global Ventures', desc: 'Building premium Jain lifestyle collective, modesty brands, and sacraments platforms.' }
               ].map(milestone => (
                 <div key={milestone.id} style={{ padding: isMobile ? '2rem' : '3.5rem', background: '#fff', boxShadow: '0 20px 40px rgba(114,47,55,0.04)', borderRadius: '2px', border: '1px solid #f0efeb' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(212,175,55,0.1)', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '1rem' }}>{milestone.id}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#722F37', marginBottom: '1.5rem' }}>{milestone.title}</h3>
                    <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.95rem' }}>{milestone.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Expertise — Clean & Professional */}
      <section style={{ padding: isMobile ? '7rem 1.5rem' : '12rem 8vw', backgroundColor: '#fff' }}>
         <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? '2.2rem' : '2.8rem', color: '#722F37', marginBottom: '3rem', textAlign: 'center' }}>Professional Expertise</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 20vw, 240px), 1fr))', gap: '1rem' }}>
               {[
                 { title: 'Jainism Awareness', desc: 'Samyak knowledge of Jinshasan and traditional Shraman culture.' },
                 { title: 'Luxury Branding', desc: 'Crafting high-authority identities for spiritual leaders.' },
                 { title: 'Big Scale Events', desc: 'Managing nationwide logistics for massive cultural gatherings.' },
                 { title: 'Digital Innovation', desc: 'Architecting tech ecosystems for sacred sacraments.' },
               ].map(item => (
                 <div key={item.title} style={{ padding: '1.5rem', border: '1px solid #f0f0f0', borderRadius: '4px' }}>
                    <h3 style={{ color: '#D4AF37', margin: '0 0 1rem 0', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.95rem', margin: 0, color: '#333', lineHeight: 1.5 }}>{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Conclusion — Call to the Future */}
      <section style={{ padding: isMobile ? '8rem 1.5rem' : '15rem 8vw', backgroundColor: '#1a0a10', color: '#fff', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }}></div>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
           <span style={{ fontSize: '3rem', color: '#D4AF37', display: 'block', marginBottom: '2.5rem' }}>🪷</span>
           <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: '#D4AF37', marginBottom: '2.5rem', lineHeight: 1 }}>Scaling the Light of <br /> Jinshasan Globally.</h2>
           <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', marginBottom: isMobile ? '4rem' : '5rem' }}>
              &quot;Ratnatraya is not just a show; it is a consciousness. We are here to prove that ancient values don&apos;t just survive—they dominate the future.&quot; <br /> <span style={{ fontWeight: 900, color: '#fff', fontStyle: 'normal', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '1.5rem', display: 'block' }}>— Sky King Akash Jain</span>
           </p>
           
           <Link href="/" style={{ padding: '1.2rem 3rem', background: '#D4AF37', color: '#1a0a10', textDecoration: 'none', borderRadius: '4px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', transition: 'all 0.3s ease' }}>
             Return to Hub
           </Link>
        </div>
      </section>

      {/* SEO Keyword Block */}
      <section style={{ backgroundColor: '#1a0a10', padding: '6rem 5vw', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
         <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#D4AF37', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '2rem' }}>Sky King Akash Jain — Digital Footprint</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.8rem' }}>
               {[
                 'Sky King Akash Jain',
                 'Akash Jain Nirgranth Creation',
                 'Jainism influencer',
                 'Jain entrepreneur',
                 'Nirgranth Creation',
                 'Ratnatraya Show',
                 'Sky King Jain',
                 'Jain youth leader',
                 'Voice of Jainism',
                 'Jain cultural revivalist',
               ].map(keyword => (
                 <span key={keyword} style={{ color: '#fff', fontSize: '0.8rem', padding: '0.4rem 1rem', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '99px' }}>{keyword}</span>
               ))}
            </div>
         </div>
      </section>

      {/* Visual Footer Image */}
      <section style={{ height: isMobile ? '50vh' : '70vh', position: 'relative' }}>
         <Image
           src="/akashpp.jpeg"
           alt="Sky King Akash Jain – Jain Entrepreneur, Founder of Nirgranth Creation"
           fill
           style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
         />
         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, #1a0a10, transparent)' }}></div>
      </section>
    </main>
  );
}
