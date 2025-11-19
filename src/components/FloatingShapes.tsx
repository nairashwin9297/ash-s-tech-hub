import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingShapes: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shapes = [
    { type: 'cube', size: 60, left: '10%', top: '20%', speed: 0.5 },
    { type: 'sphere', size: 80, right: '15%', top: '40%', speed: 0.3 },
    { type: 'cube', size: 50, left: '80%', top: '60%', speed: 0.4 },
    { type: 'sphere', size: 70, left: '20%', top: '80%', speed: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${
            shape.type === 'cube'
              ? 'border-2 border-primary/30'
              : 'rounded-full bg-gradient-to-br from-primary/20 to-accent/20'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            right: shape.right,
            top: shape.top,
            transform: `translateY(${scrollY * shape.speed}px) rotateX(${
              scrollY * 0.1
            }deg) rotateY(${scrollY * 0.1}deg)`,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};
