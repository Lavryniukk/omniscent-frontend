/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
module.exports = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["*"],
  },
};
module.exports = {
  headers: () => [
    {
      source: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};
