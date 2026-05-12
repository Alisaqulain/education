import CrashLandingClient from '@/components/programs/CrashLandingClient'
import { SITE } from '@/data/site'

export const metadata = {
  title: `Class 10 Board Crash | ${SITE.name}`,
  description: '60-day hyper-schedule for CBSE / ICSE / state boards with mocks and parent pulse reports.',
}

export default function Page() {
  return <CrashLandingClient slug="class-10-board" />
}
