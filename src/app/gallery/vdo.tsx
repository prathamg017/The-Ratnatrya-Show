import { Maximize2, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Video {
  src: string;
  thumbnail: string;
  title?: string;
  description?: string;
}

interface VideoSectionProps {
  videos: Video[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ videos = [] }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState<{ [k: number]: boolean }>({});
  const [isMuted, setIsMuted] = useState<{ [k: number]: boolean }>({});
  const videoRefs = useRef<{ [k: number]: HTMLVideoElement | null }>({});

  // When activeVideoIndex changes, attempt to play the selected video safely
  useEffect(() => {
    if (activeVideoIndex === null) return;

    const idx = activeVideoIndex;
    const video = videoRefs.current[idx];

    // Pause all other videos first
    Object.keys(videoRefs.current).forEach((k) => {
      const key = Number(k);
      const v = videoRefs.current[key];
      if (v && key !== idx) {
        try { v.pause(); } catch (e) { /* ignore */ }
        setIsPaused((prev) => ({ ...prev, [key]: true }));
      }
    });

    if (!video) return;

    // Ensure muted for autoplay rules, then play
    // If user previously set muted false, still set muted true for autoplay, then restore after user action
    const initiallyMuted = !!isMuted[idx];
    video.muted = true;
    setIsMuted((prev) => ({ ...prev, [idx]: true }));

    // Try to play
    const tryPlay = async () => {
      try {
        await video.play();
        setIsPaused((prev) => ({ ...prev, [idx]: false }));
        // If user previously wanted unmuted, keep muted until they toggle.
        if (!initiallyMuted) {
          // keep muted until user toggles - autoplay with sound is usually blocked
          setIsMuted((prev) => ({ ...prev, [idx]: true }));
        }
      } catch (err) {
        // Play failed — keep thumbnail visible (fallback)
        console.error('Video play failed:', err);
        setActiveVideoIndex(null);
        setIsPaused((prev) => ({ ...prev, [idx]: true }));
      }
    };

    // small delay to ensure ref is attached on some slow devices
    const t = window.setTimeout(tryPlay, 50);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeVideoIndex]);

  // Helper: stop a video and reset states
  const stopVideo = (index: number) => {
    const v = videoRefs.current[index];
    if (v) {
      try { v.pause(); v.currentTime = 0; } catch (e) {}
    }
    setIsPaused((prev) => ({ ...prev, [index]: true }));
    setIsMuted((prev) => ({ ...prev, [index]: true }));
    if (activeVideoIndex === index) setActiveVideoIndex(null);
  };

  const playVideo = (index: number) => {
    // set active index — effect will handle playing safely
    setActiveVideoIndex(index);
  };

  const togglePlayPause = (index: number) => {
    const v = videoRefs.current[index];
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setIsPaused((prev) => ({ ...prev, [index]: false }))).catch(() => {});
    } else {
      v.pause();
      setIsPaused((prev) => ({ ...prev, [index]: true }));
    }
  };

  const toggleMute = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const v = videoRefs.current[index];
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted((prev) => ({ ...prev, [index]: v.muted }));
  };

  const handleFullscreen = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const v = videoRefs.current[index];
    if (!v) return;
    if (v.requestFullscreen) {
      v.requestFullscreen().catch(() => { /* ignore */ });
    } else if ((v as any).webkitEnterFullscreen) {
      // iOS Safari
      try { (v as any).webkitEnterFullscreen(); } catch {}
    }
  };

  if (!videos || videos.length === 0) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#6b7280' }}>
        <p style={{ fontSize: '1.25rem' }}>No videos available</p>
      </div>
    );
  }

  return (
    <section className="videos-section">
      <style>{`
        .videos-section {
          padding: 4rem 1rem;
          background: #f9f9f9;
        }

        .section-header { text-align: center; margin-bottom: 2.5rem; }
        .section-title { font-size: 2rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem; }
        .section-subtitle { font-size: 1rem; color: #6b7280; font-weight: 300; }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .video-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .video-card:hover { transform: translateY(-6px); box-shadow: 0 14px 30px rgba(0,0,0,0.08); }

        .video-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000;
        }

        .video-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: #000;
        }

        .overlay-click {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 4;
        }

        .play-button {
          width: 64px;
          height: 64px;
          border-radius: 999px;
          background: linear-gradient(135deg,#fbbf24,#f59e0b);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 28px rgba(245,158,11,0.28);
          border: 3px solid rgba(255,255,255,0.85);
        }
        .play-button:hover { transform: scale(1.05); }

        .video-top-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(0,0,0,0.6);
          color: #fbbf24;
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 700;
          z-index: 6;
          font-size: 0.85rem;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(245,158,11,0.18);
        }

        .controls-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          pointer-events: none;
        }
        .controls-overlay .center-btn {
          pointer-events: auto;
          width: 56px; height: 56px;
          border-radius: 999px;
          background: rgba(255,255,255,0.95);
          display:flex;align-items:center;justify-content:center;
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }

        .bottom-controls {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 12px;
          display:flex;
          gap:10px;
          justify-content:flex-end;
          z-index: 7;
        }

        .control-button {
          width:44px;height:44px;border-radius:10px;
          background: rgba(0,0,0,0.6);
          display:flex;align-items:center;justify-content:center;border: none;
          cursor:pointer;color:white;
        }
        .control-button:active { transform: scale(.98); }

        .video-info { padding: 12px 14px; }
        .video-info h3 { margin:0; font-size:1rem; color:#111; font-weight:700; }
        .video-info p { margin:6px 0 0; font-size:0.9rem; color:#666; line-height:1.4; }

        /* mobile tweaks */
        @media (max-width: 640px) {
          .play-button { width:56px; height:56px; }
          .controls-overlay .center-btn { width:52px; height:52px; }
          .videos-section { padding: 2.5rem 0.75rem; }
        }
      `}</style>

      <div className="section-header">
        <h2 className="section-title">Sacred Moments</h2>
        <p className="section-subtitle">Experience the divine celebration</p>
      </div>

      <div className="videos-grid">
        {videos.map((video, index) => {
          const playing = activeVideoIndex === index && !isPaused[index];
          const muted = !!isMuted[index];

          return (
            <div key={index} className="video-card" onClick={() => playVideo(index)} role="button" tabIndex={0}>
              <div className="video-container">
                {/* top badge */}
                <div className="video-top-badge">Reel {index + 1}</div>

                {/* Thumbnail view */}
                {activeVideoIndex !== index && (
                  <>
                    <img src={video.thumbnail} alt={video.title || `Reel ${index + 1}`} className="video-thumbnail" />
                    <div className="overlay-click" onClick={(e) => { e.stopPropagation(); playVideo(index); }}>
                      <div className="play-button" aria-hidden>
                        <Play color="#fff" />
                      </div>
                    </div>
                  </>
                )}

                {/* Active video player */}
                {activeVideoIndex === index && (
                  <>
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={video.src}
                      className="video-player"
                      playsInline
                      // don't set muted prop here; we control muted via ref to ensure autoplay works
                      // controls // keep native controls off because we provide our UI
                    />

                    {/* center overlay control */}
                    <div className="controls-overlay" aria-hidden>
                      <div className="center-btn" onClick={(e) => { e.stopPropagation(); togglePlayPause(index); }}>
                        {isPaused[index] ? <Play /> : <Pause />}
                      </div>
                    </div>

                    {/* bottom small controls */}
                    <div className="bottom-controls">
                      <button className="control-button" onClick={(e) => { e.stopPropagation(); toggleMute(index, e); }} aria-label="Mute/unmute">
                        {muted ? <VolumeX color="#fff" /> : <Volume2 color="#fff" />}
                      </button>
                      <button className="control-button" onClick={(e) => { e.stopPropagation(); handleFullscreen(index, e); }} aria-label="Fullscreen">
                        <Maximize2 color="#fff" />
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="video-info">
                <h3>{video.title || (index === 0 ? 'The Grand Performance' : 'Sacred Highlights')}</h3>
                <p>{video.description || (index === 0 ? 'An enchanting evening of devotional artistry' : 'Memorable moments from the ceremony')}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VideoSection;
