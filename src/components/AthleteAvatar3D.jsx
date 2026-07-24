import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplets, Zap, Shield, HeartPulse } from 'lucide-react';

export default function AthleteAvatar3D({ weight, height, age, trainingLoad, selectedSport, dosha }) {
  // Calculate dynamic physical metrics
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
  const estimatedBMR = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  const tdee = Math.round(estimatedBMR * (selectedSport.macroSplit.targetCalMultiplier + (trainingLoad / 100) * 0.3));
  const proteinReq = Math.round(weight * (1.8 + (trainingLoad / 100) * 0.4));
  const hydrationReq = (weight * 0.04 + (trainingLoad / 100) * 1.2).toFixed(1);

  return (
    <div className="glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl space-y-6 flex flex-col justify-between h-full">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-vedic-sand pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-vedic-gold animate-ping" />
          <span className="font-mono text-xs font-bold text-vedic-forest uppercase">
            3D LIVING ATHLETE AVATAR
          </span>
        </div>
        <span className="text-xs font-mono bg-vedic-gold/20 text-vedic-copper px-2.5 py-1 rounded-full font-bold">
          BMI: {bmi} ({bmi < 22 ? 'Lean' : bmi < 26 ? 'Athletic Peak' : 'Power Class'})
        </span>
      </div>

      {/* Center 3D Silhouette Canvas & Heatmap */}
      <div className="relative h-64 flex items-center justify-center my-2">
        {/* Glow Halo */}
        <div className="absolute inset-0 bg-radial from-vedic-emerald/20 via-vedic-gold/10 to-transparent rounded-full blur-2xl animate-pulse-glow" />

        {/* Anatomical Athlete SVG Silhouette */}
        <svg viewBox="0 0 200 320" className="h-full w-auto drop-shadow-xl z-10">
          <defs>
            <linearGradient id="muscleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#0F766E" />
            </linearGradient>
          </defs>

          {/* Head & Neck */}
          <circle cx="100" cy="35" r="20" fill="#14532D" opacity="0.8" />
          
          {/* Shoulders & Traps */}
          <path d="M 65 65 Q 100 55 135 65 L 145 90 L 55 90 Z" fill="url(#muscleGlow)" opacity="0.9" />

          {/* Chest & Upper Torso */}
          <path d="M 60 90 L 140 90 L 130 145 L 70 145 Z" fill="#0F766E" opacity="0.85" />

          {/* Core Obliques & Abs */}
          <path d="M 72 145 L 128 145 L 122 190 L 78 190 Z" fill="#D4A017" opacity="0.8" />

          {/* Arms (Left & Right) */}
          <rect x="35" y="85" width="18" height="65" rx="8" fill="#14532D" opacity="0.85" />
          <rect x="147" y="85" width="18" height="65" rx="8" fill="#14532D" opacity="0.85" />

          {/* Forearms */}
          <rect x="30" y="152" width="16" height="60" rx="8" fill="url(#muscleGlow)" />
          <rect x="154" y="152" width="16" height="60" rx="8" fill="url(#muscleGlow)" />

          {/* Legs & Quads */}
          <path d="M 75 190 L 98 190 L 95 265 L 72 265 Z" fill="url(#muscleGlow)" />
          <path d="M 102 190 L 125 190 L 128 265 L 105 265 Z" fill="url(#muscleGlow)" />

          {/* Calves & Lower Legs */}
          <rect x="74" y="268" width="18" height="42" rx="6" fill="#14532D" opacity="0.85" />
          <rect x="108" y="268" width="18" height="42" rx="6" fill="#14532D" opacity="0.85" />
        </svg>

        {/* Dynamic Floating Muscle Activation Badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl border border-vedic-gold/40 shadow-sm text-[11px] font-mono font-bold text-vedic-charcoal flex items-center gap-1.5"
        >
          <Flame className="w-3.5 h-3.5 text-vedic-copper" />
          <span>Fatigue: {trainingLoad > 70 ? 'High' : 'Optimal'}</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-xl border border-vedic-emerald/40 shadow-sm text-[11px] font-mono font-bold text-vedic-charcoal flex items-center gap-1.5"
        >
          <Droplets className="w-3.5 h-3.5 text-vedic-emerald" />
          <span>Hydration: {hydrationReq} L</span>
        </motion.div>
      </div>

      {/* Real-time Dynamic Metrics Dashboard */}
      <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
        <div className="p-3 rounded-2xl bg-white/80 border border-vedic-sand flex items-center gap-3">
          <div className="p-2 rounded-xl bg-vedic-gold/20 text-vedic-copper">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-vedic-slate font-semibold">TDEE Calories</div>
            <div className="text-sm font-bold text-vedic-charcoal font-mono">{tdee} kcal</div>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-white/80 border border-vedic-sand flex items-center gap-3">
          <div className="p-2 rounded-xl bg-vedic-emerald/20 text-vedic-forest">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-vedic-slate font-semibold">Daily Protein</div>
            <div className="text-sm font-bold text-vedic-charcoal font-mono">{proteinReq} g</div>
          </div>
        </div>
      </div>
    </div>
  );
}
