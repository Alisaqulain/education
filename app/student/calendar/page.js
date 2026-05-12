export const metadata = { title: 'Calendar' }

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-8 pb-16">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Syncs with live batches, PTM slots and institute events.</p>
      <div className="mt-6 h-64 rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse" aria-hidden />
    </div>
  )
}
