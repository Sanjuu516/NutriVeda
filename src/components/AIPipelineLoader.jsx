import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Cpu, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const PIPELINE_STEPS = [
  'Collecting Athlete Metrics & Biometrics...',
  'Analyzing Sport Specificity & Kinetic Load...',
  'Calculating Basal Metabolic Rate (BMR)...',
  'Estimating Total Daily Energy Expenditure (TDEE)...',
  'Selecting Optimum Macro Split (Carbs/Protein/Fats)...',
  'Matching Prakriti (Vata / Pitta / Kapha) Dosha...',
  'Choosing Ayurvedic Dravyas & Herb Formulations...',
  'Building Biomechanical Exercise & Recovery Plan...',
  'Optimizing Hydration & Dinacharya Timeline...',
  'Synthesizing Apple Vision Pro Spatial Plan...'
];

export default function AIPipelineLoader({ onComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (currentStepIndex < PIPELINE_STEPS.length) {
      soundEngine.playParticlePop();
      const timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 450); // 4.5 sec total realistic AI thinking pipeline
      return () => clearTimeout(timer);
    } else {
      soundEngine.playSuccessTone();
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(finishTimer);
    }
  }, [currentStepIndex, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-vedic-bg1/90 backdrop-blur-2xl p-6">
      <div className="glass-card max-w-lg w-full p-8 rounded-3xl border border-vedic-gold/50 shadow-2xl space-y-6 text-center">
        
        {/* Animated Central Core */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-vedic-gold via-vedic-emerald to-vedic-copper animate-spin-slow blur-md opacity-70" />
          <div className="relative w-16 h-16 rounded-full bg-vedic-bg3 border border-vedic-gold/60 flex items-center justify-center shadow-lg">
            <Cpu className="w-8 h-8 text-vedic-emerald animate-pulse" />
          </div>
        </div>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NutriVeda AI Pipeline Active</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-vedic-charcoal">
            Synthesizing Performance Diet
          </h3>
        </div>

        {/* Pipeline Ticker Items */}
        <div className="space-y-2.5 text-left max-h-60 overflow-y-auto pr-2 py-2 border-y border-vedic-sand">
          {PIPELINE_STEPS.map((stepText, idx) => {
            const isFinished = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            if (idx > currentStepIndex + 1) return null;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-center justify-between text-xs font-mono p-2.5 rounded-xl transition-colors ${
                  isCurrent
                    ? 'bg-vedic-gold/15 text-vedic-forest font-bold border border-vedic-gold/40'
                    : isFinished
                    ? 'text-vedic-slate opacity-80'
                    : 'opacity-30'
                }`}
              >
                <span>{stepText}</span>
                {isFinished ? (
                  <CheckCircle2 className="w-4 h-4 text-vedic-emerald shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="w-4 h-4 text-vedic-gold animate-spin shrink-0" />
                ) : null}
              </motion.div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] font-mono text-vedic-slate">
            <span>Synthesis Progress</span>
            <span>{Math.round((currentStepIndex / PIPELINE_STEPS.length) * 100)}%</span>
          </div>
          <div className="h-2 w-full bg-vedic-sand rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-vedic-emerald to-vedic-gold"
              animate={{ width: `${(currentStepIndex / PIPELINE_STEPS.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
