import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Activity, Dna, ShieldCheck } from 'lucide-react';
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

  // 3D Canvas DNA Helix Renderer
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

    // Dynamic DNA Helix Node Generator
    const numPairs = 24;
    const helixRadius = 90;
    const helixHeight = height * 0.85;

    // Elements: lotus petals 🌸, leaves 🌿, protein 🥩, sports ⚽, calories ⚡, molecules 🧪
    const icons = ['🌿', '🌸', '🧪', '⚽', '⚡', '🏋️', '🏏', '💊', '🧬'];

    let rotation = 0;

    const render = () => {
      rotation += 0.012;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouseOffset.x * 30;
      const centerY = height / 2 + mouseOffset.y * 30;

      // Draw Orbiting Outer Energy Halo
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.strokeStyle = 'rgba(212, 160, 23, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, helixRadius * 1.8, helixRadius * 0.6, rotation * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Render 3D DNA Strands
      for (let i = 0; i < numPairs; i++) {
        const t = (i / numPairs) * Math.PI * 4 + rotation;
        const y = (i / numPairs - 0.5) * helixHeight;

        // Strand 1
        const x1 = Math.cos(t) * helixRadius;
        const z1 = Math.sin(t) * helixRadius;
        const scale1 = (z1 + 200) / 200; // 3D depth perspective multiplier

        // Strand 2 (180 deg shifted)
        const x2 = Math.cos(t + Math.PI) * helixRadius;
        const z2 = Math.sin(t + Math.PI) * helixRadius;
        const scale2 = (z2 + 200) / 200;

        const projX1 = centerX + x1 * scale1;
        const projY1 = centerY + y;
        const projX2 = centerX + x2 * scale2;
        const projY2 = centerY + y;

        // Connecting Hydrogen Bond / Golden Energy Rungs
        ctx.beginPath();
        ctx.moveTo(projX1, projY1);
        ctx.lineTo(projX2, projY2);
        ctx.strokeStyle = `rgba(212, 160, 23, ${0.15 + (z1 + helixRadius) / (2 * helixRadius) * 0.35})`;
        ctx.lineWidth = 1.8 * scale1;
        ctx.stroke();

        // Node 1 (Emerald Science Molecule)
        ctx.save();
        ctx.font = `${Math.max(12, 18 * scale1)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#0F766E';
        ctx.shadowBlur = 10 * scale1;
        const icon1 = icons[i % icons.length];
        ctx.fillText(icon1, projX1, projY1);
        ctx.restore();

        // Node 2 (Gold Ayurvedic Botanical)
        ctx.save();
        ctx.font = `${Math.max(12, 18 * scale2)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#D4A017';
        ctx.shadowBlur = 10 * scale2;
        const icon2 = icons[(i + 4) % icons.length];
        ctx.fillText(icon2, projX2, projY2);
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
      {/* Container Grid */}
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
              VEDIC VISION 2K24 · NATIONAL PLATFORM
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
            <div className="flex items-center gap-2 bg-white/70 px-3.5 py-2 rounded-xl border border-vedic-sand">
              <Activity className="w-4 h-4 text-vedic-emerald" />
              <span>Multi-Sport AI Logic</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 px-3.5 py-2 rounded-xl border border-vedic-sand">
              <Dna className="w-4 h-4 text-vedic-gold" />
              <span>Prakriti Dosha Engine</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 px-3.5 py-2 rounded-xl border border-vedic-sand">
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
              className="px-8 py-4 rounded-full bg-vedic-emerald hover:bg-vedic-forest text-vedic-bg3 font-bold text-sm tracking-wide shadow-emerald-glow hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
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
              className="px-7 py-4 rounded-full glass-card hover:bg-vedic-sand/40 text-vedic-charcoal font-semibold text-sm transition-all border border-vedic-gold/40 flex items-center justify-center gap-2"
            >
              <span>Explore Multi-Sport Visualizer</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: 3D DNA Helix Canvas & Micro Statistics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative h-[480px] sm:h-[560px] flex items-center justify-center"
        >
          {/* Canvas Element */}
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          />

          {/* Floating Micro Info Cards */}
          <div className="absolute top-6 left-2 glass-card p-3 rounded-2xl border border-vedic-gold/40 shadow-lg flex items-center gap-3 animate-float">
            <span className="text-2xl">🧬</span>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-vedic-emerald font-bold">DNA Synthesis</div>
              <div className="text-xs font-bold text-vedic-charcoal">Botanical & Macro Fusion</div>
            </div>
          </div>

          <div 
            className="absolute bottom-8 right-2 glass-card p-3 rounded-2xl border border-vedic-emerald/40 shadow-lg flex items-center gap-3 animate-float"
            style={{ animationDelay: '-3s' }}
          >
            <span className="text-2xl">⚡</span>
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
