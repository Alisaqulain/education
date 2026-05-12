import Link from 'next/link'

export default function ParentRegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900">Parent registration</h1>
        <p className="text-gray-600 mt-3">Use the main signup flow and choose <strong>Parent</strong> — we link your children after verification.</p>
        <Link href="/signup" className="btn-primary inline-block mt-8">
          Go to signup
        </Link>
      </div>
    </div>
  )
}
