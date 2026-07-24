import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { Cpu, Sparkles, RefreshCw, Sliders, Zap, ShieldCheck, Flame, BookOpen, Layers, ArrowRight } from 'lucide-react';

export default function FusionEngine() {
  const [isMerged, setIsMerged] = useState(true);
  const [fusionMode, setFusionMode] = useState('fueling'); // 'fueling' | 'recovery' | 'rasayana'
  const [strainLevel, setStrainLevel] = useState(75); // 0 to 100
  const [envTemp, setEnvTemp] = useState(32); // 15 to 45 deg C
  const [activeInspector, setActiveInspector] = useState(null);

  // Dynamic fusion calculation
  const calculatedAgniFire = Math.round(100 - (strainLevel * 0.4) - (envTemp > 35 ? 15 : 0));
  const glycogenNeed = Math.round(strainLevel * 3.8);
  const coolDravyaReq = envTemp > 30 ? 'Amla + Chandana Cooling Jal' : 'Warm Ginger Infusion';

  return (
    <section id="solution" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-widest border border-vedic-gold/40">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Innovation · Advanced AI Fusion Engine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vedic-charcoal">
            The NutriVeda <span className="gold-gradient-text">Fusion Engine</span>
          </h2>
          <p className="text-vedic-slate text-base sm:text-lg font-light">
            Interactive dual-hemisphere simulator fusing real-time sports biometrics with Ayurvedic metabolic intelligence.
          </p>
        </div>

        {/* Fusion Control Bar & Mode Selectors */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-vedic-gold/40 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Mode Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-vedic-sand pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-vedic-forest uppercase mr-2">
                FUSION OPERATING MODES:
              </span>
              {[
                { id: 'fueling', label: 'Metabolic Fueling', icon: Flame },
                { id: 'recovery', label: 'Cellular Recovery', icon: ShieldCheck },
                { id: 'rasayana', label: 'Herb Synergies', icon: Sparkles }
              ].map((m) => {
                const Icon = m.icon;
                const isActive = fusionMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      soundEngine.playClick();
                      setFusionMode(m.id);
                    }}
                    onMouseEnter={() => soundEngine.playHoverChime()}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 transition-all ${
                      isActive
                        ? 'bg-vedic-forest text-vedic-bg3 shadow-md border border-vedic-gold/40'
                        : 'bg-white text-vedic-slate border border-vedic-sand hover:border-vedic-emerald'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-vedic-gold" />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Merge / Separate Hemispheres Toggle */}
            <button
              onClick={() => {
                soundEngine.playSuccessTone();
                setIsMerged(!isMerged);
              }}
              className="px-5 py-2.5 rounded-full bg-vedic-gold/20 hover:bg-vedic-gold/30 text-vedic-copper border border-vedic-gold/40 font-mono text-xs font-bold flex items-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isMerged ? 'Separate Science Hemispheres' : 'Merge into Unified Core'}</span>
            </button>
          </div>

          {/* Real-time Interactive Environmental & Physical Strain Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/80 p-6 rounded-2xl border border-vedic-sand">
            
            {/* Strain Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span className="text-vedic-forest flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-vedic-copper" />
                  <span>ATHLETIC STRAIN LEVEL</span>
                </span>
                <span className="text-vedic-copper">{strainLevel}% Intensity</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={strainLevel}
                onChange={(e) => setStrainLevel(Number(e.target.value))}
                className="w-full accent-vedic-copper cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-vedic-slate">
                <span>Light Aerobic</span>
                <span>Threshold</span>
                <span>Max VO2 Peak</span>
              </div>
            </div>

            {/* Environmental Temp Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span className="text-vedic-forest flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>ENVIRONMENTAL TEMPERATURE</span>
                </span>
                <span className="text-amber-700">{envTemp} °C</span>
              </div>
              <input
                type="range"
                min="15"
                max="45"
                value={envTemp}
                onChange={(e) => setEnvTemp(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-vedic-slate">
                <span>Cool Indoor</span>
                <span>Ambient Match</span>
                <span>Extreme Heat</span>
              </div>
            </div>

          </div>

          {/* Interactive Morphing Dual-Hemisphere Visualization */}
          <div className="relative h-80 flex items-center justify-center py-6">
            
            {/* Left Hemisphere (Sports Science) */}
            <motion.div
              animate={{
                x: isMerged ? -50 : -160,
                scale: isMerged ? 1.05 : 1
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={() => setActiveInspector('science')}
              className="absolute w-56 sm:w-64 h-56 sm:h-64 rounded-full bg-gradient-to-tr from-vedic-emerald via-teal-800 to-emerald-950 text-white p-6 flex flex-col items-center justify-center shadow-emerald-glow opacity-95 cursor-pointer border-2 border-teal-300/40 hover:scale-105 transition-transform"
            >
              <span className="text-3xl mb-1">🧪</span>
              <span className="font-serif text-base font-bold text-center">Sports Science</span>
              <div className="text-[11px] font-mono text-teal-200 mt-2 space-y-1 text-center">
                <div>Glycogen Need: <span className="font-bold text-white">{glycogenNeed}g</span></div>
                <div>Lactate Threshold: <span className="font-bold text-white">4.2 mmol</span></div>
              </div>
              <span className="text-[9px] font-mono text-teal-300 underline mt-2">Click to Inspect Math</span>
            </motion.div>

            {/* Right Hemisphere (Ayurveda) */}
            <motion.div
              animate={{
                x: isMerged ? 50 : 160,
                scale: isMerged ? 1.05 : 1
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={() => setActiveInspector('ayurveda')}
              className="absolute w-56 sm:w-64 h-56 sm:h-64 rounded-full bg-gradient-to-tr from-vedic-gold via-amber-700 to-amber-950 text-white p-6 flex flex-col items-center justify-center shadow-gold-glow opacity-95 cursor-pointer border-2 border-amber-300/40 hover:scale-105 transition-transform"
            >
              <span className="text-3xl mb-1">🌿</span>
              <span className="font-serif text-base font-bold text-center">Ayurvedic Wisdom</span>
              <div className="text-[11px] font-mono text-amber-200 mt-2 space-y-1 text-center">
                <div>Agni Fire State: <span className="font-bold text-white">{calculatedAgniFire}%</span></div>
                <div>Hydration Dravya: <span className="font-bold text-white">{coolDravyaReq.split(' ')[0]}</span></div>
              </div>
              <span className="text-[9px] font-mono text-amber-300 underline mt-2">Click to Inspect Text</span>
            </motion.div>

            {/* Merged Core Node */}
            {isMerged && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setActiveInspector('fusion')}
                className="absolute z-20 w-48 h-48 rounded-full bg-vedic-forest/95 border-4 border-vedic-gold flex flex-col items-center justify-center p-4 text-vedic-bg3 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-105 transition-transform"
              >
                <Sparkles className="w-8 h-8 text-vedic-gold animate-spin-slow mb-1" />
                <span className="font-serif text-sm font-extrabold text-vedic-gold text-center">AI FUSION ENGINE</span>
                <span className="text-[10px] font-mono text-vedic-sand font-bold uppercase mt-1">100% SYNTHESIS</span>
                <span className="text-[9px] font-mono text-vedic-gold underline mt-1">Inspect Algorithm</span>
              </motion.div>
            )}

          </div>

          {/* Dynamic Calculated Fusion Summary Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-1">
              <span className="text-[10px] font-mono font-bold text-vedic-forest uppercase block">
                Calculated Glycogen Target
              </span>
              <span className="font-serif text-lg font-bold text-vedic-charcoal">{glycogenNeed} g / session</span>
              <p className="text-[11px] text-vedic-slate font-light">Based on {strainLevel}% physical strain load.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-1">
              <span className="text-[10px] font-mono font-bold text-vedic-copper uppercase block">
                Digestive Agni Fire Capacity
              </span>
              <span className="font-serif text-lg font-bold text-vedic-charcoal">{calculatedAgniFire}% Digest Power</span>
              <p className="text-[11px] text-vedic-slate font-light">Calculates maximum meal volume tolerated.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-1">
              <span className="text-[10px] font-mono font-bold text-amber-700 uppercase block">
                Prescribed Hydration Dravya
              </span>
              <span className="font-serif text-base font-bold text-vedic-charcoal">{coolDravyaReq}</span>
              <p className="text-[11px] text-vedic-slate font-light">Adjusted for {envTemp}°C thermal load.</p>
            </div>
          </div>

        </div>

        {/* Interactive Inspector Modal Drawer */}
        <AnimatePresence>
          {activeInspector && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-vedic-gold/50 shadow-2xl relative space-y-4"
            >
              <div className="flex justify-between items-center border-b border-vedic-sand pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-vedic-forest" />
                  <h3 className="font-serif font-bold text-lg text-vedic-charcoal capitalize">
                    {activeInspector} Inspector & Formula Deep-Dive
                  </h3>
                </div>
                <button
                  onClick={() => setActiveInspector(null)}
                  className="px-3 py-1 rounded-full bg-vedic-sand/40 hover:bg-vedic-sand text-xs font-mono font-bold text-vedic-charcoal"
                >
                  Close Drawer
                </button>
              </div>

              {activeInspector === 'science' && (
                <div className="space-y-2 text-xs text-vedic-slate">
                  <p className="font-bold text-vedic-forest">Scientific Mathematical Formulation:</p>
                  <pre className="p-3 rounded-xl bg-slate-900 text-teal-300 font-mono text-[11px] overflow-x-auto">
{`Glycogen_Need = Weight_kg * (1.2 + (Strain_Level / 100) * 2.6)
TDEE_Base = BMR * (Sport_Multiplier + (Intensity / 100) * 0.3)
Electrolyte_Sodium_mg = Sweat_Rate_L * 900`}
                  </pre>
                  <p className="font-light">Calculates continuous ATP re-synthesis, glycogen storage saturation, and sodium depletion rates.</p>
                </div>
              )}

              {activeInspector === 'ayurveda' && (
                <div className="space-y-2 text-xs text-vedic-slate">
                  <p className="font-bold text-vedic-copper">Ayurvedic Textual Reference (Charaka Samhita):</p>
                  <blockquote className="p-3 rounded-xl bg-amber-50/80 border-l-4 border-vedic-gold font-serif italic text-vedic-charcoal">
                    "Agni is the pillar of strength and vitality. When Agni is balanced, food transforms into Ojas (vital vigor). When Agni is diminished by excessive heat or strain, food turns into Ama (metabolic toxin)."
                  </blockquote>
                  <p className="font-light">NutriVeda modulates meal temperature and spices based on Agni capacity to prevent Ama formation under high strain.</p>
                </div>
              )}

              {activeInspector === 'fusion' && (
                <div className="space-y-2 text-xs text-vedic-slate">
                  <p className="font-bold text-vedic-emerald">NutriVeda Fusion Synthesis Algorithm:</p>
                  <p className="font-light leading-relaxed">
                    The Fusion Engine executes a real-time multi-objective optimization matrix. It takes the hard scientific caloric requirement (e.g. {glycogenNeed}g Carbs) and routes it through the Ayurvedic Agni capacity filter ({calculatedAgniFire}%). If Agni is suppressed by extreme strain ({strainLevel}%), it converts raw heavy carbs into pre-digested Rasayana slurries with thermogenic spices like cardamom & ginger.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
