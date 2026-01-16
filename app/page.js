import ClassgapStyleHero from '@/components/ClassgapStyleHero'
import LanguageTutors from '@/components/LanguageTutors'
import ClassgapSubjects from '@/components/ClassgapSubjects'
import TrustFeatures from '@/components/TrustFeatures'
import ClassgapHowItWorks from '@/components/ClassgapHowItWorks'
import ClassgapTestimonials from '@/components/ClassgapTestimonials'
import StrongCTA from '@/components/StrongCTA'

export const metadata = {
  title: 'Edgen Institute - Learn with online tutoring from anywhere in the world',
  description: 'Connect with 10,000+ verified teachers worldwide. Learn 250+ subjects online or in-person. Free 20-minute trial available. Join 500k+ students on Edgen Institute.',
}

export default function Home() {
  return (
    <>
      <ClassgapStyleHero />
      <LanguageTutors />
      <ClassgapSubjects />
      <TrustFeatures />
      <ClassgapHowItWorks />
      <ClassgapTestimonials />
      <StrongCTA />
    </>
  )
}

