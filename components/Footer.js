import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Edgen Institute</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Connecting passionate educators with learners through a transparent and trusted education ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors duration-200 text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-200 text-xs sm:text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-primary transition-colors duration-200 text-xs sm:text-sm">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/legal/terms-and-conditions" className="hover:text-primary transition-colors duration-200 text-xs sm:text-sm text-gray-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors duration-200 text-xs sm:text-sm text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/refund-cancellation" className="hover:text-primary transition-colors duration-200 text-xs sm:text-sm text-gray-400">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="hover:text-primary transition-colors duration-200 text-xs sm:text-sm text-gray-400">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="hover:text-primary transition-colors duration-200 text-xs sm:text-sm text-gray-400">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Credit */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">About</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Building the future of online education
            </p>
            <p className="text-gray-500 text-xs mb-2">
              <strong className="text-gray-400">A product by</strong>{' '}
              <a 
                href="https://bizsuncreative.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors duration-200 font-semibold"
              >
                Bizsun Creative
              </a>
            </p>
            <p className="text-gray-500 text-xs">
              Designed & Developed by{' '}
              <a 
                href="https://bizsuncreative.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors duration-200"
              >
                Bizsun Creative
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Edgen Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

