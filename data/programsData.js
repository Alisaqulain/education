const pricingDefault = [
  { name: 'Lite', price: '₹2,499/mo', desc: 'Recorded + weekly doubt class' },
  { name: 'Pro', price: '₹4,999/mo', desc: 'Live batches + mentor check-ins' },
  { name: 'Elite', price: '₹8,999/mo', desc: '1:1 mentorship + parent analytics' },
]

const faqDefault = [
  { q: 'Are classes online, offline, or both?', a: 'We offer live online, centre-based offline in select cities, and blended tracks so families can choose what fits their schedule.' },
  { q: 'How do parents track progress?', a: 'Weekly performance snapshots, attendance logs, and mentor notes are available in the parent dashboard.' },
  { q: 'Do you offer demo classes?', a: 'Yes — book a free diagnostic + demo via our admissions team or the demo booking form.' },
]

function P(partial) {
  return {
    heroAccent: partial.heroAccent || 'from-slate-900 via-indigo-900 to-slate-900',
    curriculum: ['Structured micro-modules', 'Spaced revision planner', 'Adaptive practice sheets'],
    demoCta: 'Book a free diagnostic + demo class',
    faculty: ['IIT/NIT & top board specialists', '10+ yrs avg. teaching experience', 'Verified pedagogy credentials'],
    results: ['Consistent grade improvements term-on-term', 'National competitive exam qualifiers', 'Parent NPS 72+'],
    faqs: faqDefault,
    pricing: pricingDefault,
    ...partial,
  }
}

export const programs = {
  'class-1-5': P({
    heroAccent: 'from-emerald-800 via-teal-800 to-slate-900',
    slug: 'class-1-5',
    title: 'Primary School (Class 1–5)',
    subtitle: 'Foundational literacy, numeracy, curiosity & confidence.',
    grades: 'Classes 1 to 5',
    subjects: ['English', 'Mathematics', 'EVS', 'Hindi / Regional language', 'Creative thinking'],
    benefits: ['Play-based numeracy labs', 'Phonics-forward reading', 'SEL & public speaking seeds', 'Safe, monitored classrooms'],
    heroBadge: 'Foundation Years',
  }),
  'class-6-10': P({
    heroAccent: 'from-blue-900 via-indigo-900 to-slate-900',
    slug: 'class-6-10',
    title: 'Secondary School (Class 6–10)',
    subtitle: 'Board-aligned mastery with Olympiad-ready depth.',
    grades: 'Classes 6 to 10',
    subjects: ['Science', 'Mathematics', 'Social Science', 'English', 'Computer fundamentals'],
    benefits: ['CBSE / ICSE / State board tracks', 'Science lab simulations', 'Math reasoning studio', 'Pre-Olympiad booster'],
    heroBadge: 'Board + Beyond',
  }),
  'class-11-12': P({
    heroAccent: 'from-violet-900 via-purple-900 to-slate-900',
    slug: 'class-11-12',
    title: 'Senior Secondary (Class 11–12)',
    subtitle: 'Science & Commerce streams with competitive exam bridges.',
    grades: 'Classes 11 & 12',
    subjects: ['Physics', 'Chemistry', 'Mathematics / Biology', 'Accountancy', 'Economics', 'English'],
    benefits: ['PCM / PCB / Commerce cohorts', 'Integrated test series', 'College readiness counselling', 'Recorded + live hybrid'],
    heroBadge: 'Senior Secondary',
  }),
  jee: P({
    heroAccent: 'from-rose-900 via-orange-900 to-slate-950',
    slug: 'jee',
    title: 'JEE Main & Advanced',
    subtitle: 'Structured sprint from fundamentals to rank-focused problem solving.',
    grades: 'Class 11–12 & droppers',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    benefits: ['Allen-style rigorous sheets', 'Full syllabus mocks', 'All India test benchmarks', 'Doubt war-room hours'],
    curriculum: ['Concept capsules', 'JEE Advanced pattern drills', 'Error log analytics', 'Rank predictor practice cycles'],
    heroBadge: 'Engineering Entrance',
  }),
  neet: P({
    heroAccent: 'from-emerald-900 via-cyan-900 to-slate-950',
    slug: 'neet',
    title: 'NEET UG',
    subtitle: 'NCERT-first depth with clinical-style application questions.',
    grades: 'Class 11–12 & droppers',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    benefits: ['NCERT line-by-line coverage', '300+ full-length mocks', 'Image-based question bank', 'Biology mnemonics studio'],
    heroBadge: 'Medical Entrance',
  }),
  cuet: P({
    heroAccent: 'from-sky-900 via-blue-900 to-slate-900',
    slug: 'cuet',
    title: 'CUET (UG)',
    subtitle: 'Domain subjects + general test with time strategy coaching.',
    grades: 'Class 12 pass / appearing',
    subjects: ['Domain electives', 'English / Language', 'General Test (GT)', 'Quant & reasoning'],
    benefits: ['Shift-wise mock patterns', 'GT speed drills', 'University-wise cut-off intelligence', 'Bilingual support'],
    heroBadge: 'University Entrance',
  }),
  olympiads: P({
    heroAccent: 'from-fuchsia-900 via-purple-900 to-slate-900',
    slug: 'olympiads',
    title: 'Olympiads & Talent Search',
    subtitle: 'SOF, NSO, IMO, NSTSE & beyond — think deeper, not wider only.',
    grades: 'Class 1–10',
    subjects: ['Science', 'Mathematics', 'Logical reasoning', 'Cyber fundamentals'],
    benefits: ['Non-routine problem sets', 'Gamified leaderboards', 'Mentor feedback on every mock', 'Scholarship fast-track'],
    heroBadge: 'Talent Programs',
  }),
  skills: P({
    heroAccent: 'from-pink-800 via-rose-900 to-slate-900',
    slug: 'skills',
    title: 'Skills & Activities',
    subtitle: 'Dance, music, chess, public speaking, coding for kids, art & craft.',
    grades: 'All age groups',
    subjects: ['Dance', 'Singing', 'Chess', 'Public speaking', 'Coding for kids', 'Art & craft'],
    benefits: ['Certified coaches', 'Recital & showcase events', 'Portfolio projects for kids', 'Parent viewing days'],
    curriculum: ['Skill ladders', 'Micro-performances', 'Peer critique circles', 'Digital portfolios'],
    heroBadge: 'Creativity Hub',
  }),
  sports: P({
    heroAccent: 'from-cyan-900 via-blue-900 to-slate-900',
    slug: 'sports',
    title: 'Sports & movement',
    subtitle: 'Yoga, Zumba, chess, cricket basics & fitness — healthy body, focused mind.',
    grades: 'All age groups',
    subjects: ['Yoga & mindfulness', 'Zumba & dance fitness', 'Chess', 'Cricket basics', 'Fitness training'],
    benefits: ['Age-safe conditioning', 'Centre + online yoga & Zumba', 'Inter-academy mini leagues', 'Injury-aware coaching'],
    heroBadge: 'Athletics',
  }),
}

export const programSlugs = Object.keys(programs)
