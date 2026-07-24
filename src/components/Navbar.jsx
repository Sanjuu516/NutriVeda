import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Shield, Cpu, Activity, Dna, Compass } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Navbar({ activeSection, setActiveSection, currentSport, onOpenGenerator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentY > lastScrollY && currentY > 300) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'hero', label: 'Overview', icon: Compass },
    { id: 'sports', label: 'Multi-Sport Engine', icon: Activity },
    { id: 'solution', label: 'Fusion Engine', icon: Dna },
    { id: 'architecture', label: 'Living Architecture', icon: Cpu },
    { id: 'challenges', label: 'Kintsugi Challenges', icon: Shield }
  ];

  const toggleAudio = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    soundEngine.playClick();
  };

  return (
    <motion.header
      className={`fixed top-4 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-500 pointer-events-none ${
        isHidden ? '-translate-y-24' : 'translate-y-0'
      }`}
    >
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full glass-nav px-4 py-2.5 shadow-glass border border-vedic-gold/30 ${
          isScrolled ? 'max-w-4xl scale-95 shadow-2xl bg-vedic-bg3/90' : 'w-full max-w-6xl'
        }`}
      >
        {/* Brand Identity */}
        <div 
          onClick={() => {
            soundEngine.playHoverChime();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-vedic-forest to-vedic-emerald p-0.5 shadow-emerald-glow group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-vedic-bg2 flex items-center justify-center">
              <span className="text-xl">🌿</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-wider gold-gradient-text">
              NUTRIVEDAs
            </span>
            <span className="text-[10px] tracking-widest uppercase font-mono text-vedic-emerald font-semibold">
              VEDIC VISION 2K24
            </span>
          </div>
        </div>

        {/* Sliding Navigation Tabs */}
        <div className="hidden md:flex items-center gap-1 relative bg-vedic-sand/30 p-1.5 rounded-full border border-vedic-sand/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onMouseEnter={() => soundEngine.playHoverChime()}
                onClick={() => {
                  soundEngine.playClick();
                  setActiveSection(item.id);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 z-10 ${
                  isActive ? 'text-vedic-forest font-bold' : 'text-vedic-slate hover:text-vedic-forest'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-vedic-gold' : 'opacity-60'}`} />
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-white rounded-full shadow-md -z-10 border border-vedic-gold/40"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Active Sport Badge */}
          {currentSport && (
            <div className="hidden lg:flex items-center gap-1.5 bg-vedic-gold/15 text-vedic-copper border border-vedic-gold/40 text-xs px-3 py-1 rounded-full font-medium">
              <span>{currentSport.icon}</span>
              <span className="font-mono text-[11px] font-bold">{currentSport.name}</span>
            </div>
          )}

          {/* Sound Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => soundEngine.playHoverChime()}
            title={isMuted ? 'Unmute Web Audio' : 'Mute Web Audio'}
            className="p-2.5 rounded-full bg-vedic-sand/40 hover:bg-vedic-sand text-vedic-forest border border-vedic-sand/80 transition-all hover:scale-105"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-700" /> : <Volume2 className="w-4 h-4 text-vedic-emerald" />}
          </button>

          {/* Generator Launch CTA Button */}
          <button
            onClick={() => {
              soundEngine.playSuccessTone();
              onOpenGenerator();
            }}
            onMouseEnter={() => soundEngine.playHoverChime()}
            className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs transition-transform active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-vedic-gold via-vedic-emerald to-vedic-copper animate-spin-slow" />
            <span className="relative flex items-center gap-1.5 px-4 py-2 rounded-full bg-vedic-forest text-vedic-bg3 group-hover:bg-vedic-emerald transition-colors shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-vedic-gold animate-pulse" />
              <span>Launch AI Engine</span>
            </span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
