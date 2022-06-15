/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;
