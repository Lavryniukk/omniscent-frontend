/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
      config.node = {
        __dirname: true,
      };
    }
    return config;
  },
};
module.exports = {
  webpack5: true,
  // Other configurations can be added here
};
