/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/contentility-website/',
  basePath: '/contentility-website',
}

module.exports = nextConfig 