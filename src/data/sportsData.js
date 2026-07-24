// Comprehensive Sports & Ayurvedic Performance Data Matrix

export const SPORTS_DATABASE = [
  {
    id: 'cricket',
    name: 'Cricket',
    icon: '🏏',
    tagline: 'Explosive Power & Sustained Field Focus',
    accentColor: '#D4A017', // Gold
    bgGradient: 'from-amber-950/20 to-emerald-950/20',
    description: 'Requires multi-hour mental stamina, rotational core strength for bowling/batting, and fast agility sprints.',
    muscleFocus: {
      primeMovers: ['Rotator Cuff', 'Core Obliques', 'Quadriceps', 'Forearms'],
      fatigueZones: ['Lower Back', 'Shoulder Capsule', 'Hamstrings'],
      flexibilityRegions: ['Thoracic Spine', 'Hip Flexors']
    },
    macroSplit: { carbs: 50, protein: 30, fat: 20, targetCalMultiplier: 1.55, hydrationLiters: 4.2 },
    doshaAlignments: {
      vata: { primaryHerb: 'Ashwagandha', benefit: 'Joint stability & nervous system calming after long bowling spells' },
      pitta: { primaryHerb: 'Shatavari', benefit: 'Body heat regulation during sun exposure' },
      kapha: { primaryHerb: 'Trikatu', benefit: 'Metabolic speed & rapid acceleration out of crease' }
    },
    sampleCoachAdvice: "Good morning Rahul. Today's cricket session demands rotational core power and endurance. Increase complex carbs by 15% before nets and hydrate with electrolyte kokum water every 30 minutes.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Net Practice & Explosive Bowling Spells', macroTarget: 'High Carbs' },
      { day: 'Tue', type: 'Strength', activity: 'Rotational Core & Squat Power', macroTarget: 'High Protein' },
      { day: 'Wed', type: 'Recovery Day', activity: 'Ayurvedic Abhyanga Massage & Light Yoga', macroTarget: 'Anti-inflammatory' },
      { day: 'Thu', type: 'Cardio', activity: 'Interval Sprint Agility Drills', macroTarget: 'Moderate Carbs' },
      { day: 'Fri', type: 'Match Prep', activity: 'Tactical Fielding & Batting Drills', macroTarget: 'Balanced' },
      { day: 'Sat', type: 'Match Day', activity: 'Full 50-Over / T20 Fixture', macroTarget: 'Peak Glycogen' },
      { day: 'Sun', type: 'Mobility', activity: 'Pranayama & Thoracic Mobility', macroTarget: 'Detox Cleanse' }
    ]
  },
  {
    id: 'football',
    name: 'Football',
    icon: '⚽',
    tagline: 'Aerobic Capacity & Multi-Directional Agility',
    accentColor: '#0F766E', // Emerald
    bgGradient: 'from-emerald-950/20 to-teal-950/20',
    description: 'High-intensity 90-minute intermittent sprinting, continuous positional shifting, and rapid eccentric leg loading.',
    muscleFocus: {
      primeMovers: ['Quadriceps', 'Calves', 'Adductors', 'Glutes'],
      fatigueZones: ['Hamstrings', 'Achilles Tendon', 'Groin'],
      flexibilityRegions: ['Ankle Joint', 'Hip Rotators']
    },
    macroSplit: { carbs: 58, protein: 26, fat: 16, targetCalMultiplier: 1.7, hydrationLiters: 4.8 },
    doshaAlignments: {
      vata: { primaryHerb: 'Bala (Sida cordifolia)', benefit: 'Muscle tissue protection & muscle cramp prevention' },
      pitta: { primaryHerb: 'Amalaki (Amla)', benefit: 'Cellular cooling & lactic acid flushing' },
      kapha: { primaryHerb: 'Guggulu', benefit: 'Fat oxidation & agility acceleration' }
    },
    sampleCoachAdvice: "Pitches require 10+ km of distance coverage today. Load glycogen with roasted sweet potato & ghee. Drink amla-coconut water during half-time.",
    weeklySchedule: [
      { day: 'Mon', type: 'Cardio', activity: 'HIIT Pitch Sprints & Small Sided Games', macroTarget: 'Carb Loading' },
      { day: 'Tue', type: 'Strength', activity: 'Eccentric Hamstring & Plyometric Jumps', macroTarget: 'High Protein' },
      { day: 'Wed', type: 'Tactical', activity: 'Passing Drills & Positioning', macroTarget: 'Balanced' },
      { day: 'Thu', type: 'High Intensity', activity: 'Full Tempo Simulation Match', macroTarget: 'Peak Glycogen' },
      { day: 'Fri', type: 'Recovery Day', activity: 'Contrast Hydrotherapy & Kati Vasti', macroTarget: 'Hydration Focus' },
      { day: 'Sat', type: 'Match Day', activity: 'League Fixture', macroTarget: 'Intra-Match Fuel' },
      { day: 'Sun', type: 'Yoga', activity: 'Vinyasa Flow & Deep Tissue Roll', macroTarget: 'Recovery Ahara' }
    ]
  },
  {
    id: 'wrestling',
    name: 'Wrestling / Kushti',
    icon: '🏋',
    tagline: 'Raw Isometric Power & Weight Management',
    accentColor: '#B45309', // Copper
    bgGradient: 'from-amber-950/20 to-orange-950/20',
    description: 'Total body grappling pressure, posterior chain endurance, neck strength, and precision weight cut safety.',
    muscleFocus: {
      primeMovers: ['Trapezius', 'Latissimus Dorsi', 'Forearms', 'Core Stabilizers'],
      fatigueZones: ['Neck Extensors', 'Lower Back', 'Grip Flexors'],
      flexibilityRegions: ['Shoulder Girdle', 'Thoracic Spine']
    },
    macroSplit: { carbs: 40, protein: 42, fat: 18, targetCalMultiplier: 1.6, hydrationLiters: 5.0 },
    doshaAlignments: {
      vata: { primaryHerb: 'Shilajit', benefit: 'ATP mitochondrial energy boost & tissue density' },
      pitta: { primaryHerb: 'Gokshura', benefit: 'Kidney support & muscle fluid balance during weight cuts' },
      kapha: { primaryHerb: 'Punarnava', benefit: 'Fluid retention removal & clean lean mass preservation' }
    },
    sampleCoachAdvice: "Grappling demands immense isometric grip & neck strength. Consume Sattu protein shake with almond butter at 7:00 AM. Shilajit milk before bed.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Akhada Clay Wrestling & Sparring', macroTarget: 'Max Protein' },
      { day: 'Tue', type: 'Strength', activity: 'Heavy Deadlifts, Club Swinging (Gada)', macroTarget: 'High Protein' },
      { day: 'Wed', type: 'Cardio', activity: 'Hill Sprints & Rope Climbs', macroTarget: 'Moderate Carbs' },
      { day: 'Thu', type: 'Technique', activity: 'Takedown Defense & Ground Control', macroTarget: 'Balanced' },
      { day: 'Fri', type: 'High Intensity', activity: 'Conditioning Circuits & Mat Sparring', macroTarget: 'High Glycogen' },
      { day: 'Sat', type: 'Match Day', activity: 'Bout Simulation Tournament', macroTarget: 'Electrolyte Recharge' },
      { day: 'Sun', type: 'Recovery Day', activity: 'Warm Oil Abhyanga & Deep Sleep Rest', macroTarget: 'Herbal Rasayana' }
    ]
  },
  {
    id: 'kabaddi',
    name: 'Kabaddi',
    icon: '🤼',
    tagline: 'Explosive Breath Control & Defensive Tackling',
    accentColor: '#14532D', // Deep Forest
    bgGradient: 'from-emerald-950/20 to-lime-950/20',
    description: 'Requires sudden lunges, hold-and-raid stamina, breath retention (Cant endurance), and impact collision resistance.',
    muscleFocus: {
      primeMovers: ['Gluteus Maximus', 'Quadriceps', 'Shoulder Rotators', 'Core'],
      fatigueZones: ['Knees', 'Ankles', 'Lumbar Spine'],
      flexibilityRegions: ['Hamstring Tendons', 'Groin Flexors']
    },
    macroSplit: { carbs: 52, protein: 32, fat: 16, targetCalMultiplier: 1.65, hydrationLiters: 4.5 },
    doshaAlignments: {
      vata: { primaryHerb: 'Ashwagandha', benefit: 'Joint resilience & breath endurance expansion' },
      pitta: { primaryHerb: 'Chandana (Sandalwood Dravya)', benefit: 'Core temperature cooling post raid' },
      kapha: { primaryHerb: 'Pippali', benefit: 'Respiratory lung capacity enhancement for Cant maintenance' }
    },
    sampleCoachAdvice: "Raiding demands instant acceleration and breath retention. Practice Pranayama at sunrise. Take Pippali honey drop before match warmups.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Raid Acceleration & Ankle Hold Defense', macroTarget: 'High Carbs' },
      { day: 'Tue', type: 'Strength', activity: 'Power Clean & Quad Explosiveness', macroTarget: 'High Protein' },
      { day: 'Wed', type: 'Cardio', activity: 'Shuttle Runs & Cant Breath Retention', macroTarget: 'Moderate Carbs' },
      { day: 'Thu', type: 'Tactical', activity: 'Chain Defense & Escaping Traps', macroTarget: 'Balanced' },
      { day: 'Fri', type: 'Match Prep', activity: 'Reflex Speed & Mat Drills', macroTarget: 'Glycogen Fuel' },
      { day: 'Sat', type: 'Match Day', activity: 'Pro Kabaddi Tournament Fixture', macroTarget: 'Peak Energy' },
      { day: 'Sun', type: 'Recovery Day', activity: 'Pizhichil Warm Herbal Oil Bath', macroTarget: 'Joint Nourishment' }
    ]
  },
  {
    id: 'swimming',
    name: 'Swimming',
    icon: '🏊',
    tagline: 'Full Body Hydrodynamic Power & VO2 Max',
    accentColor: '#0F766E', // Emerald Cyan
    bgGradient: 'from-teal-950/20 to-cyan-950/20',
    description: 'Continuous total-body muscular endurance, high VO2 max oxygen delivery, shoulder flexibility, and core stabilization.',
    muscleFocus: {
      primeMovers: ['Latissimus Dorsi', 'Pectorals', 'Deltoids', 'Core Stabilizers'],
      fatigueZones: ['Shoulder Capsule', 'Upper Back', 'Triceps'],
      flexibilityRegions: ['Ankle Plantar', 'Thoracic Extension']
    },
    macroSplit: { carbs: 60, protein: 25, fat: 15, targetCalMultiplier: 1.75, hydrationLiters: 4.0 },
    doshaAlignments: {
      vata: { primaryHerb: 'Brahmi', benefit: 'Rhythmic stroke focus & water temperature adaptation' },
      pitta: { primaryHerb: 'Yashtimadhu (Licorice)', benefit: 'Esophageal protection from chlorine & hydration' },
      kapha: { primaryHerb: 'Trikatu', benefit: 'Thermogenic heat generation & mucus clearance' }
    },
    sampleCoachAdvice: "Pool workouts burn 3000+ kcal daily. Prioritize sprouted oats with dates and chia seeds pre-swim. Brahmi tea after afternoon laps.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: '5000m Aerobic Threshold Intervals', macroTarget: 'High Carbs' },
      { day: 'Tue', type: 'Strength', activity: 'Lat Pulldowns, Core Hollow Holds', macroTarget: 'Protein Focus' },
      { day: 'Wed', type: 'Technique', activity: 'Stroke Kinematics & Flip Turn Speed', macroTarget: 'Balanced' },
      { day: 'Thu', type: 'Cardio', activity: 'VO2 Max Sprint Sets (50m & 100m)', macroTarget: 'Peak Carbs' },
      { day: 'Fri', type: 'Recovery Day', activity: 'Light Kickboard Drills & Sauna', macroTarget: 'Hydration' },
      { day: 'Sat', type: 'Match Day', activity: 'Championship Swim Meet', macroTarget: 'Intra-Meet Fuel' },
      { day: 'Sun', type: 'Yoga', activity: 'Shoulder Opener Yoga & Pranayama', macroTarget: 'Restorative' }
    ]
  },
  {
    id: 'badminton',
    name: 'Badminton',
    icon: '🏸',
    tagline: 'Reflex Speed, Wrist Snap & Quad Agility',
    accentColor: '#D4A017',
    bgGradient: 'from-yellow-950/20 to-amber-950/20',
    description: 'Rapid directional changes, overhead jump smashes, split-second reaction times, and wrist rotational power.',
    muscleFocus: {
      primeMovers: ['Wrist Flexors', 'Quadriceps', 'Calves', 'Rotator Cuff'],
      fatigueZones: ['Dominant Shoulder', 'Patellar Tendon', 'Achilles'],
      flexibilityRegions: ['Wrist Girdle', 'Hip Adductors']
    },
    macroSplit: { carbs: 54, protein: 28, fat: 18, targetCalMultiplier: 1.5, hydrationLiters: 3.8 },
    doshaAlignments: {
      vata: { primaryHerb: 'Ashwagandha', benefit: 'Tendons resilience & fast twitch muscle recovery' },
      pitta: { primaryHerb: 'Amalaki', benefit: 'Visual focus enhancement & optic stamina' },
      kapha: { primaryHerb: 'Vacha', benefit: 'Neural reflex sharpness & decision speed' }
    },
    sampleCoachAdvice: "Jump smashes put 7x body weight force on knees. Take Curcumin-Boswellia golden milk after court drills for joint inflammation control.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Multi-Shuttle Court Footwork Drills', macroTarget: 'Carb Energy' },
      { day: 'Tue', type: 'Strength', activity: 'Single Leg Lunges & Wrist Strength', macroTarget: 'Protein Fuel' },
      { day: 'Wed', type: 'Cardio', activity: 'Ladder Agility & Shadow Badminton', macroTarget: 'Balanced' },
      { day: 'Thu', type: 'Technique', activity: 'Overhead Smash & Drop Shot Precision', macroTarget: 'Carb Loading' },
      { day: 'Fri', type: 'Recovery Day', activity: 'Warm Joint Compression & Stretching', macroTarget: 'Hydration' },
      { day: 'Sat', type: 'Match Day', activity: 'Tournament Singles & Doubles', macroTarget: 'Peak Glycogen' },
      { day: 'Sun', type: 'Mobility', activity: 'Wrist Mobility & Deep Meditation', macroTarget: 'Restorative' }
    ]
  },
  {
    id: 'athletics',
    name: 'Athletics / Track & Field',
    icon: '🏃',
    tagline: 'Pure Explosive Velocity & Biomechanical Efficiency',
    accentColor: '#B45309',
    bgGradient: 'from-orange-950/20 to-red-950/20',
    description: 'Maximal ground reaction force generation, sprint cadence, hurdle flexibility, and neuromuscular coordination.',
    muscleFocus: {
      primeMovers: ['Gluteal Complex', 'Hamstrings', 'Calves (Gastrocnemius)', 'Hip Flexors'],
      fatigueZones: ['Hamstring Origin', 'Achilles Tendon', 'Shin Splints'],
      flexibilityRegions: ['Hip Extension', 'Ankle Dorsiflexion']
    },
    macroSplit: { carbs: 55, protein: 30, fat: 15, targetCalMultiplier: 1.6, hydrationLiters: 4.2 },
    doshaAlignments: {
      vata: { primaryHerb: 'Shilajit', benefit: 'Neuromuscular firing rate & tendon elasticity' },
      pitta: { primaryHerb: 'Chandana', benefit: 'Track heat tolerance' },
      kapha: { primaryHerb: 'Guggulu', benefit: 'Power-to-weight ratio optimization' }
    },
    sampleCoachAdvice: "Track sprints demand 100% neural intensity. Consume banana & honey with cardamom 45 minutes prior. Shilajit before afternoon block starts.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Max Velocity Sprints (30m, 60m, 100m)', macroTarget: 'High Carbs' },
      { day: 'Tue', type: 'Strength', activity: 'Power Clean, Squat Jumps & Bounding', macroTarget: 'High Protein' },
      { day: 'Wed', type: 'Recovery Day', activity: 'Active Hydrotherapy & Massage', macroTarget: 'Anti-inflammatory' },
      { day: 'Thu', type: 'High Intensity', activity: 'Speed Endurance (200m & 300m Reps)', macroTarget: 'Carb Reload' },
      { day: 'Fri', type: 'Technique', activity: 'Block Starts & Relay Hand-Offs', macroTarget: 'Balanced' },
      { day: 'Sat', type: 'Match Day', activity: 'Track Meet Competition', macroTarget: 'Fast Glycogen' },
      { day: 'Sun', type: 'Yoga', activity: 'Post-Track Yoga & Foam Rolling', macroTarget: 'Rehydration' }
    ]
  }
];

export const AYURVEDIC_DOSHAS = {
  vata: {
    name: 'Vata (Air & Ether)',
    traits: 'Quick, agile, prone to dry joints and rapid fatigue under high volume.',
    dietStrategy: 'Warm, nutrient-dense, cooked foods with healthy fats (ghee, sesame oil, almonds).'
  },
  pitta: {
    name: 'Pitta (Fire & Water)',
    traits: 'Intense, competitive, high metabolic rate, prone to overheating and inflammation.',
    dietStrategy: 'Cooling, hydrating foods with coconut, sweet fruits, coriander, and amla.'
  },
  kapha: {
    name: 'Kapha (Earth & Water)',
    traits: 'Strong, enduring, high bone density, prone to sluggish digestion if over-fed.',
    dietStrategy: 'Pungent, thermogenic, light foods with ginger, black pepper, sprouted grains.'
  }
};
