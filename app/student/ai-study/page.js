export const metadata = { title: 'AI Study Assistant' }

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-8 pb-16">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI study assistant</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Weak-topic detection, notes summary, quiz generation — connect to your LLM provider in production.</p>
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-6 shadow-lg">
        <p className="text-sm font-semibold opacity-90">Preview prompt</p>
        <p className="mt-2 text-sm leading-relaxed">&ldquo;Summarize today&apos;s organic chemistry notes into 5 flashcards.&rdquo;</p>
      </div>
    </div>
  )
}
