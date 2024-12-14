/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placecats.com',
      },
    ],
  },
}

module.exports = nextConfig 