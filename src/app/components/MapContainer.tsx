'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { PERFORMED_CITIES, RequestedCity } from '../data/cities';

type MapProps = { cities: RequestedCity[] };

const MapComponent = dynamic<any>(
  () => import('./MapComponent').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: '100%', width: '100%', background: 'linear-gradient(135deg, #1a0a10, #2d1520)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <div style={{ width: 32, height: 32, border: '2px solid #D4AF37', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <span style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', letterSpacing: '0.2em' }}>Loading Map...</span>
      </div>
    )
  }
);

export default function PerformedCitiesMap() {
  const [activeCity, setActiveCity] = useState(PERFORMED_CITIES[0]);

  const citiesForMap: RequestedCity[] = PERFORMED_CITIES.map(c => ({
    id: c.id,
    name: c.name,
    state: c.state,
    lat: c.lat,
    lng: c.lng,
    requestCount: 60
  }));

  return (
    <section className="perf-section">
      <div className="container" style={{ padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <div className="perf-badge">
            <span className="perf-badge-text">✦ Jinshasan Prabhavna Map ✦</span>
          </div>
          <h2 className="perf-heading">
            Where We&apos;ve<br />
            <span className="perf-heading-gold">Performed</span>
          </h2>
          <p className="perf-subtitle" style={{ margin: '0 auto' }}>
            Every pin marks a city touched by the Ratnatraya experience — a milestone in the movement of Jain cultural renaissance across India.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="perf-layout">

          {/* Left: City Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="perf-cards"
          >
            {PERFORMED_CITIES.map((city, i) => (
              <motion.button
                key={city.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setActiveCity(city)}
                className={`perf-city-card ${activeCity.id === city.id ? 'active' : ''}`}
              >
                <div style={{ textAlign: 'left' }}>
                  <div className="perf-city-meta">{city.state}</div>
                  <div className="perf-city-name">{city.name}</div>
                  <div className="perf-city-highlight">{city.highlight}</div>
                </div>
                <div className="perf-city-stat">
                  <span>👥</span>
                  <span>{city.audienceCount}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="perf-map-wrapper"
          >
            <div className="perf-map-frame">
              <MapComponent cities={citiesForMap} />
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="perf-stats-strip"
        >
          {[
            { value: '5+', label: 'Cities Performed', sub: 'and still growing' },
            { value: '100,000+', label: 'Audience Reached', sub: 'across all shows' },
            { value: '100%', label: 'Free Entry Always', sub: 'Jinshasan Prabhavna' },
          ].map(stat => (
            <div key={stat.label} className="perf-stat-cell">
              <div className="perf-stat-value">{stat.value}</div>
              <div className="perf-stat-label">{stat.label}</div>
              <div className="perf-stat-sub">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
