'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import VideoSection from './vdo';




export default function ModernGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({ type: '', src: '', index: 0 });
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

const videoList = [
  {
    src: '/gallery/v1.mp4', // Video 1 source
    thumbnail: '/flyer.jpg', // Video 1 thumbnail
  },
  {
    src: '/gallery/v2.mp4', // Video 2 source
    thumbnail: '/flyer2.JPG', // Video 2 thumbnail
  },
];


  // Gallery data
  const images = Array.from({ length: 18 }, (_, i) => `/gallery/${i + 1}.JPG`);

  // Open lightbox
  const openLightbox = (type: string, src: string, index: number) => {
    setCurrentItem({ type, src, index });
    setLightboxOpen(true);
    if (type === 'video') setVideoPlaying(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setVideoPlaying(false);
  };

  // Navigate images
  const navigateImage = (direction: string) => {
    const newIndex = direction === 'next' 
      ? (currentItem.index + 1) % images.length 
      : (currentItem.index - 1 + images.length) % images.length;
    setCurrentItem({ type: 'image', src: images[newIndex], index: newIndex });
  };


const [selectedImage, setSelectedImage] = useState<string | null>(null);

// Prevent body scroll while lightbox is open
useEffect(() => {
  document.body.style.overflow = selectedImage ? 'hidden' : '';
  return () => { document.body.style.overflow = ''; };
}, [selectedImage]);

// Close on Escape
useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
  };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}, []);

  

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (currentItem.type === 'image') {
        if (e.key === 'ArrowLeft') navigateImage('prev');
        if (e.key === 'ArrowRight') navigateImage('next');
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, currentItem]);
    const router = useRouter();

  return (

    
  <div className="gallery-container">





      {/* Hero Section */}
      {/* Hero Header Overlay */}
      <div className="hero-gallery-header">
        <button
          className="hero-back-button"
          onClick={() => router.push('/')}
        >
          ← Back to Home
        </button>
        <div className="hero-title">
          <h1 className="hero-main-title">Explore Our Luxury Gallery</h1>
          <p className="hero-subtitle">Experience timeless elegance, captured in moments.</p>
        </div>
      </div>

      <div className="collage-grid">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((num) => (
      <div className="collage-item" key={num}>
        <Image 
          src={`/gallery/${num}.JPG`} 
          alt={`The Ratnatraya Show performance moment ${num} - Jain cultural experience`} 
          width={400} 
          height={300} 
          loading="lazy"
        />
      </div>
    ))}
  </div>






      {/* video section */}

 <div>
      {/* You can insert the VideoSection component directly here */}
      <VideoSection videos={videoList} />     
    </div>

      {/* Photos Section */}
      <section className="photos-section">
  <div className="section-header">
    <h2 className="section-title">Photo Gallery</h2>
    <p className="section-subtitle">Moments captured from the celebration</p>
  </div>

  <div className="photos-grid">
    {images.map((image, index) => (
      <div
        key={index}
        className="photo-card"
        onClick={() => { openLightbox('image', image, index); setSelectedImage(image); }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') { openLightbox('image', image, index); setSelectedImage(image);} }}
      >
        <Image 
          src={image} 
          alt={`Ratnatraya Show performance - ${index % 2 === 0 ? "Classical Dance" : "Spiritual Speech"} by ${index % 3 === 0 ? "Akash Jain" : "Artistic Team"}`} 
          width={500} 
          height={400} 
          loading="lazy"
          className="rounded-lg object-cover w-full h-full"
        />
        <div className="photo-overlay">
          <span>View Full Size</span>
        </div>
      </div>
    ))}
  </div>

  {/* Lightbox Modal (full-screen) */}
  {selectedImage && (
    <div className="lightbox" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true">
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close">×</button>

        <div className="lightbox-media-wrap">
          <Image 
            src={selectedImage} 
            alt="Full size Ratnatraya Show performance" 
            width={1200} 
            height={800} 
            className="lightbox-image" 
            draggable={false} 
          />
        </div>
      </div>
    </div>
  )}
</section>


{/* Thank You Section */}
<section className="thankyou-section relative overflow-hidden">
  {/* Animated Gradient Background */}
  <div className="thankyou-bg absolute inset-0 -z-10"></div>

  {/* Center Content */}
  <div className="thankyou-content relative z-10 text-center px-6 py-32">
    <div className="thankyou-icon animate-bounce-glow mb-4">🙏</div>
    <h2 className="thankyou-title">
      Thank You
    </h2>
    <p className="thankyou-text">
      This inaugural celebration marks the beginning of a blessed journey.<br />
      More sacred moments await.
    </p>
  </div>
</section>


      
    </div>
  );
}