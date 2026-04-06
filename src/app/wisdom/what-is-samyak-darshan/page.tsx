'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SamyakDarshanArticle() {
  return (
    <article className="wisdom-article min-h-screen bg-[#FFFFF0] text-[#1A1A1A]">
      <div className="h-20" /> {/* Navbar Spacer */}

      <header className="container py-20 px-6 max-w-4xl text-center border-b border-[#D4AF37]/10 mb-12">
        <div className="flex justify-center mb-8 gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
          <Link href="/wisdom" className="hover:text-[#8B1538] transition-colors">← Back to Hub</Link>
          <span>•</span>
          <span className="text-[#8B1538]">Right Faith</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-[#722F37] mb-8 leading-tight">
          What is Samyak Darshan? The First Step to Eternal Freedom
        </h1>
        <p className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed italic opacity-80">
          "The initial awakening where the soul finally sees itself for what it truly is."
        </p>
      </header>

      <main className="container max-w-3xl py-12 px-6">
        <section className="prose prose-lg prose-serif mx-auto text-[#1A1A1A] leading-[1.8] space-y-10">
          <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-[#D4AF37] first-letter:mr-3 first-letter:float-left">
            In the ancient tradition of Jainism, the path to liberation (Moksha) is defined by three inseparable jewels: 
            Samyak Darshan (Right Faith), Samyak Gyan (Right Knowledge), and Samyak Charitra (Right Conduct). 
            Among these, <strong>Samyak Darshan</strong> is undeniably the most critical—it is the spark that ignites 
            the fire of spiritual transformation. Without it, even the most rigorous knowledge and conduct remain hollow.
          </p>

          <h2 className="text-3xl font-serif text-[#722F37] mt-16 mb-6">The Clarity of Vision</h2>
          <p>
            Samyak Darshan is often translated as &quot;Right Faith,&quot; but its true meaning is far deeper. It signifies 
            a profound clarity of vision—an awakening where the soul (Jiva) is finally able to distinguish between 
            itself and everything that is not the soul (Ajiva). It is the moment where the veil of ignorance 
            (Mithyatva) is lifted, and the truth of existence becomes as clear as day.
          </p>

          <div className="bg-[#FFFFF0] p-8 rounded-3xl border-l-[6px] border-[#D4AF37] shadow-sm my-12 italic text-lg leading-relaxed text-[#722F37]">
            &quot;Imagine living your whole life with clouded glasses, where everything seems grey and confusing. 
            Samyak Darshan is the moment you clean those glasses and see the universe in its true, vibrant colors.&quot;
          </div>

          <h2 className="text-3xl font-serif text-[#722F37] mt-16 mb-6">Why Youth Need Samyak Darshan Today</h2>
          <p>
            In a world filled with digital distractions and conflicting values, the modern Jain youth often feel 
            disconnected from their heritage. Samyak Darshan provides a steady anchor. It isn&apos;t about blind 
            belief but about rational, self-discovered conviction. It allows us to navigate life&apos;s complexities 
            with a calm, balanced mind, grounded in the reality of our eternal nature rather than our temporary 
            emotions or material possessions.
          </p>

          <h2 className="text-3xl font-serif text-[#722F37] mt-16 mb-6">Characteristics of an Awakened Soul</h2>
          <p>The scriptures define five primary symptoms of someone who has attained Samyak Darshan:</p>
          <ul className="list-disc ml-8 space-y-4">
            <li><strong>Prashama:</strong> A natural calmness of the mind and reduction in intense passions.</li>
            <li><strong>Samvega:</strong> An intense desire for spiritual liberation.</li>
            <li><strong>Nirveda:</strong> A sense of detachment from worldly attachment.</li>
            <li><strong>Anukampa:</strong> Universal compassion for all living beings.</li>
            <li><strong>Astikya:</strong> Unwavering trust in the soul, liberation, and the path of the Tirthankaras.</li>
          </ul>

          <div className="cta-box bg-[#722F37] text-white p-12 rounded-[3rem] mt-24 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 -translate-y-1/2 translate-x-1/2 rounded-full transition-transform group-hover:scale-150"></div>
             <h3 className="text-2xl font-serif mb-4">Experience Samyak Darshan Live</h3>
             <p className="mb-8 opacity-90 leading-relaxed text-sm">
                The Ratnatraya Show brings these ancient concepts to life through spectacularly choreographed dance-drama, 
                sacred music, and modern dialogue. Invite us to your city and let your community experience this 
                spiritual awakening together.
             </p>
             <Link href="/invite" className="bg-[#D4AF37] text-[#1A1A1A] px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-all transform hover:scale-105 inline-block">
                INVITE TO YOUR CITY
             </Link>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-[#D4AF37]/10 mt-20 text-center">
         <div className="flex justify-center gap-12 text-[#1A1A1A]/40 text-[10px] tracking-widest font-bold uppercase transition-all mb-4">
            <Link href="/wisdom/the-three-jewels-of-jainism" className="hover:text-[#D4AF37]">NEXT ARTICLE →</Link>
         </div>
      </footer>
    </article>
  );
}
