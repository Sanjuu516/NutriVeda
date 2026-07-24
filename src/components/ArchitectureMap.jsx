import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '../utils/audio';
import { 
  Cpu, Database, Layout, ArrowDown, ChevronRight, Layers, 
  Sparkles, Terminal, Code, Server, Play, Pause, Activity
} from 'lucide-react';

export default function ArchitectureMap() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [packetSpeed, setPacketSpeed] = useState(1); // 1x, 2x, 4x
  const [isSimulating, setIsSimulating] = useState(true);
  const [logEntries, setLogEntries] = useState([]);

  // System Nodes Dataset Across 3 Tiers
  const architectureTiers = [
    {
      layerId: 'client',
      layerName: 'Layer 1: Client & Spatial UI Tier',
      layerDesc: 'Apple Vision Pro spatial rendering, 3D Canvas visualizer, & physics-based input controls.',
      color: 'border-vedic-emerald bg-emerald-50/50',
      nodes: [
        {
          id: 'client-input',
          name: 'Biometric Intake & Sport Selector',
          type: 'React State Component',
          latency: '2 ms',
          payload: '{ sportId: "cricket", weight: 72, height: 178, dosha: "pitta", goal: "muscle_gain" }',
          details: 'Captures athlete biometrics, sport type, activity level, and optional Prakriti self-identification.'
        },
        {
          id: 'client-avatar',
          name: '3D Anatomical Heatmap Engine',
          type: 'SVG/Canvas Vector Shader',
          latency: '16 ms (60 FPS)',
          payload: '{ muscleHighlights: ["Quadriceps", "Rotator Cuff"], fatigueScore: 75 }',
          details: 'Calculates dynamic muscular load and updates 3D body heatmaps in real-time as sliders change.'
        },
        {
          id: 'client-vision',
          name: 'Spatial Vision Pro Glass Panel Layout',
          type: '3D Spatial Perspective Engine',
          latency: '12 ms',
          payload: '{ spatialRotation: { rx: -4, ry: 8 }, activeTab: "nutrition" }',
          details: 'Renders floating 3D spatial glass cards with independent hover perspective and tilt physics.'
        }
      ]
    },
    {
      layerId: 'logic',
      layerName: 'Layer 2: Multi-Agent AI Logic Core',
      layerDesc: 'Mathematical BMR/TDEE calculation, macro splitters, and kinetic load optimization.',
      color: 'border-vedic-gold bg-amber-50/50',
      nodes: [
        {
          id: 'logic-bmr',
          name: 'Mifflin-St Jeor BMR & TDEE Calculator',
          type: 'Pure Math Micro-Engine',
          latency: '0.4 ms',
          payload: '{ bmr: 1680, tdee: 2840, targetGoal: "+15% Caloric Surplus" }',
          details: 'Executes basal metabolic rate equations adjusted for sport activity multipliers and weight goals.'
        },
        {
          id: 'logic-macro',
          name: 'Sport-Specific Macro Splitter',
          type: 'Metabolic Ratio Engine',
          latency: '0.8 ms',
          payload: '{ carbsGrams: 355, proteinGrams: 151, fatGrams: 63 }',
          details: 'Splits TDEE into precise g of protein, carbs, and healthy fats tailored to sport endurance demands.'
        },
        {
          id: 'logic-pipeline',
          name: 'AI Pipeline Ticker & Synthesis Loader',
          type: 'Asynchronous Stream Orchestrator',
          latency: '450 ms per step',
          payload: '{ step: 6, status: "Matching Prakriti Dosha...", progress: 60% }',
          details: 'Sequences 10 step-by-step reasoning steps mimicking deep generative AI decision pipelines.'
        }
      ]
    },
    {
      layerId: 'database',
      layerName: 'Layer 3: Ayurvedic Knowledge Graph & Rules DB',
      layerDesc: 'Tridosha (Vata/Pitta/Kapha) rules database, 500+ Dravya herbs matrix, and Dinacharya timing engine.',
      color: 'border-vedic-forest bg-green-50/50',
      nodes: [
        {
          id: 'db-dosha',
          name: 'Prakriti Tridosha Rules Database',
          type: 'Knowledge Graph Matrix',
          latency: '1.2 ms',
          payload: '{ dosha: "pitta", agniFire: "High", mealTemp: "Cooling", avoid: ["Spicy", "Fried"] }',
          details: 'Maps athlete Prakriti to thermal food qualities, digestive Agni capacity, and avoid lists.'
        },
        {
          id: 'db-dravya',
          name: '500+ Ayurvedic Dravya & Herbal Matrix',
          type: 'Pharmacological Index DB',
          latency: '1.8 ms',
          payload: '{ primaryDravya: "Shatavari & Amla", benefit: "Cellular Cooling & Lactic Acid Flush" }',
          details: 'Indexes therapeutic herbs, bio-availability timings, and electrolyte coconut formulations.'
        },
        {
          id: 'db-dinacharya',
          name: '24-Hour Dinacharya Circadian Rhythm Engine',
          type: 'Chronobiological Scheduler',
          latency: '0.6 ms',
          payload: '{ brahmaMuhurta: "05:30 AM", postWorkoutAhara: "08:45 AM", sleepGoldenMilk: "10:00 PM" }',
          details: 'Schedules meal timings, hydration intervals, and sleep rituals aligned with natural circadian rhythms.'
        }
      ]
    }
  ];

  // Simulation packet streaming log generator
  useEffect(() => {
    if (!isSimulating) return;
    const timer = setInterval(() => {
      const logs = [
        '[CLIENT] Biometric intake received: { weight: 72kg, sport: "Cricket" }',
        '[LOGIC] Calculating BMR: 1680 kcal | TDEE: 2840 kcal',
        '[LOGIC] Macro Split: 50% Carbs (355g), 30% Protein (151g)',
        '[KNOWLEDGE GRAPH] Querying Prakriti Matrix: Pitta Dosha match',
        '[KNOWLEDGE GRAPH] Prescribing Dravya: Shatavari & Amla infusion',
        '[CLIENT] Spatial Vision Pro 3D Dashboard rendered in 14ms'
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setLogEntries((prev) => [randomLog, ...prev.slice(0, 4)]);
      soundEngine.playParticlePop();
    }, 1800 / packetSpeed);

    return () => clearInterval(timer);
  }, [isSimulating, packetSpeed]);

  return (
    <section id="architecture" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vedic-gold/20 text-vedic-copper text-xs font-mono font-bold uppercase tracking-widest border border-vedic-gold/40">
            <Cpu className="w-3.5 h-3.5" />
            <span>Living System Architecture · 3 Tiers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vedic-charcoal">
            Living System <span className="gold-gradient-text">Architecture Explorer</span>
          </h2>
          <p className="text-vedic-slate text-base sm:text-lg font-light">
            Explore the 3-tier processing pipeline connecting Client UI, Multi-Agent Logic Core, and Ayurvedic Knowledge DB.
          </p>
        </div>

        {/* Live Simulation Controls & Console Monitor */}
        <div className="glass-card p-6 rounded-3xl border border-vedic-gold/40 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-vedic-sand pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-vedic-forest" />
              <span className="font-mono text-xs font-bold text-vedic-forest uppercase">
                REALTIME PACKET STREAM SIMULATOR
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <button
                onClick={() => setIsSimulating(!isSimulating)}
                className="px-3 py-1.5 rounded-xl bg-vedic-forest text-vedic-bg3 font-bold flex items-center gap-1.5"
              >
                {isSimulating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isSimulating ? 'Pause Stream' : 'Start Stream'}</span>
              </button>

              <div className="flex items-center gap-1 bg-vedic-sand/40 p-1 rounded-xl">
                {[1, 2, 4].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setPacketSpeed(spd)}
                    className={`px-2 py-0.5 rounded-lg font-bold ${
                      packetSpeed === spd ? 'bg-vedic-gold text-vedic-charcoal' : 'text-vedic-slate'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Console Log Window */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-[11px] text-teal-400 space-y-1.5 min-h-[90px]">
            {logEntries.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <span className="text-vedic-gold">›</span>
                <span>{log}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3 Architecture Tiers Explorer Grid */}
        <div className="space-y-8">
          {architectureTiers.map((tier) => (
            <div key={tier.layerId} className={`glass-card p-6 sm:p-8 rounded-3xl border-2 ${tier.color} shadow-xl space-y-6`}>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-vedic-sand pb-3">
                <div>
                  <h3 className="font-serif font-bold text-xl text-vedic-charcoal">{tier.layerName}</h3>
                  <p className="text-xs text-vedic-slate font-light">{tier.layerDesc}</p>
                </div>
                <span className="text-[10px] font-mono font-bold bg-white px-3 py-1 rounded-full border border-vedic-sand text-vedic-forest">
                  3 Active Nodes
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tier.nodes.map((node) => {
                  const isSelected = selectedNode?.id === node.id;
                  return (
                    <motion.div
                      key={node.id}
                      whileHover={{ scale: 1.03, y: -4 }}
                      onClick={() => {
                        soundEngine.playClick();
                        setSelectedNode(node);
                      }}
                      onMouseEnter={() => soundEngine.playHoverChime()}
                      className={`p-5 rounded-2xl bg-white border-2 transition-all duration-300 relative space-y-3 cursor-pointer ${
                        isSelected
                          ? 'border-vedic-gold shadow-gold-glow ring-2 ring-vedic-gold/30'
                          : 'border-vedic-sand hover:border-vedic-emerald'
                      }`}
                    >
                      <div className="flex justify-between items-center text-[10px] font-mono font-bold text-vedic-copper">
                        <span>{node.type}</span>
                        <span className="text-vedic-emerald bg-emerald-50 px-2 py-0.5 rounded-full">{node.latency}</span>
                      </div>

                      <h4 className="font-serif font-bold text-sm text-vedic-charcoal">{node.name}</h4>
                      <p className="text-xs text-vedic-slate font-light leading-relaxed">{node.details}</p>

                      <div className="text-[10px] font-mono text-vedic-forest font-bold underline">
                        Click to Inspect Node Payload →
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Selected Architecture Node Inspector Drawer */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border-2 border-vedic-gold shadow-2xl space-y-4 bg-white"
            >
              <div className="flex justify-between items-center border-b border-vedic-sand pb-3">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-vedic-forest" />
                  <h3 className="font-serif font-bold text-lg text-vedic-charcoal">
                    Node Inspector: {selectedNode.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="px-3 py-1 rounded-full bg-vedic-sand/40 hover:bg-vedic-sand text-xs font-mono font-bold text-vedic-charcoal"
                >
                  Close Node
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-2">
                  <span className="font-mono font-bold text-vedic-forest uppercase block">Node Metadata</span>
                  <div className="p-3 rounded-xl bg-vedic-sand/30 space-y-1 font-mono">
                    <div>Type: <span className="font-bold text-vedic-charcoal">{selectedNode.type}</span></div>
                    <div>Processing Latency: <span className="font-bold text-vedic-emerald">{selectedNode.latency}</span></div>
                  </div>
                  <p className="text-vedic-slate font-light">{selectedNode.details}</p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono font-bold text-vedic-copper uppercase block">Realtime Payload Contract</span>
                  <pre className="p-3 rounded-xl bg-slate-950 text-teal-300 font-mono text-[11px] overflow-x-auto">
                    {selectedNode.payload}
                  </pre>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
