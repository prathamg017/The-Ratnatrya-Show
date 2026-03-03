import Link from 'next/link';

export const metadata = {
  title: "Philosophy | The Ratnatraya Show - Jain Spiritual Concert",
  description: "Explore the deep spiritual roots of The Ratnatraya Show. Learn about Jinshasan, the Three Jewels, and how we bring Jainism to the modern stage.",
  alternates: {
    canonical: 'https://theratnatrayashow.com/philosophy',
  },
};

export default function PhilosophyPage() {
  return (
    <div className="philosophy-page min-h-screen bg-[#FFFFF0] text-[#1A1A1A]">
      {/* Navigation Padding */}
      <div className="h-20" />

      <header className="container py-12 text-center">
        <Link href="/" className="inline-flex items-center text-[#D4AF37] hover:text-[#B8860B] transition-colors mb-8">
          <span className="mr-2">←</span> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#722F37] mb-6">
          The Ratnatraya Show: A Grand Confluence
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
          Where ancient wisdom meets modern spiritual expression.
        </p>
      </header>

      <main className="container max-w-4xl py-12">
        <section className="prose prose-lg prose-serif mx-auto">
          <h2 className="text-3xl font-serif text-[#722F37] mt-12 mb-6">Rediscovering the Soul of Jainism</h2>
          <p className="mb-6">
            In an era of digital noise and rapid societal change, the search for authentic spiritual grounding has never been more vital. <strong>The Ratnatraya Show</strong> emerges not merely as an event, but as a movement—a profound intersection where the ancient wisdom of <strong>Jainism</strong> meets the vibrance of modern performing arts. Guided by the eternal principles of the <em>Ratnatraya</em> (the Three Jewels), this show serves as a beacon for those seeking to reconnect with the roots of <strong>Jinshasan</strong> while celebrating the cultural evolution of the Jain community.
          </p>

          <h2 className="text-3xl font-serif text-[#722F37] mt-12 mb-6">Understanding Ratnatraya – The Three Jewels of Liberation</h2>
          <p className="mb-6">
            The foundation of our platform rests upon the bedrock of Jain philosophy. To understand the essence of our show, one must first grasp the significance of the <em>Ratnatraya</em>. These three inseparable jewels constitute the path to soul-liberation (<em>Moksha</em>):
          </p>

          <div className="grid gap-8 my-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-serif text-[#8B1538] mb-4">Samyak Darshan (Right Faith/Vision)</h3>
              <p>
                Samyak Darshan is the initial awakening. It is the clarity of vision that allows a soul to distinguish between the self (Jiva) and the non-self (Ajiva). In the context of The Ratnatraya Show, we facilitate this &quot;Right Vision&quot; by presenting the life-stories of the Tirthankaras and the glory of Jinshasan in a way that resonates with the modern heart.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-serif text-[#8B1538] mb-4">Samyak Gyan (Right Knowledge)</h3>
              <p>
                Knowledge without depth is mere information. Samyak Gyan is the profound understanding of natural laws as taught by the omniscient lords. Our shows incorporate scholarly insights and philosophical discourses, woven into the fabric of musical narratives, ensuring that every attendee leaves with a deeper intellectual grasp of Jain tenets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <h3 className="text-2xl font-serif text-[#8B1538] mb-4">Samyak Charitra (Right Conduct)</h3>
              <p>
                The culmination of faith and knowledge is action. Samyak Charitra is the practice of non-violence (Ahimsa), truthfulness (Satya), and compassion in daily life. The Ratnatraya Show inspires this conduct by showcasing the lived experiences of Jain saints and the practical application of Jainism in 21st-century challenges.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-serif text-[#722F37] mt-12 mb-6">Jinshasan: The Resplendent Tradition of the Tirthankaras</h2>
          <p className="mb-6">
            The term <strong>Jinshasan</strong> refers to the &quot;Order of the Jina&quot;—the uninterrupted lineage of spiritual guidance that has survived millennia. The Ratnatraya Show is a humble attempt to promote Jinshasan (<em>Prabhavna</em>) by utilizing modern mediums without diluting the sanctity of the tradition.
          </p>

          <h2 className="text-3xl font-serif text-[#722F37] mt-12 mb-6">The Evolution of the Jain Spiritual Event</h2>
          <p className="mb-6">
            Gone are the days when a <strong>Jain Spiritual Show</strong> was confined to simple lectures. Today, the community seeks an immersive experience. The Ratnatraya Show redefines the &quot;Jain Spiritual Event&quot; by integrating sacred music, dance-drama (Natak), and immersive audio-visuals to create a sensory journey that transports the audience into the heart of divinity.
          </p>

          <h2 className="text-3xl font-serif text-[#722F37] mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
            <details className="group border-b border-[#E8E8E8] pb-4">
              <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-[#8B1538]">
                What is the primary objective of The Ratnatraya Show?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-[#4A4A4A]">The primary objective is the promotion of Jinshasan through a blend of spirituality and art. We aim to inspire a new generation to embrace the Three Jewels.</p>
            </details>

            <details className="group border-b border-[#E8E8E8] pb-4">
              <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-[#8B1538]">
                Is The Ratnatraya Show suitable for those unfamiliar with Jainism?
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-[#4A4A4A]">Yes. While deeply rooted in Jain philosophy, its themes of non-violence, mindfulness, and compassion are universal.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="bg-[#722F37] text-[#FFFFF0] py-20 mt-20">
        <div className="container text-center">
          <h2 className="text-3xl font-serif mb-6">Join the Spiritual Movement</h2>
          <p className="mb-8 opacity-80">Experience the confluence of culture and spirituality.</p>
          <Link href="/" className="inline-block bg-[#D4AF37] text-[#1A1A1A] px-8 py-3 rounded-full font-bold hover:bg-[#F4D03F] transition-colors">
            Return to Homepage
          </Link>
        </div>
      </footer>
    </div>
  );
}
