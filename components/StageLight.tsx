'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StageLight: React.FC = () => {
  const [lights, setLights] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    // Create initial stage lights
    const initialLights = Array.from({ length: 3 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      id: i
    }));
    setLights(initialLights);

    // Animate lights periodically
    const interval = setInterval(() => {
      setLights(prev => prev.map(light => ({
        ...light,
        x: Math.random() * 100,
        y: Math.random() * 100
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stage-lights">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="stage-light"
          style={{
            position: 'absolute',
            left: `${light.x}%`,
            top: `${light.y}%`,
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0.1) 40%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.4, 0.7, 0.3, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: light.id * 2
          }}
        />
      ))}
    </div>
  );
};

export default StageLight;