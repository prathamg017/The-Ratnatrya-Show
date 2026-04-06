import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sky King Akash Jain – Founder of Nirgranth Creation | Voice of Jainism',
  description: 'Sky King Akash Jain is a Jain entrepreneur, founder of Nirgranth Creation and Ratnatraya, known as the voice of Jainism and youth cultural revivalist in India.',
  keywords: 'Sky King Akash Jain, Akash Jain Nirgranth, Jainism influencer India, Jain entrepreneur, Nirgranth Creation founder, Ratnatraya Jain show founder, Sky King Jain, Jain youth leader, Jain cultural revivalist India, voice of Jainism',
  alternates: {
    canonical: 'https://theratnatrayashow.com/sky-king-akash-jain',
  },
  openGraph: {
    title: 'Sky King Akash Jain – Founder of Nirgranth Creation | Voice of Jainism',
    description: 'Sky King Akash Jain is a Jain entrepreneur, founder of Nirgranth Creation and Ratnatraya, known as the voice of Jainism and youth cultural revivalist in India.',
    url: 'https://theratnatrayashow.com/sky-king-akash-jain',
    siteName: 'The Ratnatraya Show',
    images: [{ url: 'https://theratnatrayashow.com/akashpp.jpeg', width: 1200, height: 630, alt: 'Sky King Akash Jain – Founder Nirgranth Creation' }],
    locale: 'en_IN',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sky King Akash Jain – Founder of Nirgranth Creation | Voice of Jainism',
    description: 'Sky King Akash Jain is the founder of Nirgranth Creation and Ratnatraya Show — a Jain entrepreneur and youth cultural revivalist in India.',
    images: ['https://theratnatrayashow.com/akashpp.jpeg'],
  },
};

// === BREADCRUMB SCHEMA — Helps Google understand page hierarchy ===
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://theratnatrayashow.com/sky-king-akash-jain#breadcrumb',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://theratnatrayashow.com'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Sky King Akash Jain',
      'item': 'https://theratnatrayashow.com/sky-king-akash-jain'
    }
  ]
};

// === PERSON SCHEMA — Signals Google for Knowledge Panel ===
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://theratnatrayashow.com/sky-king-akash-jain#person',
  name: 'Sky King Akash Jain',
  alternateName: ['Akash Jain', 'Sky King Akash', 'Akash Jain Nirgranth', 'Akash Jain Ratnatraya'],
  description: 'Sky King Akash Jain is a prominent Jain entrepreneur, digital innovator, founder of Nirgranth Creation and The Ratnatraya Show, and a recognized voice of modern Jainism in India.',
  url: 'https://theratnatrayashow.com/sky-king-akash-jain',
  image: 'https://theratnatrayashow.com/akashpp.jpeg',
  jobTitle: 'Founder & CEO',
  worksFor: [
    { '@type': 'Organization', name: 'Nirgranth Creation', url: 'https://theratnatrayashow.com' },
    { '@type': 'Organization', name: 'The Ratnatraya Show', url: 'https://theratnatrayashow.com' },
  ],
  knowsAbout: [
    'Jainism', 
    'Digital Branding', 
    'Cultural Entrepreneurship', 
    'Jinshasan Prabhavna', 
    'Youth Outreach',
    'Spiritual Leadership'
  ],
  nationality: { '@type': 'Country', name: 'India' },
  sameAs: [
    'https://www.instagram.com/the_ratnatrya_show/',
    'https://www.instagram.com/sky_king_akash_jain/',
    'https://linkedin.com/in/akashjain-skyking'
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://theratnatrayashow.com/sky-king-akash-jain'
  }
};

// === WEBPAGE SCHEMA — Direct validation context ===
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://theratnatrayashow.com/sky-king-akash-jain',
  url: 'https://theratnatrayashow.com/sky-king-akash-jain',
  name: 'Sky King Akash Jain – Official Biography',
  description: 'Official biography of Sky King Akash Jain, founder of Nirgranth Creation and Ratnatraya Show, voice of modern Jainism.',
  breadcrumb: { '@id': 'https://theratnatrayashow.com/sky-king-akash-jain#breadcrumb' },
  mainEntity: { '@id': 'https://theratnatrayashow.com/sky-king-akash-jain#person' }
};

export default function SkyKingBiography() {
  return (
    <main style={{ backgroundColor: '#1a0a10', color: '#fff', minHeight: '100vh', fontFamily: 'var(--font-sans)', overflowX: 'hidden' }}>

      {/* Structured Data Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Premium Minimal Navigation */}
      <nav style={{ padding: '2rem 5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 0, width: '100%', zIndex: 100 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ padding: '0.4rem', border: '1px solid #D4AF37', borderRadius: '50%' }}>
                  <div style={{ width: '8px', height: '8px', background: '#D4AF37', borderRadius: '50%' }}></div>
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', color: '#D4AF37', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.1em' }}>RATNATRAYA</span>
           </div>
        </Link>
        <Link href="/" style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.7rem 1.8rem', border: '1px solid #D4AF37', borderRadius: '99px' }}>
          Back to Hub
        </Link>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 5vw' }}>
         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15 }}>
            <Image
              src="/akashpp.jpeg"
              alt="Sky King Akash Jain – Founder of Nirgranth Creation and Ratnatraya Show"
              fill
              style={{ objectFit: 'cover', filter: 'grayscale(100%) brightness(50%)' }}
              priority
            />
         </div>
         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent, #1a0a10)' }}></div>

         <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(212,175,55,0.15)', border: '1px solid #D4AF37', padding: '0.5rem 1.5rem', borderRadius: '99px', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.7rem', color: '#D4AF37', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Official Biography</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 10vw, 6rem)', color: '#D4AF37', margin: 0, lineHeight: 1 }}>
              Sky King Akash Jain
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#fff', fontStyle: 'italic', marginTop: '1rem', opacity: 0.9 }}>
              Founder of Nirgranth Creation &middot; Voice of Jainism &middot; Jain Entrepreneur India
            </p>
            <div style={{ height: '2px', width: '100px', background: '#D4AF37', margin: '2.5rem auto' }}></div>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '750px', margin: '0 auto', color: 'rgba(255,255,255,0.85)' }}>
               <strong>Sky King Akash Jain</strong> is a prominent spiritual entrepreneur, digital innovator, and the recognized <strong>Voice of Modern Jainism</strong>. As the <strong>Founder &amp; CEO of Nirgranth Creation</strong> and the mastermind behind <strong>The Ratnatraya Show</strong>, he is bridging the gap between ancient Jinshasan wisdom and the fast-paced digital world of the Gen-Z youth.
            </p>
         </div>
      </section>

      {/* Main Biography Content */}
      <section style={{ padding: '8rem 5vw', backgroundColor: '#fff', color: '#1a0a10' }}>
         <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

            <div style={{ marginBottom: '6rem' }}>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: '#722F37', marginBottom: '2rem' }}>01. Who is Sky King Akash Jain?</h2>
               <div style={{ fontSize: '1.15rem', lineHeight: 1.9, color: 'rgba(0,0,0,0.8)' }}>
                  <p>In an era where digital noise often drowns out spiritual depth, <strong>Sky King Akash Jain</strong> stands as a lighthouse for the Jain community and the youth of India. Representing the fusion of traditional values and 21st-century technological prowess, <strong>Akash Jain</strong> has carved a unique identity as a <strong>Jainism influencer</strong> and a visionary youth entrepreneur.</p>
                  <p>His role is not just that of a businessman, but as a cultural custodian. <strong>Sky King Akash Jain</strong> represents the <em>prabhavna-shakti</em> of Jainism, dedicated to restoring the pride of our heritage through high-production, world-class experiences. Whether it is through the lens of a digital agency or the grandeur of a live spiritual show, he ensures that the core tenets of Jainism — non-violence, truth, and self-discipline — are presented with the dignity they deserve.</p>
               </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: '#722F37', marginBottom: '2rem' }}>02. Early Life &amp; Struggle of Sky King Akash Jain</h2>
               <div style={{ fontSize: '1.15rem', lineHeight: 1.9, color: 'rgba(0,0,0,0.8)' }}>
                  <p>Every great vision is born from friction, and <strong>Sky King Akash Jain</strong>&apos;s journey is no different. Hailing from a small, modest district in the heart of India, his early life was defined by both simplicity and significant struggle. Growing up in an environment where resources were limited but aspirations were infinite, <strong>Akash Jain</strong> witnessed the challenges faced by self-made individuals in a competitive world.</p>
                  <p>The struggles of his childhood were not merely financial; they were the tests of character. From navigating the complexities of small-town limitations to holding onto a dream that many deemed too grand for his surroundings, <strong>Akash Jain</strong> remained steadfast. This self-made journey, fueled by a visceral desire to uplift his community and create something of lasting value, laid the foundation for what would later become a nationwide movement.</p>
               </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: '#722F37', marginBottom: '2rem' }}>03. Sky King Akash Jain: The Entrepreneurial Journey</h2>
               <p style={{ fontWeight: 800, color: '#D4AF37', marginBottom: '1.5rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Nirgranth Creation &amp; Ratnatraya</p>
               <div style={{ fontSize: '1.15rem', lineHeight: 1.9, color: 'rgba(0,0,0,0.8)' }}>
                  <p><strong>Sky King Akash Jain</strong>&apos;s entrepreneurial path is marked by the creation of <strong>Nirgranth Creation</strong>, an elite digital agency and tech startup. Nirgranth is not just about services; it is about building identities. Under his leadership, the agency has become a powerhouse for helping individuals and brands find their authentic voice in the digital ecosystem, focusing on <strong>cultural branding</strong> and <strong>digital innovation</strong>.</p>
                  <p>Then came <strong>Ratnatraya</strong> — <strong>Akash Jain</strong>&apos;s most ambitious and emotionally significant project to date. Understanding that the Jain youth needed a platform that was as engaging as modern entertainment but as profound as the scriptures, he launched <strong>The Ratnatraya Show</strong>. A grand cultural spectacle that has touched hundreds of thousands of lives, Ratnatraya is the ultimate vehicle for Jinshasan Prabhavna.</p>
               </div>

               <div style={{ marginTop: '3rem', padding: '3rem', background: 'rgba(114,47,55,0.04)', borderRadius: '2rem', border: '1px solid rgba(114,47,55,0.1)' }}>
                  <p style={{ fontWeight: 800, color: '#722F37', fontSize: '1.4rem' }}>Upcoming Ventures by Sky King Akash Jain</p>
                  <ul style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
                     <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                        <span style={{ color: '#D4AF37', fontWeight: 900 }}>◆</span>
                        <div><strong>Maryada</strong>: A premium Jain cultural clothing brand blending traditional modesty with high-end modern fashion.</div>
                     </li>
                     <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                        <span style={{ color: '#D4AF37', fontWeight: 900 }}>◆</span>
                        <div><strong>Jain Vidhi Vidhan</strong>: A platform providing religious services and professional guidance for sacred ceremonies, globally accessible via technology.</div>
                     </li>
                  </ul>
               </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: '#722F37', marginBottom: '2rem' }}>04. Akash Jain&apos;s Cultural Revival in Jainism</h2>
               <div style={{ fontSize: '1.15rem', lineHeight: 1.9, color: 'rgba(0,0,0,0.8)' }}>
                  <p>The core of <strong>Sky King Akash Jain</strong>&apos;s mission is the <strong>unification of Jain youth</strong>. Recognizing that many young Jains were drifting away from their heritage, <strong>Akash Jain</strong> revolutionized the narrative by making Jainism relatable without compromising its sanctity. Through modern media, world-class production, and youth-centric storytelling, he has initiated a <strong>cultural revival</strong> that is drawing Gen-Z back to the principles of the Tirthankaras.</p>
               </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: '#722F37', marginBottom: '2rem' }}>05. Expertise of Sky King Akash Jain</h2>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                  {[
                    { title: 'Jainism Awareness', desc: 'Deep knowledge of Jinshasan combined with modern communication strategies.' },
                    { title: 'Cultural Branding', desc: 'Crafting premium identities for spiritual and community-led brands.' },
                    { title: 'Youth Guidance', desc: 'Mentoring the next generation on balancing career and spiritual values.' },
                    { title: 'Digital Identity', desc: 'Building high-authority personal brands and digital ecosystems.' },
                  ].map(item => (
                    <div key={item.title} style={{ padding: '1.5rem', borderLeft: '4px solid #D4AF37', background: 'rgba(212,175,55,0.03)' }}>
                       <h3 style={{ color: '#722F37', margin: '0 0 1rem 0', fontSize: '1.1rem' }}>{item.title}</h3>
                       <p style={{ fontSize: '0.95rem', margin: 0, opacity: 0.8 }}>{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: '#722F37', marginBottom: '2rem' }}>06. Vision: Sky King Akash Jain on Scaling Jainism Globally</h2>
               <div style={{ fontSize: '1.15rem', lineHeight: 1.9, color: 'rgba(0,0,0,0.8)' }}>
                  <p><strong>Akash Jain</strong>&apos;s vision extends far beyond local shows. His mission is to <strong>scale Jain culture globally</strong>. He envisions a world where every Jain youth carries their identity with unshakable confidence, and where Jainism&apos;s universal principles of peace and scientific living are recognized by world leaders. Through his impactful brands and shows, <strong>Sky King Akash Jain</strong> is building the infrastructure for a global Jain renaissance.</p>
               </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: '#722F37', marginBottom: '2rem' }}>07. Recognition &amp; Legacy of Sky King Akash Jain</h2>
               <div style={{ fontSize: '1.15rem', lineHeight: 1.9, color: 'rgba(0,0,0,0.8)' }}>
                  <p>While <strong>Sky King Akash Jain</strong> prefers the merit of his work to speak for itself, his growing influence within the Jain community and entrepreneurial circles is undeniable. Having worked with various community leaders, Jain Sanghs, and powerful spiritual figures across the country, he has earned a reputation for <strong>integrity, professionalism, and high-impact execution</strong>. He is consistently recognized as a rising influential personality whose contributions are reshaping the Jain digital scape.</p>
               </div>
            </div>

         </div>
      </section>

      {/* SEO Keyword Block */}
      <section style={{ backgroundColor: '#1a0a10', padding: '6rem 5vw', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
         <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#D4AF37', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '2rem' }}>Sky King Akash Jain — Digital Footprint</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
               {[
                 'Sky King Akash Jain',
                 'Akash Jain Nirgranth Creation',
                 'Jainism influencer India',
                 'Jain entrepreneur India',
                 'Nirgranth Creation founder',
                 'Ratnatraya Jain show founder',
                 'Sky King Jain',
                 'Jain youth leader',
                 'Voice of Jainism',
                 'Jain cultural revivalist',
               ].map(keyword => (
                 <span key={keyword} style={{ color: '#fff', fontSize: '0.9rem', padding: '0.4rem 1rem', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '99px' }}>{keyword}</span>
               ))}
            </div>
         </div>
      </section>

      {/* Conclusion */}
      <section style={{ padding: '8rem 5vw', backgroundColor: '#fff', color: '#1a0a10', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
           <span style={{ fontSize: '3rem', color: '#D4AF37', display: 'block', marginBottom: '2rem' }}>🪷</span>
           <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#722F37', marginBottom: '2.5rem' }}>Sky King Akash Jain: A Legacy in the Making</h2>
           <p style={{ fontSize: '1.25rem', lineHeight: 2, color: 'rgba(0,0,0,0.7)', fontStyle: 'italic' }}>
              &quot;My life is a dedicated prabhavna for Jinshasan. We are not just building businesses; we are building a consciousness that will echo for generations.&quot; — <strong>Sky King Akash Jain</strong>
           </p>
           <p style={{ fontSize: '1.1rem', marginTop: '3rem', color: 'rgba(0,0,0,0.6)' }}>
              Standing at the intersection of spiritual tradition and digital dominance, <strong>Sky King Akash Jain</strong> is not just a name; he is the harbinger of a new era for modern Jainism. As the founder of <strong>Nirgranth Creation</strong> and <strong>The Ratnatraya Show</strong>, his journey is a blueprint for the next generation of Jain entrepreneurs in India.
           </p>
           <div style={{ marginTop: '5rem' }}>
              <Link href="/" style={{ padding: '1.2rem 3.5rem', background: 'linear-gradient(135deg, #722F37, #8B1538)', color: '#fff', textDecoration: 'none', borderRadius: '99px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', boxShadow: '0 20px 40px rgba(114,47,55,0.25)' }}>
                Return to Homepage
              </Link>
           </div>
        </div>
      </section>

      {/* Visual Footer Image */}
      <section style={{ height: '70vh', position: 'relative' }}>
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
