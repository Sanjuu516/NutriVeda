import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CrackedGlassChallenges() {
  const [healedIndex, setHealedIndex] = useState(null);

  const challenges = [
    {
      title: 'Competition GI Distress & Nausea',
      problem: 'High-intensity nervous anxiety shuts down digestion, causing severe stomach cramps in match play.',
      solution: 'Ayurvedic Cooling Dravyas (Coriander & Amla Infusions) preserve Agni digestive fire without bloat.',
      icon: '🤢'
    },
    {
      title: 'Overtraining Inflammation & Burnout',
      problem: 'Repeated high-strain sessions increase systemic cortisol, causing joint degradation.',
      solution: 'Ashwagandha + Boswellia Rasayanas inhibit inflammatory cytokines and accelerate REM repair.',
      icon: '🔥'
    },
    {
      title: 'Rapid Weight Cut Muscle Loss',
      problem: 'Combat athletes lose up to 15% lean muscular force during aggressive weight cuts.',
      solution: 'Shilajit ATP Preservation & Sattu slow-release amino acids maintain muscle force during cuts.',
      icon: '🏋️'
    }
  ];

  return (
    <section id="challenges" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-widest border border-vedic-gold/40">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Kintsugi Repair Engine · Challenges Solved</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vedic-charcoal">
            Heal Athletic Hurdles with <br />
            <span className="gold-gradient-text">Golden Kintsugi Science</span>
          </h2>
          <p className="text-vedic-slate text-base sm:text-lg font-light">
            Hover over the cracked glass panels to watch golden Kintsugi restoration heal the challenge and reveal the Ayurvedic solution.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((c, idx) => {
            const isHealed = healedIndex === idx;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, y: -6 }}
                onMouseEnter={() => {
                  soundEngine.playSuccessTone();
                  setHealedIndex(idx);
                }}
                onMouseLeave={() => setHealedIndex(null)}
                className={`glass-card p-8 rounded-3xl border transition-all duration-500 relative space-y-6 cursor-pointer overflow-hidden ${
                  isHealed ? 'border-vedic-gold shadow-gold-glow bg-white' : 'border-vedic-sand'
                }`}
              >
                {/* SVG Kintsugi Golden Crack Overlay */}
                <svg viewBox="0 0 300 200" className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${isHealed ? 'healed opacity-100' : 'opacity-40'}`}>
                  <path
                    d="M 20 10 L 80 70 L 140 40 L 220 120 L 280 180"
                    stroke={isHealed ? '#D4A017' : '#94A3B8'}
                    strokeWidth={isHealed ? '3' : '1.5'}
                    fill="none"
                    className="crack-line"
                  />
                  <path
                    d="M 140 40 L 190 10 M 80 70 L 40 160"
                    stroke={isHealed ? '#D4A017' : '#94A3B8'}
                    strokeWidth={isHealed ? '2.5' : '1'}
                    fill="none"
                    className="crack-line"
                  />
                </svg>

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-4xl">{c.icon}</span>
                  <span className={`text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full ${
                    isHealed ? 'bg-vedic-gold text-vedic-charcoal font-extrabold' : 'bg-vedic-sand text-vedic-slate'
                  }`}>
                    {isHealed ? '✨ Kintsugi Healed' : 'Cracked State'}
                  </span>
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="font-serif font-bold text-lg text-vedic-charcoal">{c.title}</h3>
                  <p className="text-xs text-vedic-slate font-light leading-relaxed">
                    {isHealed ? c.solution : c.problem}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold font-mono text-vedic-forest relative z-10">
                  <Sparkles className="w-3.5 h-3.5 text-vedic-gold" />
                  <span>{isHealed ? 'Ayurvedic Solution Active' : 'Hover to Restore'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
