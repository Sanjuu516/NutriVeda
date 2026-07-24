import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AthleteAvatar3D from './AthleteAvatar3D';
import AIPipelineLoader from './AIPipelineLoader';
import SpatialDashboard from './SpatialDashboard';
import { soundEngine } from '../utils/audio';
import { X, Sparkles, Sliders, Dna, Activity } from 'lucide-react';
import { SPORTS_DATABASE, AYURVEDIC_DOSHAS } from '../data/sportsData';

export default function NutriVedaEngine({ initialSport, onClose }) {
  const [stage, setStage] = useState('input'); // 'input' | 'pipeline' | 'dashboard'
  const [selectedSport, setSelectedSport] = useState(initialSport || SPORTS_DATABASE[0]);

  const [formData, setFormData] = useState({
    name: 'Rahul Sharma',
    weight: 72,
    height: 178,
    age: 23,
    gender: 'male',
    trainingLoad: 75, // 0 to 100
    dosha: 'pitta', // 'vata' | 'pitta' | 'kapha'
    phase: 'competition'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playSuccessTone();
    setStage('pipeline');
  };

  return (
    <>
      {stage === 'input' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-vedic-bg1/90 backdrop-blur-2xl p-4 sm:p-6 overflow-y-auto">
          <div className="glass-card max-w-5xl w-full p-6 sm:p-8 rounded-3xl border border-vedic-gold/50 shadow-2xl space-y-6 relative my-auto">
            
            {/* Close Button */}
            <button
              onClick={() => {
                soundEngine.playClick();
                onClose();
              }}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-vedic-sand/40 hover:bg-vedic-sand text-vedic-charcoal transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NutriVeda AI Multi-Sport Engine</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-vedic-charcoal">
                Configure Athlete Performance Metrics
              </h2>
            </div>

            {/* Grid Layout: Left 3D Avatar Preview | Right Interactive Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: 3D Living Athlete Avatar */}
              <div className="lg:col-span-5">
                <AthleteAvatar3D
                  weight={formData.weight}
                  height={formData.height}
                  age={formData.age}
                  trainingLoad={formData.trainingLoad}
                  selectedSport={selectedSport}
                  dosha={formData.dosha}
                />
              </div>

              {/* Right Column: Parameters Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5 flex flex-col justify-between">
                
                {/* Sport & Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-vedic-forest uppercase block">
                      Athlete Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-vedic-sand text-xs font-semibold text-vedic-charcoal focus:outline-none focus:border-vedic-gold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-vedic-forest uppercase block">
                      Target Athletic Sport
                    </label>
                    <select
                      value={selectedSport.id}
                      onChange={(e) => {
                        const sport = SPORTS_DATABASE.find((s) => s.id === e.target.value);
                        if (sport) setSelectedSport(sport);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-vedic-sand text-xs font-semibold text-vedic-charcoal focus:outline-none focus:border-vedic-gold"
                    >
                      {SPORTS_DATABASE.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.icon} {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Weight & Height Sliders */}
                <div className="space-y-4 bg-white/80 p-4 rounded-2xl border border-vedic-sand">
                  
                  {/* Weight */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-vedic-slate">Body Weight</span>
                      <span className="font-mono text-vedic-forest font-bold">{formData.weight} kg</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="130"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
                      className="w-full accent-vedic-emerald cursor-pointer"
                    />
                  </div>

                  {/* Height */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-vedic-slate">Athlete Height</span>
                      <span className="font-mono text-vedic-copper font-bold">{formData.height} cm</span>
                    </div>
                    <input
                      type="range"
                      min="140"
                      max="215"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: Number(e.target.value) })}
                      className="w-full accent-vedic-copper cursor-pointer"
                    />
                  </div>

                  {/* Training Load */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-vedic-slate">Daily Training Intensity</span>
                      <span className="font-mono text-vedic-gold font-bold">{formData.trainingLoad}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={formData.trainingLoad}
                      onChange={(e) => setFormData({ ...formData, trainingLoad: Number(e.target.value) })}
                      className="w-full accent-vedic-gold cursor-pointer"
                    />
                  </div>

                </div>

                {/* Prakriti Dosha Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-vedic-forest uppercase flex items-center gap-1.5">
                    <Dna className="w-3.5 h-3.5 text-vedic-gold" />
                    <span>Ayurvedic Prakriti (Dosha Alignment)</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['vata', 'pitta', 'kapha'].map((doshaKey) => (
                      <button
                        type="button"
                        key={doshaKey}
                        onClick={() => {
                          soundEngine.playClick();
                          setFormData({ ...formData, dosha: doshaKey });
                        }}
                        className={`p-2.5 rounded-xl border text-xs font-bold capitalize transition-all ${
                          formData.dosha === doshaKey
                            ? 'bg-vedic-forest text-vedic-bg3 border-vedic-forest shadow-md'
                            : 'bg-white text-vedic-charcoal border-vedic-sand hover:border-vedic-emerald'
                        }`}
                      >
                        {doshaKey}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  onMouseEnter={() => soundEngine.playHoverChime()}
                  className="w-full py-4 rounded-full bg-vedic-emerald hover:bg-vedic-forest text-vedic-bg3 font-bold text-xs tracking-wider uppercase transition-all shadow-emerald-glow flex items-center justify-center gap-2 group mt-2"
                >
                  <Sparkles className="w-4 h-4 text-vedic-gold group-hover:rotate-180 transition-transform duration-500" />
                  <span>Synthesize Personalized AI Plan</span>
                </button>

              </form>

            </div>

          </div>
        </div>
      )}

      {/* STAGE 2: AI PIPELINE TICKER */}
      {stage === 'pipeline' && (
        <AIPipelineLoader onComplete={() => setStage('dashboard')} />
      )}

      {/* STAGE 3: VISION PRO SPATIAL DASHBOARD */}
      {stage === 'dashboard' && (
        <SpatialDashboard
          athleteData={formData}
          selectedSport={selectedSport}
          onReset={() => setStage('input')}
        />
      )}
    </>
  );
}
