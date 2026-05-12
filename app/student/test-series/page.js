import Link from 'next/link'

export const metadata = { title: 'Tests & Mocks' }

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-8 pb-16">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Test series & mocks</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Timed MCQs, negative marking, rank snapshots — backed by Exam + ExamAttempt schemas.</p>
      <Link href="/student/assignments" className="inline-flex mt-6 btn-secondary">Go to assignments</Link>
    </div>
  )
}
