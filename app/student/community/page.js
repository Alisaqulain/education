import CommunityDiscordShell from '@/components/community/CommunityDiscordShell'

export const metadata = {
  title: 'Student Community',
  description: 'Batch channels, doubt rooms and announcements — Discord-style learning community.',
}

export default function StudentCommunityPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-8 pb-8 lg:pt-10">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 dark:text-white">Community</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Channels mirror your batches — real-time layer plugs into Mongo chat models.</p>
      </div>
      <CommunityDiscordShell />
    </div>
  )
}
