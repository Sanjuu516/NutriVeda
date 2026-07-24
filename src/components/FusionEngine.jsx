import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { Cpu, Sparkles, RefreshCw } from 'lucide-react';

export default function FusionEngine() {
  const [isMerged, setIsMerged] = useState(false);

  return (
    <section id="solution" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-widest border border-vedic-gold/40">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Innovation · AI Fusion Engine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vedic-charcoal">
            The NutriVeda <span className="gold-gradient-text">Fusion Engine</span>
          </h2>
          <p className="text-vedic-slate text-base sm:text-lg font-light">
            Interactive dual-hemisphere visualizer representing Modern Sports Science and Ayurvedic Intelligence merging into a single neural core.
          </p>
        </div>

        {/* Fusion Interactive Visualizer Box */}
        <div className="glass-card p-8 sm:p-14 rounded-3xl border border-vedic-gold/40 shadow-2xl relative overflow-hidden text-center space-y-8">
          
          {/* Interactive Morphing Container */}
          <div className="relative h-72 flex items-center justify-center">
            
            {/* Left Hemisphere (Sports Science) */}
            <motion.div
              animate={{
                x: isMerged ? 0 : -140,
                scale: isMerged ? 1.1 : 1
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-vedic-emerald to-teal-800 text-white p-4 flex flex-col items-center justify-center shadow-emerald-glow opacity-90"
            >
              <span className="text-3xl mb-1">🧪</span>
              <span className="font-serif text-sm font-bold">Sports Science</span>
              <span className="text-[10px] font-mono text-teal-200">Calories & Glycogen</span>
            </motion.div>

            {/* Right Hemisphere (Ayurveda) */}
            <motion.div
              animate={{
                x: isMerged ? 0 : 140,
                scale: isMerged ? 1.1 : 1
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-vedic-gold to-amber-700 text-white p-4 flex flex-col items-center justify-center shadow-gold-glow opacity-90"
            >
              <span className="text-3xl mb-1">🌿</span>
              <span className="font-serif text-sm font-bold">Ayurvedic Wisdom</span>
              <span className="text-[10px] font-mono text-amber-200">Doshas & Rasayanas</span>
            </motion.div>

            {/* Center Merged Core Badge when merged */}
            {isMerged && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute z-20 w-52 h-52 rounded-full bg-vedic-forest/90 border-4 border-vedic-gold flex flex-col items-center justify-center p-4 text-vedic-bg3 shadow-2xl backdrop-blur-md"
              >
                <Sparkles className="w-8 h-8 text-vedic-gold animate-spin-slow mb-1" />
                <span className="font-serif text-base font-extrabold text-vedic-gold">NUTRIVEDAs CORE</span>
                <span className="text-[10px] font-mono text-vedic-sand font-bold uppercase">100% Unified Intelligence</span>
              </motion.div>
            )}
          </div>

          {/* Merge Toggle Button */}
          <button
            onClick={() => {
              soundEngine.playSuccessTone();
              setIsMerged(!isMerged);
            }}
            className="px-8 py-3.5 rounded-full bg-vedic-forest hover:bg-vedic-emerald text-vedic-bg3 font-bold text-xs tracking-wider uppercase transition-all shadow-lg inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4 text-vedic-gold" />
            <span>{isMerged ? 'Separate Science Hemispheres' : 'Merge into Unified AI Core'}</span>
          </button>

        </div>

      </div>
    </section>
  );
}
