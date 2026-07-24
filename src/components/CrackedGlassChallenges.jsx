import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { ShieldAlert, Sparkles, CheckCircle2, Activity, HeartPulse, Flame, BookOpen, RefreshCw } from 'lucide-react';

export default function CrackedGlassChallenges() {
  const [healedIndex, setHealedIndex] = useState(0); // Default first card healed for instant visual impact
  const [activeInspector, setActiveInspector] = useState(null);

  const challenges = [
    {
      id: 'gi-distress',
      title: 'Competition GI Distress & Nausea',
      subtitle: 'Nervous Anxiety & Digestive Fire Shutdown',
      icon: '🤢',
      crackedMetrics: { cortisol: '+74% Stress', agni: '30% Suppressed', recoveryDelay: '+36 Hours' },
      healedMetrics: { cortisol: 'Balanced', agni: '95% Restored', recoveryDelay: '0 Hours (Optimal)' },
      problem: 'High-intensity competition anxiety triggers sympathetic nervous dominance, shutting down gastric blood flow and causing severe stomach cramps, nausea, and bloating during match play.',
      solution: 'Ayurvedic Cooling Dravyas (Coriander, Amla & Fennel Jal) preserve Agni digestive fire without thermal bloating, allowing rapid 45-minute carbohydrate absorption.',
      herbalProtocol: 'Amla (Emblica officinalis) 500mg + Coriander Seed Infusion 250ml taken 30 minutes pre-match.',
      scientificMechanism: 'Flavones reduce gastric mucosal hyper-permeability and modulate vagal nerve tone under acute adrenaline spikes.'
    },
    {
      id: 'overtraining',
      title: 'Overtraining Cytokine Inflammation',
      subtitle: 'Joint Degradation & Systemic Burnout',
      icon: '🔥',
      crackedMetrics: { crpInflammation: 'High (3.8 mg/L)', jointLubrication: 'Low', sleepQuality: 'Fragmented' },
      healedMetrics: { crpInflammation: 'Normal (<0.8 mg/L)', jointLubrication: '100% Hydrated', sleepQuality: 'Deep REM' },
      problem: 'Repeated high-strain microcycle sessions elevate pro-inflammatory cytokines (IL-6, TNF-alpha), causing chronic joint stiffness, patellar tendonitis, and systemic physical burnout.',
      solution: 'Boswellia Serrata + Ashwagandha Golden Milk suppresses inflammatory pathways while accelerating nighttime REM muscle repair.',
      herbalProtocol: 'Shallaki (Boswellia) 400mg + Ashwagandha 600mg in warm A2 almond milk before sleep.',
      scientificMechanism: 'Boswellic acids selectively inhibit 5-lipoxygenase (5-LOX), preventing cartilage matrix breakdown without gastric ulceration.'
    },
    {
      id: 'weight-cut',
      title: 'Rapid Weight Cut Muscular Power Loss',
      subtitle: 'Dehydration & Isometric Strength Collapse',
      icon: '🏋️',
      crackedMetrics: { isometricForce: '-18% Collapse', electrolyteBal: 'Severe Deficit', kidneyLoad: 'Elevated' },
      healedMetrics: { isometricForce: '100% Preserved', electrolyteBal: 'Optimal Sodium', kidneyLoad: 'Protected' },
      problem: 'Combat athletes (Wrestling, Boxing, Kabaddi) lose up to 15% of peak muscular force during aggressive sauna or sweat weight cuts due to cellular dehydration.',
      solution: 'Shilajit ATP Preservation & Sattu slow-release amino acid rehydration protects cellular fluid density and maintains explosive grip force.',
      herbalProtocol: 'Showedhana Shilajit 250mg + Roasted Sattu (Barley/Gram) Shake during 24-hour weigh-in window.',
      scientificMechanism: 'Fulvic acid complexes enhance mitochondrial membrane permeability, accelerating rapid intracellular re-hydration.'
    },
    {
      id: 'circadian-jetlag',
      title: 'Circadian Disruption & Match Insomnia',
      subtitle: 'Night Fixtures & Sleep Phase Lag',
      icon: '🌙',
      crackedMetrics: { melatonin: 'Suppressed', reactionSpeed: '-22% Slow', hghRelease: 'Impaired' },
      healedMetrics: { melatonin: 'Synchronized', reactionSpeed: 'Peak Reflex', hghRelease: 'Maximal' },
      problem: 'Late night floodlight matches (Cricket, Football, Kabaddi) flood the eyes with artificial blue light, inhibiting melatonin secretion and causing severe match-night insomnia.',
      solution: 'Brahmi & Shankhpushpi Nootropic Dravyas modulate GABA receptors to initiate rapid delta-wave sleep within 20 minutes of bed.',
      herbalProtocol: 'Brahmi (Bacopa monnieri) 300mg + Warm Nutmeg Milk post-match shower.',
      scientificMechanism: 'Bacosides A & B protect hippocampal neurons from oxidative stress while promoting slow-wave deep sleep.'
    },
    {
      id: 'tendon-microtears',
      title: 'Tendon Micro-Tears & Ligament Strain',
      subtitle: 'Explosive Sprint & Smash Micro-Damage',
      icon: '⚡',
      crackedMetrics: { collagenSynthesis: 'Lagging', tendonStiffness: 'Painful', reInjuryRisk: 'High' },
      healedMetrics: { collagenSynthesis: '2.4x Faster', tendonStiffness: 'Elastic Peak', reInjuryRisk: 'Minimal' },
      problem: 'High ground reaction forces (Athletics sprints, Badminton jump smashes) create micro-tears in the Achilles and patellar tendon matrix.',
      solution: 'Guggulu & Laksha Dravya Protocol accelerates type-1 collagen cross-linking and restores elastic tendon recoil.',
      herbalProtocol: 'Yograj Guggulu 500mg twice daily with warm sesame oil Abhyanga joint massage.',
      scientificMechanism: 'Guggulsterones stimulate osteoblast proliferation and accelerate ligamentous tensile strength restoration.'
    }
  ];

  return (
    <section id="challenges" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-widest border border-vedic-gold/40">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Kintsugi Repair Laboratory · 5 Athletic Hurdles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vedic-charcoal">
            Heal Athletic Hurdles with <br />
            <span className="gold-gradient-text">Golden Kintsugi Science</span>
          </h2>
          <p className="text-vedic-slate text-base sm:text-lg font-light">
            In Kintsugi philosophy, fractures are mended with pure gold, making the restored piece stronger than before. Hover or click to trigger golden restoration.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((c, idx) => {
            const isHealed = healedIndex === idx;
            return (
              <motion.div
                key={c.id}
                whileHover={{ scale: 1.03, y: -6 }}
                onClick={() => {
                  soundEngine.playSuccessTone();
                  setHealedIndex(idx);
                }}
                className={`glass-card p-6 sm:p-8 rounded-3xl border transition-all duration-500 relative space-y-5 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isHealed ? 'border-vedic-gold shadow-gold-glow bg-white' : 'border-vedic-sand'
                }`}
              >
                {/* SVG Kintsugi Golden Crack Overlay */}
                <svg viewBox="0 0 300 200" className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${isHealed ? 'healed opacity-100' : 'opacity-40'}`}>
                  <path
                    d="M 20 10 L 80 70 L 140 40 L 220 120 L 280 180"
                    stroke={isHealed ? '#D4A017' : '#94A3B8'}
                    strokeWidth={isHealed ? '3.5' : '1.5'}
                    fill="none"
                    className="crack-line"
                  />
                  <path
                    d="M 140 40 L 190 10 M 80 70 L 40 160"
                    stroke={isHealed ? '#D4A017' : '#94A3B8'}
                    strokeWidth={isHealed ? '2.8' : '1'}
                    fill="none"
                    className="crack-line"
                  />
                </svg>

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-4xl filter drop-shadow-md">{c.icon}</span>
                  <span className={`text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full ${
                    isHealed ? 'bg-vedic-gold text-vedic-charcoal font-extrabold shadow-sm' : 'bg-vedic-sand text-vedic-slate'
                  }`}>
                    {isHealed ? '✨ Kintsugi Healed' : 'Cracked State'}
                  </span>
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="font-serif font-bold text-lg text-vedic-charcoal">{c.title}</h3>
                  <p className="text-[11px] font-mono text-vedic-copper font-bold">{c.subtitle}</p>
                  <p className="text-xs text-vedic-slate font-light leading-relaxed">
                    {isHealed ? c.solution : c.problem}
                  </p>
                </div>

                {/* State Metrics Comparison Box */}
                <div className="p-3.5 rounded-2xl bg-vedic-sand/30 border border-vedic-sand relative z-10 space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between items-center">
                    <span className="text-vedic-slate">System State:</span>
                    <span className={`font-bold ${isHealed ? 'text-vedic-forest' : 'text-red-700'}`}>
                      {isHealed ? c.healedMetrics.cortisol || c.healedMetrics.crpInflammation : c.crackedMetrics.cortisol || c.crackedMetrics.crpInflammation}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-vedic-forest">
                    <Sparkles className="w-3.5 h-3.5 text-vedic-gold" />
                    <span>{isHealed ? 'Ayurvedic Protocol Active' : 'Click to Repair'}</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      soundEngine.playClick();
                      setActiveInspector(c);
                    }}
                    className="text-[10px] font-mono text-vedic-copper underline font-bold"
                  >
                    Deep Protocol →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Solution & Protocol Inspector Drawer */}
        <AnimatePresence>
          {activeInspector && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border-2 border-vedic-gold shadow-2xl space-y-4 bg-white relative z-20"
            >
              <div className="flex justify-between items-center border-b border-vedic-sand pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-vedic-forest" />
                  <h3 className="font-serif font-bold text-lg text-vedic-charcoal">
                    Kintsugi Protocol: {activeInspector.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveInspector(null)}
                  className="px-3 py-1 rounded-full bg-vedic-sand/40 hover:bg-vedic-sand text-xs font-mono font-bold text-vedic-charcoal"
                >
                  Close Protocol
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono font-bold text-vedic-forest uppercase block text-[10px]">
                      🌿 Prescribed Ayurvedic Herbal Dravya
                    </span>
                    <p className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-vedic-forest font-semibold">
                      {activeInspector.herbalProtocol}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono font-bold text-vedic-copper uppercase block text-[10px]">
                      🧪 Cellular Biomechanical Solution
                    </span>
                    <p className="text-vedic-slate font-light leading-relaxed">
                      {activeInspector.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono font-bold text-vedic-gold uppercase block text-[10px]">
                    🔬 Scientific Pharmacological Mechanism
                  </span>
                  <div className="p-4 rounded-2xl bg-slate-950 text-teal-300 font-mono text-[11px] leading-relaxed">
                    {activeInspector.scientificMechanism}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
