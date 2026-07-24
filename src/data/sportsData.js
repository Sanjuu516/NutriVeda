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
    sampleCoachAdvice: "Today's cricket session demands rotational core power and endurance. We've matched your target macros with Prakriti-specific herbs and meal temperatures for optimal field recovery.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Net Practice & Explosive Bowling Spells' },
      { day: 'Tue', type: 'Strength', activity: 'Rotational Core & Squat Power' },
      { day: 'Wed', type: 'Recovery Day', activity: 'Ayurvedic Abhyanga Massage & Light Yoga' },
      { day: 'Thu', type: 'Cardio', activity: 'Interval Sprint Agility Drills' },
      { day: 'Fri', type: 'Match Prep', activity: 'Tactical Fielding & Batting Drills' },
      { day: 'Sat', type: 'Match Day', activity: 'Full 50-Over / T20 Fixture' },
      { day: 'Sun', type: 'Mobility', activity: 'Pranayama & Thoracic Mobility' }
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
    sampleCoachAdvice: "Pitches require 10+ km of distance coverage today. We've set your glycogen intake based on your sport goal while fine-tuning electrolyte cooling herbs.",
    weeklySchedule: [
      { day: 'Mon', type: 'Cardio', activity: 'HIIT Pitch Sprints & Small Sided Games' },
      { day: 'Tue', type: 'Strength', activity: 'Eccentric Hamstring & Plyometric Jumps' },
      { day: 'Wed', type: 'Tactical', activity: 'Passing Drills & Positioning' },
      { day: 'Thu', type: 'High Intensity', activity: 'Full Tempo Simulation Match' },
      { day: 'Fri', type: 'Recovery Day', activity: 'Contrast Hydrotherapy & Kati Vasti' },
      { day: 'Sat', type: 'Match Day', activity: 'League Fixture' },
      { day: 'Sun', type: 'Yoga', activity: 'Vinyasa Flow & Deep Tissue Roll' }
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
    sampleCoachAdvice: "Grappling demands immense isometric grip & neck strength. High protein synthesis is maintained while Prakriti Dravyas protect your kidney fluid balance.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Akhada Clay Wrestling & Sparring' },
      { day: 'Tue', type: 'Strength', activity: 'Heavy Deadlifts, Club Swinging (Gada)' },
      { day: 'Wed', type: 'Cardio', activity: 'Hill Sprints & Rope Climbs' },
      { day: 'Thu', type: 'Technique', activity: 'Takedown Defense & Ground Control' },
      { day: 'Fri', type: 'High Intensity', activity: 'Conditioning Circuits & Mat Sparring' },
      { day: 'Sat', type: 'Match Day', activity: 'Bout Simulation Tournament' },
      { day: 'Sun', type: 'Recovery Day', activity: 'Warm Oil Abhyanga & Deep Sleep Rest' }
    ]
  },
  {
    id: 'kabaddi',
    name: 'Kabaddi',
    icon: '🤼',
    tagline: 'Explosive Breath Control & Defensive Tackling',
    accentColor: '#14532D',
    bgGradient: 'from-emerald-950/20 to-lime-950/20',
    description: 'Requires sudden lunges, hold-and-raid stamina, breath retention (Cant endurance), and impact collision resistance.',
    muscleFocus: {
      primeMovers: ['Gluteus Maximus', 'Quadriceps', 'Shoulder Rotators', 'Core'],
      fatigueZones: ['Knees', 'Ankles', 'Lumbar Spine'],
      flexibilityRegions: ['Hamstring Tendons', 'Groin Flexors']
    },
    macroSplit: { carbs: 52, protein: 32, fat: 16, targetCalMultiplier: 1.65, hydrationLiters: 4.5 },
    sampleCoachAdvice: "Raiding demands instant acceleration and breath retention. Prakriti herbs enhance lung capacity while meeting your primary caloric target.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Raid Acceleration & Ankle Hold Defense' },
      { day: 'Tue', type: 'Strength', activity: 'Power Clean & Quad Explosiveness' },
      { day: 'Wed', type: 'Cardio', activity: 'Shuttle Runs & Cant Breath Retention' },
      { day: 'Thu', type: 'Tactical', activity: 'Chain Defense & Escaping Traps' },
      { day: 'Fri', type: 'Match Prep', activity: 'Reflex Speed & Mat Drills' },
      { day: 'Sat', type: 'Match Day', activity: 'Pro Kabaddi Tournament Fixture' },
      { day: 'Sun', type: 'Recovery Day', activity: 'Pizhichil Warm Herbal Oil Bath' }
    ]
  },
  {
    id: 'swimming',
    name: 'Swimming',
    icon: '🏊',
    tagline: 'Full Body Hydrodynamic Power & VO2 Max',
    accentColor: '#0F766E',
    bgGradient: 'from-teal-950/20 to-cyan-950/20',
    description: 'Continuous total-body muscular endurance, high VO2 max oxygen delivery, shoulder flexibility, and core stabilization.',
    muscleFocus: {
      primeMovers: ['Latissimus Dorsi', 'Pectorals', 'Deltoids', 'Core Stabilizers'],
      fatigueZones: ['Shoulder Capsule', 'Upper Back', 'Triceps'],
      flexibilityRegions: ['Ankle Plantar', 'Thoracic Extension']
    },
    macroSplit: { carbs: 60, protein: 25, fat: 15, targetCalMultiplier: 1.75, hydrationLiters: 4.0 },
    sampleCoachAdvice: "Pool workouts burn high calories daily. Your base carbs are boosted while herbs protect against chlorine fatigue and internal heat.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: '5000m Aerobic Threshold Intervals' },
      { day: 'Tue', type: 'Strength', activity: 'Lat Pulldowns, Core Hollow Holds' },
      { day: 'Wed', type: 'Technique', activity: 'Stroke Kinematics & Flip Turn Speed' },
      { day: 'Thu', type: 'Cardio', activity: 'VO2 Max Sprint Sets (50m & 100m)' },
      { day: 'Fri', type: 'Recovery Day', activity: 'Light Kickboard Drills & Sauna' },
      { day: 'Sat', type: 'Match Day', activity: 'Championship Swim Meet' },
      { day: 'Sun', type: 'Yoga', activity: 'Shoulder Opener Yoga & Pranayama' }
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
    sampleCoachAdvice: "Overhead smashes strain joints. Your protein requirements are calculated to preserve muscle mass while Ayurvedic herbs soothe tendon heat.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Multi-Shuttle Court Footwork Drills' },
      { day: 'Tue', type: 'Strength', activity: 'Single Leg Lunges & Wrist Strength' },
      { day: 'Wed', type: 'Cardio', activity: 'Ladder Agility & Shadow Badminton' },
      { day: 'Thu', type: 'Technique', activity: 'Overhead Smash & Drop Shot Precision' },
      { day: 'Fri', type: 'Recovery Day', activity: 'Warm Joint Compression & Stretching' },
      { day: 'Sat', type: 'Match Day', activity: 'Tournament Singles & Doubles' },
      { day: 'Sun', type: 'Mobility', activity: 'Wrist Mobility & Deep Meditation' }
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
    sampleCoachAdvice: "Track sprints demand 100% neural intensity. We've matched your explosive energy targets with fast-twitch tendon recovery herbs.",
    weeklySchedule: [
      { day: 'Mon', type: 'High Intensity', activity: 'Max Velocity Sprints (30m, 60m, 100m)' },
      { day: 'Tue', type: 'Strength', activity: 'Power Clean, Squat Jumps & Bounding' },
      { day: 'Wed', type: 'Recovery Day', activity: 'Active Hydrotherapy & Massage' },
      { day: 'Thu', type: 'High Intensity', activity: 'Speed Endurance (200m & 300m Reps)' },
      { day: 'Fri', type: 'Technique', activity: 'Block Starts & Relay Hand-Offs' },
      { day: 'Sat', type: 'Match Day', activity: 'Track Meet Competition' },
      { day: 'Sun', type: 'Yoga', activity: 'Post-Track Yoga & Foam Rolling' }
    ]
  }
];

// Detailed Ayurvedic Prakriti (Dosha) Category Framework
export const AYURVEDIC_DOSHAS = {
  vata: {
    id: 'vata',
    name: 'Vata (Air + Space)',
    icon: '🌬️',
    title: 'Kinetic & Agile Archetype',
    characteristics: [
      'Slim or lean body frame',
      'Fast, agile movements',
      'Energetic but tires quickly',
      'Dry skin and hair',
      'Light sleeper & quick learner',
      'Can feel anxious or stressed under heavy load'
    ],
    recommendedDiet: [
      'Warm, thoroughly cooked energy-dense meals',
      'Healthy fats (A2 Desi Cow Ghee, sesame oil, almonds, walnuts)',
      'Sweet & hydrating fruits (dates, ripe bananas, mangos)',
      'Steamed brown rice, oats, wheat, and hearty stews'
    ],
    avoidList: [
      'Raw, ice-cold foods or frozen shakes',
      'Excess raw salads & dry un-oiled snacks',
      'Skipping meals or erratic eating windows',
      'Too much caffeine or stimulants'
    ],
    exerciseStyle: 'Yoga, walking, light-to-moderate strength, stretching, and grounded mobility.',
    primaryHerb: 'Ashwagandha',
    herbBenefit: 'Strengthens joint stability, protects nervous system, and prevents tissue exhaustion post-match.',
    mealPrepStyle: 'Warm, energy-dense, well-spiced with ghee.'
  },
  pitta: {
    id: 'pitta',
    name: 'Pitta (Fire + Water)',
    icon: '🔥',
    title: 'Metabolic & Driven Archetype',
    characteristics: [
      'Medium athletic build',
      'Strong metabolism & gains muscle easily',
      'Competitive and intense personality',
      'Feels hot easily & high body temperature',
      'Sharp digestion & strong focus',
      'Prone to overheating and joint inflammation'
    ],
    recommendedDiet: [
      'Cooling, soothing, non-spicy foods',
      'Tender coconut water & cucumber coolers',
      'Steamed leafy green vegetables & zucchini',
      'Sweet fruits (pomegranates, apples, melons)',
      'Cool milk, paneer, and sprouted mung dal'
    ],
    avoidList: [
      'Very spicy, pungent, or excessively salty foods',
      'Deep fried, heavy oily meals',
      'Excessive coffee or energy drinks',
      'Alcohol & synthetic heating supplements'
    ],
    exerciseStyle: 'Swimming, cycling, moderate gym workouts, and cooler evening training sessions.',
    primaryHerb: 'Shatavari & Amla',
    herbBenefit: 'Regulates internal body heat, flushes lactic acid, and protects gastric lining under stress.',
    mealPrepStyle: 'Cooling, hydrating, mildly spiced with coriander & cardamom.'
  },
  kapha: {
    id: 'kapha',
    name: 'Kapha (Earth + Water)',
    icon: '🌿',
    title: 'Enduring & Broad Archetype',
    characteristics: [
      'Strong, broad, heavy skeletal build',
      'Gains weight & muscle mass easily',
      'High endurance and stamina',
      'Calm, steady, patient mindset',
      'Slower metabolism & deep sleeper',
      'Prone to sluggishness if over-fed'
    ],
    recommendedDiet: [
      'Light, warm, thermogenic meals',
      'High-protein, lean foods & sprouted pulses',
      'Millets (Ragi, Jowar, Bajra)',
      'Green leafy vegetables & bitter greens',
      'Thermogenic spices (ginger, black pepper, cinnamon)'
    ],
    avoidList: [
      'Excess sweets, refined sugars & desserts',
      'Oily, heavy fried foods',
      'Heavy dairy & cold ice cream',
      'Overeating or late-night heavy suppers'
    ],
    exerciseStyle: 'High-intensity interval training (HIIT), sprinting, dynamic sports, and heavy strength training.',
    primaryHerb: 'Trikatu & Shilajit',
    herbBenefit: 'Boosts metabolic speed, ignites fat oxidation, and maintains sharp power-to-weight acceleration.',
    mealPrepStyle: 'Light, warm, dry-roasted, heavily spiced with black pepper & ginger.'
  }
};
