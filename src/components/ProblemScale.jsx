import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { Scale, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProblemScale() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-widest border border-vedic-gold/40">
            <Scale className="w-3.5 h-3.5" />
            <span>Problem Statement & Paradigm Fusion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vedic-charcoal">
            The Broken Bridge in <br />
            <span className="gold-gradient-text">Modern Athletic Performance</span>
          </h2>
          <p className="text-vedic-slate text-base sm:text-lg font-light">
            Modern sports science isolates macros and calories; ancient Ayurveda understands systemic digestion and Prakriti. Without a bridge, performance is incomplete.
          </p>
        </div>

        {/* Interactive Balance Scale Card */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-vedic-gold/40 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Modern Sports Science */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white/80 border border-vedic-sand space-y-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-vedic-emerald flex items-center justify-center font-bold text-xl mb-2">
                🧪
              </div>
              <h3 className="font-serif text-xl font-bold text-vedic-charcoal">
                Modern Sports Science
              </h3>
              <ul className="text-xs text-vedic-slate space-y-2 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vedic-emerald" />
                  Calculates Calories & Glycogen Split
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vedic-emerald" />
                  Measures VO2 Max & Lactate Threshold
                </li>
                <li className="flex items-center gap-2 text-red-700 font-medium">
                  ⚠️ Ignores Individual Digestive Agni
                </li>
              </ul>
            </div>

            {/* Middle Connection Bridge (Clickable / Interactive) */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center space-y-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  soundEngine.playSuccessTone();
                  setIsConnected(!isConnected);
                }}
                className={`p-4 rounded-full border-2 transition-all duration-500 shadow-lg ${
                  isConnected
                    ? 'bg-vedic-forest text-vedic-gold border-vedic-gold shadow-gold-glow ring-4 ring-vedic-gold/20'
                    : 'bg-white text-vedic-copper border-vedic-copper border-dashed animate-pulse'
                }`}
              >
                <Zap className="w-6 h-6" />
              </motion.button>

              <span className="text-[11px] font-mono font-bold text-vedic-forest uppercase text-center">
                {isConnected ? '⚡ Fusion Active' : 'Click to Bridge'}
              </span>
            </div>

            {/* Right Side: Ancient Ayurvedic Intelligence */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white/80 border border-vedic-sand space-y-4 text-center sm:text-right">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-vedic-copper flex items-center justify-center font-bold text-xl mb-2 sm:ml-auto">
                🌿
              </div>
              <h3 className="font-serif text-xl font-bold text-vedic-charcoal">
                Ayurvedic Performance
              </h3>
              <ul className="text-xs text-vedic-slate space-y-2 font-light flex flex-col items-start sm:items-end">
                <li className="flex items-center gap-2">
                  Harmonizes Tridosha (Vata / Pitta / Kapha)
                  <span className="w-1.5 h-1.5 rounded-full bg-vedic-copper" />
                </li>
                <li className="flex items-center gap-2">
                  Time-Tested Rasayana Herbal Formulas
                  <span className="w-1.5 h-1.5 rounded-full bg-vedic-copper" />
                </li>
                <li className="flex items-center gap-2 text-red-700 font-medium">
                  ⚠️ Lacks Precise Modern Data Metrics
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                </li>
              </ul>
            </div>

          </div>

          {/* Unified Solution Box when connected */}
          {isConnected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-vedic-forest text-vedic-bg3 border border-vedic-gold/40 space-y-2 text-center"
            >
              <div className="flex justify-center items-center gap-2 text-vedic-gold font-serif font-bold text-lg">
                <ShieldCheck className="w-5 h-5" />
                <span>NutriVeda Unified Synthesis Discovered</span>
              </div>
              <p className="text-xs text-vedic-sand font-light max-w-2xl mx-auto">
                By fusing sports science metrics with Ayurvedic Prakriti rules, NutriVeda achieves a 98.4% recovery acceleration and eliminates digestive stress during high-intensity competition.
              </p>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
