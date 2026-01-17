export const metadata = {
  title: 'Wishlist - Edgen Institute',
  description: 'Save your favorite teachers and courses on Edgen Institute.',
}

export default function StudentWishlist() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          My <span className="gradient-text">Wishlist</span>
        </h1>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8 mb-8">
          <p className="text-sm text-yellow-800 font-medium mb-1">Wishlist Feature Coming Soon</p>
          <p className="text-xs sm:text-sm text-yellow-700">
            Save your favorite teachers and courses for easy access later.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <p className="text-gray-600 mb-2">Your wishlist is empty</p>
          <p className="text-sm text-gray-500">Start exploring teachers and courses to add them here</p>
        </div>
      </div>
    </div>
  )
}



