/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Hide the round Dev Indicator bubble entirely (Next.js 16)
  devIndicators: false,
}

export default nextConfig
