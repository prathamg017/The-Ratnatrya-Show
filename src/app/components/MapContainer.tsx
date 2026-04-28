'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { PERFORMED_CITIES, RequestedCity, PerformedCity } from '../data/cities';

const MapComponent = dynamic<any>(
  () => import('./MapComponent').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: '100%', width: '100%', background: 'rgba(114, 47, 55, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="spinner"></div>
      </div>
    )
  }
);

export default function PerformedCitiesMap() {
  const [activeCity, setActiveCity] = useState<PerformedCity | null>(null);
  const [showMap, setShowMap] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [unavailableMedia, setUnavailableMedia] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!activeCity && PERFORMED_CITIES.length > 0) {
      setActiveCity(PERFORMED_CITIES[0]);
    }
  }, [activeCity]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  const citiesForMap: RequestedCity[] = PERFORMED_CITIES.map(c => ({
    id: c.id,
    name: c.name,
    state: c.state,
    lat: c.lat,
    lng: c.lng,
    requestCount: 60
  }));

  const allMedia = activeCity ? [
    ...(activeCity.videos?.map(v => ({ type: 'video' as const, src: `/gallery/${activeCity.folder}/${v}` })) || []),
    ...(activeCity.images?.map(img => ({ type: 'image' as const, src: `/gallery/${activeCity.folder}/${img}` })) || [])
  ] : [];
  const availableMedia = allMedia.filter((m) => !unavailableMedia.has(m.src));

  const markMediaUnavailable = (src: string) => {
    setUnavailableMedia((prev) => {
      if (prev.has(src)) return prev;
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  };

  const handleCityClick = (city: PerformedCity) => {
    setActiveCity(city);
    setShowMap(false);
    setSelectedIndex(null);
    setUnavailableMedia(new Set());
  };

  const nextMedia = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null || availableMedia.length === 0) return;
    setSelectedIndex((selectedIndex + 1) % availableMedia.length);
  };

  const prevMedia = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null || availableMedia.length === 0) return;
    setSelectedIndex((selectedIndex - 1 + availableMedia.length) % availableMedia.length);
  };

  useEffect(() => {
    if (availableMedia.length === 0) {
      if (selectedIndex !== null) setSelectedIndex(null);
      return;
    }
    if (selectedIndex !== null && selectedIndex >= availableMedia.length) {
      setSelectedIndex(availableMedia.length - 1);
    }
  }, [availableMedia.length, selectedIndex]);

  return (
    <section className="perf-section-lux">
      <div className="container">

        <div className="lux-header">
          <span className="lux-badge">✦ Performance Archive ✦</span>
          <h2 className="lux-title">
            Where We&apos;ve <span className="gold-text">Performed</span>
          </h2>
          <p className="lux-subtitle">
            {showMap 
              ? "Mapping our journey of cultural revival across the heart of India."
              : `Visual glimpses from our performance in ${activeCity?.name}.`
            }
          </p>
        </div>

        <div className="lux-layout">
          {/* Sidebar */}
          <div className="lux-sidebar custom-scrollbar">
            {PERFORMED_CITIES.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCityClick(city)}
                className={`lux-city-card ${activeCity?.id === city.id ? 'active' : ''}`}
              >
                <div className="card-inner">
                  <span className="city-state-tag">{city.state}</span>
                  <h4 className="city-name-lux">{city.name}</h4>
                  <p className="city-highlight-lux">{city.highlight}</p>
                </div>
                <div className="card-arrow">→</div>
              </button>
            ))}
            {!showMap && (
              <button className="lux-back-btn" onClick={() => { setShowMap(true); setSelectedIndex(null); }}>
                ← Return to National Map
              </button>
            )}
          </div>

          {/* Main Display */}
          <div className="lux-main-display">
            <div className="lux-display-frame">
              {showMap ? (
                <div style={{ height: '100%' }}>
                  <MapComponent cities={citiesForMap} />
                </div>
              ) : (
                <div className="lux-gallery-window" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="gallery-header">
                    <div className="header-info">
                      <span className="header-city">{activeCity?.name}</span>
                      <span className="header-status">Archive Loaded</span>
                    </div>
                    <button className="header-close" onClick={() => setShowMap(true)}>✕ Close</button>
                  </div>

                  <div className="gallery-body custom-scrollbar">
                    <div className="lux-grid">
                      {availableMedia.map((media, idx) => (
                        <div key={`${activeCity?.id}-${idx}`} className="lux-grid-item" onClick={() => setSelectedIndex(idx)}>
                          {media.type === 'video' ? (
                            <video src={media.src} muted loop autoPlay onError={() => markMediaUnavailable(media.src)} />
                          ) : (
                            <img src={media.src} alt="" className="thumb-img" onError={() => markMediaUnavailable(media.src)} />
                          )}
                          <div className="item-lux-overlay">
                            <span className="type-tag">{media.type === 'video' ? 'Cinema' : 'Glimpse'}</span>
                            <span className="action-hint">Tap to Expand</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="lux-stats">
          <div className="stat-item-lux">
            <span className="stat-val">5+</span>
            <span className="stat-lab">Major Cities</span>
          </div>
          <div className="stat-item-lux border-x">
            <span className="stat-val">100k+</span>
            <span className="stat-lab">Lives Touched</span>
          </div>
          <div className="stat-item-lux">
            <span className="stat-val">100%</span>
            <span className="stat-lab">Cultural Purity</span>
          </div>
        </div>

      </div>
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedIndex !== null && availableMedia[selectedIndex] && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="media-viewer-overlay"
              style={{
                position: 'fixed',
                inset: 0,
                top: 0,
                left: 0,
                width: '100vw',
                height: '100dvh',
                zIndex: 10000,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className="viewer-controls-top" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 4 }}>
                <button className="viewer-close-pill" onClick={() => setSelectedIndex(null)}>✕ Close</button>
              </div>

              <div className="viewer-stage" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 'clamp(1rem, 2vw, 2rem)' }}>
                <button className="nav-arrow left" onClick={prevMedia}>‹</button>
                <button className="nav-arrow right" onClick={nextMedia}>›</button>

                <div className="stage-content" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${availableMedia[selectedIndex].type}-${availableMedia[selectedIndex].src}`}
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.2 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="focus-media-wrap"
                      style={{
                        width: 'min(92vw, 1240px)',
                        height: 'min(calc(100dvh - 170px), 760px)',
                        maxWidth: '1240px',
                        maxHeight: '760px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        background: 'rgba(12,12,12,0.82)',
                        boxShadow: '0 30px 70px rgba(0,0,0,0.35)',
                        border: '1px solid rgba(212,175,55,0.22)',
                      }}
                    >
                      {availableMedia[selectedIndex].type === 'image' ? (
                        <img 
                          src={availableMedia[selectedIndex].src} 
                          alt="Full view" 
                          className="focus-media-element"
                          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                          onError={() => markMediaUnavailable(availableMedia[selectedIndex].src)}
                        />
                      ) : (
                        <video 
                          src={availableMedia[selectedIndex].src} 
                          controls 
                          autoPlay 
                          playsInline 
                          className="focus-media-element"
                          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#000' }}
                          onError={() => markMediaUnavailable(availableMedia[selectedIndex].src)}
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="viewer-thumb-rail custom-scrollbar" style={{ height: '90px', padding: '1rem', display: 'flex', gap: '0.75rem', overflowX: 'auto' }}>
                {availableMedia.map((m, i) => (
                  <div 
                    key={`thumb-${i}`} 
                    className={`viewer-thumb-item ${selectedIndex === i ? 'active' : ''}`}
                    onClick={() => setSelectedIndex(i)}
                  >
                    {m.type === 'video' ? (
                      <video src={m.src} muted onError={() => markMediaUnavailable(m.src)} />
                    ) : (
                      <img src={m.src} alt="" className="rail-thumb-img" onError={() => markMediaUnavailable(m.src)} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <style jsx>{`
        .perf-section-lux {
          padding: 6rem 0;
          background: #722f37;
          position: relative;
          color: #fffff0;
        }

        .lux-header { text-align: center; margin-bottom: 4rem; }
        .lux-badge { display: inline-block; color: #d4af37; font-weight: 800; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem; }
        .lux-title { font-family: var(--font-serif); font-size: 3.5rem; color: #fff; line-height: 1.1; }
        .gold-text { color: #d4af37; }
        .lux-subtitle { color: rgba(255,255,240,0.7); max-width: 600px; margin: 1.5rem auto 0; font-size: 1.1rem; }

        .lux-layout { display: grid; grid-template-columns: 380px 1fr; gap: 3rem; height: 650px; }

        .lux-sidebar { display: flex; flex-direction: column; gap: 1rem; overflow-y: auto; padding-right: 1rem; }

        .lux-city-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(212,175,55,0.2);
          padding: 1.5rem;
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          text-align: left;
          color: #fff;
          backdrop-filter: blur(10px);
        }

        .lux-city-card:hover { transform: translateX(10px); background: rgba(255,255,255,0.1); border-color: #d4af37; }
        .lux-city-card.active { background: #d4af37; color: #722f37; border-color: #d4af37; }

        .city-state-tag { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 800; opacity: 0.7; }
        .city-name-lux { font-family: var(--font-serif); font-size: 1.4rem; margin: 0.2rem 0; }
        .city-highlight-lux { font-size: 0.85rem; opacity: 0.8; }

        .lux-back-btn { margin-top: 1.5rem; padding: 1.25rem; background: none; border: 1px solid rgba(212,175,55,0.3); color: #d4af37; border-radius: 12px; font-weight: 700; cursor: pointer; transition: all 0.3s ease; }
        .lux-back-btn:hover { background: #d4af37; color: #722f37; }

        .lux-main-display { position: relative; background: #000; border-radius: 24px; box-shadow: 0 30px 70px rgba(0,0,0,0.5); border: 1px solid rgba(212,175,55,0.2); overflow: hidden; }
        .lux-display-frame { height: 100%; position: relative; }

        .lux-gallery-window { height: 100%; display: flex; flex-direction: column; background: #050505; }
        .gallery-header { padding: 1.25rem 2rem; background: #111; border-bottom: 1px solid #222; display: flex; justify-content: space-between; align-items: center; }
        .header-city { font-family: var(--font-serif); font-size: 1.2rem; color: #d4af37; font-weight: 700; }
        .header-status { font-size: 0.65rem; color: #666; text-transform: uppercase; margin-left: 1rem; }
        .header-close { background: rgba(255,255,255,0.05); border: 1px solid #333; color: #fff; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.75rem; font-weight: 700; cursor: pointer; }
        .header-close:hover { background: #d4af37; color: #000; border-color: #d4af37; }

        .gallery-body { flex: 1; overflow-y: auto; padding: 2rem; }
        .lux-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

        .lux-grid-item { aspect-ratio: 4/3; background: #111; border-radius: 12px; overflow: hidden; cursor: pointer; position: relative; transition: transform 0.4s ease; border: 1px solid #222; }
        .lux-grid-item:hover { transform: scale(1.03); border-color: #d4af37; }
        .thumb-img { width: 100%; height: 100%; object-fit: cover; }
        .lux-grid-item video { width: 100%; height: 100%; object-fit: cover; }

        .item-lux-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); opacity: 0; transition: opacity 0.3s ease; display: flex; flex-direction: column; justify-content: flex-end; padding: 1rem; }
        .lux-grid-item:hover .item-lux-overlay { opacity: 1; }
        .type-tag { font-size: 0.6rem; color: #d4af37; font-weight: 800; text-transform: uppercase; }
        .action-hint { color: #fff; font-size: 0.75rem; font-weight: 500; }

        .media-viewer-overlay {
          position: fixed;
          inset: 0;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100dvh;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          border-radius: 0;
          overflow: hidden;
          background: radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,244,232,0.92) 45%, rgba(14,14,14,0.96) 100%);
          backdrop-filter: blur(8px);
        }

        .viewer-controls-top {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          z-index: 4;
        }

        .viewer-close-pill {
          background: rgba(255,255,255,0.85);
          color: #4e1b24;
          border: 1px solid rgba(78, 27, 36, 0.15);
          padding: 0.65rem 1rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0,0,0,0.18);
        }
        .viewer-close-pill:hover { border-color: rgba(212,175,55,0.8); color: #2f1016; }

        .viewer-stage {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 1.5rem;
        }

        .stage-content { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; }
        .focus-media-wrap { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .focus-media-element { width: 100%; height: 100%; object-fit: contain; }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.85);
          color: #722f37;
          border: 1px solid rgba(114,47,55,0.2);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 3;
        }
        .nav-arrow:hover { background: #d4af37; color: #2f1016; }
        .nav-arrow.left { left: 1rem; }
        .nav-arrow.right { right: 1rem; }

        .viewer-thumb-rail {
          height: 90px;
          padding: 1rem;
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          border-top: 1px solid rgba(114,47,55,0.12);
          background: rgba(255,255,255,0.78);
        }

        .viewer-thumb-item {
          width: 72px;
          min-width: 72px;
          height: 72px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.55;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        .viewer-thumb-item.active { opacity: 1; border-color: #d4af37; box-shadow: 0 0 0 1px #722f37 inset; }
        .rail-thumb-img { width: 100%; height: 100%; object-fit: cover; }
        .viewer-thumb-item video { width: 100%; height: 100%; object-fit: cover; }

        .lux-stats { margin-top: 5rem; display: flex; justify-content: center; gap: 6rem; }
        .stat-item-lux { display: flex; flex-direction: column; align-items: center; }
        .stat-val { color: #d4af37; font-size: 3rem; font-weight: 800; font-family: var(--font-serif); }
        .stat-lab { color: rgba(255,255,240,0.6); font-size: 0.9rem; text-transform: uppercase; font-weight: 700; letter-spacing: 2px; }
        .border-x { border-left: 1px solid rgba(255,255,255,0.1); border-right: 1px solid rgba(255,255,255,0.1); padding: 0 6rem; }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 10px; }

        .spinner { width: 30px; height: 30px; border: 3px solid #d4af37; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 1200px) {
          .lux-layout { grid-template-columns: 1fr; height: auto; }
          .lux-sidebar { flex-direction: row; overflow-x: auto; padding-bottom: 1rem; }
          .lux-city-card { min-width: 300px; }
          .lux-main-display { height: 600px; }
          .border-x { border: none; padding: 0; }
          .lux-stats { gap: 2rem; flex-wrap: wrap; }
          .viewer-stage { padding: 1rem; }
          .nav-arrow { width: 45px; height: 45px; font-size: 1.5rem; }
          .viewer-controls-top { top: 0.75rem; right: 0.75rem; }
        }
      `}</style>
    </section>
  );
}
