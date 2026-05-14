/** Home page blueprint: mega categories, featured teachers, positioning copy. */

export const platformTagline = 'One platform for academics, creativity, and future-ready skills.'

export const categoryMegaMenu = [
  {
    title: 'Academics',
    accent: 'from-emerald-500 to-teal-600',
    items: [
      { label: 'CBSE', href: '/programs/class-6-10' },
      { label: 'ICSE', href: '/programs/class-6-10' },
      { label: 'State Board', href: '/programs/class-6-10' },
      { label: 'Classes 1–12', href: '/programs' },
    ],
  },
  {
    title: 'Skills & Performing Arts',
    accent: 'from-fuchsia-500 to-pink-600',
    items: [
      { label: 'Regional Music', href: '/programs/skills' },
      { label: 'Classical Music', href: '/programs/skills' },
      { label: 'Vocal Music', href: '/programs/skills' },
      { label: 'Instrumental Music', href: '/programs/skills' },
      { label: 'Dance', href: '/programs/skills' },
      { label: 'Aerobics', href: '/programs/sports' },
      { label: 'Yoga', href: '/programs/sports' },
      { label: 'Zumba', href: '/programs/sports' },
      { label: 'Chess', href: '/programs/skills' },
      { label: 'Public Speaking', href: '/programs/skills' },
    ],
  },
  {
    title: 'Languages',
    accent: 'from-sky-500 to-indigo-600',
    items: [
      { label: 'Spoken English', href: '/programs/skills' },
      { label: 'Hindi', href: '/programs/skills' },
      { label: 'Sanskrit', href: '/programs/skills' },
      { label: 'Regional Languages', href: '/programs/skills' },
      { label: 'Foreign Languages', href: '/programs/skills' },
    ],
  },
  {
    title: 'Technology & Programming',
    accent: 'from-violet-500 to-purple-600',
    items: [
      { label: 'Python', href: '/programs/skills' },
      { label: 'Java', href: '/programs/skills' },
      { label: 'C++', href: '/programs/skills' },
      { label: 'JavaScript', href: '/programs/skills' },
      { label: 'Coding for Kids', href: '/programs/skills' },
      { label: 'Web Development', href: '/programs/skills' },
      { label: 'App Development', href: '/programs/skills' },
      { label: 'AI Basics', href: '/programs/skills' },
      { label: 'Robotics', href: '/programs/skills' },
      { label: 'Graphic Design', href: '/programs/skills' },
      { label: 'Animation', href: '/programs/skills' },
      { label: 'Video Editing', href: '/programs/skills' },
    ],
  },
]

export const whyChooseBlueprint = [
  { title: 'Expert Teachers', body: 'Vetted educators across boards, skills, and tech tracks.', icon: '🎓' },
  { title: 'Live Interactive Classes', body: 'Two-way teaching with polls, chat, and breakout-style support.', icon: '💬' },
  { title: 'Flexible Timings', body: 'Evening & weekend batches designed around school schedules.', icon: '🕐' },
  { title: 'Recorded Sessions', body: 'Catch up anytime — every important class is available on replay.', icon: '▶️' },
  { title: 'Affordable Learning', body: 'Fair pricing with scholarships and family-friendly plans.', icon: '💳' },
  { title: 'Personalized Attention', body: 'Smaller cohorts, doubt hours, and mentor check-ins.', icon: '🤝' },
]

export const featuredTeachersBlueprint = [
  { name: 'Ananya Sharma', subject: 'CBSE Mathematics · Class 9–10', experience: '12 yrs', rating: 4.9, reviews: 214, imageKey: 'WhatsApp Image 2026-05-13 at 3.37.02 PM.jpeg' },
  { name: 'Rahul Verma', subject: 'Python & AI foundations', experience: '8 yrs', rating: 4.95, reviews: 156, imageKey: 'WhatsApp Image 2026-05-13 at 3.37.03 PM (1).jpeg' },
  { name: 'Meera Iyer', subject: 'Yoga & mindful focus', experience: '10 yrs', rating: 4.92, reviews: 189, imageKey: 'WhatsApp Image 2026-05-13 at 3.37.03 PM.jpeg' },
  { name: 'Dr. Sneha Kulkarni', subject: 'NEET Biology', experience: '15 yrs', rating: 4.98, reviews: 402, imageKey: 'WhatsApp Image 2026-05-13 at 3.37.04 PM (1).jpeg' },
]

export const testimonialsWithRatings = [
  { quote: 'Weekly dashboards made it obvious where Aarav was slipping — we fixed it before preboards.', author: 'Neha & Vikram Malhotra', role: 'Parents of Class 10 learner', avatar: 'NM', rating: 5 },
  { quote: 'The mentor actually knew my error patterns. JEE prep felt guided, not chaotic.', author: 'Ishaan Patel', role: 'JEE Advanced aspirant', avatar: 'IP', rating: 5 },
  { quote: 'NEET biology became visual and memorable — I stopped rote revising blindly.', author: 'Kavya Reddy', role: 'NEET UG achiever', avatar: 'KR', rating: 5 },
]
