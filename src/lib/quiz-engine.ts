// Types based on IAMME CMS Schema

export type ArchetypeId = 'VA' | 'KC' | 'IC' | 'SA';

export type UserType = 
  | 'aspiring_founder' 
  | 'student' 
  | 'working_professional' 
  | 'homemaker' 
  | 'passionate_builder';

export type OptionChoice = 'sa' | 'a' | 'd' | 'sd';

export interface Question {
  question_id: string;
  question_text: string;
  axis_target: string;
  target_archetype: ArchetypeId;
  weights: Record<OptionChoice, number>;
}

export interface ArchetypeCore {
  archetype_id: ArchetypeId;
  archetype_name: string;
  tagline: string;
  core_summary: string;
  superpowers: string[];
  blind_spots: string[];
}

export interface RolePersonalization {
  combo_key: string;
  archetype_id: ArchetypeId;
  user_type: UserType;
  ideal_careers_industries: string[];
  actionable_steps: string[];
  growth_unlocked: string;
}

// Tab 1: Questions Master Data
export const QUESTIONS_MASTER: Question[] = [
  {
    question_id: 'Q01',
    question_text: 'I recharge and generate my best ideas in solitude before sharing them with others.',
    axis_target: 'Inspiration',
    target_archetype: 'VA',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  },
  {
    question_id: 'Q02',
    question_text: 'High-energy collaboration and brain-dumping with others energize me more than quiet solo reflection.',
    axis_target: 'Inspiration',
    target_archetype: 'KC',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  },
  {
    question_id: 'Q03',
    question_text: 'I prefer launching an early version quickly to test in the real world rather than spending weeks perfecting a plan.',
    axis_target: 'Action',
    target_archetype: 'KC',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  },
  {
    question_id: 'Q04',
    question_text: 'I feel uncomfortable taking action until I have thoroughly mapped out potential risks and scenarios.',
    axis_target: 'Action',
    target_archetype: 'VA',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  },
  {
    question_id: 'Q05',
    question_text: 'When faced with chaos or ambiguity, my natural reaction is to create structured systems and repeatable workflows.',
    axis_target: 'Mental Structure',
    target_archetype: 'SA',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  },
  {
    question_id: 'Q06',
    question_text: 'Rigid structures frustrate me; I deliver my best outcomes when I have full freedom to improvise and adapt freely.',
    axis_target: 'Mental Structure',
    target_archetype: 'IC',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  },
  {
    question_id: 'Q07',
    question_text: 'Crafting something with exceptional depth, visual harmony, and high quality matters more to me than mass volume or fast scaling.',
    axis_target: 'Motivation',
    target_archetype: 'IC',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  },
  {
    question_id: 'Q08',
    question_text: 'I am fueled primarily by tangible momentum and visible real-world impact, even if the underlying process gets a little messy.',
    axis_target: 'Motivation',
    target_archetype: 'KC',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  },
  {
    question_id: 'Q09',
    question_text: 'When making high-stakes decisions under pressure, I rely on objective facts, logic, and calm risk evaluation.',
    axis_target: 'Emotional',
    target_archetype: 'SA',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  },
  {
    question_id: 'Q10',
    question_text: 'I prioritize human resonance, brand feel, and emotional connection over pure metric optimization.',
    axis_target: 'Emotional',
    target_archetype: 'IC',
    weights: { sa: 3, a: 1, d: -1, sd: -3 }
  }
];

// Tab 2: Core Archetype Profiles
export const ARCHETYPES_CORE: Record<ArchetypeId, ArchetypeCore> = {
  VA: {
    archetype_id: 'VA',
    archetype_name: 'The Visionary Architect',
    tagline: 'Master of Systems & Future Trajectories',
    core_summary: '{name}, you operate like a master strategist who sees five moves ahead. You bring exceptional clarity to complex landscapes, combining long-term vision with structural thinking. You do not just solve immediate problems—you design the framework to ensure they stay solved.',
    superpowers: ['Systems Architecture', 'Strategic Foresight', 'Composed Decision-Making', 'Architectural Precision'],
    blind_spots: ['Over-indexing on preparation before execution', 'Hesitation to delegate control', 'Analysis paralysis under high uncertainty']
  },
  KC: {
    archetype_id: 'KC',
    archetype_name: 'The Kinetic Catalyst',
    tagline: 'Engine of Momentum & Experiential Execution',
    core_summary: '{name}, you are a natural spark that converts raw potential into immediate motion. You thrive in high-velocity environments, learning through action and iteration rather than passive deliberation. Your energy inspires momentum where others see inertia.',
    superpowers: ['Rapid Execution', 'Unshakable Adaptability', 'Infectious Energy', 'Bias for Action'],
    blind_spots: ['Vulnerable to premature scaling', 'Tendency to abandon half-built systems', 'Short-term horizon focus']
  },
  IC: {
    archetype_id: 'IC',
    archetype_name: 'The Intuitive Craftsman',
    tagline: 'Guardian of Depth, Aesthetics & Human Resonance',
    core_summary: '{name}, you possess an innate eye for detail, emotional intelligence, and aesthetic integrity. You care deeply about how ideas feel, flow, and connect with people. You transform ordinary functionality into memorable, deeply resonant experiences.',
    superpowers: ['Uncompromising Aesthetic Taste', 'High Emotional Intelligence', 'Craft Precision', 'Deep Human Resonance'],
    blind_spots: ['Perfectionism delaying launches', 'Resistance to rigid operational metrics', 'Taking creative friction personally']
  },
  SA: {
    archetype_id: 'SA',
    archetype_name: 'The Strategic Anchor',
    tagline: 'Pillar of Grounded Stability & Operative Order',
    core_summary: '{name}, you are the stabilizing force in any endeavor. You turn abstract ideas into orderly, repeatable reality. Where others see chaotic ambiguity, you establish calm, process integrity, and steady operational progress.',
    superpowers: ['Grounded Risk Management', 'Operational Mastery', 'Calm Under Pressure', 'Dependable Execution'],
    blind_spots: ['Over-reliance on existing playbooks', 'Initial skepticism toward radical change', 'Lower tolerance for chaotic trial-and-error']
  }
};

// Tab 3: Role Personalizations Data Lookup Table
export const ROLE_PERSONALIZATIONS: Record<string, RolePersonalization> = {
  'VA_aspiring_founder': {
    combo_key: 'VA_aspiring_founder',
    archetype_id: 'VA',
    user_type: 'aspiring_founder',
    ideal_careers_industries: ['Deep Tech', 'Enterprise SaaS', 'Venture Building', 'Strategic Advisory', 'FinTech'],
    actionable_steps: [
      'Pair early with a Kinetic Catalyst co-founder to drive speed.',
      'Set a strict 48-hour deadline for MVP market validation.',
      'Document your core architecture early to enable seamless delegation.'
    ],
    growth_unlocked: '{name}, your strategic mind is your greatest asset, but remember that early-stage startups thrive on momentum. Focus on reducing your time-to-market and trust your initial hypotheses sooner.'
  },
  'VA_student': {
    combo_key: 'VA_student',
    archetype_id: 'VA',
    user_type: 'student',
    ideal_careers_industries: ['Management Consulting', 'Systems Engineering', 'Product Strategy', 'AI Research', 'Corporate Finance'],
    actionable_steps: [
      'Map your academic and career goals into quarterly strategic roadmaps.',
      'Lead student organizations by establishing clear operating frameworks.',
      'Practice building lightweight MVPs rather than over-analyzing assignments.'
    ],
    growth_unlocked: '{name}, you are built for leadership and complex problem solving. Guard against over-planning your career path—allow room for serendipity while building your core foundational skills.'
  },
  'VA_working_professional': {
    combo_key: 'VA_working_professional',
    archetype_id: 'VA',
    user_type: 'working_professional',
    ideal_careers_industries: ['Enterprise Architecture', 'Chief of Staff', 'Strategy & Operations', 'Product Management', 'Program Director'],
    actionable_steps: [
      "Propose long-term structural improvements to your team's current bottlenecks.",
      'Mentor junior team members on strategic thinking and risk mitigation.',
      'Practice committing to decisions with 70% of the available information.'
    ],
    growth_unlocked: '{name}, your ability to bring order to complex corporate initiatives makes you invaluable. Focus on communicating your vision simply so stakeholders can execute without friction.'
  },
  'VA_homemaker': {
    combo_key: 'VA_homemaker',
    archetype_id: 'VA',
    user_type: 'homemaker',
    ideal_careers_industries: ['Community Leadership', 'Event Architecture', 'Financial Planning', 'Strategic Consulting', 'Educational Administration'],
    actionable_steps: [
      'Apply systems thinking to streamline home and family operational workflows.',
      'Lead community or organizational initiatives that require long-term planning.',
      'Dedicate time to building a passion project with structured milestones.'
    ],
    growth_unlocked: '{name}, your capacity to orchestrate complex environments is a superpower. Channel your architectural thinking into projects that provide personal fulfillment and tangible community impact.'
  },
  'VA_passionate_builder': {
    combo_key: 'VA_passionate_builder',
    archetype_id: 'VA',
    user_type: 'passionate_builder',
    ideal_careers_industries: ['Open Source Lead', 'Web3 Protocols', 'Developer Tools', 'System Hardware', 'Tech Governance'],
    actionable_steps: [
      'Open-source your core frameworks early to invite community contributions.',
      'Set strict sprint limits to prevent scope creep in your creative projects.',
      'Document your architecture clearly so collaborators can onboard instantly.'
    ],
    growth_unlocked: "{name}, your projects have the foundation to scale massively. Ensure you do not refine the architecture at the expense of putting real software into users' hands."
  },

  'KC_aspiring_founder': {
    combo_key: 'KC_aspiring_founder',
    archetype_id: 'KC',
    user_type: 'aspiring_founder',
    ideal_careers_industries: ['Consumer Tech', 'D2C Brands', 'Growth Marketing', 'Creator Economy', 'Rapid Prototyping'],
    actionable_steps: [
      'Partner with a Strategic Anchor to handle operations and compliance.',
      'Run weekly customer interviews and rapid product iterations.',
      'Keep your burn rate low so you can pivot quickly based on feedback.'
    ],
    growth_unlocked: '{name}, your speed is your unfair advantage. Keep channeling your high kinetic energy into rapid market feedback, but ensure you anchor your business model with operational discipline.'
  },
  'KC_student': {
    combo_key: 'KC_student',
    archetype_id: 'KC',
    user_type: 'student',
    ideal_careers_industries: ['Entrepreneurship', 'Marketing', 'Event Management', 'Sales', 'Experiential Learning'],
    actionable_steps: [
      'Join hackathons, startup weekends, and fast-paced team challenges.',
      'Build small public projects every month rather than focusing only on theory.',
      'Find a structured study partner to maintain academic consistency.'
    ],
    growth_unlocked: '{name}, you learn best by doing. Turn theoretical assignments into hands-on experiments, and use your natural bias for action to stand out among your peers.'
  },
  'KC_working_professional': {
    combo_key: 'KC_working_professional',
    archetype_id: 'KC',
    user_type: 'working_professional',
    ideal_careers_industries: ['Business Development', 'Growth Lead', 'Agile Coaching', 'Innovation Labs', 'Event Production'],
    actionable_steps: [
      'Volunteer for high-ambiguity, fast-turnaround projects in your company.',
      'Introduce rapid sprint cycles to help slow-moving teams build momentum.',
      'Establish personal checklists to ensure follow-through on open tasks.'
    ],
    growth_unlocked: '{name}, you are an invaluable change agent inside any organization. Protect your enthusiasm by working on high-impact initiatives where quick execution is rewarded.'
  },
  'KC_homemaker': {
    combo_key: 'KC_homemaker',
    archetype_id: 'KC',
    user_type: 'homemaker',
    ideal_careers_industries: ['Lifestyle Coaching', 'Local Commerce', 'Event Coordination', 'Creative Workshops', 'Social Enterprise'],
    actionable_steps: [
      'Channel your dynamic energy into fast-paced personal or social endeavors.',
      'Host interactive community gatherings or local pop-up workshops.',
      'Set clear daily priority limits to avoid taking on too many tasks at once.'
    ],
    growth_unlocked: '{name}, your vibrant energy brings life and momentum to everything around you. Direct that spark toward projects that bring you personal pride and creative growth.'
  },
  'KC_passionate_builder': {
    combo_key: 'KC_passionate_builder',
    archetype_id: 'KC',
    user_type: 'passionate_builder',
    ideal_careers_industries: ['Indie Hacking', 'Micro-SaaS', 'Content Creation', 'Rapid Hardware Hacking', 'Interactive Media'],
    actionable_steps: [
      'Ship a working prototype every 30 days to keep your momentum alive.',
      'Share your build process in public to attract early adopters.',
      'Implement automated testing to keep your code clean while moving fast.'
    ],
    growth_unlocked: '{name}, your ability to create from scratch quickly is rare. Focus on finishing what you start before jumping to the next exciting idea.'
  },

  'IC_aspiring_founder': {
    combo_key: 'IC_aspiring_founder',
    archetype_id: 'IC',
    user_type: 'aspiring_founder',
    ideal_careers_industries: ['Design Studios', 'Luxury Brands', 'UI/UX Products', 'Media Production', 'Boutique Services'],
    actionable_steps: [
      'Build a brand identity that deeply reflects your aesthetic standards.',
      'Hire an operational lead to handle systems, logistics, and finance.',
      'Set explicit limits on design polish so you can launch on schedule.'
    ],
    growth_unlocked: '{name}, your work resonates deeply because you care about quality and feel. Guard your creative vision fiercely while giving your business room to launch and iterate live.'
  },
  'IC_student': {
    combo_key: 'IC_student',
    archetype_id: 'IC',
    user_type: 'student',
    ideal_careers_industries: ['Graphic Design', 'UI/UX', 'Architecture', 'Creative Writing', 'Film & Digital Media'],
    actionable_steps: [
      'Build a high-quality portfolio site showcasing your end-to-end craft.',
      'Seek out mentors who challenge your technical and artistic precision.',
      'Practice accepting constructive critique without compromising your vision.'
    ],
    growth_unlocked: '{name}, your eye for quality sets you apart. Dedicate time to mastering your tools so your execution matches the high creative standards in your head.'
  },
  'IC_working_professional': {
    combo_key: 'IC_working_professional',
    archetype_id: 'IC',
    user_type: 'working_professional',
    ideal_careers_industries: ['Product Design', 'Brand Strategy', 'Creative Direction', 'Content Lead', 'UX Research'],
    actionable_steps: [
      'Advocate for user empathy and aesthetic integrity in company products.',
      'Lead visual and tonal redesign initiatives across core brand assets.',
      'Set personal deadlines to prevent endless refinement on deliverables.'
    ],
    growth_unlocked: '{name}, you bring soul and polish to corporate work. Continue elevating the standards of your team while keeping project deadlines front and center.'
  },
  'IC_homemaker': {
    combo_key: 'IC_homemaker',
    archetype_id: 'IC',
    user_type: 'homemaker',
    ideal_careers_industries: ['Interior Design', 'Artisan Crafts', 'Culinary Arts', 'Content Curation', 'Boutique Retailing'],
    actionable_steps: [
      'Transform your creative passions into personal digital or physical projects.',
      'Curate spaces and experiences that promote mindfulness and aesthetics.',
      'Share your creative outputs on platforms that connect you with peers.'
    ],
    growth_unlocked: '{name}, your appreciation for depth and harmony creates warmth around you. Give yourself permission to invest time and energy into your own artistic expression.'
  },
  'IC_passionate_builder': {
    combo_key: 'IC_passionate_builder',
    archetype_id: 'IC',
    user_type: 'passionate_builder',
    ideal_careers_industries: ['Design Systems', 'Creative Coding', 'Audio/Visual Software', 'Game Design', 'Crafted Hardware'],
    actionable_steps: [
      'Document your design system choices to help other creators learn.',
      'Focus on solving one core human problem with extreme elegance.',
      'Launch early beta access to gather feedback on user experience.'
    ],
    growth_unlocked: '{name}, your attention to detail creates unforgettable software and products. Ensure you do not let perfect become the enemy of good when sharing your craft.'
  },

  'SA_aspiring_founder': {
    combo_key: 'SA_aspiring_founder',
    archetype_id: 'SA',
    user_type: 'aspiring_founder',
    ideal_careers_industries: ['Operations Tech', 'Logistics', 'Compliance & RegTech', 'Managed Services', 'Supply Chain'],
    actionable_steps: [
      'Build robust operational procedures before scaling your team.',
      'Pair with a Kinetic Catalyst founder who brings high external momentum.',
      'Set aggressive milestone triggers to challenge conservative assumptions.'
    ],
    growth_unlocked: '{name}, your business will stand on rock-solid foundations. Use your talent for stability to build resilient companies that survive where faster competitors fail.'
  },
  'SA_student': {
    combo_key: 'SA_student',
    archetype_id: 'SA',
    user_type: 'student',
    ideal_careers_industries: ['Industrial Engineering', 'Accounting & Law', 'Operations Research', 'Data Governance', 'Project Management'],
    actionable_steps: [
      'Master organizational software, data analysis, and project management tools.',
      'Take on administrative or operational leadership roles in group projects.',
      'Push yourself to experiment with unfamiliar methodologies.'
    ],
    growth_unlocked: '{name}, you are the backbone of any team you join. Combine your natural reliability with continuous learning to become an indispensable leader.'
  },
  'SA_working_professional': {
    combo_key: 'SA_working_professional',
    archetype_id: 'SA',
    user_type: 'working_professional',
    ideal_careers_industries: ['Director of Operations', 'Compliance Officer', 'General Manager', 'Supply Chain Director', 'Risk Analytics'],
    actionable_steps: [
      'Audit existing workflows to eliminate corporate redundancy and waste.',
      'Create mentorship documentation to level up junior staff operational skills.',
      'Encourage your team to experiment with calculated innovation.'
    ],
    growth_unlocked: '{name}, your calm demeanor under pressure brings immense stability to your organization. Focus on optimizing systems while keeping an open mind to industry shifts.'
  },
  'SA_homemaker': {
    combo_key: 'SA_homemaker',
    archetype_id: 'SA',
    user_type: 'homemaker',
    ideal_careers_industries: ['Financial Advisory', 'Household Management', 'Non-Profit Governance', 'Community Planning', 'Property Management'],
    actionable_steps: [
      'Implement clear financial and organizational systems for personal clarity.',
      'Contribute your operational skills to non-profit or community boards.',
      'Carve out unstructured time weekly for creative exploration.'
    ],
    growth_unlocked: '{name}, your ability to organize and stabilize complex environments provides immense value. Channel that grounded strength into personal endeavors that inspire you.'
  },
  'SA_passionate_builder': {
    combo_key: 'SA_passionate_builder',
    archetype_id: 'SA',
    user_type: 'passionate_builder',
    ideal_careers_industries: ['DevOps', 'Database Architecture', 'Infrastructure Security', 'Automated Testing', 'Open Hardware'],
    actionable_steps: [
      'Build rock-solid infrastructure and deployment pipelines for your builds.',
      'Write comprehensive documentation and contributor guidelines.',
      'Challenge yourself to build lightweight prototypes before over-engineering.'
    ],
    growth_unlocked: '{name}, your builds are rock-solid, reliable, and production-ready. Ensure your focus on stability does not hold you back from releasing early experiments.'
  }
};

// Evaluate Quiz Answers Logic
export function calculateQuizResult(
  userName: string,
  userType: UserType,
  answers: Record<string, OptionChoice>
) {
  // Step 1: Calculate archetype scores from Tab 1
  const archetypeScores: Record<ArchetypeId, number> = {
    VA: 0,
    KC: 0,
    IC: 0,
    SA: 0
  };

  QUESTIONS_MASTER.forEach((q) => {
    const choice = answers[q.question_id];
    if (choice && q.weights[choice] !== undefined) {
      archetypeScores[q.target_archetype] += q.weights[choice];
    }
  });

  // Determine Primary Archetype (highest score)
  let winningArchetype: ArchetypeId = 'VA';
  let maxScore = -Infinity;

  (Object.keys(archetypeScores) as ArchetypeId[]).forEach((archId) => {
    if (archetypeScores[archId] > maxScore) {
      maxScore = archetypeScores[archId];
      winningArchetype = archId;
    }
  });

  // Step 2: Get core details from Tab 2
  const core = ARCHETYPES_CORE[winningArchetype];
  const formattedSummary = core.core_summary.replace(/\{name\}/g, userName || 'Friend');

  // Step 3: Get personalization details from Tab 3 using combo_key
  const comboKey = `${winningArchetype}_${userType}`;
  const personalization = ROLE_PERSONALIZATIONS[comboKey];
  const formattedGrowthUnlocked = personalization
    ? personalization.growth_unlocked.replace(/\{name\}/g, userName || 'Friend')
    : '';

  return {
    scores: archetypeScores,
    archetype: {
      id: core.archetype_id,
      name: core.archetype_name,
      tagline: core.tagline,
      core_summary: formattedSummary,
      superpowers: core.superpowers,
      blind_spots: core.blind_spots
    },
    role_personalization: personalization
      ? {
          combo_key: personalization.combo_key,
          user_type: personalization.user_type,
          ideal_careers_industries: personalization.ideal_careers_industries,
          actionable_steps: personalization.actionable_steps,
          growth_unlocked: formattedGrowthUnlocked
        }
      : null
  };
}