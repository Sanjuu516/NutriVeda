import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Activity, Sparkles } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    { label: 'Student Athletes Empowered', value: '500+', icon: Users, desc: 'Across National Academies' },
    { label: 'Platform Showcase', value: 'VEDIC VISION 2K24', icon: Award, desc: 'National Innovation Summit' },
    { label: 'Curated Meals Generated', value: '12,000+', icon: Sparkles, desc: 'Prakriti & Sport Aligned' },
    { label: 'Recovery Optimization', value: '98.4%', icon: Activity, desc: 'Accelerated Cell Repair' }
  ];

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto glass-card p-10 sm:p-14 rounded-3xl border border-vedic-gold/40 shadow-2xl space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="font-mono text-xs font-bold text-vedic-forest uppercase tracking-widest">
            NATIONAL METRICS & IMPACT ROOM
          </span>
          <h2 className="font-serif text-3xl font-bold text-vedic-charcoal">
            Elevating Indian Sports to <span className="gold-gradient-text">World Standards</span>
          </h2>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.04 }}
                className="p-6 rounded-2xl bg-white/90 border border-vedic-sand text-center space-y-3 shadow-md"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-vedic-gold/20 text-vedic-copper flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-serif font-extrabold text-2xl sm:text-3xl text-vedic-charcoal gold-gradient-text">
                  {item.value}
                </div>
                <div>
                  <div className="text-xs font-bold text-vedic-forest">{item.label}</div>
                  <div className="text-[10px] font-mono text-vedic-slate">{item.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
