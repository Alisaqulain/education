export const wings = {
  foundation: {
    title: 'Foundation Wing',
    subtitle: 'Nursery · KG · Class 1–5 — curiosity, literacy and safe social growth.',
    pillars: ['Play-based numeracy', 'Foundational reading', 'SEL & routines', 'Parent co-learning'],
    tracks: [
      { label: 'Nursery', href: '/programs/foundation#nursery', desc: 'Sensory-rich early years' },
      { label: 'KG', href: '/programs/foundation#kg', desc: 'School readiness bridge' },
      { label: 'Class 1–5', href: '/programs/class-1-5', desc: 'Board-aligned primary' },
    ],
  },
  school: {
    title: 'School Wing',
    subtitle: 'Class 6–8 and 9–10 — reasoning, boards and Olympiad-ready depth.',
    pillars: ['Science & math labs', 'Writing & debates', 'Pre-Olympiad seeds', 'Adaptive diagnostics'],
    tracks: [
      { label: 'Class 6–8', href: '/programs/class-6-10', desc: 'Middle school mastery' },
      { label: 'Class 9–10', href: '/programs/class-6-10', desc: 'Board + NTSE style prep' },
    ],
  },
  senior: {
    title: 'Senior Wing',
    subtitle: 'Class 11–12 — PCM / PCB / Commerce with competitive bridges.',
    pillars: ['Integrated test series', 'Mentor pods', 'College counselling', 'Hybrid schedules'],
    tracks: [{ label: 'Class 11–12', href: '/programs/class-11-12', desc: 'Senior secondary' }],
  },
  competitive: {
    title: 'Competitive Exams',
    subtitle: 'JEE · NEET · CUET · Olympiads · NDA · SSC · Banking — rank-focused systems.',
    pillars: ['National mocks', 'Weak-topic heatmaps', 'Doubt war-rooms', 'Bilingual support'],
    tracks: [
      { label: 'JEE', href: '/programs/jee' },
      { label: 'NEET', href: '/programs/neet' },
      { label: 'CUET', href: '/programs/cuet' },
      { label: 'Olympiads', href: '/programs/olympiads' },
      { label: 'NDA / Defence', href: '/programs/wing/competitive#nda', desc: 'Rolling cohorts' },
      { label: 'SSC & Banking', href: '/programs/wing/competitive#ssc', desc: 'Quant + reasoning' },
    ],
  },
  skills: {
    title: 'Skill Development',
    subtitle: 'Coding, AI literacy, robotics, communication and personality.',
    pillars: ['Project portfolios', 'Industry mentors', 'Micro-credentials', 'Showcase days'],
    tracks: [
      { label: 'Skills hub', href: '/programs/skills' },
      { label: 'AI & Robotics track', href: '/programs/skills#ai', desc: 'Labs + kits' },
    ],
  },
  creative: {
    title: 'Creative Programs',
    subtitle: 'Dance, music, art, guitar & keyboard — performance-grade coaching.',
    pillars: ['Trinity-style progression', 'Recitals', 'Digital portfolios', 'Safe studios'],
    tracks: [{ label: 'Creative hub', href: '/programs/skills' }],
  },
  sports: {
    title: 'Sports & wellness',
    subtitle: 'Yoga, Zumba, chess, cricket, fitness & meditation for student athletes.',
    pillars: ['Age-safe conditioning', 'Centre + online yoga & Zumba', 'Mini leagues', 'Recovery science'],
    tracks: [{ label: 'Sports hub', href: '/programs/sports' }],
  },
}

export const wingSlugs = Object.keys(wings)
