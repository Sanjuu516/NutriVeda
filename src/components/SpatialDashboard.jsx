import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { 
  Sparkles, Bot, Layers, Calendar, ShoppingBag, HeartPulse, 
  RotateCcw, ArrowRight, ShieldCheck, Flame, Droplets, Moon, 
  Check, Maximize2, Move3D
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpatialDashboard({ athleteData, selectedSport, onReset }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'nutrition' | 'exercise' | 'recovery' | 'shopping'
  const [spatialRotation, setSpatialRotation] = useState({ rx: 0, ry: 0 });

  // Trigger celebration on dashboard load
  React.useEffect(() => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4A017', '#0F766E', '#B45309']
    });
  }, []);

  // Compute metrics
  const bmr = Math.round(10 * athleteData.weight + 6.25 * athleteData.height - 5 * athleteData.age + (athleteData.gender === 'male' ? 5 : -161));
  const tdee = Math.round(bmr * (selectedSport.macroSplit.targetCalMultiplier + (athleteData.trainingLoad / 100) * 0.3));
  const proteinGrams = Math.round(athleteData.weight * (1.8 + (athleteData.trainingLoad / 100) * 0.4));
  const carbsGrams = Math.round((tdee * (selectedSport.macroSplit.carbs / 100)) / 4);
  const fatGrams = Math.round((tdee * (selectedSport.macroSplit.fat / 100)) / 9);
  const hydrationLiters = (athleteData.weight * 0.04 + (athleteData.trainingLoad / 100) * 1.2).toFixed(1);

  // Mouse spatial tilt handler
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setSpatialRotation({
      rx: (-y / rect.height) * 12,
      ry: (x / rect.width) * 12
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-vedic-bg1/95 backdrop-blur-2xl overflow-y-auto p-4 sm:p-8 flex flex-col justify-between">
      
      {/* Vision Pro Top Header Navigation Bar */}
      <header className="max-w-7xl w-full mx-auto flex items-center justify-between py-3 px-6 glass-card rounded-full border border-vedic-gold/40 shadow-xl mb-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-vedic-forest text-vedic-gold flex items-center justify-center font-bold text-lg shadow-emerald-glow">
            {selectedSport.icon}
          </div>
          <div>
            <h2 className="font-serif font-bold text-sm text-vedic-charcoal flex items-center gap-2">
              <span>{athleteData.name}'s Vision Pro Dashboard</span>
              <span className="text-[10px] font-mono font-bold bg-vedic-emerald/20 text-vedic-forest px-2 py-0.5 rounded-full uppercase">
                {selectedSport.name} Elite
              </span>
            </h2>
            <p className="text-[11px] font-mono text-vedic-slate">
              Prakriti: <span className="font-bold text-vedic-copper capitalize">{athleteData.dosha}</span> • TDEE: {tdee} kcal
            </p>
          </div>
        </div>

        {/* Vision Pro Spatial Mode Tabs */}
        <div className="hidden md:flex items-center gap-1 bg-vedic-sand/40 p-1 rounded-full border border-vedic-sand">
          {[
            { id: 'overview', label: 'Overview', icon: Layers },
            { id: 'nutrition', label: 'Nutrition & Plate', icon: Flame },
            { id: 'exercise', label: 'Workout & Schedule', icon: Calendar },
            { id: 'recovery', label: 'Ayurveda & Recovery', icon: HeartPulse },
            { id: 'shopping', label: 'Smart Grocery', icon: ShoppingBag }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundEngine.playClick();
                  setActiveTab(tab.id);
                }}
                onMouseEnter={() => soundEngine.playHoverChime()}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isActive ? 'bg-vedic-forest text-vedic-bg3 shadow-md' : 'text-vedic-slate hover:text-vedic-forest'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Right Reset / Close CTA */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onReset();
          }}
          className="flex items-center gap-1.5 text-xs font-bold font-mono text-vedic-copper hover:text-vedic-forest px-3 py-1.5 rounded-full bg-vedic-sand/40 hover:bg-vedic-sand transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>New Calculation</span>
        </button>
      </header>

      {/* Main Vision Pro 3D Spatial Canvas Grid */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpatialRotation({ rx: 0, ry: 0 })}
        className="max-w-7xl w-full mx-auto flex-1 spatial-container py-2"
      >
        <motion.div
          animate={{ rotateX: spatialRotation.rx, rotateY: spatialRotation.ry }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="spatial-panel h-full"
        >
          {/* TAB 1: OVERVIEW & VISION PRO DASHBOARD */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* AI Coach Assistant Banner (Feature 8) */}
              <div className="lg:col-span-12 glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl bg-gradient-to-r from-vedic-bg2 to-white relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-vedic-emerald text-vedic-gold flex items-center justify-center shrink-0 shadow-lg">
                    <Bot className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-vedic-emerald uppercase tracking-wider">
                        VEDA AI COACH ADVISORY
                      </span>
                      <span className="text-[11px] font-mono text-vedic-slate">Just Now</span>
                    </div>
                    <p className="font-serif text-lg font-semibold text-vedic-charcoal leading-snug">
                      "Good morning {athleteData.name}. Today's {selectedSport.name} training demands explosive energy and rapid metabolic recovery. We've increased your complex carbs by 15% pre-session and scheduled Ashwagandha golden milk before sleep."
                    </p>
                  </div>
                </div>
              </div>

              {/* Performance Athlete Score Gauge (Feature 12) */}
              <div className="lg:col-span-4 glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl text-center space-y-4 flex flex-col justify-between">
                <div className="font-mono text-xs font-bold text-vedic-forest uppercase tracking-wider">
                  ATHLETE PERFORMANCE SCORE
                </div>
                <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" stroke="#E8DCC8" strokeWidth="8" fill="none" />
                    <circle 
                      cx="50" cy="50" r="42" 
                      stroke="#0F766E" strokeWidth="8" fill="none"
                      strokeDasharray="264" strokeDashoffset="24"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-serif text-4xl font-extrabold text-vedic-charcoal">92</span>
                    <span className="text-xs font-mono font-bold text-vedic-gold uppercase">ELITE CLASS</span>
                  </div>
                </div>
                <p className="text-xs text-vedic-slate font-light">
                  Top 5% athletic metabolic readiness aligned with {athleteData.dosha.toUpperCase()} Prakriti.
                </p>
              </div>

              {/* Dynamic Macro Rings (Feature 7) */}
              <div className="lg:col-span-4 glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl space-y-4 flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-vedic-sand pb-2">
                  <span className="font-mono text-xs font-bold text-vedic-forest uppercase">MACRO RINGS</span>
                  <span className="text-[10px] font-mono text-vedic-copper">DAILY TARGETS</span>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-vedic-copper">Calories</span>
                      <span className="font-mono">{tdee} kcal</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-vedic-sand overflow-hidden">
                      <div className="h-full bg-vedic-copper w-[92%] rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-vedic-emerald">Protein Target</span>
                      <span className="font-mono">{proteinGrams} g</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-vedic-sand overflow-hidden">
                      <div className="h-full bg-vedic-emerald w-[88%] rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-amber-700">Hydration Intake</span>
                      <span className="font-mono">{hydrationLiters} L</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-vedic-sand overflow-hidden">
                      <div className="h-full bg-amber-500 w-[95%] rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono font-bold text-center pt-2">
                  <div className="p-2 rounded-xl bg-white border border-vedic-sand">
                    Carbs: {carbsGrams}g
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-vedic-sand">
                    Fats: {fatGrams}g
                  </div>
                </div>
              </div>

              {/* Recovery Intelligence (Feature 14) */}
              <div className="lg:col-span-4 glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-vedic-sand pb-2">
                  <span className="font-mono text-xs font-bold text-vedic-forest uppercase">RECOVERY PREDICTION</span>
                  <HeartPulse className="w-4 h-4 text-red-600 animate-pulse" />
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-white border border-vedic-sand flex items-center justify-between text-xs font-mono font-bold">
                    <span>Tomorrow Rest</span>
                    <span className="text-vedic-emerald">87% Recovered</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-vedic-sand flex items-center justify-between text-xs font-mono font-bold">
                    <span>48 Hours Post-Match</span>
                    <span className="text-vedic-gold font-extrabold">96% Recovered</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-vedic-sand flex items-center justify-between text-xs font-mono font-bold">
                    <span>72 Hours Peak State</span>
                    <span className="text-vedic-forest">100% Cell Peak</span>
                  </div>
                </div>

                <div className="text-[11px] text-vedic-slate font-light">
                  Ayurvedic herbal Rasayanas accelerate glycogen re-synthesis by 2.4x.
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: INTERACTIVE NUTRITION PLATE (Feature 6) */}
          {activeTab === 'nutrition' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Interactive Nutrition Plate Visualizer */}
              <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-vedic-gold/40 shadow-xl text-center space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-vedic-charcoal">
                    Interactive Ayurvedic Performance Plate
                  </h3>
                  <p className="text-xs text-vedic-slate font-light">
                    Visual meal assembly calculated for {selectedSport.name} ({carbsGrams}g Carbs • {proteinGrams}g Protein)
                  </p>
                </div>

                {/* Animated Plate Graphic */}
                <div className="relative w-72 h-72 mx-auto rounded-full bg-gradient-to-tr from-vedic-sand to-white border-8 border-vedic-gold/40 shadow-2xl p-4 flex items-center justify-center overflow-hidden">
                  {/* Plate Dividers */}
                  <div className="absolute inset-0 border-r border-b border-vedic-sand opacity-60" />

                  {/* Food Items Animation */}
                  <div className="grid grid-cols-2 gap-4 w-full h-full z-10">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center justify-center p-2 rounded-2xl bg-amber-100/80 border border-amber-300">
                      <span className="text-3xl">🍚</span>
                      <span className="text-[10px] font-bold text-amber-900 font-mono mt-1">Brown Rice ({carbsGrams}g)</span>
                    </motion.div>

                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} className="flex flex-col items-center justify-center p-2 rounded-2xl bg-emerald-100/80 border border-emerald-300">
                      <span className="text-3xl">🫘</span>
                      <span className="text-[10px] font-bold text-emerald-900 font-mono mt-1">Paneer / Sprouts ({proteinGrams}g)</span>
                    </motion.div>

                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="flex flex-col items-center justify-center p-2 rounded-2xl bg-green-100/80 border border-green-300">
                      <span className="text-3xl">🥦</span>
                      <span className="text-[10px] font-bold text-green-900 font-mono mt-1">Steamed Sabzi</span>
                    </motion.div>

                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className="flex flex-col items-center justify-center p-2 rounded-2xl bg-yellow-100/80 border border-yellow-300">
                      <span className="text-3xl">🍯</span>
                      <span className="text-[10px] font-bold text-yellow-900 font-mono mt-1">Cow Ghee ({fatGrams}g)</span>
                    </motion.div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold">50% Complex Carbs</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold">30% Lean Protein</span>
                  <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-900 font-bold">20% Healthy Fats</span>
                </div>
              </div>

              {/* Ahara & Dravya Recommendation List */}
              <div className="lg:col-span-5 glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl space-y-4">
                <h4 className="font-serif text-lg font-bold text-vedic-charcoal border-b border-vedic-sand pb-2">
                  Prescribed Ayurvedic Dravyas
                </h4>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-white border border-vedic-sand space-y-1">
                    <div className="flex justify-between items-center text-xs font-bold text-vedic-forest">
                      <span>🌿 {selectedSport.doshaAlignments[athleteData.dosha]?.primaryHerb || 'Ashwagandha'}</span>
                      <span className="text-[10px] font-mono bg-vedic-gold/20 px-2 py-0.5 rounded-full text-vedic-copper">Pre-Workout</span>
                    </div>
                    <p className="text-xs text-vedic-slate font-light">
                      {selectedSport.doshaAlignments[athleteData.dosha]?.benefit || 'Enhances ATP endurance & joint stability.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-vedic-sand space-y-1">
                    <div className="flex justify-between items-center text-xs font-bold text-vedic-forest">
                      <span>🥥 Kokum & Electrolyte Jal</span>
                      <span className="text-[10px] font-mono bg-vedic-emerald/20 px-2 py-0.5 rounded-full text-vedic-forest">Intra-Training</span>
                    </div>
                    <p className="text-xs text-vedic-slate font-light">
                      Prevents Pitta overheating & preserves sodium balance during heavy sweat loss.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-vedic-sand space-y-1">
                    <div className="flex justify-between items-center text-xs font-bold text-vedic-forest">
                      <span>🥛 Golden Turmeric Almond Milk</span>
                      <span className="text-[10px] font-mono bg-vedic-copper/20 px-2 py-0.5 rounded-full text-vedic-copper">Night Recovery</span>
                    </div>
                    <p className="text-xs text-vedic-slate font-light">
                      Flushes lactic acid and promotes deep REM restorative sleep.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: DAILY TIMELINE & WEEKLY CALENDAR (Features 4 & 5) */}
          {activeTab === 'exercise' && (
            <div className="space-y-6">
              {/* Daily Horizontal Timeline (Dinacharya) */}
              <div className="glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl space-y-4">
                <div className="flex justify-between items-center border-b border-vedic-sand pb-2">
                  <h3 className="font-serif text-xl font-bold text-vedic-charcoal">
                    Daily Dinacharya Athlete Timeline
                  </h3>
                  <span className="text-xs font-mono font-bold text-vedic-emerald uppercase">24-Hour Rhythm</span>
                </div>

                {/* Horizontal Scrollable Timeline */}
                <div className="flex items-center gap-4 overflow-x-auto pb-4 pt-2">
                  {[
                    { time: '05:30 AM', title: 'Brahma Muhurta Wake Up', icon: '🌅' },
                    { time: '06:00 AM', title: 'Copper Jal Hydration', icon: '💧' },
                    { time: '06:30 AM', title: 'Pranayama & Dynamic Warmup', icon: '🧘' },
                    { time: '07:00 AM', title: `${selectedSport.name} Training Session`, icon: selectedSport.icon },
                    { time: '08:45 AM', title: 'Post-Workout Rasayana Meal', icon: '🍲' },
                    { time: '01:00 PM', title: 'Ayurvedic Balanced Lunch', icon: '🥗' },
                    { time: '05:00 PM', title: 'Tactical Drills & Mobility', icon: '⚡' },
                    { time: '08:00 PM', title: 'Light Nutritious Dinner', icon: '🥣' },
                    { time: '10:00 PM', title: 'Herbal Golden Milk & Sleep', icon: '🌙' }
                  ].map((step, idx) => (
                    <div key={idx} className="shrink-0 w-44 glass-card p-4 rounded-2xl border border-vedic-gold/30 text-center space-y-2">
                      <span className="text-2xl">{step.icon}</span>
                      <div className="text-[10px] font-mono font-bold text-vedic-copper uppercase">{step.time}</div>
                      <div className="text-xs font-bold text-vedic-charcoal leading-snug">{step.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Performance Calendar */}
              <div className="glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl space-y-4">
                <h3 className="font-serif text-xl font-bold text-vedic-charcoal border-b border-vedic-sand pb-2">
                  Apple-Style Weekly Microcycle Plan
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-7 gap-3">
                  {selectedSport.weeklySchedule.map((dayItem, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white border border-vedic-sand text-center space-y-2">
                      <div className="text-xs font-mono font-bold text-vedic-forest uppercase">{dayItem.day}</div>
                      <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-vedic-gold/20 text-vedic-copper">
                        {dayItem.type}
                      </div>
                      <div className="text-xs font-bold text-vedic-charcoal">{dayItem.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SMART GROCERY LIST (Feature 13) */}
          {activeTab === 'shopping' && (
            <div className="glass-card p-8 rounded-3xl border border-vedic-gold/40 shadow-xl space-y-6">
              <div className="flex justify-between items-center border-b border-vedic-sand pb-3">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-vedic-charcoal">
                    Smart Ayurvedic Grocery Basket
                  </h3>
                  <p className="text-xs text-vedic-slate font-light">
                    Auto-categorized weekly shopping list based on {athleteData.dosha.toUpperCase()} Prakriti.
                  </p>
                </div>
                <button
                  onClick={() => soundEngine.playSuccessTone()}
                  className="px-4 py-2 rounded-full bg-vedic-forest text-vedic-bg3 text-xs font-bold font-mono flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-4 h-4 text-vedic-gold" />
                  <span>Export List</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-3">
                  <span className="font-mono text-xs font-bold text-vedic-forest uppercase block border-b pb-1">
                    🥬 Vegetables & Greens
                  </span>
                  <ul className="text-xs text-vedic-slate space-y-1.5 font-light">
                    <li>• Spinach & Methi Greens</li>
                    <li>• Sweet Potatoes</li>
                    <li>• Ash Gourd (Petha)</li>
                    <li>• Beetroots</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-3">
                  <span className="font-mono text-xs font-bold text-vedic-copper uppercase block border-b pb-1">
                    🥩 Proteins & Legumes
                  </span>
                  <ul className="text-xs text-vedic-slate space-y-1.5 font-light">
                    <li>• Sprouted Moong Dal</li>
                    <li>• Organic Paneer / Tofu</li>
                    <li>• Roasted Sattu Powder</li>
                    <li>• Soaked Almonds & Walnut</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-3">
                  <span className="font-mono text-xs font-bold text-amber-700 uppercase block border-b pb-1">
                    🌾 Grains & Carbs
                  </span>
                  <ul className="text-xs text-vedic-slate space-y-1.5 font-light">
                    <li>• Unpolished Brown Rice</li>
                    <li>• Ragi / Finger Millet</li>
                    <li>• Quinoa & Oats</li>
                    <li>• Dates & Jaggery</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-3">
                  <span className="font-mono text-xs font-bold text-vedic-gold uppercase block border-b pb-1">
                    🌿 Ayurvedic Dravyas
                  </span>
                  <ul className="text-xs text-vedic-slate space-y-1.5 font-light">
                    <li>• A2 Desi Cow Ghee</li>
                    <li>• Ashwagandha Churna</li>
                    <li>• Organic Amla Juice</li>
                    <li>• Kokum & Cardamom</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: AYURVEDA & RECOVERY (Feature 16) */}
          {activeTab === 'recovery' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              <div className="lg:col-span-12 glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl space-y-4">
                <h3 className="font-serif text-xl font-bold text-vedic-charcoal border-b border-vedic-sand pb-2">
                  AI Actionable Recommendations
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-vedic-forest">
                      <span>💧 Hydration Protocol</span>
                      <Check className="w-4 h-4 text-vedic-emerald" />
                    </div>
                    <p className="text-xs text-vedic-slate font-light">
                      Consume 500ml warm water with lemon & sea salt upon waking to flush metabolic waste.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-vedic-copper">
                      <span>🌙 Sleep Optimization</span>
                      <Check className="w-4 h-4 text-vedic-gold" />
                    </div>
                    <p className="text-xs text-vedic-slate font-light">
                      Maintain 8 hours uninterrupted sleep. Perform Nadi Shodhana Pranayama for 10 mins before bed.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-vedic-sand space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-amber-800">
                      <span>🧘 Joint Abhyanga</span>
                      <Check className="w-4 h-4 text-amber-600" />
                    </div>
                    <p className="text-xs text-vedic-slate font-light">
                      Apply warm sesame oil to knee & shoulder joints twice weekly for ligament resilience.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </motion.div>
      </div>

    </div>
  );
}
