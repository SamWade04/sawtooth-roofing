/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      // CompanyCam CDN — adjust to actual host when wiring real photos
      { protocol: 'https', hostname: '**.companycam.com' },
      { protocol: 'https', hostname: '**.amazonaws.com' },
    ],
  },
};

module.exports = nextConfig;
