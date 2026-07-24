import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import EvolvingBackground from './components/EvolvingBackground';
import Navbar from './components/Navbar';
import DNAHelixHero from './components/DNAHelixHero';
import MultiSportSelector from './components/MultiSportSelector';
import ProblemScale from './components/ProblemScale';
import FusionEngine from './components/FusionEngine';
import ArchitectureMap from './components/ArchitectureMap';
import CrackedGlassChallenges from './components/CrackedGlassChallenges';
import ImpactStats from './components/ImpactStats';
import TempleFooter from './components/TempleFooter';
import NutriVedaEngine from './components/NutriVedaEngine';
import { SPORTS_DATABASE } from './data/sportsData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedSport, setSelectedSport] = useState(SPORTS_DATABASE[0]);
  const [isEngineOpen, setIsEngineOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-vedic-charcoal font-sans selection:bg-vedic-gold/30">
      
      {/* Custom Energy Orb Cursor */}
      <CustomCursor />

      {/* Living Evolving Canvas Background */}
      <EvolvingBackground />

      {/* Floating Glass Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentSport={selectedSport}
        onOpenGenerator={() => setIsEngineOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        
        {/* DNA Helix 3D Hero */}
        <DNAHelixHero
          onExploreClick={() => {
            const el = document.getElementById('sports');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onLaunchEngine={() => setIsEngineOpen(true)}
        />

        {/* Feature 1: Multi-Sport Selector & Matrix */}
        <MultiSportSelector
          selectedSport={selectedSport}
          onSelectSport={(sport) => setSelectedSport(sport)}
          onLaunchEngine={() => setIsEngineOpen(true)}
        />

        {/* Feature 2: Problem Statement & Reconnecting Scale */}
        <ProblemScale />

        {/* Feature 3: Core Innovation Fusion Engine */}
        <FusionEngine />

        {/* Feature 4: Living Architecture Map */}
        <ArchitectureMap />

        {/* Feature 5: Kintsugi Cracked Glass Challenges */}
        <CrackedGlassChallenges />

        {/* Feature 6: Impact & Metrics Room */}
        <ImpactStats />

      </main>

      {/* Ancient Digital Temple Footer */}
      <TempleFooter />

      {/* Live AI Athlete Plan Generator Engine Modal */}
      {isEngineOpen && (
        <NutriVedaEngine
          initialSport={selectedSport}
          onClose={() => setIsEngineOpen(false)}
        />
      )}

    </div>
  );
}
