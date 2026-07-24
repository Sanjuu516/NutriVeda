import React from 'react';
import { motion } from 'framer-motion';
import { SPORTS_DATABASE } from '../data/sportsData';
import { soundEngine } from '../utils/audio';
import { Sparkles, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export default function MultiSportSelector({ selectedSport, onSelectSport, onLaunchEngine }) {
  return (
    <section id="sports" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-widest border border-vedic-gold/40">
            <Zap className="w-3.5 h-3.5" />
            <span>Feature 01 · Multi-Sport Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vedic-charcoal">
            Select Your <span className="gold-gradient-text">Athletic Sport</span>
          </h2>
          <p className="text-vedic-slate text-base sm:text-lg font-light">
            Every sport triggers a unique metabolic logic matrix, custom muscle heatmap, tailored Ayurvedic Dravyas, and biomechanical workout plans.
          </p>
        </div>

        {/* Multi-Sport Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {SPORTS_DATABASE.map((sport) => {
            const isSelected = selectedSport.id === sport.id;
            return (
              <motion.button
                key={sport.id}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  soundEngine.playClick();
                  onSelectSport(sport);
                }}
                onMouseEnter={() => soundEngine.playHoverChime()}
                className={`relative p-4 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-vedic-bg3 border-2 border-vedic-gold shadow-gold-glow ring-2 ring-vedic-gold/30'
                    : 'glass-card hover:bg-white border border-vedic-sand hover:border-vedic-emerald/50'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 text-vedic-gold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
                <div className="text-4xl mb-2 filter drop-shadow-md">{sport.icon}</div>
                <h3 className="font-serif font-bold text-sm text-vedic-charcoal">{sport.name}</h3>
                <span className="text-[10px] text-vedic-slate opacity-75 mt-1 font-mono">
                  {sport.macroSplit.carbs}C / {sport.macroSplit.protein}P / {sport.macroSplit.fat}F
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Sport Profile Showcase Card */}
        <motion.div
          key={selectedSport.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-3xl border border-vedic-gold/40 shadow-2xl relative overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div 
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: selectedSport.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Sport Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-5xl">{selectedSport.icon}</span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-vedic-charcoal">
                    {selectedSport.name} Engine Profile
                  </h3>
                  <p className="text-xs font-mono text-vedic-emerald font-semibold uppercase tracking-wider">
                    {selectedSport.tagline}
                  </p>
                </div>
              </div>

              <p className="text-vedic-slate text-sm leading-relaxed font-light">
                {selectedSport.description}
              </p>

              {/* Prime Movers & Fatigue Zones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-white/80 border border-vedic-sand">
                  <span className="font-mono text-[10px] font-bold text-vedic-forest uppercase block mb-1">
                    🔥 Prime Muscle Movers
                  </span>
                  <span className="text-vedic-charcoal font-medium">
                    {selectedSport.muscleFocus.primeMovers.join(' • ')}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 border border-vedic-sand">
                  <span className="font-mono text-[10px] font-bold text-vedic-copper uppercase block mb-1">
                    ⚡ High Fatigue Zones
                  </span>
                  <span className="text-vedic-charcoal font-medium">
                    {selectedSport.muscleFocus.fatigueZones.join(' • ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action & Quick Preview */}
            <div className="lg:col-span-5 bg-vedic-bg2 p-6 rounded-2xl border border-vedic-gold/30 space-y-5">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-vedic-charcoal border-b border-vedic-sand pb-3">
                <span>METABOLIC MACRO TARGET</span>
                <span className="text-vedic-emerald font-bold">{selectedSport.macroSplit.hydrationLiters}L Water / Day</span>
              </div>

              {/* Macro Distribution Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-amber-800">Carbs {selectedSport.macroSplit.carbs}%</span>
                  <span className="text-emerald-800">Protein {selectedSport.macroSplit.protein}%</span>
                  <span className="text-copper">Fats {selectedSport.macroSplit.fat}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-vedic-sand flex overflow-hidden p-0.5">
                  <div style={{ width: `${selectedSport.macroSplit.carbs}%` }} className="bg-amber-500 h-full rounded-l-full" />
                  <div style={{ width: `${selectedSport.macroSplit.protein}%` }} className="bg-vedic-emerald h-full" />
                  <div style={{ width: `${selectedSport.macroSplit.fat}%` }} className="bg-vedic-copper h-full rounded-r-full" />
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  soundEngine.playSuccessTone();
                  onLaunchEngine();
                }}
                onMouseEnter={() => soundEngine.playHoverChime()}
                className="w-full py-3.5 rounded-xl bg-vedic-forest hover:bg-vedic-emerald text-vedic-bg3 text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-vedic-gold group-hover:scale-125 transition-transform" />
                <span>Configure {selectedSport.name} Athlete Metrics</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
