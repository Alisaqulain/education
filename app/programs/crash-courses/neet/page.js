import CrashLandingClient from '@/components/programs/CrashLandingClient'
import { SITE } from '@/data/site'

export const metadata = {
  title: `NEET Ultra Crash | ${SITE.name}`,
  description: 'NCERT mastery, image-based MCQ packs and 300+ mocks for NEET UG.',
}

export default function Page() {
  return <CrashLandingClient slug="neet" />
}
