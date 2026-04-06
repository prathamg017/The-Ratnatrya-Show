'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PAST_SHOWS } from '../data/shows';

export default function JourneyPage() {
  return (
    <div className="journey-page min-h-screen bg-[#FFFFF0] text-[#1A1A1A]">
      <div className="h-20" /> {/* Spacer */}

      <header className="journey-header container text-center">
        <Link href="/" className="inline-flex items-center text-[#D4AF37] hover:text-[#B8860B] transition-colors mb-8 font-bold tracking-widest text-xs">
          ← BACK HOME
        </Link>
        <h1 className="premium-title">
          Our Spiritual Journey
        </h1>
        <p className="premium-subtitle leading-relaxed">
          From a small beginning to a national movement of Jinshasan Prabhavna. 
          See every city we have visited and the hearts we have touched.
        </p>
      </header>

      <main className="container max-w-5xl py-20 px-6">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 bg-[#D4AF37]/20 -translate-x-1/2"></div>
          
          <div className="space-y-32">
            {PAST_SHOWS.map((show, index) => (
              <motion.div 
                key={show.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-[#8B1538] rounded-full border-4 border-[#D4AF37] shadow-xl -translate-x-1/2 z-10 flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="timeline-card-luxury hover:scale-[1.02] transition-transform">
                    <div className="text-[#D4AF37] font-bold text-xs tracking-widest uppercase mb-2">{show.date}</div>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#722F37] mb-6">{show.city}</h2>
                    <div className={`flex flex-wrap gap-4 mb-8 justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="px-4 py-2 bg-[#FFFFF0] rounded-full text-xs font-bold text-[#8B1538] border border-[#D4AF37]/30 shadow-sm">
                        👥 {show.audienceCount} People
                      </div>
                      <div className="px-4 py-2 bg-[#FFFFF0] rounded-full text-xs font-bold text-[#8B1538] border border-[#D4AF37]/30 shadow-sm">
                        📍 {show.venue}
                      </div>
                    </div>
                    
                    {show.testimonial && (
                      <blockquote className={`italic text-[#4A4A4A] border-l-4 border-[#D4AF37] pl-6 mb-4 text-lg leading-relaxed ${index % 2 === 0 ? 'md:border-l-0 md:border-r-4 md:pl-0 md:pr-6' : ''}`}>
                         &ldquo;{show.testimonial.text}&rdquo;
                         <footer className="mt-4 font-bold text-[#1A1A1A] not-italic text-sm">— {show.testimonial.author}</footer>
                         <cite className="text-[10px] uppercase font-bold text-[#D4AF37] not-italic tracking-[0.2em]">{show.testimonial.organization}</cite>
                      </blockquote>
                    )}
                  </div>
                </div>

                {/* Photo Placeholder */}
                <div className="w-full md:w-[45%]">
                  <div className="relative aspect-[16/10] bg-[#1A1A1A] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-[#D4AF37]/10 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                    <div className="absolute bottom-8 left-8 z-20 text-white">
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-2">Impact Highlight</div>
                      <div className="text-2xl font-serif">{show.city} Transformation</div>
                    </div>
                    {/* Visual Placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-[#2C2C2C] text-5xl opacity-40 group-hover:scale-110 transition-transform duration-700">🎭</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Final CTA */}
        <section className="mt-32 text-center py-20 bg-white rounded-3xl shadow-inner border-2 border-[#D4AF37]/10">
          <h2 className="text-3xl font-serif text-[#722F37] mb-6">Our Next Chapter starts with Your City</h2>
          <p className="max-w-2xl mx-auto mb-8 text-[#4A4A4A]">
            Will your city be the next to experience the power of the Three Jewels? 
            Join the journey of Jinshasan Prabhavna today.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/invite" className="bg-[#D4AF37] text-[#1A1A1A] px-10 py-4 rounded-full font-bold hover:bg-[#F4D03F] transition-all transform hover:scale-110">
              INVITE THE SHOW NOW
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#722F37] text-[#FFFFF0] py-12 mt-20">
        <div className="container text-center">
          <p className="opacity-80">© 2026 The Ratnatraya Show. Spreading Ancient Wisdom to Modern Hearts. 🙏</p>
        </div>
      </footer>
    </div>
  );
}
