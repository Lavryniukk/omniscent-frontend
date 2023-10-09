/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
module.exports = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["s.gravatar.com", "vatars.githubusercontent.com"],
  },
};
