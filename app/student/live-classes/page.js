import Link from 'next/link'

export const metadata = { title: 'Live Classes' }

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-8 pb-16">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Live classes</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Zoom / Meet links, raise-hand, polls & attendance — scheduling hooks to Batch model.</p>
      <div className="mt-8 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-gray-500">
        No sessions in the next 24h · <Link className="text-primary font-semibold" href="/student/bookings">Open calendar</Link>
      </div>
    </div>
  )
}
