import HeroNew from '@/components/HeroNew'
import SocialProof from '@/components/SocialProof'
import SubjectsSection from '@/components/SubjectsSection'
import HowItWorksNew from '@/components/HowItWorksNew'
import WhyDifferent from '@/components/WhyDifferent'
import VisionMissionPreview from '@/components/VisionMissionPreview'
import StrongCTA from '@/components/StrongCTA'

export const metadata = {
  title: 'Edgen Institute - Learn. Teach. Grow From Anywhere in the World',
  description: 'Edgen Institute is a trusted education platform connecting passionate educators with learners through transparent, ethical, and technology-driven online learning.',
}

export default function Home() {
  return (
    <>
      <HeroNew />
      <SocialProof />
      <SubjectsSection />
      <HowItWorksNew />
      <WhyDifferent />
      <VisionMissionPreview />
      <StrongCTA />
    </>
  )
}

