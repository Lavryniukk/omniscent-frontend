/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
module.exports = {
  env: {
    AUTH0_SECRET: "b56c269dda89f07233a819f705895fc7",
    AUTH0_BASE_URL: "https://localhost:3000",
    AUTH0_ISSUER_BASE_URL: "https://veritech.eu.auth0.com",
    AUTH0_CLIENT_ID: "GVclNvnrnWhdwGPoD4w2VKCVXhxs2OlE",
    AUTH0_AUDIENCE: "https://veritech.eu.auth0.com/api/v2/",
    AUTH0_CLIENT_SECRET:
      "LlL9Tghh-6vj9E-kkk_-xOUM2mKYsjUAOthlOuhyVCl-4Y4s7cgxMNnylV2tYe1D",
    SERVER_URL: "https://cleverize.onrender.com",
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
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
