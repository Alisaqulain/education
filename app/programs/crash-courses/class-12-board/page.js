import CrashLandingClient from '@/components/programs/CrashLandingClient'
import { SITE } from '@/data/site'

export const metadata = {
  title: `Class 12 Board Crash | ${SITE.name}`,
  description: 'PCM / PCB / Commerce sprint with simulation days and answer presentation coaching.',
}

export default function Page() {
  return <CrashLandingClient slug="class-12-board" />
}
