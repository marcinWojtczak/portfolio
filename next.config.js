/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  // output: 'export',
}

module.exports = nextConfig
