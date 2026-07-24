import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { Sparkles, Heart } from 'lucide-react';

const SANSKRIT_QUOTE = "Yad Annam Tan Manah — As is the food, so is the mind.";

export default function TempleFooter() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= SANSKRIT_QUOTE.length) {
        setDisplayedText(SANSKRIT_QUOTE.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative pt-24 pb-12 px-6 bg-vedic-bg2 border-t border-vedic-gold/30 text-vedic-charcoal overflow-hidden z-10">
      <div className="max-w-6xl mx-auto space-y-12 text-center relative z-10">
        
        {/* Animated Golden SVG Temple Mandala */}
        <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full text-vedic-gold opacity-40">
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
              <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" fill="none" />
              <polygon points="100,10 185,150 15,150" stroke="currentColor" strokeWidth="1" fill="none" />
              <polygon points="100,190 185,50 15,50" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </motion.div>
          <div className="relative w-16 h-16 rounded-full bg-vedic-bg3 border border-vedic-gold/60 flex items-center justify-center shadow-gold-glow">
            <span className="text-3xl">🌿</span>
          </div>
        </div>

        {/* Typewriter Sanskrit Wisdom Quote */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="text-xs font-mono font-bold text-vedic-gold uppercase tracking-widest">
            ANCIENT VEDIC WISDOM
          </div>
          <div className="font-serif text-xl sm:text-2xl font-bold text-vedic-charcoal min-h-[3.5rem]">
            "{displayedText}"
          </div>
        </div>

        {/* Project Credits */}
        <div className="border-t border-vedic-sand pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-vedic-slate">
          <div>
            NUTRIVEDAs · VEDIC VISION 2K24 INNOVATION PLATFORM
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-vedic-copper fill-current" />
            <span>for Indian Student Athletes</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
