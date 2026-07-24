import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { Cpu, Database, Layout, ArrowDown, ChevronRight, Layers, Sparkles } from 'lucide-react';

export default function ArchitectureMap() {
  const [activeModule, setActiveModule] = useState(null);

  const steps = [
    { title: 'User Input Layer', subtitle: 'Biometrics & Sport Metrics', icon: Layout, layer: 'Client Layer', color: 'border-vedic-emerald' },
    { title: 'BMR & TDEE Engine', subtitle: 'Metabolic Energy Calculator', icon: Cpu, layer: 'Logic Engine Layer', color: 'border-vedic-gold' },
    { title: 'Macro Split Module', subtitle: 'Carb / Protein Ratio Split', icon: Layers, layer: 'Logic Engine Layer', color: 'border-vedic-copper' },
    { title: 'Ayurvedic Rules DB', subtitle: 'Dosha Dravya Matcher', icon: Database, layer: 'Database Layer', color: 'border-vedic-forest' },
    { title: 'Meal Generator', subtitle: 'Dinacharya Ahara Schedule', icon: Sparkles, layer: 'Logic Engine Layer', color: 'border-vedic-emerald' },
    { title: 'Vision Pro Dashboard', subtitle: 'Spatial Glass Layout', icon: Layout, layer: 'Client Layer', color: 'border-vedic-gold' }
  ];

  return (
    <section id="architecture" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-widest border border-vedic-gold/40">
            <Cpu className="w-3.5 h-3.5" />
            <span>Living System Map · Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vedic-charcoal">
            Living System <span className="gold-gradient-text">Architecture Map</span>
          </h2>
          <p className="text-vedic-slate text-base sm:text-lg font-light">
            Continuous packet flow across Client, AI Logic Engine, and Ayurvedic Knowledge Graph.
          </p>
        </div>

        {/* System Pipeline Grid */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-vedic-gold/40 shadow-2xl space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = activeModule === idx;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, y: -4 }}
                  onMouseEnter={() => {
                    soundEngine.playHoverChime();
                    setActiveModule(idx);
                  }}
                  onMouseLeave={() => setActiveModule(null)}
                  className={`p-6 rounded-2xl bg-white border-2 transition-all duration-300 relative space-y-3 cursor-pointer ${
                    isHovered ? `${step.color} shadow-lg ring-2 ring-vedic-gold/30` : 'border-vedic-sand'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-vedic-copper uppercase px-2 py-0.5 rounded-full bg-vedic-sand/40">
                      {step.layer}
                    </span>
                    <span className="text-xs font-mono font-bold text-vedic-emerald">0{idx + 1}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-vedic-sand/40 text-vedic-forest">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-vedic-charcoal">{step.title}</h4>
                      <p className="text-xs text-vedic-slate font-light">{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Flowing Arrow Indicator */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-vedic-gold">
                      <ChevronRight className="w-5 h-5 animate-pulse" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
