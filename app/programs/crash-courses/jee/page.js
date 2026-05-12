import CrashLandingClient from '@/components/programs/CrashLandingClient'
import { SITE } from '@/data/site'

export const metadata = {
  title: `JEE Intensive Crash | ${SITE.name}`,
  description: 'Rank-focused drills, All India tests and 24×7 doubt queue for JEE Main & Advanced.',
}

export default function Page() {
  return <CrashLandingClient slug="jee" />
}
