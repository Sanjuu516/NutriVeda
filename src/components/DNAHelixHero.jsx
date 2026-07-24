import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Activity, Dna, ShieldCheck, Zap, Layers } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function DNAHelixHero({ onExploreClick, onLaunchEngine }) {
  const canvasRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scientific 3D Atomic & Particle Canvas Renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    const numNodes = 36;
    const helixRadius = 110;
    const helixHeight = height * 0.82;
    let rotation = 0;

    const render = () => {
      rotation += 0.01;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouseOffset.x * 25;
      const centerY = height / 2 + mouseOffset.y * 25;

      // Draw Volumetric Gold Energy Rings
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation * 0.4);
      ctx.strokeStyle = 'rgba(212, 160, 23, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, helixRadius * 1.6, helixRadius * 0.5, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Render 3D Vector Molecular Nodes & Rungs
      for (let i = 0; i < numNodes; i++) {
        const t = (i / numNodes) * Math.PI * 4 + rotation;
        const y = (i / numNodes - 0.5) * helixHeight;

        const x1 = Math.cos(t) * helixRadius;
        const z1 = Math.sin(t) * helixRadius;
        const scale1 = (z1 + 220) / 220;

        const x2 = Math.cos(t + Math.PI) * helixRadius;
        const z2 = Math.sin(t + Math.PI) * helixRadius;
        const scale2 = (z2 + 220) / 220;

        const projX1 = centerX + x1 * scale1;
        const projY1 = centerY + y;
        const projX2 = centerX + x2 * scale2;
        const projY2 = centerY + y;

        // Vector Hydrogen Bond / Golden Filament Rung
        ctx.beginPath();
        ctx.moveTo(projX1, projY1);
        ctx.lineTo(projX2, projY2);
        ctx.strokeStyle = `rgba(212, 160, 23, ${0.15 + (z1 + helixRadius) / (2 * helixRadius) * 0.4})`;
        ctx.lineWidth = 1.6 * scale1;
        ctx.stroke();

        // Node 1: Vector Emerald Atomic Sphere (No Emojis)
        ctx.save();
        ctx.beginPath();
        ctx.arc(projX1, projY1, Math.max(3, 7 * scale1), 0, Math.PI * 2);
        ctx.fillStyle = '#0F766E';
        ctx.shadowColor = '#0F766E';
        ctx.shadowBlur = 12 * scale1;
        ctx.fill();
        ctx.strokeStyle = '#D4A017';
        ctx.lineWidth = 1 * scale1;
        ctx.stroke();
        ctx.restore();

        // Node 2: Vector Gold Botanical Nucleus
        ctx.save();
        ctx.beginPath();
        ctx.arc(projX2, projY2, Math.max(3, 7 * scale2), 0, Math.PI * 2);
        ctx.fillStyle = '#D4A017';
        ctx.shadowColor = '#D4A017';
        ctx.shadowBlur = 12 * scale2;
        ctx.fill();
        ctx.strokeStyle = '#0F766E';
        ctx.lineWidth = 1 * scale2;
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseOffset]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Keynote Storytelling Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          
          {/* Top Innovation Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-vedic-gold/40 shadow-sm w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-vedic-gold animate-ping" />
            <span className="text-xs font-mono font-bold tracking-widest text-vedic-forest uppercase">
              VEDIC VISION 2K24 · INTELLIGENT NUTRITION
            </span>
          </motion.div>

          {/* Staggered Animated Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-vedic-charcoal">
              Nutrition Meets <br />
              <span className="gold-gradient-text">Ancient Intelligence</span>
            </h1>
            <p className="text-lg sm:text-xl text-vedic-slate max-w-2xl font-light leading-relaxed">
              Engineering personalized performance nutrition by combining cutting-edge sports science with 5,000-year-old Ayurvedic wisdom.
            </p>
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 text-xs font-medium text-vedic-slate"
          >
            <div className="flex items-center gap-2 bg-white/80 px-3.5 py-2 rounded-xl border border-vedic-sand shadow-sm">
              <Activity className="w-4 h-4 text-vedic-emerald" />
              <span>Multi-Sport AI Logic</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3.5 py-2 rounded-xl border border-vedic-sand shadow-sm">
              <Dna className="w-4 h-4 text-vedic-gold" />
              <span>Prakriti Dosha Engine</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3.5 py-2 rounded-xl border border-vedic-sand shadow-sm">
              <ShieldCheck className="w-4 h-4 text-vedic-copper" />
              <span>Kintsugi Injury Recovery</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={() => {
                soundEngine.playSuccessTone();
                onLaunchEngine();
              }}
              onMouseEnter={() => soundEngine.playHoverChime()}
              className="px-8 py-4 rounded-full bg-vedic-emerald hover:bg-vedic-forest text-vedic-bg3 font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-emerald-glow hover:shadow-2xl flex items-center justify-center gap-3 group"
            >
              <Sparkles className="w-4 h-4 text-vedic-gold group-hover:rotate-180 transition-transform duration-500" />
              <span>Generate Athlete Diet & Plan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                soundEngine.playClick();
                onExploreClick();
              }}
              onMouseEnter={() => soundEngine.playHoverChime()}
              className="px-7 py-4 rounded-full glass-card hover:bg-vedic-sand/40 text-vedic-charcoal font-semibold text-xs transition-all border border-vedic-gold/40 flex items-center justify-center gap-2"
            >
              <span>Explore Multi-Sport Engine</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Realistic 3D DNA Helix Image & Interactive Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative h-[500px] sm:h-[580px] flex items-center justify-center"
        >
          {/* Realistic High-Res 3D Rendered Helix Image with Parallax */}
          <motion.div
            animate={{
              x: mouseOffset.x * 20,
              y: mouseOffset.y * 20,
              rotateY: mouseOffset.x * 12,
              rotateX: -mouseOffset.y * 12
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full h-full rounded-3xl overflow-hidden glass-card p-3 border border-vedic-gold/40 shadow-2xl flex items-center justify-center"
          >
            <img
              src="/assets/dna_helix.jpg"
              alt="NutriVeda 3D DNA Helix"
              className="w-full h-full object-cover rounded-2xl mix-blend-multiply opacity-95 filter drop-shadow-2xl"
            />

            {/* Canvas Overlay for Particle Glow & Energy Orbit */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
            />
          </motion.div>

          {/* Floating Micro Info Cards */}
          <div className="absolute top-6 left-2 glass-card p-3 rounded-2xl border border-vedic-gold/40 shadow-lg flex items-center gap-3 animate-float">
            <div className="p-2 rounded-xl bg-vedic-forest text-vedic-gold">
              <Dna className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-vedic-emerald font-bold">DNA Synthesis</div>
              <div className="text-xs font-bold text-vedic-charcoal">Botanical & Macro Fusion</div>
            </div>
          </div>

          <div 
            className="absolute bottom-8 right-2 glass-card p-3 rounded-2xl border border-vedic-emerald/40 shadow-lg flex items-center gap-3 animate-float"
            style={{ animationDelay: '-3s' }}
          >
            <div className="p-2 rounded-xl bg-vedic-gold/20 text-vedic-copper">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-vedic-copper font-bold">Realtime AI</div>
              <div className="text-xs font-bold text-vedic-charcoal">98.4% Metabolic Accuracy</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
