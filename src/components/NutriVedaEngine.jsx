import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AthleteAvatar3D from './AthleteAvatar3D';
import AIPipelineLoader from './AIPipelineLoader';
import SpatialDashboard from './SpatialDashboard';
import { soundEngine } from '../utils/audio';
import { X, Sparkles, Dna, Info, Target, CheckCircle2 } from 'lucide-react';
import { SPORTS_DATABASE, AYURVEDIC_DOSHAS } from '../data/sportsData';

export default function NutriVedaEngine({ initialSport, onClose }) {
  const [stage, setStage] = useState('input'); // 'input' | 'pipeline' | 'dashboard'
  const [selectedSport, setSelectedSport] = useState(initialSport || SPORTS_DATABASE[0]);
  const [showDoshaGuide, setShowDoshaGuide] = useState(false);

  const [formData, setFormData] = useState({
    name: 'Rahul Sharma',
    weight: 72,
    height: 178,
    age: 23,
    gender: 'male',
    goal: 'muscle_gain', // 'weight_loss' | 'muscle_gain' | 'endurance' | 'maintenance'
    trainingLoad: 75, // 20 to 100
    dosha: 'pitta' // 'vata' | 'pitta' | 'kapha'
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
                Configure Athlete Biometrics & Prakriti
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
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-vedic-sand text-xs font-semibold text-vedic-charcoal focus:outline-none focus:border-vedic-gold"
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
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-vedic-sand text-xs font-semibold text-vedic-charcoal focus:outline-none focus:border-vedic-gold"
                    >
                      {SPORTS_DATABASE.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.icon} {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Primary Goal & Gender Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-vedic-forest uppercase flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-vedic-copper" />
                      <span>Primary Athletic Goal</span>
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-vedic-sand text-xs font-semibold text-vedic-charcoal focus:outline-none focus:border-vedic-gold"
                    >
                      <option value="weight_loss">Weight Loss / Lean Cut (-15% Cals)</option>
                      <option value="muscle_gain">Muscle Gain & Power (+15% Cals)</option>
                      <option value="endurance">Endurance & Glycogen Load (+20% Carbs)</option>
                      <option value="maintenance">Metabolic Maintenance</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-vedic-forest uppercase block">
                      Gender & Biological Profile
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['male', 'female'].map((g) => (
                        <button
                          type="button"
                          key={g}
                          onClick={() => setFormData({ ...formData, gender: g })}
                          className={`py-2 rounded-xl border text-xs font-bold capitalize transition-all ${
                            formData.gender === g
                              ? 'bg-vedic-forest text-vedic-bg3 border-vedic-forest'
                              : 'bg-white text-vedic-charcoal border-vedic-sand hover:border-vedic-emerald'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Weight & Height Sliders */}
                <div className="space-y-3 bg-white/80 p-4 rounded-2xl border border-vedic-sand">
                  
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

                {/* Prakriti Dosha Selection with Guide Button */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-mono font-bold text-vedic-forest uppercase flex items-center gap-1.5">
                      <Dna className="w-3.5 h-3.5 text-vedic-gold" />
                      <span>Ayurvedic Prakriti (Fine-Tuning Layer)</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        soundEngine.playClick();
                        setShowDoshaGuide(!showDoshaGuide);
                      }}
                      className="text-[11px] font-mono text-vedic-copper hover:text-vedic-forest flex items-center gap-1 underline"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Who comes under which Dosha?</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {['vata', 'pitta', 'kapha'].map((doshaKey) => {
                      const info = AYURVEDIC_DOSHAS[doshaKey];
                      return (
                        <button
                          type="button"
                          key={doshaKey}
                          onClick={() => {
                            soundEngine.playClick();
                            setFormData({ ...formData, dosha: doshaKey });
                          }}
                          className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center flex flex-col items-center gap-1 ${
                            formData.dosha === doshaKey
                              ? 'bg-vedic-forest text-vedic-bg3 border-vedic-forest shadow-md'
                              : 'bg-white text-vedic-charcoal border-vedic-sand hover:border-vedic-emerald'
                          }`}
                        >
                          <span className="text-lg">{info.icon}</span>
                          <span className="capitalize font-mono">{info.id}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  onMouseEnter={() => soundEngine.playHoverChime()}
                  className="w-full py-3.5 rounded-full bg-vedic-emerald hover:bg-vedic-forest text-vedic-bg3 font-bold text-xs tracking-wider uppercase transition-all shadow-emerald-glow flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-vedic-gold group-hover:rotate-180 transition-transform duration-500" />
                  <span>Synthesize Personalized AI Plan</span>
                </button>

              </form>

            </div>

          </div>

          {/* Dosha Category Guide Modal Overlay */}
          <AnimatePresence>
            {showDoshaGuide && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-60 bg-vedic-bg1/95 backdrop-blur-2xl p-6 overflow-y-auto flex items-center justify-center"
              >
                <div className="glass-card max-w-4xl w-full p-8 rounded-3xl border border-vedic-gold/50 shadow-2xl space-y-6 relative my-auto">
                  <button
                    onClick={() => setShowDoshaGuide(false)}
                    className="absolute top-6 right-6 p-2.5 rounded-full bg-vedic-sand/40 hover:bg-vedic-sand text-vedic-charcoal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-vedic-emerald uppercase">
                      AYURVEDIC PRAKRITI CLASSIFICATION GUIDE
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-vedic-charcoal">
                      Who Comes Under Which Dosha Category?
                    </h3>
                    <p className="text-xs text-vedic-slate font-light">
                      Dosha does not override your 3,000 kcal or 150g protein target — it fine-tunes meal temperature, herbal Dravyas, hydration style, and recovery protocols.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {Object.keys(AYURVEDIC_DOSHAS).map((key) => {
                      const d = AYURVEDIC_DOSHAS[key];
                      return (
                        <div key={key} className="p-5 rounded-2xl bg-white border border-vedic-sand space-y-4 text-xs">
                          <div className="flex items-center gap-2 border-b border-vedic-sand pb-2">
                            <span className="text-2xl">{d.icon}</span>
                            <div>
                              <h4 className="font-serif font-bold text-sm text-vedic-charcoal">{d.name}</h4>
                              <span className="text-[10px] font-mono text-vedic-copper">{d.title}</span>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <span className="font-mono font-bold text-[10px] text-vedic-forest uppercase block">Characteristics</span>
                            <ul className="text-[11px] text-vedic-slate space-y-1 font-light">
                              {d.characteristics.slice(0, 4).map((c, i) => (
                                <li key={i}>• {c}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-1">
                            <span className="font-mono font-bold text-[10px] text-vedic-emerald uppercase block">Recommended Diet</span>
                            <ul className="text-[11px] text-vedic-slate space-y-1 font-light">
                              {d.recommendedDiet.slice(0, 3).map((r, i) => (
                                <li key={i}>✓ {r}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-1">
                            <span className="font-mono font-bold text-[10px] text-red-700 uppercase block">Avoid List</span>
                            <ul className="text-[11px] text-vedic-slate space-y-1 font-light">
                              {d.avoidList.slice(0, 2).map((a, i) => (
                                <li key={i}>✕ {a}</li>
                              ))}
                            </ul>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              soundEngine.playClick();
                              setFormData({ ...formData, dosha: d.id });
                              setShowDoshaGuide(false);
                            }}
                            className="w-full py-2 rounded-xl bg-vedic-sand/40 hover:bg-vedic-sand font-mono font-bold text-[11px] text-vedic-forest"
                          >
                            Select {d.id.toUpperCase()} Prakriti
                          </button>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
