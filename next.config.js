/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','productimages.hepsiburada.net']
 },
}

module.exports = nextConfig
