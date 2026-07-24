import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target;
      const isInteractive = target.closest('button, a, input, select, .interactive-hover');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Golden/Emerald Energy Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen"
        animate={{
          x: mousePos.x - (isHovered ? 28 : 18),
          y: mousePos.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 300, mass: 0.5 }}
        style={{
          background: isHovered
            ? 'radial-gradient(circle, rgba(212,160,23,0.8) 0%, rgba(15,118,110,0.4) 60%, rgba(0,0,0,0) 100%)'
            : 'radial-gradient(circle, rgba(15,118,110,0.6) 0%, rgba(212,160,23,0.3) 70%, rgba(0,0,0,0) 100%)',
          filter: 'blur(2px)'
        }}
      />

      {/* Inner Precision Core Orb */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-3 h-3 rounded-full bg-vedic-gold shadow-gold-glow"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isHovered ? 0.6 : 1
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.1 }}
      />
    </>
  );
}
