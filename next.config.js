/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [{ source: '/why-edgen', destination: '/why-myndveda', permanent: true }]
  },
}

module.exports = nextConfig











